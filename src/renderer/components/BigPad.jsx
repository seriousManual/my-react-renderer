import React, { Component, Children } from 'react'
import { Color } from 'lunchpad'

class BigPad extends Component {
    

    render() {
        console.log(this.props.children )

        return Children.map(this.props.children, child => {
            const props = child.props;

            if (props.x === 8 && props.y === 8) {
                console.warn('nice try :)');
                return null;
            }

            if (props.x === 8) {
                return <functionY y={props.y} onPress={props.onPress} color={props.color} />
            }

            if (props.y === 8) {
                return <functionX x={props.x} onPress={props.onPress} color={props.color} />
            }
console.log(props);
            return <button {...props} />
        })
    }
}

export default BigPad;