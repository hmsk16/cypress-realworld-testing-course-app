import { contains } from "lodash/fp"

describe('Home page', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000/")
  })

  it('Visit the site', () => {
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })

  it("Subscribe for Updates", () => {
    cy.get("#email").type("sohaibkhalid12@gmail.com")
    cy.get("[data-test='submit-button']").click()
    cy.get("[data-test='success-message']").should("exist").contains("Success: sohaibkhalid12@gmail.com has been successfully subscribed")
  })

  it("Not Subscribe for Updates", () => {
    cy.get("#email").type("sohaibkhalid12")
    cy.get("[data-test='submit-button']").click()
    cy.get("[data-test='success-message']").should("not.exist")
  })

  it("Subscribe for Updates with another email", () => {
    cy.get("#email").type("john@example.com")
    cy.get("[data-test='submit-button']").click()
    cy.get("[data-test='server-error-message']").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")
  })
})