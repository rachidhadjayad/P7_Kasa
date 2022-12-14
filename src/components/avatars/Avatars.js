import React from 'react';


const Avatars = (props) => {
    return (
        <div className='avatar-container'>
            <div className='avatar-name'>
                <p>{props.name}</p>
            </div>
            <div className='avatar-img'>
                <img src={props.picture} alt='Avatar'></img>
            </div>
        </div>
    );
};

export default Avatars;