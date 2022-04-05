import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const { name, img, ratings, reviews } = review;
    return (
        <div className='col-md-4 mt-4'>
            <img className='rounded-circle' src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p><small>Ratings:{ratings} stars</small></p>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;