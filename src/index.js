import React from 'react'
import LaunchpadRenderer from './renderer'
import { initialize } from 'lunchpad'

import Wild from './examples/Wild'
import Test from './examples/Test'

initialize().then(launchpad => {
  LaunchpadRenderer.render(<Test launchpad={launchpad} />);
});

