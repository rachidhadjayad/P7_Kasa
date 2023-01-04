import React from 'react';


const SliderContent = ({activeIndex, sliderImage}) => {

    return (
        <div className='slideshow'>
            {sliderImage.map((slide, index) => (
                <div className={index === activeIndex ? 'slides active': 'inactive'} key={index}>
                    <img className='slide-image' src={slide} alt=""/>
                </div>
            ))}
            <span className='count-image-slider'>{activeIndex + 1}/{sliderImage.length}</span>
        </div>
    );
};

export default SliderContent;