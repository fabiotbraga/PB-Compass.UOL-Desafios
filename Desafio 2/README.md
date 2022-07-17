# PB-Compass.UOL-Desafio 2
## Objetivos gerais da Sprint:

- Criar um repositório público .
- Crie o Modelo Relacional.
- Implemente no PostgreSQL / MySQL o B.D projetado no Modelo Relacional (construa um script.sql).
- Faça pelo menos um script com 10 inserção de cada tabela que for criar.

Criar um repositório público .

## Objetivos Específicos da Sprint:

### Construa um B.D de gerenciamento de faxinas para diaristas:

- O B.D deve controlar o histórico de faxinas realizados por cada diarista em cada residência. Cada Diarista possui um identificador (id), cpf e nome; 
- Cada Residência possui um responsável. Para o responsável é importante armazenar seu nome e seu cpf; 
- Além do responsável, cada Residência possui um identificador (id), cidade, bairro, rua, complemento e número e Tamanho (pequena, média ou grande); 
- Um Responsável pode ser responsável por mais de uma Residência mas uma Residência tem somente um Responsável; 
- Dependendo do Tamanho da Residência, a Faxina tem um preço;
- Uma Diarista realiza uma Faxina por dia, ou seja, atende uma Residência por dia; 
- Uma Diarista pode atender várias residências, e uma residência pode ser atendida por várias Diaristas; Faxinas podem ser agendadas (por data); 
- É importante saber se a Diarista não foi (faltou) a uma Faxina, previamente, agendada; 
- Faxinas agendadas e não-realizadas (por qualquer motivo) não devem ser pagas; 
- É importante armazenar feedbacks de avaliação por cada Faxina realizada. 
- Estes comentários devem ser realizados pelo Responsável da Residência no momento da conclusão da Faxina;

### Metodologia:

- Primeiro, foi construído o modelo relacional conforme o proposto pelas regras de negócio do desafio.
- Em seguida, foi construído um modelo lógico, para refinar o modelo e definir quais tabelas iriam ser incluídas. 
- Após isso, um modelo físico foi construído utilizando a ferramenta MySQL Workbench.
- Por fim, foram incluídos os dados nas tabelas conforme o proposto pelos requisitos do Desafio da Sprint.

### Observações:

- Foram criados scripts separados para a criação das tabelas e para cada INSERT na tabela.
- Para demonstrar que algumas condições do desafio foram cumpridos, foi criado um Script demonstrar as condições através de um comando SELECT.
- Junto com os scripts será enviada um imagem do modelo relacional.



