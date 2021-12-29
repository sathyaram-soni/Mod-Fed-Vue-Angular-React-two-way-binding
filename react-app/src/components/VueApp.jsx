import React, { Component } from "react";

class VueApp extends Component {
  constructor(props) {
    super(props);
    this.vuePlaceHolder = React.createRef();
  }
  componentDidMount() {
    import("vueTodo/app").then((vueApp) => {
      vueApp.default(this.vuePlaceHolder.current);
    });
  }
  render() {
    return <div ref={this.vuePlaceHolder}>Vue App</div>;
  }
}

export default VueApp;
