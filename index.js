const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const config = require('./config.js');

const client = new Client({
    intents: [ 
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.GuildScheduledEvent,
        Partials.User,
        Partials.ThreadMember,
    ]
});

client.commands = new Collection();
client.slashCommands = new Collection();

client.on('ready', async () => {

    require("./handler")(client);

    const readyEvent = require('./events/client/ready.js');
    await readyEvent.execute(client);

})

const { connect } = require('mongoose');
connect(config.DatabaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
}).then(() => console.log(("🚥 | The client is now connected to te database")))
client.db = require('./model/Guild');

client.login(config.token)