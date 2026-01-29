// Pegando os elementos da tela
const inputBusca = document.getElementById('busca');
const botaoBuscar = document.getElementById('btnBuscar');
const listaResultado = document.getElementById('resultado');

// Comando para o botão for clicado
botaoBuscar.addEventListener('click', () => {

  // Pegando o texto digitado
  const termo = inputBusca.value;

  // Montando a URL da API
  const url =`https://itunes.apple.com/search?term=${termo}&media=music`;

  // Fazendo a requisição para a API
  fetch(url)
    .then(response => response.json())
    .then(dados => {

      // Limpando resultados antigos
      listaResultado.innerHTML = '';

      // Para cada música encontrada
      dados.results.forEach(item => {

        // Criando um item na lista
        const li = document.createElement('li');

        li.textContent = `${item.artistName} - ${item.trackName}`;

        // Colocando na tela
        listaResultado.appendChild(li);
      });

    });
});