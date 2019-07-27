import React, { Component } from 'react'
import LaunchpadRenderer, { Color } from './renderer'
import getMock from './renderer/mockLP'
import { initialize } from 'lunchpad'


class App extends Component {
  constructor() {
    super();

    this.state = {foo: true};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({foo: !this.state.foo});
      console.log('--------------------------------------------------------------------------');
    }, 5000);
  }
 
  render() {
    const foo = Math.random()
    return (
      <launchpad launchpad={this.props.launchpad}>
        {this.state.foo ? <button x={1} y={3} color={Color.RED} onPress={() => console.log('bier')} /> : null }

        <button x={5} y={2} color={this.state.foo ? Color.RED : Color.GREEN} />

        <button x={this.state.foo ? 0 : 7} y={7} color={Color.RED} />

        <functionX x={2} color={Color.RED} />
        <functionY y={2} color={Color.RED} />

      </launchpad>
    );
  }
}



initialize().then(launchpad => {
  LaunchpadRenderer.render(<App launchpad={launchpad} />);
});

