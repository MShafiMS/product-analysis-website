import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const { name, img, ratings, reviews } = review;
    return (
        <div className='col-md-4 mt-4'>
            <img className='rounded-circle mx-auto d-block' src={img} alt="" />
            <div>
                <h4 className='text-center mt-2 text-danger'>{name}</h4>
                <p className='text-center text-secondary'><small>Rating : <span className='text-success fw-bold'>{ratings} Stars</span></small></p>
                <p className='text-center'>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;