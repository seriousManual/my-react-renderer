import React, { Component, Children } from 'react'

class BigPad extends Component {
    render() {
        const {children, ...restProps} = this.props;

        const buttons = Children.map(children, child => {
            if (!child) {
                return null;
            }

            const props = child.props;
            if (typeof child.type !== "string") {
                return child;
            }

            if (props.x === 8 && props.y === 8) {
                return null;
            }

            if (props.x === 8) {
                return <functionY y={props.y} onPress={props.onPress} color={props.color} />
            }

            if (props.y === 8) {
                return <functionX x={props.x} onPress={props.onPress} color={props.color} />
            }

            return <button {...props} />
        });

        return <launchpad {...restProps}>{buttons}</launchpad>
    }
}

export default BigPad;