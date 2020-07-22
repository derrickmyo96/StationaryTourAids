/// <reference types="cypress" />

context('Main Page Link Testing', () => {
    beforeEach(() => {
      cy.visit('https://stationarytablet.herokuapp.com')
    })
    // Test to navigate to Register Tablet Page
    describe('Navigate to Register Tablet Page', () => {
      it('clicks on link to registerTablet page', () => {
        cy.get('a[href="/registerTablet"]').click()
        cy.url().should('include', '/registerTablet')
      })
    })  
    // Test to navigate to Download JiAR Page
    describe('Navigate to Download JiAR Page', () => {
      it('clicks on link to downloadJiAR page', () => {
        cy.get('a[href="/scanQR"]').click()
        cy.url().should('include', '/scanQR')
      })
    })
    // Test to navigate to Advertisement Videos
    describe('Navigate to first advertisement video', () => {
      it('clicks on link to first video on main page', () => {
        cy.contains('Discover KrisLab').click().get('a[href="#officialLaunch"]').click()
        cy.url().should('include', '#officialLaunch')
      })
    })
    describe('Navigate to second advertisement video', () => {
      it('clicks on link to second video on main page', () => {
        cy.contains('Discover KrisLab').click().get('a[href="#siaKrislab"]').click()
        cy.url().should('include', '#siaKrislab')
      })
    })
    describe('Navigate to third advertisement video', () => {
      it('clicks on link to third video on main page', () => {
        cy.contains('Discover KrisLab').click().get('a[href="#digitalInnovationHub"]').click()
        cy.url().should('include', '#digitalInnovationHub')
      })
    })
})
  