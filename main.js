const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("L'Armeria di Maiko è Online!");
});


client.on('message', message => {
    if(message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//MEME

    if(command === "zeno"){
        client.commands.get("zeno").execute(message, args);
    
    }else if(command === "dani"){
        client.commands.get("dani").execute(message, args);
    
    }else if(command === "paradox"){
            client.commands.get("paradox").execute(message, args);
        
    }else if(command === "michelone"){
        client.commands.get("michelone").execute(message, args);
    
    }else if(command === "tempest"){
        client.commands.get("tempest").execute(message, args);
    }
    
    //SOCIALS E LINK
    
    else if(command === "tiktok"){
        client.commands.get("tiktok").execute(message, args);
    
    }else if(command === "youtube"){
        client.commands.get("youtube").execute(message, args);
    
    }else if(command === "telegram"){
        client.commands.get("telegram").execute(message, args);
    
    }else if(command === "instagram"){
        client.commands.get("instagram").execute(message, args);
    
    }else if(command === "twitch"){
        client.commands.get("twitch").execute(message, args);
    }
    
    //ALTRO
    
    else if(command === "mimetica"){
        client.commands.get("mimetica").execute(message, args);
    }
    
    //ARMERIA
    
    else if(command === "akcw"){
        client.commands.get("akcw").execute(message, args);
    
    }else if(command === "akmw"){
        client.commands.get("akmw").execute(message, args);
    
    }else if(command === "amax"){
        client.commands.get("amax").execute(message, args);
    
    }else if(command === "an94"){
        client.commands.get("an94").execute(message, args);
    
    }else if(command === "aug"){
        client.commands.get("aug").execute(message, args);
    
    }else if(command === "bruen"){
        client.commands.get("bruen").execute(message, args);
    
    }else if(command === "bullfrog"){
        client.commands.get("bullfrog").execute(message, args);
    
    }else if(command === "diamatti"){
        client.commands.get("diamatti").execute(message, args);
    
    }else if(command === "dmr"){
        client.commands.get("dmr").execute(message, args);
    
    }else if(command === "fal"){
        client.commands.get("fal").execute(message, args);
    
    }else if(command === "fara"){
        client.commands.get("fara").execute(message, args);
    
    }else if(command === "ffar"){
        client.commands.get("ffar").execute(message, args);
    
    }else if(command === "fennec"){
        client.commands.get("fennec").execute(message, args);
    
    }else if(command === "gallo"){
        client.commands.get("gallo").execute(message, args);
    
    }else if(command === "grau"){
        client.commands.get("grau").execute(message, args);
    
    }else if(command === "groza"){
        client.commands.get("groza").execute(message, args);
    
    }else if(command === "hdr"){
        client.commands.get("hdr").execute(message, args);
    
    }else if(command === "iso"){
        client.commands.get("iso").execute(message, args);
    
    }else if(command === "jack"){
        client.commands.get("jack").execute(message, args);
    
    }else if(command === "kar"){
        client.commands.get("kar").execute(message, args);
    
    }else if(command === "kilo"){
        client.commands.get("kilo").execute(message, args);
    
    }else if(command === "krig"){
        client.commands.get("krig").execute(message, args);
    
    }else if(command === "m4"){
        client.commands.get("m4").execute(message, args);
    
    }else if(command === "m13"){
        client.commands.get("m13").execute(message, args);
    
    }else if(command === "m16"){
        client.commands.get("m16").execute(message, args);
    
    }else if(command === "mac"){
        client.commands.get("mac").execute(message, args);
    
    }else if(command === "mp5cw"){
        client.commands.get("mp5cw").execute(message, args);
    
    }else if(command === "mp5mw"){
        client.commands.get("mp5mw").execute(message, args);
    
    }else if(command === "mp7"){
        client.commands.get("mp7").execute(message, args);
    
    }else if(command === "oden"){
        client.commands.get("oden").execute(message, args);
    
    }else if(command === "p90"){
        client.commands.get("p90").execute(message, args);
    
    }else if(command === "pellington"){
        client.commands.get("pellington").execute(message, args);
    
    }else if(command === "pkm"){
        client.commands.get("pkm").execute(message, args);
    
    }else if(command === "ppsh"){
        client.commands.get("ppsh").execute(message, args);
    
    }else if(command === "r9"){
        client.commands.get("r9").execute(message, args);
    
    }else if(command === "ram"){
        client.commands.get("ram").execute(message, args);
    
    }else if(command === "ripulitore"){
        client.commands.get("ripulitore").execute(message, args);
    
    }else if(command === "scar"){
        client.commands.get("scar").execute(message, args);
    
    }else if(command === "spr"){
        client.commands.get("spr").execute(message, args);
    
    }else if(command === "stoner"){
        client.commands.get("stoner").execute(message, args);
    
    }else if(command === "swiss"){
        client.commands.get("swiss").execute(message, args);
    
    }else if(command === "sykov"){
        client.commands.get("sykov").execute(message, args);
    
    }else if(command === "uzi"){
        client.commands.get("uzi").execute(message, args);
    
    }else if(command === "val"){
        client.commands.get("val").execute(message, args);
    
    }else if(command === "vlk"){
        client.commands.get("vlk").execute(message, args);
    
    }else if(command === "x16"){
        client.commands.get("x16").execute(message, args);
    
    }else if(command === "xm4"){
        client.commands.get("xm4").execute(message, args);
    
    }else if(command === "zrg"){
        client.commands.get("zrg").execute(message, args);
    }
});


client.login('ODQ4ODk2NDE2MzA2ODIzMTY4.YLTSZQ.rtNnIPYCIlBaPnOIb7J1Et2eGdA');