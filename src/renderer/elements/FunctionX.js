import Button from './Button'

export default class FunctionX extends Button {
    constructor({x, color, onPress}) {
        super({x, color, onPress, y: 8})
    }
}