before(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit("https://qaplayground.dev/apps/upload/");
});

it("AGREGAR ARCHIVO", () => {
  cy.get('.btn-green-outline')
    .selectFile(
      "C:/Users/ander/OneDrive/Documentos/DisplayFlex.docx")
    .wait(2000);
});
it.only('DESCARGAR ARCHIVO', () => {
    cy.visit('https://qaplayground.dev/apps/download/');
    cy.get('#file').click();
});
