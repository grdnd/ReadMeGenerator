// Declaring Node Module Variables 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const writeToFile = util.promisify(fs.writeFile)
const generateMarkdown = require('./utils/generateMarkdown');

// Function prompts user using inquirer.prompt to Readme.md Content
// Generate questions for: Project Title, Description, Usage, Installation, Contributing, Tests, Questions, License
// Table of Contents generated in generateMarkdown file)
function userPrompt(){
    return inquirer.prompt ([
    // Prompt user for project title
        {
            name: "projectTitle",
            message: "What is the name of your project?: ",
            type: "input",
        },
        // Prompt user for short project description
        {
            name: "description",
            message: "Briefly describe your project: ",
            type: "input",
        },
        // Pompt user for usage instructions
        {
            name: "usage",
            message: "Enter your project usage information: ",
            type: "input",
        },
        // Prompt user for installation instructions
        {
            name: "installation",
            message: "If required, provide installation instructions for your project: ",
            type: "input",
        },
        // Prompt user for project contributors
        {
            name: "contributing",
            message: "Display contribution guidelines here: ",
            type: "input",
        },
        {
            name: "test",
            message: "Provide test information or procedures for your project: ",
            type: "input",
        },
        {
            name: "questions",
            message: "Please provide GitHub profile for questions section: ",
            type: "input",
        },
    ]);
}

// Function writes README.md file using fs module
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("README.md has been created")
//     });
// }

// TODO: Create a function to initialize app
// Combined function using util.promisify(fs.writeFile) initializes app then creates Readme
async function init() {
    try {
        // function initializes after user answers prompt
        const userInput = await userPrompt();
        // generate readme using markdown after user inputs
        const generateReadme = generateMarkdown(userInput);
        // Create Readme.md file in newReadme
        await writeToFile('./newReadMe/Readme.md', generateReadme);
        console.log('Your README.md has been created');
    } catch (err) {
        console.log(err)
    }
}

// Function call to initialize app
init();


// External Sources:
// https://stackoverflow.com/questions/67797574/using-async-await-with-util-promisifyfs-readfile