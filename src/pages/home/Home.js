import Header from '../../components/header/Header';
import homeimg from '../../assets/images/IMG.png';
import "./home.css";
import Banner from '../../components/banner/Banner';
import LodgingCard from '../../components/lodgingcard/LodgingCard';


const Home = () => {

    return (
        <div>
            <Header />
            <Banner img={homeimg} title={'Chez vous, partout et ailleurs'} />
            <LodgingCard />
        </div>
    );
};

export default Home;