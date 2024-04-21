


// Função de soma de dois números


function somaDoisNumeros( numeroUm, numeroDois ) {
  return numeroUm + numeroDois;
}

// função de subtração de dois números
  function subtrairDoisNumeros( numeroUm, numeroDois ) { 
    
    const resultado = numeroUm - numeroDois;
    return numeroUm - numeroDois;


    
  } 
  // função de multiplicação de dois números
  function multiplicarDoisNumeros( numeroUm, numeroDois ) {
    return numeroUm * numeroDois;

  }

  // função de divisão de dois números
function dividirDoisNumeros(numeroUm, numeroDois){
    if(numeroDois == 0) 
        return -101

    return numeroUm / numeroDois;

  }



      
module.exports = { somaDoisNumeros , subtrairDoisNumeros , multiplicarDoisNumeros, dividirDoisNumeros};
     
