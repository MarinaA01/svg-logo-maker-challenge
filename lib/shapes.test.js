const { Triangle, Square, Circle } = require('./shapes.js');

describe('Triangle test', () => {
    test("test for a triaangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">`
            );
        });
    });

describe('Square test', () => {
    test("test for a square with a purple background", () => {
            const shape = new Square();
            shape.setColor('purple');
            expect(shape.render()).toEqual(
                `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">`
                );
            });
        });

describe('Circle test', () => {
    test("test for a circle with a red background", () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
            `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`
            );
        });
    });
