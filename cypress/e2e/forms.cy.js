import data from '../support/radomData';

describe('Test with Forms', () => {
    it('Validating forms', () => {
        cy.visit('/automation-practice-form');
        cy.get('#firstName').type(data.firstName);   
        cy.get('#lastName').type(data.lastName);

        cy.get('#userEmail').type(data.email);
        cy.get('[type="radio"]').check(data.gender, { force:true });        

        cy.get('#userNumber').type(data.mobile);
        cy.get('#dateOfBirthInput').click();

        cy.get('.react-datepicker__month-select').select(data.month);
        cy.get('.react-datepicker__year-select').select(data.year);

        cy.get('[class*="--021"]').click();
        cy.get('#subjectsContainer').type('Accounting').first().click();

        cy.get('#hobbies-checkbox-3').click({ force:true });
        cy.get('#hobbies-checkbox-1').should('not.be.checked');
        cy.get('#hobbies-checkbox-2').should('not.be.checked');

        cy.get('#uploadPicture').attachFile(data.file);
        cy.get('#currentAddress').type(data.currentAddress);

        cy.get('.css-tlfecz-indicatorContainer').first().click({force: true});
        cy.get('#state').contains('Uttar Pradesh').click({force: true});
        cy.get('#city  .css-yk16xz-control  .css-1hwfws3').click({force: true});

        cy.contains('Merrut').click({force: true});
        cy.get('[type="submit"]').click({force: true});

        cy.get('tbody > :nth-child(1)')
            .should('contain', data.firstName)
            .and('contain', data.lastName);
        cy.get('tbody > :nth-child(2)').should('contain', data.email);
        cy.get('tbody > :nth-child(3)').should('contain', data.gender);

        cy.get('tbody > :nth-child(4)').should('contain', data.mobile);
        cy.get('tbody > :nth-child(5)').should('contain', `${data.month, data.year}`);
        cy.contains('tr td', 'Address').next().should('contain', data.currentAddress);  
    });
});