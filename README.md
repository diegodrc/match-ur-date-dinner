# match ur date - it's dinner time

![logo](https://i.imgur.com/iP63ee9.png)

Match ur date é a plataforma mais adequada para combinar o date ideal com o seu parceiro, evitando assim horas **desperdiçadas** para decidir qual o melhor restaurante para ir. Com o nosso aplicativo, você facilitará a tomada de decisões conjunta e aproveitará melhor o tempo com seu amor.

## Autores 

- Daniel Barreto Torres - Desenvolvedor Full-Stack
- Diego Della Rocca de Camargos - Desenvolvedor Full-Stack
- Joao Paulo Mantini Veras - Desenvolvedor Full-Stack
- Marco Aurelio da Silva - Desenvolvedor Full-Stack
- Victor Araujo Sander Silva - Desenvolvedor Full-Stack

## Funcionalidades

- O usuário tem o poder de criação de salas com links compartilháveis para o processo de decisão conjunta do encontro/restaurante.
- O app funciona da seguinte forma: O criador da sala escolhe a localização para procurar restaurantes perto. O link gerado permite que o seu parceiro entre na sala em que são apresentados restaurantes a serem "aprovados" ou "recusados" por cada um. O primeiro restaurante que gerar "match", ou seja, aprovado pelo casal, é o restaurante escolhido para o date.

## Tecnologias Utilizadas

- M - MongoDB
- E - ExpressJS
- R - ReactJS
- N - NodeJS 

## Backlog do Produto

- Como um host, quero criar uma sessão para usar com meu parceiro.
- Como um host, quero escolher uma localização para minha sessão recomendar restaurantes próximos.
- Como um host, quero compartilhar um link para acessar nossa sessão.
- Como usuário, quero acessar o link e ir para a nossa sessão.
- Como usuário, quero receber sugestões de restaurantes com base nas preferências da sessão.
- Como usuário, quero curtir/dispensar uma sugestão.
- Como usuário, quero ser avisado quando dermos match em restaurantes.
- Como convidado, quero adicionar minha localização e encontrar sugestões entre minha localização e do host.
- Como usuário, quero poder customizar minha experiência escolhendo categorias de restaurante.
- Como usuário, quero poder ver detalhes do restaurente sugerido.
- Como host, quero poder combinar com mais um usuário.
- Como usuário, quero poder marcar um restaurante como talvez para que ele apareça futuramente nas sugestões.

## Backlog da Sprint

- Setup inicial do projeto (Diego)
- Como um host, quero criar uma sessão para usar com meu parceiro.
  - Criar API para criação de sessão (Diego)
  - Criar tela de criação de sessão (Diego)
  - Gerar sugestões de restaurante (Joao)
- Como um host, quero escolher uma localização para minha sessão recomendar restaurantes próximos.
  - Criar input de localização com integração API do maps (Daniel)
  - Enviar informação ao criar sessão (Daniel)
  - Alterar API de criação de sessão para considerar a localização (Joao)
- Como um host, quero compartilhar um link para acessar nossa sessão.
  - Criar tela de compartilhamento de link (Marco)
- Como usuário, quero acessar o link e ir para a nossa sessão.
  - Criar tela inicial (Marco)
- Como usuário, quero receber sugestões de restaurantes com base nas preferências da sessão.
  - Criar API que solicita uma recomendação de restaurante (Victor)
  - Criar tela que apresenta informações do restaurante recomendado (Marco)
- Como usuário, quero curtir/dispensar uma sugestão.
  - Criar API que curti um restaurante (Victor)
  - Adicionar botões de curtir/descurtir (Diego)
- Como usuário, quero ser avisado quando dermos match em restaurantes.
  - Criar API que confere se deu match (Joao)
  - Criar API que recebe informações do restaurante match (Victor)
  - Criar tela de match (Daniel)
