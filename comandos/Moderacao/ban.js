module.exports = [{
name: "ban",
aliases: ['banir','b'],
desc: "Bane um usuário permanentemente",
category: "Moderação",
usage: "ban @user/userID motivo?",
code: `
<@$authorID> | O usuário foi banido!

$channelSendMessage[$getVar[punishmentLog];{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Banido:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
{description:
**⭐ Punido por:**
$userTag[$authorID]

**⁉️ Motivo:**
$messageSlice[1]
}
{footer:Comunidade Pinwheel - Vigiar e punir, bom demais:$guildIcon}
{color:#6F03FC}
{thumbnail:$userAvatar[$authorID]}
}]

$ban[$guildID;$findUser[$message[1]];0;Banido por:$userTag | Motivo: $messageSlice[1]]

$ifAwaited[$isUserDMEnabled[$findUser[$message[1]]]==true;{execute:ban-dm}]


$onlyPerms[banmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **banir membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} {color:#6F03FC}}]

$onlyForRoles[861323169482801213;{newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **banir membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]

$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione/ID** o usuário]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getguildVar[prefixo]banir} {title:$getguildVar[prefixo]banir <@user> <motivo?>} {description:É necessário **@mencionar** o usuário, o motivo é opcional, mas recomendo por algum motivo, para evitar confusão}}]
`
},{
name: "ban-dm",
type: "awaited",
code: `
$author[1;Você foi banido da comunidade pinwheel!;https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048]
$description[1;

**⭐ Punido por:**
$userTag[$authorID]

**⁉️ Motivo:**
$messageSlice[1]

]
$footer[1;Comunidade Pinwheel - Vigiar e punir, bom demais;$guildIcon]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;#6F03FC]
$addButton[1;Formulário de desbanimento;link;https://dyno.gg/form/bbc30fb3;no;]

$dm[$findUser[$message[1]]]
`
}]
