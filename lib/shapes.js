class Shape {
    constructor () {
        this.color = '';
    }
    // Solution code used for setter function
    setColor (color) {
        this.color = color;
    }
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle

class Circle extends Shape {
    render () {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
      </svg>`
    }
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

class Square extends Shape {
    render () {
        return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Simple rectangle -->
        <rect width="100" height="100" fill="${this.color}" />
      </svg>`
    }
}

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon

class Triangle extends Shape {
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <polygon points="100,10 40,198 190,78" fill="${this.color}" />
      </svg>`
    }
}

module.exports = { Circle, Square, Triangle };