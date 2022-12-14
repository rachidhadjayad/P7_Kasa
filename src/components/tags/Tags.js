import React from 'react';
import './tags.css'

const Tags = (props) => {
    return (
        <div className='tags-container'>
            <h3 className='tags-content'>{props.content}</h3>
        </div>
    );
};

export default Tags;