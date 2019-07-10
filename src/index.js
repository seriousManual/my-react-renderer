import React, { Component } from 'react'
import CustomRenderer from './renderer'

class App extends Component {
  constructor() {
    super();

    this.state = {count: 0};

    setTimeout(() => {
        this.setState(state => {
            return {count: 1};
        });
    }, 2000);
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
console.log('rerender');
    return (
      <div>foo
        <div>{this.state.count}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        {Array.from(new Array(Math.max(this.state.count, 0)), (a, v) => <div>#{v}</div>)}
        {this.state > 0 ? 'bar' : null}
      </div>
    );
  }
}

CustomRenderer.render(<App />, document.getElementById('root'))