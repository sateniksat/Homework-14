import React, { Component } from "react";
import { Button } from "./Button";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCount(value) {
    if (this.state.count === 0 && value === -1) {
      alert("Always think positive");
      return;
    } else {
      this.setState({ count: this.state.count + value });
    }
  }
  reset(){
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="counter-app">
        <h1> Current count: {this.state.count} </h1>
        <Button title="increase" clickHandler={this.handleCount.bind(this)} />
        <Button title="decrease" clickHandler={this.handleCount.bind(this)} />
        <Button title="reset" clickHandler={this.reset.bind(this)} />
      </div>
    );
  }
}

export default Counter;
