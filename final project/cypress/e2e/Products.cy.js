describe('Scenario 2: Product Listing and Browsing', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
  });

  it('TC16: Displays expected sweets on product listing', () => {
    cy.contains('Chocolate Cups', { timeout: 10000 }).should('be.visible');
    cy.contains('Bon Bons').should('be.visible');
  });

  it('TC17: Navigates to sweets page via navigation link', () => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.get('nav').contains('Sweets').click();
    cy.url().should('include', '/sweets');
    cy.contains('Chocolate Cups').should('be.visible');
  });

  it('TC18: Product images are visible on sweets page', () => {
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .find('img')
      .should('be.visible');
    
    cy.contains('Bon Bons')
      .parentsUntil('body')
      .find('img')
      .should('be.visible');
  });

  it('TC19: Product cards have Add to Basket button', () => {
    cy.contains('Chocolate Cups')
      .parentsUntil('body')
      .contains('Add to Basket').should('be.visible');

    cy.contains('Bon Bons')
      .parentsUntil('body')
      .contains('Add to Basket').should('be.visible');
  });

  it('TC20: Products have descriptions', () => {
    cy.contains('Chocolate Cups')
      .parents('[class*=card], [class*=product]')
      .find('p, div, span')
      .not(':contains("Chocolate Cups"), :contains("Add to Basket"), :contains("$")')
      .should('exist');

    cy.contains('Bon Bons')
      .parents('[class*=card], [class*=product]')
      .find('p, div, span')
      .not(':contains("Bon Bons"), :contains("Add to Basket"), :contains("$")')
      .should('exist');
  });
  
  
});
