/// <reference types="cypress" />

import data from '../constants/elements';

describe('Test with elements', function () {
    it('Text Box', function () {
        cy.visit(`${Cypress.env('baseUrl')}/elements`);
        cy.get('.main-header').should('contain', 'Elements');
        cy.contains('Text Box').click();

        cy.get('#userName').type(data.name);
        cy.get('#userEmail').type(data.email);

        cy.get('#currentAddress').type(data.currentAddress);
        cy.get('#permanentAddress').type(data.permanentAddress);
        cy.get('[type="button"]').last().click();

        cy.get('#name').should('contain', data.name);
        cy.get('#email').should('contain', data.email);

        cy.get('.border').find('#currentAddress').should('contain', data.currentAddress);
        cy.get('.border').find('#permanentAddress').should('contain', data.permanentAddress);
    });

    it('ChecK Box', function () {
        cy.visit(`${Cypress.env('baseUrl')}/checkbox`);
        cy.get('.main-header').should('contain', 'Check Box');

        cy.get('.rct-collapse .rct-icon').click();
        cy.get('svg[class*="rct-icon rct-icon-expand-c"]').eq(1).click();
        cy.get('button[class="rct-collapse rct-collapse-btn"]').eq(3).click();

        cy.get('[for="tree-node-react"]').find('[class="rct-checkbox"]').click();
        cy.get('#tree-node-react').should('be.checked');
    });

    it('Radio Button', function () {    
        cy.visit(`${Cypress.env('baseUrl')}/radio-button`);
        cy.get('.main-header').should('contain', 'Radio Button');
        cy.get('#yesRadio').click({ force:true }).check();

        cy.get('#yesRadio').should('be.checked');
        cy.get('#impressiveRadio').should('not.be.checked');
        cy.get('#noRadio').should('not.be.checked');
    });
});
