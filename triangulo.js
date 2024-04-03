

function calcula_lados(ladoA,ladoB,ladoC){

    let resultado,erro;

    if(ladoA===ladoB && ladoB===ladoC && ladoA===ladoC){
       
           resultado= `${ladoA,ladoB,ladoC}Equilátero: todos os lados tem o mesmo tamanho`;
        }
     
    
    else if(ladoA===ladoB && ladoC!=ladoA+ladoB || ladoB===ladoC && ladoA!=ladoB+ladoC || ladoC===ladoA && ladoB!=ladoC+ladoA)
        {          
             resultado = `${ladoA,ladoB,ladoC} Isósceles: dois lados tem o mesmo tamanho, mas o terceiro é diferente`;
        }         
    
    else{        
            resultado =`${ladoA,ladoB,ladoC} Escaleno: os três lados do triângulo tem tamanhos diferentes`;
        }

       erro =' ERRO:A forma não é um triangulo!';
       
       return resultado ?? erro;

       // ?? ele retorna o proximo valor valido no caso a variavel "erro"
}