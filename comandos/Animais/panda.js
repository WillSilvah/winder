module.exports = {
name: "panda",
desc: "Veja uma foto aleatória de um panda!",
category: "Animal",
usage: "panda",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-panda.jpg]

$createObject[$jsonRequest[https://some-random-api.ml/animal/panda]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]

`
} 
