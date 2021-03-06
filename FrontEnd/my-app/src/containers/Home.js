import React, {Component} from 'react';
import Hearder from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/home/Slideshow';

const Home = () => {

    return (
      <div>
        <Hearder />
        <Slideshow />
        <Footer company="แพ~โก~พา" tel="02-96523516"/>
        
      </div>
    );
  

}

export default Home;