function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## Installation instructions
${data.installation}

## Usage Info
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Test
${data.test}

## Questions
Contact me:

GitHub:[${data.username}]()

Email:[${data.email}]()

`;
}

module.exports = generateMarkdown;
