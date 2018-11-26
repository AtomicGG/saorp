const Discord = require('discord.js')
const bot = new Discord.Client()
const talkedRecently = new Set();
const prefix = "=";
let userCooldown = {};


bot.on('ready', () => {
  bot.user.setGame('Nouveau ? Écris : =Menu SAO 1')
})


bot.on('ready', function () {

  console.log("Je suis connecté !")
});



bot.on('guildMemberAdd', member => {

  member.createDM().then(channel => {
    return channel.send("**__۝▬▬๑₪۩۞『SAO Community ©』۞۩₪๑▬▬۝ __**\n\n\n:hand_splayed:`Bienvenue à toi sur『SAO Community [RP]』© !`\n\n\n:white_check_mark:`Pour voir les salons de 『SAO Community [RP]』©, il faudra lire le réglement dans le salon├──📃ʀᴇ̀ɢʟᴇᴍᴇɴᴛ-a-lire, puis appuyer sur la case verte où il est écrit [J'accepte le réglement !] situé tout en haut, pour avoir accès aux différents salons de base !`\n\n\n:book:`N'oubliez pas aussi d'aller voir les salons #├──🎮ᴠᴏs-ᴊᴇᴜx ainsi que #├──📌ᴠᴏs-ɪɴғᴏʀᴍᴀᴛɪᴏɴs et #├──📟ᴠᴏs-sᴀʟᴏɴs permettant d'obtenir les rôles que vous souhaitez avoir, ainsi que de pouvoir avoir accès aux parties du discord que vous souhaitez voir !`\n\n\n:link:`Notre discord permettant de faire votre pub : https://discord.gg/NYH43Ks`\n\n\n:chart_with_upwards_trend:`Le discord principal évolue petit à petit, hésite pas à parler et faire venir tes amis, il est en constante évolution selon vos avis c'est d'ailleurs pour cela que dans le salon #├──👑ɴᴏᴛᴇ-﹠ᴀᴠɪs vous pouvez noter le discord ainsi que donner votre avis !`\n\n\n:writing_hand:`Que vous soyez un débutant ou un expert en RP, vous êtes les bienvenues, vous aurez toutes les informations nécessaire pour comprendre en écrivant sur le discord dans un salon de commande ceci : =Menu SAO 1`\n\n\n:hand_splayed: `Si vous voulez devenir partenaire avec notre discord, ou pouvoir mettre votre RP dans notre liste de RP, écrivez : =Devenir partenaire`\n\n\nhttps://66.media.tumblr.com/169c730d52faf3f7e5680ed44ec4bf7a/tumblr_nbd255coqa1r4vymlo1_500.gif\n\n\n**__۝▬▬๑₪۩۞『:ribbon:』۞۩₪๑▬▬۝__**")
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





////////////////////////////////////////////////////////Coups et défenses/////////////////////////////////////////////////////////////////////////////////////

    bot.on('message', message => {
      if (message.content === (prefix) + "Coups et défenses"){
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .addField("Pour effectuer un coup normal :" , "=Coup normal simple : [Vos dégâts]\n=Coup normal amélioré : [Vos dégâts]\n=Coup normal supérieur : [Vos dégâts]\n=Coup normal suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer un coup précis :" , "=Coup précis simple : [Vos dégâts]\n=Coup précis amélioré : [Vos dégâts]\n=Coup précis supérieur : [Vos dégâts]\n=Coup précis suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer un coup d'estoc :" , "=Coup d'estoc simple : [Vos dégâts]\n=Coup d'estoc amélioré : [Vos dégâts]\n=Coup d'estoc supérieur : [Vos dégâts]\n=Coup d'estoc suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer un coup provocateur :" , "=Coup provocateur simple : [Vos dégâts]\n=Coup provocateur amélioré : [Vos dégâts]\n=Coup provocateur supérieur : [Vos dégâts]\n=Coup provocateur suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer un coup circulaire :" , "=Coup circulaire simple : [Vos dégâts]\n=Coup circulaire amélioré : [Vos dégâts]\n=Coup circulaire supérieur : [Vos dégâts]\n=Coup circulaire suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer un cri de provocation :" , "=Cri de provocation simple\n=Cri de provocation amélioré\n=Cri de provocation supérieur\n=Cri de provocation suprême")
        .addBlankField(true)
        .addField("Pour effectuer un combo :" , "=Combo simple : [Vos dégâts]\n=Combo amélioré : [Vos dégâts]\n=Combo supérieur : [Vos dégâts]\n=Combo suprême : [Vos dégâts]")
        .addBlankField(true)
        .addField("Pour effectuer une esquive :" , "=Esquive simple : [Dégâts de l'attaque de l'ennemis]\n=Esquive améliorée : [Dégâts de l'attaque de l'ennemis]\n=Esquive supérieure: [Dégâts de l'attaque de l'ennemis]\n=Esquive suprême : [Dégâts de l'attaque de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un blocage :" , "=Blocage simple : [Dégâts de l'attaque de l'ennemis]\n=Blocage amélioré : [Dégâts de l'attaque de l'ennemis]\n=Blocage supérieur : [Dégâts de l'attaque de l'ennemis]\n=Blocage suprême : [Dégâts de l'attaque de l'ennemis]")
        .addBlankField(true)
        .addField("Pour savoir ce que vous débloquez selon le niveau :" , "=Coups et défenses apprentissage")
           .addBlankField(true)
        .addField("Pour la suite des coups et défenses possibles :" , "=Coups et défenses 2")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})}
      }
    )

  bot.on('message', message => {
      if (message.content === (prefix) + "Coups et défenses 2"){
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .addField("Pour effectuer une parade :" , "=Parade simple : [Dégâts de l'attaque de l'ennemis]\n=Parade améliorée : [Dégâts de l'attaque de l'ennemis]\n=Parade supérieure: [Dégâts de l'attaque de l'ennemis]\n=Parade suprême : [Dégâts de l'attaque de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer une interception [Une seul interception peux se faire sur la même personne pendant une attaque] :" , "=Interception simple : [Dégâts de l'attaque de l'ennemis]\n=Interception améliorée : [Dégâts de l'attaque de l'ennemis]")
         .addBlankField(true)
        .addField("Pour effectuer une fuite [Utilisable que pendant votre tour] :" , "=Fuite simple\n=Fuite améliorée")
         .addBlankField(true)
      .addField("Pour effectuer un coup sauté :" , "=Coup sauté simple : [Vos dégâts]")
          .addBlankField(true)
        .addField("Pour effectuer un coup perce armure :" , "=Coup perce armure simple : [Vos dégâts]")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})}
      }
    )

    bot.on('message', message => {
      if (message.content === (prefix) + "Coups et défenses apprentissage"){
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .addField("Niveau requis pour effectuer un coup normal, un coup sauté :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une esquive :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une interception :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une fuite :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup d'estoc :" , "Niveau 2")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une parade :" , "Niveau 3")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup précis, un coup perce armure :" , "Niveau 4")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un blocage :" , "Niveau 5")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup circulaire :" , "Niveau 6")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup provocateur :" , "Niveau 7")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un crie de provocation :" , "Niveau 8")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un combo :" , "Niveau 10")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})}
      }
    )


//////////////////////////////////////////////////////////Quêtes/////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === (prefix) + "Plaines quêtes accomplies"){
    if (talkedRecently.has(message.author.id+17)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const Expplaines = (Math.floor((30)*Math.random()+30))
    const Colsplaines = (Math.floor((30)*Math.random()+30))
    const Potionsplaines = (Math.floor((2*0.25)*Math.random()))
    const Equipementsplaines = (Math.floor((2*0.80)*Math.random()))
    const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête des plaines :" , "Vos récompenses après l'accomplissement de votre quête sont :")
      .addField("Points d'expérience :" , +Expplaines)
      .addField("Si vous êtes du niveau de 5 ou plus :" , "Vous ne gagnez plus d'expérience")
      .addField("Cols :" , +Colsplaines)
      .addField("Potion faible de soin :" , +Potionsplaines)
      .addField("Equipement en peau arraché au choix :" , +Equipementsplaines)
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+17);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+17);
     }, 86400000);
 }
      })



bot.on('message', message => {
  if (message.content === (prefix) + "Forêt quêtes accomplies"){
    if (talkedRecently.has(message.author.id+17)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const Expplaines = (Math.floor((50)*Math.random()+50))
    const Colsplaines = (Math.floor((50)*Math.random()+50))
    const Potionsplaines = (Math.floor((2*0.25)*Math.random()))
    const Equipementsplaines = (Math.floor((2*0.80)*Math.random()))
    const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête de la forêt :" , "Vos récompenses après l'accomplissement de votre quête sont :")
      .addField("Points d'expérience :" , +Expplaines)
                           .addField("Si vous êtes du niveau de 10 ou plus :" , "Vous ne gagnez plus d'expérience")
      .addField("Cols :" , +Colsplaines)
      .addField("Potion légère de soin :" , +Potionsplaines)
      .addField("Equipement en peau résistante au choix :" , +Equipementsplaines)
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+17);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+17);
     }, 86400000);
 }
      })


      



bot.on('message', message => {
  if (message.content === (prefix) + "Plaines quêtes"){
    if (talkedRecently.has(message.author.id+18)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.pFng")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const Sanglier = (Math.floor((3)*Math.random()+2))
    const Renard = (Math.floor((3)*Math.random()+2))
    const Chien = (Math.floor((3)*Math.random()+2))
    const Bandit = (Math.floor((2)*Math.random()+1))
    const Lapin = (Math.floor((2*0.75)*Math.random()))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête des plaines :" , "Votre quête sera de tuer les cibles suivantes :")
      .addField("Sanglier :" , +Sanglier)
      .addField("Renard :" , +Renard)
      .addField("Chiens errant :" , +Chien)
      .addField("Bandits débutant :" , +Bandit)
      .addField("Lapins géant :" , +Lapin)
      .addField("Les récompenses une fois la quête accomplis :" , "=Plaines quêtes accomplies" )
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+18);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+18);
     }, 86400000);
 }
    })



bot.on('message', message => {
  if (message.content === (prefix) + "Forêt quêtes"){
    if (talkedRecently.has(message.author.id+18)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const Sanglier = (Math.floor((3)*Math.random()+2))
    const Renard = (Math.floor((3)*Math.random()+2))
    const Chien = (Math.floor((2)*Math.random()))
    const Bandit = (Math.floor((2*(0.50))*Math.random()))
    const Lapin = (Math.floor((2*0.75)*Math.random()))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête de la forêt :" , "Votre quête sera de tuer les cibles suivantes :")
      .addField("Loup :" , +Sanglier)
      .addField("Slime :" , +Renard)
      .addField("Bandit experimenté :" , +Chien)
      .addField("Bandit sombre :" , +Bandit)
      .addField("Loup de sang :" , +Lapin)
      .addField("Les récompenses une fois la quête accomplis :" , "=Forêt quêtes accomplies" )
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+18);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+18);
     }, 86400000);
 }
    })


//////////////////////////////////////////////////////////Cueilleur/////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
if (message.content.startsWith(prefix + "Plaines cueillir")) {
  if (talkedRecently.has(message.author.id+19)) {
    const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Cooldown :" , " Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
     .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
     .setTimestamp()
     message.channel.send({embed})
} else {
    const Persils = (Math.floor((3*0.25)*Math.random()+1))
    const Herbes = (Math.floor((3*0.25)*Math.random()+1))
    const Baies = (Math.floor((3*0.25)*Math.random()+1))
    const Exp = (Math.floor((3)*Math.random()+2))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
    .addField("Cueillette :" , "Vous obtenez suite à votre recherche, les objets suivants :" )
    .addField("Persil :" , +Persils)
    .addField("Herbe médicinale faible :" , +Herbes)
    .addField("Baie :" , +Baies)
    .addField("Points d'expérience dans la spécialisation 'Ceuilleur' :" , +Exp)
    .setTimestamp()
    message.channel.send({embed})}
    talkedRecently.add(message.author.id+19);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+19);
     }, 3600000);
 }
})




bot.on('message', message => {
  if (message.content.startsWith(prefix + "Forêt cueillir")) {
    if (talkedRecently.has(message.author.id+19)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
  } else {
    const Persils = (Math.floor((3*0.25)*Math.random()+1))
    const Herbes = (Math.floor((3*0.25)*Math.random()+1))
    const Exp = (Math.floor((4)*Math.random()+4))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
    .addField("Cueillette :" , "Vous obtenez suite à votre recherche, les objets suivants :" )
    .addField("Estragon :" , +Persils)
    .addField("Herbes médicinale :" , +Herbes)
    .addField("Points d'expérience dans la spécialisation 'Ceuilleur' :" , +Exp)
    .setTimestamp()
    message.channel.send({embed})}
    talkedRecently.add(message.author.id+19);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+19);
     }, 3600000);
  }
  })

//////////////////////////////////////////////////////////Mineur/////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Forêt miner")) {
    if (talkedRecently.has(message.author.id+19)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
  } else {
    const Cuivre = (Math.floor((3)*Math.random()+1))
    const CuivreRare = (Math.floor((2*0.90)*Math.random()))
    const Exp = (Math.floor((3)*Math.random()+2))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/steamtradingcards/images/b/bf/Planet_Alcatraz_Background_Coal_mine.jpg/revision/latest?cb=20140807180230")
    .addField("Minage :" , "Vous obtenez suite à votre recherche, les objets suivants :" )
    .addField("Cuivre médiocre :" , +Cuivre)
    .addField("Cuivre commun :" , +CuivreRare)
    .addField("Points d'expérience dans la spécialisation 'Mineur' :" , +Exp)
    .setTimestamp()
    message.channel.send({embed})}
    talkedRecently.add(message.author.id+19);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+19);
     }, 3600000);
  }
  })

  

//////////////////////////////////////////////////////////Bucheron/////////////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Forêt bûcheronner")) {
    if (talkedRecently.has(message.author.id+19)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
  } else {
    const Bois = (Math.floor((3)*Math.random()+1))
    const BoisRare = (Math.floor((2-(0.85))*Math.random()))
    const Exp = (Math.floor((3)*Math.random()+2))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("http://www.wallpapermaiden.com/image/2016/06/12/anime-landscape-forest-tree-paint-anime-894.jpg")
    .addField("Bûcheron:" , "Vous obtenez suite à votre recherche, les objets suivants :" )
    .addField("Bois de frêne médiocre :" , +Bois)
    .addField("Bois de frêne commun :" , +BoisRare)
    .addField("Points d'expérience dans la spécialisation 'Bûcheron' :" , +Exp)
    .setTimestamp()
    message.channel.send({embed})}
    talkedRecently.add(message.author.id+19);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+19);
     }, 3600000);
  }
  })




  


//////////////////////////////////////////////////////////Chasseur/////////////////////////////////////////////////////////////////////////////////////




bot.on('message', message => {
  if (message.content.startsWith(prefix + "Plaines chasser")) {
    if (talkedRecently.has(message.author.id+19)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , "Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
      const Viande = (Math.floor((3)*Math.random()+1))
      const Peau = (Math.floor((2-0.50)*Math.random()))
      const Coeur = (Math.floor((2-0.75)*Math.random()))
      const Oeil = (Math.floor((2-0.75)*Math.random()))
      const Exp = (Math.floor((3)*Math.random()+2))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/dd/First_Floor_forest.png/revision/latest?cb=20140309042049")
      .addField("Chasse :" , "Vous obtenez suite à votre recherche, les objets suivants :" )
      .addField("Viande de lapin :" , +Viande)
      .addField("Peau de lapin :" , +Peau)
      .addField("Coeur de lapin :" , +Coeur)
      .addField("Oeil de lapin :" , +Oeil)
      .addField("Points d'expérience dans la spécialisation 'Chasseur' :" , +Exp)
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+19);
setTimeout(() => {
talkedRecently.delete(message.author.id+19);
}, 3600000);
}
  })




  
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Forêt chasser")) {
    if (talkedRecently.has(message.author.id+19)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , "Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
      const Viande = (Math.floor((3*0.25)*Math.random()+1))
      const Peau = (Math.floor((2-0.50)*Math.random()))
      const Coeur = (Math.floor((2-0.75)*Math.random()))
      const Oeil = (Math.floor((2-0.75)*Math.random()))
      const Exp = (Math.floor((4)*Math.random()+4))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/dd/First_Floor_forest.png/revision/latest?cb=20140309042049")
      .addField("Chasse :" , "Vous obtenez suite à votre recherche, les objets suivants :" )
      .addField("Viande de taupe :" , +Viande)
      .addField("Peau de taupe :" , +Peau)
      .addField("Coeur de taupe :" , +Coeur)
      .addField("Oeil de taupe :" , +Oeil)
      .addField("Points d'expérience dans la spécialisation 'Chasseur' :" , +Exp)
      .setTimestamp()
      message.channel.send({embed})}
      talkedRecently.add(message.author.id+19);
setTimeout(() => {
talkedRecently.delete(message.author.id+19);
}, 3600000);
}
  })


//////////////////////////////////////////////////////////Pêcheur/////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////Monstres////////////////////////////////////////////////////////////////////////////////////


        

bot.on('message', message => {
  if (message.content === (prefix) + "Loup"){
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setTitle("Loup :" , "Aussi rapide que dangereux, il se situe dans la forêt du palier 1 !")
    .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/c/c8/Wolf.png/revision/latest?cb=20140308115118")
    .addField("Point de vie :" , "80")
    .addField("Points de dégâts" , "12")
    .addField("Pour engager le combat :" , "=Loup attaque")
    .addField("Lorsque le loup reçoit un coup :" , "=Loup défense [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Loup récompenses : [Votre niveaux]")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  bot.on('message', message => {
    if (message.content === (prefix) + "Sanglier"){
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setTitle("Sanglier :" , "Assez imposant et résistant, il se situe dans les plaines du palier 1 !")
      .setImage("https://vignette.wikia.nocookie.net/sword-art-online/images/4/4a/Frenzy_Boar.png/revision/latest?cb=20170612194328&path-prefix=fr")
      .addField("Point de vie :" , "25")
      .addField("Points de dégâts" , "4")
      .addField("Pour engager le combat :" , "=Sanglier attaque")
      .addField("Lorsque le sanglier reçoit un coup :" , "=Sanglier défense [Points de dégâts de votre coup]")
      .addField("Les récompenses une fois mort :" , "=Sanglier récompenses : [Votre niveaux]")
      .setTimestamp()
      message.channel.send({embed})
      }
    })
     

    bot.on('message', message => {
      if (message.content === (prefix) + "Renard"){
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setTitle("Renard :" , "Mignon mais dangereux, il se situe dans les plaines du palier 1 !")
        .setImage("https://www.lpo.fr/images/actualites/2018/en_moselle_nuits_nouveau_tranquilles_renard/renard_fabrice_cahez_650_.jpg")
        .addField("Point de vie :" , "20")
        .addField("Points de dégâts" , "5")
        .addField("Pour engager le combat :" , "=Renard attaque")
        .addField("Lorsque le renard reçoit un coup :" , "=Renard défense : [Points de dégâts de votre coup]")
        .addField("Les récompenses une fois mort :" , "=Renard récompenses : [Votre niveaux]")
        .setTimestamp()
        message.channel.send({embed})
        }
      })

      bot.on('message', message => {
        if (message.content === (prefix) + "Chien"){
          const embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setTitle("Chien :" , "Solitaire mais très aggressif, il se situe dans les plaines du palier 1 !")
          .setImage("https://st2.depositphotos.com/2195902/6735/v/950/depositphotos_67358017-stock-illustration-angry-dog.jpg")
          .addField("Point de vie :" , "15")
          .addField("Points de dégâts" , "6")
          .addField("Pour engager le combat :" , "=Chien attaque")
          .addField("Lorsque le chien reçoit un coup :" , "=Chien défense : [Points de dégâts de votre coup]")
          .addField("Les récompenses une fois mort :" , "=Chien récompenses : [Votre niveaux]")
          .setTimestamp()
          message.channel.send({embed})
          }
        })


        bot.on('message', message => {
          if (message.content === (prefix) + "Lapin géant"){
            const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setTitle("Lapin géant :" , "Pacifique mais très protecteur, il se situe dans la forêt du palier 1 !")
            .setImage("https://gor666.files.wordpress.com/2012/04/lapin-tueur-de-paques-i-gor-2012.jpg")
            .addField("Point de vie :" , "60")
            .addField("Points de dégâts" , "12")
            .addField("Pour engager le combat :" , "=Lapin géant attaque")
            .addField("Lorsque le lapin géant reçoit un coup :" , "=Lapin géant défense : [Points de dégâts de votre coup]")
            .addField("Les récompenses une fois mort :" , "=Lapin géant récompenses : [Votre niveaux]")
            .setTimestamp()
            message.channel.send({embed})
            }
          })


          bot.on('message', message => {
            if (message.content === (prefix) + "Slime"){
              const embed = new Discord.RichEmbed()
              .setColor(3447003)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setTitle("Slime :" , "Gelatineux mais aussi collant, il se situe dans la forêt du palier 1 !")
              .setImage("https://png2.kisspng.com/20180402/gee/kisspng-ooze-monster-clip-art-slime-5ac1b13e54af51.5535441915226432623469.png")
              .addField("Point de vie :" , "100")
              .addField("Points de dégâts" , "12")
              .addField("Pour engager le combat :" , "=Slime attaque")
              .addField("Lorsque le slime reçoit un coup :" , "=Slime défense : [Points de dégâts de votre coup]")
              .addField("Les récompenses une fois mort :" , "=Slime récompenses : [Votre niveaux]")
              .setTimestamp()
              message.channel.send({embed})
              }
            })


            bot.on('message', message => {
              if (message.content === (prefix) + "Loup de sang"){
                const embed = new Discord.RichEmbed()
                .setColor(3447003)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setTitle("Loup de sang :" , "Très dangereux mais aussi mortel, il se situe dans la forêt du palier 1 !")
                .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/6/61/Pup.png/revision/latest?cb=20121220052808")
                .addField("Point de vie :" , "400")
                .addField("Points de dégâts" , "20")
                .addField("Pour engager le combat :" , "=Loup de sang attaque")
                .addField("Lorsque le loup de sang reçoit un coup :" , "=Loup de sang défense : [Points de dégâts de votre coup]")
                .addField("Les récompenses une fois mort :" , "=Loup de sang récompenses : [Votre niveaux]")
                .setTimestamp()
                message.channel.send({embed})
                }
              })


              

bot.on('message', message => {
  if (message.content === (prefix) + "Bandit débutant"){
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setTitle("Bandit débutant :" , "Un simple bandit n'étant pas très dangereux, il se situe dans les plaines du palier 1 !")
    .setImage("https://i.pinimg.com/originals/37/cb/69/37cb69474ab104f8ec40ca993101a042.jpg")
    .addField("Point de vie :" , "50")
    .addField("Points de dégâts" , "6")
    .addField("Pour engager le combat :" , "=Bandit débutant attaque")
    .addField("Lorsque le bandit débutant reçoit un coup :" , "=Bandit débutant défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit débutant récompenses : [Votre niveaux]")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  

bot.on('message', message => {
  if (message.content === (prefix) + "Bandit expérimenté"){
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setTitle("Bandit expérimenté :" , "Un bandit connaissant les techniques basiques d'assassin, il se situe dans les plaines du palier 1 !")
    .setImage("http://www.yuimen.net/galerie/albums/userpics/13631/Colm1.png")
    .addField("Point de vie :" , "140")
    .addField("Points de dégâts" , "14")
    .addField("Pour engager le combat :" , "=Bandit expérimenté attaque")
    .addField("Lorsque le bandit expérimenté reçoit un coup :" , "=Bandit expérimenté défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit expérimenté récompenses : [Votre niveaux]")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  
  

bot.on('message', message => {
  if (message.content === (prefix) + "Bandit sombre"){
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setTitle("Bandit sombre :" , "Un bandit encapuchonné et vêtue de noir, il se situe dans la forêt du palier 1 !")
    .setImage("https://i.pinimg.com/originals/89/4b/e4/894be4b076a2543a4ed08bd495fc11a5.jpg")
    .addField("Point de vie :" , "500")
    .addField("Points de dégâts" , "30")
    .addField("Pour engager le combat :" , "=Bandit sombre attaque")
    .addField("Lorsque le bandit sombre reçoit un coup :" , "=Bandit sombre défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit sombre récompenses : [Votre niveaux]")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  
bot.on('message', message => {
  if (message.content === (prefix) + "Urguf le chef"){
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setTitle("Urguf le chef :" , "Le chef des bandits aussi puissant que destructeur, il se situe dans la forêt du palier 1 !")
    .setImage("https://i.pinimg.com/originals/72/8a/14/728a1417c0911e7592c120a8ad08e32a.jpg")
    .addField("Point de vie :" , "500")
    .addField("Points d'armure :" , "10")
    .addField("Points de dégâts" , "50")
    .addField("Pour engager le combat :" , "=Urguf le chef attaque")
    .addField("Lorsque Urguf le chef reçoit un coup :" , "=Urguf le chef défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Urguf le chef récompenses")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  

//////////////////////////////////////////////////////////Monstres récompenses////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Loup récompenses")) {
  let X = args.slice(2).join(" : ");   
    const B = (Math.floor((3*1)*Math.random()))
  const C = (Math.floor((3*1)*Math.random()))
  const D = (Math.floor((2-(0.75))*Math.random()))
  const E = (Math.floor((2-(0.85))*Math.random()))
  const F = (Math.floor((30*1)*Math.random()+30*1))
  const FF = F-(X*3)
  const G = (Math.floor((11*1)*Math.random()+10*1))
  const I = (Math.floor((2-(0.90))*Math.random()))
  const Oeufs = (Math.floor((2-(0.98))*Math.random()))
  if(FF > 0) {
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses :" , "\n:poultry_leg: Viande de loup : " +B+ "\n:knife: Peau de loup : " +C+ "\n:eye: Oeil de loup : " +D+ "\n:cupid: Coeur de loup : " +E+ "\n:gem: Croc de loup : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
    .setTimestamp()
    message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses :" , "\n:poultry_leg: Viande de loup : " +B+ "\n:knife: Peau de loup : " +C+ "\n:eye: Oeil de loup : " +D+ "\n:cupid: Coeur de loup : " +E+ "\n:gem: Croc de loup : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
    .setTimestamp()
    message.channel.send({embed})}
        }
  }) ;

  bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Renard récompenses")) {
  let X = args.slice(2).join(" : ");    
    const B = (Math.floor((3*1)*Math.random()))
    const C = (Math.floor((3*1)*Math.random()))
    const D = (Math.floor((2-(0.75))*Math.random()))
    const E = (Math.floor((2-(0.85))*Math.random()))
    const F = (Math.floor((20*1)*Math.random()+20*1))
    const FF = F-(X*2)
    const G = (Math.floor((6*1)*Math.random()+5*1))
    const Oeufs = (Math.floor((2-(0.99))*Math.random()))
     if(FF > 0) {
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
          .addField("Récompenses :" , "\n:poultry_leg: Viande de renard : " +B+ "\n:knife: Peau de renard : " +C+ "\n:eye: Oeil de renard : " +D+ "\n:cupid: Coeur de renard : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)

      .setTimestamp()
      message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
          .addField("Récompenses :" , "\n:poultry_leg: Viande de renard : " +B+ "\n:knife: Peau de renard : " +C+ "\n:eye: Oeil de renard : " +D+ "\n:cupid: Coeur de renard : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)

      .setTimestamp()
      message.channel.send({embed})}
          }
    }) ;


    bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Sanglier récompenses")) {
  let X = args.slice(2).join(" : ");             
      const B = (Math.floor((3*1)*Math.random()))
      const C = (Math.floor((3*1)*Math.random()))
      const D = (Math.floor((2-(0.75))*Math.random()))
      const E = (Math.floor((2-(0.85))*Math.random()))
      const F = (Math.floor((20*1)*Math.random()+20*1))
      const FF = F-(X*2)
      const G = (Math.floor((6*1)*Math.random()+5*1))
      const Oeufs = (Math.floor((2-(0.99))*Math.random()))
       if(FF > 0) {
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:poultry_leg: Viande de sanglier : " +B+ "\n:knife: Peau de sanglier : " +C+ "\n:eye: Oeil de sanglier : " +D+ "\n:cupid: Coeur de sanglier : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)

        .setTimestamp()
        message.channel.send({embed})}
    if(FF < 0) {
       const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:poultry_leg: Viande de sanglier : " +B+ "\n:knife: Peau de sanglier : " +C+ "\n:eye: Oeil de sanglier : " +D+ "\n:cupid: Coeur de sanglier : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)

        .setTimestamp()
        message.channel.send({embed})}
            }
      }) ;


      bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Chien récompenses")) {
  let X = args.slice(2).join(" : ");                             
        const B = (Math.floor((3*1)*Math.random()))
        const C = (Math.floor((3*1)*Math.random()))
        const D = (Math.floor((2-(0.75))*Math.random()))
        const E = (Math.floor((2-(0.85))*Math.random()))
        const F = (Math.floor((20*1)*Math.random()+20*1))
        const FF = F-(X*2)
        const G = (Math.floor((6*1)*Math.random()+5*1))
        const Oeufs = (Math.floor((2-(0.99))*Math.random()))
         if(FF > 0) {
          const embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                   .addField("Récompenses :" , "\n:poultry_leg: Viande de chien : " +B+ "\n:knife: Peau de chien : " +C+ "\n:eye: Oeil de chien : " +D+ "\n:cupid: Coeur de chien : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)

          .setTimestamp()
          message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                   .addField("Récompenses :" , "\n:poultry_leg: Viande de chien : " +B+ "\n:knife: Peau de chien : " +C+ "\n:eye: Oeil de chien : " +D+ "\n:cupid: Coeur de chien : " +E+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)

          .setTimestamp()
          message.channel.send({embed})}
              }
        }) ;


        bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Lapin géant récompenses")) {
  let X = args.slice(3).join(" : ");                                
          const B = (Math.floor((3*1)*Math.random()))
          const C = (Math.floor((3*1)*Math.random()))
          const D = (Math.floor((2-(0.75))*Math.random()))
          const E = (Math.floor((2-(0.85))*Math.random()))
          const I = (Math.floor((2-(0.90))*Math.random()))
          const F = (Math.floor((35*1)*Math.random()+35*1))
          const FF = F-(X*3)
          const G = (Math.floor((21*1)*Math.random()+20*1))
          const Oeufs = (Math.floor((2-(0.98))*Math.random()))
           if(FF > 0) {
            const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
          .addField("Récompenses :" , "\n:poultry_leg: Viande de lapin géant : " +B+ "\n:knife: Peau de lapin géant : " +C+ "\n:eye: Oeil de lapin géant : " +D+ "\n:cupid: Coeur de lapin géant : " +E+ "\n:gem: Oreille de lapin : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
            .setTimestamp()
            message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
          .addField("Récompenses :" , "\n:poultry_leg: Viande de lapin géant : " +B+ "\n:knife: Peau de lapin géant : " +C+ "\n:eye: Oeil de lapin géant : " +D+ "\n:cupid: Coeur de lapin géant : " +E+ "\n:gem: Oreille de lapin : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
            .setTimestamp()
            message.channel.send({embed})}
                }
          }) ;
        
      
          bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Loup de sang récompenses")) {
  let X = args.slice(4).join(" : ");                                         
            const B = (Math.floor((3)*Math.random()))
            const C = (Math.floor((3)*Math.random()))
            const D = (Math.floor((2-(0.80))*Math.random()))
            const E = (Math.floor((2-(0.90))*Math.random()))
            const I = (Math.floor((2-(0.95))*Math.random()))
            const F = (Math.floor((50)*Math.random()+50))
            const FF = F-(X*4)
            const G = (Math.floor((21)*Math.random()+20))
            const Oeufs = (Math.floor((2-(0.97))*Math.random()))
             if(FF > 0) {
              const embed = new Discord.RichEmbed()
              .setColor(3447003)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:poultry_leg: Viande de loup de sang : " +B+ "\n:knife: Peau de loup de sang : " +C+ "\n:eye: Oeil de loup de sang : " +D+ "\n:cupid: Coeur de loup de sang : " +E+ "\n:gem: Croc de loup de sang : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
              .setTimestamp()
              message.channel.send({embed})}
    if(FF < 0) {
        const embed = new Discord.RichEmbed()
              .setColor(3447003)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:poultry_leg: Viande de loup de sang : " +B+ "\n:knife: Peau de loup de sang : " +C+ "\n:eye: Oeil de loup de sang : " +D+ "\n:cupid: Coeur de loup de sang : " +E+ "\n:gem: Croc de loup de sang : " +I+ "\n:gem: Oeuf déformé : " +Oeufs+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
              .setTimestamp()
              message.channel.send({embed})}
                  }
            }) ;
          
  
            bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Slime récompenses")) {
  let X = args.slice(2).join(" : ");                    
              const B = (Math.floor((3*1)*Math.random()))
              const C = (Math.floor((2-(0.75))*Math.random()))
              const F = (Math.floor((30*1)*Math.random()+30*1))
              const FF = F-(X*3)
              const G = (Math.floor((11*1)*Math.random()+10*1))
              const H = (Math.floor((2-(0.97))*Math.random()))
              const I = (Math.floor((2-(0.97))*Math.random()))
              const J = (Math.floor((2-(0.97))*Math.random()))
              const K = (Math.floor((2-(0.97))*Math.random()))
              const L = (Math.floor((2-(0.97))*Math.random()))
              const M = (Math.floor((2-(0.97))*Math.random()))
              const N = (Math.floor((2-(0.97))*Math.random()))
              const O = (Math.floor((2-(0.97))*Math.random()))
              const P = (Math.floor((2-(0.98))*Math.random()))
              const Q = (Math.floor((2-(0.98))*Math.random()))
               if(FF > 0) {
                const embed = new Discord.RichEmbed()
                .setColor(3447003)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:tea: Gelatine : " +B+ "\n:gem: Pierre de poison faible : " +C+ "\n:scales: Casque rouillé : " +H+ "\n:scales: Epaulières rouillées : " +I+ "\n:scales: Cape endommagée : " +J+ "\n:scales: Plastron rouillé : " +K+ "\n:scales: Gantelets rouillés : " +L+ "\n:scales: Ceinture rouillée : " +M+ "\n:scales: Jambières rouillées : " +N+ "\n:scales: Bottes rouillées : " +O+ "\n:scales: Anneau rouillé : " +P+ "\n:scales: Amulette rouillée : " +Q+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
                .setTimestamp()
                message.channel.send({embed})}
    if(FF < 0) {
        const embed = new Discord.RichEmbed()
                .setColor(3447003)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:tea: Gelatine : " +B+ "\n:gem: Pierre de poison faible : " +C+ "\n:scales: Casque rouillé : " +H+ "\n:scales: Epaulières rouillées : " +I+ "\n:scales: Cape endommagée : " +J+ "\n:scales: Plastron rouillé : " +K+ "\n:scales: Gantelets rouillés : " +L+ "\n:scales: Ceinture rouillée : " +M+ "\n:scales: Jambières rouillées : " +N+ "\n:scales: Bottes rouillées : " +O+ "\n:scales: Anneau rouillé : " +P+ "\n:scales: Amulette rouillée : " +Q+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
                .setTimestamp()
                message.channel.send({embed})}
                    }
              }) ;


              bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit débutant récompenses")) {
  let X = args.slice(3).join(" : ");   
                  const I = (Math.floor((2-(0.95))*Math.random()))
                  const J = (Math.floor((2-(0.97))*Math.random()))
                  const K = (Math.floor((2-(0.97))*Math.random()))
                  const L = (Math.floor((2-(0.97))*Math.random()))
                  const M = (Math.floor((2-(0.97))*Math.random()))
                  const N = (Math.floor((2-(0.97))*Math.random()))
                  const O = (Math.floor((2-(0.97))*Math.random()))
                  const P = (Math.floor((2-(0.97))*Math.random()))
                  const Q = (Math.floor((2-(0.97))*Math.random()))
                   const R = (Math.floor((2-(0.97))*Math.random()))
                    const S = (Math.floor((2-(0.97))*Math.random()))
                     const T = (Math.floor((2-(0.90))*Math.random()))
                      const U = (Math.floor((2-(0.90))*Math.random()))
                      const V = (Math.floor((2-(0.90))*Math.random()))
                const F = (Math.floor((20*1)*Math.random()+20*1))
                const FF = F-(X*2)
                const G = (Math.floor((6*1)*Math.random()+5*1))
                 if(FF > 0) {
                  const embed = new Discord.RichEmbed()
                  .setColor(3447003)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Rapière basique à une main : " +I+ "\n:scales: Casque en peau arraché : " +J+ "\n:scales: Epaulières en peau arrachées : " +K+ "\n:scales: Cape en peau arrachée : " +L+ "\n:scales: Plastron en peau arraché : " +M+ "\n:scales: Gantelets en peau arrachés : " +N+ "\n:scales: Ceinture en peau arrachée : " +O+ "\n:scales: Jambières en peau arrachées : " +P+ "\n:scales: Bottes en peau arrachées : " +Q+ "\n:syringe: Potion faible de soin : " +R+ "\n:meat_on_bone: Ragoût de sanglier : " +S+ "\n:meat_on_bone:  Ragoût de chien : " +T+ "\n:meat_on_bone: Ragoût de renard : " +U+ "\n:meat_on_bone: Ragoût de lapin : " +V+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
                  .setTimestamp()
                  message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
                  .setColor(3447003)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Rapière basique à une main : " +I+ "\n:scales: Casque en peau arraché : " +J+ "\n:scales: Epaulières en peau arrachées : " +K+ "\n:scales: Cape en peau arrachée : " +L+ "\n:scales: Plastron en peau arraché : " +M+ "\n:scales: Gantelets en peau arrachés : " +N+ "\n:scales: Ceinture en peau arrachée : " +O+ "\n:scales: Jambières en peau arrachées : " +P+ "\n:scales: Bottes en peau arrachées : " +Q+ "\n:syringe: Potion faible de soin : " +R+ "\n:meat_on_bone: Ragoût de sanglier : " +S+ "\n:meat_on_bone:  Ragoût de chien : " +T+ "\n:meat_on_bone: Ragoût de renard : " +U+ "\n:meat_on_bone: Ragoût de lapin : " +V+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
                  .setTimestamp()
                  message.channel.send({embed})}
                      }
                }) ;


                bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit expérimenté récompenses")) {
  let X = args.slice(3).join(" : ");               
                  const I = (Math.floor((2-(0.95))*Math.random()))
                  const J = (Math.floor((2-(0.97))*Math.random()))
                  const K = (Math.floor((2-(0.97))*Math.random()))
                  const L = (Math.floor((2-(0.97))*Math.random()))
                  const M = (Math.floor((2-(0.97))*Math.random()))
                  const N = (Math.floor((2-(0.97))*Math.random()))
                  const O = (Math.floor((2-(0.97))*Math.random()))
                  const P = (Math.floor((2-(0.97))*Math.random()))
                  const Q = (Math.floor((2-(0.97))*Math.random()))
                     const R = (Math.floor((2-(0.97))*Math.random()))
                    const S = (Math.floor((2-(0.90))*Math.random()))
                     const T = (Math.floor((2-(0.90))*Math.random()))
                      const U = (Math.floor((2-(0.95))*Math.random()))
                      const V = (Math.floor((2-(0.95))*Math.random()))
                  const F = (Math.floor((30*1)*Math.random()+30*1))
                  const FF = F-(X*3)
                  const G = (Math.floor((11*1)*Math.random()+10*1))
                   if(FF > 0) {
                    const embed = new Discord.RichEmbed()
                    .setColor(3447003)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Epée basique à une main : " +I+ "\n:scales: Casque en peau résistante : " +J+ "\n:scales: Epaulières en peau résistantes : " +K+ "\n:scales: Cape en peau résistante : " +L+ "\n:scales: Plastron en peau résistante : " +M+ "\n:scales: Gantelets en peau résistantes : " +N+ "\n:scales: Ceinture en peau  résistante : " +O+ "\n:scales: Jambières en peau résistantes : " +P+ "\n:scales: Bottes en peau résistantes : " +Q+ "\n:syringe: Potion légère de soin : " +R+ "\n:meat_on_bone: Ragoût de loup : " +S+ "\n:meat_on_bone: Ragoût de taupe : " +T+ "\n:meat_on_bone: Ragoût de lapin géant : " +U+ "\n:meat_on_bone: Ragoût de loup de sang : " +V+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
                    .setTimestamp()
                    message.channel.send({embed})}
    if(FF < 0) {
      const embed = new Discord.RichEmbed()
                    .setColor(3447003)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Epée basique à une main : " +I+ "\n:scales: Casque en peau résistante : " +J+ "\n:scales: Epaulières en peau résistantes : " +K+ "\n:scales: Cape en peau résistante : " +L+ "\n:scales: Plastron en peau résistante : " +M+ "\n:scales: Gantelets en peau résistantes : " +N+ "\n:scales: Ceinture en peau  résistante : " +O+ "\n:scales: Jambières en peau résistantes : " +P+ "\n:scales: Bottes en peau résistantes : " +Q+ "\n:syringe: Potion légère de soin : " +R+ "\n:meat_on_bone: Ragoût de loup : " +S+ "\n:meat_on_bone: Ragoût de taupe : " +T+ "\n:meat_on_bone: Ragoût de lapin géant : " +U+ "\n:meat_on_bone: Ragoût de loup de sang : " +V+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
                    .setTimestamp()
                    message.channel.send({embed})}
                        }
                  }) ;


                  bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit sombre récompenses")) {
  let X = args.slice(3).join(" : ");                       
                      const I = (Math.floor((2-(0.90))*Math.random()))
                  const J = (Math.floor((2-(0.95))*Math.random()))
                  const K = (Math.floor((2-(0.95))*Math.random()))
                  const L = (Math.floor((2-(0.95))*Math.random()))
                  const M = (Math.floor((2-(0.95))*Math.random()))
                  const N = (Math.floor((2-(0.95))*Math.random()))
                  const O = (Math.floor((2-(0.95))*Math.random()))
                  const P = (Math.floor((2-(0.95))*Math.random()))
                  const Q = (Math.floor((2-(0.95))*Math.random()))
                  const R = (Math.floor((2-(0.95))*Math.random()))
                  const S = (Math.floor((2-(0.95))*Math.random()))
                     const T = (Math.floor((2-(0.95))*Math.random()))
                      const U = (Math.floor((2-(0.90))*Math.random()))
                      const V = (Math.floor((2-(0.90))*Math.random()))
                      const W = (Math.floor((2-(0.90))*Math.random()))
                      const XX = (Math.floor((2-(0.90))*Math.random()))
                       const Y = (Math.floor((2-(0.95))*Math.random()))
                        const YY = (Math.floor((2-(0.95))*Math.random()))
                    const F = (Math.floor((55*1)*Math.random()+55*1))
                    const FF = F-(X*4)
                    const G = (Math.floor((21*1)*Math.random()+20*1))
                     if(FF > 0) {
                      const embed = new Discord.RichEmbed()
                      .setColor(3447003)
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Dague basique à une main : " +I+ "\n:scales: Casque en peau résistante : " +J+ "\n:scales: Epaulières en peau résistantes : " +K+ "\n:scales: Cape en peau résistante : " +L+ "\n:scales: Plastron en peau résistante : " +M+ "\n:scales: Gantelets en peau résistantes : " +N+ "\n:scales: Ceinture en peau  résistante : " +O+ "\n:scales: Jambières en peau résistantes : " +P+ "\n:scales: Bottes en peau résistantes : " +Q+ "\n:scales: Anneau du croc : " +R+ "\n:scales: Amulette du croc: " +S+ "\n:syringe: Potion légère de soin : " +T+ "\n:syringe: Potion légère de défense : " +Y+ "\n:syringe: Potion légère de force : " +YY+ "\n:meat_on_bone: Ragoût de loup : " +U+ "\n:meat_on_bone: Ragoût de taupe : " +V+ "\n:meat_on_bone: Ragoût de lapin géant : " +W+ "\n:meat_on_bone: Ragoût de loup de sang : " +XX+ "\n:sparkles: Points d'expérience : " +FF+ "\n:large_orange_diamond: Cols : " +G)
                      .setTimestamp()
                      message.channel.send({embed})}
    if(FF < 0) {
       const embed = new Discord.RichEmbed()
                      .setColor(3447003)
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "\n:scales: Dague basique à une main : " +I+ "\n:scales: Casque en peau résistante : " +J+ "\n:scales: Epaulières en peau résistantes : " +K+ "\n:scales: Cape en peau résistante : " +L+ "\n:scales: Plastron en peau résistante : " +M+ "\n:scales: Gantelets en peau résistantes : " +N+ "\n:scales: Ceinture en peau  résistante : " +O+ "\n:scales: Jambières en peau résistantes : " +P+ "\n:scales: Bottes en peau résistantes : " +Q+ "\n:scales: Anneau du croc : " +R+ "\n:scales: Amulette du croc: " +S+ "\n:syringe: Potion légère de soin : " +T+ "\n:syringe: Potion légère de défense : " +Y+ "\n:syringe: Potion légère de force : " +YY+ "\n:meat_on_bone: Ragoût de loup : " +U+ "\n:meat_on_bone: Ragoût de taupe : " +V+ "\n:meat_on_bone: Ragoût de lapin géant : " +W+ "\n:meat_on_bone: Ragoût de loup de sang : " +XX+ "\n:sparkles: Points d'expérience : 0\n:large_orange_diamond: Cols : " +G)
                      .setTimestamp()
                      message.channel.send({embed})}
                          }
                    }) ;






                    bot.on('message', message => {
                     
                      if (message.content.startsWith(prefix + "Urguf le chef récompenses")) {
                     
                      const B = (Math.floor((3)*Math.random()))
                      const C = (Math.floor((3)*Math.random()))
                      const D = (Math.floor((2*(0.75))*Math.random()))
                      const E = (Math.floor((2*(0.85))*Math.random()))
                      const F = (Math.floor((201)*Math.random()+200))
                      const G = (Math.floor((101)*Math.random()+100))
                        const embed = new Discord.RichEmbed()
                        .setColor(3447003)
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                        .addField("Récompenses :" , "Suite à votre combat contre Urguf le chef, vous obtenez :")
                        .addField("Points d'expérience :" , +F)
                       .addField("Si vous êtes du niveau de 25 ou plus :" , "Vous ne gagnez plus d'expérience sur ce monstre")
                        .addField("Cols :" , +G)
                        .setTimestamp()
                        message.channel.send({embed})
                        }
                  }) ;
                    
 bot.on('message', message => {
    if (message.content === prefix + "Citrouille vivante récompenses") {    
    const B = (Math.floor((0)*Math.random()+1))
    const C = (Math.floor((2-(0.95))*Math.random()))
    const D = (Math.floor((2-(0.95))*Math.random()))
    const E = (Math.floor((2-(0.95))*Math.random()))
    const F = (Math.floor((51)*Math.random()+50))
    const G = (Math.floor((101)*Math.random()+100))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("http://1.bp.blogspot.com/-RCLXqEBAq9U/TnKztk9artI/AAAAAAAA0_k/O3qQtgWEk5Y/s1600/intercambiosvirtuales-00009.png")
      .addField("Récompenses :" , "\n:scales: Bonbon étrange : " +B+ "\n:scales: Masque de clown tueur : " +C+ "\n:scales: Masque de zombie : " +D+ "\n:cupid: Masque de citrouille : " +E+ "\n:sparkles: Points d'expérience : " +F+ "\n:large_orange_diamond: Cols : " +G)
      .setTimestamp()
       message.channel.send({embed})
                        }
                  }) ;

 bot.on('message', message => {
                                         if (message.content === prefix + "Citrouille vivante géante récompenses") {                           
    const B = (Math.floor((2*1)*Math.random()+3))
    const C = (Math.floor((2-(0.80))*Math.random()))
    const D = (Math.floor((2-(0.80))*Math.random()))
    const E = (Math.floor((2-(0.80))*Math.random()))
    const F = (Math.floor((201)*Math.random()+200))
    const G = (Math.floor((401)*Math.random()+400))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("http://1.bp.blogspot.com/-RCLXqEBAq9U/TnKztk9artI/AAAAAAAA0_k/O3qQtgWEk5Y/s1600/intercambiosvirtuales-00009.png")
      .addField("Récompenses :" , "\n:scales: Bonbon étrange : " +B+ "\n:scales: Masque de clown tueur : " +C+ "\n:scales: Masque de zombie : " +D+ "\n:cupid: Masque de citrouille : " +E+ "\n:sparkles: Points d'expérience : " +F+ "\n:large_orange_diamond: Cols : " +G)
      .setTimestamp()
        message.channel.send({embed})
                        }
                  }) ;

//////////////////////////////////////////////////////////Monstres attaques////////////////////////////////////////////////////////////////////////////////////
  


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Loup attaque")) {
    const Dégâts = 12
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Loup :" , "Le loup sautant sur vous, il n'arrive pas à vous toucher et retombe lourdement au sol, vous avez de la chance !")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Loup :" , "Le loup bondit sur vous et vous mord le corps sauvagement les yeux rouges, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Renard attaque")) {
    const Dégâts = 5
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/3)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Renard :" , "Le renard d'un coup rapide de griffe, il n'arrive tous de même pas à vous toucher, vous avez de la chance !")
      message.channel.send({embed})}
      if (26 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Renard :" , "Le renard sors ses griffes et arrive à rapidement toucher votre jambe en y laissant des entailles, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Sanglier attaque")) {
    const Dégâts = 4
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Sanglier :" , "Le sanglier fonçant à toute vitesse glisse et tombe sur le sol, vous avez de la chance !")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Sanglier :" , "Le sanglier vous charge dessus et le choc est assez puissant ce qui vous fait tomber, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Chien attaque")) {
    const Dégâts = 6
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Chien :" , "Le chien essaye de vous mordre la jambe mais il ne fait que mordre le vent, vous avez de la chance !")
      message.channel.send({embed})}
      if (26 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Chien :" , "Le chien saute et mord votre bras en serrant fort ses machoîres, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Loup de sang attaque")) {
    const Dégâts = 25
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/1.5)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Loup de sang :" , "Le loup de sang hurle et essaye de bondir sur vous et mordre votre cou, mais il perd l'équilibre et retombe, vous avez de la chance !")
      message.channel.send({embed})}
      if (26 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Loup de sang :" , "Le loup de sang hurle ce qui détruit vos oreilles, il se met à bondir sur vous avec les crocs d'une couleur rouge, et vous mord le cou, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Slime attaque")) {
    const Dégâts = 12
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Slime :" , "Le slime essaye de se rapprocher de vous pour s'accrocher à vous, mais il est trop lent, vous avez de la chance !")
      message.channel.send({embed})}
      if (26 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Slime :" , "Le slime se rapproche de vous et arrive à s'accrocher à vous en tentant de vous étouffer, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Lapin géant attaque")) {
    const Dégâts = 12
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/3)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Lapin géant :" , "Le lapin géant bondit plusieurs fois vers votre direction, mais il s'épuise et n'arrive pas à vous griffer, vous avez de la chance !")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Lapin géant :" , "Le lapin géant bondit d'un coup sec sur vous et griffe tous votre corps en alternant entre sa patte gauche et droite, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Bandit débutant attaque")) {
    const Dégâts = 6
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/4)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit débutant :" , "Le bandit débutant sors sa dague et tente de foncer sur vous mais il tombe, vous avez de la chance !")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit débutant :" , "Le bandit débutant sors et serre fermement sa dague en la plantant sur vous, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Bandit expérimenté attaque")) {
    const Dégâts = 14
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit expérimenté :" , "Le bandit expérimenté sors deux dagues et s'approche de vous rapidement, mais il ralentis en voyant qu'il perd l'équilibre, vous avez de la chance !")
      message.channel.send({embed})}
      if (26 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit expérimenté :" , "Le bandit expérimenté sors ses deux dagues et les plante sur un endroit vital en souriant, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Citrouille vivante attaque")) {
    const Dégâts = 20
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const Z = (Math.floor((2)*Math.random()+2))
     if (B < 30){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Citrouille vivante :" , "La citrouille vivante se met à faire tournoyer ses genre de racines mais elle ne touche personne, vous avez de la chance !")
      message.channel.send({embed})}
      if (31 < B & B < 90){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante :" , "La citrouille vivante s'avance rapidement grâce à ses racines et met un violent coup rapide, elle inflige " +A+ " point de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          if (91 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante :" , "La citrouille vivante réussis à tounoyer sur elle-même rapidement du bout de ses lianes, elle inflige " +A+ " points de dégâts à " +Z+ " alliés")
        .setTimestamp()
           message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Citrouille vivante géante attaque")) {
    const Dégâts = 200
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const Z = (Math.floor((2)*Math.random()+2))
     if (B < 20){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Citrouille vivante géante :" , "La citrouille vivante géante se met à faire tournoyer ses genre de racines mais elle ne touche personne, vous avez de la chance !")
      message.channel.send({embed})}
      if (21 < B & B < 90){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante géante :" , "La citrouille vivante géante s'avance rapidement grâce à ses racines et met un violent coup rapide, elle inflige " +A+ " point de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          if (91 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante géante :" , "La citrouille vivante géante réussis à tounoyer sur elle-même rapidement du bout de ses lianes, elle inflige " +A+ " points de dégâts à " +Z+ " alliés")
        .setTimestamp()
          message.channel.send({embed})}
          }
    }
);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Bandit sombre attaque")) {
    const Dégâts = 30
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit sombre :" , "Le bandit sombre tente de planter deux dagues étranges sur votre torse, mais il ne fait que abîmer votre armure, vous avez de la chance !")
      message.channel.send({embed})}
      if (11 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit sombre :" , "Le bandit sombre sors deux dagues très fines et aiguisées en se jetant sur vous d'une vitesse fulgurante et vous plante profondément en riant, il inflige " +A+ " points de dégâts")
        .setTimestamp()
         message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Urguf le chef attaque")) {
    const Dégâts = 50
     const A = (Math.floor(((Dégâts*3))*Math.random()+(Dégâts/5)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Urguf le chef :" , "Urguf le chef sors sa hache à deux mains imposante et tente de la lancer, mais il surestime sa force et sa hache reste dans ses mains, vous avez de la chance !")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Urguf le chef :" , "Urguf crie de rage avec sa hache à deux mains avant de courir et de vous mettre un coup puissant horizontal, vous faisant tomber et voler assez loin, il inflige " +A+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



//////////////////////////////////////////////////////////Monstres défense////////////////////////////////////////////////////////////////////////////////////


        

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Loup défense")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor(((degats*2))*Math.random()+degats*1))
      const B = (Math.floor((100)*Math.random()+1))
      const C = (Math.floor((16)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Loup :" , "Le loup tente de sauter de côté pour esquiver le coup, mais il n'est pas assez rapide et réactif et se prend votre coup, vous lui infligez " +A+ " points de dégâts")
       .setTimestamp()
       message.channel.send({embed})}
      if (51 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Loup :" , "Le loup saute sur le côté et arrive à esquiver votre coup, il se met à mordre votre jambe profondément, il inflige " +C+ " points de dégâts")
         .setTimestamp()
         message.channel.send({embed})}
      }
   }
);

       
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Sanglier défense")) {
    let Dégâts = args.slice(2).join(" : ");
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Sanglier :" , "Le sanglier tente de reculer face à votre attaque mais il ne recule pas assez et se prend votre coup, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Sanglier :" , "Le sanglier recule assez pour que vous n'arrivez pas à le toucher, il ne prend aucun dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Renard défense")) {
    let Dégâts = args.slice(2).join(" : ");
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Renard :" , "Le renard tente d'esquiver votre coup en courant vers vous mais il se prend votre coup malgrè sa vitesse, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Renard :" , "Le renard cours rapidement vers vous lors de votre attaque et vous n'arrivez pas à le toucher à cause de cette rapidité, il ne prend aucun dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Chien défense")) {
    let Dégâts = args.slice(2).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((12)*Math.random()+1))
     if (B < 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Chien :" , "Le chien tente de hurler et d'aboyer assez fort pour vous faire rater, mais vous continuez votre coup qui le touche, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (76 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Chien :" , "Le chien hurle ce qui vous arrête dans votre attaque et il se met à foncer vers vous avant de mordre votre jambe, il inflige " +C+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Lapin géant défense")) {
    let Dégâts = args.slice(3).join(" : ");
     const A = (Math.floor(((Dégâts*1.25))*Math.random()+(Dégâts/3)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((Dégâts/10)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Lapin géant :" , "Le lapin géant met ses pattes au dessus de lui comme un blocage, mais votre coup reste efficace malgrè ceci, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (70 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Lapin géant :" , "Le lapin géant met ses pattes d'une manière étrange au dessus de sa tête ce qui réduis énormément les dégâts qu'il subit, vous lui infligez " +C+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Slime défense")) {
    let Dégâts = args.slice(2).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((8)*Math.random()+4))
     if (B < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Slime :" , "Le slime se déplace de côté pour essayer de ne pas prendre le coup, mais il est trop lent et se le prend, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (61 < B & B < 80){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Slime :" , "Le slime se déplace sur le côté lors de votre coup et essaye de cracher un genre de projectile d'acide qui ne vous atteint pas, vous n'arrivez pas à le toucher, il ne prend aucun dégâts")
        .setTimestamp()
        message.channel.send({embed})}
        if (81 < B){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(3447003)
          .addField("Slime :" , "Le slime se déplace sur le côté lors de votre coup et crache un genre de projectile d'acide sur vous, vous n'arrivez pas à le toucher, il ne prend aucun dégâts et il inflige" +C+ " points de dégâts")
          .setTimestamp()
          message.channel.send({embed})}
            }
          }
);


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Citrouille vivante défense")) {
    let Dégâts = args.slice(3).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((8)*Math.random()+4))
     if (B < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Citrouille vivante :" , "La citrouille vivante n'est pas assez réactive et se prend votre coup de plein fouet qui inflige " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (61 < B & B < 90){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante :" , "La citrouille vivante bouge rapidement à l'aide de ses racines sur le côté en voyant votre coup")
        .setTimestamp()
        message.channel.send({embed})}
        if (91 < B){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(3447003)
          .addField("Citrouille vivante :" , "La citrouille vivante saute avant votre coup et retombe violemment sur le sol, faisant tomber le joueur l'ayant attaquer, l'empêchant d'attaquer à son prochain tour")
          .setTimestamp()
       message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Citrouille vivante géante défense")) {
    let Dégâts = args.slice(4).join(" : ");
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/3)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((8)*Math.random()+4))
     if (B < 40){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Citrouille vivante géante :" , "La citrouille vivante géante n'est pas assez réactive et se prend votre coup de plein fouet qui inflige " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (41 < B & B < 86){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Citrouille vivante géante :" , "La citrouille vivante géante vivante bouge rapidement à l'aide de ses racines sur le côté en voyant votre coup")
        .setTimestamp()
        message.channel.send({embed})}
        if (85 < B){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(3447003)
          .addField("Citrouille vivante géante :" , "La citrouille vivante géante saute avant votre coup et retombe violemment sur le sol, faisant tomber tous le monde et lui offrant une attaque")
          .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Loup de sang défense")) {
    let Dégâts = args.slice(4).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/1.5)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((30)*Math.random()+15))
     if (B < 70){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Loup de sang :" , "Le loup de sang essaye d'attraper votre arme avec sa gueule et ses crocs, mais il y arrive pas et se prend votre coup, vous lui infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (71 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Loup de sang :" , "Le loup de sang arrive à attraper votre arme dans sa gueule, entre ses crocs, et se jette sur vous et votre cou qu'il mord, il inflige " +C+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit débutant défense")) {
    let Dégâts = args.slice(3).join(" : ");
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     if (B < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit débutant :" , "Le bandit débutant tente sous la peur de courir dans n'importe quel direction pour esquiver votre coup, mais il se le prend, vous infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (51 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit débutant :" , "Le bandit débutant court rapidement en voyant votre coup, ne sachant pas vraiment faire d'esquives, il ne prend aucun dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit expérimenté défense")) {
    let Dégâts = args.slice(3).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((15)*Math.random()+5))
     if (B < 70){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit expérimenté :" , "Le bandit expérimenté tente de parer votre coup à l'aide de ses deux dagues, mais votre attaque est assez puissante et il se la prend, vous infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (71 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit expérimenté :" , "Le bandit expérimenté arrive à parer votre coup en bloquant votre coup entre ses deux dagues, il vous met un coup de pied avant de profiter de cette occasion pour planter ses deux dagues, il inflige " +C+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Bandit sombre défense")) {
    let Dégâts = args.slice(3).join(" : ");
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/1.5)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((61)*Math.random()+40))
     if (B < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Bandit sombre :" , "Le bandit sombre souris avant d'essayer de parer votre coup d'un coup sec et rapide, mais ses dagues ne touchent même pas votre arme, vous infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (61 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Bandit sombre :" , "Le bandit sombre sors légèrement sa langue avant de foncer sur votre arme et de la bloquer entre ses dagues, il retourne votre propre arme contre vous avant de vous l'enfoncer sur vous-même, il inflige " +C+ " points de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Urguf le chef défense")) {
    let Dégâts = args.slice(4).join(" : ");
     const A = (Math.floor(((Dégâts*2.25))*Math.random()+(Dégâts/2)))
     const B = (Math.floor((100)*Math.random()+1))
     const C = (Math.floor((50)*Math.random()+25))
     if (B < 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Urguf le chef :" , "Urguf tente de mettre un coup de manche avec sa hache pour vous faire tomber pendant votre coup, mais il se rate et se prend le coup de plein fouet, vous infligez " +A+ " points de dégâts")
      message.channel.send({embed})}
      if (76 < B){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Urguf le chef :" , "Urguf donne un violent coup de manche sur votre arme lorsque vous tentez de lui mettre un coup, le choc de l'arme et du manche vous fait tombé par terre et il en profite pour mettre un violent coup vertical, il inflige " +C+ " point de dégâts")
        .setTimestamp()
        message.channel.send({embed})}
          }
    }
);


///////////////////////////////////////////////////////////Personnages//////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === (prefix) + "Yato"){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(1447003)
     .addField("Pseudo :" , "Yato")
     .addField("Description physique :" , "Il est blond aux yeux bleus, il est souvent habillé d'un sweat noir en jeu histoire de passé inaperçus. Plutôt mince, assez grand, pas très musclé, il est très agile et rapide. Son accessoire favoris c'est sa chaîne autour du cou")
     .setImage("https://img00.deviantart.net/400e/i/2017/044/3/5/yato__noragami__by_rinco_xv-d8dz2wk.png")
     .setTimestamp()
     message.channel.send({embed})
    }
  })

///////////////////////////////////////////////////////////Info serveur//////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === (prefix) + "serveur"){
   const embed = new Discord.RichEmbed()
  .setTitle("『SAO Community [RP]』©")
  .setAuthor(message.author.username , message.author.avatarURL)
  .setColor(0x00AE86)
  .setDescription("Bienvenue à toi **" + message.author.username + "** sur le Discord !")
  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setImage("https://pre00.deviantart.net/c70a/th/pre/f/2013/211/c/b/sao_soft_background_by_animefanart_toh-d6fxzux.jpg")
  .setThumbnail("https://vignette.wikia.nocookie.net/sword-art-online-chronicles/images/5/50/Wiki-background/revision/latest?cb=20150626221644")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Le site est à votre disposition :","http://fr.sao-rp.wikia.com/")
    .addField("Invitation vers le discord :", "https://discord.gg/QEYaNfQ")
    .addField("Nombre de citoyens :", message.guild.memberCount)
    message.channel.send({embed});
  }
})



//////////////////////////////////////////////////////////Plaines/////////////////////////////////////////////////////////////////////////////////////



 

      



bot.on('message', message => {
  if (message.content === (prefix) + "Plaines"){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
    .setColor(1447003)
    .setTitle("Plaines :" , "Bienvenue dans ce lieu aussi calme qu'hostile pour les débutants !")
    .addField("Pour combattre :" , "=Plaines combat : [Nombre de joueurs dans votre groupe]")
    .addField("Pour cueillir, niveau 1 minimum requis dans la spécialisation 'Cueilleur' :", "=Plaines cueillir")
    .addField("Pour chasser, niveau 1 minimum requis dans la spécialisation 'Chasseur' :", "=Plaines chasser")
    .addField("Pour avoir une quête :", "=Plaines quêtes")
    .setImage("https://img00.deviantart.net/afd6/i/2015/006/0/7/sao_background_by_cavallovapore-d8cxg02.png")
    .setTimestamp()
    message.channel.send({embed})
  }
})
//////////////////////////////////////////////////////////Plaines Combat/////////////////////////////////////////////////////////////////////////////////////

                                        bot.on('message', message => {
                                             let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                          if (message.content.startsWith(prefix + "Plaines combat")) {
                                            let Z = args.slice(2).join(" : ");
                                            if (talkedRecently.has(message.author.id+1000)) {
    const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
     .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
     .setTimestamp()
     message.channel.send({embed})
} else {
                                              const B = (Math.floor(((Z*1)+1)*Math.random()+0))
                                              const C = (Math.floor(((Z*1)+1)*Math.random()+0))
                                              const D = (Math.floor(((Z*1)+1)*Math.random()+0))
                                              const E = (Math.floor((((Z*1)+1)*(0.80))*Math.random()+0))
                                              const F = (Math.floor((((Z*1)+1)*(0.60))*Math.random()+0))
                                               const embed = new Discord.RichEmbed()
                                               .setAuthor(message.author.username , message.author.avatarURL)
                                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                               .setColor(3447003)
                                               .addField("Plaines :" , "En marchant dans les plaines, vous rencontrez les ennemis suivants")
                                               .addField("Renard :" , +B)
                                               .addField("Sanglier :" , +C)
                                               .addField("Chien :" , +D)
                                               .addField("Lapin géant :" , +E)
                                               .addField("Bandit débutant :" , +F)
                                               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
                                               .setTimestamp()
                                                   message.channel.send({embed})}
    talkedRecently.add(message.author.id+1000);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+1000);
     }, 900000);
  }
  })

//////////////////////////////////////////////////////////Forêt/////////////////////////////////////////////////////////////////////////////////////


                                                bot.on('message', message => {
                                                if (message.content === (prefix) + "Forêt"){
                                                   const embed = new Discord.RichEmbed()
                                                   .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setColor(1447003)
                                                  .setTitle("Forêt :" , "Bienvenue dans ce lieu habité par des loups dangereux et bien plus !")
                                                  .addField("Pour combattre :" , "=Forêt combat : [Nombre de joueurs dans votre groupe]")
                                                  .addField("Pour cueillir, niveau 2 minimum requis dans la spécialisation 'Cueilleur' :", "=Forêt cueillir")
                                                  .addField("Pour chasser, niveau 2 minimum requis dans la spécialisation 'Chasseur' :", "=Forêt chasser")
                                                  .addField("Pour miner, niveau 1 minimum requis dans la spécialisation 'Mineur' :", "=Forêt miner")
                                                  .addField("Pour bûcheronner, niveau 1 minimum requis dans la spécialisation 'Bûcheron' :", "=Forêt bûcheronner")
                                                  .addField("Pour avoir une quête :", "=Forêt quêtes")
                                                  .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/dd/First_Floor_forest.png/revision/latest?cb=20140309042049")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }
                                              })

//////////////////////////////////////////////////////////Forêt Combat/////////////////////////////////////////////////////////////////////////////////////

                                                bot.on('message', message => {
                                                    let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                if (message.content.startsWith(prefix + "Forêt combat")) {
                                                  let Z = args.slice(2).join(" : ");
                                                                                    if (talkedRecently.has(message.author.id+1000)) {
    const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
     .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
     .setTimestamp()
     message.channel.send({embed})
} else {
                                                    const B = (Math.floor(((Z*1)+1)*Math.random()+0))
                                                    const C = (Math.floor(((Z*1)+1)*Math.random()+0))
                                                    const D = (Math.floor(((Z*1)+1)*Math.random()+0))
                                                    const E = (Math.floor((((Z*1)+1)*(0.80))*Math.random()+0))
                                                    const F = (Math.floor((((Z*1)+1)*(0.60))*Math.random()+0))
                                                     const embed = new Discord.RichEmbed()
                                                     .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Forêt :" , "En marchant dans la forêt, vous rencontrez les ennemis suivants")
                                                     .addField("Loup :" , +B)
                                                     .addField("Slime :" , +C)
                                                     .addField("Bandit expérimenté :" , +D)
                                                     .addField("Bandit sombre :" , +E)
                                                     .addField("Loup de sang :" , +F)
                                                     .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
                                                     .setTimestamp()
                                                         message.channel.send({embed})}
    talkedRecently.add(message.author.id+1000);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+1000);
     }, 900000);
  }
  })




///////////////////////////////////////////////////////////Réglement//////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === (prefix) + "Règlement"){
   const embed = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setTitle("『SAO Community [RP]』©")
   .setDescription("Bienvenue à toi sur le Discord de『SAO Community [RP]』© !")
   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
   .setImage("https://pre00.deviantart.net/c70a/th/pre/f/2013/211/c/b/sao_soft_background_by_animefanart_toh-d6fxzux.jpg")
   .setThumbnail("https://vignette.wikia.nocookie.net/sword-art-online-chronicles/images/5/50/Wiki-background/revision/latest?cb=20150626221644")
   .addField("Règle [1]" ,"Pas de propos racistes, antisémites, homophobes etc")
   .addField("Règle [2]" , "Pas de photos ou de divulgations d'informations publiquement")
   .addField("Règle [3]" , "Pas de harcèlement de mention ou d'insultes sur un membre")
   .addField("Règle [4]" , "Pas de troll vocal ainsi qu'écrit pour foutre le bordel")
   .addField("Règle [5]" , "Pas de spam écrit dans les salons textuels")
   .addField("Règle [6]" , "Pas de menaces de toutes sortes comme du DDOS")
   .addField("Règle [7]" , "Pas de pub en message privés sous différentes formes")
   .addField("Valider le règlement pour voir les salons :" , "Il suffit d'appuyer sur :white_check_mark: juste au dessus de ce message !")
   .addField("Comprendre le principe du discord et du RP :" , "Ecrivez tous simplement dans un salon de commande ceci, puis lisez : =Menu SAO 1")
   .addField("Besoin d'aide ?" , "Vous pourrez écrire !aide pour que le staff vous aide et réponde à vos questions !")
   .addField("Invitation vers le discord :" , "https://discord.gg/QEYaNfQ")
   .addField("Invitation vers notre discord pub :" , "https://discord.gg/NYH43Ks")
   .setTimestamp()
   message.channel.send({embed});
   
  }
})
///////////////////////////////////////////////////////////Echange/////////////////////////////////////////////////////////////////////////////////////

            bot.on('message', message => {
              let cont = message.content.slice(prefix.length).split(" ");
              const args = cont.slice(1);
              if (message.content.startsWith(prefix + "Echange cols")) {
                  let Cols = args.slice(2).join(" : ");
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                  .addField("Vous donnez le nombre de cols suivant :" , +Cols)
                  .addField("Pour confirmer :" , "=Echange confirmer")
                  .addField("Pour refuser :" , "=Echange refuser")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
          });
 

            bot.on('message', message => {
              let cont = message.content.slice(prefix.length).split(" ");
              const args = cont.slice(1);
              if (message.content.startsWith(prefix + "Echange objet")) {
                  let Objet = args.slice(2).join(" : ");
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                  .addField("Vous donnez l'objet suivant :" , +Objet)
                  .addField("Pour confirmer :" , "=Echange confirmer")
                  .addField("Pour refuser :" , "=Echange refuser")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
          });


          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Echange confirmer")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                  .addField("Echange :" , "Vous avez confirmer l'échange")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
          });

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Echange refuser")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                  .addField("Echange :" , "Vous avez refuser l'échange")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
          });


////////////////////////////////////////////////////////////////////Regénération/////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
          if (message.content.startsWith(prefix + "Régénération")) {
      if (talkedRecently.has(message.author.id+100)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , "Vous devrez attendre 1 heure avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
      let X = args.slice(1).join(" : ");
      const A = (Math.floor((X)*Math.random()+1))
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("En restant en ville, vous reprenez :" , +A+ " HP")
       .setImage("https://img00.deviantart.net/62ab/i/2013/118/2/6/sao____kirito_health_bar_by_xxexternalhopexx-d63diy6.png")
       .setTimestamp()
       message.channel.send({embed})
        talkedRecently.add(message.author.id+100);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+100);
     }, 3600000);
 }}
    })
//////////////////////////////////////////////////////////////Calcul de caractéristiques///////////////////////////////////////////////////////////////////////////////////
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Points de vitalité")) {
        let X = args.slice(3).join(" : ");
        const A = X*5
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│ " +X+ " Points de vitalité vous donne :" , "│► " +A+ " HP max supplémentaire !")
         .setImage("http://www.lebonvisuel.com/669-thickbox_default/stickers-logo-pharmacie.jpg")
         .setTimestamp()
         message.channel.send({embed})
          }
    });

    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Points de puissance")) {
          let X = args.slice(3).join(" : ");
          const A = X*1
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│ " +X+ " Points de puissance vous donne :" , "│► " +A+ " Points de dégâts supplémentaire !")
           .setImage("https://cdn.pixabay.com/photo/2017/05/03/15/26/sword-2281334_960_720.png")
           .setTimestamp()
           message.channel.send({embed})
            }
      });

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Points de défense")) {
            let X = args.slice(3).join(" : ");
            const A = X*0.5
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("│ " +X+ " Points de défense vous donne :" , "│► " +A+ " Points d'armures supplémentaire !")
             .setImage("https://cdn.pixabay.com/photo/2014/04/02/10/53/shield-304844_960_720.png")
             .setTimestamp()
             message.channel.send({embed})
              }
        });
///////////////////////////////////////////////////////////Roll//////////////////////////////////////////////////////////////////////////////////////


      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Roll")) {
          let X = args.slice(1).join(" : ");
            const B = (Math.floor((100)*Math.random()+1))
            const Roll = (B*1)+(X*1)
            if (Roll < 50){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Votre action est un échec avec un score de :" , +Roll)
             .setImage("https://coubsecure-s.akamaihd.net/get/b142/p/coub/simple/cw_timeline_pic/7f1c5d47aa2/484488aa5d0d97af950a4/med_1482439204_image.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (51 < Roll){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Votre action est une réussite avec un score de :" , +Roll)
               .setImage("https://media.giphy.com/media/Cb8ql90aZJYqs/giphy.gif")
               .setTimestamp()
               message.channel.send({embed})
            }
        }
    });


////////////////////////////////////////////////////////Coup normal/////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup normal simple")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 25){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (26 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
         .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
         .setTimestamp()
         message.channel.send({embed})
      }
  }
});


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                              if (message.content.startsWith(prefix + "Coup normal amélioré")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+(degats/2)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 20){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (21 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
         .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
         .setTimestamp()
         message.channel.send({embed})
      }
  }
});

bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup normal supérieur")) {
    let degats = args.slice(3).join(" : ");
    const A = (Math.floor((degats)*Math.random()+(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 15){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre coup..." , "Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (16 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
       .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
       .setTimestamp()
       message.channel.send({embed})
    }
}
});


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup normal suprême")) {
  let degats = args.slice(3).join(" : ");
  const A = (Math.floor((degats)*Math.random()+(degats/2)))
  const B = (Math.floor((100)*Math.random()+1))
  if (B < 10){
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username , message.author.avatarURL)
   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
   .setColor(3447003)
   .addField("Vous ratez votre coup..." , "Dommage pour vous")
   .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
   .setTimestamp()
   message.channel.send({embed})
  }
  if (11 < B){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
     .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
     .setTimestamp()
     message.channel.send({embed})
  }
}
});
//////////////////////////////////////////////////////////////Coup précis///////////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
                                                                                                           if (message.content.startsWith(prefix + "Coup précis simple")) {

    let degats = args.slice(3).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 50){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre coup..." , "Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (51 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup précis amélioré")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup précis supérieur")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                            if (message.content.startsWith(prefix + "Coup précis suprême")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 35){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (36 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

///////////////////////////////////////////////////////////////Coup sauté//////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                           if (message.content.startsWith(prefix + "Coup sauté simple")) {

      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (51 < B & B < 80){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts, votre cible ne tombe malheureusement pas...")
         .setImage("https://media.discordapp.net/attachments/469506089512075294/507360566072049679/image0.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
    if (81 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts, votre cible tombe et ne pourra pas faire sa prochaine action défensive !")
         .setImage("https://media.discordapp.net/attachments/469506089512075294/507360566072049679/image0.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

///////////////////////////////////////////////////////////////Coup perce armure//////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
if (message.content.startsWith(prefix + "Coup perce armure simple")) {
      let degats = args.slice(4).join(" : ");
      const A = (Math.floor((degats/4)*Math.random()+1*(degats/2)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre coup..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts, ignorant l'armure de la cible")
         .setImage("https://media.giphy.com/media/iqkCNZIzSSXSM/giphy.gif")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
///////////////////////////////////////////////////////////////Coup d'estoc//////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
                                                                                                           if (message.content.startsWith(prefix + "Coup d'estoc simple")) {

  let degats = args.slice(3).join(" : ");
  const A = (Math.floor((degats*3/4)*Math.random()+1*(degats/2)))
  const B = (Math.floor((100)*Math.random()+1))
  if (B < 5){
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username , message.author.avatarURL)
   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
   .setColor(3447003)
   .addField("Vous ratez votre coup..." , "Dommage pour vous")
   .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
   .setTimestamp()
   message.channel.send({embed})
  }
  if (6 < B & B < 75){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
     .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (B > 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Vous réussissez votre coup qui inflige :" , A*1.5+ " points de dégâts")
      .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
      .setTimestamp()
      message.channel.send({embed})
     }
  }
});



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup d'estoc amélioré")) {

    let degats = args.slice(3).join(" : ");
    const A = (Math.floor((degats*3/4)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre coup..." , "Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 70){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 71){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Vous réussissez votre coup qui inflige :" , A*1.5+ " points de dégâts")
        .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
        .setTimestamp()
        message.channel.send({embed})
       }
    }
  });

  

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup d'estoc supérieur")) {

    let degats = args.slice(3).join(" : ");
    const A = (Math.floor((degats*3/4)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre coup..." , "Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 65){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 66){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Vous réussissez votre coup qui inflige :" , A*1.5+ " points de dégâts")
        .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
        .setTimestamp()
        message.channel.send({embed})
       }
    }
  });

  

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Coup d'estoc suprême")) {

    let degats = args.slice(3).join(" : ");
    const A = (Math.floor((degats*3/4)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre coup..." , "Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 60){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 61){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Vous réussissez votre coup qui inflige :" , A*1.5+ " points de dégâts")
        .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
        .setTimestamp()
        message.channel.send({embed})
       }
    }
  });
/////////////////////////////////////////////////////Combo////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Combo simple")) {

      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const C = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const D = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const E = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const F = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const G = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const H = A+C+D+E+F+G
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 75){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre combo..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (76 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("Votre premier coup inflige :" , A+ " points de dégâts")
         .addField("Votre deuxième coup inflige :" , C+ " points de dégâts")
         .addField("Votre troisième coup inflige :" , D+ " points de dégâts")
         .addField("Votre quatrième coup inflige :" , E+ " points de dégâts")
         .addField("Votre cinquième coup inflige :" , F+ " points de dégâts")
         .addField("Votre sixième coup inflige :" , G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(2);
  if (message.content.startsWith(prefix + "Combo amélioré")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const C = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const D = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const E = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const F = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const G = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const H = A+C+D+E+F+G
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 70){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre combo..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (71 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("Votre premier coup inflige :" , A+ " points de dégâts")
         .addField("Votre deuxième coup inflige :" , C+ " points de dégâts")
         .addField("Votre troisième coup inflige :" , D+ " points de dégâts")
         .addField("Votre quatrième coup inflige :" , E+ " points de dégâts")
         .addField("Votre cinquième coup inflige :" , F+ " points de dégâts")
         .addField("Votre sixième coup inflige :" , G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Combo supérieur")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const C = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const D = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const E = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const F = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const G = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const H = A+C+D+E+F+G
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 65){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre combo..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (66 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("Votre premier coup inflige :" , A+ " points de dégâts")
         .addField("Votre deuxième coup inflige :" , C+ " points de dégâts")
         .addField("Votre troisième coup inflige :" , D+ " points de dégâts")
         .addField("Votre quatrième coup inflige :" , E+ " points de dégâts")
         .addField("Votre cinquième coup inflige :" , F+ " points de dégâts")
         .addField("Votre sixième coup inflige :" , G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
  
  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Combo suprême")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const C = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const D = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const E = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const F = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const G = (Math.floor((degats/6)*Math.random()+1*(degats/3)))
      const H = A+C+D+E+F+G
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 60){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous ratez votre combo..." , "Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (61 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("Votre premier coup inflige :" , A+ " points de dégâts")
         .addField("Votre deuxième coup inflige :" , C+ " points de dégâts")
         .addField("Votre troisième coup inflige :" , D+ " points de dégâts")
         .addField("Votre quatrième coup inflige :" , E+ " points de dégâts")
         .addField("Votre cinquième coup inflige :" , F+ " points de dégâts")
         .addField("Votre sixième coup inflige :" , G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
////////////////////////////////////////////////////////////Coup provocateur/////////////////////////////////////////////////////////////////////////////////////
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
                                                                                                               if (message.content.startsWith(prefix + "Coup provocateur simple")) {

        let degats = args.slice(3).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 50){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous ratez votre coup..." , "Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (51 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
           .addField("Provocation :" , "La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });

    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
     if (message.content.startsWith(prefix + "Coup provocateur amélioré")) {
        let degats = args.slice(3).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 45){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous ratez votre coup..." , "Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (46 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
           .addField("Provocation :" , "La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });
    
    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Coup provocateur supérieur")) {
        let degats = args.slice(3).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 40){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous ratez votre coup..." , "Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (41 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
           .addField("Provocation :" , "La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });
    
    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
     if (message.content.startsWith(prefix + "Coup provocateur suprême")) {
        let degats = args.slice(3).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 35){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous ratez votre coup..." , "Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (36 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Vous réussissez votre coup qui inflige :" , A+ " points de dégâts")
           .addField("Provocation :" , "La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });
    ////////////////////////////////////////////////////////////////Coup circulaire/////////////////////////////////////////////////////////////////////////////////
    

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Coup circulaire simple")) {

            let degats = args.slice(3).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 50){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Vous ratez votre coup..." , "Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (51 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });

        

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Coup circulaire amélioré")) {
            let degats = args.slice(3).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 45){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Vous ratez votre coup..." , "Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (46 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });


      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
         if (message.content.startsWith(prefix + "Coup circulaire supérieur")) {
            let degats = args.slice(3).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 40){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Vous ratez votre coup..." , "Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (41 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });


        

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
         if (message.content.startsWith(prefix + "Coup circulaire suprême")) {
            let degats = args.slice(3).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 35){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Vous ratez votre coup..." , "Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (36 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });
/////////////////////////////////////////////////////Crie de provocation////////////////////////////////////////////////////////////////////////////////////////////

        bot.on('message', message => {
      if (message.content.startsWith(prefix + "Cri de provocation simple")) {

              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 25){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous ratez votre crie de provocation..." , "Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (26 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
           if (message.content.startsWith(prefix + "Cri de provocation amélioré")) {
              let degats = args.slice(1).join(" ");
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 20){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous ratez votre crie de provocation..." , "Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (21 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
           if (message.content.startsWith(prefix + "Cri de provocation supérieur")) {
              let degats = args.slice(1).join(" ");
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 15){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous ratez votre crie de provocation..." , "Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (16 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
           if (message.content.startsWith(prefix + "Cri de provocation suprême")) {
              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 10){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Vous ratez votre crie de provocation..." , "Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (11 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });
    
  ///////////////////////////////////////////////////////////////////Esquive//////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                            if (message.content.startsWith(prefix + "Esquive simple")) {

      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats*0.70)*Math.random()+1*(degats*0.70)))
      const B =  (Math.floor((100)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre esquive et vous subissez" , A+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (51 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre esquive :" , "Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Esquive améliorée")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats*0.70)*Math.random()+1*(degats*0.70)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre esquive et vous subissez" , A+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre esquive :" , "Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Esquive supérieure")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats*0.70)*Math.random()+1*(degats*0.70)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre esquive et vous subissez" , A+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre esquive :" , "Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Esquive suprême")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats*0.70)*Math.random()+1*(degats*0.70)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 35){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre esquive et vous subissez" , A+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (36 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre esquive :" , "Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
///////////////////////////////////////////////////////////////Blocage//////////////////////////////////////////////////////////////////////////////////

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
                                                                                                               if (message.content.startsWith(prefix + "Blocage simple")) {

        let degats = args.slice(2).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 50){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*2.25+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (51 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*1.25+ " points de dégâts")
            .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
    });

    
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Blocage amélioré")) {
        let degats = args.slice(2).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 45){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*2.25+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (46 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*1.25+ " points de dégâts")
            .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
    });


  
    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Blocage supérieur")) {
          let degats = args.slice(2).join(" : ");
          const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
          const B = (Math.floor((100)*Math.random()+1))
          if (B < 40){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*2.25+ " points de dégâts")
           .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
           .setTimestamp()
             message.channel.send({embed})}
             if (41 < B){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*1.25+ " points de dégâts")
              .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
              .setTimestamp()
              message.channel.send({embed})
            }
          }
      });
    
      
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
     if (message.content.startsWith(prefix + "Blocage suprême")) {
        let degats = args.slice(2).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 35){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*2.25+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (36 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Vous bloquez l'attaque et vous ne subissez que :" , A*1.25+ " points de dégâts")
            .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
    });
////////////////////////////////////////////////////////////////////Parade/////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
                                                                                                             if (message.content.startsWith(prefix + "Parade simple")) {

      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 60){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre parade et vous subissez" , A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (61 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
        .addField("Vous réussissez votre parade :" , "=Parade réussis : [Vos dégâts]")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Parade améliorée")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 55){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre parade et vous subissez" , A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (56 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
                .addField("Vous réussissez votre parade :" , "=Parade réussis : [Vos dégâts]")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Parade supérieure")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre parade et vous subissez" , A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (51 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
                .addField("Vous réussissez votre parade :" , "=Parade réussis : [Vos dégâts]")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
   if (message.content.startsWith(prefix + "Parade suprême")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous échouez votre parade et vous subissez" , A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Vous réussissez votre parade :" , "=Parade réussis : [Vos dégâts]")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });



  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Parade réussis")) {
      let degats = args.slice(2).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Votre parade inflige :" , +A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
      }
  });


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
                                                                                                           if (message.content.startsWith(prefix + "Interception simple")) {

    let degats = args.slice(2).join(" : ");
    const A = (Math.floor((degats*0.75)*Math.random()+1*(degats/4)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 50){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre interception..." , "Dommage pour vous")
     .setImage("https://media1.tenor.com/images/adc0701a4fd21f8643354d662113d372/tenor.gif?itemid=3531985")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (51 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre interception et vous prenez à la place du joueur :" , A+ " points de dégâts, le reste des dégâts vont sur le joueur")
       .setImage("https://media.giphy.com/media/taAfdzUL45lgk/source.gif")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
 if (message.content.startsWith(prefix + "Interception améliorée")) {
 let degats = args.slice(2).join(" : ");
    const A = (Math.floor((degats*0.75)*Math.random()+1*(degats/4)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 45){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous ratez votre interception..." , "Dommage pour vous")
     .setImage("https://media1.tenor.com/images/adc0701a4fd21f8643354d662113d372/tenor.gif?itemid=3531985")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (46 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez votre interception et vous prenez à la place du joueur :" , A+ " points de dégâts, le reste des dégâts vont sur le joueur")
       .setImage("https://media.giphy.com/media/taAfdzUL45lgk/source.gif")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
 if (message.content.startsWith(prefix + "Fuite simple")) {
    let degats = args.slice(2).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 70){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous n'arrivez pas à fuir..." , "Dommage pour vous")
     .setImage("https://media.giphy.com/media/JpKkAZBpzEukw/giphy.gif")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (71 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez à fuir le combat :" , "La chance est avec vous")
       .setImage("https://pa1.narvii.com/5599/b82de568ca1433c33ba940d45664caddf98fe07c_hq.gif")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
 if (message.content.startsWith(prefix + "Fuite améliorée")) {
    let degats = args.slice(2).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
    const B = (Math.floor((100)*Math.random()+1))
 if (B < 60){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("Vous n'arrivez pas à fuir..." , "Dommage pour vous")
     .setImage("https://media.giphy.com/media/JpKkAZBpzEukw/giphy.gif")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (61 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Vous réussissez à fuir le combat :" , "La chance est avec vous")
      .setImage("https://pa1.narvii.com/5599/b82de568ca1433c33ba940d45664caddf98fe07c_hq.gif")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});









  ///////////////////////////////////////////////////////////////////////Offre et annonces//////////////////////////////////////////////////////////////////////////

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Annonce")) {
        let Annonce = args.slice(1).join(" : ");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
        .addField("Annonce :" , +Annonce)
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});





bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Offre")) {
      let Offre = args.slice(1).join(" : ");
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
      .addField("Offre :" , +Offre)
      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
      .setTimestamp()
      message.channel.send({embed})
    }   
});

























//////////////////////////////////////////////////////////Menu SAO///////////////////////////////////////////////////////////////////////////////////////
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Aide")) {
    if (talkedRecently.has(message.author.id+1300)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 5 minutes avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
  message.channel.send("Cher @MODERATEUR et @ASSISTANT, j'ai une question à vous poser !");
       talkedRecently.add(message.author.id+1300);
       setTimeout(() => {
        talkedRecently.delete(message.author.id+1300);
      }, 3000000);
  }
       }
  });





bot.on('message', message => {
  if (message.content.startsWith(prefix + "Menu SAO 1")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
        .addField("SAO :" , "Permet d'apprendre le contexte !\n=SAO")
        .addField("Personnage :" , "Permet de créer votre personnage !\n=Personnage")
        .addField("Compétences :" , "Permet d'apprendre le système de compétence !\n=Compétences")
        .addField("Particularités :" , "Permet d'apprendre le système de particularité !\n=Particularités")
        .addField("Combat :" , "Permet d'apprendre le système de combat !\n=Combat")
        .addField("Caractéristiques :" , "Permet d'apprendre le système de caractéristique !\n=Caractéristiques")
        .addField("Spécialisations :" , "Permet d'apprendre le système de spécialisations !\n=Spécialisations")
        .addField("Cristal :" , "Permet d'apprendre le système de cristal !\n=Cristal")
       .addField("Armes :" , "Permet d'apprendre le système d'armes !\n=Armes")
        .addField("Niveaux :" , "Permet d'apprendre le système de niveaux !\n=Niveaux")
        .addField("Crafts :" , "Permet d'afficher tous les crafts existants !\n=Crafts")
        .addField("Suite :" , "Permet d'afficher la suite du menu SAO !\n=Menu SAO 2")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});



bot.on('message', message => {
  if (message.content.startsWith(prefix + "Menu SAO 2")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Classes :" , "Permet d'apprendre le système de classes !\n=Classes")
       .addField("Donjons :" , "Permet d'apprendre le système de donjons !\n=Donjons")
       .addField("Familiers :" , "Permet d'apprendre le système de familiers !\n=Familiers")
       .addField("Quêtes :" , "Permet d'apprendre le système de quêtes !\n=Quêtes")
       .addField("Guilde :" , "Permet d'apprendre le système de guilde !\n=Guilde")
       .addField("Etats :" , "Permet d'apprendre le système d'états !\n=Etats")
       .addField("Métiers :" , "Permet d'apprendre le système de métiers !\n=Métiers")
       .addField("Ville :" , "Permet d'afficher les informations concernant la ville !\n=Ville")
       .addField("Extérieur :" , "Permet d'afficher les informations concernant l'extérieur !\n=Extérieur")
       .addField("Souterrains :" , "Permet d'afficher les informations concernant les souterrains !\n=Souterrains")
       .addField("Constructions :" , "Permet d'apprendre le système de constructions !\n=Constructions")
       .addField("Suite:" , "Permet d'afficher la suite du menu SAO !\n=Menu SAO 3")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Menu SAO 3")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Rétablissement :" , "Permet d'apprendre le système de rétablissement !\n=Rétablissement")
       .addField("Mort :" , "Permet d'apprendre le système de mort !\n=Mort")
       .addField("Menus :" , "Permet d'apprendre le système de menus !\n=Menus")
       .addField("Dirigeant :" , "Permet d'apprendre le système de dirigeant !\n=Dirigeant")
       .addField("Garde :" , "Permet d'apprendre le système de garde !\n=Garde")
       .addField("Mercenaire :" , "Permet d'apprendre le système de mercenaire !\n=Mercenaire")
       .addField("Rolls :" , "Permet d'apprendre le système de Rolls !\n=Le rolls")
       .addField("Prison :" , "Permet d'apprendre le système de prison !\n=Prison")
       .addField("Zones :" , "Permet d'apprendre le système de zone !\n=Zones")
       .addField("Quiz :" , "Pour être sûr que vous avez compris l'essentiel du fonctionnement du RP !\n=Quiz")
           .addField("Suite:" , "Permet d'afficher la suite du menu SAO !\n=Menu SAO 4")

        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Menu SAO 4")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Trajets :" , "Permet d'apprendre le système de trajet !\n=Trajets")
    .addField("Liste d'objets :" , "Permet de consulter tous les objets existants !\n=Liste d'objets")
    .addField("Amélioration :" , "Permet d'apprendre le système d'amélioration !\n=Amélioration")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Trajets")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Les trajets :" , "Quand vous voulez vous déplacer d'un lieu à un autre, vous mettrez plus ou moins de temps selon la zone où vous vous situez !\n\nPour consulter la durée des trajets en dehors de la ville du palier 1 :\n\n=Trajet palier 1\n\nQuand vous êtes en ville ou dans les souterrains, il n'y a pas de contrainte de temps, il n'y a que dans les zones extérieurs !\n\nPour vous rendre de la ville à l'extérieur, il faudra passer par 'Entrée de la ville' !")
    .setImage("https://www.playm.de/wp-content/uploads/2014/10/Sword-Art-Online-Lost-Song.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Trajet palier 1")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
        .addField("Trajet en ville :" , "Entrée de la ville\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nPlaines\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nForêt\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nDonjon sauvage\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nColline\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nMontagne\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nGrotte\n‖\n‖\n‖ [5 minutes]\n‖\n‖\nLabyrinthe")
    .setImage("https://www.playm.de/wp-content/uploads/2014/10/Sword-Art-Online-Lost-Song.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Trajet ville")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .setImage("https://www.playm.de/wp-content/uploads/2014/10/Sword-Art-Online-Lost-Song.jpg")
    .addField("Trajet en ville :" , "Auberge\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nArène\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nEcole\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nBanque\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nJardin\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nExecution publique\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nPlace principal\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nParc\\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nPrison\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nSombre ruelle\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nCommerce\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nHall de guilde\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nTemple\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nSouterrains\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nConstructions joueurs\n‖\n‖\n‖ [2 minutes]\n‖\n‖\nEntrée de la ville")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

 bot.on('message', message => {
    if (message.content.startsWith(prefix + "Amélioration")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Les améliorations :" , "Lorsque vous possédez une arme que ce soit à une main ou à deux mains, elle améliorera un coup ou une action défensive selon l'arme\n\nLes améliorations sont les suivantes :\n\nAmélioré(e)\nSupérieur(e)\nSuprême\nDivin(e)\n\nCes améliorations s'effectuent dans l'ordre, c'est à dire que si par exemple j'ai une épée à deux mains qui améliore le combo en combo supérieur, si je possède une particularité qui améliore le combo en plus de l'épée à deux mains, le combo supérieur devient le combo suprême, et si quelque chose encore améliore le combo, il devient un combo divin !")
      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
       .setTimestamp()
       message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Menus")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Les menus, partie 1 :" , "Il existe plusieurs menus [salon sur le discord] permettant d'écrire des choses à l'intérieur :\n\nLe menu cimetière permettant d'écrire lorsque vous mourrez !\n\nLe menu des annonces permettant de faire vos annonces de tout types que ce soit pour un métier, une offre, une demande d'aide etc...\n\nLe menu d'infos sur les guildes permettant de mettre les infos de chaque guildes, chaque membres, chaques rôles et autres infos !\n\nLe menu des métiers permettant d'écrire qui possède quel métier pour une meilleur organisation ! [Effacer votre message si votre personnage meurt]\n\Le menu des échanges pour faire vos échanges à l'intérieur")
      .addField("Les menus, partie 2 :" , "Le menu de régénération permettant de faire votre regénération naturel en ville !\n\nLe menu des objets permettant d'écrire les commandes de récompenses à l'intérieur lorsque vous gagnez des objets sur des monstres ou dans des activités, ainsi que les crafts que vous faites !\n\nLe menu des MP permettant d'ajouter quelqu'un en amis ainsi que de pouvoir envoyer des messages à vos amis !\n\Le menu des clefs de l'auberge pour savoir qui possède quel chambre pour combien de temps !\n\nLe menu commerce pour mettre une annonce en rapport au commerce, que ce soit pour acheter ou vendre quelque chose !")
    .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Zones")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Les zones :" , "Quand vous entrez dans une zone et que vous voulez voir les activités ainsi que ce qui se cache à l'intérieur, vous pourrez écrire :\n\n=[Nom de la zone]\n\nPar exemple si vous arrivez dans les plaines pour découvrir le lieu, écrivez =Plaines !\n\nLes zones actuellement disponible sont :\n\n=Plaines\n=Forêt")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Rolls")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Les rolls :" , "Un roll est un jet de dé qui permet de tirer un chiffre de 1 à 100, déterminant si oui ou non vous réussissez une action !\n\nEn dessous de 50, vous ratez votre action, mais 50 ou plus, vous réussissez votre action !\n\nIl est possible que parfois, vous avez un bonus selon la situation pour une action, si par exemple vous avez un bonus de 10 pour la discrétion, et que vous marchez discrètement derrière quelqu'un, vous avez droit à votre bonus !\n\nVoici la commande à faire pour effectuez un roll :\n\n=Roll : [Le bonus ou non]\n\nSi vous faites une action sans bonus, c'est =Roll : 0\n\nSi vous faites une action avec l'exemple précedent, un bonus de 10, c'est =Roll : 10")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Prison")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("La prison :" , "Lorsque vous êtes une menace ou que vous faites des actions interdites, les gardes peuvent vous mettre en prison !\n\nSelon la couleur de votre cristal, votre peine et la conséquence sera plus ou moins importante !\n\nSi vous êtes un cristal vert : un garde pourra vous mettre en prison au maximum 12 H !\n\nSi vous êtes un cristal orange : un garde pourra vous mettre en prison au maximum 48 H !\n\nSi vous êtes un cristal rouge : un garde pourra vous mettre en prison au maximum 96 H !\n\nA noter qu'une fois que vous allez en prison, votre cristal redeviendra vert !")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Mercenaire")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Les mercenaires :" , "Les mercenaires sont différents des gardes, ils ne sont pas obligés d'aider les autres joueurs mais ce ne sont pas des PK pour autant !\n\nLeur but est d'effectuer les différents missions qui leur sont confier ou alors d'aider les joueur pour des services contre de l'argent !")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Garde")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Le garde :" , "Les gardes ont pour objectif de sauver la vie des autres joueurs même s'ils doivent donner leur vie !\n\nUn chef des garde peux-être désigné pour commander les gardes et leur activités, mais le dirigeant reste le principal commandant des gardes !\n\nVotre objectif principal est non seulement de sauver les joueurs, de mettre les criminels en prison, mais aussi de protéger le dirigeant actuel le plus possible !\n\nPour un garde, il est possible de mettre un cristal rouge en prison ou alors de l'éxecuter publiquement s'il devient vraiment perturbant pour la ville !\n\nQuand un garde met quelqu'un en prison et que le joueur décide de payer pour sortir, la somme de l'amende revient directement au garde en question !")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Dirigeant")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
    .addField("Le dirigeant :" , "Un dirigeant est désigné par les votes ou par des épreuves selon le contexte, il a le droit d'ajouter, de supprimer ou même de modifier des règles au sein de la ville et des joueurs !\n\nPour être dirigeant, il suffit d'avoir plus de votes pour que les autres candidats, et si un dirigeant est détesté de tous, vous avez possibilité de vous rebellez !")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Quiz")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Quiz :" , "Comment fonctionne le système de cristal ?\n\nComment fonctionne le système de roll ?\n\nComment fonctionne le système de combat ?\n\nComment fonctionne le système de spécialisation ?\n\nComment fonctionne les caractéristiques ?\n\nComment fonctionne le craft ?\n\nComment fonctionne le système de bonus d'arme ?\n\nComment fonctionne le système de coup ?\n\nComment fonctionne le système de prison ?\n\nComment fonctionne le système de dirigeant, mercenaire et garde ?\n\nComment fonctionne le système de compétence et de particularité")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });



bot.on('message', message => {
  if (message.content.startsWith(prefix + "Armes")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les armes :" , "Vous trouverez ou fabriquerez parfois des armes plus ou moins rares, pouvant être des armes à une main, ou des armes à deux mains, et chaque armes améliorent un coup ou une action défensive !\n\nVous saurez quel arme permet d'amélioré quel coups ou action défensives en affichant les infos sur celle-ci en écrivant : **=[Nom de l'arme]**\n\nLorsque vous créez votre personnage, vous aurez droit de choisir deux armes à une main ou une arme à deux mains dans la liste suivante :\n\nLes épées\nLes dagues\nLes glaives\nLes masses\nLes haches\nLes rapières\nLes cimeterres\nLes katanas\nLes boucliers\n\nCependant, l'arme de base que vous aurez n'améliora pas de coups ou d'actions défensives pour le moment, seulement les armes que vous trouverez sur des monstres, que vous achèterez ou que vous fabriquerez !")
       .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "SAO")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Contexte :" , "En 2022, l'humanité a réussi à créer une réalité virtuelle.\n\nGrâce à un casque, les humains peuvent se plonger entièrement dans le monde virtuel en étant comme déconnectés de la réalité, et Sword Art Online est le premier MMORPG a utiliser ce système.\n\nMais voila que le premier jour de jeu, 10 000 personnes se retrouvent piégées dans cette réalité virtuelle par son créateur : Akihiko Kayaba.\n\nLe seul moyen d'en sortir est de finir le jeu.\n\nMais ce ne sera pas facile de sortir de ce monde virtuel puisque si un joueur perd la partie, il meurt également dans la vraie vie.\n\nVous êtes l'un de ces joueurs qui ont voulus test le jeu SAO mais qui malheureusement n'aurait jamais du y rentrer...\n\nVous l'aurez compris, vous êtes donc bloqués dans l'aincrad avant de réussir à passer toutes les épreuves du jeu, mais la question est plutôt : Survivrez-vous ?")
        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Compétences")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Les compétences :" , "Une compétence est un coup special, puissant et pouvant provoqué des états chez l'ennemis, c'est un coup assez unique selon la personnage et selon comment vous voulez jouer votre personnage !\n\nVous commencez votre aventure avec une seule compétence !\n\nA savoir que vous ne pouvez faire qu'une seul fois votre compétence pendant un combat !\n\nPour savoir à quel niveaux vous aurez le droit d'avoir d'autres compétences, écrivez :\n\n=Apprentissage des compétences\n\nPour consulter la liste des compétences existantes possibles, écrivez :\n\n=Liste des compétences 1")
            .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
            .setTimestamp()
            message.channel.send({embed})
          }   
        });

        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Apprentissage des particularités")) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Niveau 25 :" , "Vous débloquez une particularité supplémentaire !")
               .addBlankField(true)
               .addField("Niveau 75 :" , "Vous débloquez une particularité supplémentaire !")
                             .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                .setTimestamp()
                message.channel.send({embed})
              }   
            });




        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Particularités")) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Les particularités :" , "Une particularité est un effet passif, naturel sur votre personnage qui vous donne un bonus à certaines actions que vous faites !\n\nVous commencez votre aventure avec une seule particularité !\n\nPour savoir à quel niveaux vous aurez le droit d'avoir d'autres particularités, écrivez :\n\n=Apprentissage des particularités\n\nPour consulter la liste des particularités existantes possibles, écrivez :\n\n=Liste des particularités")
                .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                .setTimestamp()
                message.channel.send({embed})
              }   
            });

            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Liste des particularités")) {
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                   .setColor(3447003)
                   .addField("Liste des particularités, partie 1 :" , "Amélioration du coup normal simple en coup normal amélioré !\n\nAmélioration du coup précis simple en coup précis amélioré !\n\nAmélioration du combo simple en combo amélioré !\n\nAmélioration du coup d'estoc simple en coup d'estoc amélioré !\n\nAmélioration du coup provocateur simple en coup provocateur amélioré !\n\nAmélioration du coup circulaire simple en coup circulaire amélioré !\n\nAmélioration de la parade simple en parade améliorée !\n\nAmélioration du blocage simple en blocage amélioré !\n\nAmélioration de l'esquive simple en esquive améliorée !\n\nAmélioration du cri de provocation simple en cri de provocation amélioré !\n\nAmélioration de l'interception simple en interception amélioré !\n\nBonus de 10 pour la fuite en combat ou en dehors !")
                   .addBlankField(true)
                   .addField("Liste des particularités, partie 2 :" , "Bonus de 10 pour escalader et grimper !\n\nBonus de 10 pour la discrètion !\n\nBonus de 10 pour les actions défensives en dehors des combats !\n\nBonus de 10 pour les actions offensives en dehors des combats !\n\nBonus de 20 pour tenter un bluff !\n\nBonus de 20 pour le marchandage et les négociations !\n\nBonus de 20 pour la diplomatie !\n\nBonus de 20 pour se contrôler, et ne pas changer d'état dans une situation !\n\nBonus de 20 pour la sociabilité, inspiré confiance !")
                   .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                    .setTimestamp()
                    message.channel.send({embed})
                  }   
                });

                
                bot.on('message', message => {
                  if (message.content.startsWith(prefix + "Liste des compétences 1")) {
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                       .setColor(3447003)
                       .addField("Vorpal Strike" , "Compétence de trois coups qui infligent des dégâts, vous effectuez trois coups horizontaux puissants !\n\n=Vorpal strike : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Rage Spike" , "Compétence de un coup qui inflige des dégâts, vous foncez sur votre cible l'arme en avant pour l'embrocher !\n\n=Rage spike : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Cyclone" , "Compétence qui n'inflige pas de dégâts mais qui possède de grandes chances d'étourdir plusieurs cibles !\n\n=Cyclone")
                       .addBlankField(true)
                       .addField("Tourbillon" , "Compétence de trois coups qui infligent des dégâts touchant plusieurs ennemis, vous vous mettez à tournoyer sur vous même ainsi que l'arme que vous tenez !\n\n=Tourbillon : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Quadruple pain" , "Compétence de quatres coups qui infligent des dégâts, vous effectuez quatres coups d'estocs rapides !\n\n=Quadruple pain : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Lightning Fall" , "Compétence de un coup qui inflige des dégâts pouvant paralyser la cible, votre arme pointe le ciel devenant légèrement jaune avant de s'abattre verticalement sur votre cible !\n\n=Lightning fall : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Deadly Sins" , "Compétence de un coup qui inflige des dégâts pouvant empoisonner la cible, vous tenez en retrait votre arme devenant légèrement verte avant d'effectuer un coup d'estoc rapide !\n\n=Deadly sins: [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Vertical Arc" , "Compétence de un coup qui inflige des dégâts, vous effectuez un puissant coup vertical de bas en haut !\n\n=Vertical arc : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Burning Slash" , "Compétence de un coup qui inflige des dégâts pouvant enflammer la cible, votre arme devient d'une couleur rouge clair étrange !\n\n=Burning slash : [Vos dégâts]")
                       .addBlankField(true)
                       .addField("Sonic Leap" , "Compétence qui n'inflige pas de dégât mais qui possède de grandes chances de charmer la cible !\n\n=Sonic leap")
                       .addBlankField(true)
                       .addField("Suite :" , "Pour voir la suite des compétences existantes, écrivez :\n\n=Liste des compétences 2")
                        .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                        .setTimestamp()
                        message.channel.send({embed})
                      }   
                    });

                    bot.on('message', message => {
                      if (message.content.startsWith(prefix + "Liste des compétences 2")) {
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                           .setColor(3447003)
                           .addField("Treble Scythe" , "Compétence de deux coups qui infligent des dégâts à plusieurs cibles, vous effectuez deux coups en fonçant en avant !\n\n=Treble scythe : [Vos dégâts]")
                           .addBlankField(true)
                           .addField("Frost Strike" , "Compétence de un coup qui inflige des dégâts pouvant geler la cible, votre arme devient légèrement bleu avant de réaliser un coup horizontal !\n\n=Frost strike : [Vos dégâts]")
                           .addBlankField(true)
                           .addField("Sleeping Silence" , "Compétence de un coup qui nflige des dégâts pouvant endormir la cible, vous effectuez un coup précis et puissant au niveau de la tête de votre cible !\n\n=Sleeping silence: [Vos dégâts]")
                           .addBlankField(true)
                           .addField("Furious Rush" , "Compétence de un coup qui inflige des dégâts pouvant étourdir la cible, vous foncez rapidement avec l'arme en avant, avant de réaliser un coup horizontal puissant !\n\n=Furious rush : [Vos dégâts]")
                           .addBlankField(true)
                           .addField("Crucifixion" , "Compétence de deux petits coups qui infligent des dégâts pouvant faire saigner la cible, vous effectuez le premier coup verticalement et le deuxième horizontalement tel une croix !\n\n=Crucifixion : [Vos dégâts]")
                           .addBlankField(true)
                           .addField("Blood insanity" , "Compétence où vous vous infligez vous même des dégâts pour doubler vos prochains dégâts pendant un certains temps, vous vous transpercez avant de ressortir la lame ce qui augmente votre force et vous entoure d'une aura étrange !\n\n=Blood insanity : [Vos dégâts]")
                            .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                            .setTimestamp()
                            message.channel.send({embed})
                          }   
                        });
                     

                       
                        bot.on('message', message => {
                          if (message.content.startsWith(prefix + "Cyclone")) {
                            if (talkedRecently.has(message.author.id+1)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              const B = (Math.floor(100)*Math.random()+1)
                              const tours = (Math.floor((3)*Math.random()+1))
                              const cibles = (Math.floor((5)*Math.random()+1))
                              if(B < 25){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Cyclone' qui inflige :" , "Aucun points de dégâts")
                               .addField("Etourdissement :" , "Vous n'arrivez cependant pas à étourdir vos cibles...")
                               .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 26){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Cyclone' qui inflige :" , "Aucun points de dégâts")
                               .addField("Etourdissement :" , "Vous arrivez à étourdir " +cibles + " cible(s) pendant " +tours+ " tours, l'empêchant de faire la moindre action défensive !")
                               .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+1);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+1);
                              }, 3000000);
                          }
                               }
                          });

                          bot.on('message', message => {
                            if (message.content.startsWith(prefix + "Sonic leap")) {
                              if (talkedRecently.has(message.author.id+2)) {
                                const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                 .setTimestamp()
                                 message.channel.send({embed})
                        } else {
                                const B = (Math.floor(100)*Math.random()+1)
                                const tours = (Math.floor((3)*Math.random()+1))
                                if(B < 25){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Sonic leap' qui inflige :" , "Aucun points de dégâts")
                                 .addField("Charme :" , "Vous n'arrivez cependant pas à charmer votre cible...")
                                 .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 if(B > 26){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Sonic leap' qui inflige :" , "Aucun points de dégâts")
                                 .addField("Charme :" , "Vous arrivez à charmer votre cible pendant " +tours+ " tours, elle obéira à vos ordres !")
                                 .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 talkedRecently.add(message.author.id+2);
                                 setTimeout(() => {
                                  talkedRecently.delete(message.author.id+2);
                                }, 1500000);
                            }
                                 }
                            });



                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Furious rush")) {
                            if (talkedRecently.has(message.author.id+3)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
                              const B = (Math.floor(100)*Math.random()+1)
                              const C = (Math.floor((3)*Math.random()+1))
                              if(B < 50){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Furious' qui inflige :" , A+ " points de dégâts")
                               .addField("Etourdissement :" , "Vous n'arrivez cependant pas à étourdir votre cible...")
                               .setImage("https://orig00.deviantart.net/beec/f/2014/360/3/3/sao_kirito_vs_heathcliff_gif_by_mooeybear2001-d8bdqhf.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 51){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Furious' qui inflige :" , A+ " points de dégâts")
                               .addField("Etourdissement :" , "Vous arrivez à étourdir votre cible pendant " +C+ " tours, l'empêchant de faire la moindre action défensive !")
                               .setImage("https://orig00.deviantart.net/beec/f/2014/360/3/3/sao_kirito_vs_heathcliff_gif_by_mooeybear2001-d8bdqhf.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+3);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+3);
                              }, 1500000);
                          }
                               }
                          });





                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Frost strike")) {
                            if (talkedRecently.has(message.author.id+4)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
                              const B = (Math.floor(100)*Math.random()+1)
                              const C = (Math.floor((3)*Math.random()+1))
                              if(B < 50){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Frost strike' qui inflige :" , A+ " points de dégâts")
                               .addField("Gèle :" , "Vous n'arrivez cependant pas à geler votre cible...")
                               .setImage("https://i.gifer.com/BHNt.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 51){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Frost strike' qui inflige :" , A+ " points de dégâts")
                               .addField("Gèle :" , "Vous arrivez à geler votre cible pendant " +C+ " tours, l'empêchant de faire la moindre attaque !")
                               .setImage("https://i.gifer.com/BHNt.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+4);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+4);
                              }, 3000000);
                          }
                               }
                          });




                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Blood insanity")) {
                            if (talkedRecently.has(message.author.id+5)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const A = (Math.floor((degats)*Math.random()+1*(degats)))
                              const B = (Math.floor(100)*Math.random()+1)
                              const C = (Math.floor((3)*Math.random()+1))
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Blood insanity' qui vous inflige :" , A+ " points de dégâts")
                               .addField("Boost de dégâts :" , "Vous doublez les dégâts que vous infligez pendant " +C+ " tours !")
                               .setImage("https://media.giphy.com/media/6noApitdXGOtO/giphy.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+5);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+5);
                              }, 3000000);
                          }
                          });




                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Sleeping silence")) {
                            if (talkedRecently.has(message.author.id+6)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
                              const B = (Math.floor(100)*Math.random()+1)
                              const C = (Math.floor((3)*Math.random()+1))
                              if(B < 50){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Sleeping silence' qui inflige :" , A+ " points de dégâts")
                               .addField("Sommeil :" , "Vous n'arrivez cependant pas à endormir votre cible...")
                               .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 51){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Sleeping silence' qui inflige :" , A+ " points de dégâts")
                               .addField("Sommeil :" , "Vous arrivez à endormir votre cible pendant " +C+ " tours, l'empêchant d'agir mais le moindre coup la reveillera !")
                               .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+6);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+6);
                              }, 1500000);
                          }
                               }
                          });


                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Lightning fall")) {
                            if (talkedRecently.has(message.author.id+7)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
                              const B = (Math.floor(100)*Math.random()+1)
                              const C = (Math.floor((2)*Math.random()+1))
                              if(B < 75){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Lightning fall' qui inflige :" , A+ " points de dégâts")
                               .addField("Paralysie :" , "Vous n'arrivez cependant pas à paralyser votre cible...")
                               .setImage("https://media.rbl.ms/image?u=%2Ffiles%2F2015%2F10%2F02%2F6357942553093091981514644889_Kirito.gif&ho=http%3A%2F%2Fcdn1.theodysseyonline.com&s=715&h=d56085b666d9a41f809b524c9bf67201b2a5dde3b2d398969885e397009f65f0&size=980x&c=3843292609")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 75){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Lightning fall' qui inflige :" , A+ " points de dégâts")
                               .addField("Paralysie :" , "Vous arrivez à paralyser votre cible pendant " +C+ " tours, l'empêchant de faire une attaque ou un action défensive !")
                               .setImage("https://media.rbl.ms/image?u=%2Ffiles%2F2015%2F10%2F02%2F6357942553093091981514644889_Kirito.gif&ho=http%3A%2F%2Fcdn1.theodysseyonline.com&s=715&h=d56085b666d9a41f809b524c9bf67201b2a5dde3b2d398969885e397009f65f0&size=980x&c=3843292609")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+7);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+7);
                              }, 3000000);
                          }
                               }
                          });


                          bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Deadly sins")) {
                              if (talkedRecently.has(message.author.id+8)) {
                                const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                 .setTimestamp()
                                 message.channel.send({embed})
                        } else {
                                let degats = args.slice(2).join(" : ");
                                const A = (Math.floor((degats/2)*Math.random()+1*(degats/3)))
                                const B = (Math.floor(100)*Math.random()+1)
                                const C = (Math.floor((2)*Math.random()+1))
                                const D = (Math.floor((degats)*Math.random()+1*(degats)))
                                if(B < 50){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Deadly sins' qui inflige :" , A+ " points de dégâts")
                                 .addField("Empoisonnement :" , "Vous n'arrivez cependant pas à empoisonner votre cible...")
                                 .setImage("https://lh3.googleusercontent.com/-H3A7mzkXabA/VUZgiS6iVJI/AAAAAAAABZ8/TOKkKzfOuhE/w500-h281-n/02.05.15%2B-%2B1")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 if(B > 51){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Deadly sins' qui inflige :" , A+ " points de dégâts")
                                 .addField("Empoisonnement :" , "Vous arrivez à empoisonné votre cible pendant " +C+ " tours, elle subira " +D+ " points de dégâts par tours !")
                                 .setImage("https://lh3.googleusercontent.com/-H3A7mzkXabA/VUZgiS6iVJI/AAAAAAAABZ8/TOKkKzfOuhE/w500-h281-n/02.05.15%2B-%2B1")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 talkedRecently.add(message.author.id+8);
                                 setTimeout(() => {
                                  talkedRecently.delete(message.author.id+8);
                                }, 3000000);
                            }
                                 }
                            });


                            bot.on('message', message => {
                              let cont = message.content.slice(prefix.length).split(" ");
                              const args = cont.slice(1);
                              if (message.content.startsWith(prefix + "Burning slash")) {
                                if (talkedRecently.has(message.author.id+9)) {
                                  const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                                   .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                   .setTimestamp()
                                   message.channel.send({embed})
                          } else {
                                  let degats = args.slice(2).join(" : ");
                                  const A = (Math.floor((degats/2)*Math.random()+1*(degats/3)))
                                  const B = (Math.floor(100)*Math.random()+1)
                                  const C = (Math.floor((3)*Math.random()+1))
                                  const D = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
                                  if(B < 50){
                                   const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Vous réussissez votre compétence 'Burning slash' qui inflige :" , A+ " points de dégâts")
                                   .addField("Enflammer :" , "Vous n'arrivez cependant pas à emflamer votre cible...")
                                   .setImage("https://steamusercontent-a.akamaihd.net/ugc/911296644870506361/6415F9D8B892ABD2EAB81DB5EA271AC297C16CBA/")
                                   .setTimestamp()
                                   message.channel.send({embed})}
                                   if(B > 51){
                                   const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Vous réussissez votre compétence 'Burning slash' qui inflige :" , A+ " points de dégâts")
                                   .addField("Enflammer :" , "Vous arrivez enflammer votre cible pendant " +C+ " tours, elle subira " +D+ " points de dégâts par tours !")
                                   .setImage("https://steamusercontent-a.akamaihd.net/ugc/911296644870506361/6415F9D8B892ABD2EAB81DB5EA271AC297C16CBA/")
                                   .setTimestamp()
                                   message.channel.send({embed})}
                                   talkedRecently.add(message.author.id+9);
                                   setTimeout(() => {
                                    talkedRecently.delete(message.author.id+9);
                                  }, 3000000);
                              }
                                   }
                              });
  
                            
                              
                            bot.on('message', message => {
                              let cont = message.content.slice(prefix.length).split(" ");
                              const args = cont.slice(1);
                              if (message.content.startsWith(prefix + "Crucifixion")) {
                                if (talkedRecently.has(message.author.id+10)) {
                                  const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Cooldown :" , " Vous devrez attendre 30 minutes avant de pouvoir refaire ceci !")
                                   .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                   .setTimestamp()
                                   message.channel.send({embed})
                          } else {
                                  let degats = args.slice(1).join(" : ");
                                  
                                  const premier = (Math.floor((degats/4)*Math.random()+1*(degats/6)))
                                  const deuxième = (Math.floor((degats/4)*Math.random()+1*(degats/6)))
                                  const A = premier+deuxième
                                  const B = (Math.floor(100)*Math.random()+1)
                                  const C = (Math.floor((5)*Math.random()+1))
                                  const D = (Math.floor((degats/3)*Math.random()+1*(degats/3)))
                                  if(B < 50){
                                   const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Vous réussissez votre compétence 'Crucifixion' qui inflige :" , A+ " points de dégâts")
                                   .addField("Votre premier coup horizontal rapide inflige :" , premier+ " points de dégâts")
                               .addField("Votre deuxième coup horizontal rapide inflige :" , deuxième+ " points de dégâts")
                                   .addField("Saignement :" , "Vous n'arrivez cependant pas à faire saigner votre cible...")
                                   .setImage("https://data.whicdn.com/images/132920508/original.gif")
                                   .setTimestamp()
                                   message.channel.send({embed})}
                                   if(B > 51){
                                   const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Vous réussissez votre compétence 'Crucifixion' qui inflige :" , A+ " points de dégâts")
                                   .addField("Votre premier coup horizontal rapide inflige :" , premier+ " points de dégâts")
                               .addField("Votre deuxième coup horizontal rapide inflige :" , deuxième+ " points de dégâts")
                                   .addField("Saignement :" , "Vous arrivez faire saigner votre cible pendant " +C+ " tours, elle subira " +D+ " points de dégâts par tours !")
                                   .setImage("https://data.whicdn.com/images/132920508/original.gif")
                                   .setTimestamp()
                                   message.channel.send({embed})}
                                   talkedRecently.add(message.author.id+10);
                                   setTimeout(() => {
                                    talkedRecently.delete(message.author.id+10);
                                  }, 3000000);
                              }
                                   }
                              });


                        
                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Vorpal strike")) {
                            if (talkedRecently.has(message.author.id+11)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
                              let degats = args.slice(2).join(" : ");
                              const B = (Math.floor((degats)*Math.random()+1*(degats/3)))
                              const C = (Math.floor((degats)*Math.random()+1*(degats/3)))
                              const D = (Math.floor((degats)*Math.random()+1*(degats/3)))
                              const A = B+C+D
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Vorpal Strike' qui inflige :" , A+ " points de dégâts")
                               .addField("Votre premier coup horizontal rapide inflige :" , B+ " points de dégâts")
                               .addField("Votre deuxième coup horizontal rapide inflige :" , C+ " points de dégâts")
                               .addField("Votre troisième coup horizontal rapide inflige :" , D+ " points de dégâts")
                               .setImage("https://gifer.com/i/8Z1S.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               talkedRecently.add(message.author.id+11);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+11);
                              }, 1500000);
                          }
                          });


                          bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Tourbillon")) {
                              if (talkedRecently.has(message.author.id+12)) {
                                const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                 .setTimestamp()
                                 message.channel.send({embed})
                        } else {
                                let degats = args.slice(1).join(" : ");
                                const B = (Math.floor((degats/8)*Math.random()+1*(degats/10)))
                                const C = (Math.floor((degats/8)*Math.random()+1*(degats/10)))
                                const D = (Math.floor((degats/8)*Math.random()+1*(degats/10)))
                                const E = (Math.floor((degats/8)*Math.random()+1*(degats/10)))
                                const F = (Math.floor((degats/8)*Math.random()+1*(degats/10)))
                                const I = (Math.floor((3)*Math.random()+1))
                                const A = B+C+D+E+F
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Tourbillon' qui inflige :" , A+ " points de dégâts")
                                 .addField("Vous touchez avec vos cinqs coups :" , I+ " ennemis !")
                                 .addField("Votre premier coup pendant le tourbillon inflige :" , B+ " points de dégâts")
                                 .addField("Votre deuxième coup pendant le tourbillon inflige :" , C+ " points de dégâts")
                                 .addField("Votre troisième coup pendant le tourbillon inflige :" , D+ " points de dégâts")
                                 .addField("Votre quatrième coup pendant le tourbillon inflige :" , E+ " points de dégâts")
                                 .addField("Votre cinquième coup pendant le tourbillon inflige :" , F+ " points de dégâts")
                                 .setImage("https://steamusercontent-a.akamaihd.net/ugc/267218898430870822/1D778F3A420230BAEEDBC727AAEED63C177F2701/")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 talkedRecently.add(message.author.id+12);
                                 setTimeout(() => {
                                  talkedRecently.delete(message.author.id+12);
                                }, 1500000);
                            }
                            });



                          bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Treble scythe")) {
                              if (talkedRecently.has(message.author.id+13)) {
                                const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                 .setTimestamp()
                                 message.channel.send({embed})
                        } else {
                                let degats = args.slice(2).join(" : ");
                                const B = (Math.floor((degats/2)*Math.random()+1*(degats/3)))
                                const C = (Math.floor((degats/2)*Math.random()+1*(degats/3)))
                                const D = (Math.floor((3)*Math.random()+1))
                                const A = B+C
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Vous réussissez votre compétence 'Treble scythe' qui inflige :" , A+ " points de dégâts !")
                                 .addField("Vous touchez avec vos deux coups :" , D+ " ennemis !")
                                 .addField("Votre premier coup en avant inflige :" , B+ " points de dégâts")
                                 .addField("Votre deuxième coup en avant inflige :" , C+ " points de dégâts")
                                 .setImage("https://steamusercontent-a.akamaihd.net/ugc/263835706284885987/3BF2E037D252C1B99F2C1116FDCDBABE8BBDAF2E/")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                 talkedRecently.add(message.author.id+13);
                                 setTimeout(() => {
                                  talkedRecently.delete(message.author.id+13);
                                }, 1500000);
                            }
                            });


                            bot.on('message', message => {
                              let cont = message.content.slice(prefix.length).split(" ");
                              const args = cont.slice(1);
                              if (message.content.startsWith(prefix + "Vertical arc")) {
                                if (talkedRecently.has(message.author.id+14)) {
                                  const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                   .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                   .setTimestamp()
                                   message.channel.send({embed})
                          } else {
                                  let degats = args.slice(2).join(" : ");
                                  const A = (Math.floor((degats)*Math.random()+1*(degats)))
                                   const embed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username , message.author.avatarURL)
                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                   .setColor(3447003)
                                   .addField("Vous réussissez votre compétence 'Vertical arc' qui inflige :" , A+ " points de dégâts !")
                                   .setImage("https://media.giphy.com/media/108rdBZBYAc7bq/giphy.gif")
                                   .setTimestamp()
                                   message.channel.send({embed})}
                                   talkedRecently.add(message.author.id+14);
                                   setTimeout(() => {
                                    talkedRecently.delete(message.author.id+14);
                                  }, 1500000);
                              }
                              });


                              bot.on('message', message => {
                                let cont = message.content.slice(prefix.length).split(" ");
                                const args = cont.slice(1);
                                if (message.content.startsWith(prefix + "Rage spike")) {
                                  if (talkedRecently.has(message.author.id+15)) {
                                    const embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                     .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                     .setTimestamp()
                                     message.channel.send({embed})
                            } else {
                                    let degats = args.slice(2).join(" : ");
                                    const A = (Math.floor((degats*3)*Math.random()+1*(degats/1.5)))
                                     const embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Vous réussissez votre compétence 'Rage spike' qui inflige :" , A+ " points de dégâts !")
                                     .setImage("https://i.pinimg.com/originals/ea/38/ec/ea38ec9fc2bf709adeed3624c9d08be3.gif")
                                     .setTimestamp()
                                     message.channel.send({embed})}
                                     talkedRecently.add(message.author.id+15);
                                     setTimeout(() => {
                                      talkedRecently.delete(message.author.id+15);
                                    }, 1500000);
                                }
                                });


                              bot.on('message', message => {
                                let cont = message.content.slice(prefix.length).split(" ");
                                const args = cont.slice(1);
                                if (message.content.startsWith(prefix + "Quadruple pain")) {
                                  if (talkedRecently.has(message.author.id+16)) {
                                    const embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Cooldown :" , " Vous devrez attendre 15 minutes avant de pouvoir refaire ceci !")
                                     .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                                     .setTimestamp()
                                     message.channel.send({embed})
                            } else {
                                    let degats = args.slice(2).join(" : ");
                                    const B = (Math.floor((degats*1.10)*Math.random()+1*(degats/10)))
                                    const C = (Math.floor((degats*1.10)*Math.random()+1*(degats/10)))
                                    const D = (Math.floor((degats*1.10)*Math.random()+1*(degats/10)))
                                    const E = (Math.floor((degats*1.10)*Math.random()+1*(degats/10)))
                                    const A = B+C+D+E
                                     const embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Vous réussissez votre compétence 'Quadruple pain' qui inflige :" , A+ " points de dégâts")
                                     .addField("Votre premier coup d'estoc inflige :" , B+ " points de dégâts")
                                     .addField("Votre deuxième coup d'estoc inflige :" , C+ " points de dégâts")
                                     .addField("Votre troisième coup d'estoc inflige :" , D+ " points de dégâts")
                                     .addField("Votre quatrième coup d'estoc inflige :" , E+ " points de dégâts")
                                     .setImage("https://pa1.narvii.com/6615/6cc6c062803a1bb71b4ee2e6838bf948a980ee1e_hq.gif")
                                     .setTimestamp()
                                     message.channel.send({embed})}
                                     talkedRecently.add(message.author.id+16);
                                     setTimeout(() => {
                                      talkedRecently.delete(message.author.id+16);
                                    }, 1500000);
                                }
                                });
    
  


               

            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Apprentissage des compétences")) {
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                   .setColor(3447003)
                   .addField("Niveau 50 :" , "Vous débloquez une compétence supplémentaire !")
                   .addBlankField(true)
                   .addField("Niveau 100 :" , "Vous débloquez une compétence supplémentaire !")
                   .setImage("https://www.nautiljon.com/images/univers/00/41/sword_art_online_aincrad_14.jpg")
                    .setTimestamp()
                    message.channel.send({embed})
                  }   
                });


    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Objets")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les objets :\n\n" , "Il existe un tas d'objets dans ce monde, que ce soit des équipements, des armes, des potions, des parchemins et bien d'autres choses.\n\nCes objets ont tous une signification particulières et leur fonction !\n\nPour avoir plus d'informations concernant un objet :\n=[Nom de l'objet]\n\nLorsque vous gagnez ou fabriquer un objet, je vous conseille de l'écrire sous la forme [HP / Défense / Dégâts]\n\nPar exemple : Casque en peau arraché [HP : 2 / Défense : 0 / Dégâts : 0] ou même directement : Casque en peau arraché [2/0/0]\n\nQuand vous équipez un objet qui vous donne 4 HP supplémentaire max par exemple, cela ne vous redonne pas de la vie !\n\nExemple : Je possède 24/40 HP actuellement et je m'équipe une cape me donnant +4 HP max, je ne me retrouve pas à 28/44 HP mais à 24/44 HP !")
        .setImage("https://vignette.wikia.nocookie.net/powerlisting/images/3/39/Elucidator.png/revision/latest?cb=20150111073313")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Personnage")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Création de votre personnage :" , "Pour créer votre personnage, écrivez :\n\n=Fiche de personnage\n\nIl faudra remplir la fiche de votre personnage et une fois que vous avez finis, copiez la et coller là dans le salon 'Fiche à valider' en attendant qu'un membre du staff vous valide et vous aide !\n\nUne fois votre personnage créer, un membre du staff vous créera un salon classé par ordre alphabétique sur ce discord : https://discord.gg/ByaFWzc\n\nCe salon permettra de justement noter toutes les informations concernant votre personnage durant votre aventure !\n\nUne fois tous ça finis, vous devrez vous renommé sur le RP de la manière suivante : [Pseudo] [Niveau] [HP] [Dégâts] [Défense] !\n\nPar exemple : [Yato][1][30/30][6][0]\n\nQuand vous perdrez des HP ou que vos stats changent, il suffira de modifier votre pseudo et de bien le noter sur la fiche de votre personnage de l'autre serveur discord !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Fiche de personnage")) {
        message.channel.send("\n```۝▬▬▬▬▬▬▬▬『`INFORMATIONS DE VOTRE PERSONNAGE`』▬▬▬▬▬▬▬▬۝\n\nNom :【A remplir】\n\nPrénom :【A remplir】\n\nPseudo :【A remplir】\n\nÂge : 【A remplir】\n\nSexe : 【A remplir】\n\nPhysique :【A remplir avec image si vous voulez, c'est conseillé】\n\nPersonnalité :【A remplir】\n\nPourquoi être venus dans SAO, votre histoire :【A remplir et c'est la raison RP】\n\nArme de base :【A remplir en écrivant =Armes】\n\nClasse :【A remplir en écrivant =Classes】\n\nCompétence :【A remplir en écrivant =Compétences】\n\nParticularité :【A remplir en écrivant =Particularités】\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nNiveau : 1\n\nExp : 0/200\n\nGuilde : aucune\n\nDéfense total : 0 points\n\nAttaque total : 6 points \n\nHP : 40/40\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nArme :【Votre arme de base】\n\nCasque : aucun\n\nEpaulières : aucunes\n\nPlastron : aucun\n\nCape : aucune\n\nCeinture : aucune\n\nGantelets : aucun\n\nJambières : aucunes\n\nBotte : aucunes\n\nAnneau : aucun\n\nAmulette : aucune\n\nFamilier : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nCaractéristiques :\n\n0 points de puissance\n\n0 points de défense\n\n0 points de vitalité\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nJoueurs tués : aucun\n\nMonstres tués : aucun\n\nSanglier : aucun\n\nRenard : aucun\n\nLoup : aucun\n\nSlime : aucun\n\nLoup de sang : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nChasseur niveau 1 : 0/50\n\nCueilleur niveau 1 : 0/50\n\nMineur niveau 1 : 0/50\n\nBûcheron niveau 1 : 0/50\n\nPêcheur niveau 1 : 0/50\n\nMaître d'armes niveau 1 : 0/50\n\nMaître du cuir niveau 1 : 0/50\n\nForgeron niveau 1 : 0/50\n\nCouturier niveau 1 : 0/50\n\nCuisinier niveau 1 : 0/50\n\nAlchimiste niveau 1 : 0/50\n\nEnchanteur niveau 1 : 0/50\n\nEbeniste niveau 1 : 0/50\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nListe d'amis : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nInventaire :\n\n100 Cols\n\n1 Potion faible de soin [+40 HP]\n\n1 Ragoût de lapin [+20 HP]\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝```");
           }   
        });

bot.on('message', message => {
 if (message.content === prefix + "Combat") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Déroulement de combat, partie 1 :" , "Le système de combat est avant tout un système par tour, c'est à dire que chaque personne et monstre pourra agir que pendant son tour de jeu !\n\nIl faut savoir que, dans un combat lorsque c'est votre tour, vous aurez droit à une attaque ou une action, mais si un joueur ou un monstre vous attaque, vous aurez droit de faire une action défensive !\n\nPour voir la liste des différents coups et actions défensives possibles ainsi que pour comprendre comment sa marche :\n=Coups et défenses\n\nVous disposez de 'HP' qui sont dans votre pseudo, une fois que vous êtes à 0 HP, vous mourrez...\n\nVous disposez aussi de 'points de dégâts' qui vous permettent d'infliger des coups plus puissants à vos adversaires, plus vous en aurez, plus vous ferez mal !\n\nVous disposez aussi de 'points d'armure' qui permette de réduire les dégâts finaux reçus que vous subissez, si un ennemis inflige 10 points de dégâts après votre action défensive et que vous avez 4 points de défense, vous perdrez que 6 HP avec l'armure !")
       .addField("Déroulement de combat, partie 2 :" , "Dans un combat, ce sera toujours au tour des monstres d'attaquer avant les joueurs, dans l'ordre que vous souhaitez !\n\nQuand c'est au tour des joueurs, il faudra définir au départ qui commence son tour, le suivant, et ainsi de suite !\n\nPour savoir quel joueur attaquera un monstre, il suffit d'écrire :\n=Ciblage : [Nombre de joueurs dans le combat]\n\nLors d'un combat contre un monstre, il faudra ne pas oublier de noter ses HP tout au long du combat, vous pouvez présenter ceci comme vous voulez !\n\nExemple :\nLoup [A] : 80/80 HP\nLoup [B] : 50/80 HP\nLoup [C] : 24/80 HP\n\nLes actions défensives et attaques des monstres seront écrites sur ses infos si vous écrivez :\n=[Nom du monstre]\n\Selon la zone où vous voulez faire un combat, il y aura une commande à faire  étant :\n\n=Plaines combat : [Nombre de participants]\n\nSi vous rejoignez un combat, vous devez faire cette commande, par exemple si je rejoins le combat déjà lancé avec moi et un amis, je fait :\n\n=Plaines combat : 2")
             .addField("Déroulement de combat, partie 3 :" , "Lorsque vous êtes en groupe et que vous décidez de faire un combat, il est interdit de faire la commande chacun son tour si les autres ont la commande sous cooldown !\n\nC'est à dire, il faut attendre 15 minutes de base pour pouvoir relancer un combat, si vous êtes en groupe, seulement une personne fait la commande, les autres n'ont pas droit de la faire à sa place pour ne pas respecter le cooldown !")

    .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Classes")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les classes :" , "Lorsque vous créez votre personnage, vous devrez choisir une des classes suivantes :\n\n[Combattant]\n[Assassin]\n[Paladin]\n[Vindicateur]\n[Chevalier]\n[Berserker]\n\nCes classes vous permettent de déclencher une fois par jour, une compétence unique et très puissante !\n\nPour déclencher la compétence selon votre classe :\n\n=Combattant : [Vos dégâts]\n=Assassin : [Vos dégâts]\n=Chevalier\n=Paladin : [Vos HP max]\n=Vindicateur\n=Berserker : [Vos dégâts]\n\nUne classe vous permet aussi de gagner des bonus selon votre niveau, vous aurez plus d'informations en écrivant :\n\n=Niveaux")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});
  
  
   

bot.on('message', message => {
 let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Combattant")) {
     if (talkedRecently.has(message.author.id+1011)) {
        const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    let X = args.slice(1).join(" : ");
    const A = (Math.floor((X*1.5)*Math.random()+1*(X*1)))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du combattant :" , "Vous déclenchez votre compétence appartenant à tous les combattants, vous produisez un coup déstabilisant sur votre adversaire qui inflige " +A+ " dégâts, il ne pourra faire aucunes esquives ni de parades pendant trois tours !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
         talkedRecently.add(message.author.id+101);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+101);
     }, 86400000);
 }}
    })



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Assassin")) {
     if (talkedRecently.has(message.author.id+102)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    let X = args.slice(1).join(" : ");
    const A = (Math.floor((X*2)*Math.random()+1*(X*2)))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence de l'assassin :" , "Vous déclenchez votre compétence appartenant à tous les assassins, vous produisez un coup rapide mais précis sur un point vital de votre adversaire qui inflige " +A+ " dégâts !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      talkedRecently.add(message.author.id+102);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+102);
     }, 86400000);
  }}
    })



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Berserker")) {
     if (talkedRecently.has(message.author.id+103)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    let X = args.slice(1).join(" : ");
    const A = (Math.floor((X*1)*Math.random()+1*(X*0.5)))
    const B = A*2
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du berserker :" , "Vous déclenchez votre compétence appartenant à tous les berserkers, vous produisez un coup très puissant qui inflige " +A+ " dégâts et qui vous redonne " +B+ " HP !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
         talkedRecently.add(message.author.id+103);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+103);
     }, 86400000);
  }}
    })


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Vindicateur")) {
     if (talkedRecently.has(message.author.id+104)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du vindicateur :" , "Vous déclenchez votre compétence appartenant à tous les vindicateurs, vous doublez vos dégâts pendant trois tours !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
         talkedRecently.add(message.author.id+104);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+104);
     }, 86400000);
 }}
    })



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Paladin")) {
     if (talkedRecently.has(message.author.id+105)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    let X = args.slice(1).join(" : ");
    const A = X*(3/4)
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du paladin :" , "Vous déclenchez votre compétence appartenant à tous les paladins, vous reprenez " +A+ " HP !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
        talkedRecently.add(message.author.id+105);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+105);
     }, 86400000);
 }}
    })



bot.on('message', message => {
  if (message.content.startsWith(prefix + "Chevalier")) {
     if (talkedRecently.has(message.author.id+106)) {
      const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
       .setTimestamp()
       message.channel.send({embed})
} else {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du chevalier :" , "Vous déclenchez votre compétence appartenant à tous les chevaliers, vous doublez vos points d'armures pendant trois tours !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
         talkedRecently.add(message.author.id+106);
      setTimeout(() => {
       talkedRecently.delete(message.author.id+106);
     }, 86400000);
 }}
    })

    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Caractéristiques")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les caractéristiques :" , "Durant votre avancé dans le RP, vous gagnerez de l'expérience en tuant des monstres, en finissant des quêtes et même en complètant des donjons !\n\nL'expérience vous permettra d'avoir des niveaux qui vous rendront plus fort, qui débloqueront l'accès à certaines choses et bien d'autres choses.\n\nCependant, Lorsque vous gagnerez un niveau, vous gagnerez aussi un ou des points de caractéristiques, et vous pourrez les mettre dans un de ces 'attributs' suivants :\n\n[La puissance}\n[La vitalité]\n[La défense]\n\nChaque attributs signifie quelque chose :\n\nUn point de puissance augmente vos points de dégâts de 1 point supplémentaire !\nUn point de vitalité augmente vos HP max de 5 points supplémentaires !\nUn point de défense augmente votre armure de 0.5 point supplémentaire !\n\nVous l'aurez compris, selon ce que vous voulez devenir, vous aurez le choix parmis ces trois attributs.\n\nPour voir combien de points de caractéristiques vous gagnez selon votre niveau, écrivez :\n=Tableau des caractéristiques")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Tableau des caractéristiques")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Tableau des caractéristiques du niveau 1 à 15 :" , "Niveau 1 : Aucun\nNiveau 2 : 1 point de caractéristique suppplémentaire !\nNiveau 3 : 1 point de caractéristique suppplémentaire !\nNiveau 4 : 1 point de caractéristique suppplémentaire !\nNiveau 5 : 1 point de caractéristique suppplémentaire !\nNiveau 6 : 2 points de caractéristiques suppplémentaire !\nNiveau 7 : 2 points de caractéristiques suppplémentaire !\nNiveau 8 : 2 points de caractéristiques suppplémentaire !\nNiveau 9 : 2 points de caractéristiques suppplémentaire !\nNiveau 10 : 2 points de caractéristiques suppplémentaire !\nNiveau 11 : 3 points de caractéristiques suppplémentaire !\nNiveau 12 : 3 points de caractéristiques suppplémentaire !\nNiveau 13 : 3 points de caractéristiques suppplémentaire !\nNiveau 14 : 3 points de caractéristiques suppplémentaire !\nNiveau 15 : 3 points de caractéristiques suppplémentaire !")
           .addBlankField(true)
           .addField("Tableau des caractéristiques du niveau 16 à 30 :" , "Niveau 16 : 4 points de caractéristiques supplémentaire !\nNiveau 17 : 4 points de caractéristiques supplémentaire !\nNiveau 18 : 4 points de caractéristiques supplémentaire !\nNiveau 19 : 4 points de caractéristiques supplémentaire !\nNiveau 20 : 4 points de caractéristiques supplémentaire !\nNiveau 21 : 5 points de caractéristiques supplémentaire !\nNiveau 22 : 5 points de caractéristiques supplémentaire !\nNiveau 23 : 5 points de caractéristiques supplémentaire !\nNiveau 24 : 5 points de caractéristiques supplémentaire !\nNiveau 25 : 5 points de caractéristiques supplémentaire !\nNiveau 26 : 6 points de caractéristiques supplémentaire !\nNiveau 27 : 6 points de caractéristiques supplémentaire !\nNiveau 28 : 6 points de caractéristiques supplémentaire !\nNiveau 29 : 6 points de caractéristiques supplémentaire !\nNiveau 30 : 6 points de caractéristiques supplémentaire !")
           .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
            message.channel.send({embed})
          }   
        });

  
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Spécialisations")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(3447003)
    .addField("Les spécialisations, partie 1 :" , "Lorsque vous partez cueillir des plantes, ou chasser, miner, ou même si vous créez des équipements en cuir, en métal, en tissu, vous gagnerez parfois de l'expérience pour une spécialisation !\n\nCette expérience permet d'augmenter de niveaux dans justement vos spécialisations qui sont les suivantes :\n\n[Chasseur]\n[Cueilleur]\n[Mineur]\n[Bûcheron]\n[Pêcheur]\n[Maître d'arme]\n[Maître du cuir]\n[Forgeron]\n[Couturier]\n[Cuisinier]\n[Alchimiste]\n[Enchanteur]\n[Ebeniste]\n\nToutes ces spécialisations possèdent le même nombre de points d'expérience à avoir pour gagner un niveau dedans\n\nPour voir justement les niveaux de spécialisations :\n\n=Tableau des spécialisations\n\nPour calculer votre niveau de spécialisation selon vos points d'expérience :\n\n=Calculateur d'expérience de spécialisation : [Vos points d'expérience]")
    .addBlankField(true)
    .addField("Les spécialisations, partie 2 :" , "Votre niveau dans une spécialisation vous permettra de débloquer l'accès à certaines activité dans une zone, ou l'accès à un craft mais aussi à des bonus !\n\nPrenons l'exemple de la forêt, si vous voulez cueillir là-bas, il faudra que vous soyez niveau 2 dans la spécialisation 'Cueilleur' pour le faire, si vous êtes niveau 1, vous ne pourrez pas, si vous êtes de niveau 2 ou plus dans la spécialisation, vous pourrez !\n\nMaintenant, il faut comprendre que, si vous êtes niveau 2 dans la spécialisation 'Cueilleur' et que la forêt nécessite d'être niveau 2, vous pourrez cueillir là-bas, mais il faudra écrire ceci :\n\n =Forêt cueillir")
    .addBlankField(true)
    .addField("Les spécialisations, partie 3 :" , "Maintenant pour revenir aux bonus que donne un certain niveau dans une spécialisation, vous pouvez les voir en écrivant :\n=Chasseur\n=Mineur\n=Bûcheron\n=Pêcheur\n=Cueilleur")
    .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
     .setTimestamp()
     message.channel.send({embed})
    }   
  });

  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Chasseur")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Chasseur :" , "Niveau 1 : Aucun\nNiveau 2 : 1 point de dégât supplémentaire !\nNiveau 3 : 2 points de dégâts supplémentaire !\nNiveau 4 : 3 points de dégâts supplémentaire\nNiveau 5 : 4 points de dégâts supplémentaire !\nNiveau 6 : 5 points de dégâts supplémentaire !\nNiveau 7 : 6 points de dégâts supplémentaire !\nNiveau 8 : 7 points de dégâts supplémentaire !\nNiveau 9 : 8 points de dégâts supplémentaire !\nNiveau 10 : 9 points de dégâts supplémentaire")
      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
       .setTimestamp()
       message.channel.send({embed})
      }   
    });


    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Cueilleur")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Cueilleur :" , "Niveau 1 : Aucun\nNiveau 2 : 5 HP supplémentaire !\nNiveau 3 : 10 HP supplémentaire !\nNiveau 4 : 15 HP supplémentaire !\nNiveau 5 : 20 HP supplémentaire !\nNiveau 6 : 25 HP supplémentaire !\nNiveau 7 : 30 HP supplémentaire !\nNiveau 8 : 35 HP supplémentaire !\nNiveau 9 : 40 HP supplémentaire !\nNiveau 10 : 45 HP supplémentaire !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
         .setTimestamp()
         message.channel.send({embed})
        }   
      });

      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Mineur")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(3447003)
          .addField("Mineur :" , "Niveau 1 : Aucun\nNiveau 2 : 5 HP supplémentaire !\nNiveau 3 : 5 HP et 0.5 point d'armure supplémentaire !\nNiveau 4 : 10 HP et 0.5 point d'armure supplémentaire !\nNiveau 5 : 10 HP et 1 point d'armure supplémentaire supplémentaire !\nNiveau 6 : 15 HP et 1 point d'armure supplémentaire !\nNiveau 7 : 15 HP et 1.5 points d'armure supplémentaire !\nNiveau 8 : 20 HP et 1.5 points d'armure supplémentaire !\nNiveau 9 : 20 HP et 2 points d'armure supplémentaire !\nNiveau 10 : 25 HP et 2 points d'armure supplémentaire !")
          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
           .setTimestamp()
           message.channel.send({embed})
          }   
        });

        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Bûcheron")) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Bûcheron :" , "Niveau 1 : Aucun\nNiveau 2 : 0.5 point d'armure supplémentaire !\nNiveau 3 : 1 point d'armure supplémentaire !\nNiveau 4 : 1.5 points d'armure supplémentaire !\nNiveau 5 : 2 points d'armure supplémentaire !\nNiveau 6 : 2.5 points d'armure supplémentaire !\nNiveau 7 : 3 points d'armure supplémentaire !\nNiveau 8 : 3,5 points d'armure supplémentaire !\nNiveau 9 : 4 points d'armure supplémentaire !\nNiveau 10 : 4.5 points d'armure supplémentaire !")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
             .setTimestamp()
             message.channel.send({embed})
            }   
          });

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Pêcheur")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("Pêcheur :" , "Niveau 1 : Aucun\nNiveau 2 : 5 HP supplémentaire !\nNiveau 3 : 5 HP et 1 point de dégât supplémentaire !\nNiveau 4 : 10 HP et 1 point de dégât supplémentaire !\nNiveau 5 : 10 HP et 2 points de dégâts supplémentaire !\nNiveau 6 : 15 HP et 2 points de dégâts supplémentaire !\nNiveau 7 : 15 HP et 3 points de dégâts supplémentaire !\nNiveau 8 : 20 HP et 3 points de dégâts supplémentaire !\nNiveau 9 : 20 HP et 4 points de dégâts supplémentaire !\nNiveau 10 : 25 HP et 4 points de dégâts supplémentaire !")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
               .setTimestamp()
               message.channel.send({embed})
              }   
            });
    
  


  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Tableau des spécialisations")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("Tableau des spécialisations du niveau 1 à 10" , "Niveau 2 : 50 points d'expérience nécessaire !\nNiveau 3 : 125 points d'expérience nécessaire !\nNiveau 4 : 225 points d'expérience nécessaire !\nNiveau 5 : 400 points d'expérience nécessaire !\nNiveau 6 : 700 points d'expérience nécessaire !\nNiveau 7 : 1200 points d'expérience nécessaire !\nNiveau 8 : 2000 points d'expérience nécessaire !\nNiveau 9 : 3500 points d'expérience nécessaire !\nNiveau 10 : 6000 points d'expérience nécessaire !")
      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
       .setTimestamp()
       message.channel.send({embed})
      }   
    });

  
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Cristal")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .addField("Le cristal, partie 1 :" , "Dans le monde de SAO, vous possèdez au dessus de votre personne, un cristal avec une couleur qui signifie quelque chose\n\nLe cristal vert : vous êtes un honnête joueur, n'ayant pas commis quelque chose d'illégal !\n\nLe cristal orange : vous êtes un joueur dont les gens se méfient, car vous pouvez très bien avoir de mauvaises intentions !\n\nLe cristal rouge : vous êtes ce que l'on nomme un 'PK' signifiant Player Killer, vous êtes un meurtrier qui n'hésite pas à tué, à menacé, à tous faire pour votre intêret sans aucune pitié !")
        .addBlankField(true)
        .addField("Le cristal, partie 2 :" , "Pour acquérir le cristal orange, vous devez avoir frapper un joueur que ce soit avec une arme ou à mains nues ou l'avoir menacé oralement de mort ou l'avoir voler ou même l'avoir emmener de force quelque part comme une séquestration mais aussi, si vous rentrez par effraction chez quelqu'un et que vous n'êtes pas autorisé\n\nPour acquérir le cristal rouge, vous devez avoir tué un joueur ou du moins, que ce soit votre coup final qui achève un joueur, si vous faites trop de meurtres, votre cristal deviendra noir...\n\nPeux importe la couleur de votre cristal, vous pouvez aller en prison si vous méritez une sanction cependant il existe une règle :\n\nUn joueur cristal vert qui attaque un joueur cristal orange, deviendra lui même cristal orange !\n\nUn joueur cristal vert qui attaque un joueur cristal rouge, ne deviendra pas orange, tous les joueurs ont droit de tué un joueur cristal rouge à vue sans que le cristal vert d'un joueur change !")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Mort")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("La mort :" , "Lorsque vous êtes en position de faiblesse, la mort pourrait vite arriver, et la mort est punitive dans SAO puisque votre personnage ne respawn pas, il meurt définitivement...\n\nC'est pour cela qu'il ne faut pas prendre la difficulté de ce monde à la légère surtout en extérieur et dans les donjons ainsi que contre des boss !\n\nSi vous venez à mourir, vous devrez refaire un nouveau personnage, qui reprendra tous à zéro, vous n'aurez plus vos objets, plus vos niveaux, plus vos niveaux de spécialisation, plus rien pas même vos souvenirs vus que vous êtes quelqu'un de nouveau !\n\nLe HRP du type 'Je suis de retour, je suis mort' ou 'J'ai l'impression de te connaître' est complètement interdit, si vous mourrez, vous êtes quelqu'un de totalement nouveau !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Niveaux")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les niveaux, partie 1 :" , "Vous gagnerez des niveaux en tuant des monstres, en accomplissant des quêtes et des donjons, selon votre niveaux vous débloquerez l'accès à certains coups, mais aussi vous gagnerez des points de caractéristiques et des bonus !\n\nLes points d'expérience lorsque vous gagnez un niveau ne se re remettent pas à 0, ils restent présent dans vos points d'expérience !\n\nPour comprendre ce que c'est que ce système de 'Points de caractéristiques', écrivez :\n\n=Caractéristiques\n\nPour calculer votre niveau selon vos points d'expérience, écrivez :\n\n=Calculateur d'expérience de niveaux : [Vos points d'expérience]\n\nPour consulter les informations et l'expérience nécessaire d'un niveau, écrivez :\n\n=Tableau des niveaux")
       .addBlankField(true)
       .addField("Les niveaux, partie 2 :" , "Pour consulter les bonus à chaques niveaux pour un Combattant, écrivez\n\n=Bonus des niveaux de combattant\n\nPour consulter les bonus à chaques niveaux pour un Assassin, écrivez\n\n=Bonus des niveaux d'assassin\n\nPour consulter les bonus à chaques niveaux pour un Berserker, écrivez\n\n=Bonus des niveaux de berserker\n\nPour consulter les bonus à chaques niveaux pour un Chevalier, écrivez\n\n=Bonus des niveaux de chevalier\n\nPour consulter les bonus à chaques niveaux pour un Paladin, écrivez\n\n=Bonus des niveaux de paladin\n\nPour consulter les bonus à chaques niveaux pour un Vindicateur, écrivez\n\n=Bonus des niveaux de vindicateur")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Bonus des niveaux de combattant")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("Les bonus des niveaux pour Combattant de 2 à 10 :" , "Niveau 2 : Vous gagnez 5 HP !\n\nNiveau 3 : Vous gagnez 10 HP !\n\nNiveau 4 : Vous gagnez 15 HP !\n\nNiveau 5 : Vous gagnez 15 HP et 1 point de dégât !\n\nNiveau 6 : Vous gagnez 15 HP et 2 points de dégâts !\n\nNiveau 7 : Vous gagnez 15 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 8 : Vous gagnez 20 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 9 : Vous gagnez 25 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 10 : Vous gagnez 30 HP et 2 points de dégâts et 0.5 point d'armure !")
           .addBlankField(true)
           .addField("Les bonus des niveaux pour Combattant de 11 à 20 :" , "Niveau 11 : Vous gagnez 30 HP et 3 points de dégâts et 0.5 point d'armure !\n\nNiveau 12 : Vous gagnez 30 HP et 4 points de dégâts et 0.5 point d'armure !\n\nNiveau 13 : Vous gagnez 30 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 14 : Vous gagnez 35 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 15 : Vous gagnez 40 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 16 : Vous gagnez 45 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 17 : Vous gagnez 45 HP et 5 points de dégâts et 1 point d'armure !\n\nNiveau 18 : Vous gagnez 45 HP et 6 points de dégâts et 1 point d'armure !\n\nNiveau 19 : Vous gagnez 45 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 20 : Vous gagnez 50 HP et 6 points de dégâts et 1,5 points d'armure !")
           .addBlankField(true)
           .addField("Les bonus des niveaux pour Combattant de 21 à 30 :" , "Niveau 21 : Vous gagnez 55 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 22 : Vous gagnez 60 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 23 : Vous gagnez 60 HP et 7 points de dégâts et 1,5 points d'armure !\n\nNiveau 24 : Vous gagnez 60 HP et 8 points de dégâts et 1,5 points d'armure !\n\nNiveau 25 : Vous gagnez 60 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 26 : Vous gagnez 65 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 27 : Vous gagnez 70 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 28 : Vous gagnez 75 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 29 : Vous gagnez 75 HP et 9 points de dégâts et 2 points d'armure !\n\nNiveau 30 : Vous gagnez 75 HP et 10 points de dégâts et 2 points d'armure !")
           .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
            message.channel.send({embed})
          }   
        });

        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Bonus des niveaux d'assassin")) {
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("Les bonus des niveaux pour Assassin de 2 à 10 :" , "Niveau 2 : Vous gagnez 1 point de dégâts !\n\nNiveau 3 : Vous gagnez 2 points de dégât !\n\nNiveau 4 : Vous gagnez 3 points de dégâts !\n\nNiveau 5 : Vous gagnez 3 points de dégâts et 0,5 point d'armure !\n\nNiveau 6 : Vous gagnez 3 points de dégâts et 1 point d'armure !\n\nNiveau 7 : Vous gagnez 3 points de dégâts et 1 point d'armure et 5 HP !\n\nNiveau 8 : Vous gagnez 4 points de dégâts et 1 point d'armure et 5 HP !\n\nNiveau 9 : Vous gagnez 5 points de dégâts et 1 point d'armure et 5 HP !\n\nNiveau 10 : Vous gagnez 6 points de dégâts et 1 point d'armure et 5 HP !")
               .addBlankField(true)
               .addField("Les bonus des niveaux pour Assassin de 11 à 20 :" , "Niveau 11 : Vous gagnez 6 points de dégâts et 1,5 points d'armure et 5 HP !\n\nNiveau 12 : Vous gagnez 6 points de dégâts et 2 points d'armure et 5 HP !\n\nNiveau 13 : Vous gagnez 6 points de dégâts et 2 points d'armure et 10 HP !\n\nNiveau 14 : Vous gagnez 7 points de dégâts et 2 points d'armure et 10 HP !\n\nNiveau 15 : Vous gagnez 8 points de dégâts et 2 points d'armure et 10 HP !\n\nNiveau 16 : Vous gagnez 9 points de dégâts et 2 points d'armure et 10 HP !\n\nNiveau 17 : Vous gagnez 9 points de dégâts et 2,5 points d'armure et 10 HP !\n\nNiveau 18 : Vous gagnez 9 points de dégâts et 3 points d'armure et 10 HP !\n\nNiveau 19 : Vous gagnez 9 points de dégâts et 3 points d'armure et 15 HP !\n\nNiveau 20 : Vous gagnez 10 points de dégâts et 3 points d'armure et 15 HP !")
               .addBlankField(true)
               .addField("Les bonus des niveaux pour Assassin de 21 à 30 :" , "Niveau 21 : Vous gagnez 11 points de dégâts et 3 points d'armure et 15 HP !\n\nNiveau 22 : Vous gagnez 12 points de dégâts et 3 points d'armure et 15 HP !\n\nNiveau 23 : Vous gagnez 12 points de dégâts et 3,5 points d'armure et 15 HP !\n\nNiveau 24 : Vous gagnez 12 points de dégâts et 4 points d'armure et 15 HP !\n\nNiveau 25 : Vous gagnez 12 points de dégâts et 4 points d'armure et 20 HP !\n\nNiveau 26 : Vous gagnez 13 points de dégâts et 4 points d'armure et 20 HP !\n\nNiveau 27 : Vous gagnez 14 points de dégâts et 4 points d'armure et 20 HP !\n\nNiveau 28 : Vous gagnez 15 points de dégâts et 4 points d'armure et 20 HP !\n\nNiveau 29 : Vous gagnez 15 points de dégâts et 4,5 points d'armure et 20 HP !\n\nNiveau 30 : Vous gagnez 15 points de dégâts et 5 points d'armure et 20 HP !")
               .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                .setTimestamp()
                message.channel.send({embed})
              }   
            });

            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Bonus des niveaux de berserker")) {
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                   .setColor(3447003)
                   .addField("Les bonus des niveaux pour Berserker de 2 à 10 :" , "Niveau 2 : Vous gagnez 1 point de dégâts !\n\nNiveau 3 : Vous gagnez 2 points de dégâts !\n\nNiveau 4 : Vous gagnez 3 points de dégâts !\n\nNiveau 5 : Vous gagnez 3 points de dégâts et 5 HP !\n\nNiveau 6 : Vous gagnez 3 points de dégâts et 10 HP !\n\nNiveau 7 : Vous gagnez 3 points de dégâts et 10 HP et 0,5 point d'armure !\n\nNiveau 8 : Vous gagnez 4 points de dégâts et 10 HP et 0,5 point d'armure !\n\nNiveau 9 : Vous gagnez 5 points de dégâts et 10 HP et 0,5 point d'armure !\n\nNiveau 10 :  Vous gagnez 6 points de dégâts et 10 HP et 0,5 point d'armure !")
                   .addBlankField(true)
                   .addField("Les bonus des niveaux pour Berserker de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 6 points de dégâts et 15 HP et 0,5 point d'armure !\n\nNiveau 12 : Vous gagnez 6 points de dégâts et 20 HP et 0,5 point d'armure !\n\nNiveau 13 : Vous gagnez 6 points de dégâts et 20 HP et 1 point d'armure !\n\nNiveau 14 : Vous gagnez 7 points de dégâts et 20 HP et 1 point d'armure !\n\nNiveau 15 : Vous gagnez 8 points de dégâts et 20 HP et 1 point d'armure !\n\nNiveau 16 : Vous gagnez 9 points de dégâts et 20 HP et 1 point d'armure !\n\nNiveau 17 : Vous gagnez 9 points de dégâts et 25 HP et 1 point d'armure !\n\nNiveau 18 : Vous gagnez 9 points de dégâts et 30 HP et 1 point d'armure !\n\nNiveau 19 : Vous gagnez 9 points de dégâts et 30 HP et 1,5 points d'armure !\n\nNiveau 20 : Vous gagnez 10 points de dégâts et 30 HP et 1,5 points d'armure !")
                   .addBlankField(true)
                   .addField("Les bonus des niveaux pour Berserker de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 11 points de dégâts et 30 HP et 1,5 points d'armure !\n\nNiveau 22 : Vous gagnez 12 points de dégâts et 30 HP et 1,5 points d'armure !\n\nNiveau 23 : Vous gagnez 12 points de dégâts et 35 HP et 1,5 points d'armure !\n\nNiveau 24 : Vous gagnez 12 points de dégâts et 40 HP et 1,5 points d'armure !\n\nNiveau 25 : Vous gagnez 12 points de dégâts et 40 HP et 2 points d'armure !\n\nNiveau 26 : Vous gagnez 13 points de dégâts et 40 HP et 2 points d'armure !\n\nNiveau 27 : Vous gagnez 14 points de dégâts et 40 HP et 2 points d'armure !\n\nNiveau 28 : Vous gagnez 15 points de dégâts et 40 HP et 2 points d'armure !\n\nNiveau 29 : Vous gagnez 15 points de dégâts et 45 HP et 2 points d'armure !\n\nNiveau 30 : Vous gagnez 15 points de dégâts et 50 HP et 2 points d'armure !")
                   .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                    .setTimestamp()
                    message.channel.send({embed})
                  }   
                });

                bot.on('message', message => {
                  if (message.content.startsWith(prefix + "Bonus des niveaux de chevalier")) {
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                       .setColor(3447003)
                       .addField("Les bonus des niveaux pour Chevalier de 2 à 10 :" , "Niveau 2 : Vous gagnez 0,5 point d'armure !\n\nNiveau 3 : Vous gagnez 1 point d'armure !\n\nNiveau 4 : Vous gagnez 1,5 points d'armure !\n\nNiveau 5 : Vous gagnez 1,5 points d'armure et 5 HP !\n\nNiveau 6 : Vous gagnez 1,5 points d'armure et 10 HP !\n\nNiveau 7 : Vous gagnez 1,5 points d'armure et 10 HP et 1 point de dégât !\n\nNiveau 8 : Vous gagnez 2 points d'armure et 10 HP et 1 point de dégât !\n\nNiveau 9 : Vous gagnez 2,5 points d'armure et 10 HP et 1 point de dégât !\n\nNiveau 10 : Vous gagnez 3 points d'armure et 10 HP et 1 point de dégât !")
                       .addBlankField(true)
                       .addField("Les bonus des niveaux pour Chevalier de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 3 points d'armure et 15 HP et 1 point de dégât !\n\nNiveau 12 : Vous gagnez 3 points d'armure et 20 HP et 1 point de dégât !\n\nNiveau 13 : Vous gagnez 3 points d'armure et 20 HP et 2 points de dégâts !\n\nNiveau 14 : Vous gagnez 3,5 points d'armure et 20 HP et 2 points de dégâts !\n\nNiveau 15 : Vous gagnez 4 points d'armure et 20 HP et 2 points de dégâts !\n\nNiveau 16 : Vous gagnez 4,5 points d'armure et 20 HP et 2 points de dégâts !\n\nNiveau 17 : Vous gagnez 4,5 points d'armure et 25 HP et 2 points de dégâts !\n\nNiveau 18 : Vous gagnez 4,5 points d'armure et 30 HP et 2 points de dégâts !\n\nNiveau 19 : Vous gagnez 4,5 points d'armure et 30 HP et 3 points de dégâts !\n\nNiveau 20 : Vous gagnez 5 points d'armure et 30 HP et 3 points de dégâts !")
                       .addBlankField(true)
                       .addField("Les bonus des niveaux pour Chevalier de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 5,5 points d'armure et 30 HP et 3 points de dégâts !\n\nNiveau 22 : Vous gagnez 6 points d'armure et 30 HP et 3 points de dégâts !\n\nNiveau 23 : Vous gagnez 6 points d'armure et 35 HP et 3 points de dégâts !\n\nNiveau 24 : Vous gagnez 6 points d'armure et 40 HP et 3 points de dégâts !\n\nNiveau 25 : Vous gagnez 6 points d'armure et 40 HP et 4 points de dégâts !\n\nNiveau 26 : Vous gagnez 6,5 points d'armure et 40 HP et 4 points de dégâts !\n\nNiveau 27 : Vous gagnez 7 points d'armure et 40 HP et 4 points de dégâts !\n\nNiveau 28 : Vous gagnez 7,5 points d'armure et 40 HP et 4 points de dégâts !\n\nNiveau 29 : Vous gagnez 7,5 points d'armure et 45 HP et 4 points de dégâts !\n\nNiveau 30 : Vous gagnez 7,5 points d'armure et 50 HP et 4 points de dégâts !")
                       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                        .setTimestamp()
                        message.channel.send({embed})
                      }   
                    });

                    bot.on('message', message => {
                      if (message.content.startsWith(prefix + "Bonus des niveaux de paladin")) {
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                           .setColor(3447003)
                           .addField("Les bonus des niveaux pour Paladin de 2 à 10 :" , "Niveau 2 : Vous gagnez 0,5 point d'armure !\n\nNiveau 3 : Vous gagnez 1 point d'armure !\n\nNiveau 4 : Vous gagnez 1,5 points d'armure !\n\nNiveau 5 : Vous gagnez 1,5 points d'armure et 1 point de dégât !\n\nNiveau 6 : Vous gagnez 1,5 points d'armure et 2 points de dégâts !\n\nNiveau 7 : Vous gagnez 1,5 points d'armure et 2 points de dégâts et 5 HP !\n\nNiveau 8 : Vous gagnez 2 points d'armure et 2 points de dégâts et 5 HP !\n\nNiveau 9 : Vous gagnez 2,5 points d'armure et 2 points de dégâts et 5 HP !\n\nNiveau 10 : Vous gagnez 3 points d'armure et 2 points de dégâts et 5 HP !")
                           .addBlankField(true)
                           .addField("Les bonus des niveaux pour Paladin de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 3 points d'armure et 3 points de dégâts et 5 HP !\n\nNiveau 12 : Vous gagnez 3 points d'armure et 4 points de dégâts et 5 HP !\n\nNiveau 13 : Vous gagnez 3 points d'armure et 4 points de dégâts et 10 HP !\n\nNiveau 14 : Vous gagnez 3,5 points d'armure et 4 points de dégâts et 10 HP !\n\nNiveau 15 : Vous gagnez 4 points d'armure et 4 points de dégâts et 10 HP !\n\nNiveau 16 : Vous gagnez 4,5 points d'armure et 4 points de dégâts et 10 HP !\n\nNiveau 17 : Vous gagnez 4,5 points d'armure et 5 points de dégâts et 10 HP !\n\nNiveau 18 : Vous gagnez 4,5 points d'armure et 6 points de dégâts et 10 HP !\n\nNiveau 19 : Vous gagnez 4,5 points d'armure et 6 points de dégâts et 15 HP !\n\nNiveau 20 : Vous gagnez 5 points d'armure et 6 points de dégâts et 15 HP !")
                           .addBlankField(true)
                           .addField("Les bonus des niveaux pour Paladin de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 5,5 points d'armure et 6 points de dégâts et 15 HP !\n\nNiveau 22 : Vous gagnez 6 points d'armure et 6 points de dégâts et 15 HP !\n\nNiveau 23 : Vous gagnez 6 points d'armure et 7 points de dégâts et 15 HP !\n\nNiveau 24 : Vous gagnez 6 points d'armure et 8 points de dégâts et 15 HP !\n\nNiveau 25 : Vous gagnez 6 points d'armure et 8 points de dégâts et 20 HP !\n\nNiveau 26 : Vous gagnez 6,5 points d'armure et 8 points de dégâts et 20 HP !\n\nNiveau 27 : Vous gagnez 7 points d'armure et 8 points de dégâts et 20 HP !\n\nNiveau 28 : Vous gagnez 7,5 points d'armure et 8 points de dégâts et 20 HP !\n\nNiveau 29 : Vous gagnez 7,5 points d'armure et 9 points de dégâts et 20 HP !\n\nNiveau 30 : Vous gagnez 7,5 points d'armure et 10 points de dégâts et 20 HP !")
                           .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                            .setTimestamp()
                            message.channel.send({embed})
                          }   
                        });

                        bot.on('message', message => {
                          if (message.content.startsWith(prefix + "Bonus des niveaux de vindicateur")) {
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Les bonus des niveaux pour Vindicateur de 2 à 10 :" , "Niveau 2 : Vous gagnez 5 HP !\n\nNiveau 3 : Vous gagnez 10 HP !\n\nNiveau 4 : Vous gagnez 15 HP !\n\nNiveau 5 : Vous gagnez 15 HP et 0,5 point d'armure !\n\nNiveau 6 : Vous gagnez 15 HP et 1 point d'armure !\n\nNiveau 7 : Vous gagnez 15 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 8 : Vous gagnez 20 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 9 : Vous gagnez 25 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 10 : Vous gagnez 30 HP et 1 point d'armure et 1 point de dégât !")
                               .addBlankField(true)
                               .addField("Les bonus des niveaux pour vindicateur de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 30 HP et 1,5 points d'armure et 1 point de dégât !\n\nNiveau 12 : Vous gagnez 30 HP et 2 points d'armure et 1 point de dégât !\n\nNiveau 13 : Vous gagnez 30 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 14 : Vous gagnez 35 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 15 : Vous gagnez 40 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 16 : Vous gagnez 45 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 17 : Vous gagnez 45 HP et 2,5 points d'armure et 2 points de dégâts !\n\nNiveau 18 : Vous gagnez 45 HP et 3 points d'armure et 2 points de dégâts !\n\nNiveau 19 : Vous gagnez 45 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 20 : Vous gagnez 50 HP et 3 points d'armure et 3 points de dégâts !")
                               .addBlankField(true)
                               .addField("Les bonus des niveaux pour vindicateur de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 55 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 22 : Vous gagnez 60 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 23 : Vous gagnez 60 HP et 3,5 points d'armure et 3 points de dégâts !\n\nNiveau 24 : Vous gagnez 60 HP et 4 points d'armure et 3 points de dégâts !\n\nNiveau 25 : Vous gagnez 60 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 26 : Vous gagnez 65 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 27 : Vous gagnez 70 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 28 : Vous gagnez 75 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 29 : Vous gagnez 75 HP et 4,5 points d'armure et 4 points de dégâts !\n\nNiveau 30 : Vous gagnez 75 HP et 5 points d'armure et 4 points de dégâts !")
                               .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                .setTimestamp()
                                message.channel.send({embed})
                              }   
                            });
    


    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Tableau des niveaux")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Tableau des niveaux de 2 à 15 :" , "Niveau 2 : 200 points d'expérience nécessaire !\nNiveau 3 : 400 points d'expérience nécessaire !\nNiveau 4 : 600 points d'expérience nécessaire !\nNiveau 5 : 800 points d'expérience nécessaire !\nNiveau 6 : 1100 points d'expérience nécessaire !\nNiveau 7 : 1400 points d'expérience nécessaire !\nNiveau 8 : 1700 points d'expérience nécessaire !\nNiveau 9 : 2000 points d'expérience nécessaire !\nNiveau 10 : 2300 points d'expérience nécessaire !\nNiveau 11 : 2700 points d'expérience nécessaire !\nNiveau 12 : 3100 points d'expérience nécessaire !\nNiveau 13 : 3500 points d'expérience nécessaire !\nNiveau 14 : 3900 points d'expérience nécessaire !\nNiveau 15 : 4300 points d'expérience nécessaire !")
       .addBlankField(true)
       .addField("Tableau des niveaux de 16 à 30 :" , "Niveau 16 : 4800 points d'expérience nécessaire !\nNiveau 17 : 5300 points d'expérience nécessaire !\nNiveau 18 : 5800 points d'expérience nécessaire !\nNiveau 19 : 6300 points d'expérience nécessaire !\nNiveau 20 : 6800 points d'expérience nécessaire !\nNiveau 21 : 7600 points d'expérience nécessaire !\nNiveau 22 : 8400 points d'expérience nécessaire !\nNiveau 23 : 9200 points d'expérience nécessaire !\nNiveau 24 : 10000 points d'expérience nécessaire !\nNiveau 25 : 10800 points d'expérience nécessaire !\nNiveau 26 : 12000 points d'expérience nécessaire !\nNiveau 27 : 13200 points d'expérience nécessaire !\nNiveau 28 : 14400 points d'expérience nécessaire !\nNiveau 29 : 15600 points d'expérience nécessaire !\nNiveau 30 : 16800 points d'expérience nécessaire !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    

bot.on('message', message => {
 if (message.content === prefix + "Rétablissement") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Le rétablissement :" , "Lorsque vous êtes en ville, vous récupérez vos HP progressivement, il suffira d'écrire :\n\n=Régénération : [Vos HP max]")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Crafts")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Le craft :" , "Pour continuer votre aventure, et surtout survivre contre les monstres ainsi que les joueurs, il vous faudra fabriquer toutes sortes de choses, on appelle aussi cela du 'Craft' !\n\nPour craft un objet, il vous faudra les matériaux nécessaires pour le faire, ainsi que le niveau minimum pour l'utiliser et le niveau de spécialisation minimum requise !\n\nCraft un objet prendra un certain temps, et il vous rapportera de l'expérience dans une spécialisation, et si vous avez de la chance l'objet sera d'une bonne qualité !\n\nPour voir les informations sur un objet, s'il se craft ou non ainsi que les informations, écrivez :\n\n=[Nom de l'objet]")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Donjons")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .addField("Les donjons :" , "Il arrivera un moment où votre personnage sera puissant et il pourra faire ce que l'on appelle des 'Donjons' !\n\nAttention, les donjons sont des lieux où plusieurs salles comportent des monstres nombreux et puissants, il est donc très conseillé d'y aller en groupe !\n\nA savoir qu'une fois un donjon accomplis, vous gagnez un coffre vous donnant des objets, selon votre chances, les objets seront plus ou moins rare !\n\nPour voir la liste des donjons disponibles, écrivez :\n\n=Liste de donjons")
       .setColor(3447003)
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Liste de donjons")) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .addField("Liste des donjons :" , "=Donjon sauvage")
           .setColor(3447003)
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
            message.channel.send({embed})
          }   
        });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Familiers")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les familiers :" , "Parfois durant votre aventure, vous gagnerez sur des monstres, dans des coffres ou même pendant des évènements ce que l'on appelle un 'Familier' !\n\nCe sont des petits animaux qui vous permettent de non seulement vous offrir des bonus, mais aussi qui vous suivent partout où vous irez !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Quêtes")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les quêtes :" , "Ce sont des objectifs à accomplir pour avoir accès à des récompenses comme des cols, des points d'expériences ainsi que des objets !\n\nVous aurez le droit à avoir une quête aléatoire selon la zone, par exemples les quêtes aux plaines sont différentes des quêtes en forêt !\n\nVous n'aurez droit que d'accomplir une seul quêtes par jour, vous aurez droit d'en refaire une seulement 24 H plus tard minimum !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Guilde")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les guildes, partie 1 :" , "Arrivé à un certain stade, vous aurez probablement envie de jouer en équipe et donc de fonder ou rejoindre ce que l'on appelle une 'Guilde' !\n\nUne guilde est comme une alliance, un clan, une famille, où plusieurs gens s'entraident ou du moins, les joueurs ont des objectifs en communs !\n\nOn distingue trois types de guildes :\n\nLes guildes anti-PK, qui ont pour objectif de progresser mais aussi et surtout de mettre en prison ou tuer les PK qui rôdent !\n\nLes guildes neutres, elles progressent et ne sont pas vraiment pour ou contre le crime, ils sont là pour survivre et faire des alliances avec des guildes de PK ou d'anti-PK ne les dérangent pas !\n\nLes guildes PK, ce sont des guildes ayant pour but de tuer les joueurs, que ce soit des faibles ou des forts, pour des objectifs que ce soit par plaisir ou par interêts comme leur équipement et la réputation pour être craint !")
       .addBlankField(true)
       .addField("Les guildes, partie 2 :" , "Une fois que vous avez rejoins ou fondé une guilde, vous avez un certain grade qui peux évolué, vous avez aussi le droit d'avoir un coffre réservé à votre guilde à la banque de la guilde !\n\nDes tournois de guildes peuvent avoir lieu avec des récompenses à la clef, le nombre fait la force !")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Etats")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les états :" , "Lors d'un combat, il existe ce que l'on apelle des 'Etats' !\n\nCe sont des effets négatives que vous infligez sur un ou plusieurs ennemis, voici la liste des états qui existent :\n\n[Empoisonnement] : Inflige des dégâts supplémentaire !\n[Saignement] : Inflige des dégâts supplémentaire !\n[Enflammé] : Inflige des dégâts supplémentaire !\n[Charme] : Oblige l'ennemis à vous obéir !\n[Gèle] : Empêche de faire une attaque !\n[Paralysie] : Empêche de faire une attaque ainsi qu'une action défensive !\n[Sommeil] : Empêche la cible de faire une action, elle se réveille uniquement si elle reçoit des dégâts !\n[Etourdissement] : Empêche de faire une action défensive !\n\nCertains compétences provoqueront des états, il sera expliqué comment s'en servir !\n\nA savoir, les états ignorent l'armure de l'ennemis, c'est à dire que si votre cible est enflammé, empoisonné ou même sous l'effet de saignement, les dégâts qu'il reçoit ne sont pas réduits par son armure !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });

    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Métiers")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les métiers :" , "Vous avez le droit d'avoir un métier en ville de base, mais vous pourrez en avoir plusieurs autres selon votre 'Niveau d'activité' !\n\nLes niveaux d'activité sont ceux que vous gagnez en parlant et en participant beaucoup, vous verrez votre niveau d'activité sur votre profil [Vos rôles discord] !\n\nNiveau 15 : 2 métiers max !\nNiveau 30 : 3 métiers max !\nNiveau 45 : 4 métiers max !\nNiveau 60 : 5 métiers max !\n\nUn métier permet de montrer que vous êtes spécialisé dans quelque chose, si par exemple vous aimez souvent miner, alors 'Mineur' sera fait pour vous !\n\nUn métier ne donne pas d'avantages particuliers, mais il permet de facilement s'organiser en ville, en guilde et dans bien d'autres circonstances !\n\nPour obtenir un métier, il faudra faire une annonce dans le 'Menu des annonces' et les joueurs auront 24 H pour voté pour :white_check_mark: ou contre :x: et selon le résultat, vous aurez ou non le métier !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Ville")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("La ville :" , "La ville est un endroit très calme, il est impossible de tuer quelqu'un, il est possible de sortir son arme mais vous ne pourrez pas frapper quelqu'un avec, une barrière apparaîtra pour protégé le joueur !\n\nCependant, les duels sont possibles mais il ne sera pas possible de faire de duel à mort !\n\nLe seul moment possible où les meutres sont possibles en ville, sont lorsque le maître du jeu le décide !\n\nA partir de la ville dans le salon 'Entrée de la ville', il est possible de vous rendre à l'extérieur, ou dans les souterrains à partir de 'Souterrains' ou même aux constructions des joueurs à partir de 'Constructions joueurs' !\n\nDans l'auberge en ville, il est possible de vous rendre dans les chambres !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Extérieur")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("L'extérieur :" , "C'est en extérieur que vous rencontrerez des monstres, que vous pourrez accomplir des quêtes et faire des donjons !\n\nLe meurtre est possible à l'extérieur, alors faite attention si des PK rôdent !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
    
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Souterrains")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les souterrains :" , "C'est dans les souterrains de la ville que se feront très souvent les activités illégales, étant donné que les meutres sont possibles à l'intérieur !\n\nIl n'y a qu'un seul accès des souterrains pour revenir en ville, alors faites attention !")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });
    
bot.on('message', message => {
  if (message.content === prefix + "Constructions") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Les constructions :" , "Il existe une grande zone en ville, permettant de pouvoir acheter des constructions existantes tels que des maisons, des demeures, des magasins, des bars et pleins d'autres batîments allant même jusqu'à un manoir ou à un château !\n\nLes prix d'une construction varie selon son importance, une maison ne coûtera pas aussi cher qu'un manoir !\n\nUne fois une construction acheter, vous devrez créer un discord avec des salons en guide d'étages, de salles, de lieux, à vous d'aménager et d'imaginer, une fois finis donner le lien de votre discord à un membre du staff qu'il l'affiche dans le salon des constructions !\n\nPour consulter les prix d'une construction, écrivez :\n\n=Constructions prix")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


    bot.on('message', message => {
       if (message.content === prefix + "Constructions prix") {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
        .addField("Prix des constructions :" , "Cabane : 2 500 cols [2 salons discord maximum]\nUn bar : 5 000 cols [3 salons discord maximum]\nUne maison : 10 000 cols [5 salons discord maximum]\nUne demeure : 15 000 cols [8 salons discord maximum]\nUne planque : 20 000 cols [10 salons discord maximum]\nUne boutique : 25 000 cols [13 salons discord maximum]\nUne écurie : 30 000 cols [16 salons discord maximum]\nUne ferme : 40 000 cols [20 salons discord maximum]\nUn repaire de guilde : 75 000 cols [30 salons discord maximum]\nUne prison : 125 000  [50 salons discord maximum]\nUn manoir : 175 000 [75 salons discord maximum]\nUn temple : 250 000 cols [100 salons discord maximum]\nUn fort : 500 000 cols [125 salons discord maximum]\nUne arène : 1 000 000 cols [200 salons discord maximum]\nUn fief : 2 500 000 cols [300 salons discord maximum]\nUne partie de la ville : 10 000 000 cols\nLa ville entière : 100 000 000 cols")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
            message.channel.send({embed})
          }   
        });
    


    
                            
    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Ciblage")) {
          let X = args.slice(1).join(" : ");
          const Joueurs = (Math.floor((X)*Math.random()+1))
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Le monstre attaque le joueur :" , +Joueurs)
       .setImage("http://www.otakia.com/wp-content/uploads/2015/11/sword_art_online_aincrad_episode_04_silica_attaquee.jpg")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


    
//////////////////////////////////////////////////////////////////Calcul d'exp niveaux de spécialisations///////////////////////////////////////////////////////////////////////////////



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
      if (A < 50){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("│ Votre niveau de spécialisation est de 1 avec :" , "│►" +A+ "/50 points d'expérience !")
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})
      }
    }
  })

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
        let X = args.slice(4).join(" : ");
        const A = X*1
        if (51 < A & A < 125){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(3447003)
          .addField("│ Votre niveau de spécialisation est de 2 avec :" , "│►" +A+ "/125 points d'expérience !")
          .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
          .setTimestamp()
          message.channel.send({embed})
        }
      }
    })
    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
          let X = args.slice(4).join(" : ");
          const A = X*1
          if (126 < A & A < 225){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("│ Votre niveau de spécialisation est de 3 avec :" , "│►" +A+ "/225 points d'expérience !")
            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
      })

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
            let X = args.slice(4).join(" : ");
            const A = X*1
            if (226 < A & A < 400){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("│ Votre niveau de spécialisation est de 4 avec :" , "│►" +A+ "/400 points d'expérience !")
              .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
              .setTimestamp()
              message.channel.send({embed})
            }
          }
        })

        bot.on('message', message => {
          let cont = message.content.slice(prefix.length).split(" ");
          const args = cont.slice(1);
          if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
              let X = args.slice(4).join(" : ");
              const A = X*1
              if (401 < A & A < 700){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(3447003)
                .addField("│ Votre niveau de spécialisation est de 5 avec :" , "│►" +A+ "/700 points d'expérience !")
                .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                .setTimestamp()
                message.channel.send({embed})
              }
            }
          })

          bot.on('message', message => {
            let cont = message.content.slice(prefix.length).split(" ");
            const args = cont.slice(1);
            if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
                let X = args.slice(4).join(" : ");
                const A = X*1
                if (701 < A & A < 1200){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(3447003)
                  .addField("│ Votre niveau de spécialisation est de 6 avec :" , "│►" +A+ "/1200 points d'expérience !")
                  .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                  .setTimestamp()
                  message.channel.send({embed})
                }
              }
            })

            bot.on('message', message => {
              let cont = message.content.slice(prefix.length).split(" ");
              const args = cont.slice(1);
              if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
                  let X = args.slice(4).join(" : ");
                  const A = X*1
                  if (1201 < A & A < 2000){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(3447003)
                    .addField("│ Votre niveau de spécialisation est de 7 avec :" , "│►" +A+ "/2000 points d'expérience !")
                    .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                    .setTimestamp()
                    message.channel.send({embed})
                  }
                }
              })

              bot.on('message', message => {
                let cont = message.content.slice(prefix.length).split(" ");
                const args = cont.slice(1);
                if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
                    let X = args.slice(4).join(" : ");
                    const A = X*1
                    if (2001 < A & A < 3500){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(3447003)
                      .addField("│ Votre niveau de spécialisation est de 8 avec :" , "│►" +A+ "/3500 points d'expérience !")
                      .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                      .setTimestamp()
                      message.channel.send({embed})
                    }
                  }
                })

                bot.on('message', message => {
                  let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
                  if (message.content.startsWith(prefix + "Calculateur d'expérience de spécialisation")) {
                      let X = args.slice(4).join(" : ");
                      const A = X*1
                      if (3501 < A & A < 6000){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(3447003)
                        .addField("│ Votre niveau de spécialisation est de 9 avec :" , "│►" +A+ "/6000 points d'expérience !")
                        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                        .setTimestamp()
                        message.channel.send({embed})
                      }
                    }
                  })

           


//////////////////////////////////////////////////////////////////Calcul d'exp niveaux///////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
      if (A < 200){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 1 avec :" , A+ "/200 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total :" , "0 point de caractéristique")
        .addBlankField(true)
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})
      }
    }
  })


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
      if (201 < A & A < 400){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 2 avec :" , A+ "/400 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total :" , "1 point de caractéristique")
        .addBlankField(true)
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})
      }
    }
  })

  

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
       if (401 < A & A < 600){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 3 avec :" , A+ "/600 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total :" , "2 points de caractéristiques")
        .addBlankField(true)
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})
      }
    }
  })


      

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
      if (601 < A & A < 800){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 4 avec :" , A+ "/800 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total :" , "3 points de caractéristiques")
        .addBlankField(true)
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})     
      }
    }
  })

      

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
      let X = args.slice(4).join(" : ");
      const A = X*1
      if (801 < A & A < 1100){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 5 avec :" , A+ "/1100 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total:" , "4 points de caractéristiques")
        .addBlankField(true)
        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
        .setTimestamp()
        message.channel.send({embed})
      }
    }
  })

    
    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
          let X = args.slice(4).join(" : ");
          const A = X*1
          if (1101 < A & A < 1400){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Votre niveau est de 6 avec :" , A+ "/1400 points d'expérience !")
            .addBlankField(true)
            .addField("Vous possèdez au total :" , "6 points de caractéristiques")
            .addBlankField(true)
            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
      })


      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
            let X = args.slice(4).join(" : ");
            const A = X*1
            if (1401 < A & A < 1700){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("Votre niveau est de 7 avec :" , A+ "/1700 points d'expérience !")
              .addBlankField(true)
              .addField("Vous possèdez au total :" , "8 points de caractéristiques")
              .addBlankField(true)
              .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
              .setTimestamp()
              message.channel.send({embed})
            }
          }
        })

        
        bot.on('message', message => {
          let cont = message.content.slice(prefix.length).split(" ");
          const args = cont.slice(1);
          if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
              let X = args.slice(4).join(" : ");
              const A = X*1
              if (1701 < A & A < 2000){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(3447003)
                .addField("Votre niveau est de 8 avec :" , A+ "/2000 points d'expérience !")
                .addBlankField(true)
                .addField("Vous possèdez au total :" , "10 points de caractéristiques")
                .addBlankField(true)
                .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                .setTimestamp()
                message.channel.send({embed})
              }
            }
          })

          
          bot.on('message', message => {
            let cont = message.content.slice(prefix.length).split(" ");
            const args = cont.slice(1);
            if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                let X = args.slice(4).join(" : ");
                const A = X*1
                if (2001 < A & A < 2300){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(3447003)
                  .addField("Votre niveau est de 9 avec :" , A+ "/2300 points d'expérience !")
                  .addBlankField(true)
                  .addField("Vous possèdez au total :" , "12 points de caractéristiques")
                  .addBlankField(true)
                  .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                  .setTimestamp()
                  message.channel.send({embed})
                }
              }
            })

            
            bot.on('message', message => {
              let cont = message.content.slice(prefix.length).split(" ");
              const args = cont.slice(1);
              if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                  let X = args.slice(4).join(" : ");
                  const A = X*1
                  if (2301 < A & A < 2700){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(3447003)
                    .addField("Votre niveau est de 10 avec :" , A+ "/2700 points d'expérience !")
                    .addBlankField(true)
                    .addField("Vous possèdez au total :" , "14 points de caractéristiques")
                    .addBlankField(true)
                    .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                    .setTimestamp()
                    message.channel.send({embed})
                  }
                }
              })

              
              bot.on('message', message => {
                let cont = message.content.slice(prefix.length).split(" ");
                const args = cont.slice(1);
                if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                    let X = args.slice(4).join(" : ");
                    const A = X*1
                    if (2701 < A & A < 3100){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(3447003)
                      .addField("Votre niveau est de 11 avec :" , A+ "/3100 points d'expérience !")
                      .addBlankField(true)
                      .addField("Vous possèdez au total :" , "17 points de caractéristiques")
                      .addBlankField(true)
                      .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                      .setTimestamp()
                      message.channel.send({embed})
                    }
                  }
                })
                
                
                bot.on('message', message => {
                  let cont = message.content.slice(prefix.length).split(" ");
                  const args = cont.slice(1);
                  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                      let X = args.slice(4).join(" : ");
                      const A = X*1
                      if (3101 < A & A < 3500){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(3447003)
                        .addField("Votre niveau est de 12 avec :" , A+ "/3500 points d'expérience !")
                        .addBlankField(true)
                        .addField("Vous possèdez au total :" , "20 points de caractéristiques")
                        .addBlankField(true)
                        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                        .setTimestamp()
                        message.channel.send({embed})
                      }
                    }
                  })

                  
                  bot.on('message', message => {
                    let cont = message.content.slice(prefix.length).split(" ");
                    const args = cont.slice(1);
                    if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                        let X = args.slice(4).join(" : ");
                        const A = X*1
                        if (3501 < A & A < 3900){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(3447003)
                          .addField("Votre niveau est de 13 avec :" , A+ "/3900 points d'expérience !")
                          .addBlankField(true)
                          .addField("Vous possèdez au total :" , "23 points de caractéristiques")
                          .addBlankField(true)
                          .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                          .setTimestamp()
                          message.channel.send({embed})
                        }
                      }
                    })

                    
                    bot.on('message', message => {
                      let cont = message.content.slice(prefix.length).split(" ");
                      const args = cont.slice(1);
                      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                          let X = args.slice(4).join(" : ");
                          const A = X*1
                          if (3901 < A & A < 4300){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(3447003)
                            .addField("Votre niveau est de 14 avec :" , A+ "/4300 points d'expérience !")
                            .addBlankField(true)
                            .addField("Vous possèdez au total :" , "26 points de caractéristiques")
                            .addBlankField(true)
                            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                            .setTimestamp()
                            message.channel.send({embed})
                          }
                        }
                      })


                      bot.on('message', message => {
                        let cont = message.content.slice(prefix.length).split(" ");
                        const args = cont.slice(1);
                        if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                            let X = args.slice(4).join(" : ");
                            const A = X*1
                            if (4301 < A & A < 4800){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(3447003)
                              .addField("Votre niveau est de 15 avec :" , A+ "/4800 points d'expérience !")
                              .addBlankField(true)
                              .addField("Vous possèdez au total :" , "29 points de caractéristiques")
                              .addBlankField(true)
                              .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                              .setTimestamp()
                              message.channel.send({embed})
                            }
                          }
                        })

                        
                        bot.on('message', message => {
                          let cont = message.content.slice(prefix.length).split(" ");
                          const args = cont.slice(1);
                          if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                              let X = args.slice(4).join(" : ");
                              const A = X*1
                              if (4801 < A & A < 5300){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(3447003)
                                .addField("Votre niveau est de 16 avec :" , A+ "/5300 points d'expérience !")
                                .addBlankField(true)
                                .addField("Vous possèdez au total:" , "33 points de caractéristiques")
                                .addBlankField(true)
                                .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                .setTimestamp()
                                message.channel.send({embed})
                              }
                            }
                          })

                          
                          bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                let X = args.slice(4).join(" : ");
                                const A = X*1
                                if (5301 < A & A < 5800){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(3447003)
                                  .addField("Votre niveau est de 17 avec :" , A+ "/5800 points d'expérience !")
                                  .addBlankField(true)
                                  .addField("Vous possèdez au total :" , "37 points de caractéristiques")
                                  .addBlankField(true)
                                  .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }
                              }
                            })

                            
                            bot.on('message', message => {
                              let cont = message.content.slice(prefix.length).split(" ");
                              const args = cont.slice(1);
                              if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                  let X = args.slice(4).join(" : ");
                                  const A = X*1
                                  if (5801 < A & A < 6300){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(3447003)
                                    .addField("Votre niveau est de 18 avec :" , A+ "/6300 points d'expérience !")
                                    .addBlankField(true)
                                    .addField("Vous possèdez au total :" , "41 points de caractéristiques")
                                    .addBlankField(true)
                                    .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                    .setTimestamp()
                                    message.channel.send({embed})
                                  }
                                }
                              })


                              bot.on('message', message => {
                                let cont = message.content.slice(prefix.length).split(" ");
                                const args = cont.slice(1);
                                if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                    let X = args.slice(4).join(" : ");
                                    const A = X*1
                                    if (6301 < A & A < 6800){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(3447003)
                                      .addField("Votre niveau est de 19 avec :" , A+ "/6800 points d'expérience !")
                                      .addBlankField(true)
                                      .addField("Vous possèdez au total :" , "45 points de caractéristiques")
                                      .addBlankField(true)
                                      .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }
                                  }
                                })


                                bot.on('message', message => {
                                  let cont = message.content.slice(prefix.length).split(" ");
                                  const args = cont.slice(1);
                                  if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                      let X = args.slice(4).join(" : ");
                                      const A = X*1
                                      if (6801 < A & A < 7600){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(3447003)
                                        .addField("Votre niveau est de 20 avec :" , A+ "/7600 points d'expérience !")
                                        .addBlankField(true)
                                        .addField("Vous possèdez au total :" , "49 points de caractéristiques")
                                        .addBlankField(true)
                                        .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                        .setTimestamp()
                                        message.channel.send({embed})
                                      }
                                    }
                                  })


                                  bot.on('message', message => {
                                    let cont = message.content.slice(prefix.length).split(" ");
                                    const args = cont.slice(1);
                                    if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                        let X = args.slice(4).join(" : ");
                                        const A = X*1
                                        if (7601 < A & A < 8400){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(3447003)
                                          .addField("Votre niveau est de 21 avec :" , A+ "/8400 points d'expérience !")
                                          .addBlankField(true)
                                          .addField("Vous possèdez au total :" , "54 points de caractéristiques")
                                          .addBlankField(true)
                                          .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }
                                      }
                                    })


                                    
                                  bot.on('message', message => {
                                    let cont = message.content.slice(prefix.length).split(" ");
                                    const args = cont.slice(1);
                                    if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                        let X = args.slice(4).join(" : ");
                                        const A = X*1
                                        if (8401 < A & A < 9200){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(3447003)
                                          .addField("Votre niveau est de 22 avec :" , A+ "/9200 points d'expérience !")
                                          .addBlankField(true)
                                          .addField("Vous possèdez au total :" , "59 points de caractéristiques")
                                          .addBlankField(true)
                                          .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }
                                      }
                                    })


                                    bot.on('message', message => {
                                      let cont = message.content.slice(prefix.length).split(" ");
                                      const args = cont.slice(1);
                                      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                          let X = args.slice(4).join(" : ");
                                          const A = X*1
                                          if (9201 < A & A < 10000){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 23 avec :" , A+ "/10000 points d'expérience !")
                                            .addBlankField(true)
                                            .addField("Vous possèdez au total :" , "64 points de caractéristiques")
                                            .addBlankField(true)
                                            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                            .setTimestamp()
                                            message.channel.send({embed})
                                          }
                                        }
                                      })


                                      
                                    bot.on('message', message => {
                                      let cont = message.content.slice(prefix.length).split(" ");
                                      const args = cont.slice(1);
                                      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                          let X = args.slice(4).join(" : ");
                                          const A = X*1
                                          if (10001 < A & A < 10800){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 24 avec :" , A+ "/10800 points d'expérience !")
                                            .addBlankField(true)
                                            .addField("Vous possèdez au total :" , "69 points de caractéristiques")
                                            .addBlankField(true)
                                            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                            .setTimestamp()
                                            message.channel.send({embed})
                                          }
                                        }
                                      })


                                             
                                    bot.on('message', message => {
                                      let cont = message.content.slice(prefix.length).split(" ");
                                      const args = cont.slice(1);
                                      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                          let X = args.slice(4).join(" : ");
                                          const A = X*1
                                          if (10801 < A & A < 12000){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 25 avec :" , A+ "/12000 points d'expérience !")
                                            .addBlankField(true)
                                            .addField("Vous possèdez au total :" , "74 points de caractéristiques")
                                            .addBlankField(true)
                                            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                            .setTimestamp()
                                            message.channel.send({embed})
                                          }
                                        }
                                      })


                                                     
                                    bot.on('message', message => {
                                      let cont = message.content.slice(prefix.length).split(" ");
                                      const args = cont.slice(1);
                                      if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                          let X = args.slice(4).join(" : ");
                                          const A = X*1
                                          if (12001 < A & A < 13200){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 26 avec :" , A+ "/13200 points d'expérience !")
                                            .addBlankField(true)
                                            .addField("Vous possèdez au total :" , "80 points de caractéristiques")
                                            .addBlankField(true)
                                            .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                            .setTimestamp()
                                            message.channel.send({embed})
                                          }
                                        }
                                      })


                                      bot.on('message', message => {
                                        let cont = message.content.slice(prefix.length).split(" ");
                                        const args = cont.slice(1);
                                        if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                            let X = args.slice(4).join(" : ");
                                            const A = X*1
                                            if (13201 < A & A < 14400){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(3447003)
                                              .addField("Votre niveau est de 27 avec :" , A+ "/14400 points d'expérience !")
                                              .addBlankField(true)
                                              .addField("Vous possèdez au total :" , "86 points de caractéristiques")
                                              .addBlankField(true)
                                              .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }
                                          }
                                        })


                                        bot.on('message', message => {
                                          let cont = message.content.slice(prefix.length).split(" ");
                                          const args = cont.slice(1);
                                          if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                              let X = args.slice(4).join(" : ");
                                              const A = X*1
                                              if (14401 < A & A < 15600){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(3447003)
                                                .addField("Votre niveau est de 28 avec :" , A+ "/15600 points d'expérience !")
                                                .addBlankField(true)
                                                .addField("Vous possèdez au total :" , "92 points de caractéristiques")
                                                .addBlankField(true)
                                                .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                                .setTimestamp()
                                                message.channel.send({embed})
                                              }
                                            }
                                          })
  
                               
                                          bot.on('message', message => {
                                            let cont = message.content.slice(prefix.length).split(" ");
                                            const args = cont.slice(1);
                                            if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                                let X = args.slice(4).join(" : ");
                                                const A = X*1
                                                if (15601 < A & A < 16800){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(3447003)
                                                  .addField("Votre niveau est de 29 avec :" , A+ "/16800 points d'expérience !")
                                                  .addBlankField(true)
                                                  .addField("Vous possèdez au total :" , "98 points de caractéristiques")
                                                  .addBlankField(true)
                                                  .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }
                                              }
                                            })


                                          bot.on('message', message => {
                                            let cont = message.content.slice(prefix.length).split(" ");
                                            const args = cont.slice(1);
                                            if (message.content.startsWith(prefix + "Calculateur d'expérience de niveaux")) {
                                                let X = args.slice(4).join(" : ");
                                                const A = X*1
                                                if (16801 < A){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(3447003)
                                                  .addField("Votre niveau est de 30 avec :" , A+ "/[Pas encore définis] points d'expérience !")
                                                  .addBlankField(true)
                                                  .addField("Vous possèdez au total :" , "104 points de caractéristiques")
                                                  .addBlankField(true)
                                                  .setImage("https://vignette.wikia.nocookie.net/sao-rp/images/8/8e/Hv9es9n.png/revision/latest/scale-to-width-down/800?cb=20180630183511&path-prefix=fr")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }
                                              }
                                            })
  
                               
  //////////////////////////////////////////////////////////////////OBJETS A ACHETER OU CRAFT///////////////////////////////////////////////////////////////////////    

          
      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Casque rouillé")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Casque rouillé :" , "C'est un casque toucher par l'érosion constitué de cuivre médiocre !")
             .addField("Niveau minimum requis pour le porter :" , "6")
             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
             .addField("Prix d'achat :" , "160 cols")
             .addField("Prix de revente :" , "40 cols")
             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte du casque rouillé")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Épaulières rouillées")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Épaulières rouillées :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                 .addField("Niveau minimum requis pour le porter :" , "6")
                 .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                 .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                 .addField("Prix d'achat :" , "160 cols")
                 .addField("Prix de revente :" , "40 cols")
                 .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des épaulières rouillées")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });

              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Cape endommagée")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Cape endommagée :" , "C'est une cape déchiré au fil du temps constitué de cuivre médiocre et de peau !")
                     .addField("Niveau minimum requis pour le porter :" , "6")
                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 peau de loup")
                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                     .addField("Prix d'achat :" , "160 cols")
                     .addField("Prix de revente :" , "40 cols")
                     .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte de la cape endommagée")
                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });

                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Plastron rouillé")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Plastron rouillé :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                         .addField("Niveau minimum requis pour le porter :" , "6")
                         .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                         .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                         .addField("Prix d'achat :" , "160 cols")
                         .addField("Prix de revente :" , "40 cols")
                         .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte du plastron rouillé")
                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      
                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Gantelets rouillés")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Gantelets rouillés :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                         .addField("Niveau minimum requis pour le porter :" , "6")
                         .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                         .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                         .addField("Prix d'achat :" , "160 cols")
                         .addField("Prix de revente :" , "40 cols")
                         .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des gantelets rouillés")
                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Ceinture rouillée")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Ceinture rouillée :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                             .addField("Niveau minimum requis pour le porter :" , "6")
                             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                             .addField("Prix d'achat :" , "160 cols")
                             .addField("Prix de revente :" , "40 cols")
                             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte de la ceinture rouillée")
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                          
                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Jambières rouillées")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Jambières rouillées :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                             .addField("Niveau minimum requis pour le porter :" , "6")
                             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                             .addField("Prix d'achat :" , "160 cols")
                             .addField("Prix de revente :" , "40 cols")
                             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des jambières rouillées")
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });


                          
                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Bottes rouillées")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Bottes rouillées :" , "Ce sont des épaulières toucher par l'érosion constitué de cuivre médiocre !")
                             .addField("Niveau minimum requis pour le porter :" , "6")
                             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "8 cuivre médiocre")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
                             .addField("Prix d'achat :" , "160 cols")
                             .addField("Prix de revente :" , "40 cols")
                             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des bottes rouillées")
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

bot.on('message', message => {
        if (message.content.startsWith(prefix + "Anneau rouillé")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Anneau rouillé :" , "C'est un anneau toucher par l'érosion constitué de cuivre médiocre !")
             .addField("Niveau minimum requis pour le porter :" , "6")
             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 2 coeur de loup, 2 coeur de taupe")
             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
             .addField("Prix d'achat :" , "200 cols")
             .addField("Prix de revente :" , "50 cols")
             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte de l'anneau rouillé")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

bot.on('message', message => {
        if (message.content.startsWith(prefix + "Amulette rouillée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Amulette rouillée :" , "C'est une amulette toucher par l'érosion constitué de cuivre médiocre !")
             .addField("Niveau minimum requis pour le porter :" , "6")
             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 2 coeur de loup, 2 coeur de taupe")
             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "4")
             .addField("Prix d'achat :" , "200 cols")
             .addField("Prix de revente :" , "50 cols")
             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte de l'amulette rouillée")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });
    



                          bot.on('message', message => {
                            const Défense = (Math.floor((4)*Math.random()+1))
                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'anneau rouillé")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Anneau rouillé :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                 .addField("Points d'armure :" , +Défense)
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });



                          bot.on('message', message => {
                            const Défense = (Math.floor((4)*Math.random()+1))
                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'amulette rouillée")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Amulette rouillée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                 .addField("Points d'armure :" , +Défense)
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });



                          bot.on('message', message => {
                            const HP = (Math.floor((3)*Math.random()+3))
                            const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte du casque rouillé")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Casque rouillé :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                 .addField("HP :" , +HP)
                                 .addField("Points d'armure :" , +Défense)
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                              bot.on('message', message => {
                                const HP = (Math.floor((3)*Math.random()+3))
                                const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte des épaulières rouillées")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Epaulières rouillées :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                     .addField("HP :" , +HP)
                                     .addField("Points d'armure :" , +Défense)
                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  bot.on('message', message => {
                                    const HP = (Math.floor((3)*Math.random()+3))
                                    const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cape endommagée")) {
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                         .setColor(3447003)
                                         .addField("Cape endommagée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                         .addField("HP :" , +HP)
                                         .addField("Points d'armure :" , +Défense)
                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }   
                                      });

                                      bot.on('message', message => {
                                        const HP = (Math.floor((3)*Math.random()+3))
                                        const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du plastron rouillé")) {
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                             .setColor(3447003)
                                             .addField("Plastron rouillé :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                             .addField("HP :" , +HP)
                                             .addField("Points d'armure :" , +Défense)
                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }   
                                          });


                                          bot.on('message', message => {
                                            const HP = (Math.floor((3)*Math.random()+3))
                                            const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte des gantelets rouillés")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Gantelets rouillés :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                 .addField("HP :" , +HP)
                                                 .addField("Points d'armure :" , +Défense)
                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              bot.on('message', message => {
                                                const HP = (Math.floor((3)*Math.random()+3))
                                                const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la ceinture rouillée")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Ceinture rouillée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                     .addField("HP :" , +HP)
                                                     .addField("Points d'armure :" , +Défense)
                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });


                                                  bot.on('message', message => {
                                                    const HP = (Math.floor((3)*Math.random()+3))
                                                    const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte des jambières rouillées")) {
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                         .setColor(3447003)
                                                         .addField("Jambières rouillées :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                         .addField("HP :" , +HP)
                                                         .addField("Points d'armure :" , +Défense)
                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                          .setTimestamp()
                                                          message.channel.send({embed})
                                                        }   
                                                      });

                                                      bot.on('message', message => {
                                                        const HP = (Math.floor((3)*Math.random()+3))
                                                        const Défense = (Math.floor((2-(0.50))*Math.random()+1))
                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des bottes rouillées")) {
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .addField("Bottes rouillées :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                             .addField("HP :" , +HP)
                                                             .addField("Points d'armure :" , +Défense)
                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });

  
  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Casque en peau arrachée")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Casque en peau arrachée :" , "C'est un casque très fragile constitué de peau animal mais très utile pour les débutants !")
         .addField("Niveau minimum requis pour le porter :" , "1")
         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
         .addField("Prix d'achat :" , "80 cols")
         .addField("Prix de revente :" , "20 cols")
         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du casque en peau arrachée")
          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du casque en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Casque en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Casque en peau résistante")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Casque en peau résistante :" , "C'est un casque assez résistant constitué de peau animal mais très utile pour les débutants !")
             .addField("Niveau minimum requis pour le porter :" , "6")
             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
             .addField("Prix d'achat :" , "200 cols")
             .addField("Prix de revente :" , "50 cols")
             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du casque en peau résistante")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

          bot.on('message', message => {
            const HP = (Math.floor((6)*Math.random()+6))
            const Défense = (Math.floor((2-(0.50))*Math.random()))
            if (message.content.startsWith(prefix + "Achat/fabrication/découverte du casque en peau résistante")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Casque en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                 .addField("HP :" , +HP)
                 .addField("Points d'armure :" , +Défense)
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });

      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Épaulières en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Epaulières en peau arrachée :" , "Ce sont des épaulières très fragiles constitué de peau animal mais très utile pour les débutants !")
             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
             .addField("Prix d'achat :" , "80 cols")
             .addField("Prix de revente :" , "20 cols")
             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des épaulières en peau arrachée")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

          
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des épaulières en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Epaulières en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


          

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Épaulières en peau résistante")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Epaulières en peau résistante :" , "Ce sont des épaulières assez résistantes constitué de peau animal mais très utile pour les débutants !")
                 .addField("Niveau minimum requis pour le porter :" , "6")
                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                 .addField("Prix d'achat :" , "200 cols")
                 .addField("Prix de revente :" , "50 cols")
                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des epaulières en peau résistante")
                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });

              bot.on('message', message => {
                const HP = (Math.floor((6)*Math.random()+6))
                const Défense = (Math.floor((2-(0.50))*Math.random()))
                if (message.content.startsWith(prefix + "Achat/fabrication/découverte des épaulières en peau résistante")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Epaulières en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                     .addField("HP :" , +HP)
                     .addField("Points d'armure :" , +Défense)
                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Cape en peau arrachée")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Cape en peau arrachée :" , "C'est une cape très fragile constitué de peau animal mais très utile pour les débutants !")
                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                 .addField("Prix d'achat :" , "80 cols")
                 .addField("Prix de revente :" , "20 cols")
                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la cape en peau arrachée")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });

              
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cape en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Cape en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Cape en peau résistante")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Cape en peau résistante :" , "C'est une cape assez résistante constitué de peau animal mais très utile pour les débutants !")
                     .addField("Niveau minimum requis pour le porter :" , "6")
                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                     .addField("Prix d'achat :" , "200 cols")
                     .addField("Prix de revente :" , "50 cols")
                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la cape en peau résistante")
                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });

                  bot.on('message', message => {
                    const HP = (Math.floor((6)*Math.random()+6))
                    const Défense = (Math.floor((2-(0.50))*Math.random()))
                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cape en peau résistante")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Cape en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                         .addField("HP :" , +HP)
                         .addField("Points d'armure :" , +Défense)
                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Plastron en peau arrachée")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Plastron en peau arrachée :" , "C'est un plastron très fragile constitué de peau animal mais très utile pour les débutants !")
                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                     .addField("Prix d'achat :" , "80 cols")
                     .addField("Prix de revente :" , "20 cols")
                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du plastron en peau arrachée")
                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });

                  
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du plastron en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Plastron en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Plastron en peau résistante")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Plastron en peau résistante :" , "C'est un plastron assez résistant constitué de peau animal mais très utile pour les débutants !")
                         .addField("Niveau minimum requis pour le porter :" , "6")
                         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                         .addField("Prix d'achat :" , "200 cols")
                         .addField("Prix de revente :" , "50 cols")
                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du plastron en peau résistante")
                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      bot.on('message', message => {
                        const HP = (Math.floor((6)*Math.random()+6))
                        const Défense = (Math.floor((2-(0.50))*Math.random()))
                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du plastron en peau résistante")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Plastron en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                             .addField("HP :" , +HP)
                             .addField("Points d'armure :" , +Défense)
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Gantelets en peau arrachée")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Gantelets en peau arrachée :" , "Ce sont des gantelets très fragiles constitué de peau animal mais très utile pour les débutants !")
                         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                         .addField("Prix d'achat :" , "80 cols")
                         .addField("Prix de revente :" , "20 cols")
                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des gantelets en peau arrachée")
                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des gantelets en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Gantelets en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Gantelets en peau résistante")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Gantelets en peau résistante :" , "Ce sont des gantelets assez résistants constitué de peau animal mais très utile pour les débutants !")
                             .addField("Niveau minimum requis pour le porter :" , "6")
                             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                             .addField("Prix d'achat :" , "200 cols")
                             .addField("Prix de revente :" , "50 cols")
                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des gantelets en peau résistante")
                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                          bot.on('message', message => {
                            const HP = (Math.floor((6)*Math.random()+6))
                            const Défense = (Math.floor((2-(0.50))*Math.random()))
                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte des gantelets en peau résistante")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Gantelets en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                 .addField("HP :" , +HP)
                                 .addField("Points d'armure :" , +Défense)
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Ceinture en peau arrachée")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Ceinture en peau arraché :" , "C'est une ceinture très fragile constitué de peau animal mais très utile pour les débutants !")
                             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                             .addField("Prix d'achat :" , "80 cols")
                             .addField("Prix de revente :" , "20 cols")
                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la ceinture en peau arrachée")
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                          
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la ceinture en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Ceinture en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


                          bot.on('message', message => {
                            if (message.content.startsWith(prefix + "Ceinture en peau résistante")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Ceinture en peau résistante :" , "C'est une ceinture assez résistante constitué de peau animal mais très utile pour les débutants !")
                                 .addField("Niveau minimum requis pour le porter :" , "6")
                                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                                 .addField("Prix d'achat :" , "200 cols")
                                 .addField("Prix de revente :" , "50 cols")
                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la ceinture en peau résistante")
                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                              bot.on('message', message => {
                                const HP = (Math.floor((6)*Math.random()+6))
                                const Défense = (Math.floor((2-(0.50))*Math.random()))
                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la ceinture en peau résistante")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Ceinture en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                     .addField("HP :" , +HP)
                                     .addField("Points d'armure :" , +Défense)
                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                          bot.on('message', message => {
                            if (message.content.startsWith(prefix + "Jambières en peau arrachée")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Jambières en peau arrachée :" , "Ce sont des jambières très fragiles constitué de peau animal mais très utile pour les débutants !")
                                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                                 .addField("Prix d'achat :" , "80 cols")
                                 .addField("Prix de revente :" , "20 cols")
                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des jambières en peau arrachée")
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                              
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des jambières en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Jambières en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


                              bot.on('message', message => {
                                if (message.content.startsWith(prefix + "Jambières en peau résistante")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Jambières en peau résistante :" , "Ce sont des jambières assez résistantes constitué de peau animal mais très utile pour les débutants !")
                                     .addField("Niveau minimum requis pour le porter :" , "6")
                                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                                     .addField("Prix d'achat :" , "200 cols")
                                     .addField("Prix de revente :" , "50 cols")
                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des jambières en peau résistante")
                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  bot.on('message', message => {
                                    const HP = (Math.floor((6)*Math.random()+6))
                                    const Défense = (Math.floor((2-(0.50))*Math.random()))
                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte des jambières en peau résistante")) {
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                         .setColor(3447003)
                                         .addField("Jambières en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                         .addField("HP :" , +HP)
                                         .addField("Points d'armure :" , +Défense)
                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }   
                                      });

                              bot.on('message', message => {
                                if (message.content.startsWith(prefix + "Bottes en peau arrachée")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Bottes en peau arrachée :" , "Ce sont des bottes très fragiles constitué de peau animal mais très utile pour les débutants !")
                                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                                     .addField("Prix d'achat :" , "80 cols")
                                     .addField("Prix de revente :" , "20 cols")
                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des bottes en peau arrachée")
                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des bottes en peau arrachée")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Bottes en peau arrachée :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
             .addField("HP :" , +HP)
             .addField("Points d'armure :" , +Défense)
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


                                  bot.on('message', message => {
                                    if (message.content.startsWith(prefix + "Bottes en peau résistante")) {
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                         .setColor(3447003)
                                         .addField("Bottes en peau résistante :" , "Ce sont des bottes assez résistantes constitué de peau animal mais très utile pour les débutants !")
                                         .addField("Niveau minimum requis pour le porter :" , "6")
                                         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "2")
                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de loup, 2 peaux de taupe, 1 peau de loup de sang, 1 Peau de lapin géant")
                                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "6")
                                         .addField("Prix d'achat :" , "200 cols")
                                         .addField("Prix de revente :" , "50 cols")
                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des bottes en peau résistante")
                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }   
                                      });

                                      bot.on('message', message => {
                                        const HP = (Math.floor((6)*Math.random()+6))
                                        const Défense = (Math.floor((2-(0.50))*Math.random()))
                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des bottes en peau résistante")) {
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                             .setColor(3447003)
                                             .addField("Bottes en peau résistante :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                             .addField("HP :" , +HP)
                                             .addField("Points d'armure :" , +Défense)
                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }   
                                          });


                                      bot.on('message', message => {
                                        if (message.content.startsWith(prefix + "Anneau en coeur d'animal faible")) {
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                             .setColor(3447003)
                                             .addField("Anneau en coeur d'animal faible :" , "C'est un anneau minuscule constitué de coeur d'animal mais très utile pour les débutants !")
                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de renard, 1 coeur de sanglier, 1 coeur de chien, 1 coeur de lapin, 1 coeur de lapin géant")
                                             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                             .addField("Prix d'achat :" , "120 cols")
                                             .addField("Prix de revente :" , "30 cols")
                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'anneau en coeur d'animal faible")
                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }   
                                          });

                                          bot.on('message', message => {
                                            const HP = (Math.floor((2)*Math.random()+1))
                                            const Dégâts = (Math.floor((3)*Math.random()+1))
                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'amulette en coeur d'animal faible")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Amulette en coeur d'animal faible :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                 .addField("HP :" , +HP)
                                                 .addField("Points de dégâts :" , +Dégâts)
                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });

                                          bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Amulette en coeur d'animal faible")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Amulette en coeur d'animal faible :" , "C'est une amulette minuscule constitué de coeur d'animal mais très utile pour les débutants !")
                                                 .addField("Niveau minimum requis pour le porter :" , "1")
                                                 .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "1")
                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de renard, 1 coeur de sanglier, 1 coeur de chien, 1 coeur de lapin, 1 coeur de lapin géant")
                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                                 .addField("Prix d'achat :" , "120 cols")
                                                 .addField("Prix de revente :" , "30 cols")
                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'amulette en coeur d'animal faible")
                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });

                                              bot.on('message', message => {
                                                const HP = (Math.floor((2)*Math.random()+1))
                                            const Dégâts = (Math.floor((3)*Math.random()+1))
                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'anneau en coeur d'animal faible")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Anneau en coeur d'animal faible :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                     .addField("HP :" , +HP)
                                                     .addField("Points de dégâts :" , +Dégâts)
                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });
    
                                              
                                          bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Amulette du croc")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Amulette du croc :" , "C'est une amulette légèrement tranchante constitué de coeur d'animal et de croc de loup mais très utile pour les débutants !")
                                                 .addField("Niveau minimum requis pour le porter :" , "6")
                                                 .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "2")
                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de loup, 1 coeur de loup de sang, 1 coeur de taupe, 2 crocs de loup")
                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                                 .addField("Prix d'achat :" , "380 cols")
                                                 .addField("Prix de revente :" , "95 cols")
                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'amulette du croc")
                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              bot.on('message', message => {
                                                const HP = (Math.floor((3)*Math.random()+2))
                                            const Dégâts = (Math.floor((4)*Math.random()+2))
                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'amulette du croc")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Amulette du croc :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                     .addField("HP :" , +HP)
                                                     .addField("Points de dégâts :" , +Dégâts)
                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });
    

                                                    bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Anneau du croc")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Anneau du croc :" , "C'est un anneau légèrement tranchant constitué de coeur d'animal et de croc de loup mais très utile pour les débutants !")
                                                 .addField("Niveau minimum requis pour le porter :" , "6")
                                                 .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "2")
                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de loup, 1 coeur de loup de sang, 1 coeur de taupe, 2 crocs de loup")
                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                                 .addField("Prix d'achat :" , "380 cols")
                                                 .addField("Prix de revente :" , "95 cols")
                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'anneau du croc")
                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });

                                              bot.on('message', message => {
                                                const HP = (Math.floor((3)*Math.random()+2))
                                            const Dégâts = (Math.floor((4)*Math.random()+2))
                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'anneau du croc")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Anneau du croc :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                     .addField("HP :" , +HP)
                                                     .addField("Points de dégâts :" , +Dégâts)
                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });
    

                                              bot.on('message', message => {
                                                if (message.content.startsWith(prefix + "Epée basique à deux mains")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Epée basique à deux mains :" , "C'est une épée peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                     .addField("Améliore le 'Combo' en :" , "'Combo supérieur'")
                                                  .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "40 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'épée basique à deux mains")
                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });

                                                  bot.on('message', message => {
                                                const Dégâts = (Math.floor((5)*Math.random()+2))
                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'épée basique à deux mains")) {
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                         .setColor(3447003)
                                                         .addField("Epée basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                         .addField("Points de dégâts :" , +Dégâts)
                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                          .setTimestamp()
                                                          message.channel.send({embed})
                                                        }   
                                                      });

                                                  bot.on('message', message => {
                                                    if (message.content.startsWith(prefix + "Epée basique à une main")) {
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                         .setColor(3447003)
                                                         .addField("Epée basique à une main :" , "C'est une épée peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                         .addField("Améliore le 'Combo' en :" , "'Combo amélioré'")
                                                      .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "20 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de l'épée basique à une main")
                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                          .setTimestamp()
                                                          message.channel.send({embed})
                                                        }   
                                                      });


                                                      bot.on('message', message => {
                                                        const Dégâts = (Math.floor((3)*Math.random()+1))
                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de l'épée basique à une main")) {
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                 .setColor(3447003)
                                                                 .addField("Epée basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                 .addField("Points de dégâts :" , +Dégâts)
                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})
                                                                }   
                                                              });

                                                  bot.on('message', message => {
                                                    if (message.content.startsWith(prefix + "Masse basique à deux mains")) {
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                         .setColor(3447003)
                                                         .addField("Masse basique à deux mains :" , "C'est une masse peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                       .addField("Améliore le 'Coup provocateur' en :" , "'Coup provocateur supérieur'")
                                                      .addField("Niveau minimum requis pour le porter :" , "1")
                                                         .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                         .addField("Prix d'achat :" , "160 cols")
                                                         .addField("Prix de revente :" , "40 cols")
                                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la masse basique à deux mains")
                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                          .setTimestamp()
                                                          message.channel.send({embed})
                                                        }   
                                                      });


                                                      bot.on('message', message => {
                                                        const Dégâts = (Math.floor((5)*Math.random()+2))
                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la masse basique à deux mains")) {
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                 .setColor(3447003)
                                                                 .addField("Masse basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                 .addField("Points de dégâts :" , +Dégâts)
                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})
                                                                }   
                                                              });

                                                      bot.on('message', message => {
                                                        if (message.content.startsWith(prefix + "Masse basique à une main")) {
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .addField("Masse basique à une main :" , "C'est une masse peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                          .addField("Améliore le 'Coup provocateur' en :" , "'Coup provocateur amélioré'")
                                                          .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                             .addField("Prix d'achat :" , "80 cols")
                                                             .addField("Prix de revente :" , "20 cols")
                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la masse basique à une main")
                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });

                                                          bot.on('message', message => {
                                                            const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la masse basique à une main")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Masse basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                     .addField("Points de dégâts :" , +Dégâts)
                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });


                                                      bot.on('message', message => {
                                                        if (message.content.startsWith(prefix + "Hache basique à deux mains")) {
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .addField("Hache basique à deux mains :" , "C'est une hache peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                            .addField("Améliore le 'Coup circulaire' en :" , "'Coup circulaire supérieur'")
                                                          .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                             .addField("Prix d'achat :" , "160 cols")
                                                             .addField("Prix de revente :" , "40 cols")
                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la hache basique à deux mains")
                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });

                                                          bot.on('message', message => {
                                                            const Dégâts = (Math.floor((5)*Math.random()+2))
                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la hache basique à deux mains")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Hache basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                     .addField("Points de dégâts :" , +Dégâts)
                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });

                                                          

                                                      bot.on('message', message => {
                                                        if (message.content.startsWith(prefix + "Hache basique à une main")) {
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .addField("Hache basique à une main :" , "C'est une hache peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                          .addField("Améliore le 'Coup circulaire' en :" , "'Coup circulaire amélioré'")
                                                          .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                             .addField("Prix d'achat :" , "80 cols")
                                                             .addField("Prix de revente :" , "20 cols")
                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la hache basique à une main")
                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });

                                                          bot.on('message', message => {
                                                            const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la hache basique à une main")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Hache basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                     .addField("Points de dégâts :" , +Dégâts)
                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });


                                                          bot.on('message', message => {
                                                            if (message.content.startsWith(prefix + "Rapière basique à deux mains")) {
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                 .setColor(3447003)
                                                                 .addField("Rapière basique à deux mains :" , "C'est une rapière peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                                .addField("Améliore le 'Coup d'estoc' en :" , "'Coup d'estoc supérieur'")
                                                              .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "40 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la rapière basique à deux mains")
                                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})
                                                                }   
                                                              });

                                                              bot.on('message', message => {
                                                                const Dégâts = (Math.floor((5)*Math.random()+2))
                                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la rapière basique à deux mains")) {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Rapière basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                         .addField("Points de dégâts :" , +Dégâts)
                                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });

                                                              bot.on('message', message => {
                                                                if (message.content.startsWith(prefix + "Rapière basique à une main")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Rapière basique à une main :" , "C'est une rapière peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                                  .addField("Améliore le 'Coup d'estoc' en :" , "'Coup d'estoc amélioré'")
                                                                  .addField("Niveau minimum requis pour le porter :" , "1")
                                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                                     .addField("Prix d'achat :" , "80 cols")
                                                                     .addField("Prix de revente :" , "20 cols")
                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la rapière basique à une main")
                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });

                                                                  bot.on('message', message => {
                                                                    const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la rapière basique à une main")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Rapière basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                             .addField("Points de dégâts :" , +Dégâts)
                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });

                                  

                                
                                                              bot.on('message', message => {
                                                                if (message.content.startsWith(prefix + "Cimeterre basique à deux mains")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Cimeterre basique à deux mains :" , "C'est une cimeterre peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                                   .addField("Améliore 'Esquive' en :" , "'Esquive supérieure'")
                                                                  .addField("Niveau minimum requis pour le porter :" , "1")
                                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                                     .addField("Prix d'achat :" , "160 cols")
                                                                     .addField("Prix de revente :" , "40 cols")
                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la cimeterre basique à deux mains")
                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });

                                                                  bot.on('message', message => {
                                                                    const Dégâts = (Math.floor((5)*Math.random()+2))
                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cimeterre basique à deux mains")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Cimeterre basique à deux main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                             .addField("Points de dégâts :" , +Dégâts)
                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });

                                                                  

                                
                                                              bot.on('message', message => {
                                                                if (message.content.startsWith(prefix + "Cimeterre basique à une main")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Cimeterre basique à une main :" , "C'est une cimeterre peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                                     .addField("Améliore 'Esquive' en :" , "'Esquive améliorée'")
                                                                  .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "20 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la cimeterre basique à une main")
                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });

                                                                  bot.on('message', message => {
                                                                    const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cimeterre basique à une main")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Cimeterre basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                             .addField("Points de dégâts :" , +Dégâts)
                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });

                                                                  bot.on('message', message => {
                                                                    if (message.content.startsWith(prefix + "Katana basique à deux mains")) {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Katana basique à deux mains :" , "C'est un katana peu puissant constitué de bois et de métal mais très utile pour les débutants !")
                                                                        .addField("Améliore la 'Parade' en :" , "'Parade supérieure'")
                                                                      .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "40 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du katana basique à deux mains")
                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });

                                                                      bot.on('message', message => {
                                                                        const Dégâts = (Math.floor((5)*Math.random()+2))
                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte du katana basique à deux mains")) {
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                 .setColor(3447003)
                                                                                 .addField("Katana basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                 .addField("Points de dégâts :" , +Dégâts)
                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})
                                                                                }   
                                                                              });

                                                                      bot.on('message', message => {
                                                                        if (message.content.startsWith(prefix + "Katana basique à une main")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Katana basique à une main :" , "C'est un katana peu puissant constitué de bois et de métal mais très utile pour les débutants !")
                                                                            .addField("Améliore la 'Parade' en :" , "'Parade améliorée'")
                                                                          .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "20 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du katana basique à une main")
                                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });

                                                                          bot.on('message', message => {
                                                                            const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte du katana basique à une main")) {
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                     .setColor(3447003)
                                                                                     .addField("Katana basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                     .addField("Points de dégâts :" , +Dégâts)
                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})
                                                                                    }   
                                                                                  });

                                                                      bot.on('message', message => {
                                                                        if (message.content.startsWith(prefix + "Glaive basique à deux mains")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Glaive basique à deux mains :" , "C'est un glaive peu puissant constitué de bois et de métal mais très utile pour les débutants !")
                                                                           .addField("Améliore le 'Coup d'estoc' en :" , "'Coup d'estoc supérieur'")
                                                                          .addField("Niveau minimum requis pour le porter :" , "1")
                                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                                             .addField("Prix d'achat :" , "160 cols")
                                                                             .addField("Prix de revente :" , "40 cols")
                                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du glaive basique à deux mains")
                                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });

                                                                          bot.on('message', message => {
                                                                            const Dégâts = (Math.floor((5)*Math.random()+2))
                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte du glaive basique à deux mains")) {
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                     .setColor(3447003)
                                                                                     .addField("Glaive basique à deux mains :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                     .addField("Points de dégâts :" , +Dégâts)
                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})
                                                                                    }   
                                                                                  });

                                                                          bot.on('message', message => {
                                                                            if (message.content.startsWith(prefix + "Dague basique à une main")) {
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                 .setColor(3447003)
                                                                                 .addField("Dague basique à une main :" , "C'est une dague peu puissante constitué de bois et de métal mais très utile pour les débutants !")
                                                                              .addField("Améliore le 'Coup précis' en :" , "'Coup précis amélioré'")
                                                                              .addField("Niveau minimum requis pour le porter :" , "1")
                                                                                 .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                                                 .addField("Prix d'achat :" , "80 cols")
                                                                                 .addField("Prix de revente :" , "20 cols")
                                                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la dague basique à une main")
                                                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})
                                                                                }   
                                                                              });

                                                                              bot.on('message', message => {
                                                                                const Dégâts = (Math.floor((3)*Math.random()+1))
                                                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la dague basique à une main")) {
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                         .setColor(3447003)
                                                                                         .addField("Dague basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                         .addField("Points de dégâts :" , +Dégâts)
                                                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})
                                                                                        }   
                                                                                      });

                                                                              bot.on('message', message => {
                                                                                if (message.content.startsWith(prefix + "Bouclier basique à une main")) {
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                     .setColor(3447003)
                                                                                     .addField("Bouclier basique à deux mains :" , "C'est un bouclier peu protecteur constitué de bois et de métal mais très utile pour les débutants !")
                                                                                   .addField("Améliore le 'Blocage' en :" , "'Blocage amélioré'")
                                                                                  .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "20 cols")
                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du bouclier basique à une main")
                                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})
                                                                                    }   
                                                                                  });

                                                                                  bot.on('message', message => {
                                                                                    const HP = (Math.floor((7)*Math.random()+3))
                                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du bouclier basique à une main")) {
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                             .setColor(3447003)
                                                                                             .addField("Bouclier basique à une main :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                             .addField("HP :" , +HP)
                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})
                                                                                            }   
                                                                                          });

                                                                                  
                                                                              bot.on('message', message => {
                                                                                if (message.content.startsWith(prefix + "Parchemin de poison faible")) {
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                     .setColor(3447003)
                                                                                     .addField("Parchemin de poison faible :" , "C'est un parchemin peu efficace permettant d'enchanter votre arme causant parfois du poison constitué d'oeil d'animal ainsi que de pierre de poison faible !")
                                                                                     .addField("Niveau minimum requis pour l'utiliser :" , "6")
                                                                                     .addField("Niveau minimum dans la spécialisation 'Enchanteur' requis pour fabriquer cet objet :" , "1")
                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de loup, 1 coeur de loup de sang, 1 coeur de lapin géant, 5 pierre de poison faible ")
                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Enchanteur' une fois l'objet fabriquer :" , "12")
                                                                                     .addField("Prix d'achat :" , "460 cols")
                                                                                     .addField("Prix de revente :" , "115 cols")
                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du parchemin de poison faible")
                                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})
                                                                                    }   
                                                                                  });

                                                                                  bot.on('message', message => {
                                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du parchemin de poison faible")) {
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                             .setColor(3447003)
                                                                                             .addField("Parchemin de poison faible :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                             .addField("Chaque fois que vous infligez au moins 1 point de dégât à un ennemis :" , "=Poison faible")
                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})
                                                                                            }   
                                                                                          });

                                                                                          bot.on('message', message => {
                                                                                            const Poison = (Math.floor((100)*Math.random()+1))
                                                                                            const Dégâts = (Math.floor((7)*Math.random()+3))
                                                                                            if (message.content.startsWith(prefix + "Poison faible")) {
                                                                                                if(Poison < 50){
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                     .setColor(3447003)
                                                                                                     .addField("Poison faible :" , "Vous n'arrivez pas à empoisonner votre cible...")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                    
                                                                                              if(Poison > 51){
                                                                                                const embed = new Discord.RichEmbed()
                                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                   .setColor(3447003)
                                                                                                   .addField("Poison faible :" , "Vous arrivez à empoisonner votre cible ce qui lui inflige " +Dégâts+ " points de dégâts !")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                              }
                                                                                              });


                                                                                  bot.on('message', message => {
                                                                                    if (message.content.startsWith(prefix + "Ragoût de renard")) {
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                         .setColor(3447003)
                                                                                         .addField("Ragoût de renard :" , "C'est un ragoût constitué de viande de renard et de persil mais très utile pour les débutants !")
                                                                                         .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                         .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "1")
                                                                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de renard, 2 persil")
                                                                                         .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "2")
                                                                                         .addField("Prix d'achat :" , "30 cols")
                                                                                         .addField("Prix de revente :" , "7 cols")
                                                                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de renard")
                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})
                                                                                        }   
                                                                                      });

                                                                                      bot.on('message', message => {
                                                                                        const HP = (Math.floor((11)*Math.random()+10))
                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de renard")) {
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                 .setColor(3447003)
                                                                                                 .addField("Ragoût de renard :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                 .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})
                                                                                                }   
                                                                                              });
    
                                                                                      

                                                                                      bot.on('message', message => {
                                                                                        if (message.content.startsWith(prefix + "Ragoût de sanglier")) {
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                             .setColor(3447003)
                                                                                             .addField("Ragoût de sanglier :" , "C'est un ragoût constitué de viande de sanglier et de persil mais très utile pour les débutants !")
                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                              .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                              .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "1")
                                                                                              .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de sanglier, 2 persil")
                                                                                              .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "2")
                                                                                              .addField("Prix d'achat :" , "30 cols")
                                                                                              .addField("Prix de revente :" , "7 cols")
                                                                                              .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de sanglier")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})
                                                                                            }   
                                                                                          });

                                                                                          bot.on('message', message => {
                                                                                            const HP = (Math.floor((11)*Math.random()+10))
                                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de sanglier")) {
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                     .setColor(3447003)
                                                                                                     .addField("Ragoût de sanglier :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                     .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})
                                                                                                    }   
                                                                                                  });
        


                                                                                          bot.on('message', message => {
                                                                                            if (message.content.startsWith(prefix + "Ragoût de chien")) {
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                 .setColor(3447003)
                                                                                                 .addField("Ragoût de chien :" , "C'est un ragoût constitué de viande de chien et de persil mais très utile pour les débutants !")
                                                                                                 .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                                 .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "1")
                                                                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de chien, 2 persil")
                                                                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "2")
                                                                                                 .addField("Prix d'achat :" , "30 cols")
                                                                                                 .addField("Prix de revente :" , "7 cols")
                                                                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de chien")
                                                                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})
                                                                                                }   
                                                                                              });

                                                                                              bot.on('message', message => {
                                                                                                const HP = (Math.floor((11)*Math.random()+10))
                                                                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de chien")) {
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                         .setColor(3447003)
                                                                                                         .addField("Ragoût de chien :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                         .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                        }   
                                                                                                      });
            


                                                                                              

                                                                                                      bot.on('message', message => {
                                                                                                        const HP = (Math.floor((11)*Math.random()+10))
                                                                                                          if (message.content === prefix + "Achat/fabrication/découverte du ragoût de lapin") {
                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                 .setColor(3447003)
                                                                                                                 .addField("Ragoût de lapin :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                 .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                  .setTimestamp()
                                                                                                                  message.channel.send({embed})
                                                                                                                }   
                                                                                                              });
                    
 bot.on('message', message => {
                                                                                                if (message.content === prefix + "Ragoût de lapin géant") {
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                     .setColor(3447003)
                                                                                                     .addField("Ragoût de lapin géant :" , "C'est un ragoût d'une bonne qualité constitué de viande de lapin géant et de persil mais très utile pour les débutants !")
                                                                                                     .addField("Niveau minimum requis pour l'utiliser' :" , "3")
                                                                                                     .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "2")
                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de lapin géant, 4 persil")
                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "4")
                                                                                                     .addField("Prix d'achat :" , "80 cols")
                                                                                                     .addField("Prix de revente :" , "20 cols")
                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de lapin géant")
                                                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})
                                                                                                    }   
                                                                                                  });

                                                                                                  bot.on('message', message => {
                                                                                                    const HP = (Math.floor((21)*Math.random()+20))
                                                                                                    if (message.content === prefix + "Achat/fabrication/découverte du ragoût de lapin géant") {
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                             .setColor(3447003)
                                                                                                             .addField("Ragoût de lapin géant :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                             .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                              .setTimestamp()
                                                                                                              message.channel.send({embed})
                                                                                                            }   
                                                                                                          });
                
                

                                                                                                  bot.on('message', message => {
                                                                                                    if (message.content === (prefix) + "Ragoût de lapin"){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                         .setColor(3447003)
                                                                                                         .addField("Ragoût de lapin :" , "C'est un ragoût constitué de viande de lapin et de persil mais très utile pour les débutants !")
                                                                                                         .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                                         .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "1")
                                                                                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de lapin, 2 persil")
                                                                                                         .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "2")
                                                                                                         .addField("Prix d'achat :" , "30 cols")
                                                                                                         .addField("Prix de revente :" , "7 cols")
                                                                                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de lapin")
                                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                        }   
                                                                                                      });

                           
                    

                                                                                                      bot.on('message', message => {
                                                                                                          if (message.content === prefix + "Ragoût de loup") {
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                             .setColor(3447003)
                                                                                                             .addField("Ragoût de loup :" , "C'est un ragoût constitué de viande de loup et d'estragon mais très utile pour les débutants !")
                                                                                                             .addField("Niveau minimum requis pour l'utiliser' :" , "6")
                                                                                                             .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "2")
                                                                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de loup, 2 estragon")
                                                                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "4")
                                                                                                             .addField("Prix d'achat :" , "60 cols")
                                                                                                             .addField("Prix de revente :" , "15 cols")
                                                                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de loup")
                                                                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                              .setTimestamp()
                                                                                                              message.channel.send({embed})
                                                                                                            }   
                                                                                                          });

                                                                                                          bot.on('message', message => {
                                                                                                            const HP = (Math.floor((21)*Math.random()+20))
                                                                                                                 if (message.content === prefix + "Achat/fabrication/découverte du ragoût de loup") {
                                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                     .setColor(3447003)
                                                                                                                     .addField("Ragoût de loup :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                     .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                      .setTimestamp()
                                                                                                                      message.channel.send({embed})
                                                                                                                    }   
                                                                                                                  });
                        

                                                                                                          bot.on('message', message => {
                                                                                                               if (message.content === prefix + "Ragoût de loup de sang") {
                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                 .setColor(3447003)
                                                                                                                 .addField("Ragoût de loup de sang :" , "C'est un ragoût d'une bonne qualité constitué de viande de loup de sang et d'estragon mais très utile pour les débutants !")
                                                                                                                 .addField("Niveau minimum requis pour l'utiliser' :" , "10")
                                                                                                                 .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "3")
                                                                                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de loup de sang, 4 estragon")
                                                                                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "6")
                                                                                                                 .addField("Prix d'achat :" , "160 cols")
                                                                                                                 .addField("Prix de revente :" , "40 cols")
                                                                                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de loup de sang")
                                                                                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                  .setTimestamp()
                                                                                                                  message.channel.send({embed})
                                                                                                                }   
                                                                                                              });

                                                                                                              bot.on('message', message => {
                                                                                                                const HP = (Math.floor((41)*Math.random()+40))
                                                                                                                     if (message.content === prefix + "Achat/fabrication/découverte du ragoût de loup de sang") {
                                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                         .setColor(3447003)
                                                                                                                         .addField("Ragoût de loup de sang :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                         .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                          .setTimestamp()
                                                                                                                          message.channel.send({embed})
                                                                                                                        }   
                                                                                                                      });
                            

                                                                                                          
                            

                                                                                                              bot.on('message', message => {
                                                                                                                if (message.content.startsWith(prefix + "Ragoût de taupe")) {
                                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                     .setColor(3447003)
                                                                                                                     .addField("Ragoût de taupe :" , "C'est un ragoût constitué de viande de taupe et d'estragon mais très utile pour les débutants !")
                                                                                                                     .addField("Niveau minimum requis pour l'utiliser' :" , "6")
                                                                                                                     .addField("Niveau minimum dans la spécialisation 'Cuisinier' requis pour fabriquer cet objet :" , "2")
                                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 viande de taupe, 2 estragon")
                                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Cuisinier' une fois l'objet fabriquer :" , "4")
                                                                                                                     .addField("Prix d'achat :" , "60 cols")
                                                                                                                     .addField("Prix de revente :" , "15 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de taupe")
                                                                                                                     .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                      .setTimestamp()
                                                                                                                      message.channel.send({embed})
                                                                                                                    }   
                                                                                                                  });

                                                                                                                  bot.on('message', message => {
                                                                                                                    const HP = (Math.floor((21)*Math.random()+20))
                                                                                                                        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de taupe")) {
                                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                             .setColor(3447003)
                                                                                                                             .addField("Ragoût de taupe :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                             .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                              .setTimestamp()
                                                                                                                              message.channel.send({embed})
                                                                                                                            }   
                                                                                                                          });
                                

                                                                                                                  bot.on('message', message => {
                                                                                                                    if (message.content.startsWith(prefix + "Potion faible de soin")) {
                                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                         .setColor(3447003)
                                                                                                                         .addField("Potion faible de soin :" , "C'est une potion permettant de reprendre des HP constitué de coeur d'animal mais très utile pour les débutants !")
                                                                                                                         .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                                                     .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "1")
                                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de renard, 1 coeur de chien, 1 coeur de lapin, 1 coeur de sanglier, 2 baie, 2 herbe médicinale faible")
                                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "5")
                                                                                                                     .addField("Prix d'achat :" , "100 cols")
                                                                                                                     .addField("Prix de revente :" , "25 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion faible de soin")
                                                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                          .setTimestamp()
                                                                                                                          message.channel.send({embed})
                                                                                                                        }   
                                                                                                                      });

                                                                                                                      
                                                                                                                  bot.on('message', message => {
                                                                                                                    if (message.content.startsWith(prefix + "Potion faible de force")) {
                                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                         .setColor(3447003)
                                                                                                                         .addField("Potion faible de force :" , "C'est une potion permettant de gagner un peu de force constitué d'oeil d'animal mais très utile pour les débutants !")
                                                                                                                         .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                                                     .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "1")
                                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 oeil de renard, 1 oeil de chien, 1 oeil de lapin, 1 oeil de sanglier, 2 baie, 2 herbe médicinale faible")
                                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "5")
                                                                                                                     .addField("Prix d'achat :" , "120 cols")
                                                                                                                     .addField("Prix de revente :" , "30 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion faible de force")
                                                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                          .setTimestamp()
                                                                                                                          message.channel.send({embed})
                                                                                                                        }   
                                                                                                                      });

                                                                                                                      bot.on('message', message => {
                                                                                                                        const HP = (Math.floor((3)*Math.random()+2))
                                                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion faible de force")) {
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                                 .addField("Potion faible de force :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                                 .addField("Lorsque vous utilisez cet objet, pour les 10 prochains coups que vous infligez, vous gagnez des dégâts supplémentaires :" , +HP)
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})
                                                                                                                                }   
                                                                                                                              });


                                                                                                                      bot.on('message', message => {
                                                                                                                        if (message.content.startsWith(prefix + "Potion faible de défense")) {
                                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                             .setColor(3447003)
                                                                                                                             .addField("Potion faible de défense :" , "C'est une potion permettant de gagner un peu de défense constitué d'oeil d'animal mais très utile pour les débutants !")
                                                                                                                             .addField("Niveau minimum requis pour l'utiliser' :" , "1")
                                                                                                                         .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "1")
                                                                                                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 oeil de renard, 1 oeil de chien, 1 oeil de lapin, 1 oeil de sanglier, 2 baie, 2 herbe médicinale faible")
                                                                                                                         .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "5")
                                                                                                                         .addField("Prix d'achat :" , "120 cols")
                                                                                                                         .addField("Prix de revente :" , "30 cols")
                                                                                                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion faible de défense")
                                                                                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                              .setTimestamp()
                                                                                                                              message.channel.send({embed})
                                                                                                                            }   
                                                                                                                          });

                                                                                                                          bot.on('message', message => {
                                                                                                                            const HP = (Math.floor((2)*Math.random()+1))
                                                                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion faible de défense")) {
                                                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                     .setColor(3447003)
                                                                                                                                     .addField("Potion faible de défense :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                                     .addField("Lorsque vous utilisez cet objet, pour les 10 prochains coups que vous recevez, vous gagnez de la défense supplémentaire :" , +HP)
                                                                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                      .setTimestamp()
                                                                                                                                      message.channel.send({embed})
                                                                                                                                    }   
                                                                                                                                  });
    
    

                                                                                                                      bot.on('message', message => {
                                                                                                                        const HP = (Math.floor((21)*Math.random()+30))
                                                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion faible de soin")) {
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                                 .addField("Potion faible de soin :" , "Vous venez d'acheter ou de fabriquer cet objet !")
                                                                                                                                 .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})
                                                                                                                                }   
                                                                                                                              });
                                    
    

                                                                                                                      bot.on('message', message => {
                                                                                                                        if (message.content.startsWith(prefix + "Potion légère de soin")) {
                                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                             .setColor(3447003)
                                                                                                                             .addField("Potion légère de soin :" , "C'est une potion permettant de reprendre des HP constitué de coeur d'animal et d'oeil d'animal mais très utile pour les débutants !")
                                                                                                                             .addField("Niveau minimum requis pour l'utiliser' :" , "6")
                                                                                                                     .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "2")
                                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de lapin géant, 1 coeur de taupe, 1 coeur de loup, 1 coeur de loup de sang, 4 herbe médicinale")
                                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "10")
                                                                                                                     .addField("Prix d'achat :" , "320 cols")
                                                                                                                     .addField("Prix de revente :" , "80 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion légère de soin")
                                                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                              .setTimestamp()
                                                                                                                              message.channel.send({embed})
                                                                                                                            }   
                                                                                                                          }); 


                                                                                                                          bot.on('message', message => {
                                                                                                            const HP = (Math.floor((41)*Math.random()+60))
                                                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion légère de soin")) {
                                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                     .setColor(3447003)
                                                                                                                     .addField("Potion légère de soin :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                     .addField("Lorsque vous utilisez cet objet, vous regagnez des HP :" , +HP)
                                                                                                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                      .setTimestamp()
                                                                                                                      message.channel.send({embed})
                                                                                                                    }   
                                                                                                                  });

                                                                                                                  bot.on('message', message => {
                                                                                                                    if (message.content.startsWith(prefix + "Potion légère de défense")) {
                                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                         .setColor(3447003)
                                                                                                                         .addField("Potion légère de défense :" , "C'est une potion permettant de gagner de la défense constitué d'oeil d'animal mais très utile pour les débutants !")
                                                                                                                         .addField("Niveau minimum requis pour l'utiliser' :" , "6")
                                                                                                                     .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "2")
                                                                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 oeil de taupe, 1 oeil de loup, 1 oeil de lapin géant, 1 oeil de loup de sang, 4 herbe médicinale ")
                                                                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "10")
                                                                                                                     .addField("Prix d'achat :" , "400 cols")
                                                                                                                     .addField("Prix de revente :" , "100 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion légère de défense")
                                                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                          .setTimestamp()
                                                                                                                          message.channel.send({embed})
                                                                                                                        }   
                                                                                                                      });

                                                                                                                       bot.on('message', message => {
                                                                                                                        const HP = (Math.floor((5)*Math.random()+4))
                                                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion légère de force")) {
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                                 .addField("Potion légère de force :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                                 .addField("Lorsque vous utilisez cet objet, pour les 10 prochains coups que vous infligez, vous gagnez des dégâts supplémentaires :" , +HP)
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})
                                                                                                                                }   
                                                                                                                              });

                                                                                                                               bot.on('message', message => {
                                                                                                                        const HP = (Math.floor((3)*Math.random()+2))
                                                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la potion légère de défense")) {
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                                 .addField("Potion légère de défense :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
                                                                                                                                 .addField("Lorsque vous utilisez cet objet, pour les 10 prochains coups que vous recevez, vous gagnez de la défense supplémentaire :" , +HP)
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})
                                                                                                                                }   
                                                                                                                              });



                                                                                                                      bot.on('message', message => {
                                                                                                                      if (message.content.startsWith(prefix + "Potion légère de force")) {
                                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                           .setColor(3447003)
                                                                                                                           .addField("Potion légère de force :" , "C'est une potion permettant de gagner de la force constitué d'oeil d'animal mais très utile pour les débutants !")
                                                                                                                           .addField("Niveau minimum requis pour l'utiliser' :" , "6")
                                                                                                                       .addField("Niveau minimum dans la spécialisation 'Alchimiste' requis pour fabriquer cet objet :" , "2")
                                                                                                                       .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 oeil de taupe, 1 oeil de loup, 1 oeil de lapin géant, 1 oeil de loup de sang, 4 herbe médicinale ")
                                                                                                                       .addField("Points d'expérience gagnés dans la spécialisation 'Alchimiste' une fois l'objet fabriquer :" , "10")
                                                                                                                       .addField("Prix d'achat :" , "400 cols")
                                                                                                                       .addField("Prix de revente :" , "100 cols")
                                                                                                                       .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la potion légère de force")
                                                                                                                           .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                            .setTimestamp()
                                                                                                                            message.channel.send({embed})
                                                                                                                          }   
                                                                                                                        });
                        

                                                                                                                          bot.on('message', message => {
                                                                                                                            if (message.content.startsWith(prefix + "Clef du donjon sauvage")) {
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                                 .addField("Clef du donjon sauvage:" , "C'est une clef permettant d'ouvrir la porte pour accèder au donjon sauvage [PAS ENCORE DISPO] !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})
                                                                                                                                }   
                                                                                                                              }); 

 //////////////////////////////////////////////////////////////////OEUFS ET FAMILIERS///////////////////////////////////////////////////////////////////////    


                                                                                                                      bot.on('message', message => {
                                                                                                                        if (message.content.startsWith(prefix + "Oeuf déformé")) {
                                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                             .setColor(3447003)
                                                                                                                             .addField("Oeuf déformé :" , "C'est un oeuf assez étrange, déformé qui renferme parfois un bébé animal trouvable dans le palier 1 !")
                                 
                                                                                                                     .addField("Prix d'achat :" , "1000 cols")
                                                                                                                     .addField("Prix de revente :" , "250 cols")
                                                                                                                     .addField("Si vous trouvez ou acheter cette oeuf :" , "=Achat/découverte d'un oeuf déformé")
                                                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                              .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                                          }   
                                                                                                                        });

                                       bot.on('message', message => {
                                         const A = (Math.floor((100)*Math.random()+1))                          
                                                                                                                                                      if (message.content.startsWith(prefix + "Achat/découverte d'un oeuf déformé")) {
                                                                                                                              if(A < 50){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous ne découvrez aucun bébé animal malheureusement...")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                     if(A > 51 & A < 60){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé lapin !")
                                                                                                                              .addField("Bébé lapin :" ,"Confère 20 HP max supplémentaires !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                   if(A > 61 & A < 70){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé renard !")
                                                                                                                              .addField("Bébé renard :" ,"Après chacunes de vos attaques, le bébé renard attaque : =Bébé renard attaque")
                                                                                                                              
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                   if(A > 71 & A < 80){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé chien !")
                                                                                                                              .addField("Bébé chien :" ,"Confère 5 points de dégâts supplémentaires !")
                                                                                                                           
                                                                                                                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                   if(A > 81 & A < 90){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé sanglier")
                                                                                                                              .addField("Bébé sanglier :" ,"Confère 2 points d'armure supplémentaires !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                   if(A > 91 & A < 95){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé taupe !")
                                                                                                                              .addField("Bébé taupe :" ,"Confère 4 points d'armure supplémentaires !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})} 
                                                                                                                                   if(A > 96 & A < 98){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé loup !")
                                                                                                                              .addField("Bébé loup :" ,"Après chacunes de vos attaques, le bébé renard attaque : =Bébé loup attaque")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                                   if(A > 99){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
     .addField("Oeuf déformé" , "En ouvrant l'oeuf déformé, vous découvrez un bébé loup de sang !")
                                                                                                                              .addField("Bébé loup de sang :" ,"Après chacunes de vos attaques, le bébé renard attaque : =Bébé loup de sang attaque")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                        message.channel.send({embed})}
                                                                                                                          }   
                                                                                                                        });
                                         

      bot.on('message', message => {
                                                 const A = (Math.floor((100)*Math.random()+1))  
                                                    const B = (Math.floor((6)*Math.random()+3))  
                                                                                                                        if (message.content.startsWith(prefix + "Bébé renard attaque")) {
                                                                                                                         if(A < 50){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé renard :" ,"Le bébé renard tente de mordre sa cible mais il est trop petit et n'arrive pas à lui infliger de dégats...")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                           if(A > 51){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé renard :" ,"Le bébé renard fonce rapidement sur sa cible en poussant un petit crie avant de planter ses petits crocs dessus, il inflige " +B+ " points de dégâts !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
message.channel.send({embed})}
                                                                                                                          }   
                                                                                                                        });

        
           bot.on('message', message => {
                                                 const A = (Math.floor((100)*Math.random()+1))  
                                                    const B = (Math.floor((13)*Math.random()+6))  
                                                                                                                        if (message.content.startsWith(prefix + "Bébé loup attaque")) {
                                                                                                                         if(A < 50){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé loup :" ,"Le bébé loup essaye de bondir sur la cible mais se rate et retombe par terre et n'arrive pas à lui infliger de dégâts...")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                           if(A > 51){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé loup :" ,"Le bébé loup bondit rapidement sur sa cible, la déstabilise un peu pour planter ses crocs à un point vital, il inflige " +B+ " points de dégâts !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                       message.channel.send({embed})}
                                                                                                                          }   
                                                                                                                        });

             
                     
           bot.on('message', message => {
                                                 const A = (Math.floor((100)*Math.random()+1))  
                                                    const B = (Math.floor((25)*Math.random()+12))  
                                                                                                                        if (message.content.startsWith(prefix + "Bébé loup de sang attaque")) {
                                                                                                                         if(A < 50){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé loup de sang :" ,"Le bébé loup de sang hurle pour faire peur à l'ennemis avant de foncer dessus, mais il n'est pas assez rapide et n'arrive pas à lui infliger de dégâts...")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                                                  message.channel.send({embed})}   
                                                                                                                           if(A > 51){
                                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                                 .setColor(3447003)
                                                                                                                              .addField("Bébé loup de sang :" ,"Le bébé loup de sang hurle de rage avec un bruit glaçant le sang, il bondit sur sa cible les griffes immenses en avant et le plante, il inflige " +B+ " points de dégâts !")
                                                                                                                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                                  .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                                          }   
                                                                                                                        });




 //////////////////////////////////////////////////////////////////DONJON///////////////////////////////////////////////////////////////////////    




                          bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Donjon sauvage")) {
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                                                  .addField("Le donjon sauvage:" , "Pour entrer dans ce donjon, il vous faudra une clef du donjon sauvage par personne, seulement 5 personnes sont autorisés à rentrer en même temps, une fois à l'intérieur, la clef disparaîtra...")
                              .addField("Niveau conseillé :" , "10")
                                .addField("Actions possibles une fois à l'intérieur :" , "=Déplacement sur la gauche au donjon sauvage\n=Déplacement sur la droite au donjon sauvage\n=Déplacement en avant au donjon sauvage")
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                   message.channel.send({embed})
      }   
    });




bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Déplacement sur la gauche au donjon sauvage")) {
                              const A = (Math.floor((100)*Math.random()+1))
                              const B = (Math.floor((3)*Math.random()+2))
                              const C = (Math.floor((3)*Math.random()+2))
                              const D = (Math.floor((2*0.50)*Math.random()+1))
                              const E = (Math.floor((3)*Math.random()+2))
                              const F = (Math.floor((2*0.50)*Math.random()+1))
                              const G = (Math.floor((251)*Math.random()+250))
                              const H = (Math.floor((5*0.50)*Math.random()))
                              const I = (Math.floor((5*0.50)*Math.random()))
                              const J = (Math.floor((5*0.50)*Math.random()))
                              const K = (Math.floor((4*0.80)*Math.random()))
                              const L = (Math.floor((5*0.75)*Math.random()))
                              const M = (Math.floor((5*0.75)*Math.random()))
                              const N = (Math.floor((5*0.75)*Math.random()))
                              if(A < 75){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la gauche :" , "Vous vous déplacez à travers le donjon par la gauche, mais vous tombez nez à nez face à un groupe de monstre qui se baladait dans les longs couloirs...")
                                 .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Suite :" , "Une fois le combat finis, vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 76 & A < 85){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la gauche :" , "Vous vous déplacez à travers le donjon par la gauche, pendant plusieurs minutes, vous ne trouvez rien sur votre chemin")
                                 .addField("Suite :" , "Vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 86 & A < 90){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la gauche :" , "Vous vous déplacez à travers le donjon par la gauche, vous finissez par tomber sur un coffre contenant des biens précieux !")
                                 .addField("Cols :" , +G)
                                 .addField("Potions faibles de soin :" , +H)
                                 .addField("Potions légères de force :" , +I)
                                 .addField("Potions légères de défense :" , +J)
                                 .addField("Parchemin de poison faible :" , +K)
                                 .addField("Equipements en peau résistante au choix :" , +L)
                                 .addField("Armes à une main basique au choix :" , +M)
                                 .addField("Armes à deux mains basique au choix :" , +N)
                                 .addField("Suite :" , "Une fois les récompenses du coffres répartis entre vous, vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                if(A > 91 & A < 100){
                                  const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la gauche :" , "Vous vous déplacez à travers le donjon par la gauche, vous finissez par tomber face à la salle du boss, vous entrez doucement à l'intérieur, un loup gigantesque  apparaît au milieu de la salle")
                                 .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Loup gigantesque" , "1")
                                 .addField("Donjon sauvage terminé :" , "Une fois que vous avez finis le combat, écrivez :\n\n=Donjon sauvage récompenses")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                  message.channel.send({embed})}
                            }   
    });


bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Déplacement sur la droite au donjon sauvage")) {
                                const A = (Math.floor((100)*Math.random()+1))
                              const B = (Math.floor((3)*Math.random()+2))
                              const C = (Math.floor((3)*Math.random()+2))
                              const D = (Math.floor((2*0.50)*Math.random()+1))
                              const E = (Math.floor((3)*Math.random()+2))
                              const F = (Math.floor((2*0.50)*Math.random()+1))
                              const G = (Math.floor((251)*Math.random()+250))
                              const H = (Math.floor((5*0.50)*Math.random()))
                              const I = (Math.floor((5*0.50)*Math.random()))
                              const J = (Math.floor((5*0.50)*Math.random()))
                              const K = (Math.floor((4*0.80)*Math.random()))
                              const L = (Math.floor((5*0.75)*Math.random()))
                              const M = (Math.floor((5*0.75)*Math.random()))
                              const N = (Math.floor((5*0.75)*Math.random()))
                              if(A < 75){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la droite :" , "Vous vous déplacez à travers le donjon par la droite, mais vous tombez nez à nez face à un groupe de monstre qui se baladait dans les longs couloirs...")
                                 .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Suite :" , "Une fois le combat finis, vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 76 & A < 85){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la droite :" , "Vous vous déplacez à travers le donjon par la droite, pendant plusieurs minutes, vous ne trouvez rien sur votre chemin")
                                 .addField("Suite :" , "Vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 86 & A < 90){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la droite :" , "Vous vous déplacez à travers le donjon par la droite, vous finissez par tomber sur un coffre contenant des biens précieux !")
                                 .addField("Cols :" , +G)
                                 .addField("Potions faibles de soin :" , +H)
                                 .addField("Potions légères de force :" , +I)
                                 .addField("Potions légères de défense :" , +J)
                                 .addField("Parchemin de poison faible :" , +K)
                                 .addField("Equipements en peau résistante au choix :" , +L)
                                 .addField("Armes à une main basique au choix :" , +M)
                                 .addField("Armes à deux mains basique au choix :" , +N)
                                 .addField("Suite :" , "Une fois les récompenses du coffres répartis entre vous, vous pouvez continuer à vous déplacer dans une dictement dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                if(A > 91 & A < 100){
                                  const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement sur la droite :" , "Vous vous déplacez à travers le donjon par la droite, vous finissez par tomber face à la salle du boss, vous entrez doucement à l'intérieur, un loup gigantesque  apparaît au milieu de la salle")
                                  .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Loup gigantesque" , "1")
                                 .addField("Donjon sauvage terminé :" , "Une fois que vous avez finis le combat, écrivez :\n\n=Donjon sauvage récompenses")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                            }   
    });



bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Déplacement en avant au donjon sauvage")) {
                             const A = (Math.floor((100)*Math.random()+1))
                              const B = (Math.floor((3)*Math.random()+2))
                              const C = (Math.floor((3)*Math.random()+2))
                              const D = (Math.floor((2*0.50)*Math.random()+1))
                              const E = (Math.floor((3)*Math.random()+2))
                              const F = (Math.floor((2*0.50)*Math.random()+1))
                              const G = (Math.floor((251)*Math.random()+250))
                              const H = (Math.floor((5*0.50)*Math.random()))
                              const I = (Math.floor((5*0.50)*Math.random()))
                              const J = (Math.floor((5*0.50)*Math.random()))
                              const K = (Math.floor((4*0.80)*Math.random()))
                              const L = (Math.floor((5*0.75)*Math.random()))
                              const M = (Math.floor((5*0.75)*Math.random()))
                              const N = (Math.floor((5*0.75)*Math.random()))
                              if(A < 75){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement en avant :" , "Vous vous déplacez à travers le donjon en avant, mais vous tombez nez à nez face à un groupe de monstre qui se baladait dans les longs couloirs...")
                                 .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Suite :" , "Une fois le combat finis, vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 76 & A < 85){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement en avant :" , "Vous vous déplacez à travers le donjon en avant, pendant plusieurs minutes, vous ne trouvez rien sur votre chemin")
                                .addField("Suite :" , "Vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                              if(A > 86 & A < 90){
                                 const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement en avant :" , "Vous vous déplacez à travers le donjon en avant, vous finissez par tomber sur un coffre contenant des biens précieux !")
                                 .addField("Cols :" , +G)
                                 .addField("Potions faibles de soin :" , +H)
                                 .addField("Potions légères de force :" , +I)
                                 .addField("Potions légères de défense :" , +J)
                                 .addField("Parchemin de poison faible :" , +K)
                                 .addField("Equipements en peau résistante au choix :" , +L)
                                 .addField("Armes à une main basique au choix :" , +M)
                                 .addField("Armes à deux mains basique au choix :" , +N)
                                 .addField("Suite :" , "Une fois les récompenses du coffres répartis entre vous, vous pouvez continuer à vous déplacer dans une direction dans le donjon")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                                if(A > 91 & A < 100){
                                  const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement en avant :" , "Vous vous déplacez à travers le donjon en avant, vous finissez par tomber face à la salle du boss, vous entrez doucement à l'intérieur, un loup gigantesque  apparaît au milieu de la salle")
                                 .addField("Loup" , +B)
                                 .addField("Slime" , +C)
                                 .addField("Loup de sang" , +D)
                                 .addField("Bandit expérimenté" , +E)
                                 .addField("Bandit sombre" , +F)
                                 .addField("Loup gigantesque" , "1")
                                 .addField("Donjon sauvage terminé :" , "Une fois que vous avez finis le combat, écrivez :\n\n=Donjon sauvage récompenses")
                                 .setColor(3447003)
                                 .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/d/d7/Hidden_Dungeon_Entrance.png/revision/latest?cb=20140429103123")
                                 .setTimestamp()
                                 message.channel.send({embed})}
                            }   
    });




bot.on('message', message => {
                            let cont = message.content.slice(prefix.length).split(" ");
                            const args = cont.slice(1);
                            if (message.content.startsWith(prefix + "Donjon sauvage récompenses")) {
                              const A = (Math.floor((100)*Math.random()+1))
                              const B = (Math.floor((3)*Math.random()+2))
                              const C = (Math.floor((3)*Math.random()+2))
                              const D = (Math.floor((2*0.50)*Math.random()+1))
                              const E = (Math.floor((3)*Math.random()+2))
                              const F = (Math.floor((2*0.50)*Math.random()+1))
                              const G = (Math.floor((751)*Math.random()+750))
                              const H = (Math.floor((7*0.50)*Math.random()))
                              const I = (Math.floor((7*0.50)*Math.random()))
                              const J = (Math.floor((7*0.50)*Math.random()))
                              const K = (Math.floor((6*0.80)*Math.random()))
                              const L = (Math.floor((7*0.75)*Math.random()))
                              const M = (Math.floor((7*0.75)*Math.random()))
                              const N = (Math.floor((7*0.75)*Math.random()))
                               const embed = new Discord.RichEmbed()
                                 .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .addField("Déplacement en avant :" , "Vous vous déplacez à travers le donjon en avant, vous finissez par tomber sur un coffre contenant des biens précieux !")
                                 .addField("Cols :" , +G)
                                 .addField("Potions faibles de soin :" , +H)
                                 .addField("Potions légères de force :" , +I)
                                 .addField("Potions légères de défense :" , +J)
                                 .addField("Parchemin de poison faible :" , +K)
                                 .addField("Equipements en peau résistante au choix :" , +L)
                                 .addField("Armes à une main basique au choix :" , +M)
                                 .addField("Armes à deux mains basique au choix :" , +N)
                                 .setColor(3447003)
      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                                 .setTimestamp()
                                 message.channel.send({embed})}
          
    });

                               
  //////////////////////////////////////////////////////////////////MATERIAUX ET OBJETS SUR LES MONSTRES///////////////////////////////////////////////////////////////////////    

                             
bot.on('message', message => {
    if (message.content.startsWith(prefix + "Viande de renard")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Viande de renard :" , "C'est une viande basique que vous trouvez sur les renards dans les plaines du palier 1 !")
         .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "1 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de renard")
          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Viande de sanglier")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Viande de sanglier :" , "C'est une viande basique que vous trouvez sur les sangliers dans les plaines du palier 1 !")
             .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "1 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de sanglier")
              .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Viande de chien")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Viande de chien :" , "C'est une viande basique que vous trouvez sur les chiens dans les plaines du palier 1 !")
                 .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "1 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de chien")
                  .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });


              bot.on('message', message => {
                if (message.content === prefix + "Viande de lapin") {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Viande de lapin :" , "C'est une viande basique vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                     .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "1 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin")
                      .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });


                  bot.on('message', message => {
                    if (message.content === prefix + "Viande de lapin géant") {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Viande de lapin géant :" , "C'est une viande assez étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                         .addField("Prix d'achat :" , "20 cols")
         .addField("Prix de revente :" , "5 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin géant")
                          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                       bot.on('message', message => {
     if (message.content === prefix + "Viande de loup") {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Viande de loup :" , "C'est une viande basique que vous trouvez sur les loups dans la forêt du palier 1 !")
         .addField("Prix d'achat :" , "10 cols")
         .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de loup")
          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
         if (message.content === prefix + "Viande de loup de sang") {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Viande de loup de sang :" , "C'est une viande étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
             .addField("Prix d'achat :" , "40 cols")
         .addField("Prix de revente :" , "10 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de loup de sang")
              .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });


           bot.on('message', message => {
    if (message.content.startsWith(prefix + "Viande de taupe")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Viande de taupe :" , "C'est une viande basique vous trouvez sur les taupes en chassant dans la forêt du palier 1 !")
         .addField("Prix d'achat :" , "10 cols")
         .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de taupe")
          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Peau de sanglier")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Peau de sanglier :" , "C'est une peau basique que vous trouvez sur les sangliers dans les plaines du palier 1 !")
             .addField("Prix d'achat :" , "10 cols")
         .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Épaulières en peau arrachées\n=Cape en peau arrachée\n=Plastron en peau arraché\n=Gantelets en peau arrachés\n=Ceinture en peau arrachée\n=Jambières en peau arrachées\n=Bottes en peau arrachées")
              .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Peau de renard")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Peau de renard :" , "C'est une peau basique que vous trouvez sur les renards dans les plaines du palier 1 !")
                 .addField("Prix d'achat :" , "10 cols")
                 .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Épaulières en peau arrachées\n=Cape en peau arrachée\n=Plastron en peau arraché\n=Gantelets en peau arrachés\n=Ceinture en peau arrachée\n=Jambières en peau arrachées\n=Bottes en peau arrachées")
                  .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });


              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Peau de chien")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Peau de chien :" , "C'est une peau basique que vous trouvez sur les chiens dans les plaines du palier 1 !")
                     .addField("Prix d'achat :" , "10 cols")
                     .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Épaulières en peau arrachées\n=Cape en peau arrachée\n=Plastron en peau arraché\n=Gantelets en peau arrachés\n=Ceinture en peau arrachée\n=Jambières en peau arrachées\n=Bottes en peau arrachées")
                      .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });


                  bot.on('message', message => {
                    if (message.content === prefix + "Peau de lapin géant") {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de lapin géant :" , "C'est une peau étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                         .addField("Prix d'achat :" , "40 cols")
                         .addField("Prix de revente :" , "10 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Épaulières en peau résistantes\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistantes\n=Ceinture en peau résistante\n=Jambières en peau résistantes\n=Bottes en peau résistantes")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      
                  bot.on('message', message => {
                    if (message.content === prefix + "Peau de lapin") {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de lapin :" , "C'est une peau basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                         .addField("Prix d'achat :" , "10 cols")
                         .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Épaulières en peau arrachées\n=Cape en peau arrachée\n=Plastron en peau arraché\n=Gantelets en peau arrachés\n=Ceinture en peau arrachée\n=Jambières en peau arrachées\n=Bottes en peau arrachées")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      
                  bot.on('message', message => {
                     if (message.content === prefix + "Peau de loup") {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de loup :" , "C'est une peau basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                         .addField("Prix d'achat :" , "20 cols")
                         .addField("Prix de revente :" , "5 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Épaulières en peau résistantes\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistantes\n=Ceinture en peau résistante\n=Jambières en peau résistantes\n=Bottes en peau résistantes")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      
                  bot.on('message', message => {
                     if (message.content === prefix + "Peau de loup de sang") {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de loup de sang :" , "C'est une peau étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                         .addField("Prix d'achat :" , "80 cols")
                         .addField("Prix de revente :" , "20 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Épaulières en peau résistantes\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistantes\n=Ceinture en peau résistante\n=Jambières en peau résistantes\n=Bottes en peau résistantes")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Peau de taupe")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Peau de taupe :" , "C'est une peau basique que vous trouvez sur les taupes en chassant dans la forêt du palier 1 !")
                             .addField("Prix d'achat :" , "20 cols")
                         .addField("Prix de revente :" , "5 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Épaulières en peau résistantes\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistantes\n=Ceinture en peau résistante\n=Jambières en peau résistantes\n=Bottes en peau résistantes")
                              .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });




                      bot.on('message', message => {
                        if (message.content.startsWith(prefix + "Coeur de renard")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Coeur de renard :" , "C'est un coeur basique que vous trouvez sur les renards dans les plaines du palier 1 !")
                             .addField("Prix d'achat :" , "15 cols")
                             .addField("Prix de revente :" , "4 cols")
                             .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                              .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                          bot.on('message', message => {
                            if (message.content.startsWith(prefix + "Coeur de sanglier")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Coeur de sanglier :" , "C'est un coeur basique que vous trouvez sur les sangliers dans les plaines du palier 1 !")
                                 .addField("Prix d'achat :" , "15 cols")
                                 .addField("Prix de revente :" , "4 cols")
                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                                  .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                              bot.on('message', message => {
                                if (message.content.startsWith(prefix + "Coeur de chien")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Coeur de chien :" , "C'est un coeur basique que vous trouvez sur les chiens dans les plaines du palier 1 !")
                                     .addField("Prix d'achat :" , "15 cols")
                                     .addField("Prix de revente :" , "4 cols")
                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                                      .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  bot.on('message', message => {
                                      if (message.content === prefix + "Coeur de lapin") {
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                         .setColor(3447003)
                                         .addField("Coeur de lapin :" , "C'est un coeur basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                                         .addField("Prix d'achat :" , "15 cols")
                                                 .addField("Prix de revente :" , "4 cols")
                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                                          .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }   
                                      });
    

                                      bot.on('message', message => {
                                           if (message.content === prefix + "Coeur de lapin géant") {
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                             .setColor(3447003)
                                             .addField("Coeur de lapin géant :" , "C'est un coeur étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                                             .addField("Prix d'achat :" , "60 cols")
                                             .addField("Prix de revente :" , "15 cols")
                                             .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible\n=Potion légère de soin")
                                              .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }   
                                          });

                                          bot.on('message', message => {
                                             if (message.content === prefix + "Coeur de loup") {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Coeur de loup :" , "C'est un coeur basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                                                 .addField("Prix d'achat :" , "30 cols")
                         .addField("Prix de revente :" , "7 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible\n=Potion légère de soin\n=Anneau du croc\n=Amulette du croc")
                                                  .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              
                                          bot.on('message', message => {
                                             if (message.content === prefix + "Coeur de loup de sang") {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Coeur de loup de sang :" , "C'est un coeur étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                                                 .addField("Prix d'achat :" , "120 cols")
                                                 .addField("Prix de revente :" , "30 cols")
                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible\n=Potion légère de soin\n=Anneau du croc\n=Amulette du croc")
                                                  .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              
                                          bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Coeur de taupe")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Coeur de taupe :" , "C'est un coeur basique que vous trouvez sur les taupes en chassant dans la forêt du palier 1 !")
                                                 .addField("Prix d'achat :" , "30 cols")
                                                     .addField("Prix de revente :" , "7 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de soin\n=Anneau du croc\n=Amulette du croc")
                                                  .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              bot.on('message', message => {
                                                if (message.content.startsWith(prefix + "Oeil de renard")) {
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Oeil de renard :" , "C'est un oeil basique que vous trouvez sur les renards dans les plaines du palier 1 !")
                                                     .addField("Prix d'achat :" , "20 cols")
                                                     .addField("Prix de revente :" , "5 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                      .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                      .setTimestamp()
                                                      message.channel.send({embed})
                                                    }   
                                                  });


                                                  bot.on('message', message => {
                                                    if (message.content.startsWith(prefix + "Oeil de sanglier")) {
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                         .setColor(3447003)
                                                         .addField("Oeil de sanglier :" , "C'est un oeil basique que vous trouvez sur les sangliers dans les plaines du palier 1 !")
                                                         .addField("Prix d'achat :" , "20 cols")
                                                     .addField("Prix de revente :" , "5 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                          .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                          .setTimestamp()
                                                          message.channel.send({embed})
                                                        }   
                                                      });


                                                      bot.on('message', message => {
                                                        if (message.content.startsWith(prefix + "Oeil de chien")) {
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .addField("Oeil de chien :" , "C'est un oeil basique que vous trouvez sur les chiens dans les plaines du palier 1 !")
                                                             .addField("Prix d'achat :" , "20 cols")
                                                     .addField("Prix de revente :" , "5 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                              .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });


                                                          bot.on('message', message => {
                                                            if (message.content === prefix + "Oeil de lapin") {
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                 .setColor(3447003)
                                                                 .addField("Oeil de lapin :" , "C'est un oeil basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                                                                 .addField("Prix d'achat :" , "20 cols")
                                                     .addField("Prix de revente :" , "5 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                                  .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})
                                                                }   
                                                              });


                                                              bot.on('message', message => {
                                                            if (message.content === prefix + "Oeil de lapin géant") {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Oeil de lapin géant :" , "C'est un oeil étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                                                                     .addField("Prix d'achat :" , "80 cols")
                                                                     .addField("Prix de revente :" , "20 cols")
                                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                      .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });


                                                                  bot.on('message', message => {
                                                                     if (message.content === prefix + "Oeil de loup") {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Oeil de loup :" , "C'est un oeil basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                                                                         .addField("Prix d'achat :" , "40 cols")
                                                                         .addField("Prix de revente :" , "10 cols")
                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                          .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });


                                                                      
                                                                  bot.on('message', message => {
                                                                    if (message.content.startsWith(prefix + "Oeil de taupe")) {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Oeil de taupe :" , "C'est un oeil basique que vous trouvez sur les taupes en chassant dans la forêt du palier 1 !")
                                                                         .addField("Prix d'achat :" , "40 cols")
                                                                         .addField("Prix de revente :" , "10 cols")
                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                          .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });
    
                                                                      
                                                                  bot.on('message', message => {
                                                                     if (message.content === prefix + "Oeil de loup de sang") {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Oeil de loup de sang :" , "C'est un oeil basique que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                                                                         .addField("Prix d'achat :" , "160 cols")
                                                                         .addField("Prix de revente :" , "40 cols")
                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                          .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });


                                                                      bot.on('message', message => {
                                                                        if (message.content.startsWith(prefix + "Oreille de lapin géant")) {
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                             .setColor(3447003)
                                                                             .addField("Oreille de lapin géant :" , "C'est une oreille rare que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                                                                             .addField("Prix d'achat :" , "100 cols")
                                                                                 .addField("Prix de revente :" , "25 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "Aucun pour le moment")
                                                                              .setImage("https://i.pinimg.com/736x/d2/61/db/d261db083d29d647989bc5ff1c7f8ea3--baby-ballet-evan.jpg")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})
                                                                            }   
                                                                          });


                                                                          bot.on('message', message => {
                                                                            if (message.content.startsWith(prefix + "Croc de loup")) {
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                 .setColor(3447003)
                                                                                 .addField("Croc de loup :" , "C'est un croc rare que vous trouvez sur les loups dans la forêt du palier 1 !")
                                                                                 .addField("Prix d'achat :" , "100 cols")
                                                                                 .addField("Prix de revente :" , "25 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Anneau du croc\n=Amulette du croc")
                                                                                  .setImage("https://i.pinimg.com/236x/8f/2d/e0/8f2de0397c0818fc4291231a4d82dc40--vampire-fangs-flyer-design.jpg")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})
                                                                                }   
                                                                              });



                                                                              
                                                                          bot.on('message', message => {
                                                                            if (message.content.startsWith(prefix + "Gelatine")) {
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                 .setColor(3447003)
                                                                                 .addField("Gelatine :" , "C'est une gelatine basique que vous trouvez sur les slimes dans la forêt du palier 1 !")
                                                                                 .addField("Prix d'achat :" , "20 cols")
                                                                                 .addField("Prix de revente :" , "5 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "Aucun pour le moment")
                                                                                  .setImage("https://png.icons8.com/color/1600/jelly.png")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})
                                                                                }   
                                                                              });


                                                                                                            
                                                                          bot.on('message', message => {
                                                                            if (message.content.startsWith(prefix + "Pierre de poison faible")) {
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                 .setColor(3447003)
                                                                                 .addField("Pierre de poison faible :" , "C'est une pierre étrange que vous trouvez sur les slimes dans la forêt du palier 1 !")
                                                                                 .addField("Prix d'achat :" , "50 cols")
                                                                                 .addField("Prix de revente :" , "12 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible")
                                                                                  .setImage("https://thumbs.dreamstime.com/b/ic-ne-naturelle-verte-de-minerais-dans-le-style-de-bande-dessin%C3%A9e-d-isolement-sur-le-fond-blanc-minerais-et-actions-pr%C3%A9cieux-de-85611087.jpg")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})
                                                                                }   
                                                                              });


                                                                              bot.on('message', message => {
                                                                                if (message.content.startsWith(prefix + "Bois de frêne médiocre")) {
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                     .setColor(3447003)
                                                                                     .addField("Bois de frêne médiocre :" , "C'est un bois basique que vous trouvez dans la forêt du palier 1 !")
                                                                                     .addField("Prix d'achat :" , "20 cols")
                                                                                 .addField("Prix de revente :" , "5 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Epée basique à deux mains\n=Epée basique à une main\n=Masse basique à deux mains\n=Masse basique à une main\n=Hache basique à deux mains\n=Hache basique à une main\n=Rapière basique à deux mains\n=Rapière basique à une main\n=Cimeterre basique à deux mains\n=Cimeterre basique à une main\n=Katana basique à deux mains\n=Katana basique à une main\n=Glaive basique à deux mains\n=Dague basique à une main\n=Bouclier basique à une main")
                                                                                      .setImage("https://cdn2.iconfinder.com/data/icons/food-icons-6/200/farm_wood-512.png")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})
                                                                                    }   
                                                                                  });

                                                                                  bot.on('message', message => {
                                                                                    if (message.content.startsWith(prefix + "Bois de frêne commun")) {
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                         .setColor(3447003)
                                                                                         .addField("Bois de frêne commun :" , "C'est un bois étrange que vous trouvez dans la forêt du palier 1 !")
                                                                                         .addField("Prix d'achat :" , "40 cols")
                                                                                 .addField("Prix de revente :" , "10 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "Aucun pour le moment")
                                                                                          .setImage("https://cdn2.iconfinder.com/data/icons/food-icons-6/200/farm_wood-512.png")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})
                                                                                        }   
                                                                                      });

                                                                                  bot.on('message', message => {
                                                                                    if (
                                                                                      message.content.startsWith(prefix + "Cuivre médiocre")) {
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                         .setColor(3447003)
                                                                                         .addField("Cuivre médiocre :" , "C'est un minerai basique que vous trouvez en minant dans la forêt du palier 1 !")
                                                                                         .addField("Prix d'achat :" , "20 cols")
                                                                                         .addField("Prix de revente :" , "5 cols")
                                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Epée basique à deux mains\n=Epée basique à une main\n=Masse basique à deux mains\n=Masse basique à une main\n=Hache basique à deux mains\n=Hache basique à une main\n=Rapière basique à deux mains\n=Rapière basique à une main\n=Cimeterre basique à deux mains\n=Cimeterre basique à une main\n=Katana basique à deux mains\n=Katana basique à une main\n=Glaive basique à deux mains\n=Dague basique à une main\n=Bouclier basique à une main")
                                                                                          .setImage("https://png.icons8.com/color/1600/gold-ore.png")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})
                                                                                        }   
                                                                                      });



                                                                                      bot.on('message', message => {
                                                                                        if (
                                                                                          message.content.startsWith(prefix + "Cuivre commun")) {
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                             .setColor(3447003)
                                                                                             .addField("Cuivre commun :" , "C'est un minerai étrange que vous trouvez en minant dans la forêt du palier 1 !")
                                                                                             .addField("Prix d'achat :" , "40 cols")
                                                                                 .addField("Prix de revente :" , "10 cols")
                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "Aucun pour le moment")
                                                                                              .setImage("https://png.icons8.com/color/1600/gold-ore.png")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})
                                                                                            }   
                                                                                          });


                                                                                          bot.on('message', message => {
                                                                                            if (
                                                                                              message.content.startsWith(prefix + "Estragon")) {
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                 .setColor(3447003)
                                                                                                 .addField("Estragon :" , "C'est une herbe basique que vous trouvez en cueillant dans la forêt du palier 1 !")
                                                                                                 .addField("Prix d'achat :" , "20 cols")
                                                                                                 .addField("Prix de revente :" , "5 cols")
                                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de taupe\n=Ragoût de loup\n=Ragoût de loup de sang")
                                                                                                  .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})
                                                                                                }   
                                                                                              });

                                                                                              bot.on('message', message => {
                                                                                                if (
                                                                                                  message.content.startsWith(prefix + "Persil")) {
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                     .setColor(3447003)
                                                                                                     .addField("Persil :" , "C'est une herbe basique que vous trouvez en cueillant dans les plaines du palier 1 !")
                                                                                                     .addField("Prix d'achat :" , "10 cols")
                                                                                                     .addField("Prix de revente :" , "2 cols")
                                                                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin\n=Ragoût de renard\n=Ragoût de chien\n=Ragoût de sanglier")
                                                                                                      .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})
                                                                                                    }   
                                                                                                  });


                                                                                                  bot.on('message', message => {
                                                                                                
                                                                                                      if (message.content === prefix + "Herbe médicinale faible") {
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                         .setColor(3447003)
                                                                                                         .addField("Herbe médicinale faible :" , "C'est une herbe basique que vous trouvez en cueillant dans les plaines du palier 1 !")
                                                                                                         .addField("Prix d'achat :" , "10 cols")
                                                                                                         .addField("Prix de revente :" , "2 cols")
                                                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin\n=Potion faible de force\n=Potion faible de défense")
                                                                                                          .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                        }   
                                                                                                      });

                                                                                                      bot.on('message', message => {
                                                                                      
                                                                                                           if (message.content === prefix + "Herbe médicinale") {
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                             .setColor(3447003)
                                                                                                             .addField("Herbe médicinale :" , "C'est une herbe basique que vous trouvez en cueillant dans la forêt du palier 1 !")
                                                                                                             .addField("Prix d'achat :" , "20 cols")
                                                                                                             .addField("Prix de revente :" , "5 cols")
                                                                                                             .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de soin\n=Potion légère de force\n=Potion légère de défense")
                                                                                                              .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                              .setTimestamp()
                                                                                                              message.channel.send({embed})
                                                                                                            }   
                                                                                                          });

                                                                                                          bot.on('message', message => {
                                                                                                            if (
                                                                                                              message.content.startsWith(prefix + "Baie")) {
                                                                                                              const embed = new Discord.RichEmbed()
                                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                                 .setColor(3447003)
                                                                                                                 .addField("Baie :" , "C'est une baie basique que vous trouvez en cueillant dans les plaines du palier 1 !")
                                                                                                                 .addField("Prix d'achat :" , "10 cols")
                                                                                                                 .addField("Prix de revente :" , "2 cols")
                                                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin\n=Potion faible de force\n=Potion faible de défense")
                                                                                                                  .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                                  .setTimestamp()
                                                                                                                  message.channel.send({embed})
                                                                                                                }   
                                                                                                              });
                





//////////////////////////////////////////////////////////////////Meurtres///////////////////////////////////////////////////////////////////////                         
                                    bot.on('message', message => {
                                      if (message.content.startsWith(prefix + "Meurtre")) {            
                                            const A = (Math.floor((4)*Math.random()+0))
                                            const Cols = 25*A              
                                            const B = (Math.floor((2-(0.85))*Math.random()))
                                            const C = (Math.floor((2-(0.85))*Math.random()))
                                            const D = (Math.floor((2-(0.85))*Math.random()))
                                            const E = (Math.floor((2-(0.85))*Math.random()))
                                            const F = (Math.floor((2-(0.85))*Math.random()))
                                            const G = (Math.floor((2-(0.85))*Math.random()))
                                            const H = (Math.floor((2-(0.85))*Math.random()))
                                            const I = (Math.floor((2-(0.85))*Math.random()))
                                            const J = (Math.floor((2-(0.85))*Math.random()))
                                            const K = (Math.floor((2-(0.85))*Math.random()))
                                            const L = (Math.floor((3-(0.85))*Math.random()))
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Récompenses :" , "Suite à votre meurtre sur un joueur, vous obtenez :")
      .addField("Cols :" , +Cols+ " % de ses cols")
      .addField("Casque du joueur :" , +B)
      .addField("Epaulières du joueur :" , +C)
      .addField("Cape du joueur :" , +D)
      .addField("Plastron du joueur :" , +E)
      .addField("Gantelets du joueur :" , +F)
      .addField("Ceinture du joueur :" , +G)
      .addField("Jambières du joueur :" , +H)
      .addField("Bottes du joueur :" , +I)
      .addField("Amulette du joueur :" , +J)
      .addField("Anneau du joueur :" , +K)
      .addField("Armes du joueur :" , +L)
                                            .setImage("https://pm1.narvii.com/6286/fc81508bf3d20fa80036bca2dfe85f729697c547_hq.jpg")
                                            .setTimestamp()
                                            message.channel.send({embed})
                                      }
                                    })
//////////////////////////////////////////////////////////////////Commandes pour montrer des expressions//////////////////////////////////////////////////////////////////////   


                                    bot.on('message', message => {
                                      if (message.content.startsWith(prefix + "Surpris")) {
                                        const image = (Math.floor(100)*Math.random()+1)
                                        if(image < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                           .setColor(3447003)
                                           .setImage("https://formeinfullbloom.files.wordpress.com/2015/12/lulushock.png")
                                            .setTimestamp()
                                            message.channel.send({embed}) }
                                            if(11 < image & image < 20){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .setImage("https://static1.fjcdn.com/comments/And+besides+that+due+to+the+trend+in+anime+to+_01a930b08196b4c22a1a90aa69487030.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(21 < image & image < 30){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                       .setImage("https://avvesione.files.wordpress.com/2012/01/mirai_nikki-15-yukiteru-reaction_face-surprise-shock-fear-worry-emotion.jpg")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(31 < image & image < 40){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .setImage("https://i.kym-cdn.com/photos/images/original/001/172/318/f1b.jpg")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(41 < image & image < 50){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                   .setImage("http://3.bp.blogspot.com/-1c7V75Hp9Ek/Tm4ZYHhWAuI/AAAAAAAAAAc/UkVwwb38LFo/s1600/eclipse-akane-iro-ni-somaru-saka-01-1024x576-h264-39920e6300973312-47-53.jpg")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                     if(51 < image & image < 60){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .setImage("http://i.imgur.com/P5ckCu5.jpg")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(61 < image & image < 70){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                       .setImage("https://www.walldevil.com/wallpapers/w05/anime-anime-sword-art-online-anime-anime-black-hair-anime-anime-orange-hair-orange-eyes-anime-surprised-anime-long-hair.jpg")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(71 < image & image < 80){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .setImage("https://vignette.wikia.nocookie.net/kancolle/images/f/fe/Kotoura_san-07-haruka-surprised-cute-adorable.jpg/revision/latest?cb=20170908231106")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(81 < image & image < 90){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                   .setImage("https://media.tenor.com/images/c5070f9eddf5a2af9b0e2ac37f28af29/tenor.png")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                    if(91 < image & image < 100){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .setImage("https://i.pinimg.com/originals/10/79/2c/10792c623fab3e96b1f7b0a332aed2fd.jpg")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed}) }
}                 
                                        });






                                        
                                    bot.on('message', message => {
                                      if (message.content.startsWith(prefix + "Boobs")) {
                                        const image = (Math.floor(100)*Math.random()+1)
                                        if(image < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                           .setColor(3447003)
                                           .setImage("http://pm1.narvii.com/6058/3ae06db44832e9dd58e479e737b11ae52e1a062e_00.jpg")
                                            .setTimestamp()
                                            message.channel.send({embed}) }
                                            if(11 < image & image < 20){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .setImage("http://www.imagesyoulike.com/images/j/32x24/j5236.jpg")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(21 < image & image < 30){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                       .setImage("https://cloudedanime.files.wordpress.com/2017/02/konosuba-2-04-07-unreal-boobs.jpg")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(31 < image & image < 40){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "https://vignette.wikia.nocookie.net/fairytail/images/a/a1/Elie%27s_boobs.png/revision/latest?cb=20130824220631")
                                                             .setColor(3447003)
                                                             .setImage("https://i.kym-cdn.com/photos/images/original/001/172/318/f1b.jpg")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(41 < image & image < 50){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                   .setImage("https://i.kym-cdn.com/photos/images/newsfeed/000/928/514/f4d.gif")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                     if(51 < image & image < 60){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .setImage("https://i.pinimg.com/originals/3c/d2/24/3cd22423146142a36d2712ad656c2cc1.jpg")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(61 < image & image < 70){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                       .setImage("https://vignette.wikia.nocookie.net/keijo/images/2/2d/Kusakai_prepares_to_fight_%28Anime%29.jpg/revision/latest?cb=20161109201047")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(71 < image & image < 80){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                             .setImage("https://vignette.wikia.nocookie.net/saekano/images/4/45/Utaha%27s_boobs.gif/revision/latest?cb=20161022212405")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(81 < image & image < 90){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                   .setImage("http://cdn-9chat-fun.9cache.com/media/photo/a12pxPnZm_480wa_v1.gif")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                    if(91 < image & image < 100){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .setImage("http://blog-imgs-64.fc2.com/y/a/r/yaraon/gx8cFeB.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed}) }
}                 
                                        });












                                    bot.on('message', message => {
                                      if (message.content.startsWith(prefix + "Bonbon étrange")) {
                                        const image = (Math.floor(100)*Math.random()+1)
                                        if(image < 20){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                           .setColor(3447003)
                                        .addField("Transformation en lapin géant :" , "Vos pieds double de volume et de longues et fines oreilles poussent sur votre tête, des poils apparaîssent tous le long de vos bras et jambes ainsi que votre torse, de longues dents poussent à l'intérieur de votre bouche\n\nVotre transformation dure 24 H et vous confère 50 HP max supplémentaire ainsi que 4 points de défense !")
                                           .setImage("https://vignette.wikia.nocookie.net/sfgame/images/0/06/Grauenvoller_monsterhase.png/revision/latest?cb=20090708085014&path-prefix=de")
                                            .setTimestamp()
                                            message.channel.send({embed}) }
                                            if(21 < image & image < 40){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                               .addField("Transformation en slime :" , "Votre corps devient gelatineux, vous réduisez de taille mais vous vous sentez très à l'aise comme ceci malgrè que vous êtes presque liquide d'une couleur verte clair\n\nVotre transformation dure 24 H et vous confère 75 HP max supplémentaire ainsi que 6 points de défense !")
                                                 .setImage("https://vignette.wikia.nocookie.net/sfery/images/6/6b/59pf1_gabrieldevue.jpeg/revision/latest?cb=20141130234640")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(41 < image & image < 60){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                       .setImage("https://i0.wp.com/www.syldi-studio.com/wp-content/uploads/2017/10/loup-garou-foret-face-gros-plan.jpg?fit=640%2C585&ssl=1")
                                                        .setTimestamp()
                                                     .addField("Transformation en loup garou :" , "Vos mains deviennent très poilus avec des griffes sur le bout des doigts, vous doublez presque de taille et de volume physiquement et un museau apparaît sur votre visage, des crocs font aussi leur apparition sortant de votre bouche.\n\nVotre transformation dure 24 H et vous confère 10 points de dégâts supplémentaires ainsi que 50 HP !")
                                                        message.channel.send({embed}) }
                                                        if(61 < image & image < 80){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                           .addField("Transformation en roi des kobolts :" , "Une hache assez large apparaît dans votre main et un bouclier dans l'autre pendant que votre corps triple voir même quadruple de taille, votre peau devient d'une couleur rouge foncé avec des symboles dessus, et vous sentez aussi que vos yeux ont changés pour une couleur rouge très voyante presque lumineuse\n\nVotre transformation dure 24 H et vous confère 10 dégâts supplémentaires ainsi que 50 HP et 10 points d'armure !")
                                                             .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/f/f0/SAO_E02.png/revision/latest?cb=20120911050512")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(81 < image & image < 100){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                 .addField("Transformation en gleam eyes :" , "Une gigantesque épée de formes complexes apparaît dans vos deux mains, votre corps devient tellement immense que vous ne savez plus la notion de la taille humaine, votre peau devient bleu foncé et vos yeux de la même couleur, des cornes poussent sur votre tête ainsi que des genre de sabots à vos pied\n\nVotre transformation dure 24 H et vous confère 20 dégâts supplémentaires ainsi que 100 HP et 10 points d'armure !")
                                                                   .setImage("https://vignette.wikia.nocookie.net/sword-art-online/images/a/ab/TheGleamEyes.png/revision/latest?cb=20170611161342&path-prefix=fr")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                   
}                 
                                        });








                                    bot.on('message', message => {
                                      if (message.content.startsWith(prefix + "Météo du jour")) {
                                        const image = (Math.floor(100)*Math.random()+1)
                                        if(image < 30){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                           .setColor(3447003)
                                        .addField("Ciel dégagé :" , "Aujourd'hui, la météo est un ciel dégagé sans aucuns nuages à l'horizon, le ciel est d'une couleur bleu clair ce qui vous rend optimiste !\n\nAucun bonus/malus aujourd'hui !")
                                           .setImage("https://www.infoclimat.fr/photolive/photos/2015-09/30572217920151847.jpg")
                                            .setTimestamp()
                                            message.channel.send({embed}) }
                                            if(31 < image & image < 40){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                                                      .addField("Sombre :" , "Aujourd'hui, la météo est assez sombre, il y a quelques nuages mais surtout, le soleil n'est pas là et l'environnement en ville et en dehors est assez obscure...\n\nMalus de -10 pour les actions visuelles ainsi qu'un bonus de 10 sur les actions discrètes aujourd'hui !\n\n=Roll : -10\n=Roll : 10")

                                                 .setImage("https://vignette.wikia.nocookie.net/creepypasta/images/5/53/Clouds.jpg/revision/latest?cb=20150418001214&path-prefix=de")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(41 < image & image < 50){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                                                            .addField("Soleil :" , "Aujourd'hui, malgrè quelques nuages, le soleil est présent et éclaire toute la ville et l'extérieur ce qui vous donne envie de vous relaxer le temps que le soleil soit là !\n\nBonus de 10 pour les fuites en dehors d'un combat aujourd'hui !\n=Roll : 10\n=Fuite avec bonus de 10")

                                                       .setImage("https://sitel.com.mk/sites/default/files/article/teaser-images/2018/april/sonce-soncevo-vreme-175810.jpg")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(51 < image & image < 60){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "https://vignette.wikia.nocookie.net/fairytail/images/a/a1/Elie%27s_boobs.png/revision/latest?cb=20130824220631")
                                                             .setColor(3447003)
                                                                                                  .addField("Arc en ciel :" , "Aujourd'hui, quelques nuages et un peu de pluie mais un arc en ciel va se former à la fin de la journée avant que le soleil se couche, vous avez de la chance !\n\nBonus de 10 pour les fuites en combat et en dehors, ainsi qu'un bonus de 10 sur les actions sociales aujourd'hui !\n\n=Roll : 10")

                                                             .setImage("http://ekladata.com/R64I3AX173zliIFqGrdku1qFK8E.jpg")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                              if(61 < image & image < 70){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                   .setColor(3447003)
                                                                                                        .addField("Vents violents" , "Aujourd'hui, ce n'est pas vraiment le jour où il faut sortir, des vents très violents sont présents notamment avec la formation de tornades probables...\n\nMalus de 10 pour les actions auditives, ainsi qu'un malus de 10 sur les actions visuelles aujourd'hui !\n\n=Roll : -10")

                                                                   .setImage("https://cdnfr2.img.sputniknews.com/images/103275/77/1032757713.jpg")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed}) }
                                                                     if(71 < image & image < 80){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                                                      .addField("Brouillard" , "Aujourd'hui, du brouillard se forme peu à peu à travers tous l'aincrad, vous ne savez pas vraiment les raisons mais il se progage partout et ne vous facilite pas la tâche pour les combats ou pour observer des choses...\n\nMalus de 20 sur les actions visuelles, ainsi qu'un malus de 10 sur les fuites en dehors d'un combat aujourd'hui !\n\n=Roll : -20\n=Roll : -10")

                                                 .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/December_Fog_01_edit2.jpg/1200px-December_Fog_01_edit2.jpg")
                                                  .setTimestamp()
                                                  message.channel.send({embed}) }
                                                  if(81 < image & image < 90){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                       .setColor(3447003)
                                                                                            .addField("Pluie et orage :" , "Aujourd'hui, la pluie est présente avec quelques nuages sans aucun soleil en vue, ce n'est pas vraiment le jour pour sortir et se relaxer surtout avec des orages possibles...\n\nMalus de 10 sur les actions sociables aujourd'hui !\n\n=Roll : -10")

                                                       .setImage("https://p0.storage.canalblog.com/06/80/987217/87418395_o.jpg")
                                                        .setTimestamp()
                                                        message.channel.send({embed}) }
                                                        if(91 < image){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                             .setColor(3447003)
                                                                                                  .addField("Neige et grêle :" , "Aujourd'hui, le gel et le froid sont bien présents autant dans la ville qu'à l'extérieur, de la grêle ainsi que de la neige tombe du ciel partout, une bonne nouvelle pour certains mais une mauvaise pour les autres n'aimant pas la neige !\n\nMalus de 10 sur les fuites en dehors d'un combat, ainsi qu'un bonus de 10 sur les actions sociables aujourd'hui !\n\n=Roll : -10\n=Roll : 10")

                                                             .setImage("https://www.le-pradet.fr/wp-content/uploads/2018/02/neige-4-1.jpg")
                                                              .setTimestamp()
                                                              message.channel.send({embed}) }
                                                          
}                 
                                        });







bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
  if (message.content.startsWith(prefix + "test récompenses")) {   
        let Z = args.slice(2).join(" : ");
    const B = (Math.floor((3*1)*Math.random()))
    const BB = B*Z
  const C = (Math.floor((3*1)*Math.random()))
  const CC = C*Z
  const D = (Math.floor((2-(0.75))*Math.random()))
  const DD = D*Z
  const E = (Math.floor((2-(0.85))*Math.random()))
  const EE = E*Z
  const F = (Math.floor((14*1)*Math.random()+14*1))
  const FF = F*Z
  const G = (Math.floor((11*1)*Math.random()+10*1))
  const GG = G*Z
  const I = (Math.floor((2-(0.90))*Math.random()))
  const II = I*Z
  const O = (Math.floor((2-(0.98))*Math.random()))
  const OO = O*Z
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses :" , "\n:poultry_leg: Viande de loup : " +BB+ "\n:knife: Peau de loup : " +CC+ "\n:eye: Oeil de loup : " +DD+ "\n:cupid: Coeur de loup : " +EE+ "\n:gem: Croc de loup : " +II+ "\n:gem: Oeuf déformé : " +OO+ "\n:sparkles: Points d'expérience : " +FF+ ", aucun pour les niveaux 10 ou plus\n:large_orange_diamond: Cols : " +GG)
    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;










bot.on('message', message => {
  if (message.content.startsWith(prefix + "Volonté de vivre")) {   
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("http://www.le317.fr/guide/images/5/53/Coffrerustique2.png")
    .addField("Une fois les mots 'Volonté de vivre' dit oralement par l'un de vous, la porte s'ouvre, vous découvrez une salle de coffres IMMENSE, il y en a assez pour chaque joueurs présent [un coffre chacun] :" , "Pour reçevoir votre récompense dans le coffre, écrivez =Coffre secret")
    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;



bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
  if (message.content.startsWith(prefix + "test récompenses")) {   
        let Z = args.slice(2).join(" : ");
    const B = (Math.floor((3*1)*Math.random()))
    const BB = B*Z
  const C = (Math.floor((3*1)*Math.random()))
  const CC = C*Z
  const D = (Math.floor((2-(0.75))*Math.random()))
  const DD = D*Z
  const E = (Math.floor((2-(0.85))*Math.random()))
  const EE = E*Z
  const F = (Math.floor((14*1)*Math.random()+14*1))
  const FF = F*Z
  const G = (Math.floor((11*1)*Math.random()+10*1))
  const GG = G*Z
  const I = (Math.floor((2-(0.90))*Math.random()))
  const II = I*Z
  const O = (Math.floor((2-(0.98))*Math.random()))
  const OO = O*Z
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses :" , "\n:poultry_leg: Viande de loup : " +BB+ "\n:knife: Peau de loup : " +CC+ "\n:eye: Oeil de loup : " +DD+ "\n:cupid: Coeur de loup : " +EE+ "\n:gem: Croc de loup : " +II+ "\n:gem: Oeuf déformé : " +OO+ "\n:sparkles: Points d'expérience : " +FF+ ", aucun pour les niveaux 10 ou plus\n:large_orange_diamond: Cols : " +GG)
    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;






bot.on('message', message => {
  if (message.content.startsWith(prefix + "Récompenses journalières")) {   
         if (talkedRecently.has(message.author.id+10145)) {
                              const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Cooldown :" , " Vous devrez attendre 1 journée avant de pouvoir refaire ceci !")
                               .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/4/43/AnimeJohnnyBlack.png/revision/latest?cb=20140328034625")
                               .setTimestamp()
                               message.channel.send({embed})
                      } else {
  const Cols = (Math.floor((76)*Math.random()+25))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses journalières :" , "Vous venez d'ouvrir votre menu journalier, vous recevez " +Cols+ " cols !")
    .setTimestamp()
     message.channel.send({embed})
    talkedRecently.add(message.author.id+10145);
                               setTimeout(() => {
                                talkedRecently.delete(message.author.id+10145);
                              }, 86400000);
                          }
                               }
                          });





bot.on('message', message => {
  if (message.content.startsWith(prefix + "Coffre secret")) {   
  const B = (Math.floor((3*1)*Math.random()))
   const E = (Math.floor((3*1)*Math.random()+1))
      const A = (Math.floor((3*1)*Math.random()+1))
      const F = (Math.floor((2*1)*Math.random()))
       const C = (Math.floor((151)*Math.random()+100))
       const G = (Math.floor((3*1)*Math.random()+1))
       const H = (Math.floor((3*1)*Math.random()))
        const D = (Math.floor((251)*Math.random()+250))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("http://www.le317.fr/guide/images/5/53/Coffrerustique2.png")
    .addField("Récompenses dans le coffre" , ":gem: Oeuf déformé : " +A+ "\n:gem: Equipement en peau résistante au choix : " +B+ "\n:gem: Equipement en peau arraché au choix : " +E+ "\n:gem: Deux armes à une main basique ou une arme à deux mains basique au choix : " +F+ ":gem: Potion faible de soin : " +G+ "\n:gem: Potion légère de soin : " +H+ "\n:sparkles: Points d'expérience : " +C+ "\n:large_orange_diamond: Cols : " +D)
    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
 if (message.content === prefix + "Devenir partenaire") {
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.addField("Comment devenir partenaire ?" , "Il existe deux types de partenariats qui sont :\n\n:one: Les partenariats RP\n\n:two: Les partenariats simples\n\n\nSi vous voulez savoir comment devenir partenaire simple, écrivez :\n**=Devenir partenaire simple**\n\nSi vous voulez savoir comment devenir partenaire RP, écrivez :\n**=Devenir partenaire RP**")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
   if (message.content === prefix + "Devenir partenaire simple") {
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.addField("Comment devenir partenaire ?" , "Voici les critères du partenariat simple :\n\n:one: Avoir au minimum 100 membres\n\n:two: Avoir une communauté active\n\n:three: Les membres ne devront pas venir troll ou pub MP nos membres\n\nLa contrepartie sera que vous mettez notre pub sur votre discord, qui se situe sur ce lien à la page 1 et 2 :\n\nhttps://docs.google.com/document/d/1J8LZbLrHO9jL_epnq5Zj1l570AiFrcIGkUZ1oqyJjGw/edit?usp=sharing")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

bot.on('message', message => {
    if (message.content === prefix + "Devenir partenaire RP") {
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.addField("Comment devenir partenaire ?" , "Voici les critères du partenariat RP :\n\n:one: Avoir au minimum 20 membres\n\n:two: Avoir une communauté active et sympa\n\n:three: Les membres ne devront pas venir troll ou pub MP nos membres\n\n\nVous devrez remplir un formulaire disponible en écrivant :\n\n**=Formulaire**\n\nPour remplir ce formulaire, vous aurez besoin de mettre le thème et ce qui se trouve dans votre RP, vous avez la liste en écrivant :\n\n**=Thème RP**\n\nVous devez mettre au minimum 2 éléments, et maximum 10 éléments !\n\nLa contrepartie sera que vous mettez notre pub RP sur votre discord, qui se situe sur ce lien à la page 3 et 4 :\n\nhttps://docs.google.com/document/d/1J8LZbLrHO9jL_epnq5Zj1l570AiFrcIGkUZ1oqyJjGw/edit?usp=sharing\n\nUne fois le formulaire remplis, veuillez l'envoyer au fondateur en messages privés")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Formulaire")) {   
    message.channel.send("```**__۝▬▬๑₪۩۞『Le nom de votre RP』۞۩₪๑▬▬۝__**\n\n**Thème et éléments : [Ecrivez =Thème RP]**\n\n**Contexte de votre RP :\n\n**Niveau conseillé d'avoir : [Ecrivez =Thème RP]**\n\n**Durée de votre RP : [Ecrivez le =Thème RP]**\n\n**Informations spplémentaires : [Optionnel si vous voulez donner plus d'informations]**\n\n**__۝▬▬๑₪۩۞『Lien de votre RP』۞۩₪๑▬▬۝__**```")
        }
  }) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Thème RP")) {   
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.addField("Les thèmes et éléments d'un RP :" , "@MÉDIEVAL\n@VIOLENCE\n@PSYCHOLOGIQUE\n@HÉROS\n@MULTIVERS\n@SEXUEL\n@COMTEMPORAIN\n@MÉDIÉVAL FANTASY\n@GUERRE\n@APOCALYPTIQUE\n@HORREUR\n@PRIMITIF\n@AVENTURE\n@HISTORIQUE\n@RÉALITÉ ALTERNATIVE\n@DARK FANTASY\n@THRILLER\n@ÉCOLE\n@CYBERPUNK\n@FUTURISTE\n@STEAMPUNK\n@OBSCURE\n@MORT-VIVANT\n@MAGIQUE\n@POLITIQUE\n@VOCAL\n@POST-APOCALYPTIQUE\n@TERRORISME\n@TECHNOLOGIE\n@UTOPIE\n@DYSTOPIE\n@MAFIA\n@ESPACE\n@RÉALISME\n@PARANORMAL\n@STRATÉGIE\n@FANTASTIQUE\n@UNIVERS EMPRUNTÉ\n\nConcernant le niveau conseillé à avoir pour votre RP :\n@DÉBUTANT\n@EXPERT\n\nConcernant la durée de votre RP :\n@DURÉE LIMITÉE\n@DURÉE ILLIMITÉE\n\nNe mettez que le thème et les éléments qui correspondent à votre RP, et non pas au pif !")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;




/////////////////////////////////////////////////////////////////////LISTE D'OBJETS [PRIX + CRAFT]//////////////////////////////////////////////////////////////////   

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste d'objets")) {   
    const embed = new Discord.RichEmbed()
    .setColor(6447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.addField("Liste d'objets" , "Lors de votre aventure, vous gagnez des objets qui possèdent un prix de d'achat, de revente et permettant de pouvoir parfois être utiliser pour fabriquer des choses !\n\nVoici les différentes listes :\n\n=Liste des matériaux 1\n=Liste d'équipements 1\n=Liste d'armes 1\n=Liste des potions 1\n=Liste des ragoûts 1\n=Liste des parchemins 1\n=Liste des oeufs 1")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;
      
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des matériaux 1")) {   
 message.channel.send("```Viande de lapin :\nCoûts : [Achat : 5 cols] [Revente : 1 cols]\n\nViande de renard :\nCoûts : [Achat : 5 cols] [Revente : 1 cols]\n\nViande de chien :\nCoûts : [Achat : 5 cols] [Revente : 1 cols]\n\nViande de sanglier :\nCoûts : [Achat : 5 cols] [Revente : 1 cols]\n\nViande de lapin géant :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nViande de taupe :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nViande de loup :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nViande de loup de sang :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nPeau de lapin :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nPeau de renard :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nPeau de chien :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nPeau de sanglier :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nPeau de lapin géant :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nPeau de taupe :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nPeau de loup :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nPeau de loup de sang :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\n\nCoeur de lapin :\nCoûts : [Achat : 15 cols] [Revente : 4 cols]\n\nCoeur de renard :\nCoûts : [Achat : 15 cols] [Revente : 4 cols]\n\nCoeur de chien :\nCoûts : [Achat : 15 cols] [Revente : 4 cols]\n\nCoeur de sanglier :\nCoûts : [Achat : 15 cols] [Revente : 4 cols]\n\nCoeur de lapin géant :\nCoûts : [Achat : 60 cols] [Revente : 15 cols]\n\nCoeur de taupe :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\n\nCoeur de loup :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\n\nCoeur de loup de sang :\nCoûts : [Achat : 120 cols] [Revente : 30 cols]\n\nOeil de lapin :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nOeil de renard :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nOeil de chien :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nOeil de sanglier :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nOeil de lapin géant :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\n\nSuite en écrivant :\n=Liste des matériaux 2```")
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des matériaux 2")) {   
 message.channel.send("```Oeil de taupe :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nOeil de loup :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nOeil de loup de sang :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\n\nGelatine :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nOreille de lapin géant\nCoûts : [Achat : 100 cols] [Revente : 25 cols]\n\nCroc de loup :\nCoûts : [Achat : 100 cols] [Revente : 25 cols]\n\nPierre de poison faible :\nCoûts : [Achat : 50 cols] [Revente : 12 cols]\n\nCuivre médiocre :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nCuivre commun :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nBois de frêne médiocre :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nBois de frêne commun :\nCoûts : [Achat : 40 cols] [Revente : 10 cols]\n\nPersil :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nEstragon :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nHerbe médicinale faible :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]\n\nHerbe médicinale :\nCoûts : [Achat : 20 cols] [Revente : 5 cols]\n\nBaie :\nCoûts : [Achat : 10 cols] [Revente : 2 cols]```")
        }
  }) ;



bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste d'équipements 1")) {   
 message.channel.send("```Casque en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Casque en peau arrachée]\n\nEpaulières en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Epaulière en peaux arrachée]\n\nCape en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Cape en peau arrachée]\n\nPlastron en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Plastron en peau arrachée]\n\nGantelets en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Gantelets en peau arrachée]\n\nCeinture en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Ceinture en peau arrachée]\n\nJambières en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Jambières en peau arrachée]\n\nBottes en peau arrachée :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Bottes en peau arrachée]\n\nAnneau en coeur d'animal faible :\nCoûts : [Achat : 120 cols] [Revente : 30 cols]\nInfos : [=Anneau en coeur d'animal faible]\n\nAmulette en coeur d'animal faible :\nCoûts : [Achat : 120 cols] [Revente : 30 cols]\nInfos : [=Amulette en coeur d'animal faible]\n\nCasque en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Casque en peau résistante]\n\nEpaulières en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Epaulières en peau résistante]\n\nCape en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Cape en peau résistante]\n\nPlastron en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Plastron en peau résistante]\n\nGantelets en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Gantelets en peau résistante]\n\nCeinture en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Ceinture en peau résistante]\n\nSuite en écrivant :\n=Liste d'équipements 2```")
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste d'équipements 2")) {   
 message.channel.send("```Jambières en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Jambières en peau résistante]\n\nBottes en peau résistante :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Bottes en peau résistante]\n\nAnneau du croc :\nCoûts : [Achat : 380 cols] [Revente : 95 cols]\nInfos : [=Anneau du croc]\n\nAmulette du croc :\nCoûts : [Achat : 380 cols] [Revente : 95 cols]\nInfos : [=Amulette du croc]\n\nCasque rouillé :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Casque rouillé]\n\nEpaulières rouillées :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Epaulières rouillées]\n\nCape endommagée :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Cape endommagée]\n\nPlastron rouillé :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Plastron rouillé]\n\nGantelets rouillés :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Gantelets rouillés]\n\nCeinture rouillée :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Ceinture rouillée]\n\nJambières rouillées :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Jambières rouillées]\n\nBottes rouillées :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Bottes rouillées]\n\nAnneau rouillé :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Anneau rouillé]\n\nAmulette rouillée :\nCoûts : [Achat : 200 cols] [Revente : 50 cols]\nInfos : [=Amulette rouillée]```")
        }
  }) ;




bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste d'armes 1")) {   
 message.channel.send("```Epée basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Epée basique à deux mains]\n\nEpée basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Epée basique à une main]\n\nMasse basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Masse basique à deux mains]\n\nMasse basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Masse basique à une main]\n\nHache basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Hache basique à deux mains]\n\nHache basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Hache basique à une main]\n\nRapière basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Rapière basique à deux mains]\n\nRapière basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Rapière basique à une main]\n\nCimeterre basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Cimeterre basique à deux mains]\n\nCimeterre basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Cimeterre basique à une main]\n\nKatana basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Katana basique à deux mains]\n\nKatana basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Katana basique à une main]\n\nGlaive basique à deux mains :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Glaive basique à deux mains]\n\nDague basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Dague basique à une main]\n\nBouclier basique à une main :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Bouclier basique à une main]```")
        }
  }) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des ragoûts 1")) {   
 message.channel.send("```Ragoûts de lapin :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\nInfos : [=Ragoût de lapin]\n\nRagoûts de renard :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\nInfos : [=Ragoût de renard]\n\nRagoûts de chien :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\nInfos : [=Ragoût de chien]\n\nRagoûts de sanglier :\nCoûts : [Achat : 30 cols] [Revente : 7 cols]\nInfos : [=Ragoût de sanglier]\n\nRagoûts de lapin géant :\nCoûts : [Achat : 80 cols] [Revente : 20 cols]\nInfos : [=Ragoût de lapin géant]\n\nRagoûts de taupe :\nCoûts : [Achat : 60 cols] [Revente : 15 cols]\nInfos : [=Ragoût de taupe]\n\nRagoûts de loup :\nCoûts : [Achat : 60 cols] [Revente : 15 cols]\nInfos : [=Ragoût de loup]\n\nRagoûts de loup de sang :\nCoûts : [Achat : 160 cols] [Revente : 40 cols]\nInfos : [=Ragoût de loup de sang]```")
        }
  }) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des potions 1")) {   
 message.channel.send("```Potion faible de soin :\nCoûts : [Achat : 100 cols] [Revente : 25 cols]\nInfos : [=Potion faible de soin]\n\nPotion faible de force :\nCoûts : [Achat : 120 cols] [Revente : 30 cols]\nInfos : [=Potion faible de force]\n\nPotion faible de défense :\nCoûts : [Achat : 120 cols] [Revente : 30 cols]\nInfos : [=Potion faible de défense]\n\nPotion légère de soin :\nCoûts : [Achat : 320 cols] [Revente : 80 cols]\nInfos : [=Potion légère de soin]\n\nPotion légère de force :\nCoûts : [Achat : 400 cols] [Revente : 100 cols]\nInfos : [=Potion légère de force]\n\nPotion légère de défense :\nCoûts : [Achat : 400 cols] [Revente : 100 cols]\nInfos : [=Potion légère de défense]```")
        }
  }) ;
      
      

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des parchemins 1")) {   
 message.channel.send("```Parchemin de poison faible :\nCoûts : [Achat : 460 cols] [Revente : 115 cols]\nInfos : [=Parchemin de poison faible]```")
        }
  }) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Liste des oeufs 1")) {   
 message.channel.send("```Oeuf déformé :\nCoûts [Achat : 1000 cols] [Revente : 250 cols]\nInfos : [=Oeuf déformé]```")
        }
  }) ;
















bot.on('message', message => {
  if (message.content.startsWith(prefix + "Test réaction 1")) {   
message.react('👍').then(() => message.react('👎'));
const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        }
        else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });
     }
  }) ;






bot.on('message', message => {
  if (message.content.startsWith(prefix + "Test réaction 2")) {   
message.react('👍').then(() => message.react('👎'));
const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
message.awaitReactions(filter, { max: 1})
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        }
        else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });
     }
  }) ;





bot.on('message', message => {
  if (message.content.startsWith(prefix + "Test réaction 3")) {   
message.react('👍')
    message.react('👎')
    message.react('😃')
    message.react('😾')
const filter = (reaction, user) => {
    return ['👍', '👎', ':raised_back_of_hand:', ':white_check_mark:'].includes(reaction.emoji.name) && user.id === message.author.id;
};
message.awaitReactions(filter, { max: 1})
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '👍') {
            message.reply('A');
        }
        if (reaction.emoji.name === '👎') {
            message.reply('B');
        }
   if (reaction.emoji.name === '😃') {
            message.reply('C');
        }
   if (reaction.emoji.name === '😾') {
            message.reply('D');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });
     }
  }) ;


































bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Test")) {   
      let A = args.slice(0).join(" "); 
    let B = args.slice(B < 1).join(" "); 
    let C = args.slice(C < 2).join(" ");  
    let D = args.slice(D < 3).join(" ");  
 message.channel.send("Test :\n\n" +A+ "\n\n" +B+ "\n\n" +C+ "\n\n" +D)
        }
  }) ;

