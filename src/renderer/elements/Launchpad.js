import { Color } from 'lunchpad'

export default class Launchpad {
    children = [];
  
    appendChild(child) {
      this.children.push(child);
    }
  
    // Remove children
    removeChild(child) {
      console.log('lp:removeChild', child);
    }
  
    render() {
      return this.children.map(c => c.render());
    }
}