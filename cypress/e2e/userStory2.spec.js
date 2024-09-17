/// <reference types="cypress" />
import { onTestingPlaygroundPage } from "../support/page_objects/testingPlaygroundPage"
describe('US 2 - UI testing playground tests', () => {

    it('delay tests', () => {
        cy.waitUntilTestingPlaygroundPageLoads(8000)
        onTestingPlaygroundPage.validateButton()
    })
})