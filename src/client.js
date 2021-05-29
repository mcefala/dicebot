"use strict";

/**
 * A bot that welcomes new guild members when they join
 */

// Import the discord.js module
const Discord = require("discord.js");

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log("I am ready!");
});
client.on("message", (msg) => {
  if (msg.content.indexOf("/tira") !== -1) {
    let val = [];
    let matches = msg.content.match(/(\d+)d(\d+)?/);
    console.log(matches);
    let n = parseInt(matches[1]);
    let d = parseInt(matches[2]);
    for (let i = 0; i < n; i++) {
      val.push(Math.floor(Math.random() * d) + 1);
    }
    console.log(val);
    msg.reply(val.join(","));
  }
});

// // Log our bot in using the token from https://discord.com/developers/applications
client.login("ODQ4MTcxMDQwNDU4Mjc2ODk2.YLIu1g.zmQuY4ah1VvF9ecCKFfRKr6YZ2U");
