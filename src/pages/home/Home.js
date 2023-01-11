import Header from '../../components/header/header';
import homeimg from '../../assets/images/IMG.png';
import Banner from '../../components/banner/banner';
import LodgingCard from '../../components/lodgingcard/lodgingCard';
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