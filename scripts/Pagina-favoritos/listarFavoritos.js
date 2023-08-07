import { criaLink } from "../Pagina-home/buscarIDReceita.js";
const secaoFavoritadas = document.querySelector('[data-lista-favoritas]');

function montarListaDeReceitas () {
    const lista = captarListaFavoritadas()
    lista.forEach(receita => {secaoFavoritadas.appendChild(criaCard(receita.foto, receita.titulo, receita.id));});

}

function captarListaFavoritadas() {
    let listaProvisoria = localStorage.getItem("receitasFavoritadas");
    let listaDeReceitasFavoritadas = JSON.parse(listaProvisoria);
    return listaDeReceitasFavoritadas;
}

montarListaDeReceitas ()


function criaCard(imagem, titulo, id) {
    
    const card = document.createElement('div');
    card.classList.add('col-6','col-md-4','col-xl-2','p-2')
    card.innerHTML = `
    <div class="card fundo-creme shadow">
    <img src="${imagem}" class="card-img-top img-card" alt="foto da receita de ${titulo}">
        <div class="card-body">
            <h5 class="card-title fs-5 tamanho-card">${titulo}</h5>
            <div class="d-flex justify-content-center">
                <a href="#" class="btn container-fluid btn-receita data-botao-receita" id="${id}">Ver receita</a>
            </div>
        </div>
    </div>
    `
    return card;
}

secaoFavoritadas.addEventListener('click', function (event) {
    const link = event.target
  criaLink.criarLinkParaReceita(link)})
