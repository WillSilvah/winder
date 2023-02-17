# 🐱 Winder, o bot exclusivo da Pinwheel

Winder é um bot feito para a comunidade da Pinwheel, com um sistema de moderação eficiente e trazendo diversão para todos.

![Winder no lado inferior direito segurando um catavento azul](https://media.discordapp.net/attachments/861337787192836117/1071058270980165693/IMG_20230203_084254.png?width=1025&height=342)

# 🧑‍💻 Como contribuir para o Winder?

É bem fácil, você vai precisar:

- Um editor de texto (Visual Studio Code, Atom ou seu editor preferido)
- Saber o básico de JavaScript
- Saber como usar o aoi.js

### 🔶 Primeiro passo:

Para começar a contribuir para o Winder, é necessário haver um editor de texto, recomendamos o [Visual Studio Code](https://code.visualstudio.com/Download) pela praticidade e simplicidade, mas você pode usar o seu editor de texto que queira, contanto que não seja o Notepad.

### 🔷 Segundo passo:

Após baixar o seu editor de texto, precisamos do [node.js](https://nodejs.org/en/) para a execução do código, sem ele, não haverá como iniciar o bot corretamente.
Depois de baixar e instalar o node.js, você já está pronto para o próximo passo.

### 🔶 Terceiro passo:

Depois de instalar o editor de texto e o node.js, precisamos instalar a biblioteca que conversa com a API do Discord, que neste caso, estamos usando o aoi.js.

Para instalar aoi.js, usaremos o comando abaixo:

```batch
npm install aoi.js
```

Para instalar todas as packages usadas, usaremos o comando abaixo:
```batch
npm install
```

##### ⚠️ Lembrando que você precisa de node.js de no mínimo 16.9.0 ou recente!

### 🔷 Quarto passo:

Agora você pode ajudar no desenvolvimento do Winder, dar sugestões, reportar bugs e muito mais! **Happy coding!** 👨‍💻

### 🏆 Bônus:

<details>
  <summary>Environment Variables para Visual Studio Code</summary>

  ### Configurar `.env` no Visual Studio Code:
  1. Crie um arquivo chamado `.env`
  2. Após o passo acima, escreva na primeira linha `TOKEN="{token do bot}"`
  3. Não mude a [6ª linha](https://github.com/WillSilvah/Winder/blob/main/index.js#L6) do [index.js](https://github.com/WillSilvah/Winder/blob/main/index.js)
</details>
<details>
  <summary>Environment Variables para Replit</summary>

  ### Configurar `.env` em Replit
  1. Vá em seu projeto
  2. Após o passo acima, vá em `Commands`
  3. Feito isso, vá em `Secrets`
     - Agora, defina `key` como `TOKEN` e o `value` com o token de seu bot.
 </details>

# 🛠️ Informações sobre o Winder

O Winder usa a biblioteca aoi.js para se comunicar com o Discord devido a sua facilidade de criação de bots;

- Ele usa o **node.js 18.12.0** e o **aoi.js 6.1.0**;

- E atualmente está na versão **Winder 30.2**.
