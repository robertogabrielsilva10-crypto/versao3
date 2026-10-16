// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
 
/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos) e o paragrafo curiosidade */
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades";
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidades";
        }
    }); // fechamento do código do botaoCuriosidade
 
    botaoFavorito.addEventListener("click", function(){
        // Aplicar/Remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');
 
        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);
 
        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favorito";
        }
    }); // fechamento do botao favorito
}); // fechamento do forEach
 
 
/* V2: programação para o recurso de filtragem de destinos */
 
// Procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");

// Percorrer/acessar cada botão dentro do botõesFiltro
botoesFiltro.forEach(function(botaoFiltro){
   
    botaoFiltro.addEventListener("click", function(){
        //...acessamos e guardamos o filtro escolhido
        const filtro = botaoFiltro.dataset.filtro;
        
        cards.forEach(function(card){

            const categoria = card.dataset.categoria

            // mostrar todos os card OU apenas os cards da categoria filtrada
            if(filtro === "todos" || categoria === filtro){

                card.hidden = false;
            } else {

                card.hidden = true;
            }

        }); 

        botoesFiltro.forEach(function(botaoFiltro){

            if(botaoFiltro.dataset.filtro === filtro){

                botaoFiltro.classList.add("filtro-ativo");
                botaoFiltro.setAttribute("aria-pressed", "true");

            } else {

                botaoFiltro.classList.remove("filtro-ativo");

                botaoFiltro.setAttribute("aria-pressed", "false");
            }

        })


    }); // fechamento event listener

}); // fechamento forEach


/* Versão 3: script para o menu responsivo */

// Selecionando os elementos que serão manipulados
const botaoMenu = document.querySelector(".botao-menu");

// Navegação Principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal");

// Detectando o acinamento do botão
botaoMenu.addEventListener("click", function(){
    // Ao clicar no botaoMenu, o js deve aplicar ou remover a classe "menu aberto"
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");

    // Atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto);

    /* EXERCÍCIO! */

    /* se o menu estiver aberto, mostre no botão ✖ Fechar */
    /* se o menu estiver fechado, mostre no botão ☰ Menu */

    if(menuAberto){
            botaoMenu.textContent = "✖ Fechar";
        } else {
            botaoMenu.textContent = "☰ Menu";
        }
}); 