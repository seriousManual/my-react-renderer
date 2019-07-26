import { Color } from 'lunchpad'

export default class FunctionX {
    constructor({x, color}) {
        this._x = x;
        this._color = color;
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;
    }

    render() {
        if (!this._launchpad) {
            console.warn('nu?');
        }

        this._launchpad.setFunctionX(this._x, this._color);
    }

    prepareUpdate({x}) {
        if (this._x !== x) {
            this.destroy();
        }
    }

    update({x, color}) {
        this._setProps(x, color);
    }

    destroy() {
        return this._setProps(this._x, Color.BLACK);
    }

    _setProps(x, color) {
        this._x = x;
        this._color = color;

        return this.render();
    }
}