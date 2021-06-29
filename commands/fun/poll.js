const Discord = require("discord.js");

module.exports = {
    name : 'poll',
    run : async(client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have the correct permissions for that!");
  if(!message.channel.permissionsFor(message.guild.me).has("MANAGE_MESSAGES")) return message.channel.send("```Error: Permmission missing! \nI need `MANAGE_MESSAGES` permission this this channel. ```");
  
  let pollchannel = message.mentions.channels.first();
  let firstemoji = args[1];
  let secondemoji = args[2];
  let pollmessage = args.slice(3).join(" ");
  
  
  
  
  if(!pollchannel) {
    const embed1 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setDescription(`<a:wrong:805759412777385984> Please mention the channel first! \n**Usage:** \`x!poll <channel> <first emoji> <second emoji> <message>\` , Emoji must be from this server`)
		.setFooter("made by Kristab </>#1070")
    return message.channel.send(embed1)
  }
  
  if(!firstemoji) {
    const embed3 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setDescription(`<a:wrong:805759412777385984> Please give the first emoji! \n**Usage:** \`x!poll <channel> <first emoji> <second emoji> <message>\` , Emoji must be from this server`)
    return message.channel.send(embed3)
  }
  
  if(!secondemoji) {
    const embed4 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setDescription(`<a:wrong:805759412777385984> Please give the second emoji! \n**Usage:** \`x!poll <channel> <first emoji> <second emoji> <message>\` , Emoji must be from this server`)
    return message.channel.send(embed4)
  }
  
  if(!args.slice(3).join(" ")) {
    const embed2 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setDescription(`<a:wrong:805759412777385984> You did not specify your poll message! \n**Usage:** \`x!poll <channel> <first emoji> <second emoji> <message>\` , Emoji must be from this server`)
    return message.channel.send(embed2)
  }
  

  
    const embed5 = new Discord.MessageEmbed()
    .setTitle(`Poll started by ${message.author.username}`)
    .setDescription(`**${pollmessage}**`)
  
    const sendEmbed = await pollchannel.send(embed5);
  
  
    sendEmbed.react(firstemoji)
  
    sendEmbed.react(secondemoji)
                   
    const embed6 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setDescription("<a:CheckMark:805759338958028800> Poll created successfully! \n\nIf bot don't react to the poll message: \n```Make sure you have given the emoji from this server \nUsage: e?poll <channel> <first emoji> <second emoji> <message>```")
    
    const finalEmbed = await message.channel.send(embed6);
  
    message.delete({ timeout: 10000 })
    finalEmbed.delete({ timeout: 15000 })
    
        
    

}
};