import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Top from "./components/Top/Top";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (<div>
          <BrowserRouter>
   <Header/>
   <Top/>
          </BrowserRouter>
      </div>
  );
}

export default App;
