import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import {BrowserRouter} from "react-router-dom";
import Works from "./components/Works/Works";
import About from "./components/About/About";
import Testemonials from "./components/Testemonials/Testemonials";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";

const App=()=> {
    return (<div>
            <BrowserRouter>
                <Header/>
                <Top/>
                <Works/>
                <About/>
                <Testemonials/>
                <Posts/>
                <Footer/>
            </BrowserRouter>
        </div>);
}

export default App;
