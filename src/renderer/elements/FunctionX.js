import { Color } from 'lunchpad'

export default class FunctionX {
    constructor({x, color, onPress}) {
        this._x = x;
        this._color = color || Color.BLACK;
        this._onPress = onPress || undefined;
        this._onPressWrapped = undefined;
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;

        this.render();
        this._registerEventHandler();
    }

    render() {
        this._launchpad.setFunctionX(this._x, this._color);
    }

    prepareUpdate({x, onPress}) {
        if (this._x !== x) {
            this.destroy();
        }

        if (this._onPress && this._onPress !== onPress) {
            this._removeEventListener();
        }
    }

    update({x, color, onPress}) {
        if (this._onPress !== onPress) {
            this._onPress = onPress;
            this._registerEventHandler();
        }

        if (this._x === x && this._color.getCode() === color.getCode()) {
            return;
        }

        this._x = x;
        this._color = color;

        return this.render();
    }

    destroy() {
        this.update({x: this._x, color: Color.BLACK});
        this._removeEventListener();
    }

    _registerEventHandler() {
        if (!this._onPress) {
            return;
        }

        this._onPressWrapped = (x) => {
            if (x !== this._x) {
                return;
            }

            this._onPress();
        };

        this._launchpad.on('functionX', this._onPressWrapped);
    }

    _removeEventListener() {
        if (!this._onPressWrapped) {
            return;
        }

        this._launchpad.removeListener('functionX', this._onPressWrapped);
        this._onPressWrapped = null;
    }
}