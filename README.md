# Website de receitas - Jantar a dois <img src="./assets/logojantar.png" style="width: 80px; margin: 0 10px">
 *Website dinâmico de receitas (Em desenvolvimento)* 
---
O Jantar a dois consiste num site de receitas para casais que é construído a partir dados consumidos por meio do uso de um mock de API com json-server. Para a manipulação desses dados, são usados métodos como get e post, os quais trazem uma maior interação do usuário como o resto do ecosistema, possibitando até mesmo publicações e sistema de likes.
São também usados métodos de array para um retorno controlado dessas listas de receitas que podem ser exploradas por todo o site.
Por fim, o uso do LocalStorage também está presente para a possibilidade de salvamento de alguns dados, que ficam guardados como "favoritados" para uma futura consulta.

*Tecnologias utilizadas no projeto* 
---
* HTML/CSS.
* JavaScript.
* Bootstrap.

*Recursos utilizados no projeto* 
---
* Mock de API com JSON Server.
* Métodos GET e POST com API fetch.
* Métodos de array.
* Session Storage e Local Storage.
* Validações de input com try e catch.
* Responsividade e estruturação com uso de Bootstrap.
  
*Como rodar o projeto* 
---

### Informações do projeto:
&#8594; Para rodar esse projeto é necessário ter o node.js instalado.  <br>
&#8594; A biblioteca do JSON Server está instalada no projeto para o mock da API.

Após a abertura do projeto, digite em seu terminal: <br>
<code>npx json-server --watch receitas.json</code> <br>

Após essa etapa, voce pode executar o arquivo <code>index.html</code>, ou caso use a extensão live-server, você pode rodar o projeto clicando em "Go live".
