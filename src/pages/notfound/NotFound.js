import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import "./notfound.css"


const NotFound = () => {
    return (
        <div>
            <Header />
            <div className='notfound'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="backhomepage" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
            
    );
};

export default NotFound;