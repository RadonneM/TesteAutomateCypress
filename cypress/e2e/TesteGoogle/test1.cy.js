describe('Site Google.com',()=>{
//testul nr 1

it('functioneaza search basic ', () => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('vlog de it').type('{enter}');

    cy.get('#result-stats').should('exist');
})

})