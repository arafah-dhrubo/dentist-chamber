import React from 'react'
import { useHistory } from 'react-router'

const About = () => {
  const history = useHistory();
  return (
    <div className='bg-purple-50 py-10'>
      <div className='container flex md:flex-row flex-col justify-between items-center'>
        <div className='md:w-6/12 w-full h-full' >
          <img
            src='https://assets.website-files.com/601d7e7320ecf079f58169fd/601dcd99261d9f4a683cc648_image-1-home-about-dentist-template-p-800.jpeg'
            alt=''
            className='md:p-10 md:mt-0 my-5 w-10/12 mx-auto'
          />
        </div>
        <div className='md:w-6/12 w-full md:pl-10 px-2 md:px-0'>
          <div>
            <h1 className='font-semibold text-indigo-900 text-left'>
              About Us
            </h1>
            <hr className='h-1 w-3/12 bg-indigo-900' />
          </div>
          <div className='my-5'>
            <h1 className='font-semibold text-indigo-900 text-left text-3xl md:text-5xl'>
              Our team has only one mission: Make you smile
            </h1>
            <p className='text-xl text-left font-semibold text-gray-700'>
              "Let's make a beautiful smile in your face"- is the only benefit
              of Our team. Support us to continue our steps
            </p>
          </div>
          <div className='flex items-center overflow-hidden md:flex-row flex-col md:text-left text-center'>
            <img
              src='https://assets.website-files.com/601d7e7320ecf079f58169fd/601dcd98ebb636bdcc24b2db_image-home-about-dentist-template.jpg'
              alt='Dr. John Doe'
              className='rounded-full shadow-xl'
            />
            <div className='ml-5'>
              <h1 className='text-indigo-900 text-2xl font-semibold '>
                Dr. John Doe
              </h1>
              <p>Lead Dentist at Dentist</p>
            </div>
          </div>
          <button className='text-white bg-purple-600 px-4 py-4 rounded-xl mr-5 hover:bg-purple-100 font-semibold hover:text-purple-600 '
          onClick={()=>history.push('/about')}>
            About Our Clinic
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
