/// <reference types="cypress"/>

describe("ui test", () => {
  beforeEach("open the url", () => {
    cy.visit("/");
  });

  it("page title assertion", () => {
    cy.title().should("include", "Mohammad Rahman");
    cy.title().should("eq", "Mohammad Rahman Portfolio");
    cy.get("nav.navbar").should("be.visible", { force: true });
  });
  it("footer & navbar should display in home page", () => {
    cy.get("nav.navbar").should("be.visible");
    cy.get("#id-footer").should("be.visible");
    cy.get('footer[id="id-footer"] p').should("be.visible");
  });
  it("web confirm about page assertion", () => {
    cy.get('a[href="/about"]').click();
    cy.get("nav.navbar").should("be.visible", { force: true });
    cy.get('footer[id="id-footer"] p').should("be.visible");
  });
  it("web confirm contact page assertion", () => {
    cy.get('a[href="/contact"]').click();
    cy.get("nav.navbar").should("be.visible", { force: true });
    cy.get("img.contact_me").should("be.visible");
    cy.get("#id-footer").should("be.visible");
  });
});
