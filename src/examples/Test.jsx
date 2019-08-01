import React, { Component } from 'react';
import { Color } from '../renderer';

class App extends Component {
    constructor() {
      super();
  
      this.state = { buttons: [] };
    }
  
    // componentDidMount() {
    //   setInterval(() => {
    //     this.setState({foo: !this.state.foo});
    //   }, 1000);
    // }
   
    addButton(x, y) {
      const buttons = [].concat(this.state.buttons);
      buttons.push({x, y});
      this.setState({buttons})
    }
  
    render() {
      return (
        <launchpad launchpad={this.props.launchpad} onButtonPress={(x, y) => this.addButton(x, y)}>
          {this.state.buttons.map(({x, y}) => <button x={x} y={y} color={Color.getRandomColor()} />)}

          <functionY y={0} color={Color.RED} onPress={() => this.setState({buttons: []})} />

          <functionX x={0} color={Color.GREEN} onPress={() => this.setState({buttons: []})} />
        </launchpad>
      );
    }
  }
  
  export default App;