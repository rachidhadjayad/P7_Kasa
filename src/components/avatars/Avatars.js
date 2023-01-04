import React from 'react';
import './avatars.css'


const Avatars = (props) => {
    const {name, picture} = props.infoProfil;
    return (
        <div className='avatar-container'>
            <div className='avatar-name'>
                <p>{name}</p>
            </div>
            <div className='avatar-img'>
                <img src={picture} alt='Avatar'></img>
            </div>
        </div>
    );
};

export default Avatars;