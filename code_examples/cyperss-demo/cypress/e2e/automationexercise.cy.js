describe('Demo cypress functionality', () => {
    let name;
    let email;
    const password = 'User1SecurePassword123';

    before(() => {
        name = Math.random().toString(36).substr(2, length) + Date.now().toString(36);
        email = name + "@example.com";
    });


    beforeEach(() => {
    // root-level hook
    // runs before every test block
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit("https://automationexercise.com");
    })

    it('Test case 12 v01', () => {
        // 3. Verify that home page is visible successfully

        // 4. Click 'Products' button
        cy.contains("Products").click();

        // 5. Hover over first product and click 'Add to cart'
        // cy.get(".add-to-cart"); // 68

        cy.get(".product-overlay")
            .eq(0)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // 6. Click 'Continue Shopping' button
        cy.contains("Continue Shopping").should("be.visible").click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get(".product-overlay")
            .eq(1)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // 8. Click 'View Cart' button
        cy.contains("View Cart").should("be.visible").click();

        // 9. Verify both products are added to Cart
        cy.get("tr[id^='product-']").should("have.length", 2);
        cy.contains('a', 'Blue Top').should('be.visible');
        cy.contains('a', 'Men Tshirt').should('be.visible');

        // 10. Verify their prices, quantity and total price
        cy.get("tr[id='product-1']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 500");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 500");
        });
        cy.get("tr[id='product-2']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 400");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 400");
        });
    });

    it('Test case 12 v02', () => {
        // 3. Verify that home page is visible successfully

        // 4. Click 'Products' button
        cy.contains("Products").click();

        // 5. Hover over first product and click 'Add to cart'
        // cy.get(".add-to-cart"); // 68
        cy.get("[data-product-id='1']")
            .eq(1)
            .click({ force: true });

        // 6. Click 'Continue Shopping' button
        cy.contains("Continue Shopping").should("be.visible").click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get("[data-product-id='2']")
            .eq(1)
            .click({ force: true });

        // 8. Click 'View Cart' button
        cy.contains("View Cart").should("be.visible").click();

        // 9. Verify both products are added to Cart
        cy.get("tr[id^='product-']").should("have.length", 2);
        cy.contains('a', 'Blue Top').should('be.visible');
        cy.contains('a', 'Men Tshirt').should('be.visible');

        // 10. Verify their prices, quantity and total price
        cy.get("tr[id='product-1']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 500");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 500");
        });
        cy.get("tr[id='product-2']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 400");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 400");
        });
    }); 
 
    it("TC01 Register User", () => {
 
        // 3. Verify that home page is visible successfully
        cy.contains("Home").should("be.visible");
 
        // 4. Click on 'Signup / Login' button
        cy.get('ul.nav.nav-pills.nav-justified', { timeout: 10000 }).should('be.visible');
        cy.contains('Signup / Login').should('be.visible').click();
 
        // 5. Verify 'New User Signup!' is visible
        // cy.get('.signup-form').debug().should('be.visible');
        cy.get('.signup-form > h2').should('have.text', 'New User Signup!').and('be.visible');
 
        // 6. Enter name and email address
        // const name = 'User User1';
        // const email = 'useruser1@example.com';
 
        cy.get('input[data-qa="signup-name"]').type(name); // Enter name
        cy.get('input[data-qa="signup-email"]').type(email); // Enter email
 
        // 7. Click 'Signup' button
        cy.get('button[data-qa="signup-button"]').click();
 
        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get('.login-form > h2.title.text-center').should('have.text', 'Enter Account Information').and('be.visible');
 
        // 9. Fill details: Title, Name, Email, Password, Date of birth
        cy.get('input[id="id_gender2"]').check(); // Check the 'Mrs.' radio button
 
        // Fill in Name
        cy.get('input[data-qa="name"]').type(name);
 
        // Fill in Email
        cy.get('input[data-qa="email"]').type(email, { force: true });
 
        // Fill in Password
        cy.get('input[data-qa="password"]').type(password);
 
        // Select Date of Birth
        cy.get('select[data-qa="days"]').select('1');
        cy.get('select[data-qa="months"]').select('January');
        cy.get('select[data-qa="years"]').select('1990');
 
        // 10. Select checkbox 'Sign up for our newsletter!'
        cy.get('input[id="newsletter"]').check();
 
        // 11. Select checkbox 'Receive special offers from our partners!'
        cy.get('input[id="optin"]').check();
 
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        // Fill in First Name
        cy.get('input[data-qa="first_name"]').type('Lalala');
 
        // Fill in Last Name
        cy.get('input[data-qa="last_name"]').type('Blackish');
 
        // Fill in Company
        cy.get('input[data-qa="company"]').type('Exp company');
 
        // Fill in Address
        cy.get('input[data-qa="address"]').type('321 Exp St.');
 
        // Fill in Address 2
        cy.get('input[data-qa="address2"]').type('Suite 223');
 
        // Fill in Country
        cy.get('select[data-qa="country"]').select('United States');
 
        // Fill in State
        cy.get('input[data-qa="state"]').type('California');
 
        // Fill in City
        cy.get('input[data-qa="city"]').type('Los Angeles');
 
        // Fill in Zipcode
        cy.get('input[data-qa="zipcode"]').type('90002');
 
        // Fill in Mobile Number
        cy.get('input[data-qa="mobile_number"]').type('1234567890');
 
        // 13. Click 'Create Account button'
        cy.get('button[data-qa="create-account"]').click();
 
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        cy.get('h2[data-qa="account-created"]').should('be.visible').and('have.text', 'Account Created!');
 
        // 15. Click 'Continue' button
        cy.get('a[data-qa="continue-button"]').should('be.visible').click();
 
        // 16. Verify that 'Logged in as username' is visible
        // cy.get('li a').should('be.visible').and('contain', 'Logged in as ' + name);
        cy.get('li a').should('be.visible').and('contain', name);
        cy.wait( 2000 );
        
        // 17. Click 'Delete Account' button
        // cy.get('a[data-qa="delete-account"]').should('be.visible').click();
        cy.contains('Delete Account').click();
 
        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get('h2[data-qa="account-deleted"]').should('be.visible') .and('have.text', 'Account Deleted!');
        cy.get('a[data-qa="continue-button"]').should('be.visible').click();
    });

    it("TC12.07 Verify both products are added to Cart", () => {     
        // Eiti į "Products"
        cy.contains("Products").click();
     
        // Pridėti pirmą produktą
        cy.get(".add-to-cart").eq(0).click({ force: true });
     
        // Palaukti ir spausti "Continue Shopping"
        cy.contains("Continue Shopping").should("be.visible").click();
     
        // Pridėti antrą produktą (4a preke)
        // 1div turi 2 elem (.add-to-cart)
        cy.get(".add-to-cart").eq(2).click({ force: true });
     
        // Eiti į krepšelį
        cy.contains("View Cart").should("be.visible").click();
     
        // Patikrinti, ar abu produktai yra krepšelyje
        cy.get("tr[id^='product-']").should("have.length", 2);
    })  
    
    it('Load page examplw.cyperss.io', () => {
        cy.contains("Products").click();

        let millis = 3000;

        cy.viewport(1440, 900); // desktop
        cy.wait(millis);

        cy.viewport(768,1024); // tablet (iPad)
        cy.wait(millis);

        cy.viewport(375,812); // Mobile
        cy.wait(millis);
        
        cy.viewport('macbook-15');  // 1440x900
        cy.wait(millis);
        cy.viewport('macbook-13');  // 1280x800
        cy.wait(millis);
        cy.viewport('ipad-2');      // 768x1024
        cy.wait(millis);
        cy.viewport('iphone-x');    // 375x812
        cy.wait(millis);
        cy.viewport('samsung-s10'); // 360x760
        cy.wait(millis);
        cy.viewport('iphone-6');    // 375x667
    })
});