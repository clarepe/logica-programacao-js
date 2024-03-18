let nota1 = 5;
let nota2 = 9;
let nota3 = 4; 
const resultado = (nota1+nota2+nota3) /3

if(resultado=>7){
    console.log("Aluno foi aprovado, seu media final foi,",resultado,"Parabens!!!",)
}
else if(resultado<6){
    console.log("Aluno está de recuperação, seu media final foi,",resultado,"Volte aos estudos!",)
}
else{console.log("Aluno está retido, seu media final foi,",resultado,"Até o ano que vem!!",)
}