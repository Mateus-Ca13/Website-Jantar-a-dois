# Website - Jantar a dois <img src="./assets/logojantar.png" style="width: 80px; margin: 0 10px">
 *Website dinâmico de receitas (Em desenvolvimento)* 
---
O Jantar a dois consiste num site de receitas para casais que é construído a partir dados consumidos por meio do uso de um mock de API com json-server. Para a manipulação desses dados, são usados métodos como get e post, os quais trazem a possibilidade de uma maior interação do usuário como o resto do ecosistema.
São também usados métodos de array para um retorno controlado dessas listas de receitas que podem ser exploradas por todo o site.
Por fim, o uso do LocalStorage também está presente para a possibilidade de salvamento de alguns dados, que ficam guardados como "favoritados" para uma futura consulta.

*Como rodo o projeto?* 
---
Para rodar esse projeto é necessário ter o node.js instalado. 

Após a abertura do projeto, digite em seu terminal: <br>
<code>npm init</code><br>

Para instalar o json-server, digite em seguida:<br>
<code>npm install json-server</code><br>

Por fim, digite:<br>
<code>npx json-server --watch receitas.json</code> <br>

Após essas etapas, caso use a extensão live-server, você pode rodar o projeto clicando em "Go live" para enfim vê-lo
