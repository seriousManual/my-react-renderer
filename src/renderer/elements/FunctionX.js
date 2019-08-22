import Button from './Button'

export default class FunctionX extends Button {
    constructor(props) {
        super({...props, y: 8})
    }

    _getDebugName() {
        return `functionX:${this._x}`;
    }

    _setColor() {
        this._launchpad.setFunctionX(this._x, this._color);
    }

    _bindEventHandler() {
        this._onPressWrapped = x => {
            if (x !== this._x) return;

            this._debug('press');
            this._onPress();
        }

        this._launchpad.on('functionX', this._onPressWrapped);
    }

    _unbindEventListener() {
        this._launchpad.removeListener('functionX', this._onPressWrapped);
    }
}