import { Color } from 'lunchpad'

export default class FunctionY {
    constructor({y, color, onPress}) {
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
        this._launchpad.setFunctionY(this._y, this._color);
    }

    prepareUpdate({y, onPress}) {
        if (this._y !== y) {
            this.destroy();
        }

        if (this._onPress && this._onPress !== onPress) {
            this._removeEventListener();
        }
    }

    update({y, color, onPress}) {
        if (this._onPress !== onPress) {
            this._onPress = onPress;
            this._registerEventHandler();
        }

        if (this._y === y && this._color.getCode() === color.getCode()) {
            return;
        }

        this._y = y;
        this._color = color;

        return this.render();
    }

    destroy() {
        this.update({y: this._y, color: Color.BLACK});
        this._removeEventListener();
    }

    _registerEventHandler() {
        if (!this._onPress) {
            return;
        }

        this._onPressWrapped = (y) => {
            if (y !== this._y) {
                return;
            }

            this._onPress();
        };

        this._launchpad.on('functionY', this._onPressWrapped);
    }

    _removeEventListener() {
        if (!this._onPressWrapped) {
            return;
        }

        this._launchpad.removeListener('functionY', this._onPressWrapped);
        this._onPressWrapped = null;
    }
}