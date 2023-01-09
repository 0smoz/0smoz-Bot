const { ApplicationCommandType, Colors, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'lien',
    description: '(💡) Permet de voir les lien utile du bot',
    type: ApplicationCommandType.ChatInput,
execute: async (client, interaction, args) => {
        interaction.reply({
            embeds: [{
                title: `Lien de ${client.user.username}`,
                description: `**Bienvenue ${interaction.user} sur la liste des liens utile de ${client.user} !**\n\n*Sur cette page tu pourra trouver toute les liens utile de ${client.user}.*\n\n> - *Support* : [Discord.gg/Laska's](https://discord.gg/ydSvhPUMnn)\n> - *Invite Bot* : [Invitation](https://google.com)\n> - *Top.GG* : [Profile](https://google.com)\n\n**Si tu souhaites poser des questions n'hésite pas à rejoindre le support !**`,
                thumbnail: {
                    url: client.user.displayAvatarURL()
                },
                footer: {
                    text: `Demandé par ${interaction.user.username}`,
                    icon_url: interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                },
                color: Colors.White,
                timestamp: new Date().toISOString(),
            }]
        })
    }     
}