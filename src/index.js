// import React from 'react'
// import LaunchpadRenderer from './renderer'
// import { initialize } from 'lunchpad'
// import getMockLP from './renderer/mockLP';

// import Wild from './examples/Wild'
// import Test from './examples/Test'
// import GoL from './examples/gol/Gol'

// // initialize().then(launchpad => {
// //   LaunchpadRenderer.render(<Test launchpad={launchpad} />);
// // });

// const mockLP = getMockLP();
// LaunchpadRenderer.render(<GoL launchpad={mockLP} />);

// window.beer = mockLP

import React from 'react'
import ReactDOM from 'react-dom';

import getMockLP from './renderer/mockLP';

import Shim from './shim/App';

ReactDOM.render(<Shim launchpad={getMockLP()} />, document.getElementById('root'));