import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {

  constructor() {
    super();
    this.state = {
      toggle: false,
      count: 0,
    };
  }

  render() {
    console.log("This is Pure Component")
    let changeToggle = () => {
      this.setState({
        toggle: !this.state.toggle,
      });
     
    };
    let increment = () => {
      if (this.state.toggle) {
        this.setState({
          count: this.state.count + 1,
        });
      } else {
        this.setState({
          count: this.state.count,
        });
      }
  
    };
    return (
      <div>
        <h2>Pure Components</h2>
        <h1>{this.state.count}</h1>
        <button
          onClick={changeToggle}
          className="toggle-btn"
          style={{
            backgroundColor: `${this.state.toggle ? "green" : "red"}`,
          }}
        >
          Toggle
        </button>
        <button onClick={increment}>Counter</button>
      </div>
    );
  }
}
