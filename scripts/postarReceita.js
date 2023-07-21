
// Aba de importação de foto

const botaoFoto = document.querySelector('[data-botao-foto]')
const inputFoto = document.querySelector('[data-input-foto]')
const moldeFoto = document.querySelector('[data-foto-enviada]')
const botaoExcluirFoto = document.querySelector('[data-retirar-foto]')

botaoExcluirFoto.addEventListener('click', function () {moldeFoto.src = "./assets/receitas-img/bife-img.png"})

botaoFoto.addEventListener('click', function () {inputFoto.focus()})

inputFoto.addEventListener('change', function () {

   const foto = inputFoto.files[0];
   const leitorArquivo = new FileReader();

   leitorArquivo.onload = function (e) {
    moldeFoto.src = e.target.result;
   }
   leitorArquivo.readAsDataURL(foto)
   moldeFoto.innerHTML = foto;

})

//Aba de importcação de titulo, descrição 