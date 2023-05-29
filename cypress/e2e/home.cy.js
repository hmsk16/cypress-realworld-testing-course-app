describe('Home page', () => {

  beforeEach(() =>{
    cy.visit("http://localhost:3000/")
  })

  context("Hero section", () => {
    it('Visit the site', () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
  
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
  
  context("Email Section", () => {
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
  context("Courses section", () => {
    it("Testing Your First Next.js Application", () => {
      cy.get("[data-test='course-0']").find('a').contains('Get started').click();
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Testing Foundations", () => {
      cy.get("[data-test='course-1']").find('a').contains('Get started').click();
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Cypress Fundamentals", () => {
      cy.get("[data-test='course-2']").find('a').contains('Get started').click();
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})