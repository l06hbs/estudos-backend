# Dia 4

## Conflido de merge
- Um conflito de merge acontece quando duas versões alteram a mesma linha do mesmo arquivo e o git não sabe qual manter.
- O git escreve marcações de arquivo:
- '<<<<<<<<<<<' começa a versão do branch atual.
- '===========' separa as duas versões
- '>>>>>>>>>>>' termina a versão do branch que está sendo juntado
- Como resolver:
1. Abrir o arquivo e escolher o que fica (current, incoming ou both)
2. Apagar as marcações
3. git add e commit
Para desistir do merge = git.merge --abort

## O que aprendi com o erro do push rejeitado
- O erro "non fast foward" significa que o github tem commits que meu computador não tem.
- Causa do meu caso: usei o git commit --amend depos de já ter dado push e isso criou um histórico diferente do remoto.
Solução: git pull, concluir o merge e git push de novo.
Regra amend só antes do push. Depois do push fazer outro commit.
Não usar git push --force para resolver, porque ele sobreescreve o que está no github

## Merge pendente e editor
- Quando o git não consegue abrir o editor de mensagem , o merge fica pendente. concluo com git commit --no-edit
- Para configurar o VS code como editor: git config --global core.editor "code --wait.

## Pull request
- Um pull request é um pedido para juntar um branch na main pelo github, com espaço para revisar o código antes.
- Equipes usam o pull request para revisar o trabalho antes dele entrar na main.
- passo a passo:
1. criar branch (git switch -c nome da branch).
2. Fazer commits.
3. " git push -u origin nome da branch".
4. Abrir o pull request no github.
5. Revisar em files changed e fazer o merge.
6. Git switch main e git pull
obs: o -u no git push serve para ligar o branch local ao remoto, e só é necessário na primeira vez.
