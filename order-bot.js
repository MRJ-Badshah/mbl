const webhookURL = "https://discord.com/api/webhooks/961153693284196382/uRvkolnCzyazGp1WmJlL4diAw7r2eLWmha2EPDYEKsOLWOrct-dg5WQN5Qi_m2eEZNkT" // MANDATORY | Your Webhook URL Here
const avatarURL = "" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

// Getting the elements from the HTML page
const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const listBot = document.getElementById('listbot')
const message = document.getElementById('message')
const proof = document.getElementById('proof')
const paidc = document.getElementById('paidc')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        author: { name: `${username.value}#${usertag.value}` }, 
        title: "New Order!", // Title of the embed 
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0xFF0000, // Color of the embed
        footer: { text: `made by dsc.gg/mblxking | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `[${username.value}#${(usertag.value).toString()}](https://discord.com/users/${userID.value})`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Bot choosen", value: `${listBot.options[listBot.selectedIndex].text}` },
            { name: "paid ?", value: `${paidc.options[paidc.selectedIndex].text}` },
            { name: "proof", value: `${proof.value}` },
           { name: "User Message", value: `${message.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `New order log!`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Order Sent! Make Ticket and enjoy With new bot') // Tells the user that the appeal has been sent.
    console.log('Order sentSent!') // Logs that the order has been sent. (For Your server webhook)
}
