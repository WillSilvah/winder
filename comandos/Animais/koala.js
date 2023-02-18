module.exports = {
name: "coala",
aliases: ['koala'],
desc: "Veja uma foto aleatória de um coala!",
category: "Animal",
usage: "coala",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-koala.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/koala]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
