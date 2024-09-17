export class LoginPage{

    checkWelcomeHeader(){
        cy.get('.login-wrapper').find('h2').then( header => {
            cy.wrap(header).should('contain','Welcome')
        })
    }

    inputUsername(username){
        cy.get('#userName').then( input => {
            cy.wrap(input).type(username)
        })
    }

    inputPassword(password){
        cy.get('#password').then( input => {
            cy.wrap(input).type(password)
        })
    }

    clearUsername(){
        cy.get('#userName').then( input => {
            cy.wrap(input).clear()
        })
    }

    clearPassword(){
        cy.get('#password').then( input => {
            cy.wrap(input).clear()
        })
    }

    clickOnLoginButton(){
        cy.get('#login').then( button => {
            cy.wrap(button).click()
        })
    }

    clickOnNewUserButton(){
        cy.get('#newUser').then( button => {
            cy.wrap(button).click()
        })
    }

    validateErrorMessage(message){
        cy.get('#name').then( text => {
            cy.wrap(text).should('contain',message)
        })
    }

    interceptMessages(){
        cy.intercept('https://oajs.openx.net/esp?url=https%3A%2F%2Fdemoqa.com%2F__%2F%23%2Fspecs%2Frunner%3Ffile%3Dcypress%2Fe2e%2Fspec.spec.js&rid=esp&cc=1', req => req.destroy())
        cy.intercept('https://oajs.openx.net/esp?url=https%3A%2F%2Fdemoqa.com%2F__%2F%23%2Fspecs%2Frunner%3Ffile%3Dcypress%2Fe2e%2Fspec.spec.js&rid=esp&cc=1', req => req.destroy())
        cy.intercept('https://analytics.google.com/g/collect?v=2&tid=G-MVRXK93D28>m=45je49b0v888635590za200zb855226469&_p=1726243520026&_gaz=1&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=0&cid=1536879389.1726243520&ul=en-us&sr=1728x1117&_ng=1&uaa=arm&uab=64&uafvl=Chromium%3B128.0.6613.138%7CNot%253BA%253DBrand%3B24.0.0.0%7CGoogle%2520Chrome%3B128.0.6613.138&uamb=0&uam=&uap=macOS&uapv=14.4.1&uaw=0&are=1&pae=1&frm=1&pscdl=noapi&_s=1&sid=1726243524&sct=1&seg=0&dl=https%3A%2F%2Fdemoqa.com%2F&dt=DEMOQA&en=user_engagement&_fv=1&_ss=1&tfd=4513', req => req.destroy())
    }

    
}

export const onLoginPage = new LoginPage()