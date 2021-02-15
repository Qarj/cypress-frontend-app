/// <reference types="cypress" />
describe('page', () => {
    it('works', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.visit('https://www.selenium.dev/');
    });
});
