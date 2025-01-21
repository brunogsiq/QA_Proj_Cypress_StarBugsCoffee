/// <reference types="cypress" /> 

let tela = 0;
let cenario = 0;
let teste = 0;
let funcao = 0;
describe(`${++tela} - Tela Home.`, () =>
{
	context(`Cenário ${++cenario} - Regras de negócio.`, () =>
	{
		it(`${++teste}.${++funcao} - Validar acesso ao sistema.`, () =>
		{
			/*
			Dado que foi acessado o link da platafarma,
			Quando o sistema carregar,
			Então o sistema deverá apresentar o slogan na tela home.
			*/
			cy.visit('https://starbugs.vercel.app/');

			cy.waitUntil(() => 
				cy.get('.container div section')
					.should('be.visible')
			);

			cy.get(".container div section")
				.and("contain", "Bora tomar um café? ");
		});

		it(`${teste}.${++funcao} - Validar visualização de produtos`, () =>
		{
			/*
			Dado que a tela home está sendo apresentada,
			Quando direcionar para o rodapé
			Então o sistema deverá apresentar os produtos mais vendidos.
			*/

			cy.visita_TelaHome();

			cy.get(".coffee-list h1")
				.eq(0)
				.scrollIntoView()
				.contains('Produtos mais vendidos')
				.should('be.visible');
		});

		it(`${teste}.${++funcao} - Validar acesso a página de comprar`, () =>
		{
			/*
			Dado que foi realizado um evento de clique na opção Comprar,
			Quando o sistema redirecionar
			Então o sistema deverá apresentar a página de cadastro.
			*/

			cy.visita_TelaHome();

			cy.get(".buy-coffee")
				.eq(0)
				.click();

			cy.waitUntil(() =>
				cy.get('.sc-jrcTuL')
					.should('be.visible')
			);

			cy.get('.sc-jrcTuL')
				.and('contain', 'Complete o seu Pedido');
		});
	});
});