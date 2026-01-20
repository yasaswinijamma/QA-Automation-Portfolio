describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
});