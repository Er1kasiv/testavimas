describe('Scenario 3: Shopping Basket Operations', () => {
  it('TC5: Adding Chocolate Cups updates basket count', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .contains('Add to Basket')
      .click();
    cy.get('nav').contains('Basket').should('not.contain', '0');
  });

  it('TC6: Adding multiple items updates basket count to 2', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .contains('Add to Basket')
      .click();
    cy.contains('Bon Bons')
      .parentsUntil('body')
      .contains('Add to Basket')
      .click();
    cy.get('nav').contains('Basket').should('contain', '2');
  });

  it('TC7: Emptying basket resets count to 0', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .contains('Add to Basket')
      .click();
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.contains('Empty Basket').click();
    cy.contains('Your Basket 0').should('exist');
  });

  it('TC8: Basket count persists after refresh', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .contains('Add to Basket')
      .click();
    cy.reload();
    cy.get('nav').contains('Basket').should('contain', '1');
  });
});
