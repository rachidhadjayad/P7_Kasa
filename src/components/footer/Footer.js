import React from 'react';
import './footer.css';
import logo from '../../assets/logos/.LOGO-1.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo footer"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;