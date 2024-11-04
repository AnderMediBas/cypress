describe('Pruebas en New Tab', () => {
    

    it.only('Verificar que el botón abra una nueva pestaña', () => {
        cy.visit('https://qaplayground.dev/apps/new-tab/');
        cy.get('#open') // Selecciona el botón
          .should('be.visible') // Asegúrate de que sea visible
          .invoke('removeAttr', 'target') // Elimina el atributo 'target' para evitar abrir en nueva pestaña
          .click(); // Haz clic en el botón

        // Verificar que la URL de la nueva pestaña es la correcta
        cy.url().should('eq', 'https://qaplayground.dev/apps/new-tab/new-page');        // Verifica que la URL sea la esperada
    });
    it('VERIFICAR QUE EL BOTON ABRE EL POPUP', () => {
        cy.visit('https://qaplayground.dev/apps/popup/');
        cy.get('#login').click();
        
    });
});
