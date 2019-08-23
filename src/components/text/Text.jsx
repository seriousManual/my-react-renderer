import React from 'react'
import { Color } from 'lunchpad';

import Letter from './Letter'

export default function Text(props) {
    const x = props.x || 0;
    const y = props.y || 0;
    const color = props.color || Color.AMBER;

    const letters = props.text
        .split('')
        .filter(Boolean)
        .map(letter => letter.toUpperCase());

    return (
        <>
            {letters.map((letter, index) => {
                console.log(x + index * 3 + 1);

                return <Letter key={index} letter={letter} x={x + index * 4} y={y} color={color} />
            })}   
        </>
    )
}