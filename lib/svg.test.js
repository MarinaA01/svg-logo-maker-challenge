const SVG = require('./lib/svg.js');
const { Square } = require('./lib/shapes.js');

// Solution code used to create test file

test('should render a 300 x 200 SVG', () => {
    const expected = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
    const svg = new SVG();
    expect(svg.render()).toEqual(expected);
});

