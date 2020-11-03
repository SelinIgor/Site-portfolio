import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import {BrowserRouter} from "react-router-dom";
import Works from "./components/Works/Works";
import About from "./components/About/About";
import Testemonials from "./components/Testemonials/Testemonials";

const App=()=> {
    return (<div>
            <BrowserRouter>
                <Header/>
                <Top/>
                <Works/>
                <About/>
                <Testemonials/>
            </BrowserRouter>
        </div>);
}

export default App;
