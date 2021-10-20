import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFeedback from '../../../hooks/useFeedBack'


const Feedback = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const feedback = useFeedback().map(review => (
    <div className=''>
      <div className='w-10/12 md:w-6/12 mx-auto text-center'>
        <img
          src={review.image}
          alt=''
          className='rounded-full w-20 text-center mx-auto'
        />
        <h1 className='text-xl font-bold text-indigo-900'>{review.name}</h1>
      </div>
      <div className=''>
        <span className='text-8xl text-purple-200'>"</span>
        {review.comment}
      </div>
    </div>
  ))
  return (
    <div className='container my-20'>
      <div>
        <h1 className='text-xl font-bold text-indigo-900'>Our Customers</h1>
        <hr className='w-2/12 mx-auto bg-indigo-900 h-1' />
        <div className='my-5'>
          <h1 className='w-10/12 md:w-6/12 mx-auto font-semibold text-3xl md:text-4xl text-indigo-900'>
            See what our over 1,000 happy customers have to say
          </h1>
          <p className='md:w-6/12 mx-auto text-gray-700 font-semibold'>
            "Let's make a beautiful smile in your face"- is the only benefit of
            Our team. Support us to continue our steps
          </p>
        </div>
      </div>
      <div className='w-8/12 md:w-6/12 mx-auto'>
        <Slider {...settings} className='p-5'>
          {feedback}
        </Slider>
      </div>
    </div>
  )
}

export default Feedback
