import './App.css';
import React,{useState} from 'react'
import {InfoSection} from './components/InfoSection';
import {InfoSectionn} from './components/InfoSectionn';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'

import {Navbar} from './components/Navbar';
import GlobalStyle from './globalStyle';
import Hero from './components/Hero'
import { SliderData } from './data/SliderData';
import { Dropdown } from './components/Dropdown';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Services from './Services/Services';
import { IoMailSharp } from 'react-icons/io5';
import Footer from './components/Footer';
function App() {

  const [isOpen,setOpen]=useState(false);

  const toggle=()=>{
   setOpen(!isOpen);

  }
  return (
   <>
   <GlobalStyle />
      <Navbar  toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero  slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSectionn {...InfoDataTwo}/>
      <InfoSection {...InfoData}/>
      <Services/>
      <Footer/>

   </>
  );
}

export default App;
