const SVG = require('./lib/svg.js');
const { Square } = require('./lib/shapes.js');

// Solution code used to create test file

test('should render a 300 x 200 SVG', () => {
    const expected = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
    const svg = new SVG();
    expect(svg.render()).toEqual(expected);
});

test('should add text element', () => {
    const svg = new SVG();
    svg.setText('test', 'red');
    expect(svg.textEl).toEqual('<text x="150" y="130" text-anchor="middle" font-size="40" fill="red">test</text>');
});

test('should set up message and color', () => {
    const expectedSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSVG);
});

test('should throw if text is too long', () => {
    const expectedError = new Error('Message is more than three characters');
    const svg = new SVG();
    expect(() => svg.setText('HELLO', '#333')).toThrow(expectedError);

});