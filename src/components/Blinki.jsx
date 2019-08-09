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
      }, this.props.frequency || 300);
    }

    componentWillUnmount() {
      clearInterval(this._interval);
    }
   
    render() {
      if (!this.state.active) {
        return null;
      }

      return this.props.children;
    }
}

export default Blinki;