module.exports = [{
name: "expulsar",
aliases: ['kick','k'],
desc: "Expulsa um usuário do servidor",
category: "Moderação",
usage: "expulsar @user/userID motivo?",
code: `
<@$authorID> | O usuário foi expulso!

$channelSendMessage[$getVar[punishmentLog];{newEmbed:
{author:$userTag[$findUser[$message[1]]] ($findUser[$message[1]]) | Expulso:https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048}
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

$kick[$guildID;$findUser[$message[1]];Expulso por: $userTag | Motivo: $messageSlice[1]]

$ifAwaited[$isUserDMEnabled[$findUser[$message[1]]]==true;{execute:kick-dm}]

$onlyPerms[kickmembers;<@$authorID> {newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]

$onlyForRoles[861323169482801213;{newEmbed: {author:Você não tem as permissões necessárias} {description:Por segurança, você precisa ter as permissões de **expulsar membros** e ter o cargo <@&861323169482801213>.}  {footer:Que tal você entrar para a staff? $getguildVar[prefixo]serstaff} }]

$argsCheck[>0;<@$authorID> {newEmbed: {author:Como usar o comando $getguildVar[prefixo]expulsar} {title:$getguildVar[prefixo]expulsar <@user> <motivo?>} {description:É necessário **@mencionar** o usuário, o motivo é opcional, mas recomendo por algum motivo, para evitar confusão}}]

$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID> | Você está se automencionando, por favor, **@mencione** o usuário]

$onlyIf[$rolePosition[$lowestRole[$authorID]]>=$rolePosition[$lowestRole[$findUser[$message[1]]]];<@$authorID> | O seu cargo é menor que o $username[$findUser[$message[1]]]]
`
},{
name: "kick-dm",
type: "awaited",
code: `
$author[1;Você foi expulso da comunidade pinwheel!;https://cdn.discordapp.com/emojis/1063526458359808070.png?size=2048]
$description[1;

**⭐ Punido por:**
$userTag[$authorID]

**⁉️ Motivo:**
$messageSlice[1]

]
$footer[1;Comunidade Pinwheel - Vigiar e punir, bom demais;$guildIcon]
$thumbnail[1;$userAvatar[$authorID]]
$color[1;#6F03FC]

$dm[$findUser[$message[1]]]
`
}]
