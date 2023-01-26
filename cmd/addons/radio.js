const discord = require("discord.js");

const radio = require('discord-radio-player')

const fs = require("fs");
const setings = JSON.parse(fs.readFileSync("./src/addons/radio.json", "utf-8"));

let streamUrl = setings.streamUrl

module.exports.run = async (client, message, args) => {

    let stream = radio.Radio.getStream(streamUrl)
    message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'}))
    //starts playing radio

    var botEmbed = new discord.MessageEmbed()
        .setTitle("exsempel addon !!!!!!")
        .setDescription("This is a command to test the addons")
        .setColor(process.env.COLLOR)
        .setThumbnail(process.env.LOGO)
        .setImage(process.env.BANNER)
        .setTimestamp()
        .setFooter("example addon command")

    return message.channel.send({ embeds: [botEmbed] }).then(msg => {
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    });

}

module.exports.help = {
    name: "radio",
    category: "add ons",
    discription: "This is a Radio Stream add-on created by the team at CubeFM."
}