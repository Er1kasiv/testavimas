/// <reference types="cypress" />

describe('Cypress Testų Scenarijai', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('1. Pagrindinio puslapio testas', () => {
    it('Patikrina, ar banner yra matomas ir mygtuko paspaudimas pakeičia URL', () => {
      cy.get('.banner')
        .should('be.visible')
        .and('contain', 'Sveiki atvykę į Cypress testų puslapį!');
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Navigacija į /commands/actions atlikta!');
      });
      cy.get('#action-type').click();
      cy.url().should('include', '/commands/actions');
    });
  });

  describe('2. Prisijungimo formos testas', () => {
    it('Užpildo formą ir rodo sveikinimo žinutę bei profilio informaciją', () => {
      const username = 'TestUser';
      const password = 'TestPass123';
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      cy.get('#greeting')
        .should('be.visible')
        .and('contain', `Sveiki, ${username}`);
      cy.get('#profile')
        .should('be.visible')
        .and('contain', 'Čia yra studento profilio informacija');
    });
  });

  describe('3. Dinaminių elementų testas', () => {
    it('Patikrina, ar visi sąrašo elementai turi žodį "Item"', () => {
      cy.get('#item-list .list-item').each(($el) => {
        cy.wrap($el).should('contain', 'Item');
      });
    });
  });

  describe('4. API užklausų testas', () => {
    it('Stubina API užklausą ir rodo stubinimo duomenis', () => {
      const stubData = { message: 'Stub data' };
      cy.intercept('GET', 'data.json', stubData).as('getData');
      cy.get('#fetch-data').click();
      cy.wait('@getData');
      cy.get('.data-container')
        .should('be.visible')
        .and('contain', stubData.message);
    });
  });

  describe('5. Asinchroninės operacijos testas', () => {
    it('Patikrina, ar asinchroninė operacija baigiasi teisingai', () => {
      cy.get('#async-action').click();
      cy.get('#async-result')
        .should('be.visible')
        .and('contain', 'Operacija prasidėjo...');
      cy.get('#async-result', { timeout: 4000 })
        .should('be.visible')
        .and('contain', 'Asinchroninė operacija baigta!');
    });
  });

  describe('6. Hover efekto testas', () => {
    it('Rodo tooltip, kai užvedama pele ant hover-box', () => {
      cy.get('#tooltip').should('not.be.visible');
      cy.get('#hover-box').trigger('mouseover');
      cy.get('#tooltip')
        .should('be.visible')
        .and('contain', 'Papildoma informacija');
      cy.get('#hover-box').trigger('mouseout');
      cy.get('#tooltip').should('not.be.visible');
    });
  });
});