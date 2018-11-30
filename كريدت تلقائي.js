const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '#credit @!                 Khader{?}I????#4475 4000') {
    msg.reply('#credit @!                 Khader{?}I????#4475 4000');
  }
});

client.login('MzMxNDUxNTM1NTAwMzc4MTEy.Dtg35Q.8PWZWsBLIgKm_kcoZGpNYYSurQ4');