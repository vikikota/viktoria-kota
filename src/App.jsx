import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Layout from './components/Layout';
import About from './pages/About';
import QR from './pages/QR';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<About />} />
      </Route>
        <Route exact path="/qr" element={<QR />} />
    </Routes>
  );
}

export default App;
