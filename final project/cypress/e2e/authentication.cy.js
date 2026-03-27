describe('Scenario 4: User Authentication', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login');
  });

  it('TC1: Login page shows email and password fields', () => {
    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="password"]').should('exist');
  });

  it('TC2: Shows error for invalid email format', () => {
    cy.get('input[type="email"]').clear().type('email.com').blur();
    cy.get('input[type="password"]').clear().type('1234').blur();
    cy.contains('Login').click();
    cy.get('div.invalid-feedback.invalid-email').should('exist');
  });

  it('TC3: Shows error when password is missing', () => {
    cy.get('input[type="email"]').clear().type('test@user.com').blur();
    cy.get('input[type="password"]').clear().blur();
    cy.contains('Login').click();
    cy.get('div.invalid-feedback.invalid-password').should('exist');
  });

  it('TC4: Shows error for empty email field', () => {
    cy.get('input[type="email"]').clear().blur();
    cy.get('input[type="password"]').clear().type('password123').blur();
    cy.contains('Login').click();
    cy.get('div.invalid-feedback.invalid-email').should('exist');
  });
  
});
