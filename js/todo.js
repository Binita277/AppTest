export default class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
    }
}