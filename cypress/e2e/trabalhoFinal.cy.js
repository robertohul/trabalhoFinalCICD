/// <reference types="cypress" />
import cadastro from '../pages/cadastro'
import contatar from '../pages/contatar'
import login from '../pages/login'
import menu from '../pages/menu'
import produto from '../pages/produto'
import homepage from '../pages/homepage'
import carrinho from '../pages/carrinho'
import { faker } from '@faker-js/faker' 

const email = 'tester-1721346302730@mail.com'
const senha = '12345'
const nomeUsuario = 'Tester QA'

describe('Automation Exercise', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 1: Register User', () => {
    menu.irParaLoginCadastro()
    cadastro
      .preencherFormulario()
    login.verificarUsuarioLogado(nomeUsuario)
  })

  it('Test Case 2: Login User with correct email and password', () => {
    menu.irParaLoginCadastro()
    login.preencherLogin(email, senha)
      .verificarUsuarioLogado(nomeUsuario)
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    menu.irParaLoginCadastro()
    login.preencherLogin(faker.internet.email(), faker.internet.password())
      .mostrarSenhaErrada() 
  })

  it('Test Case 4: Logout User', () => {
    menu.irParaLoginCadastro()
    login.preencherLogin(email, senha)
      .verificarUsuarioLogado(nomeUsuario)
      .clicarEmLogout()
  })

  it('Test Case 5: Register User with existing email', () => {
    menu.irParaLoginCadastro()
    cadastro.iniciarCadastro(email)
      .verificarMensagemDeEmailExistente()
  })

  it('Test Case 6: Contact Us Form', () => {
    menu.irParaNosContate()
    contatar.verificarSeFormularioEstaVisivel()
      .preencherFormulario()
      .verificarSeFormularioFoiEnviado()
  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu.irParaProdutos()
    produto.verificarTodosProdutos()
      .verificarDetalhesDoPrimeiroProduto()
  })

  it('Test Case 9: Search Product', () => {
    menu.irParaProdutos()
    produto.pesquisarProduto()
  })

  it('Test Case 10: Verify Subscription in home page', () => {
    homepage.clicarEmSeInscrever()
  })

  it('Test Case 15: Place Order: Register before Checkout', () => {
    menu.irParaLoginCadastro()
    cadastro.preencherFormulario()
    produto.adicionarProduto()
    carrinho.fazerCheckOut()
      .fazerPagamento()
    login.deletarConta()
  })
})