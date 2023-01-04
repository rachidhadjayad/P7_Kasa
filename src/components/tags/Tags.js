import React from 'react';
import './tags.css'


const Tags = (props) => {
    const tagsPart = props.tagsPart;
    return (
        <div className='tag-container'>
             {tagsPart.map((item_tag, index) => (
                <span className='tags-content' key={index}>{item_tag}</span>
            ))}
        </div>
    );
};

export default Tags;