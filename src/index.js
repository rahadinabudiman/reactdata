import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MainMenu from "./components/CRUD/index";
// import Product from "./components/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Product/Product.css";
// import Home from "./components/LifecycleComponents/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainMenu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
