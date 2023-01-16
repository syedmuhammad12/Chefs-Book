import React, { useState, useRef } from "react";
import "./Addrecipe.css";
import Avatar from "react-avatar-edit";
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'react-bootstrap';
import img from '../assets/img/uploadpic.jpg'
// import e from "cors";

const Addrecipe = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [show, setShow] = useState(false);

    return (
        <main className={show ? 'space-toggle' : null}>
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
            <hr />

            <div>
                <div className="firstOne justify-content-around">
                    <div className="align-items-center img-div">
                        <input className="inputPic" id="imgs" type="file" onChange={handleChange} />
                        <img className="picSize" src={file} />
                        <label htmlFor="imgs">Upload Picture</label>
                    </div>
                    <div className="recipeN">
                        <input className="inputTextRecipeName" placeholder="Enter Your Recipe's Name" required></input>
                    </div>
                </div>
                <div className="secondOne">
                    <textarea className="ingredientsRecipe" placeholder="Enter Your Recipe's Ingredients" required></textarea>
                    <textarea className="methodRecipe" placeholder="Enter Your Recipe's Method" required></textarea>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>

        </main>
    )
}

export default Addrecipe;