import React from 'react'
import { FaTooth } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-purple-100 py-10'>
      <div className='container mx-auto flex items-center md:flex-row flex-col'>
        <div className='md:w-4/12 text-left'>
          <button className='flex items-center'>
            <FaTooth className='text-3xl text-purple-600' />
            <span className='text-4xl font-semibold'>Dentist</span>
          </button>
                  <p>Mirpur-1, Dhaka-1216</p>
                  <p>(+880) 1987-654321</p>
                  <p>dentist@gmail.com</p>
        </div>
        <div className='md:w-4/12 flex flex-col mx-auto md:my-0 my-5'>
          <h3 className='text-left text-2xl'>Useful Links</h3>
          <hr className='w-3/12 h-1 bg-purple-600 mb-2' />
          <button className='text-left'>Services</button>
          <button className='text-left'>Make Appointment</button>
          <button className='text-left'>About</button>
          <button className='text-left'>Cart</button>
        </div>
        <div className='md:w-4/12 mx-auto w-10/12'>
          <h3 className='text-left text-2xl'>Join For The Newsletter</h3>
          <hr className='w-3/12 h-1 bg-purple-600 mb-2' />
          <form action='' className='text-left bg-white md:w-max rounded-xl'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Your Email'
              className='rounded-xl text-xl px-3 py-2 outline-none'
            />
            <button className='bg-purple-600 text-white rounded-xl px-3 py-2 text-xl w-full md:mt-0 mt-2'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
