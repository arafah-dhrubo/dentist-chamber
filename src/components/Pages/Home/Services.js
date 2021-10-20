import React from 'react'
import { useHistory } from 'react-router'

import './Home.css'
const Services = ({ handleAddServices, services }) => {
  const history = useHistory();
  const service = services.map(item => (
    <div className=''>
      <div className='md:w-10/12 shadow-md mx-auto rounded-xl mb-5'>
        <img src={item.image} alt={item.name} className='w-full rounded-xl p-2 rounded-2xl' />
        <div className='px-5 bg-white py-2'>
          <h3 className='text-2xl font-semibold mt-3'>{item.name}</h3>
          <h4 className='my-2'>{item.short}</h4>
          <h1 className='text-4xl font-semibold'>${item.price}</h1>
        </div>
        <div className='flex justify-between px-5 pb-3 bg-white rounded-2xl'>
          <button className='text-white bg-purple-600 px-4 py-4 rounded-xl mr-5 hover:bg-purple-100 font-semibold text-sm hover:text-purple-600' onClick={()=>handleAddServices(item)}>
            Add To Cart
          </button>
          <button className='border-2 px-4 py-3 hover:py-4 rounded-xl border-purple-600 hover:bg-purple-600 hover:text-white font-semibold' onClick={()=>history.push(`service/${item.id}`)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="my-20" id="services">
      <div className='container mx-auto w-11/12'>
        <h1 className='text-left text-indigo-900 font-bold'>
          Our Services
        </h1>
        <hr className="h-1 w-3/12 bg-indigo-900"/>
        <div className='flex items-center mt-5 md:flex-row flex-col'>
          <div className='w-11/12 md:w-8/12'>
            <h1 className='md:text-5xl text-3xl font-semibold text-indigo-900 text-left'>
              Our team of dentists can help with a variety of dental services
            </h1>
          </div>
          <div className='md:w-4/12 md:mt-0 mt-2'>
            <button className='text-white bg-purple-600 px-4 py-4 rounded-xl mr-5 hover:bg-purple-100 font-semibold hover:text-purple-600' onClick={()=>history.push('/contact')}>
              Book an Appointment
            </button>
          </div>
        </div>
       
        <div className='flex flex-wrap my-10'>{service}</div>
      </div>
    </div>
  )
}

export default Services
