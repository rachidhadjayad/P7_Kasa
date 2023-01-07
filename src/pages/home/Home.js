import Header from '../../components/header/Header';
import homeimg from '../../assets/images/IMG.png';
import Banner from '../../components/banner/Banner';
import LodgingCard from '../../components/lodgingcard/LodgingCard';
import "./home.css";


const Home = () => {

    return (
        <div>
            <Header />
            <Banner img={homeimg} title={'Chez vous, \npartout et ailleurs'} />
            <LodgingCard />
        </div>
    );
};

export default Home;