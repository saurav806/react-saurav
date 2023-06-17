import React from "react";
import { NavLink } from "react-router-dom";
import bg from '../images/bg.jpg';
import '../Css/Home.css';
import Same from "./Same";

const About=()=>{
    return(
        <>
        <Same
             title="More About Us"
             text="Lorem jshdfj jkhasdk jhdjksf j csd f
             jksdhfj jhsdjk jc jsdh j djhf jc ksadf 
             dfgdv sdfhgjksdg"
             imgsrc={bg}
             btn="Know More"
             add="/"
        />
        </>
    )
}

export default About;