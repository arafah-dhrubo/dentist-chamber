import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useHistory } from 'react-router'
import useFirebase from '../../../hooks/useFirebase'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const { handleGoogleSignIn, handleCreateUser } = useFirebase()

  const handleRegister = e => {
    e.preventDefault()
    console.log(name, email, password)
    handleCreateUser(name, email, password)
  }

  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handleName = e => setName(e.target.value)

  return (
    <div
      className='bg-purple-50 md:w-5/12 w-11/12 mx-auto rounded-xl p-10 m-10
'
    >
      <h2 className='text-2xl font-bold'>Create New Account</h2>
      <form onSubmit={handleRegister} className='text-left my-5'>
        <div>
          <label htmlFor='name' className='font-semibold text-gray-900'>
            Name:
          </label>
          <br />
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleName}
            required
            className='text-md outline-none px-3 py-2 rounded-xl w-full border border-purple-900'
          />
        </div>

        <div className='mt-3'>
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
        <div className='mt-3'>
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
         Register

        </button>
      </form>
      <br />
      <p>
        Already User?
        <button
          className='text-blue-600 underline'
          onClick={() => history.push('/login')}
        >
          Login
        </button>
      </p>
      <p className='flex items-center justify-center my-10'>
        <hr className='h-1 bg-indigo-600 w-3/12' /> &nbsp; or &nbsp;
        <hr className='h-1 bg-indigo-600 w-3/12' />
      </p>
      <button
        onClick={() => handleGoogleSignIn()}
        className='w-full shadow-xl bg-white px-3 py-2 rounded-full flex items-center justify-center'
      >
        Google Sign In
        <FcGoogle className='text-4xl ml-5' />
      </button>
    </div>
  )
}

export default Register
