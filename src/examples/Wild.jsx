import React, { Component } from 'react'
import { Color } from '../renderer'
import BigPad from '../renderer/components/BigPad';

class Wild extends Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 100);
  }

  render() {
    const buttons = [];
    for (let i = 0; i < 30; i++) {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      buttons.push(<button x={x} y={y} color={Color.getRandomColor()}/>);
    }

    return <BigPad launchpad={this.props.launchpad}>{buttons}</BigPad>;
  }
}

export default Wild;