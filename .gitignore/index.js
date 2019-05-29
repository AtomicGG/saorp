// Connexion

const Discord = require('discord.js')
const bot = new Discord.Client()
const talkedRecently = new Set();
const prefix = "=";

bot.on('ready', () => {
  bot.user.setGame('Nouveau ? Écris : =Menu SAO')
})

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send("**__۝▬▬๑₪۩۞『SAO Community ©』۞۩₪๑▬▬۝ __**\n\n\n:hand_splayed:`Bienvenue à toi sur『SAO Community [RP]』© !`\n\n\n:white_check_mark:`Pour voir les salons de 『SAO Community [RP]』©, " +
                        "il faudra lire le réglement dans le salon├──📃ʀᴇ̀ɢʟᴇᴍᴇɴᴛ-a-lire, puis appuyer sur la case verte où il est écrit [J'accepte le réglement !] situé tout en haut, pour avoir accès aux " +
                        "différents salons de base !`\n\n\n:book:`N'oubliez pas aussi d'aller voir les salons #├──🎮ᴠᴏs-ᴊᴇᴜx ainsi que #├──📌ᴠᴏs-ɪɴғᴏʀᴍᴀᴛɪᴏɴs et #├──📟ᴠᴏs-sᴀʟᴏɴs permettant d'obtenir les rôles " +
                        "que vous souhaitez avoir, ainsi que de pouvoir avoir accès aux parties du discord que vous souhaitez voir !`\n\n\n:link:`Notre discord permettant de faire votre pub : " +
                        "https://discord.gg/NYH43Ks`\n\n\n:chart_with_upwards_trend:`Le discord principal évolue petit à petit, hésite pas à parler et faire venir tes amis, il est en constante évolution selon vos " +
                        "avis c'est d'ailleurs pour cela que dans le salon #├──👑ɴᴏᴛᴇ-﹠ᴀᴠɪs vous pouvez noter le discord ainsi que donner votre avis !`\n\n\n:writing_hand:`Que vous soyez un débutant ou un expert " +
                        "en RP, vous êtes les bienvenues, vous aurez toutes les informations nécessaire pour comprendre en écrivant sur le discord dans un salon de commande ceci : =Menu SAO`\n\n\n:hand_splayed: `Si vous " +
                        "voulez devenir partenaire avec notre discord, ou pouvoir mettre votre RP dans notre liste de RP, écrivez : =Devenir " +
                        "partenaire`\n\n\nhttps://66.media.tumblr.com/169c730d52faf3f7e5680ed44ec4bf7a/tumblr_nbd255coqa1r4vymlo1_500.gif\n\n\n**__۝▬▬๑₪۩۞『:ribbon:』۞۩₪๑▬▬۝__**")
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Le **BOT** a mis: ' + `[ **${msg.createdTimestamp - message.createdTimestamp}**`+ ' **Ms** ] pour repondre.\nEt l\'**API** a mis: ' + `[ **${Math.round(client.ping)}**`+ ' **Ms** ] pour repondre')
  }
});

bot.login(process.env.TOKEN)

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

// Roll

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Roll")) {
    let modificateur = args.slice(1).join(" : ");
    const roll = Math.floor(100 * Math.random() + 1) + (modificateur * 1)
    if (roll <= 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Votre action est un échec avec un score de :" , + roll)
      .setImage("https://coubsecure-s.akamaihd.net/get/b142/p/coub/simple/cw_timeline_pic/7f1c5d47aa2/484488aa5d0d97af950a4/med_1482439204_image.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if (51 <= roll){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Votre action est une réussite avec un score de :" , + roll)
      .setImage("https://media.giphy.com/media/Cb8ql90aZJYqs/giphy.gif")
      .setTimestamp()
      message.channel.send({embed})
    }
  }
});


////////////////////////////////////////////////////////////PARTIE POUR HORDES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
