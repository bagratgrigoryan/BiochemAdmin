import React from 'react';
import Header from "../components/Header";
import {Routes, Route} from 'react-router-dom'
import Login from "../pages/Login";
import Forget from "../pages/Forget";
import MiniDrawer from "../components/MiniDrawer";
import CustomizedTables from "../components/adminPanel/CustomizedTables";
import Register from "../pages/Register";
import New from "../pages/New";
import PageNotFound from "../pages/PageNotFound";


const arr = [
    {
        id: "1",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "2",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "3",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "4",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "5",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "6",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "7",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "8",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "9",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "10",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    },
    {
        id: "11",
        description:"sjdhkhdj",
        photo: "sjdhhsj.jpg",
        posts: "jsdksjhdkjhskhdkjsh"
    }
];

function Home() {

    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/cms' element={<Login/>}/>
                <Route exact path='/forget' element={<Forget/>}/>
                <Route path='/user' element={<MiniDrawer/>}>
                    <Route path="/user" index element={<New/>}/>
                    <Route path="history" element={<CustomizedTables arr={arr}/>}/>
                    <Route path="trade&union" element={<Register/>}/>
                    <Route path="museum" element={<Register/>}/>
                    <Route path="councils" element={<Register/>}/>
                    <Route path="departments" element={<Register/>}/>
                    <Route path="media" element={<Register/>}/>
                    <Route path="library" element={<Register/>}/>
                    <Route path="contact" element={<Register/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default Home;