export default () => {
    return {
        setSquare: (...args) => console.log('setSquare', args),
        setFunctionX: (...args) => console.log('setFunctionX', args),
        setFunctionY: (...args) => console.log('setFunctionY', args),
        clearAll: () => console.log('clearAll'),
    }
}