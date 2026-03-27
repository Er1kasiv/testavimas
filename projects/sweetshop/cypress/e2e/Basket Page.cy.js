describe('Basket Page', () => {
    beforeEach(() => {
      cy.visit('https://sweetshop.netlify.app/');
      cy.get('.card').first().find('a.btn').contains('Add to Basket').click();
      cy.visit('https://sweetshop.netlify.app/basket');
    });
  
    describe('Adding Products to Basket', () => {
      it('TC_4.1.1 & TC_4.1.2: Add products to basket and verify count updates', () => {
        cy.get('#basketCount').invoke('text').then((initialCount) => {
          cy.visit('https://sweetshop.netlify.app/');
          cy.get('.card').eq(1).find('a.btn').contains('Add to Basket').click();
          cy.visit('https://sweetshop.netlify.app/basket');
          cy.get('#basketCount').should('not.have.text', initialCount);
        });
      });
    });
  
    describe('Removing Products from Basket', () => {
      it('TC_4.2.1 & TC_4.2.2: Remove item from basket and verify count updates', () => {
        cy.get('#basketCount').invoke('text').then((initialCount) => {
          cy.get('#basketItems a').contains('Delete Item').first().click();
          cy.get('#basketCount').should('not.have.text', initialCount);
        });
      });
    });
  });