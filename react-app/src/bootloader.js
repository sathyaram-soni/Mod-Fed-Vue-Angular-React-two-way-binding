import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TestApp from "./components/TestApp";

export default (refElement) => {
    ReactDOM.render(<TestApp />, refElement);
}