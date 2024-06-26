# ![](https://github.com/LuanGDantas/Proffy/blob/master/assets/thumbnail.png "Banner Proffys")

<p align="center"'>
  <a href="#-sobre">Sobre</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
  <a href="#-como-utilizar">Como utilizar</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
  <a href="#-licença">Licença</a> 
</p>
                  
<p align="center"'>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LuanGDantas/Proffy?color=BlueViolet&style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/LuanGDantas/Proffy?color=BlueViolet&style=flat-square">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/LuanGDantas/Proffy?color=BlueViolet&style=flat-square">
  <a href="https://www.linkedin.com/in/luan-guilherme-dantas-3a57a3130/ ">
    <img alt="made by" src="https://img.shields.io/badge/made%20by-LuanGDantas-BlueViolet?style=flat-square"> 
  </a>
  <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-blueviolet?style=flat-square">  
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/LuanGDantas/Ecoleta?style=social">
</p>

***

## 🔖 Sobre
<p align="justify"'>
O Proffy é uma aplicação Web e Mobile que conectar pessoas (alunos e professores) que deseja estudar ou dar aulas. Qualquer usuário pode escolher ambas opções.  
</p> 
<p align="justify"'>                   
Caso escolham "Dar aula" informam seus dados, a matéria que quer ensinar, e escolher o melhor horário para dar a sua aula. Assim, os dados cadastrados ficaram disponíveis no site onde alunos podem escolher o professor que melhor se encaixa na em suas preferências.
</p>  
<p align="justify"'>                             
A construção dessa aplicação foi iniciada na trilha Booster da Next Level Week #02 distribuída pela <a target="_blank" href="https://rocketseat.com.br/">Rocketseat.</a> 
</p>

## 💻 Tecnologias
#### Website ([ReactJS][1] + [TypeScript][2])
- [CSS][3]
- [React Router Dom][4]
- [React Icons][5]
- [Axios][6]
#### Server ([NodeJS][7] + [TypeScript][2])
- [Express][8]
- [KnexJS][9]
- [SQLite3][10]
#### Mobile ([React Native][11] + [TypeScript][2])
- [Expo][12]
- [Expo Google Fonts][13]
- [React Navigation][14]
- [Axios][6]
## 🔨 Ferramentas
- [Visual Studio Code][15]
- [Figma][16]
- [Insomnia][17]
- [Google Fonts][18]
- [Feather Icons][19]

***

## 🔥 Como utilizar
<p align="justify"'>
Para clonar e executar este aplicativo, você precisará do Git , Node.js + yarn, ReactJS e React Native + (Expo) instalado no seu computador e caso deseje testa a aplicação mobile no seu celular faça o download do aplicativo do Expo.
</p>

#### Clone este repositório
```bash
# Clonando o repositório
$ git clone https://github.com/LuanGDantas/Proffy.git
```
#### Instalação e Inicialização da API
~~~shell
# Em um terminal abra o repositório da API 
$ cd ./Proffy/server

# Instalando as dependências do server
$ yarn 

# Iniciando/Criando o banco de dados
$ yarn knex:migrate

# Iniciar servidor no modo de desenvolvimento
$  yarn start

# em execução na porta 3333
~~~
#### Instalando e executando a Aplicação Web (Front-end)
~~~shell
# Em outro terminal abra o repositório da Aplicação Web 
$ cd ./Proffy/web

# Instalando as dependências da aplicação
$ yarn 

# Inicializando o website no modo de desenvolvimento
$ yarn start

# em execução na porta 3000
~~~
#### Instalando e executando Mobile
~~~shell
# Em outro terminal abra o repositório da Aplicação Mobile
$ cd ./Proffy/mobile

# Instalando as dependências da aplicação
$ yarn 
~~~
Para executar o aplicativo em seu dispositivo, você precisa alterar a configuração de ip em [api.ts](https://github.com/LuanGDantas/Proffy/blob/master/mobile/src/services/api.ts).

```javascript
  baseURL: 'http://192.168.0.105:3333'
```

substitua 192.168.0.105 pelo ip da sua máquina.

Agora com tudo no lugar, execute o aplicativo.
~~~shell
# Iniciando a Expo, que abrirá um qrcode na página do terminal ou expo, basta verificar com o App da Expo ou emulador...Execurta o aplicativo 
$ yarn start
~~~

***
## 📝 Licença

Este projeto está sob a licença do MIT. Consulte a [LICENÇA](./LICENSE.md) para obter mais informações.

***
## 📬 Entrar em contato!
<p align="center"'>
  <a href="https://www.linkedin.com/in/luangdantas/" rel="nofollow">
    <img alt="Linkedin - Luan Guilherme Dantas" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&amp;logo=linkedin" style="max-width:100%;">
  </a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 
  <a href="guilherme.luan2012@gmail.com">
    <img alt="E-mail - Luan Guilherme Dantas" src="https://img.shields.io/badge/Email--%23F8952D?style=social&amp;logo=gmail" style="max-width:100%;">
</a>
</p>

***

<p align="center"'>
Feito com ☕&❤️ por <a href="https://www.linkedin.com/in/luan-guilherme-dantas-3a57a3130/">Luan Dantas</a>
</p>

[1]: https://pt-br.reactjs.org/
[2]: https://www.typescriptlang.org/
[3]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[4]: https://reacttraining.com/react-router/web/guides/quick-start
[5]: https://github.com/react-icons/react-icons
[6]: https://github.com/axios/axios
[7]: https://nodejs.org/en/
[8]: https://expressjs.com/pt-br/
[9]: https://knexjs.org/
[10]: https://github.com/mapbox/node-sqlite3
[11]: https://www.reactnative.com/
[12]: https://expo.io/
[13]: https://github.com/expo/google-fonts
[14]: https://reactnavigation.org/
[15]: https://code.visualstudio.com/
[16]: https://www.figma.com/
[17]: https://insomnia.rest/
[18]: https://fonts.google.com/
[19]: https://feathericons.com/
