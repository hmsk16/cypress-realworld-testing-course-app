import { contains } from "lodash/fp"

describe('Home page', () => {
  it('Visit the site', () => {
    cy.visit("http://localhost:3000/")
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it.only("the features on the homepage are correct", () => {
    cy.visit("http://localhost:3000")
    cy.get("#email").click("sohaibkhalid12@gmail.com")
  })
})