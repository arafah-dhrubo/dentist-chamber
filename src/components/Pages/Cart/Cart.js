import React from 'react'
import { useHistory } from 'react-router'

const Cart = ({
  cartItems,
  handleAddServices,
  handleRemoveServices,
  handleCartClear,
  totalPrice,
  totalServices
}) => {
  const history = useHistory()
  const cart = cartItems.map(item => (
    <div
      key={item.id}
      className='flex justify-between p-5 shadow-md my-5 rounded-xl items-center'
    >
      <div className='w-4/12'>
        <img src={item.image} alt='' className='rounded-xl' />
      </div>
      <div className='w-5/12 text-left'>
        <h1 className='text-2xl font-semibold'>{item.name}</h1>
        <p>{item.short}</p>
        <h4 className='mt-10 text-5xl text-left text-purple-600'>
          ${item.price} X{item.quantity}
        </h4>
      </div>
      <div className='text-center w-3/12'>
        <button
          className='text-4xl text-purple-900 bg-purple-50 rounded-full px-3 py-1'
          onClick={() => handleAddServices(item)}
        >
          +
        </button>
        <h1 className='text-5xl my-3'>${item.price * item.quantity}</h1>
        <button
          className='text-4xl text-purple-900 bg-purple-50 rounded-full px-3 py-1'
          onClick={() => handleRemoveServices(item)}
        >
          -
        </button>
      </div>
    </div>
  ))
  return (
    <div className='container mx-auto my-10'>
      {cart}
      {cartItems.length === 0 ? (
        <div>
          <img
            src='https://www.nooralamkhansujon.com/images/ecommerce.png?9b6e48eb59d101335bb7130749383451'
            alt=''
            className='mx-auto'
          />
          <h1 className='text-5xl'>Your Cart Is Empty</h1>
        </div>
      ) : (
        <div className='flex justify-around bg-purple-50 items-center py-5 mb-5 rounded-xl'>
          <div className='font-semibold text-2xl'>
            Total Services: {totalServices}
          </div>
          <div className='font-semibold text-2xl'>
            Total Price: {totalPrice}
          </div>

            <div>
              
            <button
              className='w-full md:w-auto text-white bg-red-600 px-4 py-4 rounded-xl md:mr-5 hover:bg-red-200 font-semibold hover:text-red-600'
              onClick={() => handleCartClear()}
            >
              Clear Cart
            </button>
            <button
              className='w-full md:w-auto text-white bg-purple-600 px-4 py-4 rounded-xl md:mr-5 hover:bg-purple-200 font-semibold hover:text-purple-600'
              onClick={() => {
                history.push('/checkout')
                handleCartClear()
              }}
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
