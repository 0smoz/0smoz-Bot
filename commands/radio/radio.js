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
    name: 'radio',
    description: '(📻) Permet d\'écouter une radio chill',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {

        let SetupRadio = interaction.reply({
            embeds: [{
                title: "Choisissez votre radio",
                description: `**Bienvenue ${interaction.user} sur le panel de sélection de radio du bot ${client.user}**\n\n**__Voici les différentes radio disponible :__**\n> - *Skyrock*\n> - *NRJ*\n> - *Mouv*\n> - *Fun Radio*\n\n**Remarque :**\nSi vous souhaitez choisir la radio cliquer sur le menu déroulant ci-dessous, ensuite vous deez choisir votre radio que vous voulez écouter !`,
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
                        emoji: "<:skyrck:1053730847368417290>",
                        label: "Skyrock",
                        description: "Radio 1",
                        value: "skyrock"
                    }, {
                        emoji: "<:mouv:1053730842360422512>",
                        label: "NRJ",
                        description: "Radio 2",
                        value: "nrj"
                    }, {
                        emoji: "<:mouv:1053730843501281401>",
                        label: "Mouv",
                        description: "Radio 3",
                        value: "mouv"
                    }, {
                        emoji: "<:FunRadio2modified:1053730845342568459>", 
                        label: "Fun Radio",
                        description: "Radio 4",
                        value: "fun"
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
            if (menuinteraction.values[0] === "skyrock") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource("http://icecast.skyrock.net/s/natio_mp3_128k", {
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
            if (menuinteraction.values[0] === "nrj") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource("http://streamingp.shoutcast.com/NRJ", {
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
            if (menuinteraction.values[0] === "mouv") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();


                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource("http://direct.mouv.fr/live/mouv-midfi.mp3", {
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
            if (menuinteraction.values[0] === "fun") {
                if (!interaction.member.voice.channel) return interaction.followUp("Tu n'est pas connecté en vocal !")
                let audioPlayer = createAudioPlayer();

                const connection = joinVoiceChannel({
                    channelId: interaction.member.voice.channel.id,
                    guildId: interaction.channel.guild.id,
                    adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                })

                const resource = createAudioResource("http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg", {
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