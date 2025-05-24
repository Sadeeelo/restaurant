import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Rent from './Components/Rent';
import Menu from './Components/aaaMenu'; // tämä rivi on uusi

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vuokraa" element={<Rent />} />
        <Route path="/menu" element={<Menu />} /> {/* uusi menu-näkymä */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
