//procure e selecione o elemento com a classe card-destino
// e guarde em uma variavel chamada primeiroCard
let primeiroCard = document.querySelector('.card-destino');

// procure e selecione o paragrafo com a curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");


// procure e selecione o paragrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade")

/*monitore o clique no botao de curiosidade e, quando acontecer 
o clique, verifique se a curiosidade esta oculta.
se estiver, faca ficar visivel, mude o aria-expanded para true 
e troque o texto do botao para "Ocultar curiosidade". */
botaoCuriosidade.addEventListener('click', function(){
    
    if(curiosidade.hidden){
        // faca-o aparecer 
        curiosidade.hidden = false;

        
        // mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true");

        // troque o texto do botao para ocultar curiosidade
        botaoCuriosidade.textContent = "Ocultar curiosidade";

    } else{
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded", "false");
        botaoCuriosidade.textContent = "ver curiosidade";
    }

});







