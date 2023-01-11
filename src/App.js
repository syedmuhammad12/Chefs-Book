import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "../src/Router/appRouter";
import { BrowserRouter as Router } from "react-router-dom";

// *********************************

function App() {
  return (
    <div className="App">

      <Router>
        <AppRouter />
      </Router>  

    </div>
  );
}

export default App;