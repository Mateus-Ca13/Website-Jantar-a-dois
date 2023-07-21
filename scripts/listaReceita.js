import { processosAPI } from "./APIReceitas.js";
var listaNovidades = document.querySelector("[data-novidades]");
var listaDestaques = document.querySelector("[data-destaques]")


async function listaCardNovidades() {
    try {
        const listaDeReceitas = await processosAPI.requisicaoAPI();

        //Com .reverse seram indicados os ultimos objetos/receitas postados.
        const listaDeReceitasNovas = listaDeReceitas.reverse().slice(0, 6);

        listaDeReceitasNovas.forEach(receita => listaNovidades.appendChild(criaCard(receita.foto, receita.titulo, receita.favoritos)));
    } catch {
    
        listaNovidades.innerHTML = `<h2 class="text-center fs-5">Não foi possível carregar a lista de receitas<i class="ms-1 bi bi-exclamation-octagon"></i></h2>`
    }
}
listaCardNovidades();

async function listaCardDestaques () {
    try {
        const listaDeReceitas = await processosAPI.requisicaoAPI();

        //Com sort faz se um ranqueamento a partir da quantidade de favoritos de uma receita.
        const listaDeReceitasDestaque = listaDeReceitas.sort((a, b) => b.favoritos - a.favoritos).slice(0, 6);

        listaDeReceitasDestaque.forEach(receita => listaDestaques.appendChild(criaCard(receita.foto, receita.titulo, receita.favoritos)));
    } catch {
        listaDestaques.innerHTML = `<h2 class="text-center fs-5">Não foi possível carregar a lista de receitas<i class="ms-1 bi bi-exclamation-octagon"></i></h2>`
    }
}
listaCardDestaques()

// Função Geral de gerar Cards

function criaCard(imagem, titulo, favoritadas) {
    
    const card = document.createElement('div');
    card.classList.add('col-6','col-md-4','col-xl-2','p-2')
    card.innerHTML = `
    <div class="card fundo-creme shadow">
    <img src="${imagem}" class="card-img-top img-card" alt="foto da receita de ${titulo}">
        <div class="card-body">
            <h5 class="card-title fs-5 tamanho-card">${titulo}</h5>
            <div class="d-flex justify-content-center">
                <a href="#" class="btn container-fluid btn-receita">Ver</a>
                <button class="d-flex px-4 gap-1 justify-content-center w-25 btn ms-1 container-fluid btn-like">${favoritadas}<i class="bi bi-heart-fill"></i></button>
            </div>
        </div>
    </div>
    `
    return card;
}
