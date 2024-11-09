import { faker } from "@faker-js/faker";

const msgInscritoComSucesso = "You have been successfully subscribed!";

class Homepage {
  clicarEmSeInscrever() {
    cy.get("input#susbscribe_email")
      .scrollIntoView()
      .type(faker.internet.email());
    cy.get("button#subscribe").click();
    cy.contains(msgInscritoComSucesso).should("be.visible");
    return this;
  }
}

export default new Homepage();
