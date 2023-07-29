describe("user create", () => {
  // Perform bulk delete before running any tests
  before(() => {
    cy.request({
      method: "DELETE",
      url: "https://gestao-users-sys-backend.vercel.app/users/delete/bulkDelete",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.visit("http://localhost:5173/");
    cy.get("#username").type("johndoe", { delay: 0 });
    cy.get("#password").type("password", { delay: 0 });
    cy.get(".MuiButtonBase-root").click();

    cy.mSaveLocalStorage();
  });

  beforeEach(() => {
    cy.mRestoreLocalStorage();
  });

  it("should enter", () => {});

  it("should be empty", () => {
    cy.visit("http://localhost:5173/users");
    cy.get(".MuiTypography-h4").contains("No User yet.");
  });

  it("should create an user", () => {
    cy.visit("http://localhost:5173/users");
    cy.get(".MuiTypography-h4").contains("No User yet.");
    cy.get(".RaEmpty-toolbar > .MuiButtonBase-root").click();
    cy.get("#name").type("test");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("password123");
    cy.get(".RaToolbar-defaultToolbar > .MuiButtonBase-root").click();
  });

  it("should create an user with enter", () => {
    cy.visit("http://localhost:5173/users");
    cy.get(".RaEmpty-toolbar > .MuiButtonBase-root").click();
    cy.get("#name").type("test2");
    cy.get("#email").type("test2@gmail.com");
    cy.get("#password").type("password123");
    cy.get("#password").type("Cypress.io{enter}");
  });

  it("should exist an user", () => {
    cy.visit("http://localhost:5173/users");
    cy.get(".MuiTableBody-root > .MuiTableRow-root > .column-id").should(
      "exist"
    );
  });

  // Add more test cases here
});
