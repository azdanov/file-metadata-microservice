describe('File Metadata Microservice', () => {
  it('should connect', () => {
    cy.visit('/');
  });

  it('should contain a <title>', () => {
    cy.visit('/');
    cy.title().should('include', 'File Metadata Microservice');
  });

  it('should contain an _csrf <input>', () => {
    cy.visit('/');
    cy
      .get('form')
      .find('[name="_csrf"]')
      .should('exist');
  });
});
