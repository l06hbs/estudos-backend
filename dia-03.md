# Dia 3
- git branch cria uma ramificação no seu branch main para que você possa trabalhar em paralelo ao seu projeto.
- git merge serve para unificar os commits criados com o git branch ao seu branch main.
- git switch serve para mudarmos para outras branch existentes.
- git rebase serve para manter o histórico de commits em linha reta.
não fazer rebase de um arquivo que já esteja no github.
- git switch -c(create), git branch -d(delete).
<<<<<<< ours
- O merge com commit de merge acontece quando a main também ganhou commits novos enquanto o branch andava. Os dois caminhos divergiram, então o Git cria um commit novo, com dois pais, que une as duas linhas:
=======
- O fast-forward acontece quando a main não andou desde que o branch saiu dela. A ponta do seu branch é descendente direta da ponta da main, então o Git não precisa combinar nada: só move o ponteiro da main para frente até o último commit do branch.
>>>>>>> theirs
