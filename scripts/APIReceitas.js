
async function requisicaoAPI() {

    const APIReceitas = await fetch("http://localhost:3000/receitas")
    const receitasConvertidas = await APIReceitas.json();
    
    return receitasConvertidas;

}

async function criarReceita(foto, nome, descricao, categorias, ingredientes, pessoasServidas, etapas, tempo) {
    var APIReceitas = await fetch("http://localhost:3000/receitas", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
        foto: foto,
        titulo: nome,
        descricao: descricao,
        categoria: categorias,
        tempoPreparo: tempo,
        pessoasServidas: pessoasServidas,
        ingredientes: ingredientes,
        modoPreparo: etapas,
        favoritos: 0

    })
    })
    if (!APIReceitas.ok) {
        throw new Error('Não foi possível enviar a receita')
        
    }
    const receitasConvertidas = await APIReceitas.json();
    return receitasConvertidas;
}

async function buscaReceita (termoDeBusca) {
    const APIReceitas = await fetch(`http://localhost:3000/receitas?q=${termoDeBusca}`);
    const receitasConvertidas = APIReceitas.json();

    return receitasConvertidas;
}

export const processosAPI = {
    requisicaoAPI,
    criarReceita,
    buscaReceita
}