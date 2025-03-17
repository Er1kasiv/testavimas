describe('Demo template spec', () => {
  it('Load page examplw.cyperss.io', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("h1","Kitchen Sink").should('be.visible')
  })
})
