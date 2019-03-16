/// <reference types="Cypress" />

describe('Basic test', async () => {
  beforeEach(() => {
    cy.visit("www.google.com");
  })

  it('Should fail', async () => {
    cy.get('.main-button').should('be.visible');
    cy.get('.main-button').click();
    cy.get('.-modal-body').should('be.visible');
    expect(1).to('have.text', 2);
  });
});
