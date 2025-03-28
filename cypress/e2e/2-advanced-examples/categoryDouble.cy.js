describe('category duplicate name test', () => {
    it('should not allow category with a similar name', () => {
      cy.visit('https://127.0.0.1:8000/category/8/edit')
      cy.get('#category_label').clear().type('Romance')
      cy.get('[name="category"] > .btn').click()
      cy.wait(3000)
      cy.get('.alert-danger').should('contain', 'Ce nom de catégorie existe déjà')
    })
  })
  