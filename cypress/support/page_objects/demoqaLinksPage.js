export class DemoQALinksPage {

    verifyLinksPage(){
        cy.get('#linkWrapper').then( header => {
            cy.wrap(header).find('h1').should('contain','Links')
        })
    }
   
    clickOncreatedLink(){
        cy.get('#created').then( link => {
            cy.wrap(link).click()
        } )
    }

}

export const onDemoQALinksPage = new DemoQALinksPage()