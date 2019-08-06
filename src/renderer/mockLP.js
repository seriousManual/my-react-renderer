import { EventEmitter } from 'events';
import { Color } from 'lunchpad';

class Mock extends EventEmitter {
    pad = [
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, null],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
        [Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK, Color.BLACK],
    ];

    setSquare(x, y, color) {
        this.pad[-1 * y + 8][x] = color;
        this.draw();

        return this;
    }

    setFunctionX(x, color) {
        this.pad[0][x] = color;
        this.draw();

        return this;
    }

    setFunctionY(y, color) {
        this.pad[-1 * y + 8][8] = color;
        this.draw();

        return this;
    }

    clearAll() {
        console.log('clearAll')

        return this;
    }

    draw() {
        // console.log(this.pad);
        // let row = 1;
        // for (const xRow of this.pad) {
        //     const xRowString = xRow.map(color => this.mapColor(color)).join(' ');
        //     console.log(`${row * -1 + 9}  |  ${xRowString}`);
        //     row++;
        // }
        // console.log('--------------------------------')
        this.emit('rerender');
    }

    mapColor(color) {
        const r = color.getRed();
        const g = color.getGreen();

        if (r > 0 && g > 0) {
            return 'A';
        }

        if (r > 0) {
            return 'R';
        }

        if (g > 0) {
            return 'G';
        }

        return ' ';
    }
}

export default () => {
    return new Mock();
}