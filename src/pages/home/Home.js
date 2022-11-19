import Header from '../../components/header/Header';
import homeimg from '../../assets/images/IMG.png';
import "./home.css";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
    // On fait un setData pour mofifier notre data 
    const [data, setData] = useState ([]);
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios
            .get("/lodgings.json")
            .then((res) => setData(res.data));
    }, [])



    return (
        <div>
            <Header />
            <div className='content-page'>
                <div className='background-title'>
                    <div className='title-img'>
                        <img src={homeimg} alt="home img"/>
                        <h2 className='home_title'>Chez vous, partout et ailleurs</h2>
                    </div>
                        <div className='background-home-title'>
                    </div>

            <div className='card-background'>
                <div className='lodging-card-set'>

                </div>
            </div>
                </div>
            </div>
        </div>

    );
};

export default Home;