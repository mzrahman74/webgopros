# Cypress webgopros Project

This repository contains a Cypress project for web automation using Node.js. Cypress is a powerful end-to-end testing framework that allows you to write tests for your web applications.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=21.6)
- npm (>=10.2) 

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/mzrahman74/webgopros.git
    ```

2. Navigate to the project directory:
    ```sh
    cd webgopros
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Running Tests

You can run the tests in two ways: using the Cypress Test Runner or running tests headlessly.

### Using Cypress Test Runner

1. Open the Cypress Test Runner:
    ```sh
    npx cypress open
    ```
    or
    ```sh
    yarn cypress open
    ```

2. Select the test you want to run in the Cypress Test Runner UI.

### Running Tests Headlessly

To run all tests in headless mode, use the following command:
```sh
npx cypress run
or
yarn cypress:run

### Project Structure

cypress-web-automation/
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   ├── support/
│   └── videos/
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
├── README.md
└── ...
cypress/fixtures: Test data files.
cypess/e2e: Test Specification files.
cypress/support: Support files and custom commands.
cypress/videos: Recorded test videos.

### Writing Tests
Tests are written in the `cyprss/e2e` directory. Here is a simple of a test file (example.spec.js):

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

#### Configuration
Cypress configuration is handled in the `cypress.json` file. You can customize various options such as base URL, viewport size, and more.

Example `cypress.json`:

{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1400,
  "viewportHeight": 900
}

### Contributing
Contributions are welcome! Please follow the these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -m "add some feature).
5. Push the branch (git push origin feature/your-feature).
6. Open a pull request.

### License
This project is licensed under the () License. See the LICENSE file for more details.



