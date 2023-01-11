const colors = require('colors');
const { ActivityType} = require('discord.js');

module.exports = {
	name: 'ready',
	once: false,
execute: async (client) => {
    
    console.log('[API] '.bold.green + `Connected to Discord.`.bold.white)
    client.guilds.cache.forEach(guild => {
        client.db.create({
            _id: guild.id
        }).catch(() => {})
    });

    let statuses = ['👀 | Retour ...']
    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*statuses.length)];
            client.user.setPresence({
                activities: [
                    {
                        name: status,
                        type: ActivityType.Watching
                    }
                ],
                status: "idle"
            })
    }, 10000)
    
            let guilds = [];
        client.guilds.cache.forEach(guild => {
            if (guilds.find(owner => owner.ownerID === guild.ownerId)) {
                const data = guilds.find(owner => owner.ownerID === guild.ownerId);
                data.nombre_guild++;
            }
            else {
                guilds.push({
                    ownerID: guild.ownerId,
                    nombre_guild: 1
                })
            }
        });
        console.log(guilds);
    }
}