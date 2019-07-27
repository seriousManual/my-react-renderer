export default class Launchpad {
    children = [];

    constructor({ launchpad, onButtonPress, onFunctionXPress, onFunctionYPress }) {
      this._lp = launchpad;
      this._onButtonPress = onButtonPress;
      this._onFunctionXPress = onFunctionXPress;
      this._onFunctionYPress = onFunctionYPress;

      // TODO: remove event listener when the element is unmounted? memory leak?
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
  
    appendChild(child) {
      child.setLaunchpad(this._lp);
      this.children.push(child);
    }
  
    removeChild(child) {
      const index = this.children.indexOf(child);
      this.children.splice(index, 1);

      child.destroy();
    }
}