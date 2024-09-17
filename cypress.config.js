const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    validUsername: 'axelcazares',
    validPassword: 'Test@123',
    invalidUsername: 'axelcazaresnot',
    invalidPassword: 'Test@123not',
    invalidCredentialsMessage: 'Invalid username or password!',
    demoQAURL: 'http://demoqa.com/login',
    demoQALinksURL: 'https://demoqa.com/links',
    AutomationPlaygroundURL:  'http://uitestingplayground.com/loaddelay '
  },
  e2e: {
    viewportHeight: 1080,
  viewportWidth: 1920,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
