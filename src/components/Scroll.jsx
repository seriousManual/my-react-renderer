import React, { Children } from 'react';

export default class Scroll extends React.Component {
    constructor() {
        super(); 

        this.state = {
            x: 0
        };

        this.handle = null;
    }

    componentDidMount() {
        this.handle = setInterval(() => {
            this.setState({x: this.state.x + 1});
        }, 400);
    }

    componentWillUnmount() {
        clearInterval(this.handle);
    }
    
    render() {
        return Children.map(this.props.children, child => {
            const newX = child.props.x - this.state.x;

            return React.cloneElement(child, {x: newX});
        })
    }
}