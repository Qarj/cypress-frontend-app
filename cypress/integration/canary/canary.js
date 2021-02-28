/// <reference types="cypress" />
describe('Frontend Canary', () => {
    it('checks the frontend canary page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
