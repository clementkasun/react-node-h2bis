import React, { Component } from "react";
import "./Button.css";

function Btn(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      value={props.name}
    />
  );
}

class Button extends Component {
  render() {
    return <Btn name={this.props.name} type={this.props.type} className={this.props.className} />;
  }
}

export default Button;
