// Function to generate markdown based on userInput
function generateMarkdown(userInput) {
  // Readme structure designed here
  return `# ${userInput.Title}

  <img src='https://img.shields.io/badge/License-${userInput.license}-blue.svg'>

  ## Description
  ${userInput.description}


  ## Table of Contents
  1. [Description](#description)
  2. [Project Usability](#usage)
  3. [Installation Guidelines](#installation)
  4. [Credits](#credits)
  5. [Contributions](#contributions)
  6. [Tests](#tests)
  7. [Developer Questions](#questions)



  ## Usage
  ${userInput.usage}


  ## Installation
  ${userInput.installation}


  ## Credits
  Developer: ${userInput.developer}
  <br>
  <br>
  Collaborators: ${userInput.collaborators}


  ### Contributions
  If you would like to make a contribution, you may access this github repository at: ${userInput.contributions}


  ### Tests
  ${userInput.test}


  ### Inquiries
  If you have any questions, please feel free to contact me:
  <br>
  <br>
  :octocat:: ${userInput.profile}
  <br>
  <br>
  :envelope:: ${userInput.email}

`;
}


module.exports = generateMarkdown;


// External Links:
// https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents
