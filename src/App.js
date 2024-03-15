import Main from './components/Main';
import Screens from './components/Screens'
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';


function App() {
  return(
    <div className='App'>
      <NavigationBar />
      <Main />
      <Screens />
      <Footer />
    </div>
  )
}

export default App;
