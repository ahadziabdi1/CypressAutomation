/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";

describe("My Second Test", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    const homePage = new HomePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
    //cy.pause()
    cy.get(":nth-child(2) > .nav-link").click();
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
  });
});
