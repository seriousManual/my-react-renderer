import React from 'react'
import ReactDOM from 'react-dom';
import LaunchpadRenderer from './renderer'

// import { initialize } from 'lunchpad'
import getMockLP from './renderer/mockLP';
import Shim from './shim/App';

import Wild from './examples/Wild'
import Test from './examples/Test'
import GoL from './examples/gol/Gol'

const mockLP = getMockLP();

mockLP.on('rerender', renderMock);

// initialize().then(launchpad => {
//   LaunchpadRenderer.render(<Test launchpad={mockLP} />);
// });

function renderMock() {
    ReactDOM.render(<Shim launchpad={mockLP} />, document.getElementById('root'));
}


LaunchpadRenderer.render(<GoL launchpad={mockLP} />);

renderMock();