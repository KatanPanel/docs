---
id: introduction
title: Introdução
slug: /
---

Katan é um gerenciador de servidores de jogos de código aberto, moderno, rápido, seguro e extremamente fácil de usar.

## Primeiros passos
A documentação do Katan não é somente para o Katan em sí, e sim para todos os projetos relacionados a ele,
o que quer dizer, que no seu menuzinho terá primeiro os nomes das aplicações e depois as suas devidas documentações.

## Jogos suportados
Essa secção é difícil de escrever pelo seguinte motivo:
você aí, usuário final, que está há 200 anos procurando um gerenciador decente pros seus servidores,
**pode adicionar seus proprios jogos** no Katan.

Sim, isso mesmo que você tá pensando, mesmo se nós da equipe do Katan não
oferecemos suporte ao jogo que você quer que o Katan rode, você mesmo pode faze-lo rodar magicamente.

#### Compatibilidade extendida
Ainda assim, temos jogos que tratamos especialmente em algumas de nossas aplicações, e eles tem algumas coisinhas
a mais como:
* Minecraft

## Terminologia
Antes de começar a usar o Katan precisamos entender como ele é construído.

O Katan possuí várias aplicações distintas contendo módulos que tem sinergia entre sí.
A aplicação principal é o *Backend*, todos os outros necessitam dele pra realizar suas devidas funções.

As outras aplicações são apenas **complementos**, se você tem o *Backend* instalado já é o suficiente.

**Logo, você pode instalar:**
* [Backend](#backend)
  * [Web-servidor](#web-servidor)
  * [Interface de linha de comandos (CLI)](#cli)
  * [Jogos](#jogos)
* [Interface do usuário (UI)](#ui)
* [Orquestrador](#orquestrador)

**E para os desenvolvedores:**
* [Docker Kotlin](https://github.com/KatanPanel/docker-kotlin)
  
### Backend
Esse é o nosso servidor, é nele onde todas as informações estão disponíveis, o *core*.
Podemos chama-lo de *Backend*, é o responsável por tratar
dos containers, contas, cargos e outras coisas como plug-ins.

Ele é o ponto de encontro de todas as outras aplicações.

#### Web-servidor
Enquanto o *Backend* cuida de tudo, o *web-servidor* pega essas informações e distribui pra quem pedir,
é um servidor HTTP e WebSocket que transmite os dados do *Backend* para as outras aplicações.

Você pode optar por não liga-lo junto do *Backend* para poupar recursos.

#### Interface de linha de comandos (CLI) {#cli}
O CLI é um módulo do *Backend* ativável que faz com que seja possível interagir com o *Backend* através
de uma interface de linha de comandos, usando o comando `katan`.

Pode criar servidores, visualizar estatísticas, criar contas e fazer várias outras coisas.
Se está acostumado com CLI pode usá-lo assim não precisará instalar a *UI*.

#### Jogos
A implementação de jogos do Katan é feita por uma aplicação diferente chamada
[`katan-games`](https://github.com/KatanPanel/katan-games), mas não se preocupe, isso só é importante pra
desenvolvedores.

### Interface do usuário (UI) {#ui}
É aquele site que viu lá na Página Inicial, o cliente, onde tudo é bonito e tudo funciona com o apertar de um botão.
Integra-se diretamente com o *Backend* e do *Web-servidor*, precisamos de ambos para que a *UI* consiga informações.

### Orquestrador
*Maestro* para os mais íntimos, é o orquestrador do Katan, com ele vai ser capaz de **escalonar** os seus servidores,
distribui-los em diferentes localizações, mas ainda fazer com que eles se mantenham sincronizados.

É graças a ele que você não vai ligar 100 servidores numa mesma máquina, pelomenos espero que não.

Se você ta procurando **soluções de nível empresarial**, esse é o caro que deve ficar de olho.

## Iniciativa de código aberto
Katan é completamente *open-source* e gratuito para instalação e uso.
Todas as nossas aplicações também são de código aberto e planejamos manter isso.

Agradecemos imensamente aqueles que já estão e os que estão dispostos a contribuir para
o crescimento e melhoria do Katan, todos podem contribuir.

Se deseja tornar-se um contribuidor, veja [outros de nossos projetos](https://github.com/KatanPanel).

## Time de desenvolvedores

| Nome         | Email para contato    | Função              |
| ------------ | --------------------- | ------------------- |
| Natan Vieira | `itroken99@gmail.com` | Mantenedor do Projeto |

## Apoiadores
Katan é um projeto imenso e que está em desenvolvimento a mais de dois anos e que cresce a cada dia.

É muito difícil para nós do time de desenvolvedores do Katan mantermos todos os dias a qualidade na base do código
e o suporte para novos usuários que querem utilizar o Katan.

Apoie-nos nisso, você pode:
* Fazer uma doação
* Contribuir para os projetos
* Ajudar a comunidade à sua maneira

Fazendo isso você estará garantindo que o Katan permaneça vivo a cada dia.

## Algo a mais?
Chegamos ao fim da introdução, mas se você tem sugestões de como melhorar o Katan, por favor,
[crie uma issue](https://github.com/KatanPanel/Katan/issues) para nós.

Fique por dentro do mundinho do Katan, junte-se à nossa [comunidade no Discord](https://discord.gg/ey8dwsv).