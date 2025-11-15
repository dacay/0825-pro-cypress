/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('shows an error when email is invalid', () => {

    cy.get('#exampleEmail').type('test');

    cy.get('#emailError').should('have.text', 'Please enter a valid email address');

    cy.get('button').should('be.disabled');
  })


  it('shows an error when email and password is invalid', () => {

    cy.get('#exampleEmail').type('test');
    cy.get('#examplePassword').type('123');

    cy.get('div.invalid-feedback').should('have.length', 2);


    cy.get('#passwordError').should('have.text', 'Password must be at least 4 characters long');

    cy.get('button').should('be.disabled');

  })

  it('all is valid but did not click checkbox', () => {

    cy.get('#exampleEmail').type('test@test.com');
    cy.get('#examplePassword').type('1234');

    cy.get('button').should('be.disabled');
  })

  // it('can add new todo items', () => {
  //   // We'll store our item text in a variable so we can reuse it
  //   const newItem = 'Feed the cat'

  //   // Let's get the input element and use the `type` command to
  //   // input our new list item. After typing the content of our item,
  //   // we need to type the enter key as well in order to submit the input.
  //   // This input has a data-test attribute so we'll use that to select the
  //   // element in accordance with best practices:
  //   // https://on.cypress.io/selecting-elements
  //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

  //   // Now that we've typed our new item, let's check that it actually was added to the list.
  //   // Since it's the newest item, it should exist as the last element in the list.
  //   // In addition, with the two default items, we should have a total of 3 elements in the list.
  //   // Since assertions yield the element that was asserted on,
  //   // we can chain both of these assertions together into a single statement.
  //   cy.get('.todo-list li')
  //     .should('have.length', 3)
  //     .last()
  //     .should('have.text', newItem)
  // })

  // it('can check off an item as completed', () => {
  //   // In addition to using the `get` command to get an element by selector,
  //   // we can also use the `contains` command to get an element by its contents.
  //   // However, this will yield the <label>, which is lowest-level element that contains the text.
  //   // In order to check the item, we'll find the <input> element for this <label>
  //   // by traversing up the dom to the parent element. From there, we can `find`
  //   // the child checkbox <input> element and use the `check` command to check it.
  //   cy.contains('Pay electric bill')
  //     .parent()
  //     .find('input[type=checkbox]')
  //     .check()

  //   // Now that we've checked the button, we can go ahead and make sure
  //   // that the list element is now marked as completed.
  //   // Again we'll use `contains` to find the <label> element and then use the `parents` command
  //   // to traverse multiple levels up the dom until we find the corresponding <li> element.
  //   // Once we get that element, we can assert that it has the completed class.
  //   cy.contains('Pay electric bill')
  //     .parents('li')
  //     .should('have.class', 'completed')
  // })

})
