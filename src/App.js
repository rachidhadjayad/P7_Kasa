import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ici on pointe nos routes vers nos differentes pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Lodging from './pages/lodging/Lodging';
import NotFound from './pages/notfound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Home/>}/>
        <Route exact="true" path="/A-Propos" element={<About/>}/>
        <Route exact="true" path="/Logement" element={<Lodging/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
