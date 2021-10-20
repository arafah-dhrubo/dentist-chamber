import React from 'react'
import { useHistory } from 'react-router'

const NotFound = () => {
    const history = useHistory();
  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <h1 className='text-9xl font-bold text-purple-600'>404</h1>
      <h4 className='text-3xl font-bold text-gray-900'>Page Not Found</h4>
      <button
        className='text-white bg-purple-600 px-4 py-4 rounded-xl mr-5 hover:bg-purple-100 font-semibold text-sm hover:text-purple-600 mt-5'
        onClick={() => history.push('/')}
      >
        Back To Home Page
      </button>
    </div>
  )
}

export default NotFound
