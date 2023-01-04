import React from 'react';
import { useState } from 'react';

const Slideshow = (props) => {
    const imagesSlide = props.imagesSlide;

    console.log(imagesSlide);
    
    const [slideId, setSlideId] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow-container-img');
        if(!slideshowImg){
            return 0;
        }
        return slideshowImg.width;
    }

    const OnNext = () => {
        if(slideId === imagesSlide.length -1){
            setSlideId(0)
        } else {
            setSlideId(slideId +1)
        }
    }

    const onPrev = () => {
        if(slideId === 0){
            setSlideId(imagesSlide.length - 1)
        }
    }

    return (
        <div className='slideshow'>
            {/* <div className='slideshow-container' style={{transform: `translateX(-${slideId * imgSize()}px)`}}>
                {imagesSlide.map((picture) => <img className='slideshow-container-img' src={picture} key={picture} alt="img"/>)}
            </div>
            <div className={'slideshow-controler'}>
                <img src="../../images/arrow_back_ios-24px-2.png" className={'chevron-prev'} onClick={onPrev} alt="img"/>
                <img src="../../images/arrow_back_ios-24px-2.png" className={'chevron-next'} onClick={OnNext} alt="img"/>
            </div>
            <div className={'slideshow-id'}>{slideId +1} / {imagesSlide.length}</div> */}
        </div>
    );
};

export default Slideshow;