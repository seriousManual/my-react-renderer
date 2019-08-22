import React, { Component } from 'react';
import { Color } from '../renderer';

class App extends Component {
    constructor() {
      super();
  
      this.state = { buttons: [], show: true };
    }
    
  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false})
    }, 4000)
  }

    render() {
      if (!this.state.show) {
        return <launchpad></launchpad>
      }

      return (
        <launchpad launchpad={this.props.launchpad}>
          <functionX x={0} color={Color.GREEN} onPress={() => console.log('fX 0')} />
          <button x={1} y={8} color={Color.RED} onPress={() => console.log('fX 1')} />
          
          <functionY y={0} color={Color.GREEN} onPress={() => console.log('fY 0')} />
          <button x={8} y={1} color={Color.RED} onPress={() => console.log('fY 1')} />

          <button x={0} y={0} color={Color.RED} onPress={() => console.log('b 0 0')} />
        </launchpad>
      );
    }
  }
  
  export default App;