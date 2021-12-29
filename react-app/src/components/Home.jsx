import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/vue">Go to vue app</Link>
        <br />
        <br />
        <Link to="/angular">Go to angular app</Link>
        <br />
      </div>
    );
  }
}

export default Home;
