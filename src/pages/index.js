import React from "react";
import img from "../static/img/use.png";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <img src={img} className="App-logo" alt="logo" />
      </div>
    );
  }
}
