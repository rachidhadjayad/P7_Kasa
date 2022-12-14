import React, { useState } from 'react';
import './accordion.css';
import arrowUp from '../../assets/images/arrow_back_ios-24px-2.png';


const Accordion = (props) => {
    const [selected, setSelected] = useState(null)
    // console.log(props);

    let i = props.index;

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    
    return (
        <div className='wrapper'>
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                <h2>{props.data.about_title}</h2>
                <span className='chevronArrow'>{selected === i ? <img className='rotateArrow' src={arrowUp} alt="img"/> : <img src={arrowUp} alt="img"/>}</span>
                        </div>
                <div className={selected === i ? 'content show' : 'content'}>{props.data.about_description}
                    </div>
            </div>
        </div>
    );
};

export default Accordion;