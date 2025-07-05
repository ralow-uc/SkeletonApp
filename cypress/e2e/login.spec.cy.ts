describe("Login Flow", () => {
  it("should attempt login and show error if credentials are invalid (SQLite not available)", () => {
    cy.visit("http://localhost:8100");

    // Espera que aparezca el formulario de login
    cy.contains("Usuario").type("admin");
    cy.contains("Contraseña").type("admin");

    // Haz clic en el botón "Ingresar"
    cy.contains("Ingresar").click();

    // Como no hay base de datos, debería mostrar alerta de error
    cy.on("window:alert", (str) => {
      expect(str).to.contain("inválidos");
    });
  });
});
