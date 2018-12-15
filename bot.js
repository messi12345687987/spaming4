const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on('ready', async() => {
var server = "520141788758016019"; 
var channel = "520141896404828170";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one')
    },305);
})
client.on('ready', async() => {
var server = "520141788758016019"; 
var channel = "520141896404828170";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one Messi is one')
    },305);
})




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
