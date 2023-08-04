import { processosAPI } from "../APIReceitas.js"
const listas = document.querySelectorAll('[data-lista-card]');
console.log(listas)


listas.forEach(lista => lista.addEventListener('click', function (event) {
    const link = event.target
  criarLinkParaReceita(link)
}));

async function criarLinkParaReceita (link) {
        if (link.tagName == 'A'){
            const idDaReceita = link.id;
            console.log(idDaReceita)
        const receita = await processosAPI.buscaReceita(idDaReceita);
        const receitaASerRenderizada = JSON.stringify(receita)
         sessionStorage.setItem("receitaRenderizada", receitaASerRenderizada);
         console.log(sessionStorage);
         window.location.href="../pagina-receita.html";
        return 
        
        } else {return}
        
    }




