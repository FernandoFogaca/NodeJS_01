// Teste unitário para a função somaDoisNumeros

const { somaDoisNumeros , subtrairDoisNumeros, multiplicarDoisNumeros , dividirDoisNumeros     } = require('./calculadora.js')

test("Deve somar dois números corretamente enviando", function() {
// Given - Dado que eu tenho tal cenário

 const numeroUm = 2;
 const numeroDois = 3;
// When - Quando eu executar tal ação
    
     const resultado = somaDoisNumeros(numeroUm, numeroDois);
// Then - Então eu espero que aconteça tal coisa
expect(resultado).toBe(5);

});

test("Deve subtrair dois números corretamente", function() {
     const numeroUm = 40;
     const numeroDois = 20;
     const resultado = subtrairDoisNumeros(numeroUm, numeroDois); // Corrigido para chamar subtrairDoisNumeros
     expect(resultado).toBe(20);
   });


test("Deve multiplicar dois números corretamente", function() {
     const numeroUm = 10;
     const numeroDois = 10;
     const resultado = multiplicarDoisNumeros(numeroUm, numeroDois);
     expect(resultado).toBe(100);
   });



/*Faça uma divisao que 
recebe dois numeros como parametro 
retorna o resultado da div desses dois numeros
Retorna o numero -101 caso o segundo numero seja 0 */

test("Deve dividir dois números corretamente e retornar -101 quando o segundo número for 0", function() {
     const numeroUm = 20;
     const numeroDois = 0;
     const resultado = dividirDoisNumeros(numeroUm, numeroDois);
     expect(resultado).toBe(-101);
 });
