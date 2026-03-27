describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login');
  });

  describe('Login Page Load', () => {
    it('TC_2.1.1: Verify the page title is "Login"', () => {
      cy.title().should('eq', 'Sweet Shop');
    });

    it('TC_2.1.2: Verify the page has a description', () => {
      cy.get('p.lead').should('exist').and('not.be.empty');
    });

    it('TC_2.1.3: Verify the page contains "email" and "password" input fields', () => {
      cy.get('#exampleInputEmail').should('exist');
      cy.get('#exampleInputPassword').should('exist');
    });

    it('TC_2.1.4: Verify the page contains a "Login" button', () => {
      cy.get('.btn-primary').contains('Login').should('exist');
    });
  });

  describe('Login Functionality', () => {
    it('TC_2.2.1 & TC_2.2.2: Positive login - Redirects to YOUR ACCOUNT page and displays user info', () => {
      cy.get('#exampleInputEmail').type('test@user.com');
      cy.get('#exampleInputPassword').type('qwerty');
      cy.get('.btn-primary').contains('Login').click();
      cy.url().should('include', '00efc23d-b605-4f31-b97b-6bb276de447e.html');
      cy.get('body').should('exist');
    });

    it('TC_2.2.4: Negative login with empty password', () => {
      cy.get('#exampleInputEmail').type('test@user.com');
      cy.get('#exampleInputPassword').clear();
      cy.get('.btn-primary').contains('Login').click();
      cy.url().should('not.include', '00efc23d-b605-4f31-b97b-6bb276de447e.html');
    });
  });
});