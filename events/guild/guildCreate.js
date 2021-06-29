const chalk = require('chalk');
const Discord = require('discord.js');
const config = require('../../configs/config.json');

module.exports = async (client, guild) => {



  let owner = await guild.members.fetch(guild.ownerID)


  owner.send(
    new Discord.MessageEmbed()
    .setTitle("Thank you for adding me")
    .setDescription(`For a list of my commands, use the command \`${config.prefix}help\`.`)
    .setColor(config.embedcolor)
    .setFooter(client.user.username, client.user.displayAvatarURL())
  )


const { MessageEmbed } = require("discord.js");

  const ID = "855001143762747432";
  const channel = client.channels.cache.get(ID);

  const sowner = await guild.members.fetch(guild.ownerID)

  if (!channel) return;

  const embed = new MessageEmbed()

    .setTitle("Someone just put me in their server!")

    .addField(`Server Name`, `${guild.name}`)

    .addField(`Server ID`, `\`${guild.id}\``)

    .addField(`Server Owner`, `\`${sowner.user.tag}\``)

    .addField(`Owner ID`, `\`${sowner.id}\``)
 
    .addField(`Create On`, `\`${guild.createdAt}\``)
  
    .addField(`Members`, `\`${guild.memberCount}\``)
  
    .setTimestamp()

    .setColor(config.embedcolor)

    .setFooter(`Servers Count - ${client.guilds.cache.size}`);

  channel.send(embed);

const newConfig = {
      GuildID: guild.id,
      prefix: "x!",
    };
    await client.createConfig(newConfig).catch((err) => console.log(err));
    await new storeModel({ GuildID: guild.id });
    guild.members.cache.forEach(async (m) => {
      if (await hasProfile(client, m)) return;
      await client.createUser({
        userID: m.user.id,
      });
    });
  };

async function hasProfile(client, m) {
  const check = await client.getUser(m.user);
  if (!check) return false;
  if (check) return true;


}