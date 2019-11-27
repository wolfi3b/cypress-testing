describe('Application loads properly', function() {
    beforeEach(function () {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      // cy.viewport(1280, 720)
    })

    it('xxx', function() {
      cy.visit(Cypress.config("baseUrl") + '/').then(() => {
        expect(true).to.be.true;
      });
    })

    

    it('Shows correct default pageeees', function() {
      cy.visit(Cypress.config("baseUrl") + '/').then(() => {
        cy.get('.terminal')
        .toMatchImageSnapshot({
          imageConfig: {
            "threshold": 0,
            "createDiffImage": true
          },  
          autopassNewSnapshots : false, 
          name:"terminalTest"
        });
      });
    })

    it('Shows correct default full pageeees', function() {
      
      cy.visit(Cypress.config("baseUrl") + '/').then(() => {
        cy.document()        
        .toMatchImageSnapshot({
          imageConfig: {
            "threshold": 0,
            "createDiffImage": true
          },  
          autopassNewSnapshots : false, 
          name:"fullTest"
        });
      });
    })
  })