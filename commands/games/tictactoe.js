const Discord = require("discord.js")
const config = require('../../configs/config.json');
const { TicTacToe } = require("easyfunjs")

module.exports = {
    name: 'ttt',
        description: '',
        aliases: ["ttt", "tictactoe"],
        usage: '<user>',
        accessableby: "",
    
    run: async (client, message, args) => {
        
        if(!args[0]) return message.channel.send("Please Provide someone to battle with.")
        const opponent = message.mentions.users.first()
        const game = new TicTacToe({
            message: message,
            opponent: opponent,
            xColor: 'red',
            oColor: 'blurple',
            xEmoji: '❌',
            oEmoji: '0️⃣',
        })

        game.start()
    }
}