

describe('assertion', ()=> {

    it ('explicit assertions',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        
        let expName="Kis angyal";
        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actName=x.text()
            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })

    } )
})