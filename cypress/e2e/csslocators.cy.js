


describe('csslocators', () => {
    it ("csslocators", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#name").type('sai')
        cy.get("[placeholder='Enter EMail']").type("sai@gmail.com")
        cy.get('#phone').type('54535344')
        cy.xpath("//textarea[@id='textarea']").type("19 caymus street")
     


    })
})

