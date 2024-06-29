import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <Home></Home>
            <About></About>
            <Skills></Skills>
        </main>

        </>
    )
}

export default App