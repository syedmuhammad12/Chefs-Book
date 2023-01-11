import React from "react";
import "./Chefssignup.css";
import { useNavigate } from "react-router-dom";

const ChefsSignup = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/chefLogin"; 
        navigate(path);
    }

    return(

        <div className="page">
            <div className="cover">
                <h1>SIGN UP</h1>
                <input type="text" placeholder="enter your username"></input>
                <input type="password" placeholder="enter your password"></input>
                <button className="btn-login" onClick={routeChange} type="submit">SUBMIT</button>
            </div>
        </div>
    )
}

export default ChefsSignup;