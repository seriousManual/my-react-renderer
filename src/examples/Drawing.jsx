import { Color } from 'lunchpad';
import React from 'react'

import Letter from '../components/text/Letter';
import Text from '../components/text/Text';
import Scroll from '../components/Scroll'

export default class Drawing extends React.Component {
    constructor() {
        super();

        this.state = {
            board: {},
            currentColor: Color.RED,
        }

        this.clear = this.clear.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
        this.setButton = this.setButton.bind(this);
    }

    setButton(x, y) {
        if (this.state.currentColor === Color.BLACK) {
            return;
        }

        const board = this.state.board;

        const key = `${x}_${y}`;
        if (board[key]) {
            delete board[key];
        } else {
            board[key] = this.state.currentColor;
        }
        
        this.setState({ board });
    }

    chooseColor(color) {
        this.setState({currentColor: color});
    }

    clear() {
        this.setState({board: {}});
    }

    printBoard() {
        const buttons = [];
        const serialized = [];

        Object.keys(this.state.board).forEach(key => {
            const color = this.state.board[key];
            const [x, y] = key.split('_');
            buttons.push(<button x={x} y={y} key={key} color={color} />);
            
            if (color === Color.RED) {
                serialized.push({x, y})
            }
        })

        console.log(JSON.stringify(serialized));

        return buttons;
    }

    render() {
        return (
            <launchpad launchpad={this.props.launchpad} onButtonPress={this.setButton}>
                <functionX x={0} color={Color.RED} onPress={() => this.chooseColor(Color.RED)} />
                <functionX x={1} color={Color.AMBER} onPress={() => this.chooseColor(Color.AMBER)} />
                <functionX x={2} color={Color.GREEN} onPress={() => this.chooseColor(Color.GREEN)} />

                <functionX x={7} color={this.state.currentColor} />
                <functionY y={0} color={Color.RED} onPress={() => this.clear() } />

                {/* <Scroll>
                    <Text text="Hello what up?" y={1} x={10} />
                </Scroll> */}

                {this.printBoard()}
            </launchpad>
        )
    }
}