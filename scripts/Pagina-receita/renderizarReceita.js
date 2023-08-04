const fotoReceita = document.querySelector('[data-foto-receita]')
const nomeReceita = document.querySelector('[data-nome-receita');
const descricaoReceita = document.querySelector('[data-descricao-receita]');
const tempoReceita = document.querySelector('[data-tempo-receita]');
const pessoasServidasReceita = document.querySelector('[data-pessoas-receita]');
const categoriasReceita = document.querySelector('[data-categorias-receita]');
const listaIngredientesReceita = document.querySelector('[data-ingredientes-receita]');
const listaEtapasReceita = document.querySelector('[data-etapas-receita]');

 function buscarReceitaNoStorage () {
   const receita = sessionStorage.getItem("receitaRenderizada");
  const receitaRenderizada = JSON.parse(receita)[0];
  renderizarElementos(receitaRenderizada)
}

function renderizarElementos (receitaRenderizada) {

    renderizarFoto(receitaRenderizada.foto)
    renderizarComponenteSimples(nomeReceita, receitaRenderizada.titulo);
    renderizarComponenteSimples(descricaoReceita, receitaRenderizada.descricao);  
    renderizarComponenteSimples(tempoReceita, receitaRenderizada.tempoPreparo);  
    renderizarComponenteSimples(pessoasServidasReceita, receitaRenderizada.pessoasServidas); 
    renderizarCategoria (receitaRenderizada.categoria)
    renderizarLista (listaIngredientesReceita, receitaRenderizada.ingredientes)
    renderizarLista (listaEtapasReceita, receitaRenderizada.modoPreparo)
}


// Funções individuais ---------------------------------------------

buscarReceitaNoStorage ()

function renderizarComponenteSimples(local, info) {
    local.innerHTML = info
};

function renderizarFoto (imagem) {
    fotoReceita.src = imagem
}

function renderizarCategoria (categorias) {
    const categoiasConvertidas = categorias.split('/#/');
    categoiasConvertidas.forEach(categoria => {categoriasReceita.innerHTML += `<h6 class="fundo-bege px-3 py-2 rounded-2 mx-1">${categoria}</h6>` });
}

function renderizarLista (local, info) {
    const infoConvertidas = info.split('/#/');
    infoConvertidas.forEach(info => {local.innerHTML += 
        `
        <li class="item-lista-receita">
            <p class="fs-6 m-0">${info}</p>
        </li>
        `
    })
}

