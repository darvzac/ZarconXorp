const Discord = require("discord.js");
const { embedcolor } = require('../../configs/config.json');
module.exports = {
   name: "queue",
        aliases: [],
        category: "music",
        description: "Shows the next Music songs ",
        usage: "",
        accessableby: "", 
    
    run: async (client, message, args) => {
	
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - You're not in a voice channel !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

        const embed2 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - You're not in my voice channel !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

        const embed3 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - No songs currently playing !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

        if (!message.member.voice.channel) return message.channel.send(embed1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(embed3);
        const embed4 = new Discord.MessageEmbed()
        .setTitle(`Queue for ${message.guild.name} ${client.emotes.diskspin}`)
        .setDescription(`**Current**: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - Title: **${track.title}** | Uploaded by: **${track.author}** | Requested by: **${track.requestedBy.username}**`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`))
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();
        message.channel.send(embed4);

    }
};