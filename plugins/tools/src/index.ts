import { registerCommand } from "@vendetta/commands";
import { messageUtil } from "@vendetta/metro/common";
let commands = [];

const ApplicationCommandOptionType = {
    SUB_COMMAND: 1,
    SUB_COMMAND_GROUP: 2,
    STRING: 3,
    INTEGER: 4,
    BOOLEAN: 5,
    USER: 6,
    CHANNEL: 7,
    ROLE: 8,
    MENTIONABLE: 9,
    NUMBER: 10,
    ATTACHMENT: 11
};

commands.push(registerCommand({
    name: "randomnumber",
    displayName: "randomnumber",
    description: "Generates a random number.",
    displayDescription: "Generates a random number.",
    options: [
        {
            name: "min",
            displayName: "min",
            description: "The minimum number to be generated.",
            displayDescription: "The maximum number to be generated.",
            required: true,
            type: ApplicationCommandOptionType.INTEGER
        },
        {
            name: "max",
            displayName: "max",
            description: "The maximum number to be generated.",
            displayDescription: "The maximum number to be generated.",
            required: true,
            type: ApplicationCommandOptionType.INTEGER
        },
        {
            name: "ephemeral",
            displayName: "ephemeral",
            description: "Determines if the message is visible to other users.",
            displayDescription: "Determines if the message is visible to other users",
            required: false,
            type: ApplicationCommandOptionType.BOOLEAN,
        }
    ],
    execute: (args, ctx) => {
        try {
        if (args[2]?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, (Math.random() * (args[1].value - args[0].value) + args[0].value));
        } else {
            messageUtil.sendMessage(ctx.channel.id, { (Math.random() * (args[1].value - args[0].value) + args[0].value)) };
        }
    } catch(e) {
        messageUtil.sendBotMessage(ctx.channel.id, e.message);
    }
}
}));

export const onUnload = () => {
    for (const unregisterCommands of commands) unregisterCommands();
}
