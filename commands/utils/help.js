const { ApplicationCommandType, Colors, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'help',
    description: '(💡) Permet de voir la liste des commandes',
    type: ApplicationCommandType.ChatInput,
execute: async (client, interaction, args) => {
        interaction.reply({
            embeds: [{
                title: `Page d'aide de ${client.user.username}`,
                description: `**Bienvenue ${interaction.user} sur la page d'aide du bot ${client.user} !**\n\n*Voici les différentes commande dispobible sur le bot*\n\n**__Les commandes disponibles sont :__**\n> - </chill:1052520981127766026> : *Permet d'écouter une radio chill*\n> - </bot-infos:1052521731228696627> : *Permet d'avoir les informations utile sur le bot*\n> - </help:1052204209744912494> : *Permet d'avoir la liste des commandes disponible sur le bot.*\n> - </join:1052205384162611210> : *Permet au bot de rejoindre un salon vocal*\n> - </lien:1052610606349430805> : *Liste des liens utiles du bot (invite, ect..)*\n> - </leave:1052206256233906246> : *Permet au bot de quitter le salon vocal.*\n> - </radio:1051522757638226030> : *Permet de choisir la radio que tu souhaites écouter.*\n\n**Je vous souhaites une bonne écoute !**`,
                color: Colors.White,
                thumbnail: {
                    url: client.user.displayAvatarURL()
                },
                footer: {
                    text: `Demandé par ${client.user.username}`,
                    icon_url: interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                },
                timestamp: new Date().toISOString(),
            }],
        })
    }     
}