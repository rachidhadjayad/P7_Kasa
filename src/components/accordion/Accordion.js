import React, { useState } from 'react';
import './accordion.css';
import arrowUp from '../../assets/images/arrow_back_ios-24px-2.png';

const Accordion = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                <h2>{item.about_title}</h2>
                <span className='chevronArrow'>{selected === i ? <img className='rotateArrow' src={arrowUp} alt="img"/> : <img src={arrowUp} alt="img"/>}</span>
                        </div>
                <div className={selected === i ? 'content show' : 'content'}>{item.about_description}
                    </div>
            </div>
                ))}
            </div>
        </div>
    );
};

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

export default Accordion;