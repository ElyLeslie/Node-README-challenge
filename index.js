// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function returnBadgeFunction(parameter) {
    if(parameter === 'Apache') {
       //write the code to return the correct badge we wish to render for apache
       return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

       }
    if(parameter === "Boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    else {
        return "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)"
    }
   }

inquirer
    .prompt ([
        {
        type: "input",
        name: "yourTitle",
        message: "What is the title of the project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project with as much detail as possible."
            },
        {
            type: "input",
            name: "installInstruct",
            message: "Please include your installation instructions.",
        },
        {
            type: "input",
            name: "usageInfo",
            message: "Add any information detailing the usage of your product.",
        },
        {
            type: "input",
            name: "guidelines",
            message: "Detail your contribution guidelines below.",
        },
        {
            type: "input",
            name: "usageInfo",
            message: "Add any information detailing the usage of your product.",
        },
        {
            type: "input",
            name: "testInstruct",
            message: "Add the test instructions of your product.",
        },
        {
            type: "input",
            name: "userEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "GitHubInfo",
            message: "What is your Github URL?",
        },
        {
            type: "list",
            name: "license",
            message: "Which license is yours?",
            choices: ["Apache", "Boost", "Creative Commons"]
        },
    ])
    .then((answers) => {
        const newReadme = `# ${answers.yourTitle}
${returnBadgeFunction(answers.license)}


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
        
        
## Description: 
* ${answers.description}
        
        
* Contribution guidelines: ${answers.guidelines}

## Installation:

* Installation instructions: ${answers.installInstruct}
        
## Usage

* Usage information: ${answers.usageInfo}

        
## Tests:
* Test instructions: ${answers.testInstruct}
        
## License: 
* ${answers.license}
        
## Questions: 
        
* If you would like to contact me to address any further questions, please email me at ${answers.userEmail}
* You can find my GitHub at ${answers.GitHubInfo}`

        fs.writeFile('userREADME.md', newReadme, err => err ? console.log(err) : console.log("Sucessful"))

    })
// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
// }

// Function call to initialize app
// init();
// I think I'm done here???