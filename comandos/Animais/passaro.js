module.exports = {
name: "pássaro",
aliases: ['bird','pássaros'],
desc: "Veja uma foto aleatória de um pássaro!",
category: "Animal",
usage: "pássaro",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-bird.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/bird]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
