import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contact";

const App = () => {
    return (
        <>
        <Header/>
        <main className="main">
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects/>
            <Contact/>
        </main>

        </>
    )
}

export default App