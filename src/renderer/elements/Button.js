import { Color } from 'lunchpad'
import * as debug from 'debug';

export default class Button {
    constructor({x, y, color, onPress}) {
        this._x = x;
        this._y = y;
        this._color = color || Color.BLACK;
        this._onPress = onPress || undefined;
        this._onPressWrapped = undefined;

        let debugName = `button:${this._x}_${this._y}`;
        if (this._isFunctionX()) {
            debugName = `functionX:${this._x}`;
        } else if (this._isFunctionY()) {
            debugName = `functionY:${this._y}`;
        }

        this._debug = debug(`react-lp:reconciler:${debugName}`);
    }

    setLaunchpad(launchpad) {
        this._launchpad = launchpad;

        this.render();
        this._registerEventHandler();
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

        if (this._isFunctionY()) {
            this._launchpad.setFunctionY(this._y, this._color);
        } else if (this._isFunctionX()) {
            this._launchpad.setFunctionX(this._x, this._color);
        } else {
            this._launchpad.setSquare(this._x, this._y, this._color);
        }
    }

    prepareUpdate({x = 8, y = 8, onPress}) {
        if (this._x !== x || this._y !== y) {
            this.destroy();
        }

        if (this._onPress && this._onPress !== onPress) {
            this._removeEventListener();
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
        this._removeEventListener();
    }

    _registerEventHandler() {
        if (!this._onPress) {
            return;
        }

        this._debug('addListener');

        if (this._isFunctionY()) {
            this._onPressWrapped = y => {
                if (y !== this._y) return;

                this._debug('press');
                this._onPress();
            }

            this._launchpad.on('functionY', this._onPressWrapped);
        } else if (this._isFunctionX()) {
            this._onPressWrapped = x => {
                if (x !== this._x) return;

                this._debug('press');
                this._onPress();
            }

            this._launchpad.on('functionX', this._onPressWrapped);
        } else {
            this._onPressWrapped = (x = 8, y = 8) => {
                if (x !== this._x || y !== this._y) return;
    
                this._debug('press');
                this._onPress();
            };

            this._launchpad.on('input', this._onPressWrapped);
        }
    }

    _removeEventListener() {
        if (!this._onPressWrapped) {
            return;
        }

        this._debug('removeListener');

        if (this._isFunctionY()) {
            this._launchpad.removeListener('functionY', this._onPressWrapped);
        } else if (this._isFunctionX()) {
            this._launchpad.removeListener('functionX', this._onPressWrapped);
        } else {
            this._launchpad.removeListener('input', this._onPressWrapped);
        }

        this._onPressWrapped = null;
    }

    _isFunctionX() {
        return this._y === 8;
    }

    _isFunctionY() {
        return this._x === 8;
    }
}