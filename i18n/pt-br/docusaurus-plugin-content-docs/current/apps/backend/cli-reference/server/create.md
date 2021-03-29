---
id: create
title: katan server create
---

## Descrição
Cria um servidor utilizando as opções especificadas.

## Como usar
```console
katan server create [OPÇÕES] NOME DO SERVIDOR [COMANDO] [ARG...]
katan servidor criar [OPÇÕES] NOME DO SERVIDOR [COMANDO] [ARG...]
```

## Options
| Name     | Default value                                      | Description                                                         |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| -g       |                                                    | O jogo que o servidor almeja (descrito como `[nome do jogo](:versão)]`, exemplo: `minecraft` ou `minecraft:paper-1.8.8`).   |
| -h       | Endereço padrão da máquina.                              | Endereço de conexão remota do servidor.                              |
| -p       |                                                    | Porta de conexão remota do servidor.                                      |
| -i       | Imagem padrão do jogo.                              | A imagem do Docker que será utilizada para construir o servidor.                 |
| -m       | `1024`                                             | Quantidade de memória a ser alocada para o servidor (em MB).                 |
| -w       |                                                    | Lista de composições a serem aplicadas ao servidor (separadas por vírgula). |

