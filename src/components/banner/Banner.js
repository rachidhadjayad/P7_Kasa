import React from 'react';
import './banner.css';


const Banner = (props) => {
    const pathname = window.location.pathname

    return (
        <div>
            <div className='background-title'>
                <div className='title-img'>

                    {pathname === "/A-propos" ?
                    <div>
                        <img className='desktop' src={props.img} alt="home img"/> 
                        <img className='mobile' src={props.imgMobile} alt="home img"/> 
                    </div>
                     : <img src={props.img} alt="home img"/>}

                    {props.title ? <h2 className='home_title'>{props.title}</h2> : null}
                </div>
                    <div className='background-home-title'>
                </div>
            </div>
        </div>
    );
};

export default Banner;