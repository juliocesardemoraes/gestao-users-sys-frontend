/* eslint-disable no-undef */
describe("user CRUD", () => {
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
    cy.wait(1000);
  });

  it("should exist an user", () => {
    cy.visit("http://localhost:5173/users");
    cy.get(".MuiTableBody-root > .MuiTableRow-root > .column-id").should(
      "exist"
    );
  });

  it("should undo delete an user", () => {
    cy.intercept(
      "DELETE",
      "https://gestao-users-sys-backend.vercel.app/users/1"
    ).as("deleteUserRequest");

    cy.visit("http://localhost:5173/#/users/1");
    cy.get("#name").type("{selectall}{backspace}").type("testeEditado");
    cy.get(".RaToolbar-defaultToolbar > .MuiButton-text").click();
    cy.get(".MuiSnackbarContent-action > .MuiButtonBase-root").click();
    cy.wait(1000);
    // cy.get(".css-1l0huk-RaLoadingIndicator-root > .MuiButtonBase-root").click();
    // cy.get(".MuiTableBody-root > .MuiTableRow-root > .column-name", {
    //   timeout: 10000,
    // }) // Adjust the timeout value (e.g., 10000 milliseconds for 10 seconds)
    //   .should("have.text", "testeEditado");
  });

  it("should delete an user", () => {
    cy.intercept(
      "DELETE",
      "https://gestao-users-sys-backend.vercel.app/users/1"
    ).as("deleteUserRequest");

    cy.visit("http://localhost:5173/#/users/1");
    cy.get("#name").type("{selectall}{backspace}").type("testeEditado");
    cy.get(".RaToolbar-defaultToolbar > .MuiButton-text").click();
    cy.wait("@deleteUserRequest", { timeout: 10000 });
    cy.get(".css-1l0huk-RaLoadingIndicator-root > .MuiButtonBase-root").click();
    cy.get(".MuiTypography-h4").contains("No User yet.");
  });

  it("should undo an user edition", () => {
    let data = {
      name: "testico",
      email: "winampsoriginal@gmail.com",
      password: "12345678",
    };

    cy.request({
      method: "POST",
      url: "https://gestao-users-sys-backend.vercel.app/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
    cy.visit("http://localhost:5173/#/users/1");
    cy.get("#name").type("{selectall}{backspace}").type("testeEditado2");
    cy.get(".RaToolbar-defaultToolbar > .MuiButton-contained").click();
    cy.visit("http://localhost:5173/#/users");
    cy.get(".MuiSnackbarContent-action > .MuiButtonBase-root").click();
    cy.wait(1000);
  });

  it("should edit an user", () => {
    cy.visit("http://localhost:5173/#/users/1");
    cy.get("#name").type("{selectall}{backspace}").type("testeEditado");
    cy.get(".RaToolbar-defaultToolbar > .MuiButton-contained").click();
    cy.visit("http://localhost:5173/#/users");
    cy.wait(5000);
    cy.get(".css-1l0huk-RaLoadingIndicator-root > .MuiButtonBase-root").click();
    cy.get(".MuiTableBody-root > .MuiTableRow-root > .column-name", {
      timeout: 10000,
    }) // Adjust the timeout value (e.g., 10000 milliseconds for 10 seconds)
      .should("have.text", "testeEditado");
  });
});
