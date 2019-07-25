import { Color } from 'lunchpad'

export default class Button {
    constructor({x, y, color}) {
        if (x === undefined || y === undefined || color === undefined) {
            throw new Error('x, y or color missing');
        }

        if (x < 0 || x > 7) {
            throw new Error(`x is outside bounds (0-7): "${x}"`);
        }

        if (y < 0 || y > 7) {
            throw new Error(`y is outside bounds (0-7): "${y}"`);
        }

        this._x = x;
        this._y = y;
        this._color = color;
    }

    render() {
        return  [this._execute()];
    }

    update({x, y, color}) {
        let updates = [];
        if (this._x !== x || this._y !== y) {
            updates = updates.concat(this.destroy());
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
        return {setSquare: [this._x, this._y, this._color]}
    }
}