module.exports = {
name: "canguru",
aliases: ['kangaroo'],
desc: "Veja uma foto aleatória de um canguru!",
category: "Animal",
usage: "canguru",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-kangaroo.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/kangaroo]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
