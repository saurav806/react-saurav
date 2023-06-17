import React from 'react'
import { NavLink } from "react-router-dom";
import bg from '../images/bg.jpg';
import '../Css/Home.css';

const Same = (props) => {
  return (
    <>
      <div className="mainSection">
            <div className="contentBox">
                <h1>{props.title}</h1>
                <p>{props.text}</p> 
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to={props.add} className="readmore">
                            {props.btn}
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="imgcontainer">
                <img src={props.imgsrc} alt="home" />
            </div>
        </div>
    </>
  )
}

export default Same;
