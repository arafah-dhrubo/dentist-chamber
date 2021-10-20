import React from 'react'

const Contact = () => {
  return (
    <div
      className='flex container mx-auto bg-purple-50 m-10 rounded-xl
p-10 md:flex-row flex-col'
    >
      <div className='md:w-6/12 p-5'>
        <h1 className='text-4xl font-bold'>Book Your Appointment</h1>
        <p className='md:w-8/12 mx-auto my-5'>
          "Let's make a beautiful smile in your face"- is the only benefit of
          Our team. Support us to continue our steps
        </p>
        <div>
          <h1 className='text-xl font-semibold text-gray-900 text-left'>
            More Information
          </h1>
          <hr className='w-2/12 h-1 bg-gray-900 mb-5' />
          <div className='flex items-center mb-3'>
            <img
              src='https://assets.website-files.com/601d7e7320ecf079f58169fd/60244775cba85b6f29876522_icon-1-contact-dentist-template.svg'
              alt=''
              className='rounded-full'
            />
            <div className='ml-3 text-left'>
              <h1 className='font-semibold'>Address</h1>
              <p className='font-semibold'>Mirpur Dhaka-1216</p>
            </div>
          </div>
          <div className='flex items-center mb-3'>
            <img
              src='https://assets.website-files.com/601d7e7320ecf079f58169fd/6024477497258f6b5b081001_icon-2-contact-dentist-template.svg'
              alt=''
              className='rounded-full'
            />
            <div className='ml-3 text-left'>
              <h1 className='font-semibold'>Email</h1>
              <p className='font-semibold'>dentist@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center mb-3'>
            <img
              src='https://assets.website-files.com/601d7e7320ecf079f58169fd/6024477597258fe357081002_icon-3-contact-dentist-template.svg'
              alt=''
              className='rounded-full'
            />
            <div className='ml-3 text-left'>
              <h1 className='font-semibold'>Phone</h1>
              <p className='font-semibold'>(+880) 1987-654321</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='bg-white rounded-xl
md:w-6/12 '
      >
        <form action='' className='p-10 shadow-xl'>
          <div className='flex text-left justify-between md:flex-row flex-col'>
            <div>
              <label htmlFor='name' className='font-semibold'>
                Name
              </label>
              <br />
              <input
                type='text'
                name='name'
                id='name'
                className='outline-none border border-indigo-200 md:px-5 py-3 rounded-xl'
              />
            </div>
            <div>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <br />
              <input
                type='email'
                name='email'
                id='Email'
                className='outline-none border border-indigo-200  md:px-5 py-3 rounded-xl'
              />
            </div>
          </div>
          <br />
          <div className='flex justify-between text-left md:flex-row flex-col'>
            <div>
              <label htmlFor='phone' className='font-semibold'>
                Phone Number
              </label>
              <br />
              <input
                type='text'
                name='phone'
                id='phone'
                className='outline-none border border-indigo-200  md:px-5 py-3 rounded-xl'
              />
            </div>
            <div>
              <label htmlFor='service' className='font-semibold'>
                Service
              </label>
              <br />
              <input
                type='text'
                name='service'
                id='service'
                className='outline-none border border-indigo-200  md:px-5 py-3 rounded-xl'
              />
            </div>
          </div>
          <br />
          <div className='text-left'>
            <label htmlFor='message' className='font-semibold'>
              Message
            </label>
            <br />
            <textarea
              name='message'
              id='message'
              cols='auto'
              rows='3'
              className='outline-none border border-indigo-200 md:px-5 py-3 rounded-xl'
            ></textarea>
          </div>
          <br />
          <input
            type='submit'
            value='Submit'
            className='w-full md:w-8/12 text-white bg-purple-600 px-4 py-4 rounded-xl md:mr-5 hover:bg-purple-100 font-semibold hover:text-purple-600'
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
