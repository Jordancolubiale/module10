const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];


// function for creating manager - inquirer questions
const generateManager = () => {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

// take those questions and create a new Manager with the user provided answers
// push that new Manager to the team members array

// follow the same pattern for each type of employee
// build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js

const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `

        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `

        `;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}