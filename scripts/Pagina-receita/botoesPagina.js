const botaoRetornar = document.querySelector('[data-botao-retornar]')
const botaoFavoritar = document.querySelector('[data-botao-favoritar]')

botaoRetornar.addEventListener('click', () => {window.history.back();})

botaoFavoritar.addEventListener('click', function () {
    const receita = sessionStorage.getItem("receitaRenderizada");
   localStorage.setItem("receitaFavoritada", receita);
    const receitaBuscada = localStorage.getItem("receitaFavoritada")
    console.log(JSON.parse(receitaBuscada))
    

   
})


    
 