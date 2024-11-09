class Produto{
    adicionarProduto(){
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        return this
    }

    verificarTodosProdutos(){
        cy.url().should('contain', 'products')
        .get('.title').should('be.visible').and('contain', 'All Products')
        cy.get('.single-products')
          .should('be.visible')
          .and('have.length.at.least', 1)
        return this
    }

    verificarDetalhesDoPrimeiroProduto(){
        cy.get('.single-products')
        .first()
        .parent()
        .contains('View Product')
        .click()
        cy.get('.product-information > h2').should('be.visible')
        .get('.product-information p').should('be.visible').and('have.length', 4)
        .get('.product-information span span').should('be.visible')
        return this
    }

    pesquisarProduto(){
        cy.url().should('contain', 'products')
        .get('.title').should('be.visible').and('contain', 'All Products')
        .get('input#search_product').type('Shirt')
        .get('button#submit_search').click()
        .get('.title').should('be.visible').and('contain', 'Searched Products')
        .get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        return this
    }
}

export default new Produto()