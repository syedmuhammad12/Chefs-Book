import React from "react";
import "./Userlogin.css";
import headerimgg from "../assets/img/headerimgg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Userlogin = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    // Another way to use props..
    // const email = props.email;
    // const password = props.password;

    let navigateToUserSignup = useNavigate();
    const routeChangeToUserSignup = () => {
        let path = "/userSignup";
        navigateToUserSignup(path);
    }

    let navigateToUserMainPage = useNavigate();
    const routeChangeToUserMainPage = () => {
        let path = "/userViewOfRecipes";
        navigateToUserMainPage(path);
    }

    return (

        <div className="page">
            <div className="cover">
                <h1>LOGIN</h1>
                <input type="text" autoComplete="off" placeholder="enter your username"></input>
                <input type="password" autoComplete="off" placeholder="enter your password"></input>
                <button className="btn-login" 
                    onClick={() => {
                        // routeChangeToUserMainPage();
                        popup();}} 
                    type="submit">SUBMIT</button>
                <div className="alt-login align-items-center">
                    <span className="chefsDHA">DONT HAVE AN ACCOUNT? <button className="chefsSignup" onClick={routeChangeToUserSignup}>SIGN UP NOW</button></span>
                    <img className="chefsLogo" src={headerimgg} alt="Header Img" />
                </div>
                <div className={popupStyle}>
                        <h3>Login Failed</h3>
                        <p>Username Or Password Incorrect</p>
                </div>
            </div>
        </div>
    )
}

export default Userlogin;