import { Route, Router, Routes } from "react-router-dom";
import Home from './components/Home'
import Privacy from './components/Privacy';

function App() {
  return(
    <div className='App'>
      <Routes> 
        <Route exact path='/' element={<Home />} />
        <Route path='/privacy' element={<Privacy/>} />
      </Routes>
    </div>
  )
}

export default App;
