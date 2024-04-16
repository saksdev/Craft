import React from 'react';
import './App.css';
import Header from './Components/header';
import Section1 from './Components/section1';
import Section2 from './Components/section2';
import Section3 from './Components/section3';
import Section4 from './Components/section4';
import Footer from './Components/footer';

function App() {
  return (
    <div className='main'>
      <Header />
      <Section1 />
      <div className='content'>
        <Section2 />
        <hr></hr>
        <Section3 />
        <hr></hr>
        <Section4 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
