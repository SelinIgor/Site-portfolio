import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import {BrowserRouter} from "react-router-dom";
import Works from "./components/Works/Works";

function App() {
    return (<div>
            <BrowserRouter>
                <Header/>
                <Top/>
                <Works/>
            </BrowserRouter>
        </div>
    );
}

export default App;
