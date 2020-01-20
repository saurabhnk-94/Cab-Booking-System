import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import { createStore, compose, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// import reducers from "./store/reducers";

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhances(applyMiddleware(thunk)));

// const app = (
//   <Provider>
//     <App />
//   </Provider>
// );
ReactDOM.render( < App/> , document.getElementById("root"));