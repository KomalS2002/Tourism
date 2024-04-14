import './App.css';
// import Dropmenu from './components/Dropmenu.jsx'
// import Button from '@mui/material/Button';
// import Card from './components/Card/Card.jsx'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Spot from './pages/spot/Spot';
import Subspot from './pages/subspot/Subspot';
function App() {
  return (
    <div className="App">
     <Router>
      
      <div className='header'>West Bengal Tourism</div>
     {/* <Home/> */}
     <Routes>
        <Route exact path="/" element={Home} />
        <Route index element={<Home />} />
        <Route path = "spot" element = {<Spot />}/>
        <Route path = "subspot" element = {<Subspot />}/>
        <Route path="*" element={<Spot />} />
      </Routes>

</Router>
</div>
  );
}

export default App;
