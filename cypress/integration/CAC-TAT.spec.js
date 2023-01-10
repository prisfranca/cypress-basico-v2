/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function (){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })

    it.only('preenche os campos obrigatórios e envia formulário', function(){
        cy.get('#firstName').type('Priscila')
        cy.get('#lastName').type('Alves França')
        cy.get('#email').type('priscila@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })
  