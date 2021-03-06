/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://guarded-springs-79617.herokuapp.com')
  })
  // Test to navigate to Register Tablet Page
  describe('Navigate to Register Tablet Page', () => {
    it('clicks on link to registerTablet page', () => {
      cy.get('a[href="/registerTablet"]').click()
    })
  })  
  // Test to navigate to Download JiAR Page
  describe('Navigate to Download JiAR Page', () => {
    it('clicks on link to downloadJiAR page', () => {
      cy.get('a[href="/scanQR"]').click()
    })
  })
  // Test to navigate to Advertisement Videos
  describe('Navigate to first advertisement video', () => {
    it('clicks on link to first video on main page', () => {
      cy.contains('Discover KrisLab').click().get('a[href="#officialLaunch"]').click()
    })
  })
  describe('Navigate to second advertisement video', () => {
    it('clicks on link to second video on main page', () => {
      cy.contains('Discover KrisLab').click().get('a[href="#siaKrislab"]').click()
    })
  })
  describe('Navigate to third advertisement video', () => {
    it('clicks on link to third video on main page', () => {
      cy.contains('Discover KrisLab').click().get('a[href="#digitalInnovationHub"]').click()
    })
  })
  
})
