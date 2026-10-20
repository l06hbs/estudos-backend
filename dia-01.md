# Dia 1

- git add e sua utilidade:
// o git add coloca mudanças na staging area(area de preparamento), a lista do que vai entrar no próximo commit. Funciona para arquivos novos, alterados e apagados.
exemplos:
git add arquivo = prepara só o aqrquivo selecionado.
git add pasta/ = prepara tudo que mudou dentro da pasta.
git add *.md = prepara todos os .md da pasta atual.
//

- git commit e suas utilidades:
// o git commit grava no histórico do repositório local um retrato(snapshot) de tudo o que está na staging area(area de preparo). Cada commit recebe:
Um hash, um identificador único (ex:c51a283).
Uma mensagem que descreve a mudança
O autor e a data do commit
Uma referência ao commit anterior, formando a linha do tempo do projeto.
Ele salva o que passou pelo git add, e não envia ao repositório do github.
Exemplos: 
git commit -m cria o commit com a mensagem na própria linha.
git commit abre um editor de texto para você escrever a mensagem.
git commit --amend -am "é para corrigir um titulo errado" pula o git add e só funciona se o git já rastreia o arquivo. serve para correção apenas.
Mensagem com titúlo e descrição = git commit -m "feat: adiciona rota de login" -m "Valida e-mail e senha e retorna um token."
//

- git push e suas utilidades:
// o git push envia os commits do seu repositório local para o repositório remoto do github. até o push, seus commits existem somente no meu computador. ele envia apenas commits.
git push origin main
origin é o apelido do repositório remoto.
main é o branch que você está enviando.
//

- echo escreve texto, `>` sobrescreve e `>>` acrescenta
//

- git status e suas utilidades:
// O git status mostra a situação atual do seu repositório: em qual branch você está, quais arquivos mudaram, o que está pronto para o commit e o que o Git ainda não conhece. Ele não altera nada, então pode ser usado à vontade. É o comando que mais se roda no dia a dia, antes de cada add, commit e push.