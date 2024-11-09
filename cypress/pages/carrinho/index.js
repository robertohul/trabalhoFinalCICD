import { faker } from '@faker-js/faker' 

class Carrinho{
    fazerCheckOut(){
        cy.get('.btn-default.check_out').should('be.visible')
        .get('.btn-default.check_out').click()
        .get('.heading').first().should('have.text', 'Address Details')
        .get('.heading').last().should('have.text', 'Review Your Order')
        .get('.form-control').type(faker.lorem.words())
        .get('.btn-default.check_out').click()
        return this
    }

    fazerPagamento(){
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        .get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        .get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        .get('[data-qa="expiry-month"]').type(12)
        .get('[data-qa="expiry-year"]').type(2035)
        .get('[data-qa="pay-button"]').click()
        .get('[data-qa="order-placed"]').should('be.visible')
        return this
    }
}

export default new Carrinho()