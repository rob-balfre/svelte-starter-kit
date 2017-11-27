describe('Home component', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('renders title "Svelte Starter Kit"', () => {
    cy.contains('h1', 'Svelte Starter Kit')
  });
});