describe('Checkout Process', () => {
    beforeEach(() => {
      cy.visit('https://sweetshop.netlify.app/');
      cy.get('.card').first().find('a.btn').contains('Add to Basket').click();
      cy.visit('https://sweetshop.netlify.app/basket');
    });
  
    describe('Checkout Page Load', () => {
      it('TC_5.1.1: Verify the checkout page is accessible', () => {
        cy.url().should('include', '/basket');
      });
  
      it('TC_5.1.2: Verify the page displays all basket items', () => {
        cy.get('#basketItems').children().should('have.length.greaterThan', 0);
      });
    });
  });