import React from 'react'

export default class Square extends React.Component {
    render () {
        let {color, onSelect, round} = this.props

        if (!onSelect) {
            onSelect = () => true;
        }

        let size = 60
        let style = {
            boxSizing: 'border-box',
            backgroundColor: this._getColor(color),
            width: size + 'px',
            height: size + 'px',
            margin: '5px',
            border: '1px solid grey',
            boxShadow: '0px 0px 10px 0px ' + this._getColor(color),
            // transition: 'background-color 50ms linear'
        }

        if (round) {
            style.borderRadius = (size / 2) + 'px'
        }

        return <div style={style} onMouseDown={() => onSelect(this.props.x, this.props.y)}></div>;
    }

    _getColor(color) {
        return color ? color.getRgb() : '#000';
    }
}