import Main from '../components/Main';
import Screens from '../components/Screens'
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
    return(
        <>
            <NavigationBar />
            <Main />
            <Screens />
            <Footer />
        </>
    );
};

export default Home;