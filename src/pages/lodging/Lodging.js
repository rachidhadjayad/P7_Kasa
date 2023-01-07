import Data from '../../lodgings.json';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Tags from '../../components/tags/Tags';
import Avatars from '../../components/avatars/Avatars';
import Stars from '../../components/stars/Stars';
import AccordionCollapse  from '../../components/accordion/AccordionCollapse';
import NotFound from '../notfound/NotFound';
import './lodging.css';


const Lodging = () => {
      // get id in url param
      const urlInformation = window.location.search;
      const allParamUrl = new URLSearchParams(urlInformation);
      const id = allParamUrl.get('id');

    //   recupération des datas de l'id
      const logementDetails = Data.find(logement => logement.id === id);



      if (logementDetails) {
          return (
            <div>
                <Header />
                <Slider imagesSlide={logementDetails.pictures}/>
                <div className='details'>
                   <div className='details-location details-item'>
                        <h2 className="title-lodging-page">{logementDetails.title}</h2>
                        <p className="city-title">{logementDetails.location}</p>
                        <Tags tagsPart={logementDetails.tags}/>
                    </div>
                    <div className='details-profil details-item'>
                        <div className='details-location-profil'>
                            <Avatars infoProfil={logementDetails.host}/>
                        </div>
                        <div className='details-location-profil-stars'>
                            <Stars starsPart={logementDetails.rating}/>
                        </div>
                    </div>
                </div>
                <div className='accordion-collapse'>
                  <AccordionCollapse title='description' description={logementDetails.description} />
                  <AccordionCollapse title="equipement" description={logementDetails.equipments} />
                </div>
            </div>
        );
      } else {
        return (
            <div>
                <NotFound />
            </div>
        );
      }
   
};

export default Lodging;