module.exports = {
name: "cachorro",
aliases: ['cão', 'cachorros', 'dog'],
desc: "Veja uma foto aleatória de um cachorro!",
category: "Animais",
usage: "cachorro",
code: `$botTyping
<@$authorID>
$attachment[$getObjectProperty[image];$username[$clientID]-cachorro.jpg]

$createObject[$jsonRequest[https://some-random-api.ml/animal/dog]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]

$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
} 
