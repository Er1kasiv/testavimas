describe("Tic-Tac-Toe Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // Adjust port if needed
  });

  it("Allows players to take turns", () => {
    cy.get(".square").eq(0).click();
    cy.get(".square").eq(0).should("contain", "X");

    cy.get(".square").eq(1).click();
    cy.get(".square").eq(1).should("contain", "O");
  });

  it("Declares a winner correctly", () => {
    cy.get(".square").eq(0).click(); // X
    cy.get(".square").eq(3).click(); // O
    cy.get(".square").eq(1).click(); // X
    cy.get(".square").eq(4).click(); // O
    cy.get(".square").eq(2).click(); // X wins

    cy.contains("Winner: X").should("exist");
  });

  it("Detects a draw", () => {
    const drawMoves = [0, 1, 2, 4, 3, 5, 7, 6, 8]; // Fill board without a winner
    drawMoves.forEach((index) => {
      cy.get(".square").eq(index).click();
    });

    cy.contains("Draw").should("exist");
  });

  it("Resets the board when clicking reset", () => {
    cy.get(".square").eq(0).click();
    cy.get(".reset").click();
    cy.get(".square").eq(0).should("not.contain", "X");
  });

  it("Toggles between two-player and AI mode", () => {
    cy.get(".play-ai").click();
    cy.contains("Play 2-Player").should("exist");
    cy.get(".play-ai").click();
    cy.contains("Play vs AI").should("exist");
  });

  it("AI makes a move after the player", () => {
    cy.get(".play-ai").click(); // Enable AI mode
    cy.get(".square").eq(0).click(); // Player X move
    cy.wait(1000); // Wait for AI move
    cy.get(".square").should(($squares) => {
      const squares = $squares.toArray().map((sq) => sq.innerText);
      expect(squares.filter((sq) => sq === "O").length).to.be.at.least(1);
    });
  });
});