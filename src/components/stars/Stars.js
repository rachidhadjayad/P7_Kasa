import React from 'react';
import fullstar_img from '../../assets/images/star_rate-24px-2.svg';
import emptystar_img from '../../assets/images/star_rate-24px-5.svg';
import './stars.css'


const FullStar = () => {
    return <img src={fullstar_img} alt='star'/>
}

const EmptyStar = () => {
    return <img src={emptystar_img} alt='star'/>
}

const Stars = (props) => {
    const starsPart = parseInt(props.starsPart);

    const intStart = parseInt(starsPart);
    let startStatusFull = [];
    let startStatusEmty= [];

    for(let i =0; i < intStart; i++){
        startStatusFull[i] = 1;
    }


    for(let i = intStart; i < 5; i++){
        startStatusEmty[i] = 0;
    }

    return (
        <div className='stars'>
            {startStatusFull.map((item, i) => (
                <EmptyStar data={item} index={i} key={i}/>
            ))}
            {startStatusEmty.map((item, i) => (
                <FullStar data={item} index={i} key={i}/>
            ))}
           
        </div>
    );
};

export default Stars;