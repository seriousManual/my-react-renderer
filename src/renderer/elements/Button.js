import { Color } from 'lunchpad'

export default class Button {
    constructor(lp, {x, y, color}) {
        this._lp = lp;
        
        if (x === undefined || y === undefined || color === undefined) {
            throw new Error('x, y or color missing');
        }

        this._x = x;
        this._y = y;
        this._color = color;
    }

    update({x, y, color}) {
        const updates = [];
        if (this._x !== x || this._y !== y) {
            updates.push(this._unset);
        }

        updates.push(this._setProps(x, y, color));

        return updates;
    }

    destroy() {
        return [this._unset()];
    }

    _setProps(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;

        return ['setSquare', x, y, color];
    }

    _unset() {
        return ['setSquare', this._x, this._y, Color.BLACK];
    }
}