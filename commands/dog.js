const translate = require('google-translate-api');
const Discord = require("discord.js");

var randomCat = require('random-cat');
var randomPuppy = require('random-puppy');

module.exports.run = (client, message, args) => {

    
    if(args.lenght > 1){
        message.reply("aaa");
        return;
    }

    var lang = args[0];
    var text = args.slice(0).join(" ");    

    randomPuppy()
    .then(url => {
        message.channel.send({embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            author: {
              name: "Dog:",
              icon_url: client.user.avatarURL
            },
            image: {
                url: url,
            },
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Dog Generator | Goku"
            }
          }
        });
    })

}