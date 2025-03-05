

describe('check UI elements', ()=>{
    /* it('checking radio buttons',()=>{
       cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
        cy.get("#female").should('be.visible')

        //selecting radio buttons
        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
        })*/
   it ('checking check boxes', ()=> {
    cy.visit("https://testautomationpractice.blogspot.com/")

      //visibility of check boxes
    //cy.get("#tuesday").should('be.visible')
    //cy.get("#monday").should('be.visible')
    
    //selecting check boxes
    //cy.get("#tuesday").check().should('be.checked')

    //unselecting check boxes
   // cy.get("#tuesday").uncheck().should('not.be.checked')

    //selecting all checkboxes
    //cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
    //cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

    //selecting first checkbox
    cy.get('input.form-check-input[type="checkbox"]').first().check()
   cy.get('input.form-check-input[type="checkbox"]').last().check()

    })
})