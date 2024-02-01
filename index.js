const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { type } = require('os');

class CLI {
    constructor() {
        this.shapes = [];
    }

    run() {
        return inquirer
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
}