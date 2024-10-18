// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-iframe";

Cypress.Commands.add("mobileView", () => {
  cy.window().then(win => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    if (width <= 991) {
      cy.get(".navbar-toggler-icon").click();
      cy.get('a[href="/about"]').click();
    } else {
      cy.get('a[href="/about"]').click();
    }
  });
});
