import React, { useState, useEffect, Component, Fragment } from 'react'
import LaunchpadRenderer, { Color } from './renderer'
import getMock from './renderer/mockLP'


class App extends Component {
  constructor() {
    super();

    this.state = {foo: true};
  }

  // componentDidMount() {
  //   setTimeout(() => this.setState({foo: false}), 3000);
  // }

  render() {
    const color = this.state.foo ? Color.RED : Color.GREEN;
  
    return (
      <launchpad launchpad={getMock()}>
        <button x={0} y={0} color={color} />
        {/* <FunctionX x={0} color={Color.RED} onPress={() => console.log('hepp')} />
        <FunctionY y={0} color={Color.RED} onPress={() => console.log('hepp')} /> */}
      </launchpad>
    );
  }
}

LaunchpadRenderer.render(<App />);