export class TestingPlaygroundPage{
    waitUntilPageLoads(miliseconds){
        cy.get('.container button').as('button')
        cy.wait('@button',{timeout: miliseconds});
    }

    validateButton(){
        cy.get('.container button').then( button => {
            cy.wrap(button).should('contain','Button Appearing After Delay')
        })
    }

    openAutomationPlaygroundPage(miliseconds){
        cy.visit(Cypress.env('AutomationPlaygroundURL'), {timeout: miliseconds})
    }

}

export const onTestingPlaygroundPage = new TestingPlaygroundPage()