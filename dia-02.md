# Dia 2
echo e suas utilidades:
// O echo serve para mostrar um texto, criar e alterar arquivos. 
Estrutura e exemplos de echo:
echo "ola mundo" > teste
esse echo cria o arquivo teste e escreve "ola mundo" na primeira linha.
echo "meu nome é luis" >> teste
esse echo escreve " meu nome é luis" na segundo linha do arquivo teste.
//

.gitignore e suas utilidades:
// o .gitignore é um arquivo que serve para não permitir o rastreamento de pastas, arquivos, textos, entre outros do repositorio do git hub.
estrutura e exemplos de .gitignore:
echo "node_modules/" > .gitignore
esse echo cria o arquivo .gitignore e já adiciona na primeira linha a pasta "node_modules" (a / serve para indicar uma pasta).
o > cria o arquivo. Se ele já existir, o > apaga o conteúdo anterior.
acrescentar mais regras:
echo ".env" >> .gitignore
cria o arquivo .env e escreve ele no final do .gitignore. 
//