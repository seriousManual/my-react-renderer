import React, { Component } from 'react';
import { Color } from 'lunchpad';

class Blinki extends Component {
    constructor() {
      super();
  
      this.state = {active: true};
    }
  
    componentDidMount() {
      setInterval(() => {
        this.setState({active: !this.state.active});
      }, 300);
    }
   
    render() {
      const altColor = this.props.altColor || Color.BLACK;
      return <button x={this.props.x} y={this.props.y} color={this.state.active ? this.props.color : altColor} onPress={this.props.onPress} />
    }
}

export default Blinki;