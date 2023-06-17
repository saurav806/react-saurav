import React from "react";

import '../Css/Services.css'
import Card from "./Card";
import Data from "./Data";


const Services=()=>{
    return(
        <>
        <h1>Our Services</h1>
        <div className="services">
            {/* <Card/> */}
            {Data.map((values)=>{
                return(
                    <Card
                        title1={values.Stitle}
                        imgSource={values.imgsrc}
                        desc={values.desc}
                        btnService={values.btnService}
                    />
                )
            })}
        </div>
        </>
    )
}

export default Services;