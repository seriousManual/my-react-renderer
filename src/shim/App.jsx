import React from 'react'

import Button from './Button.jsx'


export default class App extends React.Component {
    selectSquare(x, y, launchpad) {
        if (x === 8) {
            launchpad.emit('functionY', y);
            return;
        }

        if (y === 8) {
            launchpad.emit('functionX', x);
            return;
        }

        launchpad.emit('input', x, y);
    }

    render() {
        console.log('rerender');
        const launchpad = this.props.launchpad;
        const pad = launchpad.pad;

        const buttons = [];
        let x = 0, y = 0;
        for (const xRow of pad) {
            const localButtons = [];
            buttons.push(localButtons);

            for (const color of xRow) {
                if (x === 8 && y === 0) {
                    continue;
                }

                localButtons.push(<Button key={x + '_' + y}
                    color={color}
                    round={x === 8 || y === 0}
                    x={x}
                    y={-1 * y + 8}
                    onSelect={(x, y) => this.selectSquare(x, y, launchpad)}
                />)

                x++;
            }
            x = 0;
            y++;
        }

        return (
            <div>
                {buttons.map((row, y) => 
                    <div key={'row_' + y} style={{display: 'flex', flexDirection: 'row'}}>{row}</div>
                )}
            </div>
        );
    }
}