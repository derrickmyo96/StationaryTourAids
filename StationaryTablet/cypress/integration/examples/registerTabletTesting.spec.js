/// <reference types="cypress" />

// context('Register Tablet Page Link Testing', () => {
//     beforeEach(() => {
//         cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
//     })
//     // Test to navigate to Download JiAR Page
//     describe('Navigate to Download JiAR Page', () => {
//         it('clicks on link to downloadJiAR page', () => {
//           cy.get('a[href="/scanQR"]').click()
//           cy.url().should('include', '/scanQR')
//         })
//     })  
// })

context('Register Tablet Form Testing', () => {
    describe('Loads Register Tablet Page', () => {
        it('loads the register tablet page', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
        })
    })

    describe('Test with correct inputs', () => {
        it('should write valid information', () => {
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test@gmail.com")
                
            })
            cy.get('[type="radio"]').check('No')
        })
    })
})

