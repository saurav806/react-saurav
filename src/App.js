import React from "react";

import {
  
  Route,
  Routes,
} from "react-router-dom";


import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Policy from './component/Policy';
import List from './component/List';
import Footer from './component/Footer';
// import Error from './component/Error';

const App=()=>{
  return(
  < >
  <List/> 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    {/* <Route path="NULL" element={<Error/>}/> */}
  </Routes>
  <Footer/>
  </>
  )
}

export default App;
