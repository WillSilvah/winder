module.exports = {
name: "raposa",
aliases: ['raposas','fox'],
desc: "Veja uma foto aleatória de uma raposa!",
category: "Animal",
usage: "raposa",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-raposas.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/fox]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
