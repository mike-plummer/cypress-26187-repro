describe('spec 2', () => {
  it('does a failing thing', () => {
    cy.visit('./index.html')
    cy.get('blah', { timeout: 250 }).should('be.visible')
  })

  it('does a succeeding thing', () => {
    cy.visit('./index.html')
    cy.get('div', { timeout: 250 }).should('be.visible')
  })
})