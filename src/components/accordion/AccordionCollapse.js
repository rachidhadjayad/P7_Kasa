import React, { useState } from 'react';
import arrowUp from '../../assets/images/arrow_back_ios-24px-2.png';
import './accordion.css';


const Accordion = (props) => {

    const {title, description} = props;
    
    let tabDescription = [];

    if (Array.isArray(description)) {
        for (let i = 0; i < description.length; i++) {
            tabDescription.push(description[i])
        }
    }else{
        tabDescription[0] = description;
    }

    const [selected, setSelected] = useState(null)

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
                    <h2>{title}</h2>
                    <span className='chevronArrow'>{selected === i ? <img className='rotateArrow' src={arrowUp} alt="img"/> : <img src={arrowUp} alt="img"/>}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                {tabDescription.map((item, i) => (
                    <p key={i}>
                        <span>{item}</span><br/>
                    </p>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;