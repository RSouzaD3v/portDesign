import React from 'react';

import './App.css';

import { Preload } from '../../components/Preload';
import { Header } from '../../components/Header';
import { Banners } from '../../components/Banners';
import { Sobre } from '../../components/Sobre';
import { MyPort } from '../../components/MyPort';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Portfolio } from '../Portfolio';
import { Footer } from '../../components/Footer';

const Home = () => {
  return(
    <>
    <Preload />
    <Header />
    <Banners />
    <Sobre />
    <MyPort />
    <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
