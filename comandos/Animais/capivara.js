module.exports = {
name: "capivara",
aliases: ["capy", "capivarias"],
desc: "Veja uma foto aleatória de uma capivara!",
category: "Animal",
usage: "capivara",
code: `$botTyping
<@$authorID>
$attachment[$getObjectProperty[link];$username[$clientID]-capybara.jpg]
$createObject[$jsonRequest[https://api.animality.xyz/img/capybara]]
$guildCooldown[30s;<@$authorID> | Espere **%time%** para executar este comando novamente!]
$suppressErrors[Eu tentei executar o comando \`$commandName\` e eu juro que eu fiz o máximo possível.
{error}]
`
}  
