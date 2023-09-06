const { Client, GatewayIntentBits,EmbedBuilder} = require('discord.js');
require('dotenv').config();
const { token,clientid } = process.env;
require('./register');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    console.log(`\x1b[36m[CREDITS]: This bot was made by RaezDev.\x1b[0m`);
    console.log(`\x1b[35m[STATUS]: Logged in as ${client.user.tag}\x1b[0m`);
    console.log(`\x1b[33m[BOTINVITE]: https://discord.com/api/oauth2/authorize?client_id=${clientid}&permissions=1944479459414&scope=bot%20applications.commands \x1b[0m`)

});

client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
    if (interaction.commandName === "credits") {
        await interaction.reply("Head Developer: <@!816361535814500432> ");
        }
        if (interaction.commandName === "help") {
            botowner = "RaezDev"
            const newembed = new EmbedBuilder()
            .setTitle("Help")
            .setDescription(" **Commands:** \n- /credits\n- /ping\n- /help")

            .setThumbnail(interaction.user.avatarURL())
            .setColor(0x00FFFF)
            .setTimestamp()
            .setFooter({ text: `Made by: ${botowner}`, iconUrl: interaction.user.avatarURL()})
            await interaction.reply({ embeds: [newembed] });
          }
        
});
client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
      if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        message.reply('Hello, I am a JWelcome made by RaezDev. My prefix is `/`. My commands are `/ping`, `/credits` and `/help`');
      }    
});

client.on('guildMemberAdd', async member => {
    const { welcome } = require('./config.js');
    if (!welcome.enabled) return;
    const channel = member.guild.channels.cache.get(welcome.channelId);
    if (!channel) return;
    const message = welcome.message.replace(/{{user}}/g, `<@${member.id}>`);
    channel.send(message);
});

client.on('guildMemberAdd', async member => {
    const { welcomedm } = require('./config.js');
    if (!welcomedm.enabled) return;
    const message = welcomedm.message.replace(/{{user}}/g, `<@${member.id}>`);
    member.send(message);
});

client.on('guildMemberRemove', async member => {
    const { leave } = require('./config.js');
    if (!leave.enabled) return;
    const channel = member.guild.channels.cache.get(leave.channelId);
    if (!channel) return;
    const message = leave.message.replace(/{{user}}/g, `<@${member.id}>`);
    channel.send(message);
});

client.on('guildMemberAdd', async member => {
    const { autoRole } = require('./config.js');
    if (!autoRole.enabled) return;
    const roles = autoRole.roles;
    if (!roles) return;
    member.roles.add(roles);
});
client.on('guildMemberAdd', async member => {
    const { autoNickname } = require('./config.js');
    if (!autoNickname.enabled) return;
    const nickname = autoNickname.nickname;
    if (!nickname) return;
    member.setNickname(nickname);
});
client.on('guildMemberAdd', async member => {
    const { autoMessageEmbedImage } = require('./config.js');
    if (!autoMessageEmbedImage.enabled) return;
    const channel = member.guild.channels.cache.get(autoMessageEmbedImage.channelId);
    if (!channel) return;
    const message = autoMessageEmbedImage.message.replace(/{{user}}/g, `<@${member.id}>`);
    const embed = autoMessageEmbedImage.embed;
    if (!embed) return;
    const title = embed.title.replace(/{{user}}/g, `${member.user.username}`);
    const image = embed.image;
    if (!image) return;
    channel.send({ content: message, embeds: [{ title: title, image: { url: image } }] });
});
client.on('guildMemberRemove', async member => {
    const { autoMessageEmbedImagebye } = require('./config.js');
    if (!autoMessageEmbedImagebye.enabled) return;
    const channel = member.guild.channels.cache.get(autoMessageEmbedImagebye.channelId);
    if (!channel) return;
    const message = autoMessageEmbedImagebye.message.replace(/{{user}}/g, `<@${member.id}>`);
    const embed = autoMessageEmbedImagebye.embed;
    if (!embed) return;
    const title = embed.title.replace(/{{user}}/g, `${member.user.username}`);
    const image = embed.image;
    if (!image) return;
    channel.send({ content: message, embeds: [{ title: title, image: { url: image } }] });
});
client.on('guildMemberAdd', async member => {
    const { autoMessageEmbedImageDm } = require('./config.js');
    if (!autoMessageEmbedImageDm.enabled) return;
    const message = autoMessageEmbedImageDm.message.replace(/{{user}}/g, `<@${member.id}>`);
    const embed = autoMessageEmbedImageDm.embed;
    if (!embed) return;
    const title = embed.title.replace(/{{user}}/g, `${member.user.username}`);
    const image = embed.image;
    if (!image) return;
    member.send({ content: message, embeds: [{ title: title, image: { url: image } }] });
});


client.login(token);