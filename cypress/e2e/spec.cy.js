describe('Login', () => {
  beforeEach(() => {
    // run these tests as if in a mobile browser
    // and ensure our responsive UI is correct
    cy.viewport('iphone-xr')
  })

  it('Login Success', () => {
    cy.visit('/')
    cy.location().should((url) => {
      expect(url.toString()).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })    
  cy.get('div.orangehrm-login-branding',{ timeout: 10000 }).should('be.visible')
  cy.get('div.orangehrm-login-slot',{ timeout: 10000 }).should('be.visible')
  cy.contains('Login',{ timeout: 10000 }).should('be.visible')
  cy.contains('Username : Admin',{ timeout: 10000 }).should('be.visible')
  cy.contains('Password : admin123',{ timeout: 10000 }).should('be.visible')
  cy.get('label.oxd-label').should('be.visible','eq',2)
  cy.get('i.oxd-icon.bi-person.oxd-input-group__label-icon').should('be.visible')
  cy.contains('Username').should('be.visible')
  cy.get("input[name='username']").type('Admin')
  cy.get('i.oxd-icon.bi-key.oxd-input-group__label-icon').should('be.visible')
  cy.contains('Password').should('be.visible')
  cy.get("input[name='password']").type('admin123')
  cy.get("button[type='submit']").click()
  cy.location().should((url) => {
    expect(url.toString()).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})  
  cy.get('img.oxd-userdropdown-img',{ timeout: 10000 }).should('be.visible')
  })

  it('login Failed', () =>{
    cy.visit('/')
    cy.location().should((url) => {
      expect(url.toString()).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })  
  cy.get('div.orangehrm-login-branding',{ timeout: 10000 }).should('be.visible')
  cy.get("input[name='username']",{ timeout: 10000 }).type('admin')
  cy.get("input[name='password']").type('admin3')
  cy.get("button[type='submit']").click()
  cy.get('div.oxd-alert-content.oxd-alert-content--error',{ timeout: 10000 }).should('be.visible')
  cy.contains('Invalid credentials').should('be.visible')
  })
})