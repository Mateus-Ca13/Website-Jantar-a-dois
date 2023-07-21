
async function requisicaoAPI() {

    const APIReceitas = await fetch("http://localhost:3000/videos")
    const receitasConvertidas = await APIReceitas.json();
    
    return receitasConvertidas;

}

export const processosAPI = {
    requisicaoAPI
}