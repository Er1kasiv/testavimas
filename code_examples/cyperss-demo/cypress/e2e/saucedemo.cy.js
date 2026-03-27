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

    it('Click on Login button', () => {
        cy.visit('https://www.saucedemo.com/')

        // Verify the URL is correct
        cy.url().should('eq', 'https://www.saucedemo.com/');

        // type username
        cy.get('input[data-test="username"]').type('standard_user');

        // type password
        cy.get('input[data-test="password"]').type('secret_sauce');

        // click on button login
        cy.get('[data-test="login-button"]').click();

        // wait for 2000 milliseconds
        cy.wait(2000);

        // check if app logo is available in new page
        cy.get('div[class="app_logo"]').should('contain.text', 'Swag Labs');
    })

  })