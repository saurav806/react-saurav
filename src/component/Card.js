import React from 'react'
import { NavLink } from "react-router-dom";
import bg from '../images/bg.jpg';

const Card = (props) => {
  return (
    <>
      <div className="card">
                <h2>{props.title1}</h2>
                <img src={props.imgSource} alt="service1" className="serviceImg" />
                <p>{props.desc}</p>
                <div className="btnBox">
                    <div className="btn">
                        <NavLink to="\" className="readmore">
                            {props.btnService}
                        </NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Card
