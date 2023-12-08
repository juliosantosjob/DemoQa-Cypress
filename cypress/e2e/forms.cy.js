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

        cy.get('select[class="react-datepicker__month-select"]').select('February');
        cy.get('.react-datepicker__year-select').select('1997');

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

        cy.contains('tr td', 'Student Name').next().should('contain', data.firstName).and('contain', data.lastName);
        cy.contains('tr td', 'Student Email').next().should('contain', data.email);
        cy.contains('tr td', 'Gender').next().should('contain', data.gender);

        cy.contains('tr td', 'Mobile').next().should('contain', data.mobile);
        cy.contains('tr td', 'Date of Birth').next().should('contain', '21 February,1997');
        cy.contains('tr td', 'Address').next().should('contain', data.currentAddress);            
    });
});