import React from 'react';
import "./SignUp.css"
import {Link} from "react-router-dom"
const SignUp = () => {
    return (
        <div>
            <div className="inp-menu">
                <input className="inp" type="file" placeholder="image"/>
                <input type="text" placeholder="nick"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
            </div>
           <Link to="/home"><button className="btnm second">Sign Up</button></Link> 
        </div>
    );
};

export default SignUp;