document.querySelector('#trocaTema').addEventListener('click',function trocaTema(){

    if(document.documentElement.getAttribute((data-tema)==='temaPrincipal')){
        document.documentElement.setAttribute((data-tema),'temaSecundario');
    }
    else{
        document.documentElement.setAttribute((data-tema),'temaPrincipal');
    }

})