import React from 'react';
import ReviewCards from './ReviewCards';

const Reviews = () => {
  return (
    <>
    <a className='anchor' id='review-section'></a>
    <div className='content' id='review-content'>
      <div id="review-div">
        <div className='wrapper'>
        <h2 className="section-header">Reviews</h2>
        <h4 id="review-subheading">Words From Our Clients</h4>
            <ReviewCards />
          </div>
        </div>
    </div>
    </>
  )
}

export default Reviews