module.exports = {
  name: 'fight',
  aliases: ['mess'],
  description: 'war with others that makes mess with you',
  usage: '[USER]',
  category: 'games',

  run: async (client, message, args) => {
    let target = message.mentions.users.first()
    if (!message.mentions.users.first()) return message.reply('Please Ping Someone!')
    if (!target === client.user.id) return message.reply("I'm Not Good At Playing This Game... JK! Bots Can't Play Games Like This!")
    if (message.mentions.users.first().bot) return message.reply("Bots Can't Play Games Like This!")
    const oppenent = message.mentions.users.first();
if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky');
const x = new fight({
    client: client,
    message: message,
    acceptMessage: '<@' + message.mentions.users.first() + '>' + ' Do You want to mess <@' + message.author + '>', //message sent to see if opponent accepts
    challenger: message.author, //NOT CHANGEABLE
    opponent: message.mentions.users.first(),  //NOT CHANGEABLE
    hitButtonText: 'HIT', //Hit button text (Custom)
    hitButtonColor: 'red', //Hit button color (Custom)
    healButtonText: 'HEAL', //Heal button text (Custom)
    healButtonColor:  'green', //Heal button color (Custom)
    cancelButtonText: 'CANCEL', //Cancel button text (Custom)
    cancelButtonColor: 'blurple', //Cancel button color (Custom)
});
x.start();
  }
}
