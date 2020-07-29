/// <reference types="cypress" />

context('Register Tablet Page Link Testing', () => {
    beforeEach(() => {
        cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
    })
    describe('Navigate to Download JiAR Page', () => {
        it('clicks on link to downloadJiAR page', () => {
          cy.get('a[href="/scanQR"]').click()
          cy.url().should('include', '/scanQR')
        })
    }) 
    describe('Navigate to Main Page', () => {
        it('clicks on logo to Main page', () => {
          cy.get('img[src="/images/sglogo(main).png"]').click()
          cy.url().should('include', '/')
        })
    }) 
})

context('Register Tablet Form Testing', () => {
    describe('Loads Register Tablet Page', () => {
        it('loads the register tablet page', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
        })
    })

    // describe('Open Terms and Conditions Modal', () => {
    //     it('opens up terms and conditions modal', () => {
    //         cy.get('a[href="#"]').click()
    //         // Need to implement click on Close button
    //         cy.get('button[data-dismiss="modal"]').click()
    //     })
    // })

    describe('Test with correct inputs', () => {
        it('should write valid information', () => {
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test123@gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.get('input[id="termsAndConditionsModal"]').check()
                cy.contains('Request').click()
                cy.url().should('include', '/submit')
            })  
        })
    })

    describe('Test with invalid first name', () => {
        it('should not allow for successful registration', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("D")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test123@gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.get('input[id="termsAndConditionsModal"]').check()
                cy.contains('Request').click()
                cy.contains('Please enter a valid first name.')
                cy.url().should('not.include', '/submit')
            }) 
        })
    })

    describe('Test with invalid last name', () => {
        it('should not allow for successful registration', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("D")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test123@gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.get('input[id="termsAndConditionsModal"]').check()
                cy.contains('Request').click()
                cy.contains('Please enter a valid last name.')
                cy.url().should('not.include', '/submit')
            }) 
        })
    })

    describe('Test with invalid contact number', () => {
        it('should not allow for successful registration', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("8888")
                cy.get('input[name="email"]').type("test123@gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.get('input[id="termsAndConditionsModal"]').check()
                cy.contains('Request').click()
                cy.contains('Please enter a valid contact number.')
                cy.url().should('not.include', '/submit')
            }) 
        })
    })

    describe('Test with invalid email address', () => {
        it('should not allow for successful registration', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test.gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.get('input[id="termsAndConditionsModal"]').check()
                cy.contains('Request').click()
                cy.contains('Please enter a valid email address.')
                cy.url().should('not.include', '/submit')
            }) 
        })
    })

    describe('Test without checking Terms and Conditions', () => {
        it('should not allow for successful registration', () => {
            cy.visit('https://stationarytablet.herokuapp.com/registerTablet')
            cy.get('form').within(($form) => {
                cy.get('input[name="firstName"]').type("John")
                cy.get('input[name="lastName"]').type("Doe")
                cy.get('input[name="contactNumber"]').type("88888888")
                cy.get('input[name="email"]').type("test123@gmail.com")
                cy.get('input[type="radio"]').check('No', {force:true})
                cy.get('input[name="agreeToMarketing"]').check()
                cy.contains('Request').click()
                cy.contains('Please read the Terms and Conditions and check the box.')
                cy.url().should('not.include', '/submit')
            }) 
        })
    })
})

