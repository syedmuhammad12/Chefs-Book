import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";
import Chefslogin from "../components/Chefslogin";
import Chefssignup from "../components/Chefssignup";
import Chefmainpage from "../components/Chefmainpage";
import ViewRecipe from "../components/ViewRecipe";
import Addrecipe from "../components/Addrecipe";
import Userviewofrecipes from "../components/Userviewofrecipes";
import Userlogin from "../components/Userlogin";
import Usersignup from "../components/Usersignup";
import Updaterecipe from "../components/Updaterecipe";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/chefLogin" element={<Chefslogin />} />
            <Route path="/chefSignup" element={<Chefssignup />} />
            <Route path="/chefMainPage" element={<Chefmainpage />} />
            <Route path="/viewRecipe" element={<ViewRecipe />} />
            <Route path="/addRecipe" element={<Addrecipe />} />
            <Route path="/userViewOfRecipes" element={<Userviewofrecipes />} />
            <Route path="/userLogin" element={<Userlogin />} />
            <Route path="/userSignup" element={<Usersignup />} />
            <Route path="/updateRecipe" element={<Updaterecipe />} />
        </Routes>
    )
}
export default AppRouter;