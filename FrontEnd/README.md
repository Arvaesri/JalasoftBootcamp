# Solução Exercicio 14:

Ao reliazar pesquisas sobre o problema e como a configuração "transform-remove-strict-mode" em .babelrc não funcionou, algumas possiveis soluções surgiram, como:
"@babel/plugin-transform-modules-commonjs" e "@babel/plugin-transform-strict-mode" passando "strictMode: false" como opção. 

Como essa abordagem não funcionou assumi que o problema poderia ser relacionado aos "modules" do babel, uma das outras possiveis soluções que encontrei seria adicionar ao arquivo ".babelrc" "["es2015", { "modules": false }]" para remover as modules transformations, desta forma ele deveria desabilitar os modules e o "strict-mode" enquanto mantem todas as outras "transformations" habilitadas.

Como estas ultimas opções (e varias outras) não funcionaram, decidi incluir ao arquivo .babelrc "ignore": ["./src/pokemon.js"] onde nesse caso pokemon.js seria um arquivo , contendo as informações sobre os pokemons, que não seria transformado e por consequencia não teria o "user-strict", considerei utilizar no index.js mas dessa forma o codigo não seria traduzido para Javascript2015 e daria erro. essa solução também não funcionou.

Considerei remover "user-strict" apos a build do babel, mas como foi discudo durante as aula assumi que essa não seria uma solução valida.

A unica solução que encontrei para esse problema foi definir o "window.pokemons = pokemons", dessa forma as informações ficariam visiveis globalmente no navegador. (Porem essa solução não remove o "user-strict").
