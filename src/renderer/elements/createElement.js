import ButtonElement from './Button';
import FunctionXElement from './FunctionX';
import FunctionYElement from './FunctionY';
import LaunchpadElement from './Launchpad';

const BUTTON = 'button';
const FUNCTION_X = 'functionX';
const FUNCTION_Y = 'functionY';
const LAUNCHPAD = 'launchpad'

const map = {
  [BUTTON]: ButtonElement,
  [FUNCTION_X]: FunctionXElement,
  [FUNCTION_Y]: FunctionYElement,
  [LAUNCHPAD]: LaunchpadElement,
};

export default function createElement(type, props, launchpad) {
    const newProps = {...props, launchpad};
console.log({newProps});
    if (type === BUTTON) {
        return createButton(newProps);
    }

    if (map[type]) {
        return new map[type](newProps);
    }

    return null;
}

function createButton(props) {
    if (props.x === 8) {
        return new FunctionYElement(props);
    }

    if (props.y === 8) {
        return new FunctionXElement(props);
    }

    return new ButtonElement(props);
}