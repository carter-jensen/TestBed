var Discord = require('discord.js');
var auth = require('./auth.json');

// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Ready!");
});
bot.on('message', message => {
    if (message.content === 'ping'){
        message.reply('pong');
    }
    if (message.content === '!ping'){
        message.channel.send('pong');
    }
});

bot.login(auth.token);