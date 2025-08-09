const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "item",
        description: "Get a random item from Grace",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const itemsJsonData = await fs.readFile("data/items.json", {encoding: "utf8"});
      const itemsMap = JSON.parse(itemsJsonData);
      const items = itemsMap["items"];
      const item = items[Math.floor(Math.random() * items.length)];

      const embed = new EmbedBuilder()
      .setColor(`#f9f338`)
      .setTitle(`${item.name}`)
      .setDescription(`${item.description}`)
      .setThumbnail(`https://cdn.sylvee.xyz/graceitem${item.num}.png`)
      .setFooter({ text: `${item.cost} Bricks`, iconURL: `https://cdn.sylvee.xyz/gracebrick.png` });

      await interaction.reply({ embeds: [embed] });
    },
};