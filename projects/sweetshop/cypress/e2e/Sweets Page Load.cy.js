describe('Sweets Page Load', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });

  it('TC_3.1: Verify the page title is "Browwse sweets"', () => {
    cy.title().should('eq', 'Sweet Shop');
  });

  it('TC_3.2: Verify the list of available products is displayed', () => {
    cy.get('.row .card').should('have.length.greaterThan', 0);
  });

  it('TC_3.3: Verify each product has a name, price, and image', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).find('.card-title').should('exist').and('not.be.empty');
      cy.wrap($card).find('.card-text').should('exist').and('not.be.empty');
      cy.wrap($card).find('img').should('exist');
    });
  });

  it('TC_3.4: Verify each product has an "Add to Basket" button', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).find('a.btn').contains('Add to Basket').should('exist');
    });
  });

  it('TC_3.5: Click on "Add to Basket" for a product, verify the basket icon count updates', () => {
    cy.get('.badge-success').invoke('text').then((initialCount) => {
      cy.get('.card').first().find('a.btn').contains('Add to Basket').click();
      cy.get('.badge-success').should('not.have.text', initialCount);
    });
  });
});