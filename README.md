# Desafio `academia node FICR`

Neste desafio você deverá desenvolver uma api que retorna um currículo dinâmico. Para isso, você deverá comunicar-se com dois serviços para capturar informações. A api do Facebook e a api do Github.

## Especificações do projeto

* Utilizar o [express](https://www.npmjs.com/package/express)

* Utilizar algum pattern para estruturar o projeto

* O projeto deverá ser publicado no github

* Publicar o projeto no [Heroku](https://www.heroku.com/)

* Caso o usuário acesse uma rota que não foi especificada, deverá ser apresentado para ele uma mensagem de com o status 404

## Pontos extras

* Publicar o projeto no [Heroku](https://www.heroku.com/) utilizando dockerfile

* Criar testes utilizando [Jest](https://www.npmjs.com/package/jest)

* Utilizar ferramentas de qualidade de código: [Eslint](https://www.npmjs.com/package/eslint) e [EditorConfig](https://editorconfig.org/)

* Sinta-se livre para adicionar features ao seu gosto. Exemplo: tradução do conteúdo utilizando flags na requisição, como mostrado abaixo.

````http
  GET  /api/curriculo?lang=en_us
````

## Requisitos técnicos

* O projeto deve conter a seguinte rota:

````http
  GET  /api/curriculo
````

* A rota deve conter a seguinte resposta:

````json
  {
    "facebook_profile": {
      "image": "https://imagem-do-perfil",
      "name": "Fulano",
      "surname": "Silva",
      "Address": "Rua fulano de tal, 256 - Pe",
      "gender": "Masculino",
      "birthday": "12/12/1994",
      "email": "fulano@gmail.com"
    },
    "github_profile": {
      "name": "Fulano da Silva",
      "html_url": "https://github.com/fulano",
      "bio": "Fullstack Developer and Mobile Developer",
      "company": "@Accenture",
      "repositories": [
        {
          "size": 49,
          "name": "academia-nodejs-ficr",
          "url": "https://api.github.com/repos/mizamelo/academia-nodejs-ficr"
        },
        {
          "size": 37,
          "name": "academia-php",
          "url": "https://api.github.com/repos/mizamelo/academia-php"
        },
        {
          "size": 23,
          "name": "academia-php2",
          "url": "https://api.github.com/repos/mizamelo/academia-php2"
        }
      ]
    }
  }

````

  * Devem ser listados os 3 primeiros repositórios ordenados do maior para o menor pelo  campo 'size'
  
## Pronto para começar o desafio?
* Faça um "fork" desse repositório na sua conta do Github
* Crie uma branch com o seu nome e sobrenome ex: robson-santos
* Após completar o desafio, crie um "pull request" nesse repositório comparando a sua branch com a master
