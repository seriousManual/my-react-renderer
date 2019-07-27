import { Color } from 'lunchpad'

export default class FunctionY {
    constructor({y, color, onPress}) {
        this._y = y;
        this._color = color;
        this._onPress = onPress || undefined;
        this._onPressWrapped = undefined;
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;
        this.render();
    }

    render() {
        this._launchpad.setFunctionY(this._y, this._color);
        this._registerEventHandler();
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
        if (this._y === y && this._color.getCode() === color.getCode() && this._onPress === onPress) {
            return;
        }

        this._y = y;
        this._color = color;
        this._onPress = onPress;

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