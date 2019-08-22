import debug from 'debug';
import ReactReconciler from 'react-reconciler';
import * as scheduler from 'scheduler';

import RootElement from './elements/Root';
import createElement from './elements/createElement'

const reconcilerDebug = debug('react-lp:reconciler');

const hostConfig = {
  getRootHostContext(rootContainerInstance) {
    return {}
  },

  getChildHostContext(parentHostContext, type, rootContainerInstance) {
    return {};
  },

  getPublicInstance(instance) {
    reconcilerDebug('getPublicInstance');
  },

  prepareForCommit(containerInfo) {
    reconcilerDebug('prepareForCommit', containerInfo);
  },

  resetAfterCommit(containerInfo) {
    reconcilerDebug('resetAfterCommit', containerInfo);
  },

  createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
    reconcilerDebug('createInstance', type, props, rootContainerInstance, hostContext);

    return createElement(type, props);
  },

  appendInitialChild(parentInstance, child) {
    reconcilerDebug('appendInitialChild', parentInstance, child);
    parentInstance.appendChild(child)
  },

  finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext ) {
    reconcilerDebug('finalizeInitialChildren', domElement, type, props, rootContainerInstance, hostContext);
  },

  prepareUpdate(lpElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
    reconcilerDebug('prepareUpdate', lpElement, type, oldProps, newProps);

    if (lpElement.prepareUpdate) {
      lpElement.prepareUpdate(newProps);
    }

    return {};
  }, 

  shouldSetTextContent(type, props) {
    return false;
  },

  shouldDeprioritizeSubtree(type, props) {
    reconcilerDebug('shouldDeprioritizeSubtree');
  },

  createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    reconcilerDebug('createTextInstance', text, rootContainerInstance, hostContext,);
    return document.createTextNode(text);
  },

  now: Date.now,

  isPrimaryRenderer: true,

  scheduleDeferredCallback: scheduler.unstable_scheduleCallback,
  cancelDeferredCallback: scheduler.unstable_cancelCallback,
  schedulePassiveEffects: scheduler.unstable_scheduleCallback,
  cancelPassiveEffects: scheduler.unstable_cancelCallback,

  // -------------------
  //     Mutation
  // -------------------

  supportsMutation: true,

  commitMount(domElement, type, newProps, internalInstanceHandle) {
    reconcilerDebug('commitMount', domElement, type, newProps, internalInstanceHandle);
  },

  commitUpdate(lpElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    reconcilerDebug('commitUpdate', {lpElement, updatePayload, type, oldProps, newProps, internalInstanceHandle})

    if (lpElement.update) {
      lpElement.update(newProps);
    }
  },

  resetTextContent(domElement) {
    reconcilerDebug('resetTextContent', domElement);
  },

  commitTextUpdate(textInstance, oldText, newText) {
    reconcilerDebug('commitTextUpdate', oldText, newText);
    textInstance.nodeValue = newText;
  },

  appendChild(parentInstance, child) {
    reconcilerDebug('appendChild', parentInstance, child);
    parentInstance.appendChild(child);
  },

  appendChildToContainer(container, child) {
    reconcilerDebug('appendChildToContainer', container, child);
    container.appendChild(child); 
  },

  insertBefore(parentInstance, child, beforeChild) {
    reconcilerDebug('insertBefore');
    parentInstance.appendChild(child);
  },

  insertInContainerBefore(container, child, beforeChild) {
    reconcilerDebug('insertInContainerBefore');
  },

  removeChild(parentInstance, child) {
    reconcilerDebug('removeChild', {parentInstance, child});
    parentInstance.removeChild(child);
  },

  removeChildFromContainer(container, child) {
    reconcilerDebug('removeChildFromContainer', container, child);
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