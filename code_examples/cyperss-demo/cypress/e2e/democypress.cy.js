describe('Demo cypress functionality', () => {

    beforeEach(() => {
            cy.visit('http://localhost:8080/democypress.html')
        })

    it('Functions get() and contains()', () => {
        

        cy.get('h1').should('be.visible');
        cy.contains('h1','Demo text').should('be.visible');

        cy.get('.some-class-a').should('be.visible'); // grazina 2 elementus
        cy.get('.some-class-b').should('be.visible'); // grazina 1 elem
        cy.get('.some-class-a.some-class-b').should('be.visible'); // grazina 1 elem

        cy.get('#some_id').should('be.visible'); // 1 elem.
        cy.get('[id="some_id"]').should('be.visible'); // 2 elem.
        cy.get('p[id="some_id"]').should('be.visible'); // 1 elem.
        cy.get('span[id="some_id"]').should('be.visible'); // 1 elem.

        cy.get('p[class="mrg"]').should('be.visible');
        cy.get('p[class="mrg"]').first().then(($txt)=>{
            cy.log("READ text from 1st: " + $txt.text().trim())
        });

        cy.get('p[class="mrg"]').eq(2).then(($txt)=>{
            cy.log("READ text from 3rd: " + $txt.text().trim());
        });

        cy.log("***");
        cy.log("*** Click on hovered element ***");

        // doesn't work this way:
        // cy.get('button[class="hover-button"]').click();

        cy.get('div[class="hover-box"]')
            .trigger('mouseover', { force: true })
            .find('button[class="hover-button"]')
            .click({ force: true });

        cy.get('p[class="hidden-text"]').should('contain', 'You clicked')
        cy.get('p[class="hidden-text"]').should('have.text', 'You clicked the button!')
    });

    it('Functions get() and contains()', () => {
        cy.log("***");
        cy.log("*** COMBINATOR SELECTORS ***");

        cy.log("*** Child selector '>' ***");
        cy.get('[data-qa="comb_slc"] > p');

        cy.get('[data-qa="comb_slc"] > p').each(($e, index)=>{
            cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });

        cy.log("***");
        cy.log("*** Descendant Selector (Space ) ***");
        cy.get('[data-qa="comb_slc"] p');

        cy.get('[data-qa="comb_slc"] p').each(($e, index)=>{
            cy.log(`Paragraph ${index + 1}: ${$e.text()}`);
        });

        cy.log("***");
        cy.log("*** Sibling Selector (+) ***");
        cy.get('[data-qa="sib_slc"] + p');

        cy.get('[data-qa="sib_slc"] + p').each(($e, index)=>{
            cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });

        cy.get('[data-qa="sib_slc"] + p + p').each(($e, index)=>{
            cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });

        cy.log("***");
        cy.log("*** General Sibling Selector (~) ***");
        cy.get('[data-qa="sib_slc"] ~ p');

        cy.get('[data-qa="sib_slc"] ~ p').each(($e, index)=>{
        cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });

        cy.log("***");
        cy.log("*** Combining Multiple Combinators ***");
        cy.get('#comb_slc_comb > ul > li + li');

        cy.get('[id="comb_slc_comb"] > ul > li + li').each(($e, index)=>{
        cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });

        cy.get('[id="comb_slc_comb"] > ul > li').eq(1).each(($e, index)=>{
        cy.log(`Paragraph ${index + 1}: ${$e.text().trim()}`);
        });
    })
});