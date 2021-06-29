const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ZarconXorp Studio'));

app.listen(port, () => console.log(`ZarconXorp listening at http://localhost:${port}`));


const { default_prefix, config, prefix } = require("./configs/config.json");
const fetch = require("node-fetch");
const kntl = require("./configs/config.json")k
const { Database } = require("quickmongo");
const db = new Database(process.env.Zarc);
const dbo = require('old-wio.db');
const dbx = require('quick.db');
const mongoose = require('mongoose');
const fs = require('fs');
const ms = require("ms");
const path = require("path");
const axios = require("axios");
const moment = require("moment");
const Nuggies = require('nuggies');
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
const yts = require('yt-search')
 require('discord-buttons')(client)
const { MessageButton } = require('discord-buttons')
const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()
require('discord-reply');

client.queue = new Map();
client.vote = new Map();


client.commands = new discord.Collection();
client.aliases = new discord.Collection();

const { Player } = require('discord-player');
const player = new Player(client, {
	enableLive: true,
	autoSelfDeaf: true,
	leaveOnEnd: true,
	leaveOnEndCooldown: 5000,
	leaveOnEmpty: true,
	leaveOnStop: true
});
client.player = player;
client.emotes = require('./configs/emotes.json');
client.filters = require('./configs/filters.json');


//Handler
client.categories = fs.readdirSync('./commands/');
['command', 'events'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});


fs.readdir('./player-events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./player-events/${file}`), eventName = file.split(".")[0];
		console.log(`Loading player event ${eventName}`);
		client.player.on(eventName, event.bind(null, client));
	});
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`e?help to see all command`);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

db.on("ready", () => {
	console.log("Database Connected!")
});

//ctabot

client.on("message", async (message) => {
        let channel = await db.get(`chatbot_${message.guild.id}`);
     if(!channel) return;
        var sChannel = message.guild.channels.cache.get(channel);
     if (message.author.bot || sChannel.id !== message.channel.id) return;
     message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.channel.send(`**:x: Please dont mention anyone**`);
    }
    message.channel.startTyping();
    if (!message.content) return message.channel.send("Please say something.");
    scb.chat({message: message.content, name: client.user.username, owner:"**ZarcDev**", user: message.author.id, language:"en"}).then(reply => {
    message.lineReply(reply);
    })
    message.channel.stopTyping();
  });

//LEVEL

const { addexp } = require("./handlers/xp.js")

 client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if(prefix === null) prefix =default_prefix;
  
  if(!message.content.startsWith(default_prefix)) return;
 
})


// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("idle");
    console.log("Eleven Jay ")
});


client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  
  if(!message.content.startsWith(prefix)) return;
 
})


client.on('voiceStateUpdate', (old, New) => {
    if(old.id !== client.user.id) return
    if(old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})

client.on('ready', () => {
var channel = client.channels.cache.get('812592647876247579');
    if (channel) channel.join();
});




client.on('clickButton', async (button) => {
  if (button.id === 'inviteyes') {
    button.defer()
    
    const inviteyb = new discord.MessageEmbed()
    .setTitle("Thanks!")
    .setDescription(`Here Is My Invite Links: \nServer Moderator: **[\`Click Me\`](https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=2147483647)**
    Server Helper: **[\`Click Me\`](https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=4294967287)** \n Recommended: **[\`Click Me\`](https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=8589934591)**`)
    .setColor("RED");

    const joindsc = new MessageButton()
    .setStyle('url')
    .setLabel('Join Our Support Server!')
    .setURL('https://discord.gg/grSrKJBdDq');
    button.message.edit({button: joindsc, embed: inviteyb})

  }
  if(button.id === 'inviteno'){
    button.defer()
    const noooyb = new discord.MessageEmbed()
    .setTitle('Okay Then')
    .setDescription('But Please Join Our Support Server!')
    .setColor("RED");

    const joindsc = new MessageButton()
    .setStyle('url')
    .setLabel('Join Our Support Server!')
    .setUrl('https://discord.gg/grSrKJBdDq');

    button.message.edit({button: joindsc, embed: noooyb})
  }
});



client.login(process.env.TOKEN);