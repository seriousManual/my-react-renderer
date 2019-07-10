import React, { Component } from 'react'
import CustomRenderer from './renderer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const inc = () => {
        this.setState(state => {
            return {count: state.count + 1};
        });
    };

    const dec = () => {
        this.setState(state => {
            return {count: state.count - 1};
        });
    };

    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        {Array.from(new Array(Math.max(this.state.count, 0)), (a, v) => <div>#{v}</div>)}
      </div>
    );
  }
}

CustomRenderer.render(<App />, document.getElementById('root'))