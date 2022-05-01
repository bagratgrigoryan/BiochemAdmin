import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Forget from "./pages/Forget";
import MiniDrawer from "./components/MiniDrawer";
import Register from "./pages/Register";
import Home from "./home/Home";
import Box from "@mui/material/Box";



function App() {
    return (
        <div className="App">
                <MiniDrawer/>

        </div>
    );
}

export default App;
