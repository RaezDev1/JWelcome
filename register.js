require("dotenv").config();
const { token, clientId } = process.env;
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
	name: "ping",
	description: "Replies with Pong!(You can use this command to check if the bot is online)",
  },
  
  {
	name: "credits",
	description: "Shows the credits of the bot",
  },
  {
	name: "help",
	description: "Shows the help command",

	
  },
];

const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`\x1b[30m[: Loaded ${data.length} application (/) commands.\x1b[0m`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
