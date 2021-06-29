const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
const { readdirSync } = require("fs");

module.exports = {
            name: "help",
            aliases: ["h"],
            usage: "[command name] (optional)",
            category: "info",
            description: "help command",
        run: async (client, message, args) => {
      const embed = new MessageEmbed()
      embed.setColor("#961a1a")
      embed.setThumbnail('https://media.discordapp.net/attachments/815870804439859262/853926225973608478/20210614_171537.png')
          
embed.setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL())

      embed.setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dyanmic: true }))
      embed.setDescription(`**This Command List is Bot Prefix Defalut \`e?\` \n
      <a:Dev:819251175169327205> [Twitter](https://twitter.com/moodalvin?s=09) | [Website](https://ElevenJay.alvinjumz.repl.co) | [Donate](https://ko-fi.com/alvintungga)**\n`)
          
embed.addField('<:moderation:816253684689534996> | Moderation', "`ban`, `unban`, `kick`, `addrole`, `warn`, `lock`, `unlock`, `clear`, `slowmode`, `removerole`, `nuke`, `mute`, `unmute`")
embed.addField('😎 | Fun', "`advice`, `fact`, `meme`, `say`, `hack`, `howgay`, `memetemp`, `creatememe`, `qr`, `binary`, `poll`")
embed.addField('📸 | Image', "`speed`, `stonks`, `changemymind`, `gay`, `meeting`, `shame`, `smartcat`, `smug`, `tickle`, `slap`, `wasted`, `triggered`, `eject`, `clyde`, `achievement`, `tweet`, `quote`, `petpat`, `phcomment`, `comment`, `respect`")
embed.addField('🔫 | Games[Beta]', "`aki`, `tictactoe`, `fight`, `rps`, `snake`")
embed.addField('📀 | Giveaway', "`start`, `rerroll`, `end`,")
embed.addField('🤖 | ChatBot', "`chatbot`, `setchatbotchannel`, `disablechatbotchannel`")
embed.addField('<:Info:828925156436082709> | Info', "`help`, `emoji`, `invite`, `avatar`, `whois`, `botinfo`, `discord`, `github`, `serverinfo`, `servericon`, `uptime`, `pokemon`, `corona`, `snipe`, `anime`, `membercount`, `country`, `translate`")
embed.addField('<a:music:816253530393411594> | Music', "`play`, `stop`, `pause`, `resume`, `volume`, `clear-queue`, `loop`, `search`, `nowplaying`, `filters`, `lyrics`") 
embed.addField('🐶 | Animals', "`Cat`, `Dog`, `panda`, `fox`, `koala`")
embed.addField('<a:anezukovibing:793287915072913428> | Anime', "`Pat`, `cry`, `hug`, `neko`, `kiss`, `waifu`, `baka`")
embed.addField('<a:star:789719987844546560> | Suggestion', "`setsuggest`, `suggest`, `reply`")
embed.addField('📌 | Ticket', "`ticket-setup`, `close`")
embed.addField('💾 | Backup', "`create-backup`, `info-backup`, `load-backup`")
embed.addField('<:Other:816255803677474816> | Others', "`invite`, `report`, `Support`, `addemoji`, `emojiinfo`")
embed.setImage("https://media.discordapp.net/attachments/815870804439859262/853923202535391232/max-res.gif")

      const invite = new MessageButton()
        .setStyle(`url`)
        .setLabel(`📡 Invite`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=474172478`)
  
        message.channel.send({ button: invite, embed: embed })

embed.setFooter("© ElevenJay", client.user.displayAvatarURL({ dyanmic: true }))
      embed.setTimestamp()
      message.react("<:tc_man:853807856431267890>")
        }
};