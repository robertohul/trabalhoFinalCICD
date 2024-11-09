import { faker } from "@faker-js/faker";

const msgEmailExistente = "Email Address already exist!";

class Cadastro {
  preencherFormulario() {
    const timestamp = new Date().getTime();
    const signUpName = "Tester QA";
    Cypress.env("signUpName", signUpName);
    cy.get('[data-qa="signup-name"]')
      .type(Cypress.env("signUpName"))
      .get('[data-qa="signup-email"]')
      .type(`tester-${timestamp}@mail.com`);
    cy.contains("button", "Signup")
      .click()
      .get("input[type=radio]")
      .check("Mrs")
      .get("input[type=radio]")
      .eq(1)
      .check()
      .get("[type=password]")
      .type("12345", { log: false })
      .get('[data-qa="days"]')
      .select("5")
      .get('[data-qa="months"]')
      .select("November")
      .get('[data-qa="years"]')
      .select("1993")
      .get("input[type=checkbox]#newsletter")
      .check()
      .get("input[type=checkbox]#optin")
      .check()
      .get('[data-qa="first_name"]')
      .type(faker.person.firstName())
      .get('[data-qa="last_name"]')
      .type(faker.person.lastName())
      .get('[data-qa="company"]')
      .type(faker.company.name())
      .get('[data-qa="address"]')
      .type(faker.location.streetAddress())
      .get('[data-qa="country"]')
      .select("India")
      .get('[data-qa="state"]')
      .type(faker.location.state())
      .get('[data-qa="city"]')
      .type(faker.location.city())
      .get('[data-qa="zipcode"]')
      .type(faker.location.zipCode())
      .get('[data-qa="mobile_number"]')
      .type(faker.phone.number())
      .get('[data-qa="create-account"]')
      .click();
    cy.url("https://automationexercise.com/account_created")
      .should("includes", "account_created")
      .get('[data-qa="account-created"]')
      .should("be.visible")
      .get('[data-qa="continue-button"]')
      .click()
      .get("b")
      .should("contain", signUpName);
    return this;
  }

  iniciarCadastro() {
    cy.get('[data-qa="signup-name"]')
      .type(`Tester QA`)
      .get('[data-qa="signup-email"]')
      .type(`tester-1721346302730@mail.com`);
    cy.contains("button", "Signup").click();
    return this;
  }

  verificarMensagemDeEmailExistente() {
    cy.get(`.signup-form form p`)
      .should("be.visible")
      .and("contain", msgEmailExistente);
    return this;
  }
}

export default new Cadastro();
