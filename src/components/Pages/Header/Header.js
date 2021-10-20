import React from 'react'
import './Header.css'
import { FaTooth } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ totalServices }) => {
  const { user, handleSignOut } = useAuth()
  const history = useHistory()
  const linkHandler = link => history.push(link)
  return (
    <div className='shadow'>
      <div className='container mx-auto flex md:flex-row flex-col py-3'>
        <div className='md:w-2/12 w-full text-left'>
          <button
            onClick={() => linkHandler('/home')}
            className='flex items-center md:mx-0 mx-auto'
          >
            <FaTooth className='text-3xl text-purple-600' />
            <span className='text-4xl font-semibold'>Dentist</span>
          </button>
        </div>
        <div className='md:w-5/12 w-full mt-3 flex md:pr-5 pr-0'>
          <button
            className='li md:mx-5 md:px-5 px-0 mx-2 px-3'
            onClick={() => linkHandler('/home')}
          >
            Home
          </button>
          <button
            className='li md:mx-5 md:px-5 px-0 mx-2 px-3'
            onClick={() => linkHandler('/about')}
          >
            About
          </button>
          <button
            className='li md:mx-4 md:px-5 px-0 mx-2 px-3 flex items-center'
            onClick={() => linkHandler('/cart')}
          >
            Cart{' '}
            {totalServices > 0 ? (
              <span className='bg-purple-600 rounded-full px-1 text-white ml-1'>
                {totalServices}
              </span>
            ) : (
              <span></span>
            )}
          </button>
          <button
            className='li md:mx-5 md:px-5 px-0 mx-2 px-3'
            onClick={() => linkHandler('/contact')}
          >
            Contact
          </button>
        </div>
        <div className='md:w-6/12  flex md:justify-between justify-around md:pl-5 mt-3 md:mt-0'>
          <button
            className='shadow-md rounded-full py-3 px-6 bg-purple-600 text-white'
            onClick={() => linkHandler('/contact')}
          >
            Appointment
          </button>
          {user?.displayName ? (
            <div className='flex items-center justify-between'>
              <h1 className='mr-5 text-xl font-semibold text-purple-600'>
                hi! {user.displayName}
              </h1>
              <button
                className='shadow-md rounded-full py-3 px-6  bg-indigo-600 text-white'
                onClick={() => handleSignOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-between'>
              <button
                className='shadow-md rounded-full py-3 px-6  bg-indigo-600 text-white'
                onClick={() => linkHandler('/login')}
              >
                Login
              </button>
              <button
                className='shadow-md rounded-full py-3 px-6 border-purple-600 border-2'
                onClick={() => linkHandler('/register')}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
