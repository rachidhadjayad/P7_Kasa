import React from 'react';
import homeimg from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash-2.png';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import './about.css'
import AccordionCollapse from '../../components/accordion/AccordionCollapse';

const About = () => {

    const data = [
        {
            about_title: 'Fiabilité',
            about_description: 
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
            about_title: 'Respect',
            about_description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            about_title: 'Service',
            about_description: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        },
        {
            about_title: 'Sécurité',
        },
        ]

    return (                                                                                                                                                                                                                           
        <div>
            <Header />
            <Banner img={homeimg}/>
            {data.map((item, i) => (
                <AccordionCollapse data={item} index={i}/>
            ))}
        </div>
    );
};

export default About;

