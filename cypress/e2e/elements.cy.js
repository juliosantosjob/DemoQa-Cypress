import data from '../support/radomData';

describe('Interface elements', () => {

    it('Validating textbox', () => {
        cy.visit('/elements');
        cy.contains('Text Box').click();

        cy.get('#userName').type(data.firstName);
        cy.get('#userEmail').type(data.email);

        cy.get('#currentAddress').type(data.currentAddress);
        cy.get('#permanentAddress').type(data.permanentAddress);
        cy.get('#submit').click();

        cy.get('#name').should('contain', data.firstName);
        cy.get('#email').should('contain', data.email);

        cy.get('.border #currentAddress').should('contain', data.currentAddress);
        cy.get('.border #permanentAddress').should('contain', data.permanentAddress);
    });

    it('Validating checKbox', () => {
        cy.visit('/checkbox');
        cy.get('.rct-collapse .rct-icon').click();

        cy.get('svg[class*="rct-icon rct-icon-expand-c"]').eq(1).click();
        cy.get('button[class="rct-collapse rct-collapse-btn"]').eq(3).click();

        cy.get('[for="tree-node-react"]').find('[class="rct-checkbox"]').click();
        cy.get('#tree-node-react').should('be.checked');
    });

    it.only('Validating radio button', () => {
        cy.visit('/radio-button');

        cy.get('#yesRadio').check({ force: true });
        cy.get('#yesRadio').should('be.checked');

        cy.get('#impressiveRadio').should('not.be.checked');
        cy.get('#noRadio').should('not.be.checked');
    });
});