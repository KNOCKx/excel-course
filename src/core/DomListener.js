import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`NO ROOT PROVIDED FOR DOMLISTENER`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListener() {
        // console.log(this.listeners)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`method ${method} is not in ${this.name}`)
            }
            console.log(this)
            // Тоже самое что и addEventListener
            this.$root.on(listener, this[method].bind(this))
        })
    }
    removeDOMListener() {
    }
}
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}