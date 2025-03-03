describe('assertions',() =>{
 it ("Implicit assertions", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.url().should('include', 'orangehrmlive.com')
    //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.url().should('contain', 'orangehrmlive.com')

     cy.url().should('include', 'orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain', 'orangehrmlive.com')

    cy.url().should('include', 'orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrmlive.com')

    cy.title().should('include', 'Orange')
    .and('eq','OrangeHRM')
    .and('contain', 'HRM')

    cy.get('.orangehrm-login-branding').should('be.visible') //logo visible
    .and('exist') //logo exist
     cy.xpath("//a").should('have.length','5') // check no of links
     cy.get("input[placeholder='Username']").type('Admin') //provide a value in inputbox
     cy.get("input[placeholder='Username']").should('have.value','Admin')
 })
})