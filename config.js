module.exports = {


    welcome: { // This is the welcome message sent when a user joins.
        enabled: true, // Set to false to disable.
        channelId: 'Channel ID', // Welcome channel.
        message: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
        
    },
    welcomedm: { // This is the same as welcome, but for when a user joins via DM.
        enabled: true,  // Set to false to disable.
        message: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
    },
    leave: { // This is the same as welcome, but for when a user leaves.
        enabled: true, // Set to false to disable.
        channelId: 'Channel ID',    // Leave channel.
        message: 'Goodbye, {{user}}!', // You can use {{user}} to mention the user that left.
    },
    autoRole: { // This will give the user a role when they join. If you don't want this, remove this section.
        enabled: true, 
        roles: [
            'Role ID', // Add as many roles as you want.
        ],
    },
    autoNickname: { // This will set the user's nickname when they join. If you don't want this, remove this section.
        enabled: true,  // Set to false to disable.
        nickname: 'Member', // The nickname to give the user when they join.
    },
    autoMessageEmbedImage: {
        enabled: true, // Set to false to disable.
        channelId: 'Channel ID', // Welcome channel.
        message: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
        embed: { // Embed settings.
            title: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
            image: 'https://i.imgur.com/4M7IWwP.png', // The image to send. If you don't want an image, remove this line.
        },
    },
    autoMessageEmbedImagebye: {  // This is the same as autoMessageEmbedImage, but for when a user leaves.
        enabled: true, // Set to false to disable.
        channelId: 'Channel ID', // Welcome channel.
        message: 'Goodbye, {{user}}!', // You can use {{user}} to mention the user that joined.
        embed: { // Embed settings.
            title: 'Goodbye, {{user}}!', // You can use {{user}} to mention the user that joined.
            image: 'https://i.imgur.com/4M7IWwP.png', // The image to send. If you don't want an image, remove this line.
        },
    },
    autoMessageEmbedImageDm: { // This is the same as autoMessageEmbedImage, but for when a user joins via DM.
        enabled: true,  // Set to false to disable.
        message: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
        embed: { // Embed settings.
            title: 'Welcome to the server, {{user}}!', // You can use {{user}} to mention the user that joined.
            image: 'https://i.imgur.com/4M7IWwP.png', // The image to send. If you don't want an image, remove this line.
            
        },
    },

    }
