import { EventEmitter } from 'events';
import { Color } from 'lunchpad';

class Mock extends EventEmitter {
    pad = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', null],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    setSquare(x, y, color) {


        this.pad[-1 * y + 8][x] = this.mapColor(color);
        this.draw();

        return this;
    }

    setFunctionX(x, color) {
        this.pad[0][x] = this.mapColor(color);
        this.draw();

        return this;
    }

    setFunctionY(y, color) {
        this.pad[y][8] = this.mapColor(color);
        this.draw();

        return this;
    }

    clearAll() {
        console.log('clearAll')

        return this;
    }

    draw() {
        let row = 1;
        for (const y of this.pad) {
            console.log(`${row * -1 + 9}  |  ${y.join(' ')}`);
            row++;
        }
        console.log('--------------------------------')
    }

    mapColor(color) {
        if (color === Color.RED) {
            color = 'R';
        } else if (color === Color.GREEN) {
            color = 'G';
        } else if (color === Color.AMBER) {
            color = 'A';
        } else {
            color = ' ';
        }

        return color;
    }
}

export default () => {
    return new Mock();
}