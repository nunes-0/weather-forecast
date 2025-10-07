

## Visão Geral do Projeto
Este é um projeto de site de previsão do tempo que utiliza a API OpenWeatherMap para buscar e exibir informações meteorológicas de cidades pesquisadas pelo usuário. O frontend é composto por HTML, CSS e JavaScript puro, sem frameworks.

## Estrutura Principal
- `index.html`: Estrutura da página, incluindo formulário de busca, área de exibição do clima e placeholders para dados dinâmicos.
- `script.js`: Lida com a lógica de busca, chamada à API, manipulação do DOM e exibição de mensagens de erro.
- `src/JavaScript/styles/style.css`: Estilos visuais, responsividade e animações.
- `assets/`: Imagens estáticas usadas como fallback ou ilustração.

## Fluxo de Dados
1. Usuário digita o nome da cidade e envia o formulário.
2. O JavaScript intercepta o submit, faz requisição à API OpenWeatherMap e atualiza o DOM com os dados recebidos.
3. Em caso de erro (cidade não encontrada, falha de rede), exibe mensagem amigável na tela.

## Padrões e Convenções
- O elemento `#weather` é ocultado por padrão e exibido apenas após uma busca bem-sucedida.
- Classes CSS como `.weather-box` são usadas para animações de entrada.
- Mensagens de erro são exibidas no elemento `#alert`.
- O código JavaScript utiliza `async/await` para requisições e manipulação de erros.
- O layout é responsivo, adaptando-se para telas menores via media queries.

## Integrações e Dependências
- API externa: [OpenWeatherMap](https://openweathermap.org/api) (chave de API hardcoded em `script.js`).
- Google Fonts e Material Symbols são importados via CDN no HTML e CSS.

## Exemplos de Padrões
- Para adicionar novo campo de informação meteorológica, inclua o elemento no HTML e atualize o preenchimento em `getWeather()` no `script.js`.
- Para alterar animações, edite ou adicione keyframes no CSS e aplique classes no JS conforme necessário.

## Observações Importantes
- Não há sistema de build, testes automatizados ou dependências de Node.js.
- O projeto é estático: basta abrir `index.html` em um navegador para rodar.
- A chave da API está exposta; para produção, recomenda-se ocultar via backend.

## Referências Rápidas
- Lógica principal: `script.js`
- Estilos e responsividade: `src/JavaScript/styles/style.css`
- Estrutura e IDs dos elementos: `index.html`

---

Se adicionar novos recursos, mantenha a simplicidade e siga os padrões de manipulação de DOM e exibição de mensagens já presentes.
