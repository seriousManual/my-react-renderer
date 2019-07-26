import { Color } from 'lunchpad'

export default class FunctionY {
    constructor({y, color}) {
        this._y = y;
        this._color = color;
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;
    }

    render() {
        if (!this._launchpad) {
            console.warn('nu?');
        }

        this._launchpad.setFunctionY(this._y, this._color);
    }

    prepareUpdate({y}) {
        if (this._y !== y) {
            this.destroy();
        }
    }

    update({y, color}) {
        this._setProps(y, color);
    }

    destroy() {
        return this._setProps(this._y, Color.BLACK);
    }

    _setProps(y, color) {
        this._y = y;
        this._color = color;

        return this.render();
    }
}