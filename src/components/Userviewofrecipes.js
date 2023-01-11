import React, { useState } from "react";
import "./Userviewofrecipes.css";
import { Link } from 'react-router-dom';
import steak from "../assets/img/steak.jpg"
import maggi from "../assets/img/maggi.jpg"

const Userviewofrecipes = () => {

    const [show, setShow] = useState(false)

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
                            <Link to="/userViewOfRecipes" className="nav-link active">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">Recipes</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-sign-out nav-link-icon"></i>
                        <span className="nav-link-name">LOGOUT</span>
                    </Link>
                </nav>
            </aside>
            <h1 className="pt-4">User View Of Recipes</h1>
            <hr/>
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                <div className="row item-inside">
                                    {/* For Image */}
                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                        <img src={steak} alt="menuPic" className="img-fluid"></img>
                                    </div>
                                    {/* For Menu Description */}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                            <h2>Recipe Name: Steak</h2>
                                            <hr></hr>
                                            <h3>Ingredients</h3>
                                            <p>1/2 LB POUND OF RIBEYE STEAK , LEMON , TUMERIC, ASPARAGHUS.</p>
                                            <hr></hr>
                                            <h3>Method</h3>
                                            <p>Dry heat cooking is best for more delicate cuts of meat, the ones that come from the less exercised parts of the animal. 
                                                Dry heat methods add robust flavor. These cooking methods are often done over high heat for short periods of 
                                                time to prevent drying out the beef, and/or combined with slower, lower heat cooking to finish.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                <div className="row item-inside">
                                    {/* For Image */}
                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                        <img src={maggi} alt="menuPic" className="img-fluid"></img>
                                    </div>
                                    {/* For Menu Description */}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                            <h2>Recipe Name: Maggi</h2>
                                            <hr></hr>
                                            <h3>Ingredients</h3>
                                            <p>1/2 LB POUND OF RIBEYE STEAK , LEMON , TUMERIC, ASPARAGHUS.</p>
                                            <hr></hr>
                                            <h3>Method</h3>
                                            <p>Dry heat cooking is best for more delicate cuts of meat, the ones that come from the less exercised parts of the animal. 
                                                Dry heat methods add robust flavor. These cooking methods are often done over high heat for short periods of 
                                                time to prevent drying out the beef, and/or combined with slower, lower heat cooking to finish.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Userviewofrecipes;