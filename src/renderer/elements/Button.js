import { Color } from 'lunchpad'

export default class Button {
    constructor({x, y, color, onPress}) {
        this._x = x;
        this._y = y;
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
        this._launchpad.setSquare(this._x, this._y, this._color);
    }

    prepareUpdate({x, y, onPress}) {
        if (this._x !== x || this._y !== y) {
            this.destroy();
        }

        if (this._onPress && this._onPress !== onPress) {
            this._removeEventListener();
        }
    }

    update({x, y, color = Color.BLACK, onPress}) {
        if (this._onPress !== onPress) {
            this._onPress = onPress;
            this._registerEventHandler();
        }

        if (this._x === x && this._y === y && this._color.getCode() === color.getCode()) {
            return;
        }

        this._x = x;
        this._y = y;
        this._color = color;

        this.render();
    }

    destroy() {
        this.update({x: this._x, y: this._y, color: Color.BLACK});
        this._removeEventListener();
    }

    _registerEventHandler() {
        if (!this._onPress) {
            return;
        }

        this._onPressWrapped = (x, y) => {
            if (x !== this._x || y !== this._y) {
                return;
            }

            this._onPress();
        };

        this._launchpad.on('input', this._onPressWrapped);
    }

    _removeEventListener() {
        if (!this._onPressWrapped) {
            return;
        }

        this._launchpad.removeListener('input', this._onPressWrapped);
        this._onPressWrapped = null;
    }
}