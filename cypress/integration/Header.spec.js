describe('Counter component', () => {
  beforeEach(() => {
    cy.visit('/counter')
  });

  it('renders salutation correctly', () => {
    cy.contains('h1', 'Derek');
  });
});