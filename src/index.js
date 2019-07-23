import React, { Component } from 'react'
import LaunchpadRenderer, { Color } from './renderer'
import getMock from './renderer/mockLP'


class App extends Component {
  constructor() {
    super();

    this.state = {foo: true};
  }

  componentDidMount() {
    setTimeout(() => this.setState({foo: !this.state.foo}), 3000);
  }

  render() {
    const color = this.state.foo ? Color.RED : Color.GREEN;
  
    return (
      <launchpad launchpad={getMock()}>
        {this.state.foo ? <button x={0} y={0} color={color} /> : null}
        {/* <FunctionX x={0} color={Color.RED} onPress={() => console.log('hepp')} />
        <FunctionY y={0} color={Color.RED} onPress={() => console.log('hepp')} /> */}
      </launchpad>
    );
  }
}

LaunchpadRenderer.render(<App />);