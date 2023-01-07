import React, { useState } from 'react';
import arrowUp from '../../assets/images/arrow_back_ios-24px-2.png';
import './accordion.css';


const Accordion = (props) => {
    const data = props.data;
    const y = props.index;

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
 
    return (
        <div className='wrapper'>
            <div className='accordion'>
                <div className='item'>
                        <div className='title' onClick={() => toggle(y)}>
                <h2>{data.about_title}</h2>
                <span className='chevronArrow'>{selected === y ? <img className='rotateArrow' src={arrowUp} alt="img"/> : <img src={arrowUp} alt="img"/>}</span>
                        </div>
                <div className={selected === y ? 'content show' : 'content'}>{data.about_description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;