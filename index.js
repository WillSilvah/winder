const aoijs = require("aoi.js");

const fs = require('fs');

const bot = new aoijs.AoiClient({
	token: process.env.TOKEN,
	prefix: 'pw!',
    respondToBots: "false",
    intents: ["Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent"],
     aoiLogs: false,
     events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onGuildUnavailable", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onBanAdd", "onBanRemove", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onInteractionCreate", "onApplicationCmdPermsUpdate", "onUserUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate", "onFunctionError"],
     database: {
 type: "aoi.fb",
   tables: ["playboot-stable"],
 db: firebase
 },
     autoUpdates: false,
     mobilePlatform: false,
     
     guildOnly: true,
        respondOnEdit: {
            commands: true,
        time: 600000
},
        suppressAllErrors: false,
        errorMessage: ["", ""]
    })

require('./handler/variables')(bot)
require('./handler/status')(bot)

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./comandos/")

loader.setColors(loader.themes.default) 

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

bot.variables({
//configuração de canais padrão
  "log-publico": "861337787192836117", //O seu bot vai usar para enviar quem saiu, quem entrou e afins, recomendamos que seja o canal de bate-papo do seu servidor.
  "log-privado": "923998719765004299", //recomendamos que seja um canal privado, o seu bot vai usar como console.
  "update-channel": "923998719765004299", //canal de updates que o bot faz que não tem problema em ser visto para todo mundo.
  "server-name": "pinwheel", //Nome que o bot vai usar para se referir ao servidor que está, recomendamos por o nome do seu servidor.
  "server-id": "861313067291115541", //ID do servidor padrão
  "JoinedLeaveLog": "861331580903620608", //Canal de log de entrada e saída de membros
  "punishmentLog": "861367708716236800"

})
