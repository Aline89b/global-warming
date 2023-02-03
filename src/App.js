import Home from "./pages/HOME/Home"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Temperature from './pages/temperature';

import './App.css';


function App() {

  return (
       
  <Router basename = {window.location.pathname || ''}> 
  
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  path='/temperature' element={<Temperature />} />
    </Routes>
  </Router> 
  
  )
}

export default App;
