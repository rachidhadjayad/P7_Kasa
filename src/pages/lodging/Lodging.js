import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/header/Header';
import Slideshow from '../../components/slideshow/Slideshow';
import Avatars from "../../components/avatars/Avatars";

const Lodging = () => {
    const navigation = useNavigate();
      // get id in url param
      const urlInformation = window.location.search;
      const allParamUrl = new URLSearchParams(urlInformation);
      const id = allParamUrl.get('id');
      console.log(id);


      const [dataLogement, setDataLogement] = useState(null);
      

        useEffect (() => {
        axios
            .get("/lodgings.json")
            .then((res) => {
                const logementDetails = res.data.find(logement => logement.id === id);

                if(logementDetails === undefined){
                    navigation("/NotFound");
                }else{
                    console.log('test');
                    setDataLogement(logementDetails);
                    console.log(logementDetails.host.picture);
                }
            });

    }, [navigation, id])

    return (
        <div>
            <Header />
            {/* <Slideshow pictures={dataLogement.data.pictures} /> */}
            {/* <Avatars img={dataLogement.host.picture} /> */}
        </div>
    );
};

export default Lodging;