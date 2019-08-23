import { Color } from 'lunchpad';
import React from 'react'

import Letter from '../components/text/Letter';
import Text from '../components/text/Text';
import Scroll from '../components/Scroll'

export default class TextExample extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            letter: ''
        }
    }

    componentDidMount() {
        const list = '.!?0123456789abcdefghijklmnopqrstuvwxyz';
        setInterval(() => {
            const index = this.state.count;
            const letter = list[index];

            this.setState({letter, count: (this.state.count + 1) % list.length})

        }, 500);
    }

    render() {
        return (
            <launchpad launchpad={this.props.launchpad} >
                <Scroll>
                    <Text text={'hello, was geht ab!!!'} y={1} x={0} />
                    {/* <Letter letter={this.state.letter} /> */}
                </Scroll>
            </launchpad>
        )
    }
}