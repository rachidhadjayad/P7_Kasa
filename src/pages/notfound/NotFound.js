import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./notfound.css"

const NotFound = () => {
    return (
        <div className='content-page'>
            <Header/>
            <div className='notfound'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="backhomepage" to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer/>
        </div>
            
    );
};

export default NotFound;