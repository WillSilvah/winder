module.exports = {
name: "gato",
aliases: ['gatos', 'cat'],
desc: "Veja uma foto aleatória de um gato!",
category: "Animal",
usage: "gato",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-gato.jpg]

$createObject[$jsonRequest[https://some-random-api.ml/animal/cat]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
