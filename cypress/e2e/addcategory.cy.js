describe('category creation', () => {
  it('should add a new category', () => {
    cy.visit('https://127.0.0.1:8000/category/new')
    cy.get('#category_label').type('Romance')
    cy.get('.btn').click()
    cy.visit('https://127.0.0.1:8000/category')
    cy.get('table').contains('td', 'Romance')
  })

  it('should show an error for invalid category', () => {
    cy.visit('https://127.0.0.1:8000/category/new')
    cy.get('.btn').click()
    cy.get('.form-error-message').should('contain', 'This value should not be blank')
  })
})
