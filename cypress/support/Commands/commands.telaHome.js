/// <reference types="cypress" />

Cypress.Commands.add('visita_TelaHome', () =>
{
    /*
    Dado que foi acessado o link da platafarma,
    Quando o sistema carregar,
    Então o sistema deverá apresentar o slogan na tela home.
    */

    cy.visit('https://starbugs.vercel.app/');

    cy.get('.container div section')
        .should("be.visible")
        .and('contain', 'Bora tomar um café? ');
});