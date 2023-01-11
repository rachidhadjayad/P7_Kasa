import React from 'react';
import homeimg from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash-2.png';
import homeimgMob from '../../assets/images/gustavo-alves-YOXSC4zRcxw-unsplash.png';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Accordion from '../../components/accordion/accordion';
import './about.css'


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
        about_description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
    ]

    return (                                                                                                                                                                                                                           
        <div>
            <Header />
            <Banner img={homeimg} imgMobile={homeimgMob}/>
            {data.map((item, i) => (
                <Accordion data={item} index={i} key={i}/>
            ))}
        </div>
    );
};

export default About;

