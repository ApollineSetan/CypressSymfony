describe('category update', () => {
    it('should update the category name', () => {
      cy.visit('https://127.0.0.1:8000/category/1/edit')
      cy.get('#category_label').clear().type('NewName')
      cy.get('[name="category"] > .btn').click()
      cy.visit('https://127.0.0.1:8000/category')
      cy.wait(3000)
      cy.get('table').contains('td', 'NewName')
    })
  })
  