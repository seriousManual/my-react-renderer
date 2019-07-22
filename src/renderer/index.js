import React from 'react'
import ReactReconciler from 'react-reconciler';
import { Color } from 'lunchpad';
import ButtonElement from './elements/Button';

const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    console.log('getRootHostContext');
    return {}
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    console.log('getChildHostContext');
    return {};
  },

  getPublicInstance(instance) {
    console.log('getPublicInstance');
  },

  prepareForCommit(containerInfo) {
    console.log('prepareForCommit');
  },

  resetAfterCommit(containerInfo) {
    console.log('resetAfterCommit');
  },

  createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log('createInstance', type, props, rootContainerInstance, hostContext);
    
    return new ButtonElement(props);
  },

  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },

  finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext ) {
    console.log('finalizeInitialChildren', domElement, type, props, rootContainerInstance, hostContext);

    // attach event listeners
  },

  prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
    console.log('prepareUpdate', domElement, type, oldProps, newProps);

    //return a payload object that indicates which update should be done

    return {};
  },

  shouldSetTextContent(type, props) {
    console.log('shouldSetTextContent');
    return false; // || true;
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
    console.log('commitMount');
  },

  commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    // run the update payload
  },

  resetTextContent(domElement) {
    console.log('resetTextContent');
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
    container.push(child); 
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
  },

  insertInContainerBefore(container, child, beforeChild) {
    console.log('insertInContainerBefore');
  },

  removeChild(parentInstance, child) {
    console.log('removeChild', parentInstance, child);
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
  render(elements, launchpad, callback) {
    const rootContainer = []
    if (!internalContainerStructure) {
      internalContainerStructure = LPRenderer.createContainer(rootContainer, false, false);
    }

    LPRenderer.updateContainer(elements, internalContainerStructure, null, callback);
  }
}

export function Button(props) {
  const { onPress, onRelease, x, y, color } = props;

  if (onRelease) {
    console.warn('onRelease is not implemented yet');
  }

  return <bier x={x} y={y} color={color} />
}

export function FunctionX(props) {
  return <bar />
}

export function FunctionY(props) {
  return <foo />
}

export { Color } from 'lunchpad'