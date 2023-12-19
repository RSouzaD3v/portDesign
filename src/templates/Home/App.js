import React from 'react';

import './App.css';

import { Header } from '../../components/Header';
import { Banners } from '../../components/Banners';
import { Sobre } from '../../components/Sobre';
import { MyPort } from '../../components/MyPort';
import { Footer } from '../../components/Footer';


function App() {
  return (
    <div className='container'>
      <Header />
      <Banners />
      <Sobre />
      <MyPort />
      <Footer />
    </div>
  );
}

export default App;
