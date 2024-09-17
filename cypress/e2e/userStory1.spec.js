/// <reference types="cypress" />
import { onLoginPage } from "../support/page_objects/demoqaLoginPage"
import { onProfilePage } from "../support/page_objects/demoqaProfilePage"
import { userData } from "../support/testData/userData"

describe('US 1 - Demo QA Login tests', () => {
   beforeEach('open DemoQA Page', () => {
     cy.openDemoQAPage()
 })

 it('Unsuccessfull login', () => {
    onLoginPage.interceptMessages()  
    onLoginPage.checkWelcomeHeader()
    onLoginPage.inputUsername(userData.invalidUsername)
    onLoginPage.inputPassword(userData.invalidPassword)
    onLoginPage.clickOnLoginButton()
    onLoginPage.validateErrorMessage('Invalid username or password!')
 })

  it('Successfull login', () => {
    onLoginPage.interceptMessages()
    onLoginPage.checkWelcomeHeader()
    onLoginPage.inputUsername(userData.validUsername)
    onLoginPage.inputPassword(userData.validPassword)
    onLoginPage.clickOnLoginButton()
    onProfilePage.validateMainHeader()
    onProfilePage.validateUsername(userData.validUsername)
    onProfilePage.validateProfileURL()
  })
})