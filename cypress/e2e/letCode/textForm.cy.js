describe("TEST DE FORMULARIOS", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://letcode.in/forms");
  });

  it("Debe de ingresar los datos", () => {
    cy.get("#firstname").type("carlos");
    cy.get("#lasttname").type("prueba");
    cy.get('#email').clear().type("prueba@gmail.com");
    cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select').select('51');
    cy.get('#Phno').type("998371838");
    cy.get('#Addl1').type("address 1 ejemplo");
    cy.get('#Addl2').type("address 2 ejemplo");
    cy.get('#state').type("State ejemplo");
    cy.get('#postalcode').type("2628")
    cy.get(':nth-child(5) > :nth-child(2) > .field > .control > .select > select').select('Peru');
    cy.get("#Date").type("1982-12-19");
    cy.get("#male").check();
    cy.get('.checkbox > input').check();
    cy.get('.control > .button').click();
  })
});
