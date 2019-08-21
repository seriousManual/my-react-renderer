import React from 'react'
import { Color } from 'lunchpad';

import Letter from './Letter'

export default function Text(props) {
    const x = props.x || 0;
    const y = props.y || 0;
    const color = props.color || Color.AMBER;

    const [firstLetter, ...rest] = props.text.split('');

    return (
        <Letter letter={firstLetter} color={color} x={x} y={y}>
            {rest.join('')}
        </Letter>
    )
}