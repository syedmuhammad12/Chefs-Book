import React, { useState } from "react";
import "./Chefmainpage.css";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chefmainpage = () => {

    const [show, setShow] = useState(false)

    const [items, setItems] = useState(Menu);

    let navigateToView = useNavigate(); 
    const routeChangeToViewRecipe = () =>{ 
        let path = "/viewRecipe"; 
        navigateToView(path);
    }

    let navigateToRecipe = useNavigate(); 
    const routeChangeToUpdateRecipe = () =>{ 
        let path = "/updateRecipe"; 
        navigateToRecipe(path);
    }

    return(
        <main className={show ? 'space-toggle' : null }>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home-alt nav-link-icon"></i>
                            <span className="nav-link-name">Homepage</span>
                        </Link>

                        <div className="nav-list">
                            <Link to="/chefMainPage" className="nav-link active">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">My Recipes</span>
                            </Link>
                            <Link to="/addRecipe" className="nav-link">
                                <i className="fa-solid fa-circle-plus nav-link-icon"></i>
                                <span className="nav-link-name">Add Recipe</span>
                            </Link>
                            <Link to="/updateRecipe" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">Update Recipe</span>
                            </Link>
                            <Link to="/" className="nav-link">
                                <i className="fa-solid fa-trash nav-link-icon"></i>
                                <span className="nav-link-name">Delete Recipe</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-sign-out nav-link-icon"></i>
                        <span className="nav-link-name">LOGOUT</span>
                    </Link>
                </nav>
            </aside>
            <h1 className="pt-4">My Recipes</h1>
            <hr/>
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.map((elem) => {
                                    const { id, image, recipeName } = elem;

                                    return(
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                            <div className="row Item-inside ">
                                                {/* For Images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt="menuPic" className="img-fluid"></img>
                                                </div>
                                                {/* For Menu Description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h2>{recipeName}</h2>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-around">
                                                            <button onClick={routeChangeToViewRecipe} className="btn">View</button>
                                                            <button onClick={routeChangeToUpdateRecipe} className="btn">Update</button>
                                                            <button className="btn">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Chefmainpage;