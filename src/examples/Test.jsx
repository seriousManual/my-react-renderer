import React, { Component } from 'react';
import { Color } from '../renderer';

class App extends Component {
    constructor() {
      super();
  
      this.state = { buttons: [] };
    }
    
    render() {
      return (
        <launchpad launchpad={this.props.launchpad}>
          <functionX x={0} color={Color.AMBER} />
          <functionY y={0} color={Color.GREEN} />
        </launchpad>
      );
    }
  }
  
  export default App;