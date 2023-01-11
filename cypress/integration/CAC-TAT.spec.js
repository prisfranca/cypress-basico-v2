/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function (){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })

    it('preenche os campos obrigatórios e envia formulário', function(){

      const longText ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        cy.get('#firstName').type('Priscila')
        cy.get('#lastName').type('Alves França')
        cy.get('#email').type('priscila@gmail.com')
        cy.get('#open-text-area').type(longText,{delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
      })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
       cy.get('#firstName').type('Priscila')
       cy.get('#lastName').type('Alves França')
       cy.get('#email').type('priscila@gmail.com')
       cy.get('#open-text-area').type('Teste')
       cy.get('button[type="submit"]').click()

       cy.get('.error').should('be.visible')
      })

      it.only('campo telefone continua vazio quando preenchido com valor não-numérico', function(){
        cy.get('#phone')
          .type('abcdefghij')
          .should('have.value','')

      })

      //it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
      //  cy.get('#firstName').type('Priscila')
       // cy.get('#lastName').type('Alves França')
        //cy.get('#telefone').type('11987204365')
        //cy.get('#email').type('priscila@gmail!com')
        //cy.get('#open-text-area').type('Teste')
        //cy.get('button[type="submit"]').click()
 
        //cy.get('.error').should('be.visible')
       //})
    })
  