import React, { Component } from 'react';
import { Color } from 'lunchpad';

class Blinki extends Component {
    constructor() {
      super();
  
      this.state = {active: true};
      this._interval = null;
    }
  
    componentDidMount() {
      this._interval = setInterval(() => {
        this.setState({active: !this.state.active});
      }, 300);
    }

    componentWillUnmount() {
      clearInterval(this._interval);
    }
   
    render() {
      const altColor = this.props.altColor || Color.BLACK;
      const color = this.state.active ? this.props.color : altColor;

      return <button x={this.props.x} y={this.props.y} color={color} onPress={this.props.onPress} />
    }
}

export default Blinki;