import { processosAPI } from "../APIReceitas.js";


async function listarCategorias() {
    try {
        const listaDeReceitas = await processosAPI.requisicaoAPI();
        const categorias = [];
        var categoriasExistentes = [];
        /* Aqui todas as categorias que um objeto(receita) têm são organizadas/separadas 
        por "," e são adicionadas temporariamente no array "categorias" */

        listaDeReceitas.forEach(receita => {categorias.push(receita.categoria.split(", "))});
        
        
        /* Cada elemento dos arrays-filhos que estão no array "categorias" é adicionado em "categoriasExistentes" */
        categorias.forEach(ArrayDeCategorias => {ArrayDeCategorias.forEach(categoria => {
            
            //Aqui são validados quais categorias já estão listadas, evitando repetições
            if(categoriasExistentes.includes(categoria)) {
                return
            } else {
                categoriasExistentes.push(categoria);
            }}
            )});

            return categoriasExistentes
            } catch {
        alert('Nao foi possível incluir categorias! Tente dar um mock da API através do json-server!')
    }
    }


    async  function gerarCardsDeCategorias () {

        const abaCategorias = document.querySelector('[data-categorias]')
        const listaCategorias = await listarCategorias()
        listaCategorias.slice(11, 23).forEach(categoria => {
            abaCategorias.innerHTML += `
            <div class="col-4 col-md-3 col-lg-2 p-0">
            <button class="btn border btn-receita container-fluid">${categoria}</button>
            </div>
            `
        })
       
        return 
    }

    gerarCardsDeCategorias ()