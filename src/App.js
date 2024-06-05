// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Menu from './menu.js';
import Imagem from './imagemfundo.js';
import Header1 from './cabecalho1.js';
import Section from './section.js';
import Imagem1 from './produtos.js'
import Conheça from './Conheça.js';
import ContactForm from './Forms.js';
import Footer from './Footer.js';



const App = () => {
  return (
    <div className="App">
      
      <div className="header1">
      <Imagem/>
      </div>
      <Menu />
      <Header1/>
      <Section/>
      <div className='rectangle'></div>
      <Imagem1/>
      <div className='rectangle1'></div>
      <Conheça/>
      <ContactForm/>
      <Footer/>
      </div>
  );
};


export default App;