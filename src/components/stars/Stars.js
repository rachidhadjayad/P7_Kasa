/* eslint-disable no-unused-vars */
import React from 'react';
import fullstar_img from '../../assets/images/star_rate-24px-2.svg';
import emptystar_img from '../../assets/images/star_rate-24px-5.svg';
import './stars.css'


const FullStar = () => {
    return <img src={fullstar_img} alt='star'/>
}
console.log(FullStar)

const EmptyStar = () => {
    return <img src={emptystar_img} alt='star'/>
}

const Stars = (item, ) => {
    return (
        <div className='stars'>
        </div>
    );
};

export default Stars;