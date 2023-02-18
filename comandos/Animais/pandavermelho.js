module.exports = {
name: "pandavermelho",
aliases: ['redpanda', 'firefox'],
desc: "Veja uma foto aleatória de um panda vermelho!",
category: "Animal",
usage: "pandavermelho",
code: `$botTyping
<@$authorID>

$attachment[$getObjectProperty[image];$username[$clientID]-red_panda.jpg]
$createObject[$jsonRequest[https://some-random-api.ml/animal/red_panda]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
