describe("User Journey", ()=>{

    beforeEach(() =>{
        cy.visit("http://localhost:3000/")
      })

    it("Complete flow of first Course", ()=>{
        cy.get("[data-test='course-0']")
            .find("a")
            .contains("Get started").click();
        cy.location("pathname")
            .should("equal", "/testing-your-first-application");
        cy.get("[data-test='next-lesson-button']")
            .contains("Start Course").click();
        cy.location("pathname")
            .should("equal", "/testing-your-first-application/app-install-and-overview");

        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test");

        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/testing-your-first-application/setting-up-data-before-each-test");
            
        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/");
    })

    it("Complete flow of second Course", ()=>{
        cy.get("[data-test='course-1']")
            .find("a")
            .contains("Get started").click();
        cy.location("pathname")
            .should("equal", "/testing-foundations");
        cy.get("[data-test='next-lesson-button']")
            .contains("Start Course").click();
        cy.location("pathname")
            .should("equal", "/testing-foundations/testing-is-a-mindset");

        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/testing-foundations/knowing-what-to-test");
         
        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/testing-foundations/manual-vs-automated-testing");
            
        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
            .should("eq", "/");
    })

    it("Complete flow of third Course", ()=>{
        cy.get("[data-test='course-2']")
            .find("a")
            .contains("Get started").click();
        cy.location("pathname")
            .should("equal", "/cypress-fundamentals");
        cy.get("[data-test='next-lesson-button']")
            .contains("Start Course").click();
        cy.location("pathname")
            .should("equal", "/cypress-fundamentals/how-to-write-a-test");
        
        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
             .should("eq", "/cypress-fundamentals/cypress-runs-in-the-browser");

        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
             .should("eq", "/cypress-fundamentals/command-chaining");

        cy.get("[data-test='challenge-answer-0']").click();
        cy.get("[data-test='next-lesson-button']").should('exist').click();
        cy.location("pathname")
             .should("eq", "/");
    })
})