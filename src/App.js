import Main from './components/Main';
import Screens from './components/Screens'
import NavigationBar from './components/NavigationBar';


function App() {
  return(
    <div className='App'>
      <NavigationBar />
      <Main />
      <Screens />
    </div>
  )
}

export default App;
