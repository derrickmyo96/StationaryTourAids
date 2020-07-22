/// <reference types="cypress" />

context('Download JiAR Page Link Testing', () => {
    beforeEach(() => {
        cy.visit('https://stationarytablet.herokuapp.com/scanQR')
    })
    describe('Navigate to Register Tablet Page', () => {
        it('clicks on link to Register Tablet page', () => {
          cy.get('a[href="/registerTablet"]').click()
          cy.url().should('include', '/registerTablet')
        })
    })  
    describe('Navigate to Main Page', () => {
        it('clicks on logo to Main page', () => {
          cy.get('img[src="/images/sglogo(main).png"]').click()
          cy.url().should('include', '/')
        })
    })
})