import Main from './Main';
import Screens from './Screens'
import Footer from './Footer';
import NavigationBar from './NavigationBar';

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