// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginsucses', (user) => {
    cy.session(
      user,
      () => {
        cy.visit('/')
        cy.get('div.orangehrm-login-branding',{ timeout: 10000 }).should('be.visible')
        cy.get("input[name='username']").type(user.email)
        cy.get("input[name='password']").type(user.password)
        cy.get("button[type='submit']").click()
        cy.location().should((url) => {
            expect(url.toString()).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })  
          cy.get('img.oxd-userdropdown-img',{ timeout: 10000 }).should('be.visible')
    },
    // {
    //   validate: () => {
    //     cy.getCookie('_token').should('exist')
    //   },
    // }
  )
})
// Cypress.Commands.add('getSessionStorage', (key) => {
//     cy.window().then((window) => window.sessionStorage.getItem(key))
//   })
//   Cypress.Commands.add('setSessionStorage', (key, value) => {
//     cy.window().then((window) => {
//       window.sessionStorage.setItem(key, value)
//     })
//   })