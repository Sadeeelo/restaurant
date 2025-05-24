import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Rent from './Components/Rent'; // <-- lisää tämä

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vuokraa" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
