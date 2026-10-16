# Dia 2

-echo e suas utilidades:
// O echo serve para mostrar um texto, criar e alterar arquivos. 
Estrutura e exemplos de echo:
echo "ola mundo" > teste
esse echo cria o arquivo teste e escreve "ola mundo" na primeira linha.
echo "meu nome é luis" >> teste
esse echo escreve " meu nome é luis" na segundo linha do arquivo teste.
//

-.gitignore e suas utilidades:
// o .gitignore é um arquivo que serve para não permitir o rastreamento de pastas, arquivos, textos, entre outros do repositorio do git hub.
estrutura e exemplos de .gitignore:
echo "node_modules/" > .gitignore
esse echo cria o arquivo .gitignore e já adiciona na primeira linha a pasta "node_modules" (a / serve para indicar uma pasta).
o > cria o arquivo. Se ele já existir, o > apaga o conteúdo anterior.
acrescentar mais regras:
echo ".env" >> .gitignore
cria o arquivo .env e escreve ele no final do .gitignore. 
//

-git diff e suas utilidades:
// o git diff serve para mostrar exatamente o que mudou nos arquivos, linha por linha. 
como ler a saída:
diff --git a/dia-01.md b/dia-01.md
--- a/dia-01.md
+++ b/dia-01.md
@@ -1,3 +1,3 @@
-git add prepara
+git add coloca o arquivo na staging area
 git commit salva
 --- e +++ = arquivo antigo(-) e arquivo novo (+)
 @@ -1,3 e +1,3 @@ = quais linhas tiveram mudanças
 linha com -(vermelha) = linha removida
 linha com + (verde) = linha adicionada
 exemplos:
 git diff mostra o que mudou e não passou pelo git add.
 git diff --staged
 mostra o que já passou pelo git add e vai entrar no próximo commmit.
 git diff nome do arquivo
 mostra o que mudou no arquivo selecionado 
 quando usar na prática:
git status
git diff
git add arquivo
git diff --staged
git commit -m "mensagem"
//