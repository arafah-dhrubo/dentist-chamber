import React from 'react'
import { useParams } from 'react-router-dom'

const Service = ({ services, handleAddServices }) => {
  const { id } = useParams()
  const service = services.filter(item => item.id == id)[0]
  return (
    <div className='container mx-auto flex flex-col justify-center my-10'>
      <img src={service.image} className='w-6/12 rounded-xl mx-auto' />
      <div className='w-6/12 mx-auto text-left mt-3'>
        <h1 className='text-4xl font-semibold'>{service.name}</h1>
        <p>{service.short}</p>
        <hr className='w-2/12 h-1 mb-5 bg-purple-900' />
        <h1 className='text-2xl text-indigo-900'>Description:</h1>

        <p>{service.description}</p>
        <h1 className='text-3xl mt-5'>Price: ${service.price}</h1>
        <button
          className='text-white bg-purple-600 px-4 py-4 rounded-xl mr-5 hover:bg-purple-100 font-semibold text-sm hover:text-purple-600 mt-5'
          onClick={() => handleAddServices(service)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Service
