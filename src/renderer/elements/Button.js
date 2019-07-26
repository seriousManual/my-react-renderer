import { Color } from 'lunchpad'

export default class Button {
    constructor({x, y, color, onPress}) {
        this._x = x;
        this._y = y;
        this._color = color || Color.BLACK;
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;
    }

    render() {
        if (!this._launchpad) {
            console.warn('nu?');
        }

        this._launchpad.setSquare(this._x, this._y, this._color);
    }

    prepareUpdate({x, y}) {
        if (this._x !== x || this._y !== y) {
            this.destroy();
        }
    }

    update({x, y, color}) {
        this._setProps(x, y, color);
    }

    destroy() {
        return this._setProps(this._x, this._y, Color.BLACK);
    }

    _setProps(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;

        return this.render();
    }
}