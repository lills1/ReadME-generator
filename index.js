const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = ["username", "project name", "email", "description", "licence"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },

            {
                type: 'input',
                message: 'How would you describe your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'How do you use install',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'How does one contribute',
                name: 'contribution',

            },
            {
                type: 'list',
                message: 'Which license do you want to use',
                name: 'license',
                choices: ['MIT', 'Mozilla', 'IBM', 'Apache']

            },
            {
                type: 'input',
                message: 'PLease list how to test',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'what is your github username',
                name: 'github',
            },
            {
                type: 'input',
                message: 'what is your email',
                name: 'email',
            }
        ])
        .then((answers) => {
            console.log(answers)
            const htmlPageContent = generateMarkdown(answers);
            fs.writeFile('README.md', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('successfully created file!')
            )
        });

}

// Function call to initialize app
init();
