/// <reference types="Cypress" />

describe("My Second Test Suite", () => {
  it("My First Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Check boxes
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    //Window alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
