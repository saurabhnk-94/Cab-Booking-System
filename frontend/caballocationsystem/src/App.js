import React, { Component } from "react";
import "./App.css";
import BasicRouter from "./components/Router";
import { BrowserRouter } from "react-router-dom";



class App extends Component {
  render() {  
    return (
        <BrowserRouter>
          <BasicRouter />
        </BrowserRouter>
    );
  }
}


export default App;
