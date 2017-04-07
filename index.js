
// const Discord = require('discord.js') ;
const commando = require('discord.js-commando');
const bot = new commando.Client() ;


bot.registry.registerGroup('random', 'Random') ;
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + "/commands" ) ;



bot.on('message', (message) => {
    if(message.content == 'Ping') {
        //message.reply('pong') ;
        message.channel.sendMessage('pong') ;
    }
});


bot.login( "Mjk5NDkzMzgxODYyNzE5NDg4.C8etnQ.EYxxj8QFIDC5dlPhycjs8dViq9Q" );