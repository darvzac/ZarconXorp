const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "setautorole",
  aliases: ["setar", "ar"],
  category: "moderation",
  description: "Add role which will be given when user join",
run: async (bot, message, args) => {

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**");

    let Role = message.mentions.roles.first();
    if(!Role) return message.reply(`Please mention the role you want to given when user join.`)

  db.set(`autorole_${message.guild.id}`, Role.id)

  message.channel.send(`Successfully set the autorole!!`)
  }
};
