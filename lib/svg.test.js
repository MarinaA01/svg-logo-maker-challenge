const SVG = require('./lib/svg.js');
const { Square } = require('./lib/shapes.js');

// Solution code used to create test file

test('should render a 300 x 200 SVG', () => {
    const expected = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
    const svg = new SVG();
    expect(svg.render()).toEqual(expected);
});

test("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
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

test("should include a shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const square = new Square();
    square.setColor("dodgerblue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });