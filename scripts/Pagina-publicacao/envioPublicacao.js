import { processosAPI } from "../APIReceitas.js"

const envioFoto = document.querySelector('[data-foto-enviada]')
const envioNome = document.querySelector('[data-nome-receita]')
const envioDescricao = document.querySelector('[data-descricao]')
const envioCategorias = document.querySelector('[data-lista-categorias]')
const envioIngredientes = document.querySelector('[data-lista-ingredientes]')
const envioPessoasServidas = document.querySelector('[data-pessoas-servidas]')
const envioEtapas = document.querySelector('[data-lista-etapas]')
const envioTempoMin = document.querySelector('[data-input-min]')
const envioTempoHora = document.querySelector('[data-input-hora]')
const botaoSubmit = document.querySelector('[data-enviar-receita]');


botaoSubmit.addEventListener('click', function (evento) {
    evento.preventDefault();

    try {
    const foto = capturaFoto ();
    const nome = validarInputTexto(envioNome.value.length < 5, !isNaN(envioNome.value), envioNome.value, "O nome da receita")
    const descricao = validarInputTexto(envioDescricao.value.length < 30, !isNaN(envioDescricao.value), envioDescricao.value, "A descrição da receita");
    const categorias = listarInputs (envioCategorias);
    const ingredientes = listarInputs (envioIngredientes);
    const etapas = listarInputs (envioEtapas);
    const pessoasServidas = validarInputTexto (envioPessoasServidas.value == "0", false, envioPessoasServidas.value, "A quantidade de pessoas servidas");
    const tempo = validarInputTexto (envioTempoHora.value < 0 || envioTempoHora.value > 12, envioTempoHora.value.length == 0, envioTempoHora.value, "A quantidade de horas") + "h" +
     validarInputTexto(envioTempoMin.value < 0 || envioTempoMin.value > 59, envioTempoMin.value.length == 0, envioTempoMin.value, "A quantidade de minutos") + "min";

    postarReceita(foto, nome, descricao, categorias, ingredientes, pessoasServidas, etapas, tempo);
        window.location.href = "../receita-enviada.html";

    } catch (erro) {avisoErro(erro.message)}
});

'http://127.0.0.1:5500/assets/fundo-logo.png'

// funções de captação de conteúdo -----------------------------

function capturaFoto () {
    if (envioFoto.src == `http://${window.location.hostname}:${window.location.port}/assets/fundo-logo.png`) 
         {enviarErro("A foto")} 
    else {return envioFoto.src}
}

function listarInputs (local) {
    const valoresInputs = [];
    const inputselecionados = local.querySelectorAll('input');

    // Essa primeira função analisa se os inputs listados são válidos
    inputselecionados.forEach(input => 
        validarInputTexto (input.value.length == 0, !isNaN(input.value), valoresInputs.push(input.value), "Algum item das listagens")
        )

    // Aqui é avaliado se pelo menos algum input foi listado
    if(inputselecionados.length == 0) {return enviarErro("Alguma lista da receita")}
    else {return valoresInputs.join('/#/')}
    
}

function validarInputTexto (condicao1, condicao2, resultado, nomeDoErro) {
    if (condicao1) {return enviarErro(nomeDoErro)}
    if (condicao2) {return enviarErro(nomeDoErro)}
    else {return resultado}
}


// Função de retorno de erro e upload de receita -------------------------

function enviarErro(nomeDoErro) {
    throw new Error(`${nomeDoErro} está com problemas! Tente revisar...`);}

function avisoErro(mensagem) {
    const avisoErro = document.getElementById('avisoErro')
    const comentario = avisoErro.querySelector('[data-texto-aviso]');
    comentario.innerHTML = mensagem;
    const avisoAtivado = bootstrap.Toast.getOrCreateInstance(avisoErro)
    avisoAtivado.show()


}


async function postarReceita (foto, nome, descricao, categorias, ingredientes, pessoasServidas, etapas, tempo) {
    await processosAPI.criarReceita(foto, nome, descricao, categorias, ingredientes, pessoasServidas, etapas, tempo)
}