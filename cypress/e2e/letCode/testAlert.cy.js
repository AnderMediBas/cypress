describe('TEST DE ALERTAR LETCODE', () => {
    
    before(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, {log: false});
        cy.visit('https://letcode.in/alert');
    });
    it('Debe de interactiar con SimpleAlert', () => {
        
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Hey! Welcome to LetCode');
            cy.log('La alerta fue mostrada con el mensaje: ' + text);
        });
        cy.get('#accept').click();

    });

    it('Debe de interactuar con Confirm Alert', () => {
        //aceptar alerta
        cy.on('alert:confirm',(text)=>{
            espect(text).to.equal('Are you happy with LetCode?');
            return true; //aceptar
        })
        
        cy.get('#confirm').click();
        
        //cancelar alert
        cy.on('alert:confirm',(text)=>{
            espect(text).to.equal('Are you happy with LetCode?');
            return false; //cancelar
        })

        cy.get('#confirm').click();

    });

    it.only('Debe de interactuar en el Prompt', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Anderson');
        });
        cy.get('#prompt').click();
        cy.get('#myName').should('contain','Your name is: Anderson');
    });
});