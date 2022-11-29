import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='orange flex items-center justify-evenly py-28'>
            <div className="">
                <h2 className='text-5xl font-semibold'>New Collection For Fall</h2>
                <p className='text-base mt-4'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button onClick={() => navigate('/shop')} className='w-52 h-14 bg-orange-400 mt-5 rounded-lg'>Shop Now</button>
            </div>
            <div className="home-right-side">
                <div>
                    <img src={require("../../images/image.png")} alt="" />
                </div>
            </div>



        </div>
    );
};

export default Home;