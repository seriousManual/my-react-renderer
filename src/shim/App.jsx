import React from 'react'

import Button from './Button.jsx'
import {Color} from 'lunchpad'

export default class App extends React.Component {
    render() {
        const launchpad = this.props.launchpad;
        const pad = launchpad.pad;

        console.log(launchpad);
        // let {baseData, selectFunctionX, selectFunctionY, selectSquare} = this.props

        // let functionX = baseData.functionX.map((color, x) =>
        //     <Button color={color} key={x} round={true} onSelect={_ => selectFunctionX(x)}/>
        // )

        // let rows = []
        // for (let y = 7; y >= 0; y--) {
        //     let row = []
        //     for (let x = 0; x < 8; x++) {
        //         row.push(<Button key={x + '_' + y}
        //                          color={baseData.squares[x][y]}
        //                          onSelect={_ => selectSquare(x, y)}
        //         />)
        //     }

        //     row.push(<Button key={y}
        //                      round={true}
        //                      color={baseData.functionY[y]}
        //                      onSelect={_ => selectFunctionY(y)}
        //     />)

        //     rows.push(<div className="clearfix" key={y}>{row}</div>)
        // }

        const buttons = [];
        let x, y = 0;
        for (const yRow of pad) {
            for (const element of yRow) {
                let color = Color.BLACK;
                if (!element) {
                    continue;
                }

                if (element.trim()) {
                    console.log(element);
                    color = element.getCode();
                }

                buttons.push(<Button key={x + '_' + y}
                    color={color}
                    round={x === 8}
                    // onSelect={_ => selectSquare(x, y)}
                />)

                x++;
            }
            x = 0;
            y++;
        }

        return (
            <div>

                {buttons}
            </div>
        );
    }
}