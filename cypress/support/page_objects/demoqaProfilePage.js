export class ProfilePage{

    validateUsername(username){
        cy.get('#userName-value').then( label => {
            cy.wrap(label).should('contain',username)
        })
    }

    validateMainHeader(){
        cy.get('#app').then( header => {
            cy.wrap(header).find('header a').should('have.attr','href','https://demoqa.com')
        })
    }

    validateProfileURL(){
        cy.url().then( link => {
            cy.wrap(link).should('contain','profile')
        })
    }

}

export const onProfilePage = new ProfilePage()