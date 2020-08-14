const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const filename = "README.md"

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "badge",
    message: "Enter badge code"
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description"
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions for installation"
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license",
    choices: [
      "MIT License",
      "Apache License",
      "GNU General Public License",
      "Unlicensed"
    ]
  },
  {
    type: "input",
    name: "contributors",
    message: "List contributors"
  },
  {
    type: "input",
    name: "tests",
    message: "Tests?"
  },
  {
    type: "input",
    name: "pic",
    message: "Enter the url of your GitHub profile picture"
  },
  {
    type: "input",
    name: "email",
    message: "Enter email for GitHub"
  }
];

// function createFile(filename, data) {
//   fs.writeFile(filename, data, err => {
//     if (err) {
//       throw err;
//     }
//   });
// }

function init() {
  inquirer.prompt(questions).then(data => {
      const response = generateMarkdown(data)
      console.log(data)
    // const toc = data.tableofcontents.split(",").join("\n" + "-");
    // const picURL = "![alt text](" + data.pic + ")";

    fs.writeFile(filename, response, err=> {
      if (err) {
        throw (err);
      }
      console.log("Success!");
    });

  });
}
init()