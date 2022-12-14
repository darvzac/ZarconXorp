const Discord = require("discord.js");
const { embedcolor } = require('../../configs/config.json')

module.exports = {
   name: "filter",
        aliases: [],
        category: "music",
        description: "Add / Remove Filters",
        usage: "<filter>",
        accessableby: "", 
   
    run: async (client, message, args) => {
	
		const embed = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - You're not in a voice channel !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed2 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - You are not in the same voice channel !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed3 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - No music currently playing !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed4 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - Please specify a valid filter to enable or disable !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed5 = new Discord.MessageEmbed()
        .setTitle('Something went wrong!')
        .setDescription(`${client.emotes.error} - This filter doesn't exist, try for example (bassboost, pulsator...) !`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed6 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`${client.emotes.success} - I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take.`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		const embed7 = new Discord.MessageEmbed()
        .setTitle('Success!')
        .setDescription(`${client.emotes.success} - I'm **disabling** the filter on the music, please wait... Note : the longer the music is playing, the longer this will take.`)
        .setFooter('ElevenJay Music System')
        .setColor(embedcolor)
        .setTimestamp();

		if (!message.member.voice.channel) return message.channel.send(embed);
		
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);
		
		if (!client.player.getQueue(message)) return message.channel.send(embed3);
		
		if (!args[0]) return message.channel.send(embed4);
		
		const filterToUpdate = Object.keys(client.filters).find((x) => x.toLowerCase() === args[0].toLowerCase());
		
		if (!filterToUpdate) return message.channel.send(embed5);
		
		const filtersUpdated = {};
		
		filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

		client.player.setFilters(message, filtersUpdated);

		if (filtersUpdated[filterToUpdate]) message.channel.send(embed6);
		else message.channel.send(embed7);
	}

};