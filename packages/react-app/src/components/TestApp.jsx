import React, { Component } from "react";
import CalcApp from "./CalcApp";

class TestApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    /*import("angularHub/app").then((angularApp) => {
      angularApp.default();
    });
    <div style={{ margin: "0 250px" }}>
      <app-shared-grid></app-shared-grid>
    </div>
    */
  }
  render() {
    return (
      <div>
        <CalcApp />
      </div>
    );
  }
}

export default TestApp;
