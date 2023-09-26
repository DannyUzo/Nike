import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
import { Bounce,Flip, Hinge, JackInTheBox, Roll, Rotate, Slide,Fade, Zoom } from "react-awesome-reveal";


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <Zoom>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our
         satisfied customers about their exceptional
         experiences with us. 
      </p>
      </Zoom>
      <Bounce>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
         <ReviewCard key={review.customerName}
         imgURL={review.imgURL}
         feedback={review.feedback}
         customerName={review.customerName}
         rating={review.rating}
         />
        ))}
      </div>
      </Bounce>
    </section>
  )
}

export default CustomerReviews