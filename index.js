const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes.js');
const { join } = require('path');
const { fs } = require('fs/promises');
const { type } = require('os');

function writeFile(fileName, answers) {
    let svgString = '';

    svgString = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`;

    svgString += `<g>`
    svgString += `<${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'circle') {
        shapeChoice = new Circle();
        svgString += `cx="50" cy="50" r="50" fill="${answers.color}" />`;
    } else if (answers.shape === 'triangle') {
        shapeChoice = new Triangle();
        svgString += `points="100,10 40,198 190,78" fill="${answers.color}" />`;
    } else {
        shapeChoice = new Square();
        svgString += `width="100" height="100" fill="${answers.color}" />`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
svgString += "</g>";
svgString += "</svg>";
    
}

function run() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'initials',
            message: 'Please enter your initials: '
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter a color or hexidecimal number: '
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape for your logo: ',
            choices: ['square', 'triangle', 'circle']
        }
    ])
}

run();