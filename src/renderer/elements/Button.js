import { Color } from 'lunchpad'
import * as debug from 'debug';

export default class Button {
    constructor({x, y, color, onPress, launchpad}) {
        this._launchpad = launchpad;
        this._x = x;
        this._y = y;
        this._color = color || Color.BLACK;
        this._onPress = onPress || undefined;
        this._onPressWrapped = undefined;

        this._debug = debug(`react-lp:reconciler:${this._getDebugName()}`);

        this.render();
        this._registerEventHandler();
    }

    _getDebugName() {
        return `button:${this._x}_${this._y}`
    }

    render() {
        if (this._x < 0 || this._x > 8 || this._y < 0 || this._y > 8) {
            return;
        }

        if (this._color.getCode() === 0) {
            this._debug('unset');
        } else {
            this._debug('set', this._color.getCode());
        }        

        this._setColor();
    }

    _setColor() {
        this._launchpad.setSquare(this._x, this._y, this._color);
    }

    prepareUpdate({x = 8, y = 8, onPress}) {
        if (this._x !== x || this._y !== y) {
            this.destroy();
        }

        if (this._onPress && this._onPress !== onPress) {
            this._dropEventListener();
        }
    }

    update({x = 8, y = 8, color = Color.BLACK, onPress}) {
        if (onPress && this._onPress !== onPress) {
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
        this._debug('destroy');

        this.update({x: this._x, y: this._y, color: Color.BLACK});
        this._dropEventListener();
    }

    _registerEventHandler() {
        if (!this._onPress) {
            return;
        }

        this._debug('addListener');
        this._bindEventHandler();
    }

    _bindEventHandler() {
        this._onPressWrapped = (x = 8, y = 8) => {
            if (x !== this._x || y !== this._y) return;

            this._debug('press');
            this._onPress();
        };

        this._launchpad.on('input', this._onPressWrapped);
    }

    _dropEventListener() {
        if (!this._onPressWrapped) {
            return;
        }

        this._debug('removeListener');
        this._unbindEventListener();

        this._onPressWrapped = null;
    }

    _unbindEventListener() {
        this._launchpad.removeListener('input', this._onPressWrapped);
    }
}