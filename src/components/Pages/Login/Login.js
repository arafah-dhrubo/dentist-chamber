import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../../hooks/useAuth'

const Login = () => {

  const history = useHistory()
  const location = useLocation()
  const redirect_url = location.state?.from || '/'
  const {user, handleGoogleSignIn, handleSignInUser, setUser } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    handleSignInUser(email, password)
      .then(result => {
        history.push(redirect_url)
        window.location.reload()
    }) .catch(err=>alert(err.message))
  }

  const handleGoogleLogin = () => {
      handleGoogleSignIn().then(result => {
       // setUser(result.user)
      history.push(redirect_url)
    })
  }
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)

  return (
    <div
      className='bg-purple-50 md:w-5/12 w-11/12 mx-auto rounded-xl p-10 m-10
'
    >
      <h2 className='text-2xl font-bold'>Please Login</h2>
      <form onSubmit={handleLogin} className='text-left my-5'>
        <div>
          <label htmlFor='email' className='font-semibold text-gray-900'>
            Email:
          </label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            onChange={handleEmail}
            required
            className='text-md outline-none px-3 py-2 rounded-xl w-full border border-purple-900'
          />
        </div>
        <div className='mt-2'>
          <label htmlFor='password' className='font-semibold text-gray-900'>
            Password:
          </label>
          <br />
          <input
            type='password'
            name='passowrd'
            id='password'
            onChange={handlePassword}
            required
            className='text-md outline-none px-3 py-2 rounded-xl w-full border border-purple-900'
          />
        </div>
        <button
          type='submit'
          className='bg-purple-600 text-white px-3 py-2 rounded-xl mt-3 w-full'
        >
          Login
        </button>
      </form>
      <br />
      <p>
        New User?
        <button
          className='text-blue-600 underline'
          onClick={() => history.push('/register')}
        >
          Register
        </button>
      </p>
      <p className='flex items-center justify-center my-10'>
        <hr className='h-1 bg-indigo-600 w-3/12' /> &nbsp; or &nbsp;
        <hr className='h-1 bg-indigo-600 w-3/12' />
      </p>
      <button
        onClick={() => {
          handleGoogleLogin()
        }}
        className='w-full shadow-xl bg-white px-3 py-2 rounded-full flex items-center justify-center'
      >
        Google Sign In
        <FcGoogle className='text-4xl ml-5' />
      </button>
    </div>
  )
}

export default Login
