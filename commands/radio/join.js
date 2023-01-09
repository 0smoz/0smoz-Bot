const { ApplicationCommandType, Colors, EmbedBuilder } = require('discord.js');
const playdl = require('play-dl');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require("@discordjs/voice");

module.exports = {
    name: 'join',
    description: '(📻) Permet de faire rejoindre le bot en vocal',
    type: ApplicationCommandType.ChatInput,
execute: async (client, interaction, args) => {

    const connection = joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: interaction.channel.guild.id,
        adapterCreator: interaction.channel.guild.voiceAdapterCreator,
    })

    interaction.reply({
        embeds: [{
            description: `${interaction.user} j'ai bien rejoint ${interaction.member.voice.channel} !`,
            color: Colors.White
        }]
    })
    }     
}