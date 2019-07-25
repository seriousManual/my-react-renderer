import React, { Component } from 'react'
import LaunchpadRenderer, { Color } from './renderer'
import getMock from './renderer/mockLP'


class App extends Component {
  constructor() {
    super();

    this.state = {foo: true};
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('-----------------------------------');
      this.setState({foo: !this.state.foo});
    }, 3000);
  }

  render() {
    return (
      <launchpad launchpad={getMock()}>
        {this.state.foo ? <button x={0} y={0} color={Color.RED} /> : null }
        
        <button x={5} y={5} color={this.state.foo ? Color.RED : Color.GREEN} />

        <button x={this.state.foo ? 0 : 7} y={7} color={Color.RED} />

        {/* <FunctionX x={0} color={Color.RED} onPress={() => console.log('hepp')} />
        <FunctionY y={0} color={Color.RED} onPress={() => console.log('hepp')} /> */}
      </launchpad>
    );
  }
}

LaunchpadRenderer.render(<App />);