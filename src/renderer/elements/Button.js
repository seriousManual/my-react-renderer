import { Color } from 'lunchpad'

export default class Button {
    constructor({x, y, color}) {
        if (x === undefined || y === undefined || color === undefined) {
            throw new Error('x, y or color missing');
        }

        this._x = x;
        this._y = y;
        this._color = color;
    }

    render() {
        return  [this._execute()];
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
        return [this._setProps(this._x, this._y, Color.BLACK)];
    }

    _setProps(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;

        return this._execute();
    }

    _execute() {
        return ['setSquare', this._x, this._y, this._color]
    }
}