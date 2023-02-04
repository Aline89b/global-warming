import Home from "./pages/HOME/Home"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Temperature from './pages/temperature';
import CO2 from "./pages/CO2"
import './App.css';
import Artic from "./pages/artic"


function App() {

  return (
       
  <Router basename = {window.location.pathname || ''}> 
    
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/temperature' element={<Temperature />} />
      <Route  path='/CO2' element={<CO2 />} />
      <Route  path='/artic' element={<Artic />} />
    </Routes>
  </Router> 
  
  )
}

export default App;
