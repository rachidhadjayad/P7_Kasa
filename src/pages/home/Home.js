import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className='content-page'>
            <Header/>
            <div className='about'>
                <h1>Home</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;