import { Color } from 'lunchpad'

export default class Launchpad {
    children = [];

    constructor({ launchpad }) {
      this._lp = launchpad;
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