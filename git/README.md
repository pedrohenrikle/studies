# Git

## git init
Inicia o git na pasta que você está no momento. A pasta .git é escondida e é responsável por guardar os comits .

## git help <\command>
Ao colocar git help 'comando' ele retornará um manual do comando passado como argumento.

## git add '.'
Ao dizer "git ad" e adicionar como ultimo argumento o nome dos arquivos, você adiociona tais arquivos na lista encaminhada para o commit (se passado um ponto como ultimo argumento, é adicionado todos os arquivos do projeto).

### git add *.md 
Nesse caso específico, você irá adicionar todos os arquivos do mesmo tipio, no exemplo, todos os arquivos .md serão adicionados, mas poderia ser git add*.css, .html, .js, e assim segue.


## git commit -m "<\message>"
Esse comando salva na linha do tempo todos os arquivos que foram selecionados pelo git add. Dentro de text é necessario adicionar uma frase ou palavra para identificar o commit.
## git log
É apresentado no terminal todas os commits já feitos, além de apresentar a commit atual, com a sua hash.
### git log --oneline
Aparece no terminal apenas uma linha, apresentando o hash e o path do commit atual.
### git log -n 5
É apresentado apenas os ultimos 5 commits feitos.
### giy log -since=2020-10-01
É apresentado os commits que foram criados desde ou depois de uma data especificada.
### git log --until=2020-10-01
É apresentado os commits que foram criados anteriores ou antes de uma data especificada.
### git log --author=pedro
Faz uma busca entre todos os commits e apresenta apenas os commits feitos pelo autor descrito.

### git log --grep="init"
Faz uma busca entre as mensagens dos commits, podendo fazer uma "filtragem" e procurar palavras específicas .

## git diff 
É apresentado a diferença entre o ultimo commit e as mudanças atuais, mostrando as diferenças linha a linha. Acaba gerando um arquivo bem grande.

### git diff --staged
É apresentado a diferença entre o que está no stage area e o que esta no repositório, mostrando as diferenças linha a linha. Acaba gerando um arquivo bem grande.

## git rm <\file>
Remove um arquivo do repositório (deleta de verdade, nem pra lixeira ele vai).

## git mv <\file>
Para mover um arquivo para outro dentro do repositório utilizamos este comando. Para mover o README.md para uma nova pasta chamada assets dentro do seu repositório, fazer:

    git mv README.md assets/README.md

### Renomear
Você pode utilizar este comando para renomear arquivos, por exemplo, ao querer renomear um README.md para STATUS.md fazer:

    git mv README.md STATUS.md

## git restore <\file>
Com esse comando, podemos voltar atrás com as mudanças que realizamos no projeto dentro da working area. Caso tenha diferença entre o novo arquivo e o arquivo que está dentro da staged area, você pode trazer o arquivo da staged area de volta utilizando este comando.

### git restore --staged <\file>
Ao usar esse comando, remove da staged area um arquivo.

## git commit --amend -m "<\message>"
Este commando serve para mudar a mensagem do ultimo commit.
Para corrigir o ultimo commit, podemos utilizar os comandos 'git mv', 'git rm' e 'git add' para deixar como queremos, para no final então utilizar o comando git commit --amend -m "<\message>". Dessa forma, ele irá editar o ultimo commit.

## git checkout <\hash> -- <\file>
Com esse comando, você pode trazer de volta algum arquivo de commits anteriores. 

## git clean -f <\file>
Remove todos os itens que não estão sendo trackeados (untracked). Deleta PERMANENTEMENTE os itens.

## git revert HEAD~</commit number>
Faz com que volte no commit anterior. Se quiser voltar no 5° commit anterior pode fazer:

    git revert HEAD~5

A melhor dica a se usar é dar um "git log --oneline" e copiar o hash que aparecer do seu commit desejado, dai então colar o hash para voltar neste commit, fazendo assim:

    git commit <\hash>

## git commit -am "<\message>"
Você consegue mandar um arquivo editado para o commit direto, sem passar pelo stage area. O único porém, é que tem que ter apenas arquivos modificados no working area, não poderão haver itens novos.

## git show <\hash>
Este comando apresenta as diferenças que foram causadas no commit selecionado 

### git show <\hash> --color-words
É apresentado o mesmo comando porém com coloração verde as coisas que foram modificadas e vermelhas as coisas que foram apagadas

### git show <\hash> -- <\dir>
Podemos ver todas as alterações que houveram em um diretório específico