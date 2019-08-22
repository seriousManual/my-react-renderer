import { Color } from 'lunchpad';
import React from 'react'

export default class MutTest extends React.Component {
    constructor() {
        super();

        this.state = {
            state: true
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({state: !this.state.state});
    }

    render() {
        return (
            <launchpad launchpad={this.props.launchpad} >
                <functionY y={0} color={this.state.state ? Color.RED : Color.GREEN} onPress={() => this.toggle() } />
                <functionY y={1} color={this.state.state ? Color.RED : Color.GREEN} onPress={() => this.toggle() } />
            </launchpad>
        )
    }
}