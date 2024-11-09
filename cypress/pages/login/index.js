const msgEmailOuSenhaErrada = "Your email or password is incorrect!";

class Login {
  preencherLogin(usuario, senha) {
    cy.get('[data-qa="login-email"]')
      .type(usuario)
      .get('[data-qa="login-password"]')
      .type(senha, { log: false })
      .get('[data-qa="login-button"]')
      .click();
    return this;
  }

  verificarUsuarioLogado(nomeUsuario) {
    cy.get("i.fa-user").parent().should("contain", nomeUsuario);
    return this;
  }

  mostrarSenhaErrada() {
    cy.get("p").should("contain", msgEmailOuSenhaErrada);
    return this;
  }

  clicarEmLogout() {
    cy.contains("Logout").click();
    cy.url().should("contain", "login");
    cy.contains("Login to your account").should("be.visible");
    return this;
  }

  deletarConta() {
    cy.get('[href *="delete"]')
      .click()
      .get("b")
      .should("contain", "Account Deleted!")
      .get('[data-qa="continue-button"]')
      .click();
    return this;
  }
}

export default new Login();
