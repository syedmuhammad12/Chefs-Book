import React, { useState } from "react";
import "./Addrecipe.css";
import { Link } from 'react-router-dom';

const Addrecipe = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [show, setShow] = useState(false)
    
    // const textarea = document.querySelector("textarea");
    // textarea.addEventListener("keyup", e =>{
    //     textarea.style.height = "63px";
    //     let scHeight = e.target.scrollHeight;
    //     textarea.style.height = `${scHeight}px`;
    // });

    return (
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
                            <Link to="/chefMainPage" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">My Recipes</span>
                            </Link>
                            <Link to="/addRecipe" className="nav-link active">
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
            <h1 className="pt-4">Add Recipe</h1>
            <hr/>
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                <div className="row item-inside">
                                    {/* For Images */}
                                    <div className="col-12 col-md-12 col-lg-4 img-div">
                                        <h3>Upload Picture:</h3>
                                            <input className="inputPic" type="file" onChange={handleChange} />
                                            <img className="picSize" src={file} />
                                            <hr></hr>
                                        </div>
                                    {/* For Menu Description */}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                            <textarea className="inputTextRecipeName" placeholder="Enter Your Recipe's Name" required></textarea>
                                            <hr></hr>
                                            <textarea placeholder="Enter Your Recipe's Ingredients" required></textarea>
                                            <hr></hr>
                                            <textarea className="methodRecipe" placeholder="Enter Your Recipe's Method" required></textarea>
                                            <hr></hr>
                                            <button className="btn btn-primary">Save</button>
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

export default Addrecipe;