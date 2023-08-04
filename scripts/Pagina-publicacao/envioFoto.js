
// Aba de importação de foto

const botaoFoto = document.querySelector('[data-botao-foto]')
const inputFoto = document.querySelector('[data-input-foto]')
const moldeFoto = document.querySelector('[data-foto-enviada]')
const botaoExcluirFoto = document.querySelector('[data-retirar-foto]')

botaoExcluirFoto.addEventListener('click', function () {moldeFoto.src = "./assets/fundo-logo.png"})

botaoFoto.addEventListener('click', function () {inputFoto.focus()})

inputFoto.addEventListener('change', function () {

   const foto = inputFoto.files[0];
   const leitorArquivo = new FileReader();

   leitorArquivo.onload = function (e) {
      const imagem = new Image();

      imagem.height = 20
      imagem.src = e.target.result;
      moldeFoto.src = imagem.src;
      
    
    
   }
   leitorArquivo.readAsDataURL(foto)
   moldeFoto.innerHTML = foto;

})

