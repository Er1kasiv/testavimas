describe('About Page Load', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/about');
  });

  it('TC_1.1: Verify the page has the title "Sweet Shop"', () => {
    cy.title().should('eq', 'Sweet Shop'); 
  });

  it('TC_1.2: Verify the page has a description', () => {
    cy.get('p').should('exist').and('not.be.empty'); 
  });

  it('TC_1.3: Verify the page has a banner and it matches the year 2018', () => {
    cy.get('header').should('exist'); 
  });
});