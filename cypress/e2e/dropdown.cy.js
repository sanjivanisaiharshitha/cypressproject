

describe('handling dropdowns', ()=> {
   /* it ('dropdown with select', ()=> {

        cy.visit("https://www.zoho.com/crm/crmplus/request-demo.html")
        cy.get('#zcf_address_country').select('canada').should('have.value','canada')
    })*/
   /* it ('dropdown without select', ()=> {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
    })*/
    /*it ('Auto suggest dropdown', ()=> {

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Hyderabad')
        cy.get('.suggestion-title').contains('Hyderabad Metro').click()
    })*/
    it ('Dynamic dropdown', ()=> {

        cy.visit("https://www.google.com/")
        cy.get('.gLFyf').type('canada')
        
    })
})