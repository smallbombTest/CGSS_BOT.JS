const commando = require('discord.js-commando');

class DiceDrawCommand extends commando.Command {
    constructor( client ){
        super( client, {
            name:'draw',
            group: 'random',
            memberName: 'draw',
            description: 'o re no tan, doro'
        });
    }

    async run(message, args) {
        var cardCount = 1 ;

        if ( isNaN( args ) ) {
            message.reply("error parameter") ;
            return ;
        } 
        
        
        if ( args <= 0 )  cardCount = 1 ;  
        else if ( args > 10 ) cardCount = 10 ;
        else cardCount = args ;

        var s = "" ;
        for ( var i = 1 ; i <= cardCount ; i++ ) {
            var draw = Math.floor(Math.random() * 200) + 1 ;
            if ( draw == 150 || draw == 134 || draw == 1 ) {
                s += "SSR" ;
            }
            else if ( draw > 20 && draw <= 40 ) {
                s += "SR" ;
            }
            else {
                s += "R" ; 
            }

            if ( i != cardCount ) 
                s += "," ;

        }  
        message.reply("you drew the " + s ) ;
    }

}

module.exports = DiceDrawCommand;