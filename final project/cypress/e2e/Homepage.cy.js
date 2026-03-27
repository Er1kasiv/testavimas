describe('Scenario 1: Homepage and Navigation', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });

  it('TC12: Loads homepage with welcome message', () => {
    cy.contains('Welcome to the sweet shop!', { timeout: 10000 }).should('be.visible');
    cy.contains('The sweetest online shop out there.').should('be.visible');
  });

  it('TC13: Displays navigation menu items', () => {
    cy.get('nav').within(() => {
      cy.contains('Sweets').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Login').should('be.visible');
      cy.contains('Basket').should('be.visible');
    });
  });

  it('TC14: Navigates to sweets page via Browse Sweets button', () => {
    cy.contains('Browse Sweets', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/sweets');
    cy.contains('Chocolate Cups', { timeout: 10000 }).should('be.visible');
  });

  it('TC15: Homepage loads within 3 seconds', () => {
    cy.visit('https://sweetshop.netlify.app/', {
      onBeforeLoad: (win) => {
        win.performance.mark('start');
      },
      onLoad: (win) => {
        win.performance.mark('end');
        win.performance.measure('pageLoad', 'start', 'end');
        const measure = win.performance.getEntriesByName('pageLoad')[0];
        expect(measure.duration).to.be.lessThan(3000);
      },
    });
  });

  
});
