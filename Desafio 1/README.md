# Desafio 1: Programa de Bolsas UOL
## Perguntas:

#### 1. Para que serve o método Scrum?

O método Scrum serve para gerenciar projetos complexos de maneira a torná-lo mais eficiente através de processos simples e com tempo definido.

#### 2. Como funciona o método Scrum?

Um projeto Scrum é dividido em interações chamadas Sprints, que possuem tempo que pode variar de 2 a 4 semanas. Em cada Sprint são implementadas as funcionalidades listadas no Product Backlog, sendo uma lista composta por histórias que contêm necessidades desejadas para um produto. O conteúdo dessa lista é composto pelo Product Owner que tem a liberdade de alterar a lista e priorizá-los conforme a necessidade do produto.

Ao início de cada Sprint acontece o Sprint Planning, onde o PO apresenta o Product Backlog para o Scrum master e a equipe de desenvolvimento e juntos montam o Sprint Backlog. Nesta lista, o PO prioriza os itens a serem desenvolvidos e a equipe seleciona as atividades que conseguirá desenvolver durante esta Sprint.

Durante a Sprint, diariamente, acontece a Daily Scrum, em que a equipe realiza uma breve reunião, onde todos devem reportar o que foi feito, o que vão fazer e se houve algum impedimento. Essa reunião deve ser curta (15min) para não atrapalhar no prosseguimento das tarefas.

Ao final de cada Sprint acontece o Sprint Review, onde a equipe de desenvolvimento apresenta uma funcionalidade pronta para o cliente e ouve o feedback do cliente sobre o produto. Por fim faz-se uma Sprint Retrospective, onde a equipe define os pontos para serem melhorados para a próxima Sprint.

#### 3. O que é Git?

Um software de versionamento de código que tem o objetivo de manter um histórico de versões de um código

#### 4. O que é um Scrum Product Owner?

É o profissional responsável por representar os interesses do cliente dentro do time Scrum. É o responsável por produzir product backlog e mantê-lo atualizado conforme as prioridades do cliente.

#### 5. Qual o comando para criação de um novo repositório no Git?

Podemos criar um repositório Git com o comando`git init`

#### 6. O que é o HTTP?

O HTTP(Hypertext Transfer Protocol) é um protocolo para comunicações na internet, criando regras para a comunicação entre cliente e servidor.

#### 7. Como funciona o HTTP?

O protocolo estabelece a conexão cliente-servidor através de solicitações (requests) e respostas(response), onde o cliente sempre inicia a conexão e todas conexões são individuais. Uma conexão deve ter todas as informações para que servidor possa gerar uma resposta. Para que uma página Web possa ser exibida, o navegador envia um request solicitando um documento HTML. Então com a response do servidor, o navegador vai solicitando os itens para que a página posso ser executada, como arquivos CSS, imagens, vídeos ou scripts javascript, para por fim, exibir a página web em sua totalidade.

#### 8. Com o Git ,você pode propor mudanças (adicioná-las ao Index) usando um comando. Qual é esse comando?

Podemos adicionar arquivos para o index através do comando `git add <arquivo>`

#### 9. O que é a Branch master e para que serve?

As branches no git, servem para criar uma linha de commits individual com o objetivo de criar funcionalidades de forma independente. A branch master é o nome dado para a branch principal de um projeto.

#### 10. Quais são os comandos usados para atualizar um repositório local e fazer merge de um outro branch ao seu branch ativo?

Os comandos utilizados para atualizar um repositório local e fazer merge, são os comandos `git pull` para atualizar e o `git merge` para dar merge.

#### 11. Qual a diferença entre Git e Github

Enquanto o Git é utilizado para versionamento de código, o Github é um serviço de hospedagem de projetos em repositórios remotos.

#### 12. Quais os dois verbos HTTP que podemos utilizar para realizar um update? Explique a diferença entre eles.

Podemos utilizar o método PUT e o PATCH para dar update em algum recurso.  O método PUT é utilizado para alterações completas, ou seja, substitui todo o recurso. O método PATCH é utilizado para alterações parciais, ou seja, podemos alterar apenas parte dos dados deste recurso

#### 13. Qual o status code que pode ser usado na criação de um novo usuário?

Para criar um novo usuário utilizamos o método PUT, que tem como status code de resposta o código 201 que indica que operação foi bem sucedida e um novo recurso foi adicionado.

#### 14. Quais são os três status code que podem ser utilizados para realizar o delete?

Ao realizar o método DELETE, caso seja bem-sucedido, temos 3 de algumas possíveis respostas.

O código 200 que nos diz que a requisição para deletar foi um sucesso, o código 202 que informa que a operação de deletar foi bem sucedida, mas não foi totalmente realizada e o código 204 que informa que a operação foi bem-sucedido, mas não retornou nenhuma informação.

#### 15. Exemplifique para que serve os métodos HTTP 1xx, 2xx, 3xx, 4xx e 5xx. De uma forma macro (geral)!

São códigos que definem o tipo de resposta que recebemos do servidor.

- Os códigos 1xx dão repostas de informação, como, por exemplo, o código 100 que informa temporariamente que o processo ocorreu bem e o cliente deve continuar com a requisição.
- Os códigos 2xx indicam que a resposta foi um sucesso, como, por exemplo, o código 200 que indica que a requisição foi bem sucedida
- Os códigos 3xx indicam redirecionamento, como o código 301, que indica que o navegador deve redirecionar para um endereço(URI) específico.

#### 16. Conta pra gente como foi sua experiência na Sprint#01 do programa de bolsa @node.js_mar22 e quais suas expectativas a partir de agora.

Achei a experiência com a Sprint#01 foi muito produtiva no geral. Tive o primeiro contato com o método Scrum, revi alguns conceitos de Git e do protocolo HTTP e aprendi muita coisa nova também. Quanto á expectativas, espero ter mais partes práticas para a próxima Sprint, principalmente na parte de banco de dados, pois vi muito superficialmente na faculdade. Acredito ser um assunto muito importante e espero aprender bastante.
