const {
    ApplicationCommandType,
    Colors,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require('discord.js');
const playdl = require('play-dl');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require("@discordjs/voice");

module.exports = {
    name: 'chill',
    description: '(📻) Permet d\'écouter une radio chill',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {

        let SetupRadio = interaction.reply({
            embeds: [{
                title: "Choisissez votre radio",
                description: `**Bienvenue ${interaction.user} sur le panel de sélection de radio du bot ${client.user}**\n\n**__Voici les différentes radio disponible :__**\n> - *Lofi HipHop*\n> - *Jazz Lofi*\n> - *R&B HipHop*\n> - *Chillout*\n\n**Remarque :**\nSi vous souhaitez choisir la radio cliquer sur le menu déroulant ci-dessous, ensuite vous deez choisir votre radio que vous voulez écouter !`,
                color: Colors.White,
                footer: {
                    text: `Demandé par ${interaction.user.username}`,
                    icon_url: interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                },
                thumbnail: {
                    url: client.user.displayAvatarURL()
                },
                timestamp: new Date().toISOString(),
            }],
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Radio disponible !')
                    .addOptions({
                        label: "Lofi Hip-Hop",
                        description: "Radio 1",
                        value: "lofi"
                    }, {
                        label: "Jazz",
                        description: "Radio 2",
                        value: "jazz"
                    }, {
                        label: "R&B Hip-Hop",
                        description: "Radio 3",
                        value: "r&b"
                    }, {
                        label: "Chillout",
                        description: "Radio 4",
                        value: "chillout"
                    })
                )
            ]
        })


        const filter = (interaction) => interaction.user.id === interaction.member.id;

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            componentType: 3,
            idle: 3000000,
            dispose: true,
        });

        collector.on('collect', async (menuinteraction) => {
            menuinteraction.deferUpdate()
            if (menuinteraction.values[0] === "lofi") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                let audioStream = await playdl.stream("https://www.youtube.com/watch?v=jfKfPfyJRdk")

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource(audioStream.stream, {
                    inputType: audioStream.type,
                    inlineVolume: true
                })

                connection.subscribe(audioPlayer)
                audioPlayer.play(resource)

                interaction.followUp({
                    embeds: [{
                        description: `${interaction.user} votre radio a été activé dans ${interaction.member.voice.channel}`,
                        color: Colors.White
                    }]
                })
            }
            if (menuinteraction.values[0] === "jazz") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                let audioStream = await playdl.stream("https://www.youtube.com/watch?v=kgx4WGK0oNU")

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource(audioStream.stream, {
                    inputType: audioStream.type,
                    inlineVolume: true
                })

                connection.subscribe(audioPlayer)
                audioPlayer.play(resource)

                interaction.followUp({
                    embeds: [{
                        description: `${interaction.user} votre radio a été activé dans ${interaction.member.voice.channel}`,
                        color: Colors.White
                    }]
                })
            }
            if (menuinteraction.values[0] === "r&b") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                let audioStream = await playdl.stream("https://www.youtube.com/watch?v=Y8LXkDiCsnM")

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource(audioStream.stream, {
                    inputType: audioStream.type,
                    inlineVolume: true
                })

                connection.subscribe(audioPlayer)
                audioPlayer.play(resource)

                interaction.followUp({
                    embeds: [{
                        description: `${interaction.user} votre radio a été activé dans ${interaction.member.voice.channel}`,
                        color: Colors.White
                    }]
                })
            }
            if (menuinteraction.values[0] === "chillout") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                let audioStream = await playdl.stream("https://www.youtube.com/watch?v=36YnV9STBqc")

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource(audioStream.stream, {
                    inputType: audioStream.type,
                    inlineVolume: true
                })

                connection.subscribe(audioPlayer)
                audioPlayer.play(resource)

                interaction.followUp({
                    embeds: [{
                        description: `${interaction.user} votre radio a été activé dans ${interaction.member.voice.channel}`,
                        color: Colors.White
                    }]
                })
            }
        })
        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                initialMessage.edit({
                    content: "Collector Destroyed, Try Again!",
                    components: [],
                });
            }
        })
    }
}