/// <reference types="cypress" />
import { onLoginPage } from "../support/page_objects/demoqaLoginPage"
import { onProfilePage } from "../support/page_objects/demoqaProfilePage"


describe('US 3 - Store session and use it on the other test', () => {

    beforeEach('Create Session', () => {
        cy.LoginDemoQA()
    })

    it('Create Session2', () => {
            cy.openDemoQAPage()
            onProfilePage.validateUsername(Cypress.env('validUsername'))

    })

})