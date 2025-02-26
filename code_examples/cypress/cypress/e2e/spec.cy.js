describe('Todo List App', () => {
  beforeEach(() => cy.visit('https://todolist.james.am/#/'));

  it('Loads the page and displays header', () => {
      cy.url().should('eq', 'https://todolist.james.am/#/');
    });

    it("Has correct input placeholder", () => {
      cy.get('.new-todo',).should('have.attr', 'placeholder', "What need's to be done?");
    });

  it("Displays 'Double-click to edit a todo'", () => {
      cy.contains('Double-click to edit a todo')('be.visible');
  });
});
