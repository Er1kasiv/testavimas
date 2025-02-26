describe('Todo Application Tests', () => {

  it('Load TodoList page and verify elements', () => {
      cy.visit('https://todolist.james.am/#/');

      // Check header
      cy.contains('h1', 'To Do List').should('be.visible');

      // Check input field & placeholder
      cy.get('input.new-todo')
        .should('be.visible')
        .should('have.attr', 'placeholder', "What need's to be done?");

      // Check "Double-click to edit a todo" text
      cy.contains('Double-click').should('be.visible');
  });

});
