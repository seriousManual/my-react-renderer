import ReactReconciler from 'react-reconciler';
import ButtonElement from './elements/Button';
import FunctionXElement from './elements/FunctionX';
import FunctionYElement from './elements/FunctionY';
import RootElement from './elements/Root';
import LaunchpadElement from './elements/Launchpad';

const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    // console.log('getRootHostContext');
    return {}
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    // console.log('getChildHostContext');
    return {};
  },

  getPublicInstance(instance) {
    console.log('getPublicInstance');
  },

  prepareForCommit(containerInfo) {
    console.log('prepareForCommit', containerInfo);
  },

  resetAfterCommit(containerInfo) {
    console.log('resetAfterCommit', containerInfo);
  },

  createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createInstance', type, props, rootContainerInstance, hostContext);
    
    switch (type) {
      case 'button':
          return new ButtonElement(props);
      case 'launchpad':
        return new LaunchpadElement(props);
      case 'functionX':
        return new FunctionXElement(props);
      case 'functionY':
        return new FunctionYElement(props);
      default:
        return null;
    }
    
  },

  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild', parentInstance, child);
    parentInstance.appendChild(child)
  },

  finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext ) {
    console.log('finalizeInitialChildren', domElement, type, props, rootContainerInstance, hostContext);

    // attach event listeners
  },

  prepareUpdate(lpElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
    console.log('prepareUpdate', lpElement, type, oldProps, newProps);

    if (type === 'button') {
      lpElement.prepareUpdate(newProps);
    }

    return {};
  }, 

  shouldSetTextContent(type, props) {
    // console.log('shouldSetTextContent');
    return false;
  },

  shouldDeprioritizeSubtree(type, props) {
    console.log('shouldDeprioritizeSubtree');
  },

  createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createTextInstance', text, rootContainerInstance, hostContext,);
    return document.createTextNode(text);
  },

  now: Date.now,

  isPrimaryRenderer: true,
  scheduleDeferredCallback: "",
  cancelDeferredCallback: "",

  // -------------------
  //     Mutation
  // -------------------

  supportsMutation: true,

  commitMount(domElement, type, newProps, internalInstanceHandle) {
    console.log('commitMount', domElement, type, newProps, internalInstanceHandle);
  },

  commitUpdate(lpElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    console.log('commitUpdate', {lpElement, updatePayload, type, oldProps, newProps, internalInstanceHandle})
    
    if (type === 'button') {
      lpElement.update(newProps);
    }
    
  },

  resetTextContent(domElement) {
    console.log('resetTextContent', domElement);
  },

  commitTextUpdate(textInstance, oldText, newText) {
    console.log('commitTextUpdate', oldText, newText);
    textInstance.nodeValue = newText;
  },

  appendChild(parentInstance, child) {
    console.log('appendChild', parentInstance, child);
    parentInstance.appendChild(child);
  },

  appendChildToContainer(container, child) {
    console.log('appendChildToContainer', container, child);
    container.appendChild(child); 
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
  },

  insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore');
  },

  removeChild(parentInstance, child) {
    console.log('removeChild', {parentInstance, child});
    parentInstance.removeChild(child);
  },

  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer', container, child);
    container.removeChild(child);
  }
};

const LPRenderer = ReactReconciler(hostConfig);

let internalContainerStructure;
export default {
  render(elements, callback) {
    const root = new RootElement();

    if (!internalContainerStructure) {
      internalContainerStructure = LPRenderer.createContainer(root, false, false);
    }

    LPRenderer.updateContainer(elements, internalContainerStructure, null, callback);
  }
}

export { Color } from 'lunchpad'