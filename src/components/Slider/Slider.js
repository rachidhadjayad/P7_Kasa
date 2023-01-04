import React, { useEffect, useState } from 'react';
import SliderContent from '../../components/sliderContent/sliderContent';
import Arrows from '../../components/Arrows/Arrows';
import "./Slider.css";

const Slider = (props) => {

    const pictures = props.imagesSlide;
    const len = pictures.length - 1;

    // console.log(len);
    // console.log(pictures);

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