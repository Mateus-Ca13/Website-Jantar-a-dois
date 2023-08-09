const botoesCategorias = document.querySelectorAll('[data-botao-categoria]');
const barraPesquisa = document.querySelector('[data-barra-pesquisa]')
const botaoEnviarPesquisa = document.querySelector('[data-pesquisa-enviar]')

//Atribuição de função aos botoes de categoria
botoesCategorias.forEach(botaoCategoria => {

    botaoCategoria.addEventListener('click', function () {

        buscaCategoriaBotao(botaoCategoria)
    })
})

//Atribuição de função a barra de pesquisa
botaoEnviarPesquisa.addEventListener('click', function () {
    buscaBarraDePesquisa(barraPesquisa.value);
})

barraPesquisa.addEventListener('keypress', function (event) {
    if(event.key == "Enter") buscaBarraDePesquisa(barraPesquisa.value);
})


function buscaBarraDePesquisa (termoDeBusca) {
    sessionStorage.setItem('termoDeBusca', termoDeBusca);
    window.location.href = '../buscar-receitas.html'
}

function buscaCategoriaBotao (botao) {
    const categoria = botao.id;
    sessionStorage.setItem('termoDeBusca', categoria);
    window.location.href = '../buscar-receitas.html'
}