import { Color } from 'lunchpad';
import React from 'react'

import Blinki from '../../components/Blinki';
import BigPad from '../../renderer/components/BigPad';

const MAX_COLS = 9;
const MAX_ROWS = 9;
const STEP_DELAY_MS = 200;
const COLORS = [Color.RED, Color.GREEN, Color.AMBER];
const MODE_DRAW = 'mode_draw';
const MODE_EXEC = 'mode_exec';

export default class GameOfLife extends React.Component {
    constructor() {
        super();

        this.state = {
            mode: MODE_DRAW,
            board: Array.from({ length: MAX_ROWS }, () => 
                Array.from({ length: MAX_COLS }, () => 0)
            ),
            frequency: STEP_DELAY_MS
        }

        this._interval = null;
        this.enterExecuteMode = this.enterExecuteMode.bind(this);
        this.enterDrawMode = this.enterDrawMode.bind(this);
    }

    setButton(x, y) {
        const board = this.state.board;

        if (board[x][y] > 0) {
            board[x][y] = 0;
        } else {
            board[x][y] = 1;
        }

        this.setState({ board });
    }

    printBoard() {
        const buttons = [];
        this.state.board.forEach((row, x) => {
            row.forEach((entry, y) => {
                if (entry > 0) {
                    const color = COLORS[entry % COLORS.length];
                    buttons.push(<button x={x} y={y} key={x + '_' + y} color={color} />);
                }
            });
        }, []);

        return buttons;
    }

    enterExecuteMode() {
        this.setState({mode: MODE_EXEC})

        let cycle = 1;
        this._interval = setInterval(() => {
            const newBoard = calculateNewBoard(this.state.board, cycle++)
            this.setState({board: newBoard})
        }, STEP_DELAY_MS)
    }

    enterDrawMode() {
        this.setState({mode: MODE_DRAW})

        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }

    render() {
        const board = this.printBoard();

        if (this.state.mode === MODE_DRAW) {
            return (
                <launchpad launchpad={this.props.launchpad} onButtonPress={(x, y) => this.setButton(x, y)}>
                    { board }
                    <functionX x={0} color={Color.RED} onPress={this.enterExecuteMode} />
                </launchpad>
            );
        } else if (this.state.mode === MODE_EXEC) {
            return (
                <launchpad launchpad={this.props.launchpad}>
                    { board }
                    <Blinki x={0} y={8} color={Color.GREEN} onPress={this.enterDrawMode} />
                </launchpad>
            );
        }
    }
}

function calculateNewBoard(board, cycle = 1) {
    const newBoard = [];

    for (let x = 0; x < board.length; x++) {
        newBoard[x] = Array.from({length: MAX_COLS}, () => false);

        for (let y = 0; y < board[x].length; y++) {
            const count = countNeighbours(board, x, y);
            const isAlive = board[x][y] > 0

            if (!isAlive) {
                if (count === 3) newBoard[x][y] = cycle;
            } else {
                if (count === 1 || count === 0) newBoard[x][y] = 0;
                if (count === 2 || count === 3) newBoard[x][y] = board[x][y];
                if (count > 3) newBoard[x][y] = 0;
            }
        }
    }

    return newBoard;
}

function countNeighbours(matrix, x, y) {
    let count = 0;
    let size = matrix.length;

    let left = (x == 0) ? size - 1 : x - 1;
    let right = (x == size - 1) ? 0 : x + 1;
    let top = (y == size - 1) ? 0 : y + 1;
    let bottom = (y == 0) ? size - 1 : y - 1;

    if (matrix[left][y]) count++;
    if (matrix[left][top]) count++;
    if (matrix[x][top]) count++;
    if (matrix[right][top]) count++;
    if (matrix[right][y]) count++;
    if (matrix[right][bottom]) count++;
    if (matrix[x][bottom]) count++;
    if (matrix[left][bottom]) count++;

    return count;
}
