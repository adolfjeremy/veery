/* eslint-disable quotes */
/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe("Login spec", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login");
    });
    it("should display login page correctly", () => {
        cy.get('input[placeholder="Email"]').should("be.visible");
        cy.get('input[placeholder="Password"]').should("be.visible");
        cy.get("button")
            .contains(/^Sign In$/)
            .should("be.visible");
    });
    it("should display alert when email is empty", () => {
        cy.get("button")
            .contains(/^Sign In$/)
            .should("be.visible");
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Request failed with status code 400");
        });
    });
    it("should display alert when password is empty", () => {
        cy.get('input[placeholder="Email"]').type("testuser@gmail.com");
        cy.get("button")
            .contains(/^Sign In$/)
            .should("be.visible");
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Request failed with status code 400");
        });
    });
    it("should display alert when email and password are wrong", () => {
        cy.get('input[placeholder="Email"]').type("testuser@gmail.com");
        cy.get('input[placeholder="Password"]').type("testpassword");
        cy.get("button")
            .contains(/^Sign In$/)
            .should("be.visible")
            .click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Request failed with status code 401");
        });
    });
    it("should display homepage when email and password are correct", () => {
        cy.get('input[placeholder="Email"]').type("polmed123@gmail.com");
        cy.get('input[placeholder="Password"]').type("polmed123");
        cy.get("button")
            .contains(/^Sign In$/)
            .should("be.visible")
            .click();

        cy.get("header").should("be.visible");
        cy.get("button")
            .should("have.attr", "title", "Sign Out")
            .should("be.visible");
    });
});
