import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Header from '../../components/header/Header';
import AccordionCollapse from '../../components/accordion/AccordionCollapse';
import Avatars from '../../components/avatars/Avatars';
import Slideshow from '../../components/slideshow/Slideshow';
import axios from 'axios';

const Lodging = (props) => {

        // get id in url param
        // const urlInformation = window.location.search;
        // const allParamUrl = new URLSearchParams(urlInformation);
        // const id = allParamUrl.get('id');
        // // On fait un setData pour mofifier notre data 
        // const [data, setData] = useState ([]);
        // // Le useEffect se joue lorsque le composant est monté
        // useEffect (() => {
        //     axios
        //         .get("/lodgings.json")
        //         .then((res) => setData(res.data));
    
        // }, [])
    return (
        <div>
            <Header />
            <Slideshow img={props.pictures}/>
            <Accordion />
            <Avatars/>
            {data.map((item, i) => (
                <AccordionCollapse data={item.description} index={i}/>
            ))}
        </div>
    );
};

export default Lodging;