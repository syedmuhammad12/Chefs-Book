import React from "react";
import headerImg from "../assets/img/headerimgg.png";
import chefHat from "../assets/img/chef-hat.png";
// import ellipse1 from "../assets/img/Ellipse1.png";
// import ellipse2 from "../assets/img/Ellipse2.png";
// import ellipse3 from "../assets/img/Ellipse3.png";
import animation from "../assets/img/animation.gif";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';

const Banner = () => {

  let navigateToChefLogin = useNavigate(); 
  const routeChangeToChefLogin = () =>{ 
    let path = "/chefLogin"; 
    navigateToChefLogin(path);
  }
  let navigateToUserLogin = useNavigate(); 
  const routeChangeToUserLogin = () =>{ 
    let path = "/userLogin"; 
    navigateToUserLogin(path);
  }

  return (
    <>
      <div className="home d-flex justify-content-around pt-5">
        <img className="headerImg" src={headerImg} alt="Header Img" />
        <button onClick={routeChangeToChefLogin} className="mainPgBtn1">Become A Chef</button>
        <button onClick={routeChangeToUserLogin} className="mainPgBtn2">Become A User</button>    
      </div>
      <div className="homePg">
        <div className="subdiv"> 
          <img className="chefHat" src={chefHat} alt="Header Img" />
          <h1 className="headerH1">CHEF'S BOOK<MDBIcon icon="atom" className="me-2"/></h1>
          <p className="headerPara">Welcome to the world of tasty and irresistible receipes.</p>
        </div>
        <div>
          <img className="animation" src={animation} alt="Header Img" />
        </div>
      </div>
    </>
  )
}

export default Banner;