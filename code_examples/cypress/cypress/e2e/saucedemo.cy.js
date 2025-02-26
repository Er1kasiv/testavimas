describe('Demo template spec', () => {

    it('Load page saucedemo', () => {

        cy.visit('https://www.saucedemo.com/')

 

        // Verify the URL is correct

        cy.url().should('eq', 'https://www.saucedemo.com/');

 

        cy.contains("div","Swag Labs").should('be.visible')

 

        // Check if username field is visible

        cy.get('input[data-test="username"]').should('be.visible');

 

        // Check if password field is visible

        cy.get('[data-test="password"]').should('be.visible');

 

        // Check if login button is visible

        cy.get('[data-test="login-button"]').should('be.visible');

    })

 

    it('Click on Login button', () => {

        cy.visit('https://www.saucedemo.com/')

 

        // Verify the URL is correct

        cy.url().should('eq', 'https://www.saucedemo.com/');

 

        // Check if login button is visible

        cy.get('[data-test="login-button"]').click();

    })

 

  })

