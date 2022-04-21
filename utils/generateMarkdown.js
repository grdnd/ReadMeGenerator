// Function to generate markdown based on userInput
function generateMarkdown(userInput) {
  // Readme structure designed here
  return `
  # ${userInput.Title}

  <img src='https://img.shields.io/badge/License-${userInput.license}-blue.svg'>

  ## Description
  
  ${userInput.description}


  ## Table of Contents

  1. [Description](#description)
  2. [Installation Guidelines](#installation)
  3. [Project Usability](#usage)
  4. [Credits](#credits)
  5. [Contributions](#contributions)
  6. [Tests](#tests)
  7. [Inquiries](#inquiries)
  8. [License](#license)


  ## Installation

  ${userInput.installation}
  
  
  ## Usage

  ${userInput.usage}


  ## Credits

  Developer: [${userInput.developer}](https://github.com/${userInput.developer})
  
  Collaborators: ${userInput.collaborators}


  ### Contributions

  If you would like to make a contribution, you may access this github repository [here!](${userInput.contributions})


  ### Tests

  ${userInput.test}


  ### Inquiries

  If you have any questions, please feel free to contact me:
  
  :octocat:: [${userInput.profile}](${userInput.profile})
  
  :envelope:: ${userInput.email}


  ### License

  © ${userInput.name}, ${userInput.credentials}

  Licensed under the ${userInput.license} license.


`;
}

module.exports = generateMarkdown;


// External Links:
// https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents
