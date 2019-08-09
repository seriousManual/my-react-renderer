export default class Root {
    children = [];
  
    appendChild(child) {
      this.children.push(child);
    }
  
    // Remove children
    removeChild(child) {
      console.log('remove from root');
      const index = this.children.indexOf(child);
      this.children.splice(index, 1);

      child.destroy();
    }
  
    render() {
      for (const child of this.children) {
        child.render();
      }
    }
  }