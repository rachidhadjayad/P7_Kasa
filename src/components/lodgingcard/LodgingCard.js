import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LodgingCard = (props) => {
        // On fait un setData pour modifier notre data 
        const [data, setData] = useState ([]);
        // Le useEffect se joue lorsque le composant est monté
        useEffect (() => {
            axios
                .get("/lodgings.json")
                .then((res) => setData(res.data));
    
        }, [])

    return (
        <div className='content-page'>
            <div className='lodging_list'>
            {
                data.map((item,i) => {
                   return ( 
                   <NavLink to={'/logement/'+item.id} key={i} className="lodging_item-card">
                        <h4 className='lodging-title'>{item.title}</h4>
                        <img src={item.cover} alt={item.title} />
                   </NavLink>)
                })
            }
            </div>
        </div>
    );
};

export default LodgingCard;