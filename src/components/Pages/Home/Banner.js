import React from 'react'
import { useHistory } from 'react-router'

const Banner = () => {
  const history = useHistory();
  return (
    <div className='flex justify-between md:h-screen items-center md:flex-row flex-col mb-5'>
      <div className='md:w-6/12 w-full md:px-20 px-2'>
        <h1 className='text-left text-indigo-900 text-4xl text-center my-5 md:text-6xl font-bold'>
          A <span className='text-purple-600'>dentistry clinic</span> you can
          trust
        </h1>
        <p className='text-left my-5 text-xl'>
          Consult with our dentists and Checkup your tooth today to make a
          healthy smile
        </p>
        <div className='md:text-left mt-5'>
          <button className='w-full md:w-auto text-white bg-purple-600 px-4 py-4 rounded-xl md:mr-5 hover:bg-purple-100 font-semibold hover:text-purple-600' onClick={()=>history.push('/contact')}>
            Book an Appointment
          </button>
          <button
            className='w-full md:w-auto border-4 px-4 py-3 hover:py-4 rounded-xl border-purple-600 hover:bg-purple-600 hover:text-white font-semibold md:my-0 my-2
'
          >
            Browse Services
          </button>
        </div>
      </div>
      <div className='border h-full w-11/12 md:w-6/12'>
        <img
          src='https://i.pinimg.com/originals/fe/de/ca/fedecae4429abb616bde15d236d625bb.jpg'
          alt=''
          className='h-full w-full'
        />
      </div>
    </div>
  )
}

export default Banner
