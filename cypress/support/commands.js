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

before(() => {
    cy.log('Starting...');
    cy.task('deleteFolder', 'cypress/screenshots');
});

beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
});

afterEach(function () {
    if (this.currentTest.state === 'failed')
        return cy.wait(1500).screenshot('error/testFailed');
    else
        return cy.wait(1500).screenshot('output/testPassed');
});

after(() => { 
    cy.log('Finishing');
});