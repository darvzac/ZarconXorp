const backup = require('discord-backup');
const config = require('../../configs/config.json');

module.exports = {
        name: 'create-bck',
				aliases: ["create-backup"],
        description: 'Drops Random Karma Pictures.',
        usage: '',
        accessableby: "",
    run: async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'load-backup '+backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });

}};