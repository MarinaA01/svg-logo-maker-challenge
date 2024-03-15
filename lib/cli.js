const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./svg.js');
const SVG = require('./svg.js');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like?',
                choices: ['Triangle', 'Square', 'Circle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like the shape to be?'
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter logo text (Must not be more than three characters)',
                validate: (input) => {
                    if(input.length > 3) {
                        return 'Message is too long';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like the text to be?'
            }
        ])
        .then((answers) => {
            let shape;
            switch (answers.shape) {
                case 'Triangle':
                    shape = new Triangle();
                    break;
                case 'Square':
                    shape = new Square();
                    break;
                case 'Circle':
                    shape = new Circle();
                    break;
            }
            shape.setColor(answers.shapeColor);

            const svg = new SVG();
            svg.setShape(shape);
            svg.setText(text, textColor);
            return writeFile('logo.svg', svg.render());
        })
        .then(() => {
            console.log('Logo created');
        })
        .catch((error) => {
            console.error(error);
            console.log('An error occurred. Please try again');
        });
    }
}

module.exports = CLI;