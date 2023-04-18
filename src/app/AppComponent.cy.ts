import { AppComponent } from "./app.component"

describe('AppComponent.cy.ts', () => {
  it.only('test 1', () => {
    cy.mount(AppComponent)
    cy.get('blah').should("be.visible")
  })

  it('test 2', () => {
    cy.mount(AppComponent)
    cy.get('div').should("be.visible")
  })

  it('test 3', () => {
    cy.mount(AppComponent)
  })

  it('test 4', () => {
    cy.mount(AppComponent)
    cy.get('article').should("be.visible")
  })
})