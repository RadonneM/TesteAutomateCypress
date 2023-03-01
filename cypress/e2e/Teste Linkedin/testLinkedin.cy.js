describe('Site Linkedin', ()=>{
    it('Test de login ',()=>{
           cy.visit('https://linkedin.com');
           cy.get('.nav__button-secondary').click();
           cy.get('#username').type('radonibus@gmail.com');
           cy.get('#password').type('laracroft1111');
           cy.get('.btn__primary--large').click();
           cy.get('#ember16').should('exist');



    })



})