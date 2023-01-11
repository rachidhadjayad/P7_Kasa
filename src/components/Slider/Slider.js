import React, { useEffect, useState } from 'react';
import SliderContent from '../slidercontent/sliderContent';
import Arrows from '../arrows/arrows';
import "./slider.css";


const Slider = (props) => {

    const pictures = props.imagesSlide;
    const len = pictures.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        },20000);
        return () => clearInterval(interval);
    }, [activeIndex, len]);
    
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} sliderImage={pictures}/>
            {pictures.length !== 1 ?
            <Arrows
                prevSlide={()=>{
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }}

                nextSlide={()=>{
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }}
            />
            : null}
        </div>
    );
};

export default Slider;