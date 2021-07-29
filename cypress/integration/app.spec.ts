/// <reference types="cypress" />
require('cypress-plugin-tab');

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Load tabs', () => {
    cy.get('#tab1').should('exist');
    cy.get('#tab2').should('exist');
    cy.get('button#tab1-tincidunt').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab1-tincidunt-tab').should('exist');
    cy.get('button#tab2-sodales').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab2-sodales-tab').should('exist');
    cy.get('#tab2-sodales-tab').contains('button', 'Continue');
  });
  it('#tabs1 should work correctly', () => {
    cy.get('button#tab1-sodales').click();
    cy.get('button#tab1-tincidunt').invoke('attr', 'tabindex').should('eq', '1');
    cy.get('button#tab1-sodales').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab1-sodales-tab').should('exist');
    cy.get('button#tab1-tincidunt').click();
    cy.get('button#tab1-sodales').invoke('attr', 'tabindex').should('eq', '1');
    cy.get('button#tab1-tincidunt').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab1-tincidunt-tab').should('exist');
  });
  it('#tabs2 should work correctly', () => {
    cy.get('button#tab2-tincidunt').click();
    cy.get('button#tab2-sodales').invoke('attr', 'tabindex').should('eq', '1');
    cy.get('button#tab2-tincidunt').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab2-tincidunt-tab').should('exist');
    cy.get('button#tab2-sodales').click();
    cy.get('button#tab2-tincidunt').invoke('attr', 'tabindex').should('eq', '1');
    cy.get('button#tab2-sodales').invoke('attr', 'tabindex').should('eq', '0');
    cy.get('#tab2-sodales-tab').should('exist');
  });
  it('left arrow should work correctly', () => {
    cy.get('button#tab1-tincidunt').focus().type('{leftarrow}');
    cy.get('#tab1-sodales-tab').should('exist');
    cy.get('button#tab1-sodales').focus().type('{leftarrow}');
    cy.get('#tab1-tincidunt-tab').should('exist');
  });
  it('right arrow should work correctly', () => {
    cy.get('button#tab1-tincidunt').focus().type('{rightarrow}');
    cy.get('#tab1-sodales-tab').should('exist');
    cy.get('button#tab1-sodales').focus().type('{rightarrow}');
    cy.get('#tab1-tincidunt-tab').should('exist');
  });
  it('tab key should work correctly', () => {
    cy.get('button#tab1-tincidunt').focus().tab();
    cy.get('#tab1-tincidunt-tab').focused();
  });
});
