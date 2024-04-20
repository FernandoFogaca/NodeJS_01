

const { somaDoisNumeros } = require('./calculadora.js')

test("Deve somar dois números corretamente enviando", function() {


// Given - Dado que eu tenho tal cenário

 const numeroUm = 2;
 const numeroDois = 3;


// When - Quando eu executar tal ação
    
     const resultado = somaDoisNumeros(numeroUm, numeroDois);


// Then - Então eu espero que aconteça tal coisa

expect(resultado).toBe(5);








});
