import { processosAPI } from "../APIReceitas.js"
const listas = document.querySelectorAll('[data-lista-card]');


listas.forEach(lista => lista.addEventListener('click', function (event) {
    const link = event.target
  criarLinkParaReceita(link)
}));

async function criarLinkParaReceita (link) {
        if (link.tagName == 'A'){
            const idDaReceita = link.id;
        const receita = await processosAPI.buscaReceita(idDaReceita);
        const receitaASerRenderizada = JSON.stringify(receita)
         sessionStorage.setItem("receitaRenderizada", receitaASerRenderizada);
         window.location.href="../pagina-receita.html";
        return 
        
        } else {return}
        
    }

    export const criaLink = {criarLinkParaReceita}




