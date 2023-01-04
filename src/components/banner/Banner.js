import React from 'react';
import './banner.css';



const Banner = (props) => {
    return (
        <div>
            <div className='background-title'>
                <div className='title-img'>
                    <img src={props.img} alt="home img"/>
                    {props.title ? <h2 className='home_title'>{props.title}</h2> : null}
                </div>
                    <div className='background-home-title'>
                </div>
            </div>
        </div>
    );
};

export default Banner;