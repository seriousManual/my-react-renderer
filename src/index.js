import React from 'react'
import ReactDOM from 'react-dom';
import LaunchpadRenderer from './renderer'

import { initialize } from 'lunchpad'
import getMockLP from './renderer/mockLP';
import Shim from './shim/App';

import Wild from './examples/Wild'
import Test from './examples/Test'
import GoL from './examples/gol/Gol'
import Drawing from './examples/Drawing'
import MutTest from './examples/MutTest'

// initialize().then(launchpad => {
//   LaunchpadRenderer.render(<GoL launchpad={launchpad} />);
// });

const mockLP = getMockLP();
mockLP.on('rerender', renderMock);

function renderMock() {
   ReactDOM.render(<Shim launchpad={mockLP} />, document.getElementById('root'));
}

LaunchpadRenderer.render(<GoL />, mockLP);
renderMock();