import React from "react";
import "./Usersignup.css";
import { useNavigate } from "react-router-dom";

const Usersignup = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/userLogin"; 
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

export default Usersignup;