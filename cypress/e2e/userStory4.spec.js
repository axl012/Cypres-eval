/// <reference types="cypress" />
import { onDemoQALinksPage } from "../support/page_objects/demoqaLinksPage"

describe('US 4 - Intercept api calls', () => {

    beforeEach('Open DemoQA Links Page', () => {
        cy.openDemoQALinksPage()
        cy.intercept({method: 'Get',path: '**/created'}).as('created')
    })

    it('Create Session2', () => {
        onDemoQALinksPage.verifyLinksPage()
        onDemoQALinksPage.clickOncreatedLink()
        cy.wait('@created').then(xhr => {
            expect(xhr.response.statusCode).to.equal(201)
            expect(xhr.response.statusMessage).to.equal('Created')
        })
    })

})