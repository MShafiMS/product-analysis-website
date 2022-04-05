import React from 'react';
import useProducts from '../../hooks/useProducts';
import Review from '../Review/Review';
// import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useProducts();
    return (
        <div className='container'>
            <h1 className='text-center text-danger'>Customer Reviews</h1>
            <div className='row'>
            {
                 reviews.map(review=><Review 
                    key={review.id}
                    review={review}
                    ></Review>)   
                }
            </div>
        </div>
    );
};

export default Reviews;