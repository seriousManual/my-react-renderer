import React, { Component } from 'react'
import LaunchpadRenderer, { Color } from './renderer'
import getMock from './renderer/mockLP'
import { initialize } from 'lunchpad'
import BigPad from './renderer/components/BigPad'

class App extends Component {
  constructor() {
    super();

    this.state = {foo: true};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({foo: !this.state.foo});
      console.log('--------------------------------------------------------------------------');
    }, 1000);
  }
 
  render() {
    const foo = Math.random()
    return (
      <launchpad launchpad={this.props.launchpad}>


        <BigPad>
          <button x={0} y={0} color={Color.RED} />
          <button x={3} y={8} color={Color.RED} />
          <button x={8} y={6} color={Color.RED} />
          <button x={8} y={8} color={Color.RED} />
        </BigPad>

      </launchpad>
    );
  }
}



initialize().then(launchpad => {
  LaunchpadRenderer.render(<App launchpad={launchpad} />);
});

