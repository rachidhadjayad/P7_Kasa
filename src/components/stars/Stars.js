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
    let startStatus = [0,0,0,0,0];

    for(let i =0; i < intStart; i++){
        startStatus[i] = 1;
    }

    return (
        <div className='stars'>
            {startStatus.map((item, i) => (
                <div  key={i}>
                    {item === 1 ? <FullStar data={item} index={i}/> : <EmptyStar data={item} index={i}/>}
                </div>
            ))}
        </div>
    );
};

export default Stars;