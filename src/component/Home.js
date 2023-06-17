import { ReadMore } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import bg from '../images/bg.jpg';
import '../Css/Home.css';
import Same from "./Same";


const Home=()=>{
    return(
        <>
        <Same
            title="Learning made Easy"
            text="Lorem jshdfj jkhasdk jhdjksf j csd f
            jksdhfj jhsdjk jc jsdh j djhf jc ksadf 
            dfgdv sdfhgjksdg"
            imgsrc={bg}
            btn="Read More"
            add="about"
        />
        </>
    )
}

export default Home;