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

    if (type === BUTTON) {
        return createButton(newProps);
    }

    if (map[type]) {
        return new map[type](newProps);
    }

    // const matchLetter = type.match(/f([A-Ha-h])/);
    // if (matchLetter) {
    //     const numberInAlphabet = matchLetter[1].toLowerCase().charCodeAt(0) - 97;
    //     const y = (numberInAlphabet * -1) + 7

    //     return new map[FUNCTION_Y]({ ...newProps, y });
    // }

    // const matchNumber = type.match(/f([1-8])/);
    // if (matchNumber) {
    //     const x = matchNumber[1] - 1;

    //     return new map[FUNCTION_X]({ ...newProps, x });
    // }

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