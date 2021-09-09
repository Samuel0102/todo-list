### To Do List 
Projeto de To Do List, utilizando o microframework Flask, Javascript e Bootstrap.

# Sobre o projeto

## Introdução
Um projeto de Lista de Tarefas, basicamente. Com possibilidade de controlar diversas tarefas, podendo desde excluí-las a adicionar novas. Desenvolvido com o microframework Flask do Python, utilizando Javascript e Jquery, além do bom e velho HTML, com CSS e seu mais célebre framework, Bootstrap. Surgiu a partir do desafio da Front-End Mentor.

## Especificações
*Autor*: Samuel Pacheco Ferreira    
*Descrição*: Projeto de To Do List.  
*Andamento*: Em desenvolvimento.     
*Terá atualizações*: Sim.          

## Tecnologias
*Tecnologias utilizadas*: Microframework Flask, Javascript e Jquery, Html, CSS, Bootstrap e Sqlite3.         
*IDE*: Visual Studio Code.      
*Estruturação*: Estruturado em HTML e CSS, tem como arquitetura de software o padrão MVC(Model-View-Controller).    

## Funcionalidades
| Funcionalidade | Situação |
| ----------- | ----------- |
| Adição de tarefas | :heavy_check_mark: |
| Exclusão de tarefas | :heavy_check_mark: |
| Filtragem de tarefas concluídas e a concluir | :heavy_check_mark: |
| Marcação de tarefas concluídas | :heavy_check_mark: |

:clock130: - Em desenvolvimento   :heavy_check_mark: - Finalizado

## Requisitos para manipular código
* Necessita da instalação de todos as bibliotecas e dependências do Flask, indicadas no arquivo requirements.txt 

## Execução do sistema
1. Baixe o zip do repositório
2. Na pasta raíz "todo-list", crie um ambiente virtual  
2.1 A criação pode ser feita baixando a biblioteca "virtualenv" e executando na raíz o comando `virtualenv -p python ambiente_virtual`
3. Dentro do ambiente virtual, execute o comando `pip install -r requeriments.txt` que fará a instalação de todas as dependências necessárias   
3.1 O acesso ao ambiente pode ser feito digitando na raíz o comando `. ambiente_virtual/bin/activate`, fazendo o ambiente ativar  
3.1.1 Para desativar: `deactivate`
4. Com todas as dependências instaladas, basta executar o script "run_server.py" que contém o inicializador do sistema e do servidor  
4.1 Para execução é necessário, após instalar dependências e ambiente virtual, trocar o interpretador do python padrão para o interpretador "venv". No VSCODE, graças ao diretório ".vscode" é possível apenas clicando no canto inferior esquerdo, onde encontra-se a versão do python. Ao clicar, basta escolher o interpretador, na tela que aparecer no topo, "python 3.8.5 64 bits ('venv': venv)"  
5. Com o servidor inicializado, basta digitar no navegador "localhost:5000"

## Documentações do sistema e outros arquivos
* Nenhum

## Origem do projeto
O projeto se originou a partir de um desafio da Front-End Mentor. Diferentemente do pedido, aqui fora utilizado já um back-end operante.
Design original do projeto, licenciado pela Front-End Mentor: https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW

## Principais dificuldades
* Uso extenso de integração entre Back e Front-End

