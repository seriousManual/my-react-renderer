import { Color } from 'lunchpad'

export default class Launchpad {
    children = [];

    constructor({ launchpad }) {
      this._lp = launchpad;
    }
  
    appendChild(child) {
      this.children.push(child);
      this.executeOrders(child.render());
    }
  
    // Remove children
    removeChild(child) {
      const index = this.children.indexOf(child);
      this.children.splice(index, 1);

      this.executeOrders(child.destroy());
    }
  
    render() {
      const orders = this.children.reduce((carray, child) => {
        carray = carray.concat(child.render());
        return carray;
      }, []);

      this.executeOrders(orders);
    }

    executeOrders(orders) {
      for(const order of orders) {
        Object.keys(order).forEach(key => {
          // console.log(key, order[key]);
          this._lp[key](...order[key])
        })
      }
    }
}