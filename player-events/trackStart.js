const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, track) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Track Started!')
	.setDescription(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`)
	.setURL(track.url)
	.setThumbnail(track.thumbnail)
	.setFooter('ElevenJay Music System')
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};