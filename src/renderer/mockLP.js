import { EventEmitter } from 'events';
import { Color } from 'lunchpad';
import debug from 'debug'

const mockDebug = debug('react-lp:mock');

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
        mockDebug('setSquare', x, y, color);
        this.pad[-1 * y + 8][x] = color;

        return this;
    }

    setFunctionX(x, color) {
        mockDebug('setFunctionX', x, color);
        this.pad[0][x] = color;

        return this;
    }

    setFunctionY(y, color) {
        mockDebug('setFunctionY', y, color);
        this.pad[-1 * y + 8][8] = color;

        return this;
    }

    clearAll() {
        return this;
    }

    flush() {
        this._draw();
        return this;
    }

    _draw() {
        this.emit('rerender');
    }
}

export default () => {
    return new Mock();
}