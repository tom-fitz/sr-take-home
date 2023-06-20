// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Maria Carter');
    cy.contains('Academic Fit Report');
    cy.get('[data-test=highlighted-cell-1]').should('have.css','background-color').and('eq', 'rgb(117, 172, 229)');
    cy.get('[data-test=highlighted-cell-5]').should('have.css','background-color').and('eq', 'rgb(166, 168, 218)');
    cy.get('[data-test=highlighted-cell-8]').should('have.css','background-color').and('eq', 'rgb(180, 167, 214)');
    cy.get('[data-test=highlighted-cell-11]').should('have.css','background-color').and('eq', 'rgb(193, 148, 181)');
    cy.get('[data-test=highlighted-cell-14]').should('have.css','background-color').and('eq', 'rgb(215, 115, 125)');
  })
})
