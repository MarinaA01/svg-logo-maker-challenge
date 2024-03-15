// Solution code was used to create this file
class SVG {
    constructor () {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">`
    }
    setText(message, color) {
        if(message.length >3) {
            throw new Error('Message is too long');
        } 
        this.textEl = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${color}">${message}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape.render();
    }
}

module.exports = SVG;