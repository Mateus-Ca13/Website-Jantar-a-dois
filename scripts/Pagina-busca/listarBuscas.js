import { processosAPI } from "../APIReceitas.js";
import { criaLink } from "../Pagina-home/buscarIDReceita.js";

const listaDeBusca = document.querySelector('[data-lista-buscas]');
const tituloTermoPesquisa = document.querySelector('[data-titulo-pesquisa]');

async function captarTermoDeBusca () {
    const termoDeBusca = sessionStorage.getItem('termoDeBusca');
    const resultadoBusca = await processosAPI.buscaReceita(termoDeBusca);
    listarCardsDaBusca(resultadoBusca);
    definirTituloPesquisa(termoDeBusca);
}


captarTermoDeBusca ();

function listarCardsDaBusca (listaDeResultados) {
    listaDeResultados.forEach(receita => {
        listaDeBusca.appendChild(criaCardBusca(receita));
    });

    if(listaDeBusca.innerHTML == 0) listaDeBusca.innerHTML = "<h4 class='fonte-marrom text-center'>Não foi possível encontrar receitas com esse termo!</h4>"
}


// Define o tamanho maximo de caracteres visiveis da pesquisa
function definirTituloPesquisa(termoDeBusca) {
    if(termoDeBusca.length < 20) {tituloTermoPesquisa.innerHTML = `Resultados da busca: <h3 class="fonte-marrom d-inline">${termoDeBusca}<h3>`}
    else {tituloTermoPesquisa.innerHTML = `Resultados da busca: <h3 class="fonte-marrom d-inline">${termoDeBusca.slice(0, 20)}...<h3>`}
}

function criaCardBusca (receita) {

    const card = document.createElement('div')
    card.classList.add('fundo-creme', 'mb-4', 'p-2', 'rounded-3', 'd-flex', 'flex-column', 'flex-md-row', 'container');
    card.innerHTML = `
    
    <picture class="fundo-foto me-md-4 rounded-3 d-flex justify-content-center">
                    <img src="${receita.foto}" class="foto-exibida rounded-2 shadow img-card-busca rounded-3"
                        alt="...">
                </picture>
                <article class="card-body my-3">
                    <h5 class="card-title">${receita.titulo}</h5>
                    <p class="card-text">${receita.descricao}</p>
                    <div class="d-flex gap-md-4 gap-1 my-3">
                        <span class="fundo-bege d-flex gap-3 px-3 py-1 rounded-2">
                            <i class="bi bi-people-fill fs-6 mb-0"></i>
                            <p class="fs-6 mb-0">${receita.pessoasServidas}</p>
                        </span>
                        <span class="fundo-bege d-flex gap-3 px-3 py-1 rounded-2">
                            <i class="bi bi-alarm-fill fs-6 mb-0"></i>
                            <p class="fs-6 mb-0">${receita.tempoPreparo}</p>
                        </span>
                    </div>
                    <a id="${receita.id}" class="btn btn-receita col-10 col-md-3 mt-5">Ver receita</a>
                </article>
    `

    return card
}

listaDeBusca.addEventListener('click', function (event) {
    const link = event.target
  criaLink.criarLinkParaReceita(link)})