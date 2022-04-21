// Declaring Node Module Variables 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)
const generateMarkdown = require('./utils/generateMarkdown');

// Function prompts user using inquirer.prompt to populate Readme.md Content
// Generate questions for: Project Title, Description, Usage, Installation, Contributing, Tests, Questions, License
// Table of Contents generated in generateMarkdown file)
function userPrompt(){
    return inquirer.prompt ([
    // Prompt user for project title
        {
            name: "Title",
            message: "What is the name of your project?: ",
            type: "input",
        },
        // Prompt user for short project description
        {
            name: "description",
            message: "Provide a brief summary of your project: ",
            type: "input",
        },
        // Prompt user for installation instructions
        {
            name: "installation",
            message: "If required, provide installation instructions for your project: ",
            type: "input",
        },
        // Pompt user for usage instructions
        {
            name: "usage",
            message: "Enter your project usage information: ",
            type: "input",
        },
        // Prompt user for GitHub username to display in credits section
        {
            name: "developer",
            message: "For the credits section, please enter only your GitHub username: ",
            type: "input",
        },
        // Prompt user for GitHub usernames to display in credits section
        {
            name: "collaborators",
            message: "For the credits section, please list GitHub usernames of the collaborator(s) for this project, if any: ",
            type: "input",
        },
        // Prompt user for project contributors
        {
            name: "contributions",
            message: "Please enter a link to your project repository for contributions: ",
            type: "input",
        },
        // Prompt user for project tests
        {
            name: "test",
            message: "Provide test information or procedures for your project: ",
            type: "input",
        },
        // Prompt user for email address for inquiries
        {
            name: "email",
            message: "Please provide your email for inquiries: ",
            type: "input",
        },
        // Prompt user for github profile link for inquiries
        {
            name: "profile",
            message: "Please provide your github profile link for inquiries: ",
            type: "input",
        },
        // Prompt user for Licesense
        {
            name: "license",
            message: 'Which license are you using for your project?',
            type: 'list',
            choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None'],
        },
        // Prompt user for name
        {
            name: "name",
            message: "Please enter your name for the copyright section: ",
            type: "input",
        },
        // Prompt user for credentials
        {
            name: "credentials",
            message: "Please enter your credentials or organization for copyright section: ",
            type: "input",
        }
    ])
};

// Combined function using util.promisify(fs.writeFile) writes the README.md file based on user's input
async function init() {
    try {
        // function initializes after user answers prompt
        const userInput = await userPrompt();
        // generate readme using markdown after user inputs
        const generateReadme = generateMarkdown(userInput);
        // Create Readme.md file in newReadme
        await writeFileAsync('./Public/Readme.md', generateReadme);
        console.log('✔️ Your README.md has been created');
    } catch (err) {
        console.log(err)
    }
}

// Function call to initialize app
init();


// External Sources:
// https://stackoverflow.com/questions/67797574/using-async-await-with-util-promisifyfs-readfile