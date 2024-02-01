class Circle {
    render () {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" />
      </svg>`
    }
}

class Square {
    render () {
        return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Simple rectangle -->
        <rect width="100" height="100" />
      </svg>`
    }
}

class Triangle {
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <polygon points="100,10 40,198 190,78" fill="blue" />
      </svg>`
    }
}