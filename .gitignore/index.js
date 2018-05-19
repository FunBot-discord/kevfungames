const Discord = require(`discord.js`);

var bot = new Discord.Client();
var prefix = ("k!");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[k!help] KevFunBot'} });
    console.log("Le bot est prêt à être utilisé !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    bot.on('message', message => {
        if(message.author.bot) return;
        if(message.content.startsWith("**restart")) {
        if (message.author.id == "310534784394723338") {
                message.channel.send(`Okay, patron je redémarre ! `);
              bot.destroy();
                console.log("déconnection")
                bot.login('MzUyNDI1NzY1MjEzODMxMTg4.DeG69g.xjcejeGRlLNGOK_jyfbrdgPcTSA');
                console.log("Redémarrage patron !")
                console.log(`Je suis connecté !`)
      }else{
        message.channel.send(`Malheureusement ${message.author} vous n'êtes pas mon owner !`)
      }
    }});

    //PING
    if (message.content === prefix + "ping"){
        var ping_embed = new Discord.RichEmbed()
            .setImage('https://media.discordapp.net/attachments/361562283534581771/447385988977655818/1526735517967.png')
            .setColor('#D9F200')
            .addField(':ping_pong: Pong ! ' + Math.round(bot.ping) + 'ms')
        message.channel.sendEmbed(ping_embed);
        console.log('ping pong');
    }

    //HELP
    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
            .setImage('https://media.discordapp.net/attachments/361562283534581771/447388185706627072/Help.png')
            .setColor('#D9F200')
            .addField("Commandes du bot", "-Help \n-Ping \n-Insta \n-Rate \n-Samito")
        message.channel.sendEmbed(help_embed);
        console.log('Help demandé !')
    }

    //INSTA
    if (message.content === prefix + "instagram"){
        var insta_embed = new Discord.RichEmbed()
            .setImage("https://media.discordapp.net/attachments/361560909262487552/447384259225845760/432110822806781953.png")
            .setColor('#D9F200')
            .addField("Voici l'insta officiel de KevFunGames", "https://www.instagram.com/kevfungames/")
        message.channel.sendEmbed(insta_embed);
        console.log("Insta demandé !");
    }
    
    if (message.content === prefix + "insta"){
        var insta2_embed = new Discord.RichEmbed()
            .setImage("https://media.discordapp.net/attachments/361560909262487552/447384259225845760/432110822806781953.png")
            .setColor('#D9F200')
            .addField("Voici l'insta officiel de KevFunGames", "https://www.instagram.com/kevfungames/")
        message.channel.sendEmbed(insta2_embed);
        console.log("Insta demandé !");
    }

    //SAMITO
    if (message.content === prefix + "samito"){
        var samito_embed = new Discord.RichEmbed()
            .setImage('https://cdn.discordapp.com/avatars/392697743140978689/ec213b882d905d3fd10b3fbd54e928c3.png?size=2048')
            .setColor('#42aaf4')
            .addField("Sa chaîne YouTube", "https://m.youtube.com/channel/UCpHS-6DBWbQ6PwFFPL5fHGA")
            .addField("Son discord", "https://discord.gg/FRfakbB")
            .addField("Son compte Instagram", "https://www.instagram.com/samitotm/")
            .addField("Son hashtag", "#samitotm")
        message.channel.sendEmbed(samito_embed);
        console.log("Samito demandé !");
    }

    //RANDOM
    if (message.content === prefix + "rate"){
        random();

        if (randnum == 10){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 9){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 8){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 7){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 6){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 5){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 4){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 3){
            message.reply( "Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 2){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 1){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }

        if (randnum == 0){
            message.reply("Je te note... " + randnum + "/10")
            console.log(randnum + "/10");
        }
    }
    });

    function random(min, max) {
        min = Math.ceil(0);
        max = Math.floor(10);
        randnum = Math.floor(Math.random() * (max - min +1) + min);
    }
