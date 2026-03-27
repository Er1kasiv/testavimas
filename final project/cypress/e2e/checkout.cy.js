describe('Scenario 5: Checkout Process', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/basket');
  });

  it('TC9: Displays billing, delivery, and payment sections', () => {
    cy.contains('Billing address').should('exist');
    cy.contains('Delivery').should('exist');
    cy.contains('Payment').should('exist');
  });

  it('TC10: Shows error for invalid promo code', () => {
    cy.contains('Redeem').click();
    cy.contains('Please input a valid promo code').should('exist');
  });

  it('TC11: Navigates to basket page via navigation link', () => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.get('nav').contains('Basket').click();
    cy.url().should('include', '/basket');
    cy.contains('Billing address').should('exist');
  });
});