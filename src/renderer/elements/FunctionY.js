import Button from './Button';

export default class FunctionY extends Button {
    constructor({y, color, onPress}) {
        super({y, color, onPress, x: 8});
    }

    _getDebugName() {
        return `functionY:${this._y}`;
    }

    _setColor() {
        this._launchpad.setFunctionY(this._y, this._color);
    }

    _bindEventHandler() {
        this._onPressWrapped = y => {
            if (y !== this._y) return;

            this._debug('press');
            this._onPress();
        }

        this._launchpad.on('functionY', this._onPressWrapped);
    }

    _unbindEventListener() {
        this._launchpad.removeListener('functionY', this._onPressWrapped);
    }
}