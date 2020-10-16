describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const nameInput = () => cy.get('input[name="name"]')
  const sauceInput = () => cy.get('#red')
  const submitBtn = () => cy.get('button[id="submit"]')

  it('Get Name, Type A Name, Test Value', () => {
    nameInput()
      .type("James")
      .should('have.value', 'James')
  })

  it('Get Name, Type A Name, Test Value', () => {
    sauceInput()
      .click("James")
      .should('be.checked')
  })


  it('User can fill out fields and submit form', () => {
    nameInput()
      .type("James")

    sauceInput()
      .click()

    submitBtn()
      .click()

    cy.wait(3000)

    cy.url().should('include', 'success')
  })
})