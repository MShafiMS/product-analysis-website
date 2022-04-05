import React from 'react';
import { Button } from 'react-bootstrap';
import Image from '../../images/furniture.jpg';
import './home.css'

const Home = () => {
    return ( 
        <div>
            <div className='d-flex row mx-auto'>
                <div className='col-md-8 text'>
                <h1>Explore Our Furniture</h1>
                <h1 className='text-danger'>And Home Furnishing Range...!</h1>
                <p>Whether you just moved into a new home or looking to revamp your current one, we at Regal Furniture are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
                <Button variant="outline-danger">Explore</Button>{' '}
                </div>
                <div className='col-md-4'>
                    <img className='img-fluid' src={Image} alt="furniture" />
                </div>
            </div>
            <div>
                <h1 className='text-center'>Customer Reviews</h1>
            </div>
        </div>
    );
};

export default Home;