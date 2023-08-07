const botaoRetornar = document.querySelector('[data-botao-retornar]')
const botaoFavoritar = document.querySelector('[data-botao-favoritar]')


botaoRetornar.addEventListener('click', () => {window.history.back();})

// Botão favoritar
botaoFavoritar.addEventListener('click', function () {
    const receitaString = sessionStorage.getItem("receitaRenderizada");
    const receita = JSON.parse(receitaString);
    
    // Aqui verifica-se se a lista de favoritados já foi criada.
    if (localStorage.getItem("receitasFavoritadas")){

        let listaProvisoria = localStorage.getItem("receitasFavoritadas");
        let listaDeReceitasFavoritadas = JSON.parse(listaProvisoria);
        verificarReceitaJaFavoritada(listaDeReceitasFavoritadas, receita[0]);
        
        
    } else {
       let  listaDeReceitas = [];
       listaDeReceitas.push(receita[0]);
       let listaReceitasString = JSON.stringify(listaDeReceitas);
    localStorage.setItem("receitasFavoritadas", listaReceitasString);
    console.log("esse item foi favoritado pela primeira vez!");
   
  
    
    }
})


// Função de verificação ----------------------------
function verificarReceitaJaFavoritada (listaDeReceitas, receitaASerAdicionada) {
     
    var receitaPresente;
    // Uma verificação é feita para ver se a receita ja está na lista, e ela é armazenada.
    if(listaDeReceitas.length > 0){
        listaDeReceitas.forEach(receita => {
            
            if(receita.id == receitaASerAdicionada.id) {
                receitaPresente = receita;
                }      
        });

        if(receitaPresente) {
           // Caso a receita já esteja presente, ela será desfavoritada;
           definirFavoritar ("Favoritar")
           let listaSemAReceita = listaDeReceitas.filter(item => item !== receitaPresente);
           let listaReceitasString = JSON.stringify(listaSemAReceita);
           localStorage.setItem("receitasFavoritadas", listaReceitasString);
           console.log("item excluido. resultado:", listaSemAReceita.forEach(a =>console.log(a.titulo)));
                     
        } else {
            // Caso ela não esteja presente, é favoritada.
            definirFavoritar ("Favoritada")
            listaDeReceitas.push(receitaASerAdicionada);
            let listaReceitasString = JSON.stringify(listaDeReceitas);
            localStorage.setItem("receitasFavoritadas", listaReceitasString);
            console.log("item adicionado. resultado:", listaDeReceitas.forEach(a =>console.log(a.titulo)));  
    
        }
 
    } else {
        // Aqui, caso não exista nada na lista, é favoritada.
        definirFavoritar ("Favoritada")
        listaDeReceitas.push(receitaASerAdicionada);
        let listaReceitasString = JSON.stringify(listaDeReceitas);
        localStorage.setItem("receitasFavoritadas", listaReceitasString);
        console.log("item adicionado. resultado:", listaDeReceitas.forEach(a =>console.log(a.titulo)));
        
    }  
    console.log( botaoFavoritar.querySelector('H6'));
}

// Definir valor do botao Favoritar -----------------------


function definirFavoritar (valor) {
    var valorBotao = botaoFavoritar.getElementsByTagName("h6")[0]
    valorBotao.innerHTML = valor
    if(valor == "Favoritada"){
    botaoFavoritar.classList.add('botao-favoritar-aplicado')
    botaoFavoritar.classList.remove('btn-like');
    avisoFavoritar("Receita Favoritada!", "Confira-a em sua aba de receitas favoritadas.")
}
    else {
        botaoFavoritar.classList.remove('botao-favoritar-aplicado');
        botaoFavoritar.classList.add('btn-like');
        avisoFavoritar("Receita Desfavoritada!", "Você removeu essa receita de sua lista.");
    }
}

function avisoFavoritar(mensagem1, mensagem2) {
    const avisoFavoritar = document.getElementById('avisoFavoritar');
    const titulo = avisoFavoritar.querySelector('[data-titulo-aviso]');
    const comentario = avisoFavoritar.querySelector('[data-texto-aviso]');
    titulo.innerHTML = mensagem1;
    comentario.innerHTML = mensagem2;
    const avisoAtivado = bootstrap.Toast.getOrCreateInstance(avisoFavoritar);
    avisoAtivado.show();


}
