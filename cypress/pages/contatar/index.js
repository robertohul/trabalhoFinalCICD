import { faker } from "@faker-js/faker";

const msgFormularioEnviado =
  "Success! Your details have been submitted successfully.";

class Contatar {
  preencherFormulario() {
    cy.get('[data-qa="name"]')
      .type(faker.person.firstName())
      .get('[data-qa="email"]')
      .type(faker.internet.email())
      .get('[data-qa="subject"]')
      .type(faker.person.jobArea())
      .get('[data-qa="message"]')
      .type(faker.lorem.word());
    cy.fixture("example.json")
      .as("arquivo")
      .get('input[name="upload_file"]')
      .selectFile("@arquivo")
      .get('[data-qa="submit-button"]')
      .click();
    return this;
  }

  verificarSeFormularioEstaVisivel() {
    cy.get(`.contact-form h2`)
      .should("be.visible")
      .and("have.text", "Get In Touch");
    return this;
  }

  verificarSeFormularioFoiEnviado() {
    cy.get(".status").should("have.text", msgFormularioEnviado);
    return this;
  }
}

export default new Contatar();
