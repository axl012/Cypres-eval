export class UserData{
    constructor(){
        this.validUsername = Cypress.env('validUsername')
        this.validPassword = Cypress.env('validPassword')
        this.invalidUsername = Cypress.env('invalidUsername')
        this.invalidPassword = Cypress.env('invalidPassword')
    }
}

export const userData = new UserData()