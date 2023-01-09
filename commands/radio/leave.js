const { ApplicationCommandType, Colors, EmbedBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: '(📻) Permet de faire quitter le bot de la vocal',
    type: ApplicationCommandType.ChatInput,
execute: async (client, interaction, args) => {

    const connection = joinVoiceChannel({
        channelId: interaction.channel.id,
        guildId: interaction.channel.guild.id,
        adapterCreator: interaction.channel.guild.voiceAdapterCreator,
    });

    connection.destroy();

    interaction.reply({
        embeds: [{
            description: `${interaction.user} j'ai bien quitté la vocal !`,
            color: Colors.White
        }]
    })
    }     
}