export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error(`NO ROOT PROVIDED FOR DOMLISTENER`)
        }
        this.$root = $root
    }
}