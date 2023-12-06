afterEach(() => {
    if (this.currentTest.state === 'failed') {
        cy.intercept('GET', '**/*').as('networkRequests');

        cy.wait('@networkRequests');
        cy.screenshot('error/test_failed');
    }
});