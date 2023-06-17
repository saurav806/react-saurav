import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Contact.css'

const Contact=()=>{
    return(
        <>
        <h1>Contact us</h1>
        <div className="contact">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Your Email" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Enter Your Password" />
            </div>
            <div>
                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" placeholder="Enter Your Mobile" />
            </div>
            <div className="btnBox">
                    <div className="btn">
                        <NavLink to="/" className="readmore">
                            Submit
                        </NavLink>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Contact;