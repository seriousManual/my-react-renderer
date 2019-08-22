export default class Launchpad {
    children = [];

    constructor({ launchpad, onButtonPress, onFunctionXPress, onFunctionYPress }) {
      this._lp = launchpad;
      this._onButtonPress = onButtonPress;
      this._onFunctionXPress = onFunctionXPress;
      this._onFunctionYPress = onFunctionYPress;

      this._registerHandlers();
    }
  
    appendChild(child) {
      this.children.push(child);
    }
  
    removeChild(child) {
      const index = this.children.indexOf(child);
      this.children.splice(index, 1);

      child.destroy();
    }

    update({onButtonPress, onFunctionXPress, onFunctionYPress}) {
      if (onButtonPress !== this._onButtonPress || onFunctionXPress !== this._onFunctionXPress || onFunctionYPress !== this.onFunctionYPress) {
        this._unregisterHandlers();
        this._onButtonPress = onButtonPress;
        this._onFunctionXPress = onFunctionXPress;
        this._onFunctionYPress = onFunctionYPress;
        this._registerHandlers();
      }
    }

    destroy() {
      this._unregisterHandlers();
    }

    _registerHandlers() {
      if (this._onButtonPress) {
        this._lp.on('input', this._onButtonPress);
      }

      if (this._onFunctionXPress) {
        this._lp.on('functionX', this._onFunctionXPress);
      }

      if (this._onFunctionYPress) {
        this._lp.on('functionY', this._onFunctionYPress);
      }
    }

    _unregisterHandlers() {
      if (this._onButtonPress) {
        this._lp.removeListener('input', this._onButtonPress);
      }

      if (this._onFunctionXPress) {
        this._lp.removeListener('functionX', this._onFunctionXPress);
      }

      if (this._onFunctionYPress) {
        this._lp.removeListener('functionY', this._onFunctionYPress);
      }
    }
}