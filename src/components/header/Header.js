import React from 'react';
// Ici on appelle pour nous permetrre de naviguer de page en page
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/.LOGO.svg';
import "./header.css"


function Header() {
    return (
            <div className='navheader'>
                <div className='logo'>
                    <Link className="nav-backhomepage" to="/">
                    {/* Les images importées depuis la balise IMG sont accessibles dans "public", pas ici car nous avons crée un fichier dédié  */}
                    <img src={logo} alt="logo header"/>
                    </Link>
                </div>
                <div className='navbar'>
                    <div className='navli navli-first'>
                        <NavLink exact="true" to="/" activeclassname="nav-active">
                            Accueil
                        </NavLink>
                    </div>
                    <div className='navli'>
                        <NavLink exact="true" to="/A-propos" activeclassname="nav-active">
                            À Propos
                        </NavLink>
                    </div>
                </div>
            </div>
    );
}

export default Header;