// navigate.cy.ts
describe('Navigation', () => {
  it('naviguate to product page', () => {
    cy.visit('/');
    // Simule un clic sur le lien "Produits"
    cy.get('a[href="/product"]').click();
    // Vérifie que l'URL contient "/products"
    cy.url().should('include', '/product');
    // Vérifie que le contenu de la page correspond bien
    cy.contains('nos produits!');
  });
});
