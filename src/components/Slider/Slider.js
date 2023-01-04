import React, { useEffect, useState } from 'react';
import SliderContent from '../sliderContent/SliderContent';
import Arrows from '../arrows/Arrows';
import "./slider.css";


const Slider = (props) => {

    const pictures = props.imagesSlide;
    const len = pictures.length - 1;

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, len]);
    
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} sliderImage={pictures}/>
            <Arrows
                prevSlide={()=>{
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }}

                nextSlide={()=>{
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }}
            />
        </div>
    );
};

export default Slider;