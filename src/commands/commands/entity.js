const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "entity",
        description: "Get a random entity from Grace",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const entitiesJsonData = await fs.readFile("data/entities.json", {encoding: "utf8"});
      const entitiesMap = JSON.parse(entitiesJsonData);
      const entities = entitiesMap["entities"];
      const entity = entities[Math.floor(Math.random() * entities.length)];

      const embed = new EmbedBuilder()
      .setColor(`#f9f338`)
      .setTitle(`${entity.name}`)
      .setImage(`https://cdn.sylvee.xyz/graceentity${entity.num}`)

      await interaction.reply({ embeds: [embed] });
    },
};