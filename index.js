// Declaring Node Module Variables 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const markdown = require('./utils/generateMarkdown');

// Prompt user with inquirer for Readme.md content
// Project Title, Description, Usage, Installation, Contributing, Tests, Questions, License
const userPrompt = [
    // Prompt user for project title
    {
        name: "projectTitle",
        message: "What would you like your project to be called?",
        type: "input",

    },
    // Prompt user for short project description
    {
        name: "description",
        message: "Briefly describe your project:",
        type: "input",
    },
    // Pompt user for usage instructions
    {
        name: "usage",
        message: "Leave a written demonstration on how to use your project",
        type: "input",
    },
    // Prompt user for installation instructions
    {
        name: "installation",
        message: "In this section, provide installation instructions for your project if required",
        type: "input",
    },
    // Prompt user for project contributors
    {
        name: "contributing",
        message: "List your contributors for this project",
        type: "input",
    },
    {
        name: "test",
        message: "Provide test information for your project (if applicable)",
        type: "input",
    },
    {
        name: "questions",
        message: "Section for further questions regarding your project",
        type: "input",
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err)
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {

    }
}

// Function call to initialize app
init();
