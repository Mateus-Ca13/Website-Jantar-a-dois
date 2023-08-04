

//Função de bloqueio de envio padrão dos inputs

const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('keypress', function (event) {
    if (event.key == "Enter"){
    event.preventDefault();
    }}))





//Função de adição de itens das listas

const botaoAdiconar = document.querySelectorAll('[data-botao-adicionar]');

botaoAdiconar.forEach(botao => botao.addEventListener('click', listarItem));

function listarItem() {
    const listaVigente = this.parentNode.nextElementSibling;
    const itemAtual = this.parentNode;

    let conteudoItem = itemAtual.querySelector('[data-input-item]');

    listaVigente.innerHTML += ` 
    <li class="list-group-item p-0 mb-1 border-0 border-none">
        <div class="input-group">
            <input type="text" class="form-control" value="${conteudoItem.value}">
            <span class="input-group-text fundo-bege"><i class="bi bi-x-lg fw-bold" data-apaga-item></i></span>
        </div>
    </li>`

    
     
    conteudoItem.value = "";
    conteudoItem.focus()
    
};


//Função de remoção de itens das listas

const listas = document.querySelectorAll('[data-lista]');

listas.forEach(lista => {
    lista.addEventListener('click', function (event){
        const botoesApagar = document.querySelectorAll('[data-apaga-item]')
        botoesApagar.forEach(botao => {
            if (botao == event.target){
                const itemAtual = event.target.parentNode.parentNode.parentNode;
            itemAtual.parentNode.removeChild(itemAtual);
            }
        })
    }
    )});
