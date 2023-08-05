import './App.css';
import Allbeers from './pages/Allbeers';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Singlebeer from './pages/Singlebeer';
import Randombeer from './pages/Randombeer';
import Newbeer from './pages/Newbeer';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/beers' element={<Allbeers />} />
      <Route path='/beers/:beerId' element={<Singlebeer />} />
      <Route path='/random-beer' element={<Randombeer />} />
      <Route path='/new-beer' element={<Newbeer />} />
    </Routes>
    </div>
  );
}

export default App;
