import Data from '../../lodgings.json';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider';
import Tags from '../../components/tags/tags';
import Avatars from '../../components/avatars/avatars';
import Stars from '../../components/stars/stars';
import AccordionCollapse  from '../../components/accordion/accordionCollapse';
import NotFound from '../notfound/notFound';
import './lodging.css';
import { useParams } from 'react-router-dom';


const Lodging = () => {

      const params = useParams();
      const idAppartement = params.idLodging
      
    //   recupération des datas de l'id
      const logementDetails = Data.find(logement => logement.id === idAppartement);

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