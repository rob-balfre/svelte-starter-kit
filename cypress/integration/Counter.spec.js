describe('Counter component', () => {
  beforeEach(() => {
    cy.visit('/counter')
  });

  it('renders text "Count"', () => {
    cy.contains('p', 'Count: 0');
  });

  it(`can increase counter when clicking increment button`, () => {
    cy.get('#increment').click();
    cy.contains('p', 'Count: 1');
  });

  it(`can decrease counter when clicking decrement button`, () => {
    cy.get('#decrement').click();
    cy.contains('p', 'Count: -1');
  });
});