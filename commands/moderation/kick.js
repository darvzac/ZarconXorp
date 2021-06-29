const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "kick",
    aliases: [""],
    description: "Kick Mentioned User",
    usage: "<mention|id> [reason]",
    category: "moderation",
    run: async(bot, message, args) => {
      //made  by paraa
      
        let member =  message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!member) return message.channel.send(`Please Mention A User`);

        let reason = args.join(" ").slice(22);
        if(!reason) reason = "No Reason Specified";

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Dont have permission to kick member");

        let e = new MessageEmbed()
        .setTitle(`${member} Kick`)
        .setColor("RED")
        .setDescription(`
            Kicked User: ${member}\n
            Mods: ${message.author}\n
            Reason: ${reason}
        `)
        .setTimestamp(new Date())
      

        let userE = new MessageEmbed()
        .setTitle(`You've Been Kicked From **${message.guild.name}**`)
        .setDescription(`
            Mods: ${message.author}\n
            Reason: ${reason}
        `)
        .setTimestamp(new Date())
    
        message.guild.member(member).kick(reason);
        message.channel.send({e});
        member.send({userE});

    },
};