import React from 'react'
import ReactDOM from 'react-dom';
import LaunchpadRenderer from './renderer'

import { initialize, Mock, Bridge } from 'lunchpad'
import Shim from './shim/App';

import Wild from './examples/Wild'
import Test from './examples/Test'
import GoL from './examples/gol/Gol'
import Drawing from './examples/Drawing'
import MutTest from './examples/MutTest'
import Text from './examples/Text'

initialize().then(launchpad => {
   const mock0 = new Mock()
   mock0.on('draw', () => {
      ReactDOM.render(<Shim launchpad={mock0} />, document.getElementById('root0'))
   })
   mock0.emit('draw')

   const mock1 = new Mock()
   mock1.on('draw', () => {
      ReactDOM.render(<Shim launchpad={mock1} />, document.getElementById('root1'))
   })
   mock1.emit('draw')

   const mock2 = new Mock()
   mock2.on('draw', () => {
      ReactDOM.render(<Shim launchpad={mock2} />, document.getElementById('root2'))
   })
   mock2.emit('draw')

   const myBridge = new Bridge([mock0, mock1, mock2, launchpad])
   LaunchpadRenderer.render(<Drawing />, myBridge);
});

