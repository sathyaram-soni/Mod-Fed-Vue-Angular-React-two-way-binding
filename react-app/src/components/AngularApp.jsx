import React, { Component } from "react";

class AngularApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    import("angularHub/app").then((angularApp) => {
      angularApp.default();
    });
  }
  render() {
    return (
      <div style={{ margin: "0 250px" }}>
        <app-shared-grid></app-shared-grid>
      </div>
    );
  }
}

export default AngularApp;
