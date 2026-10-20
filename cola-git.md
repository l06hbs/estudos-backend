Cola dos códigos mais usados:

Configurações e início:
git --version                    
# confere se o Git está instalado

git config --global user.name "Seu Nome"

git config --global user.email "seu-email@exemplo.com"

git config --global --list       
# confere a configuração

git clone URL-DO-REPOSITORIO     
# baixa um repositório do GitHub

O ciclo do dia a dia:
git status                       
# situação atual (rode antes e depois de tudo)

git diff                         
# o que mudou, antes do add

git add arquivo.md               
# prepara um arquivo

git add .                        
# prepara tudo (confira o status antes!)

git diff --staged                
# o que mudou, depois do add

git commit -m "docs: mensagem clara"

git push                         
# envia para o GitHub

git pull                        
# traz novidades do GitHub

Ver histórico:
git log --oneline                
# um commit por linha

git log --oneline --graph --all  
# desenho dos branches

git show HASH                    
# o que um commit mudou

Desfazer:
git restore arquivo.md           
# descarta alterações NÃO commitadas (sem volta)

git restore --staged arquivo.md  
# tira da staging, mantendo as alterações

git commit --amend -m "nova"     
# corrige o último commit (só antes do push)

git revert HASH                  
# desfaz um commit com um novo commit (seguro após o push)

Branches e merges:
git branch                       
# lista os branches (* = atual)

git switch -c nome-branch        
# cria e entra no branch

git switch main                  
# troca de branch

git merge nome-branch            
# junta o branch no branch atual

git branch -d nome-branch        
# apaga o branch já juntado

git merge --abort                
# desiste de um merge com conflito

.gitignore:
echo "node_modules/" > .gitignore   
# cria (o > apaga o que havia)

echo ".env" >> .gitignore           
# acrescenta uma regra

git check-ignore -v arquivo         
# qual regra ignora este arquivo

git rm --cached arquivo             
# para de rastrear algo já commitado

Terminal:
pwd                              
# onde estou

ls -a                            
# lista arquivos (inclusive ocultos)

cd pasta                        
# entra na pasta

cat arquivo.md                   
# mostra o conteúdo

echo "texto"                     
# mostra o texto na tela

echo "texto" >> arquivo.md       
# acrescenta no final do arquivo

mkdir pasta                      
# cria pasta

rm arquivo                       
# apaga (sem lixeira!)