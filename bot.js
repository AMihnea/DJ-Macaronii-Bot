const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.login(process.env.MzY3Mjc5NzkxMTU5NjQwMDc0.DL-xQA.bFIFE74qor77yW6rPnTNNWcYS8w);
