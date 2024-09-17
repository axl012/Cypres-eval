// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const user = Cypress.env("validUsername")
const password = Cypress.env("validPassword")


Cypress.Commands.add('openDemoQAPage', () => {
    cy.visit(Cypress.env('demoQAURL'))
})

Cypress.Commands.add('openDemoQALinksPage', () => {
    cy.visit(Cypress.env('demoQALinksURL'))
})

Cypress.Commands.add('waitUntilTestingPlaygroundPageLoads', (milliseconds) => {
    cy.visit(Cypress.env('AutomationPlaygroundURL'), {timeout: milliseconds})
})

Cypress.Commands.add('LoginDemoQA', () => {
    cy.session({user,password}, () => {
        cy.visit(Cypress.env('demoQAURL'))
        cy.get('#userName').then( input => {
            cy.wrap(input).type(user)
        })
        cy.get('#password').then( input => {
            cy.wrap(input).type(password)
        })
        cy.get('#login').then( button => {
            cy.wrap(button).click()
        })
        cy.get('#userName-value').then( label => {
            cy.wrap(label).should('contain',user)
        })
    },
{
    cacheAcrossSpecs: true
})
    

})
