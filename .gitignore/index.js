const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "=";
const talkedRecently = new Set();
let userCooldown = {};


bot.on('ready', function () {

  console.log("Je suis connecté !")
});



bot.on('guildMemberAdd', member => {

  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
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
        .addField("Pour effectuer un coup normal :" , "=Coup normal sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup normal avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup normal avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup normal avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un coup précis :" , "=Coup Précis sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup précis avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup précis avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup précis avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un coup d'estoc :" , "=Coup d'estoc sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup d'estoc avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup d'estoc avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup d'estoc avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un coup provocateur :" , "=Coup provocateur sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup provocateur avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup provocateur avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup provocateur avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un coup circulaire :" , "=Coup circulaire sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup circulaire avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup circulaire avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Coup circulaire avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer un crie de provocation :" , "=Crie de provocation sans bonus\n=Crie de provocation avec bonus de 5\n=Crie de provocation avec bonus de 10\n=Crie de provocation avec bonus de 15")
        .addBlankField(true)
        .addField("Pour effectuer un combo :" , "=Combo sans bonus : [Vos dégâts moins les points d'armure de l'ennemis]\n=Combo avec bonus de 5 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Combo avec bonus de 10 : [Vos dégâts moins les points d'armure de l'ennemis]\n=Combo avec bonus de 15 : [Vos dégâts moins les points d'armure de l'ennemis]")
        .addBlankField(true)
        .addField("Pour effectuer une esquive :" , "=Esquive sans bonus : [Dégâts de l'attaque moins vos points d'armure]\n=Esquive avec bonus de 5 : [Dégâts de l'attaque moins vos points d'armure]\n=Esquive avec bonus de 10 : [Dégâts de l'attaque moins vos points d'armure]\n=Esquive avec bonus de 15 : [Dégâts de l'attaque moins vos points d'armure]")
        .addBlankField(true)
        .addField("Pour effectuer un blocage :" , "=Blocage sans bonus : [Dégâts de l'attaque moins vos points d'armure]\n=Blocage avec bonus de 5 : [Dégâts de l'attaque moins vos points d'armure]\n=Blocage avec bonus de 10 : [Dégâts de l'attaque moins vos points d'armure]\n=Blocage avec bonus de 15 : [Dégâts de l'attaque moins vos points d'armure]")
        .addBlankField(true)
        .addField("Pour effectuer une parade :" , "=Parade sans bonus : [Dégâts de l'attaque]\n=Parade avec bonus de 5 : [Dégâts de l'attaque]\n=Parade avec bonus de 10 : [Dégâts de l'attaque]\n=Parade avec bonus de 15 : [Dégâts de l'attaque]")
        .addBlankField(true)
        .addField("Pour savoir ce que vous débloquez selon le niveau :" , "=Coups et défenses apprentissage")
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
        .addField("Niveau requis pour effectuer un coup normal :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une esquive :" , "Niveau 1")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup d'estoc :" , "Niveau 2")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer une parade :" , "Niveau 3")
        .addBlankField(true)
        .addField("Niveau requis pour effectuer un coup précis :" , "Niveau 4")
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
  if (message.content === (prefix) + "Plaines quêtes accomplis"){
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
    const Expplaines = (Math.floor((71)*Math.random()+30))
    const Colsplaines = (Math.floor((71)*Math.random()+30))
    const Potionsplaines = (Math.floor((2*0.5)*Math.random()))
    const Equipementsplaines = (Math.floor((2*0.75)*Math.random()))
    const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête des plaines :" , "Vos récompenses après l'accomplissement de votre quête sont :")
      .addField("Points d'expérience :" , +Expplaines)
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
  if (message.content === (prefix) + "Forêt quêtes accomplis"){
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
    const Expplaines = (Math.floor((150)*Math.random()+50))
    const Colsplaines = (Math.floor((150)*Math.random()+50))
    const Potionsplaines = (Math.floor((2*0.5)*Math.random()))
    const Equipementsplaines = (Math.floor((2*0.75)*Math.random()))
    const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/shingekinokyojin/images/c/c9/The_Forest_of_the_Giant_Trees.png/revision/latest?cb=20130811103348")
      .addField("Quête des plaines :" , "Vos récompenses après l'accomplissement de votre quête sont :")
      .addField("Points d'expérience :" , +Expplaines)
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
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
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
      .addField("Les récompenses une fois la quête accomplis :" , "=Plaines quêtes accomplis" )
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
      .addField("Les récompenses une fois la quête accomplis :" , "=Forêt quêtes accomplis" )
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
    const Cuivre = (Math.floor((3*0.25)*Math.random()+1))
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
    const Bois = (Math.floor((3*0.25)*Math.random()+1))
    const BoisRare = (Math.floor((2*0.85)*Math.random()))
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
      const Viande = (Math.floor((3*0.25)*Math.random()+1))
      const Peau = (Math.floor((2*0.50)*Math.random()))
      const Coeur = (Math.floor((2*0.75)*Math.random()))
      const Oeil = (Math.floor((2*0.75)*Math.random()))
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
      const Peau = (Math.floor((2*0.50)*Math.random()))
      const Coeur = (Math.floor((2*0.75)*Math.random()))
      const Oeil = (Math.floor((2*0.75)*Math.random()))
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
    .addField("Points d'armure :" , "2")
    .addField("Points de dégâts" , "16")
    .addField("Pour engager le combat :" , "=Loup attaque")
    .addField("Lorsque le loup reçoit un coup :" , "=Loup défense [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Loup récompenses")
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
      .addField("Points d'armure :" , "0")
      .addField("Points de dégâts" , "6")
      .addField("Pour engager le combat :" , "=Sanglier attaque")
      .addField("Lorsque le loup reçoit un coup :" , "=Sanglier défense [Points de dégâts de votre coup]")
      .addField("Les récompenses une fois mort :" , "=Sanglier récompenses")
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
        .addField("Point de vie :" , "15")
        .addField("Points d'armure :" , "0")
        .addField("Points de dégâts" , "4")
        .addField("Pour engager le combat :" , "=Renard attaque")
        .addField("Lorsque le loup reçoit un coup :" , "=Renard défense : [Points de dégâts de votre coup]")
        .addField("Les récompenses une fois mort :" , "=Renard récompenses")
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
          .addField("Point de vie :" , "20")
          .addField("Points d'armure :" , "0")
          .addField("Points de dégâts" , "8")
          .addField("Pour engager le combat :" , "=Chien attaque")
          .addField("Lorsque le loup reçoit un coup :" , "=Chien défense : [Points de dégâts de votre coup]")
          .addField("Les récompenses une fois mort :" , "=Chien récompenses")
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
            .addField("Point de vie :" , "40")
            .addField("Points d'armure :" , "3")
            .addField("Points de dégâts" , "8")
            .addField("Pour engager le combat :" , "=Lapin géant attaque")
            .addField("Lorsque le loup reçoit un coup :" , "=Lapin géant défense : [Points de dégâts de votre coup]")
            .addField("Les récompenses une fois mort :" , "=Lapin géant récompenses")
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
              .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/c/c8/Wolf.png/revision/latest?cb=20140308115118")
              .addField("Point de vie :" , "100")
              .addField("Points d'armure :" , "4")
              .addField("Points de dégâts" , "12")
              .addField("Pour engager le combat :" , "=Slime attaque")
              .addField("Lorsque le loup reçoit un coup :" , "=Slime défense : [Points de dégâts de votre coup]")
              .addField("Les récompenses une fois mort :" , "=Slime récompenses")
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
                .addField("Point de vie :" , "250")
                .addField("Points d'armure :" , "8")
                .addField("Points de dégâts" , "30")
                .addField("Pour engager le combat :" , "=Loup de sang attaque")
                .addField("Lorsque le loup reçoit un coup :" , "=Loup de sang défense : [Points de dégâts de votre coup]")
                .addField("Les récompenses une fois mort :" , "=Loup de sang récompenses")
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
    .addField("Point de vie :" , "30")
    .addField("Points d'armure :" , "1")
    .addField("Points de dégâts" , "10")
    .addField("Pour engager le combat :" , "=Bandit débutant attaque")
    .addField("Lorsque le loup reçoit un coup :" , "=Bandit débutant défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit débutant récompenses")
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
    .addField("Point de vie :" , "120")
    .addField("Points d'armure :" , "2")
    .addField("Points de dégâts" , "20")
    .addField("Pour engager le combat :" , "=Bandit expérimenté attaque")
    .addField("Lorsque le loup reçoit un coup :" , "=Bandit expérimenté défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit expérimenté récompenses")
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
    .addField("Point de vie :" , "200")
    .addField("Points d'armure :" , "6")
    .addField("Points de dégâts" , "40")
    .addField("Pour engager le combat :" , "=Bandit sombre attaque")
    .addField("Lorsque le loup reçoit un coup :" , "=Bandit sombre défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Bandit sombre récompenses")
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
    .addField("Lorsque le loup reçoit un coup :" , "=Urguf le chef défense : [Points de dégâts de votre coup]")
    .addField("Les récompenses une fois mort :" , "=Urguf le chef récompenses")
    .setTimestamp()
    message.channel.send({embed})
    }
  })


  

//////////////////////////////////////////////////////////Monstres récompenses////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Loup récompenses")) {
  const B = (Math.floor((3)*Math.random()))
  const C = (Math.floor((3)*Math.random()))
  const D = (Math.floor((2-(0.75))*Math.random()))
  const E = (Math.floor((2-(0.85))*Math.random()))
  const F = (Math.floor((21)*Math.random()+20))
  const G = (Math.floor((11)*Math.random()+10))
  const I = (Math.floor((2-(0.90))*Math.random()))
    const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
    .addField("Récompenses :" , "Suite à votre combat contre le loup, vous obtenez :")
    .addField("Viande de loup :" , +B)
    .addField("Peau de loup :" , +C)
    .addField("Oeil de loup :" , +D)
    .addField("Coeur de loup :" , +E)
    .addField("Croc de loup :" , +I)
    .addField("Points d'expérience :" , +F)
    .addField("Cols :" , +G)
    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Renard récompenses")) {
    const B = (Math.floor((3)*Math.random()))
    const C = (Math.floor((3)*Math.random()))
    const D = (Math.floor((2-(0.75))*Math.random()))
    const E = (Math.floor((2-(0.85))*Math.random()))
    const F = (Math.floor((11)*Math.random()+10))
    const G = (Math.floor((6)*Math.random()+5))
      const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
      .addField("Récompenses :" , "Suite à votre combat contre le renard, vous obtenez :")
      .addField("Viande de renard :" , +B)
      .addField("Peau de renard :" , +C)
      .addField("Oeil de renard :" , +D)
      .addField("Coeur de renard :" , +E)
      .addField("Points d'expérience :" , +F)
      .addField("Cols :" , +G)
      .setTimestamp()
      message.channel.send({embed})
          }
    }) ;


    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Sanglier récompenses")) {
      const B = (Math.floor((3)*Math.random()))
      const C = (Math.floor((3)*Math.random()))
      const D = (Math.floor((2-(0.75))*Math.random()))
      const E = (Math.floor((2-(0.85))*Math.random()))
      const F = (Math.floor((11)*Math.random()+10))
      const G = (Math.floor((6)*Math.random()+5))
        const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
        .addField("Récompenses :" , "Suite à votre combat contre le sanglier, vous obtenez :")
        .addField("Viande de sanglier :" , +B)
        .addField("Peau de sanglier :" , +C)
        .addField("Oeil de sanglier :" , +D)
        .addField("Coeur de sanglier :" , +E)
        .addField("Points d'expérience :" , +F)
        .addField("Cols :" , +G)
        .setTimestamp()
        message.channel.send({embed})
            }
      }) ;


      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Chien récompenses")) {
        const B = (Math.floor((3)*Math.random()))
        const C = (Math.floor((3)*Math.random()))
        const D = (Math.floor((2-(0.75))*Math.random()))
        const E = (Math.floor((2-(0.85))*Math.random()))
        const F = (Math.floor((11)*Math.random()+10))
        const G = (Math.floor((6)*Math.random()+5))
          const embed = new Discord.RichEmbed()
          .setColor(3447003)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
          .addField("Récompenses :" , "Suite à votre combat contre le chien, vous obtenez :")
          .addField("Viande de chien :" , +B)
          .addField("Peau de chien :" , +C)
          .addField("Oeil de chien :" , +D)
          .addField("Coeur de chien :" , +E)
          .addField("Points d'expérience :" , +F)
          .addField("Cols :" , +G)
          .setTimestamp()
          message.channel.send({embed})
              }
        }) ;


        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Lapin géant récompenses")) {
          const B = (Math.floor((3)*Math.random()))
          const C = (Math.floor((3)*Math.random()))
          const D = (Math.floor((2-(0.75))*Math.random()))
          const E = (Math.floor((2-(0.85))*Math.random()))
          const I = (Math.floor((2-(0.90))*Math.random()))
          const F = (Math.floor((41)*Math.random()+40))
          const G = (Math.floor((21)*Math.random()+20))
            const embed = new Discord.RichEmbed()
            .setColor(3447003)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
            .addField("Récompenses :" , "Suite à votre combat contre le lapin géant, vous obtenez :")
            .addField("Viande de lapin géant :" , +B)
            .addField("Peau de lapin géant :" , +C)
            .addField("Oeil de lapin géant :" , +D)
            .addField("Coeur de lapin géant :" , +E)
            .addField("Oreille de lapin géant :" , +I)
            .addField("Points d'expérience :" , +F)
            .addField("Cols :" , +G)
            .setTimestamp()
            message.channel.send({embed})
                }
          }) ;
        
      
          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Loup de sang récompenses")) {
            const B = (Math.floor((3)*Math.random()))
            const C = (Math.floor((3)*Math.random()))
            const D = (Math.floor((2-(0.80))*Math.random()))
            const E = (Math.floor((2-(0.90))*Math.random()))
            const I = (Math.floor((2-(0.95))*Math.random()))
            const F = (Math.floor((81)*Math.random()+80))
            const G = (Math.floor((41)*Math.random()+40))
              const embed = new Discord.RichEmbed()
              .setColor(3447003)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
              .addField("Récompenses :" , "Suite à votre combat contre le loup de sang, vous obtenez :")
              .addField("Viande de loup de sang :" , +B)
              .addField("Peau de loup de sang :" , +C)
              .addField("Oeil de loup de sang :" , +D)
              .addField("Coeur de loup de sang :" , +E)
              .addField("Croc de loup de sang :" , +I)
              .addField("Points d'expérience :" , +F)
              .addField("Cols :" , +G)
              .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;
          
  
            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Slime récompenses")) {
              const B = (Math.floor((4)*Math.random()))
              const C = (Math.floor((2-(0.50))*Math.random()))
              const F = (Math.floor((21)*Math.random()+20))
              const G = (Math.floor((11)*Math.random()+10))
              const H = (Math.floor((2-(0.90))*Math.random()))
              const I = (Math.floor((2-(0.90))*Math.random()))
              const J = (Math.floor((2-(0.90))*Math.random()))
              const K = (Math.floor((2-(0.90))*Math.random()))
              const L = (Math.floor((2-(0.90))*Math.random()))
              const M = (Math.floor((2-(0.90))*Math.random()))
              const N = (Math.floor((2-(0.90))*Math.random()))
              const O = (Math.floor((2-(0.90))*Math.random()))
              const P = (Math.floor((2-(0.90))*Math.random()))
              const Q = (Math.floor((2-(0.90))*Math.random()))
                const embed = new Discord.RichEmbed()
                .setColor(3447003)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                .addField("Récompenses :" , "Suite à votre combat contre le slime, vous obtenez :")
                   .addField("Points d'expérience :" , +F)
                .addField("Cols :" , +G)
                .addField("Gelatine :" , +B)
                .addField("Pierre de poison faible :" , +C)
                .addField("Casque rouillé :" , +H)
                .addField("Epaulières rouillées :" , +I)
                .addField("Cape endommagée :" , +J)
                .addField("Plastron rouillé :" , +K)
                .addField("Gantelets rouillés :" , +L)
                .addField("Ceinture rouillée :" , +M)
                .addField("Jambières rouillées :" , +N)
                .addField("Bottes rouillées :" , +O)
                .addField("Anneau rouillé :" , +P)
                .addField("Amulette rouillé :" , +Q)
                .setTimestamp()
                message.channel.send({embed})
                    }
              }) ;


              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Bandit débutant récompenses")) {
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
                    const S = (Math.floor((2-(0.90))*Math.random()))
                     const T = (Math.floor((2-(0.90))*Math.random()))
                      const U = (Math.floor((2-(0.90))*Math.random()))
                      const V = (Math.floor((2-(0.90))*Math.random()))
                const F = (Math.floor((11)*Math.random()+10))
                const G = (Math.floor((6)*Math.random()+5))
                  const embed = new Discord.RichEmbed()
                  .setColor(3447003)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                  .addField("Récompenses :" , "Suite à votre combat contre le bandit débutant, vous obtenez :")
                  .addField("Points d'expérience :" , +F)
                  .addField("Cols :" , +G)
                  .addField("Rapière basique à une main :" , +I)
                    .addField("Casque en peau arraché :" , +J)
                    .addField("Épaulières en peau arraché :" , +K)
                    .addField("Cape en peau arraché :" , +L)
                    .addField("Plastron en peau arraché :" , +M)
                    .addField("Gantelets en peau arraché :" , +N)
                    .addField("Ceinture en peau arraché :" , +O)
                    .addField("Jambières en peau arraché :" , +P)
                    .addField("Bottes en peau arraché :" , +Q)
                  .addField("Potion faible de soin :" , +R)
                  .addField("Ragoût de sanglier :" , +S)
                  .addField("Ragoût de renard :" , +T)
                  .addField("Ragoût de chien :" , +U)
                  .addField("Ragout de lapin :" , +V)
                  .setTimestamp()
                  message.channel.send({embed})
                      }
                }) ;


                bot.on('message', message => {
                  if (message.content.startsWith(prefix + "Bandit expérimenté récompenses")) {
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
                    const S = (Math.floor((2-(0.90))*Math.random()))
                     const T = (Math.floor((2-(0.90))*Math.random()))
                      const U = (Math.floor((2-(0.95))*Math.random()))
                      const V = (Math.floor((2-(0.95))*Math.random()))
                  const F = (Math.floor((21)*Math.random()+20))
                  const G = (Math.floor((11)*Math.random()+10))
                    const embed = new Discord.RichEmbed()
                    .setColor(3447003)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                    .addField("Récompenses :" , "Suite à votre combat contre le bandit expérimenté, vous obtenez :")
                    .addField("Points d'expérience :" , +F)
                    .addField("Cols :" , +G)
                    .addField("Epée basique à une main :" , +I)
                    .addField("Casque en peau résistante :" , +J)
                    .addField("Épaulières en peau résistante :" , +K)
                    .addField("Cape en peau résistante :" , +L)
                    .addField("Plastron en peau résistante :" , +M)
                    .addField("Gantelets en peau résistante :" , +N)
                    .addField("Ceinture en peau arraché :" , +O)
                    .addField("Jambières en peau résistante :" , +P)
                    .addField("Bottes en peau résistante :" , +Q)
                           .addField("Potion légère de soin :" , +R)
                  .addField("Ragoût de loup :" , +S)
                  .addField("Ragoût de taupe :" , +T)
                  .addField("Ragoût de lapin géant :" , +U)
                  .addField("Ragout de loup de sang :" , +V)
                    .setTimestamp()
                    message.channel.send({embed})
                        }
                  }) ;


                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Bandit sombre récompenses")) {
                      const I = (Math.floor((2-(0.80))*Math.random()))
                  const J = (Math.floor((2-(0.90))*Math.random()))
                  const K = (Math.floor((2-(0.90))*Math.random()))
                  const L = (Math.floor((2-(0.90))*Math.random()))
                  const M = (Math.floor((2-(0.90))*Math.random()))
                  const N = (Math.floor((2-(0.90))*Math.random()))
                  const O = (Math.floor((2-(0.90))*Math.random()))
                  const P = (Math.floor((2-(0.90))*Math.random()))
                  const Q = (Math.floor((2-(0.90))*Math.random()))
                  const R = (Math.floor((2-(0.98))*Math.random()))
                  const S = (Math.floor((2-(0.98))*Math.random()))
                     const T = (Math.floor((2-(0.95))*Math.random()))
                      const U = (Math.floor((2-(0.90))*Math.random()))
                      const V = (Math.floor((2-(0.90))*Math.random()))
                      const W = (Math.floor((2-(0.90))*Math.random()))
                      const X = (Math.floor((2-(0.90))*Math.random()))
                       const Y = (Math.floor((2-(0.95))*Math.random()))
                        const Z = (Math.floor((2-(0.95))*Math.random()))
                    const F = (Math.floor((41)*Math.random()+40))
                    const G = (Math.floor((21)*Math.random()+20))
                      const embed = new Discord.RichEmbed()
                      .setColor(3447003)
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                      .addField("Récompenses :" , "Suite à votre combat contre le bandit sombre, vous obtenez :")
                      .addField("Points d'expérience :" , +F)
                      .addField("Cols :" , +G)
                           .addField("Dague basique à une main :" , +I)
                    .addField("Casque en peau résistante :" , +J)
                    .addField("Épaulières en peau résistante :" , +K)
                    .addField("Cape en peau résistante :" , +L)
                    .addField("Plastron en peau résistante :" , +M)
                    .addField("Gantelets en peau résistante :" , +N)
                    .addField("Ceinture en peau arraché :" , +O)
                    .addField("Jambières en peau résistante :" , +P)
                    .addField("Bottes en peau résistante :" , +Q)
                      .addField("Amulette du croc :" , +R)
                      .addField("Anneau du croc :" , +S)
                          .addField("Potion légère de soin :" , +T)
                      .addField("Potion légère de force :" , +Y)
                      .addField("Potion légère de défense :" , +Z)
                  .addField("Ragoût de loup :" , +U)
                  .addField("Ragoût de taupe :" , +V)
                  .addField("Ragoût de lapin géant :" , +W)
                  .addField("Ragout de loup de sang :" , +X)
                      .setTimestamp()
                      message.channel.send({embed})
                          }
                    }) ;


                    bot.on('message', message => {
                      if (message.content.startsWith(prefix + "Urguf le chef récompenses")) {
                      const B = (Math.floor((3)*Math.random()))
                      const C = (Math.floor((3)*Math.random()))
                      const D = (Math.floor((2-(0.75))*Math.random()))
                      const E = (Math.floor((2-(0.85))*Math.random()))
                      const F = (Math.floor((201)*Math.random()+200))
                      const G = (Math.floor((101)*Math.random()+100))
                        const embed = new Discord.RichEmbed()
                        .setColor(3447003)
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setImage("https://vignette.wikia.nocookie.net/sao/images/0/02/Col.png/revision/latest?cb=20150705174105&path-prefix=es")
                        .addField("Récompenses :" , "Suite à votre combat contre Urguf le chef, vous obtenez :")
                        .addField("Points d'expérience :" , +F)
                        .addField("Cols :" , +G)
                        .setTimestamp()
                        message.channel.send({embed})
                            }
                      }) ;
                    

//////////////////////////////////////////////////////////Monstres attaques////////////////////////////////////////////////////////////////////////////////////
  


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Loup attaque")) {
    const Dégâts = 16
     const A = (Math.floor(((Dégâts*1.5))*Math.random()+(Dégâts/2)))
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
    const Dégâts = 4
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/2)))
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
    const Dégâts = 6
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
    const Dégâts = 8
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts/1.5)))
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
    const Dégâts = 30
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts)))
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
     const A = (Math.floor(((Dégâts))*Math.random()+(Dégâts)))
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
    const Dégâts = 8
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/2)))
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
    const Dégâts = 10
     const A = (Math.floor(((Dégâts*2.5))*Math.random()+(Dégâts/4)))
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
    const Dégâts = 20
     const A = (Math.floor(((Dégâts*2))*Math.random()+(Dégâts/1.5)))
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
  if (message.content.startsWith(prefix + "Bandit sombre attaque")) {
    const Dégâts = 40
     const A = (Math.floor(((Dégâts*3))*Math.random()+(Dégâts/1.5)))
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
     const A = (Math.floor(((Dégâts*5))*Math.random()+(Dégâts/2)))
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
     const C = (Math.floor((Dégâts/1.5)*Math.random()+(Dégâts/1.5)))
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
    .addField("Pour combattre :" , "=Plaines combat")
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
                                          if (message.content.startsWith(prefix + "Plaines combat")) {
                                              const B = (Math.floor((3*(0.50))*Math.random()))
                                              const C = (Math.floor((3*(0.50))*Math.random()))
                                              const D = (Math.floor((3*(0.50))*Math.random()))
                                              const E = (Math.floor((2*(0.85))*Math.random()))
                                              const F = (Math.floor((2*(0.75))*Math.random()))
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
                                               message.channel.send({embed})
                                              }})

//////////////////////////////////////////////////////////Forêt/////////////////////////////////////////////////////////////////////////////////////


                                                bot.on('message', message => {
                                                if (message.content === (prefix) + "Forêt"){
                                                   const embed = new Discord.RichEmbed()
                                                   .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setColor(1447003)
                                                  .setTitle("Forêt :" , "Bienvenue dans ce lieu habité par des loups dangereux et bien plus !")
                                                  .addField("Pour combattre :" , "=Forêt combat")
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
                                                if (message.content.startsWith(prefix + "Forêt combat")) {
                                                    const B = (Math.floor((3*(0.50))*Math.random()))
                                                    const C = (Math.floor((3*(0.50))*Math.random()))
                                                    const D = (Math.floor((3*(0.80))*Math.random()))
                                                    const E = (Math.floor((2*(0.90))*Math.random()))
                                                    const F = (Math.floor((2*(0.95))*Math.random()))
                                                     const embed = new Discord.RichEmbed()
                                                     .setAuthor(message.author.username , message.author.avatarURL)
                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                     .setColor(3447003)
                                                     .addField("Forêt :" , "En marchant dans la forêt, vous rencontrez les ennemis suivants")
                                                     .addField("Loup :" , +B)
                                                     .addField("Slime :" , +C)
                                                     .addField("Bandit experimenté :" , +D)
                                                     .addField("Bandit sombre :" , +E)
                                                     .addField("Loup de sang :" , +F)
                                                     .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
                                                     .setTimestamp()
                                                     message.channel.send({embed})
                                                    }})




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
   .addField("Valider le règlement et voir les salons :" , "Il suffit d'appuyer sur :white_check_mark: juste au dessus de ce message !")
   .addField("Comprendre le principe du discord et du RP :" , "Consultez notre site http://fr.sao-rp.wikia.com ou écrivez !menu dans le salon de commandes")
   .addField("Besoin d'aide ?" , "Vous pourrez écrire !aide pour que le staff vous aide et réponde à vos questions !")
   .addField("Invitation vers le discord :" , "https://discord.gg/QEYaNfQ")
   .addField("Invitation vers notre discord gaming [En developpement] :" , "https://discord.gg/dVpSU67")
   .addField("Invitation vers notre discord rencontre [En developpement] :" , "https://discord.gg/j6gPcUV")
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
  if (message.content.startsWith(prefix + "Regénération")) {
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
        const A = X*3
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
             .addField("│ Votre action est un échec avec un score de :" , "│► " +Roll)
             .setImage("https://i.ytimg.com/vi/2NrGCG2FYNk/maxresdefault.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (51 < Roll){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│ Votre action est une réussite avec un score de :" , "│► " +Roll)
               .setImage("http://www.amvcloud.com/uploads/thumbs/95e465080-1.jpg")
               .setTimestamp()
               message.channel.send({embed})
            }
        }
    });


////////////////////////////////////////////////////////Coup normal/////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup normal sans bonus")) {
      let degats = args.slice(4).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 25){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (26 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
         .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
         .setTimestamp()
         message.channel.send({embed})
      }
  }
});


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup normal avec bonus de 5")) {
      let degats = args.slice(6).join(" : ");
      const A = (Math.floor((degats)*Math.random()+(degats/2)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 20){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (21 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
         .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
         .setTimestamp()
         message.channel.send({embed})
      }
  }
});

bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
if (message.content.startsWith(prefix + "Coup normal avec bonus de 10")) {
    let degats = args.slice(6).join(" : ");
    const A = (Math.floor((degats)*Math.random()+(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 15){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (16 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
       .setImage("http://2.bp.blogspot.com/-AbOgw0hfqU8/UHRbq3TmvYI/AAAAAAAAEDU/Y95ofu76KIE/s1600/Sword+Art+Online+-+14+(2).jpg")
       .setTimestamp()
       message.channel.send({embed})
    }
}
});


bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
if (message.content.startsWith(prefix + "Coup normal avec bonus de 15")) {
  let degats = args.slice(6).join(" : ");
  const A = (Math.floor((degats)*Math.random()+(degats/2)))
  const B = (Math.floor((100)*Math.random()+1))
  if (B < 10){
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username , message.author.avatarURL)
   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
   .setColor(3447003)
   .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
   .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
   .setTimestamp()
   message.channel.send({embed})
  }
  if (11 < B){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
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
if (message.content.startsWith(prefix + "Coup précis sans bonus")) {
    let degats = args.slice(4).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 50){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (51 < B){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
       .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
       .setTimestamp()
       message.channel.send({embed})
      }
    }
});


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup précis avec bonus de 5")) {
      let degats = args.slice(6).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup précis avec bonus de 10")) {
      let degats = args.slice(6).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup précis avec bonus de 15")) {
      let degats = args.slice(6).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats*1.5)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 35){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (36 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/84/Kirito_vs._Heathcliff_final_blow_BD.png/revision/latest?cb=20130202030015")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
///////////////////////////////////////////////////////////////Coup d'estoc//////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
let cont = message.content.slice(prefix.length).split(" ");
const args = cont.slice(1);
if (message.content.startsWith(prefix + "Coup d'estoc sans bonus")) {
  let degats = args.slice(4).join(" : ");
  const A = (Math.floor((degats)*Math.random()+1*(degats/2)))
  const B = (Math.floor((100)*Math.random()+1))
  if (B < 5){
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username , message.author.avatarURL)
   .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
   .setColor(3447003)
   .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
   .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
   .setTimestamp()
   message.channel.send({embed})
  }
  if (6 < B & B < 75){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
     .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (B > 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
      .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A*1.5+ " points de dégâts")
      .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
      .setTimestamp()
      message.channel.send({embed})
     }
  }
});



bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup d'estoc avec bonus de 5")) {
    let degats = args.slice(6).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 70){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 71){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A*1.5+ " points de dégâts")
        .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
        .setTimestamp()
        message.channel.send({embed})
       }
    }
  });

  

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup d'estoc avec bonus de 10")) {
    let degats = args.slice(6).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 65){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 66){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A*1.5+ " points de dégâts")
        .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
        .setTimestamp()
        message.channel.send({embed})
       }
    }
  });

  

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Coup d'estoc avec bonus de 15")) {
    let degats = args.slice(6).join(" : ");
    const A = (Math.floor((degats)*Math.random()+1*(degats/2)))
    const B = (Math.floor((100)*Math.random()+1))
    if (B < 5){
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
     .setColor(3447003)
     .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
     .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
     .setTimestamp()
     message.channel.send({embed})
    }
    if (6 < B & B < 60){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
       .setImage("https://img00.deviantart.net/48e7/i/2013/287/0/7/kirito_vs__heathcliff_by_kanamelover101-d6qidml.png")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (B > 61){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A*1.5+ " points de dégâts")
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
  if (message.content.startsWith(prefix + "Combo sans bonus")) {
      let degats = args.slice(3).join(" : ");
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
       .addField("│ Vous ratez votre combo..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (76 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│ Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("│ Votre premier coup inflige :" , "│►" +A+ " points de dégâts")
         .addField("│ Votre deuxième coup inflige :" , "│►" +C+ " points de dégâts")
         .addField("│ Votre troisième coup inflige :" , "│►" +D+ " points de dégâts")
         .addField("│ Votre quatrième coup inflige :" , "│►" +E+ " points de dégâts")
         .addField("│ Votre cinquième coup inflige :" , "│►" +F+ " points de dégâts")
         .addField("│ Votre sixième coup inflige :" , "│►" +G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Combo avec bonus de 5")) {
      let degats = args.slice(5).join(" : ");
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
       .addField("│ Vous ratez votre combo..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (71 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│ Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("│ Votre premier coup inflige :" , "│►" +A+ " points de dégâts")
         .addField("│ Votre deuxième coup inflige :" , "│►" +C+ " points de dégâts")
         .addField("│ Votre troisième coup inflige :" , "│►" +D+ " points de dégâts")
         .addField("│ Votre quatrième coup inflige :" , "│►" +E+ " points de dégâts")
         .addField("│ Votre cinquième coup inflige :" , "│►" +F+ " points de dégâts")
         .addField("│ Votre sixième coup inflige :" , "│►" +G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Combo avec bonus de 10")) {
      let degats = args.slice(5).join(" : ");
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
       .addField("│ Vous ratez votre combo..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (66 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│ Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("│ Votre premier coup inflige :" , "│►" +A+ " points de dégâts")
         .addField("│ Votre deuxième coup inflige :" , "│►" +C+ " points de dégâts")
         .addField("│ Votre troisième coup inflige :" , "│►" +D+ " points de dégâts")
         .addField("│ Votre quatrième coup inflige :" , "│►" +E+ " points de dégâts")
         .addField("│ Votre cinquième coup inflige :" , "│►" +F+ " points de dégâts")
         .addField("│ Votre sixième coup inflige :" , "│►" +G+ " points de dégâts")
         .setImage("https://yukizuri.files.wordpress.com/2013/11/sword_art_online09-55-kirito-fighting.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });
  
  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Combo avec bonus de 15")) {
      let degats = args.slice(5).join(" : ");
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
       .addField("│ Vous ratez votre combo..." , "│► Dommage pour vous")
       .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (61 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│ Vous réussissez votre combo qui inflige au total :" , "│►" +H+ " points de dégâts")
         .addField("│ Votre premier coup inflige :" , "│►" +A+ " points de dégâts")
         .addField("│ Votre deuxième coup inflige :" , "│►" +C+ " points de dégâts")
         .addField("│ Votre troisième coup inflige :" , "│►" +D+ " points de dégâts")
         .addField("│ Votre quatrième coup inflige :" , "│►" +E+ " points de dégâts")
         .addField("│ Votre cinquième coup inflige :" , "│►" +F+ " points de dégâts")
         .addField("│ Votre sixième coup inflige :" , "│►" +G+ " points de dégâts")
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
    if (message.content.startsWith(prefix + "Coup provocateur sans bonus")) {
        let degats = args.slice(4).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 50){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (51 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
           .addField("│Provocation :" , "│► La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });

    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Coup provocateur avec bonus de 5")) {
        let degats = args.slice(6).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 45){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (46 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
           .addField("│Provocation :" , "│► La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });
    
    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Coup provocateur avec bonus de 10")) {
        let degats = args.slice(6).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 40){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (41 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
           .addField("│Provocation :" , "│► La cible sera obligé de vous attaquer à son prochain coup")
           .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/8/89/Kirito_vs_Xrphan.png/revision/latest?cb=20140307025834")
           .setTimestamp()
           message.channel.send({embed})
          }
        }
    });
    
    

  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Coup provocateur avec bonus de 15")) {
        let degats = args.slice(6).join(" : ");
        const A = (Math.floor((degats)*Math.random()+1*(degats)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 35){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
         .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
        if (36 < B){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│Vous réussissez votre coup qui inflige :" , "│►" +A+ " points de dégâts")
           .addField("│Provocation :" , "│► La cible sera obligé de vous attaquer à son prochain coup")
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
        if (message.content.startsWith(prefix + "Coup circulaire sans bonus")) {
            let degats = args.slice(4).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 50){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (51 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , "│►" +A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });

        

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Coup circulaire avec bonus de 5")) {
            let degats = args.slice(6).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 45){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (46 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , "│►" +A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });


      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Coup circulaire avec bonus de 10")) {
            let degats = args.slice(6).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 40){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (41 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , "│►" +A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });


        

      bot.on('message', message => {
        let cont = message.content.slice(prefix.length).split(" ");
        const args = cont.slice(1);
        if (message.content.startsWith(prefix + "Coup circulaire avec bonus de 15")) {
            let degats = args.slice(6).join(" : ");
            const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
            const B = (Math.floor((100)*Math.random()+1))
            const C = (Math.floor((3)*Math.random()+2))
            if (B < 35){
             const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("│Vous ratez votre coup..." , "│► Dommage pour vous")
             .setImage("http://www.anime-evo.net/wp-content/uploads/2012/10/Sword_14_5.jpg")
             .setTimestamp()
             message.channel.send({embed})
            }
            if (36 < B){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous réussissez votre coup touchant " +C+ " ennemis qui inflige :" , "│►" +A+ " points de dégâts à chacun")
               .setImage("http://2.bp.blogspot.com/-KSGOpS5ftCo/UJ4Vh45_37I/AAAAAAAAkdE/hLrQLvPDpIk/s1600/Sword+Art+Online+-+14.mkv_snapshot_10.54_%5B2012.11.10_00.28.25%5D.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
            }
        });
/////////////////////////////////////////////////////Crie de provocation////////////////////////////////////////////////////////////////////////////////////////////

        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Crie de provocation sans bonus")) {
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 25){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous ratez votre crie de provocation..." , "│► Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (26 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("│Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "│► Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Crie de provocation avec bonus de 5")) {
              let degats = args.slice(1).join(" ");
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 20){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous ratez votre crie de provocation..." , "│► Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (21 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("│Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "│► Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Crie de provocation avec bonus de 10")) {
              let degats = args.slice(1).join(" ");
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 15){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous ratez votre crie de provocation..." , "│► Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (16 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("│Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "│► Les cibles seront obligés de vous attaquer à leur prochain coup")
                 .setImage("https://i.stack.imgur.com/baOUT.png")
                 .setTimestamp()
                 message.channel.send({embed})
                }
              }
          });

          
        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Crie de provocation avec bonus de 15")) {
              const A = (Math.floor((degats/2)*Math.random()+1*(degats/2)))
              const B = (Math.floor((100)*Math.random()+1))
              const C = (Math.floor((3)*Math.random()+2))
              if (B < 10){
               const embed = new Discord.RichEmbed()
               .setAuthor(message.author.username , message.author.avatarURL)
               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
               .setColor(3447003)
               .addField("│Vous ratez votre crie de provocation..." , "│► Dommage pour vous")
               .setImage("https://i.pinimg.com/originals/74/ef/20/74ef206acce786bab2081e1fae7aa94e.jpg")
               .setTimestamp()
               message.channel.send({embed})
              }
              if (11 < B){
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("│Vous réussissez votre crie de provocation sur " +C+ " ennemis :" , "│► Les cibles seront obligés de vous attaquer à leur prochain coup")
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
  if (message.content.startsWith(prefix + "Esquive sans bonus")) {
      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre esquive et vous subissez" , "│►" +A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (51 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre esquive :" , "│► Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Esquive avec bonus de 5")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre esquive et vous subissez" , "│►" +A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre esquive :" , "│► Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Esquive  avec bonus de 10")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre esquive et vous subissez" , "│►" +A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre esquive :" , "│► Vous ne prenez aucun points de dégâts")
         .setImage("http://i.imgur.com/LjoYHp7.jpg")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Esquive avec bonus de 15")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 35){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre esquive et vous subissez" , "│►" +A*1.5+ " points de dégâts")
       .setImage("http://i.imgur.com/Hyzf5A2.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (36 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre esquive :" , "│► Vous ne prenez aucun points de dégâts")
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
    if (message.content.startsWith(prefix + "Blocage sans bonus")) {
        let degats = args.slice(3).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 50){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A*1.5+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (51 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A+ " points de dégâts")
            .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
    });

    
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Blocage avec bonus de 5")) {
        let degats = args.slice(5).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 45){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A*1.5+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (46 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A+ " points de dégâts")
            .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
            .setTimestamp()
            message.channel.send({embed})
          }
        }
    });


  
    bot.on('message', message => {
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Blocage avec bonus de 10")) {
          let degats = args.slice(5).join(" : ");
          const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
          const B = (Math.floor((100)*Math.random()+1))
          if (B < 40){
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
           .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A*1.5+ " points de dégâts")
           .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
           .setTimestamp()
             message.channel.send({embed})}
             if (41 < B){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A+ " points de dégâts")
              .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
              .setTimestamp()
              message.channel.send({embed})
            }
          }
      });
    
      
  bot.on('message', message => {
    let cont = message.content.slice(prefix.length).split(" ");
    const args = cont.slice(1);
    if (message.content.startsWith(prefix + "Blocage avec bonus de 15")) {
        let degats = args.slice(5).join(" : ");
        const A = (Math.floor((degats/4)*Math.random()+1*(degats/4)))
        const B = (Math.floor((100)*Math.random()+1))
        if (B < 35){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A*1.5+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/9/9d/Heathcliff7.png/revision/latest?cb=20140423203836")
         .setTimestamp()
           message.channel.send({embed})}
           if (36 < B){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("│Vous bloquez l'attaque et vous ne subissez que :" , "│►" +A+ " points de dégâts")
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
  if (message.content.startsWith(prefix + "Parade sans bonus")) {
      let degats = args.slice(3).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 50){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre parade et vous subissez" , "│►" +A*2+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (51 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre parade qui inflige :" , "│►" +A*1.75+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Parade avec bonus de 5")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 45){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre parade et vous subissez" , "│►" +A*2+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (46 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre parade qui inflige :" , "│►" +A*1.75+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Parade avec bonus de 10")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 40){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre parade et vous subissez" , "│►" +A*2+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (41 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre parade qui inflige :" , "│►" +A*1.75+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
         .setTimestamp()
         message.channel.send({embed})
        }
      }
  });

  
bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Parade avec bonus de 15")) {
      let degats = args.slice(5).join(" : ");
      const A = (Math.floor((degats)*Math.random()+1*(degats)))
      const B = (Math.floor((100)*Math.random()+1))
      if (B < 35){
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("│Vous échouez votre parade et vous subissez" , "│►" +A*2+ " points de dégâts")
       .setImage("http://i.imgur.com/KTUgaa0.jpg")
       .setTimestamp()
       message.channel.send({embed})
      }
      if (36 < B){
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("│Vous réussissez votre parade qui inflige :" , "│►" +A*1.75+ " points de dégâts")
         .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/0/0d/Kirito_using_Dual_Blades_BD.png/revision/latest?cb=20130202024109")
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
  if (message.content.startsWith(prefix + "Menu SAO 1")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
        .addField("SAO :" , "Permet d'apprendre le contexte !\n=SAO")
        .addBlankField(true)
        .addField("Personnage :" , "Permet de créer votre personnage !\n=Personnage")
        .addBlankField(true)
        .addField("Compétences :" , "Permet d'apprendre le système de compétence !\n=Compétences")
        .addBlankField(true)
        .addField("Particularités :" , "Permet d'apprendre le système de particularité !\n=Particularités")
        .addBlankField(true)
        .addField("Combat :" , "Permet d'apprendre le système de combat !\n=Combat")
        .addBlankField(true)
        .addField("Caractéristiques :" , "Permet d'apprendre le système de caractéristique !\n=Caractéristiques")
        .addBlankField(true)
        .addField("Spécialisations :" , "Permet d'apprendre le système de spécialisations !\n=Spécialisations")
        .addBlankField(true)
        .addField("Cristal :" , "Permet d'apprendre le système de cristal !\n=Cristal")
        .addBlankField(true)
       .addField("Armes :" , "Permet d'apprendre le système d'armes !\n=Armes")
        .addBlankField(true)
        .addField("Niveaux :" , "Permet d'apprendre le système de niveaux !\n=Niveaux")
        .addBlankField(true)
        .addField("Crafts :" , "Permet d'afficher tous les crafts existants !\n=Crafts")
        .addBlankField(true)
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
       .addBlankField(true)
       .addField("Donjons :" , "Permet d'apprendre le système de donjons !\n=Donjons")
       .addBlankField(true)
       .addField("Familiers :" , "Permet d'apprendre le système de familiers !\n=Familiers")
       .addBlankField(true)
       .addField("Quêtes :" , "Permet d'apprendre le système de quêtes !\n=Quêtes")
       .addBlankField(true)
       .addField("Guilde :" , "Permet d'apprendre le système de guilde !\n=Guilde")
       .addBlankField(true)
       .addField("Etats :" , "Permet d'apprendre le système d'états !\n=Etats")
       .addBlankField(true)
       .addField("Métiers :" , "Permet d'apprendre le système de métiers !\n=Métiers")
       .addBlankField(true)
       .addField("Ville :" , "Permet d'afficher les informations concernant la ville !\n=Ville")
       .addBlankField(true)
       .addField("Extérieur :" , "Permet d'afficher les informations concernant l'extérieur !\n=Extérieur")
       .addBlankField(true)
       .addField("Souterrains :" , "Permet d'afficher les informations concernant les souterrains !\n=Souterrains")
       .addBlankField(true)
       .addField("Constructions :" , "Permet d'apprendre le système de constructions !\n=Constructions")
       .addBlankField(true)
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
       .addField("Objets :" , "Permet d'afficher tous les objets existants !\n=Objets")
       .addBlankField(true)
       .addField("Regénération :" , "Permet d'apprendre le système de régénération !\n=Régénération en ville")
       .addBlankField(true)
       .addField("Mort :" , "Permet d'apprendre le système de mort !\n=Mort")
       .addBlankField(true)
       .addField("Menus :" , "Permet d'apprendre le système de menus !\n=Menus")
    .addBlankField(true)
       .addField("Dirigeant :" , "Permet d'apprendre le système de dirigeant !\n=Dirigeant")
    .addBlankField(true)
       .addField("Garde :" , "Permet d'apprendre le système de garde !\n=Garde")
    .addBlankField(true)
       .addField("Menus :" , "Permet d'apprendre le système de mercenaire !\n=Mercenaire")
      .addBlankField(true)
       .addField("Roll :" , "Permet d'apprendre le système de Roll !\n=Le roll")
    .addBlankField(true)
       .addField("Prison :" , "Permet d'apprendre le système de prison !\n=Prison")
    .addBlankField(true)
       .addField("Quiz :" , "Pour être sûr que vous avez compris l'essentiel du fonctionnement du RP !\n=Quiz")
        .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Roll")) {
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
    .addField("La prison :" , "Lorsque vous êtes une menace ou que vous faites des actions interdites, les gardes peuvent vous mettre en prison !\n\nSelon la couleur de votre cristal, votre peine et la conséquence sera plus ou moins importante !\n\nSi vous êtes un cristal vert : un garde pourra vous mettre en prison au maximum 12 H, si vous voulez immédiatement sortir, vous devrez payer 10 % de vos cols total !\n\nSi vous êtes un cristal orange : un garde pourra vous mettre en prison au maximum 48 H, si vous voulez immédiatement sortir, vous devrez payer 25 % de vos cols total !\n\nSi vous êtes un cristal rouge : un garde pourra vous mettre en prison au maximum 1 semaine, si vous voulez immédiatement sortir, vous devrez payer 50 % de vos cols total !\n\nA noter qu'une fois que vous allez ne prison, que vous avez payer ou attendus, votre cristal redeviendra vert !")
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
    .addField("Le garde :" , "Les gardes ont pour objectif de sauver la vie des autres joueurs même s'ils doivent donner leur vie !\n\nUn chef des garde peux-être désigné pour commander les gardes et leur activités, mais le dirigeant reste le principal commandant des gardes !\n\nVotre objectif principal est non seulement de sauver les joueurs, de mettre les criminels en prison, mais aussi de protéger le dirigeant actuel le plus possible !\n\nPour un garde, il est possible de mettre un cristal rouge en prison ou alors de l'éxecuter publiquement s'il devient vraiment perturbant pour la ville !")
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
       .addField("Les armes, partie 1 :" , "Vous trouverez ou fabriquerez parfois des armes plus ou moins rares, voici la liste des armes existantes ainsi que les bonus qu'elles confèrent :\n\nLes épées : Confère un bonus pour les combos !\n\nLes dagues : Confère un bonus pour les coups précis !\n\nLes glaives : Confère un bonus pour les coups d'estocs !\n\nLes masses : Confère un bonus pour les coups provocateurs !\n\nLes haches : Confère un bonus pour les coups circulaires !\n\nLes rapières : Confère un bonus pour les coup d'estocs !\n\nLes cimeterres : Confère un bonus pour les esquives !\n\nLes katanas : Confère un bonus pour les parades  !\n\nLes boucliers : Confère un bonus pour les blocages !")
       .addBlankField(true)
       .addField("Les armes, partie 2 :" , "Lorsque vous créez votre personnage, vous avez droit d'avoir une arme de base dans cette liste, cependant l'arme de base ne donnera aucun bonus !\n\nA savoir qu'il existe un système d'armes à deux mains ou d'armes à une main, c'est à dire que vous avez le droit sois d'avoir une arme à deux mains, sois vous avez le droit d'avoir deux armes à une main, comme par exemple deux épées à une main ou une hache à deux main !\n\nLes armes à une main confèrent un bonus de 5, et les armes à deux mains confèrent un bonus de 10 pour le coup en question !\n\nSi par exemple, je possède une épée à une main et une hache à une main, j'aurais un bonus de 5 pour les combos et les coups circulaires !\n\nSi je possède une masse à deux mains, j'aurais un bonus de 10 pour les coups provocateurs !")

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
                   .addField("Liste des particularités, partie 1 :" , "Bonus de 5 pour les coups normaux !\n\nBonus de 5 pour les coups précis !\n\nBonus de 5 pour les combos !\n\nBonus de 5 pour les coups estocs !\n\nBonus de 5 pour coups provocateurs !\n\nBonus de 5 pour les coups circulaires !\n\nBonus de 5 pour les compétences !\n\nBonus de 5 pour les parades !\n\nBonus de 5 pour les blocages !\n\nBonus de 5 pour les esquives !\n\nBonus de 5 pour les provocations !\n\nBonus de 5 pour les interceptions !\n\nBonus de 10 pour lafuite en combat ou en dehors !")
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
                       .addField("Vorpal Strike" , "Compétence de trois coups qui infligent des dégâts, vous effectuez trois coups horizontaux puissants !\n\n=Vorpal strike : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Rage Spike" , "Compétence de un coup qui inflige des dégâts, vous foncez sur votre cible l'arme en avant pour l'embrocher !\n\n=Rage spike : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Cyclone" , "Compétence qui n'inflige pas de dégâts mais qui possède de grandes chances d'étourdir plusieurs cibles !\n\n=Cyclone")
                       .addBlankField(true)
                       .addField("Tourbillon" , "Compétence de trois coups qui infligent des dégâts touchant plusieurs ennemis, vous vous mettez à tournoyer sur vous même ainsi que l'arme que vous tenez !\n\n=Tourbillon : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Quadruple pain" , "Compétence de quatres coups qui infligent des dégâts, vous effectuez quatres coups d'estocs rapides !\n\n=Quadruple pain : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Lightning Fall" , "Compétence de un coup qui inflige des dégâts pouvant paralyser la cible, votre arme pointe le ciel devenant légèrement jaune avant de s'abattre verticalement sur votre cible !\n\n=Lightning fall : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Deadly Sins" , "Compétence de un coup qui inflige des dégâts pouvant empoisonner la cible, vous tenez en retrait votre arme devenant légèrement verte avant d'effectuer un coup d'estoc rapide !\n\n=Deadly sins: [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Vertical Arc" , "Compétence de un coup qui inflige des dégâts, vous effectuez un puissant coup vertical de bas en haut !\n\n=Vertical arc : [Vos dégâts moins les points d'armure de l'ennemis]")
                       .addBlankField(true)
                       .addField("Burning Slash" , "Compétence de un coup qui inflige des dégâts pouvant enflammer la cible, votre arme devient d'une couleur rouge clair étrange !\n\n=Burning slash : [Vos dégâts moins les points d'armure de l'ennemis]")
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
                           .addField("Treble Scythe" , "Compétence de deux coups qui infligent des dégâts à plusieurs cibles, vous effectuez deux coups en fonçant en avant !\n\n=Treble scythe : [Vos dégâts moins les points d'armure de l'ennemis]")
                           .addBlankField(true)
                           .addField("Frost Strike" , "Compétence de un coup qui inflige des dégâts pouvant geler la cible, votre arme devient légèrement bleu avant de réaliser un coup horizontal !\n\n=Frost strike : [Vos dégâts moins les points d'armure de l'ennemis]")
                           .addBlankField(true)
                           .addField("Sleeping Silence" , "Compétence de un coup qui nflige des dégâts pouvant endormir la cible, vous effectuez un coup précis et puissant au niveau de la tête de votre cible !\n\n=Sleeping silence: [Vos dégâts moins les points d'armure de l'ennemis]")
                           .addBlankField(true)
                           .addField("Furious Rush" , "Compétence de un coup qui inflige des dégâts pouvant étourdir la cible, vous foncez rapidement avec l'arme en avant, avant de réaliser un coup horizontal puissant !\n\n=Furious rush : [Vos dégâts moins les points d'armure de l'ennemis]")
                           .addBlankField(true)
                           .addField("Crucifixion" , "Compétence de deux petits coups qui infligent des dégâts pouvant faire saigner la cible, vous effectuez le premier coup verticalement et le deuxième horizontalement tel une croix !\n\n=Crucifixion : [Vos dégâts moins les points d'armure de l'ennemis]")
                           .addBlankField(true)
                           .addField("Blood insanity" , "Compétence où vous vous infligez vous même des dégâts pour doubler vos prochains dégâts pendant un certains temps, vous vous transpercez avant de ressortir la lame ce qui augmente votre force et vous entoure d'une aura étrange !\n\n=Blood insanity : [Vos dégâts moins vos points d'armure]")
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
                          if (message.content.startsWith(prefix + "Sleeping silent")) {
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
                               .addField("Vous réussissez votre compétence 'Sleeping silent' qui inflige :" , A+ " points de dégâts")
                               .addField("Sommeil :" , "Vous n'arrivez cependant pas à endormir votre cible...")
                               .setImage("https://media.giphy.com/media/M11VMiyk3CDXq/source.gif")
                               .setTimestamp()
                               message.channel.send({embed})}
                               if(B > 51){
                               const embed = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                               .setColor(3447003)
                               .addField("Vous réussissez votre compétence 'Sleeping silent' qui inflige :" , A+ " points de dégâts")
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
       .addField("Les objets :\n\n" , "Il existe un tas d'objets dans ce monde, que ce soit des équipements, des armes, des potions, des parchemins et bien d'autres choses.\n\nCes objets ont tous une signification particulières et leur fonction !\n\nPour avoir plus d'informations concernant un objet :\n=[Nom de l'objet]\n\n")
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
       .addField("Création de votre personnage :" , "Pour créer votre personnage, écrivez :\n\n=Fiche de personnage\n\nIl faudra remplir la fiche de votre personnage et une fois que vous avez finis, copiez la et coller là dans le salon 'Fiche à valider' en attendant qu'un membre du staff vous valide et vous aide !\n\nUne fois votre personnage créer, un membre du staff vous créera un salon classé par ordre alphabétique sur ce discord : https://discord.gg/ByaFWzc\n\nCe salon permettra de justement noter toutes les informations concernant votre personnage durant votre aventure !\n\nUne fois tous ça finis, vous devrez vous renommé sur le RP de la manière suivante : [Pseudo] [Niveau] [HP] [Dégâts] [Défense] !\n\nPar exemple : [Yato][1][20/20][6][0]")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
        .setTimestamp()
        message.channel.send({embed})
      }   
    });


    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Fiche de personnage")) {
        message.channel.send("\n```۝▬▬▬▬▬▬▬▬『`INFORMATIONS DE VOTRE PERSONNAGE`』▬▬▬▬▬▬▬▬۝\n\nNom :【A remplir】\n\nPrénom :【A remplir】\n\nPseudo :【A remplir】\n\nÂge : 【A remplir】\n\nSexe : 【A remplir】\n\nPhysique :【A remplir avec image si vous voulez, c'est conseillé】\n\nPersonnalité :【A remplir】\n\nPourquoi être venus dans SAO, votre histoire :【A remplir et c'est la raison RP】\n\nArme de base :【A remplir en écrivant =Armes】\n\nClasse :【A remplir en écrivant =Classes】\n\nCompétence :【A remplir en écrivant =Compétences】\n\nParticularité :【A remplir en écrivant =Particularités】\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nNiveau : 1\n\nExp : 0/200\n\nGuilde : aucune\n\nDéfense total : 0 points\n\nAttaque total : 6 points (!1d6)\n\nHP : 20/20\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nArme :【Votre arme de base】\n\nCasque : aucun\n\nEpaulières : aucunes\n\nPlastron : aucun\n\nCape : aucune\n\nCeinture : aucune\n\nGantelets : aucun\n\nJambières : aucunes\n\nBotte : aucunes\n\nAnneau : aucun\n\nAmulette : aucune\n\nFamilier : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nCaractéristiques :\n\n0 points de puissance\n\n0 points de défense\n\n0 points de vitalité\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nJoueurs tués : aucun\n\nMonstres tués : aucun\n\nSanglier : aucun\n\nRenard : aucun\n\nLoup : aucun\n\nSlime : aucun\n\nLoup de sang : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nChasseur niveau 1 : 0/50\n\nCueilleur niveau 1 : 0/50\n\nMineur niveau 1 : 0/50\n\nBûcheron niveau 1 : 0/50\n\nPêcheur niveau 1 : 0/50\n\nMaître d'armes niveau 1 : 0/50\n\nMaître du cuir niveau 1 : 0/50\n\nForgeron niveau 1 : 0/50\n\nCouturier niveau 1 : 0/50\n\nCuisinier niveau 1 : 0/50\n\nAlchimiste niveau 1 : 0/50\n\nEnchanteur niveau 1 : 0/50\n\nEbeniste niveau 1 : 0/50\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nListe d'amis : aucun\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nInventaire :\n\n100 Cols\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝```");
           }   
        });

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Combat")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Déroulement de combat, partie 1 :" , "Le système de combat est avant tout un système par tour, c'est à dire que chaque personne et monstre pourra agir que pendant son tour de jeu !\n\nIl faut s'avoir que, dans un combat lorsque c'est votre tour, vous aurez droit à une attaque ou une action, mais si un joueur ou un monstre vous attaque, vous aurez droit de faire une action défensives !\n\nPour voir la liste des différents coups et action défensives possibles ainsi que pour comprendre comment sa marche :\n=Coups et défenses\n\nVous disposez de 'HP' qui sont dans votre pseudo, une fois que vous êtes à 0 HP, vous mourrez...\n\nVous disposez aussi de 'points de dégâts' qui vous permettent d'infliger des coups plus puissants à vos adversaires, plus vous en aurez, plus vous ferez mal !\n\nVous disposez aussi de 'points d'armure' qui permette de réduire les dégâts reçus que vous subissez, si un ennemis inflige 10 points de dégâts et que vous avez 4 points de défense, vous perdrez que 6 HP !\n\nDans un combat, ce sera toujours au tour des monstres d'attaquer avant les joueurs, dans l'ordre que vous souhaitez !")
       .addBlankField(true)
       .addField("Déroulement de combat, partie 2 :" , "Quand c'est au tour des joueurs, il faudra définir au départ qui commence son tour, le suivant, et ainsi de suite !\n\nPour savoir quel joueur attaquera un monstre, il suffit d'écrire :\n=Ciblage : [Nombre de joueurs dans le combat]\n\nCette commande tire aléatoire le joueur qui se fera attaqué !\n\nLors d'un combat contre un monstre, il faudra ne pas oublier de noter ses HP tout au long du combat, vous pouvez présenter ceci comme vous voulez, du moment que c'est noté !\n\nExemple :\nLoup [A] : 80/80 HP\nLoup [B] : 50/80 HP\nLoup [C] : 24/80 HP\n\nLes actions défensives et attaques des monstres seront écrites sur ses infos si vous écrivez :\n=[Nom du monstre]")
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
  let cont = message.content.slice(prefix.length)
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Combattant")) {
     if (talkedRecently.has(message.author.id+101)) {
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
    const A = (Math.floor((X*1.25)*Math.random()+1*(X*1)))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("Compétence du combattant :" , "Vous déclenchez votre compétence appartenant à tous les combattants, vous produisez un coup déstabilisant sur votre adversaire qui inflige " +A+ " dégâts, il aura un malus de -25 sur ses coups pendant trois tours !")
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
       .addField("Les caractéristiques :" , "Durant votre avancé dans le RP, vous gagnerez de l'expérience en tuant des monstres, en finissant des quêtes et même en complètant des donjons !\n\nL'expérience vous permettra d'avoir des niveaux qui vous rendront plus fort, qui débloqueront l'accès à certaines choses et bien d'autres choses.\n\nCependant, Lorsque vous gagnerez un niveau, vous gagnerez aussi un ou des points de caractéristiques, et vous pourrez les mettre dans un de ces 'attributs' suivants :\n\n[La puissance}\n[La vitalité]\n[La défense]\n\nChaque attributs signifie quelque chose :\n\nUn point de puissance augmente vos points de dégâts de 1 point supplémentaire !\nUn point de vitalité augmente vos HP max de 3 points supplémentaires !\nUn point de défense augmente votre armure de 0.5 point supplémentaire !\n\nVous l'aurez compris, selon ce que vous voulez devenir, vous aurez le choix parmis ces trois attributs.\n\nPour voir combien de points de caractéristiques vous gagnez selon votre niveau, écrivez :\n=Tableau des caractéristiques")
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
        .addField("Cueilleur :" , "Niveau 1 : Aucun\nNiveau 2 : 3 HP supplémentaire !\nNiveau 3 : 6 HP supplémentaire !\nNiveau 4 : 9 HP supplémentaire !\nNiveau 5 : 12 HP supplémentaire !\nNiveau 6 : 15 HP supplémentaire !\nNiveau 7 : 18 HP supplémentaire !\nNiveau 8 : 21 HP supplémentaire !\nNiveau 9 : 24 HP supplémentaire !\nNiveau 10 : 27 HP supplémentaire !")
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
          .addField("Mineur :" , "Niveau 1 : Aucun\nNiveau 2 : 3 HP supplémentaire !\nNiveau 3 : 3 HP et 0.5 point d'armure supplémentaire !\nNiveau 4 : 6 HP et 0.5 point d'armure supplémentaire !\nNiveau 5 : 6 HP et 1 point d'armure supplémentaire supplémentaire !\nNiveau 6 : 9 HP et 1 point d'armure supplémentaire !\nNiveau 7 : 9 HP et 1.5 points d'armure supplémentaire !\nNiveau 8 : 12 HP et 1.5 points d'armure supplémentaire !\nNiveau 9 : 12 HP et 2 points d'armure supplémentaire !\nNiveau 10 : 15 HP et 2 points d'armure supplémentaire !")
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
              .addField("Pêcheur :" , "Niveau 1 : Aucun\nNiveau 2 : 3 HP supplémentaire !\nNiveau 3 : 3 HP et 1 point de dégât supplémentaire !\nNiveau 4 : 6 HP et 1 point de dégât supplémentaire !\nNiveau 5 : 6 HP et 2 points de dégâts supplémentaire !\nNiveau 6 : 9 HP et 2 points de dégâts supplémentaire !\nNiveau 7 : 9 HP et 3 points de dégâts supplémentaire !\nNiveau 8 : 12 HP et 3 points de dégâts supplémentaire !\nNiveau 9 : 12 HP et 4 points de dégâts supplémentaire !\nNiveau 10 : 15 HP et 4 points de dégâts supplémentaire !")
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
           .addField("Les bonus des niveaux pour Combattant de 2 à 10 :" , "Niveau 2 : Vous gagnez 3 HP !\n\nNiveau 3 : Vous gagnez 6 HP !\n\nNiveau 4 : Vous gagnez 9 HP !\n\nNiveau 5 : Vous gagnez 9 HP et 1 point de dégât !\n\nNiveau 6 : Vous gagnez 9 HP et 2 points de dégâts !\n\nNiveau 7 : Vous gagnez 9 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 8 : Vous gagnez 12 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 9 : Vous gagnez 15 HP et 2 points de dégâts et 0.5 point d'armure !\n\nNiveau 10 : Vous gagnez 18 HP et 2 points de dégâts et 0.5 point d'armure !")
           .addBlankField(true)
           .addField("Les bonus des niveaux pour Combattant de 11 à 20 :" , "Niveau 11 : Vous gagnez 18 HP et 3 points de dégâts et 0.5 point d'armure !\n\nNiveau 12 : Vous gagnez 18 HP et 4 points de dégâts et 0.5 point d'armure !\n\nNiveau 13 : Vous gagnez 18 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 14 : Vous gagnez 21 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 15 : Vous gagnez 24 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 16 : Vous gagnez 27 HP et 4 points de dégâts et 1 point d'armure !\n\nNiveau 17 : Vous gagnez 27 HP et 5 points de dégâts et 1 point d'armure !\n\nNiveau 18 : Vous gagnez 27 HP et 6 points de dégâts et 1 point d'armure !\n\nNiveau 19 : Vous gagnez 27 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 20 : Vous gagnez 30 HP et 6 points de dégâts et 1,5 points d'armure !")
           .addBlankField(true)
           .addField("Les bonus des niveaux pour Combattant de 21 à 30 :" , "Niveau 21 : Vous gagnez 33 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 22 : Vous gagnez 36 HP et 6 points de dégâts et 1,5 points d'armure !\n\nNiveau 23 : Vous gagnez 36 HP et 7 points de dégâts et 1,5 points d'armure !\n\nNiveau 24 : Vous gagnez 36 HP et 8 points de dégâts et 1,5 points d'armure !\n\nNiveau 25 : Vous gagnez 36 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 26 : Vous gagnez 39 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 27 : Vous gagnez 42 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 28 : Vous gagnez 45 HP et 8 points de dégâts et 2 points d'armure !\n\nNiveau 29 : Vous gagnez 45 HP et 9 points de dégâts et 2 points d'armure !\n\nNiveau 30 : Vous gagnez 45 HP et 10 points de dégâts et 2 points d'armure !")
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
               .addField("Les bonus des niveaux pour Assassin de 2 à 10 :" , "Niveau 2 : Vous gagnez 1 point de dégâts !\n\nNiveau 3 : Vous gagnez 2 points de dégât !\n\nNiveau 4 : Vous gagnez 3 points de dégâts !\n\nNiveau 5 : Vous gagnez 3 points de dégâts et 0,5 point d'armure !\n\nNiveau 6 : Vous gagnez 3 points de dégâts et 1 point d'armure !\n\nNiveau 7 : Vous gagnez 3 points de dégâts et 1 point d'armure et 3 HP !\n\nNiveau 8 : Vous gagnez 4 points de dégâts et 1 point d'armure et 3 HP !\n\nNiveau 9 : Vous gagnez 5 points de dégâts et 1 point d'armure et 3 HP !\n\nNiveau 10 : Vous gagnez 6 points de dégâts et 1 point d'armure et 3 HP !")
               .addBlankField(true)
               .addField("Les bonus des niveaux pour Assassin de 11 à 20 :" , "Niveau 11 : Vous gagnez 6 points de dégâts et 1,5 points d'armure et 3 HP !\n\nNiveau 12 : Vous gagnez 6 points de dégâts et 2 points d'armure et 3 HP !\n\nNiveau 13 : Vous gagnez 6 points de dégâts et 2 points d'armure et 6 HP !\n\nNiveau 14 : Vous gagnez 7 points de dégâts et 2 points d'armure et 6 HP !\n\nNiveau 15 : Vous gagnez 8 points de dégâts et 2 points d'armure et 6 HP !\n\nNiveau 16 : Vous gagnez 9 points de dégâts et 2 points d'armure et 6 HP !\n\nNiveau 17 : Vous gagnez 9 points de dégâts et 2,5 points d'armure et 6 HP !\n\nNiveau 18 : Vous gagnez 9 points de dégâts et 3 points d'armure et 6 HP !\n\nNiveau 19 : Vous gagnez 9 points de dégâts et 3 points d'armure et 9 HP !\n\nNiveau 20 : Vous gagnez 10 points de dégâts et 3 points d'armure et 9 HP !")
               .addBlankField(true)
               .addField("Les bonus des niveaux pour Assassin de 21 à 30 :" , "Niveau 21 : Vous gagnez 11 points de dégâts et 3 points d'armure et 9 HP !\n\nNiveau 22 : Vous gagnez 12 points de dégâts et 3 points d'armure et 9 HP !\n\nNiveau 23 : Vous gagnez 12 points de dégâts et 3,5 points d'armure et 9 HP !\n\nNiveau 24 : Vous gagnez 12 points de dégâts et 4 points d'armure et 9 HP !\n\nNiveau 25 : Vous gagnez 12 points de dégâts et 4 points d'armure et 12 HP !\n\nNiveau 26 : Vous gagnez 13 points de dégâts et 4 points d'armure et 12 HP !\n\nNiveau 27 : Vous gagnez 14 points de dégâts et 4 points d'armure et 12 HP !\n\nNiveau 28 : Vous gagnez 15 points de dégâts et 4 points d'armure et 12 HP !\n\nNiveau 29 : Vous gagnez 15 points de dégâts et 4,5 points d'armure et 12 HP !\n\nNiveau 30 : Vous gagnez 15 points de dégâts et 5 points d'armure et 12 HP !")
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
                   .addField("Les bonus des niveaux pour Berserker de 2 à 10 :" , "Niveau 2 : Vous gagnez 1 point de dégâts !\n\nNiveau 3 : Vous gagnez 2 points de dégâts !\n\nNiveau 4 : Vous gagnez 3 points de dégâts !\n\nNiveau 5 : Vous gagnez 3 points de dégâts et 3 HP !\n\nNiveau 6 : Vous gagnez 3 points de dégâts et 6 HP !\n\nNiveau 7 : Vous gagnez 3 points de dégâts et 6 HP et 0,5 point d'armure !\n\nNiveau 8 : Vous gagnez 4 points de dégâts et 6 HP et 0,5 point d'armure !\n\nNiveau 9 : Vous gagnez 5 points de dégâts et 6 HP et 0,5 point d'armure !\n\nNiveau 10 :  Vous gagnez 6 points de dégâts et 6 HP et 0,5 point d'armure !")
                   .addBlankField(true)
                   .addField("Les bonus des niveaux pour Berserker de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 6 points de dégâts et 9 HP et 0,5 point d'armure !\n\nNiveau 12 : Vous gagnez 6 points de dégâts et 12 HP et 0,5 point d'armure !\n\nNiveau 13 : Vous gagnez 6 points de dégâts et 12 HP et 1 point d'armure !\n\nNiveau 14 : Vous gagnez 7 points de dégâts et 12 HP et 1 point d'armure !\n\nNiveau 15 : Vous gagnez 8 points de dégâts et 12 HP et 1 point d'armure !\n\nNiveau 16 : Vous gagnez 9 points de dégâts et 12 HP et 1 point d'armure !\n\nNiveau 17 : Vous gagnez 9 points de dégâts et 15 HP et 1 point d'armure !\n\nNiveau 18 : Vous gagnez 9 points de dégâts et 18 HP et 1 point d'armure !\n\nNiveau 19 : Vous gagnez 9 points de dégâts et 18 HP et 1,5 points d'armure !\n\nNiveau 20 : Vous gagnez 10 points de dégâts et 18 HP et 1,5 points d'armure !")
                   .addBlankField(true)
                   .addField("Les bonus des niveaux pour Berserker de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 11 points de dégâts et 18 HP et 1,5 points d'armure !\n\nNiveau 22 : Vous gagnez 12 points de dégâts et 18 HP et 1,5 points d'armure !\n\nNiveau 23 : Vous gagnez 12 points de dégâts et 21 HP et 1,5 points d'armure !\n\nNiveau 24 : Vous gagnez 12 points de dégâts et 24 HP et 1,5 points d'armure !\n\nNiveau 25 : Vous gagnez 12 points de dégâts et 24 HP et 2 points d'armure !\n\nNiveau 26 : Vous gagnez 13 points de dégâts et 24 HP et 2 points d'armure !\n\nNiveau 27 : Vous gagnez 14 points de dégâts et 24 HP et 2 points d'armure !\n\nNiveau 28 : Vous gagnez 15 points de dégâts et 24 HP et 2 points d'armure !\n\nNiveau 29 : Vous gagnez 15 points de dégâts et 27 HP et 2 points d'armure !\n\nNiveau 30 : Vous gagnez 15 points de dégâts et 30 HP et 2 points d'armure !")
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
                       .addField("Les bonus des niveaux pour Chevalier de 2 à 10 :" , "Niveau 2 : Vous gagnez 0,5 point d'armure !\n\nNiveau 3 : Vous gagnez 1 point d'armure !\n\nNiveau 4 : Vous gagnez 1,5 points d'armure !\n\nNiveau 5 : Vous gagnez 1,5 points d'armure et 3 HP !\n\nNiveau 6 : Vous gagnez 1,5 points d'armure et 6 HP !\n\nNiveau 7 : Vous gagnez 1,5 points d'armure et 6 HP et 1 point de dégât !\n\nNiveau 8 : Vous gagnez 2 points d'armure et 6 HP et 1 point de dégât !\n\nNiveau 9 : Vous gagnez 2,5 points d'armure et 6 HP et 1 point de dégât !\n\nNiveau 10 : Vous gagnez 3 points d'armure et 6 HP et 1 point de dégât !")
                       .addBlankField(true)
                       .addField("Les bonus des niveaux pour Chevalier de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 3 points d'armure et 9 HP et 1 point de dégât !\n\nNiveau 12 : Vous gagnez 3 points d'armure et 12 HP et 1 point de dégât !\n\nNiveau 13 : Vous gagnez 3 points d'armure et 12 HP et 2 points de dégâts !\n\nNiveau 14 : Vous gagnez 3,5 points d'armure et 12 HP et 2 points de dégâts !\n\nNiveau 15 : Vous gagnez 4 points d'armure et 12 HP et 2 points de dégâts !\n\nNiveau 16 : Vous gagnez 4,5 points d'armure et 12 HP et 2 points de dégâts !\n\nNiveau 17 : Vous gagnez 4,5 points d'armure et 15 HP et 2 points de dégâts !\n\nNiveau 18 : Vous gagnez 4,5 points d'armure et 18 HP et 2 points de dégâts !\n\nNiveau 19 : Vous gagnez 4,5 points d'armure et 18 HP et 3 points de dégâts !\n\nNiveau 20 : Vous gagnez 5 points d'armure et 18 HP et 3 points de dégâts !")
                       .addBlankField(true)
                       .addField("Les bonus des niveaux pour Chevalier de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 5,5 points d'armure et 18 HP et 3 points de dégâts !\n\nNiveau 22 : Vous gagnez 6 points d'armure et 18 HP et 3 points de dégâts !\n\nNiveau 23 : Vous gagnez 6 points d'armure et 21 HP et 3 points de dégâts !\n\nNiveau 24 : Vous gagnez 6 points d'armure et 24 HP et 3 points de dégâts !\n\nNiveau 25 : Vous gagnez 6 points d'armure et 24 HP et 4 points de dégâts !\n\nNiveau 26 : Vous gagnez 6,5 points d'armure et 24 HP et 4 points de dégâts !\n\nNiveau 27 : Vous gagnez 7 points d'armure et 24 HP et 4 points de dégâts !\n\nNiveau 28 : Vous gagnez 7,5 points d'armure et 24 HP et 4 points de dégâts !\n\nNiveau 29 : Vous gagnez 7,5 points d'armure et 27 HP et 4 points de dégâts !\n\nNiveau 30 : Vous gagnez 7,5 points d'armure et 30 HP et 4 points de dégâts !")
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
                           .addField("Les bonus des niveaux pour Paladin de 2 à 10 :" , "Niveau 2 : Vous gagnez 0,5 point d'armure !\n\nNiveau 3 : Vous gagnez 1 point d'armure !\n\nNiveau 4 : Vous gagnez 1,5 points d'armure !\n\nNiveau 5 : Vous gagnez 1,5 points d'armure et 1 point de dégât !\n\nNiveau 6 : Vous gagnez 1,5 points d'armure et 2 points de dégâts !\n\nNiveau 7 : Vous gagnez 1,5 points d'armure et 2 points de dégâts et 3 HP !\n\nNiveau 8 : Vous gagnez 2 points d'armure et 2 points de dégâts et 3 HP !\n\nNiveau 9 : Vous gagnez 2,5 points d'armure et 2 points de dégâts et 3 HP !\n\nNiveau 10 : Vous gagnez 3 points d'armure et 2 points de dégâts et 3 HP !")
                           .addBlankField(true)
                           .addField("Les bonus des niveaux pour Paladin de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 3 points d'armure et 3 points de dégâts et 3 HP !\n\nNiveau 12 : Vous gagnez 3 points d'armure et 4 points de dégâts et 3 HP !\n\nNiveau 13 : Vous gagnez 3 points d'armure et 4 points de dégâts et 6 HP !\n\nNiveau 14 : Vous gagnez 3,5 points d'armure et 4 points de dégâts et 6 HP !\n\nNiveau 15 : Vous gagnez 4 points d'armure et 4 points de dégâts et 6 HP !\n\nNiveau 16 : Vous gagnez 4,5 points d'armure et 4 points de dégâts et 6 HP !\n\nNiveau 17 : Vous gagnez 4,5 points d'armure et 5 points de dégâts et 6 HP !\n\nNiveau 18 : Vous gagnez 4,5 points d'armure et 6 points de dégâts et 6 HP !\n\nNiveau 19 : Vous gagnez 4,5 points d'armure et 6 points de dégâts et 9 HP !\n\nNiveau 20 : Vous gagnez 5 points d'armure et 6 points de dégâts et 9 HP !")
                           .addBlankField(true)
                           .addField("Les bonus des niveaux pour Paladin de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 5,5 points d'armure et 6 points de dégâts et 9 HP !\n\nNiveau 22 : Vous gagnez 6 points d'armure et 6 points de dégâts et 9 HP !\n\nNiveau 23 : Vous gagnez 6 points d'armure et 7 points de dégâts et 9 HP !\n\nNiveau 24 : Vous gagnez 6 points d'armure et 8 points de dégâts et 9 HP !\n\nNiveau 25 : Vous gagnez 6 points d'armure et 8 points de dégâts et 12 HP !\n\nNiveau 26 : Vous gagnez 6,5 points d'armure et 8 points de dégâts et 12 HP !\n\nNiveau 27 : Vous gagnez 7 points d'armure et 8 points de dégâts et 12 HP !\n\nNiveau 28 : Vous gagnez 7,5 points d'armure et 8 points de dégâts et 12 HP !\n\nNiveau 29 : Vous gagnez 7,5 points d'armure et 9 points de dégâts et 12 HP !\n\nNiveau 30 : Vous gagnez 7,5 points d'armure et 10 points de dégâts et 12 HP !")
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
                               .addField("Les bonus des niveaux pour Vindicateur de 2 à 10 :" , "Niveau 2 : Vous gagnez 3 HP !\n\nNiveau 3 : Vous gagnez 6 HP !\n\nNiveau 4 : Vous gagnez 9 HP !\n\nNiveau 5 : Vous gagnez 9 HP et 0,5 point d'armure !\n\nNiveau 6 : Vous gagnez 9 HP et 1 point d'armure !\n\nNiveau 7 : Vous gagnez 9 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 8 : Vous gagnez 12 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 9 : Vous gagnez 15 HP et 1 point d'armure et 1 point de dégât !\n\nNiveau 10 : Vous gagnez 18 HP et 1 point d'armure et 1 point de dégât !")
                               .addBlankField(true)
                               .addField("Les bonus des niveaux pour vindicateur de 11 à 20 :" , "\n\nNiveau 11 : Vous gagnez 18 HP et 1,5 points d'armure et 1 point de dégât !\n\nNiveau 12 : Vous gagnez 18 HP et 2 points d'armure et 1 point de dégât !\n\nNiveau 13 : Vous gagnez 18 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 14 : Vous gagnez 21 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 15 : Vous gagnez 24 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 16 : Vous gagnez 27 HP et 2 points d'armure et 2 points de dégâts !\n\nNiveau 17 : Vous gagnez 27 HP et 2,5 points d'armure et 2 points de dégâts !\n\nNiveau 18 : Vous gagnez 27 HP et 3 points d'armure et 2 points de dégâts !\n\nNiveau 19 : Vous gagnez 27 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 20 : Vous gagnez 30 HP et 3 points d'armure et 3 points de dégâts !")
                               .addBlankField(true)
                               .addField("Les bonus des niveaux pour vindicateur de 21 à 30 :" , "\n\nNiveau 21 : Vous gagnez 33 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 22 : Vous gagnez 36 HP et 3 points d'armure et 3 points de dégâts !\n\nNiveau 23 : Vous gagnez 36 HP et 3,5 points d'armure et 3 points de dégâts !\n\nNiveau 24 : Vous gagnez 36 HP et 4 points d'armure et 3 points de dégâts !\n\nNiveau 25 : Vous gagnez 36 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 26 : Vous gagnez 39 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 27 : Vous gagnez 42 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 28 : Vous gagnez 45 HP et 4 points d'armure et 4 points de dégâts !\n\nNiveau 29 : Vous gagnez 45 HP et 4,5 points d'armure et 4 points de dégâts !\n\nNiveau 30 : Vous gagnez 45 HP et 5 points d'armure et 4 points de dégâts !")
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
  if (message.content.startsWith(prefix + "Régénération en ville")) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
       .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
       .setColor(3447003)
       .addField("La regénération :" , "Lorsque vous êtes en ville, vous récupérez vos HP progressivement, il suffira d'écrire :\n\n=Régénération : [Vos HP max]")
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
       .addField("Les menus :" , "Vous verrez plusieurs menus [salons] qui ont chacun leur utilité qui sont :\n\nLe menu d'objets :")
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
       .addField("Les métiers :" , "Vous avez le droit d'avoir un métier en ville de base, mais vous pourrez en avoir plusieurs autres selon votre 'Niveau d'activité' !\n\nLes niveaux d'activité sont ceux que vous gagnez en parlant et en participant beaucoup, vous verrez votre niveau d'activité sur votre profil [Vos rôles discord] !\n\nNiveau 15 : 2 métiers max !\nNiveau 30 : 3 métiers max !\nNiveau 45 : 4 métiers max !\nNiveau 60 : 5 métiers max !\n\nUn métier permet de montrer que vous êtes spécialisé dans quelque chose, si par exemple vous aimez souvent miner, alors 'Mineur' sera fait pour vous !\n\nUn métier ne donne pas d'avantages particuliers, mais il permet de facilement s'organiser en ville, en guilde et dans bien d'autres circonstances !\n\nPour obtenir un métier, il faudra faire une annonce dans le 'Menu des annonces' et les joueurs auront 24 H pour voté pour :white_check_mark: ou contre :x: et selon le résultat, vous aurez ou non le métier !\n\nPour faire une annonce, écrivez :\n\n=Annonce : [Votre annonce]")
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
       .addField("La ville :" , "La ville est un endroit très calme, il est impossible de tuer quelqu'un, il est possible de sortir son arme mais vous ne pourrez pas frapper quelqu'un avec, une barrière apparaîtra pour protégé le joueur !\n\nCependant, les duels sont possibles mais il ne sera pas possible de faire de duel à mort !\n\nLe seul moment possible où les meutres sont possibles en ville, sont lorsque le maître du jeu le décide !\n\nA partir de la ville, il est possible de vous rendre à l'extérieur, ou dans les souterrains ou même aux constructions !\n\nDans l'auberge, il est possible de vous rendre dans les chambres !")
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
  if (message.content.startsWith(prefix + "Constructions")) {
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
      let cont = message.content.slice(prefix.length).split(" ");
      const args = cont.slice(1);
      if (message.content.startsWith(prefix + "Constructions prix")) {
        let X = args.slice(2).join(" : ");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
           .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
           .setColor(3447003)
        .addField("Prix des constructions :" , "Pas encore disponible")
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
        .addField("Votre niveau est de 2 avec :" , A+ "/200 points d'expérience !")
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
      if (201 < A & A < 400){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 3 avec :" , A+ "/400 points d'expérience !")
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
       if (401 < A & A < 600){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 4 avec :" , A+ "/600 points d'expérience !")
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
      if (601 < A & A < 800){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(3447003)
        .addField("Votre niveau est de 5 avec :" , A+ "/800 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total :" , "4 points de caractéristiques")
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
        .addField("Votre niveau est de 6 avec :" , A+ "/1100 points d'expérience !")
        .addBlankField(true)
        .addField("Vous possèdez au total:" , "6 points de caractéristiques")
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
            .addField("Votre niveau est de 7 avec :" , A+ "/1400 points d'expérience !")
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
            if (1401 < A & A < 1700){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(3447003)
              .addField("Votre niveau est de 8 avec :" , A+ "/1700 points d'expérience !")
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
              if (1701 < A & A < 2000){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(3447003)
                .addField("Votre niveau est de 9 avec :" , A+ "/2000 points d'expérience !")
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
                if (2001 < A & A < 2300){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(3447003)
                  .addField("Votre niveau est de 10 avec :" , A+ "/2300 points d'expérience !")
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
                  if (2301 < A & A < 2700){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(3447003)
                    .addField("Votre niveau est de 11 avec :" , A+ "/2700 points d'expérience !")
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
                    if (2701 < A & A < 3100){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(3447003)
                      .addField("Votre niveau est de 12 avec :" , A+ "/3100 points d'expérience !")
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
                      if (3101 < A & A < 3500){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(3447003)
                        .addField("Votre niveau est de 13 avec :" , A+ "/3500 points d'expérience !")
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
                        if (3501 < A & A < 3900){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(3447003)
                          .addField("Votre niveau est de 14 avec :" , A+ "/3900 points d'expérience !")
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
                          if (3901 < A & A < 4300){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(3447003)
                            .addField("Votre niveau est de 15 avec :" , A+ "/4300 points d'expérience !")
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
                            if (4301 < A & A < 4800){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(3447003)
                              .addField("Votre niveau est de 16 avec :" , A+ "/4800 points d'expérience !")
                              .addBlankField(true)
                              .addField("Vous possèdez au total :" , "33 points de caractéristiques")
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
                                .addField("Votre niveau est de 17 avec :" , A+ "/5300 points d'expérience !")
                                .addBlankField(true)
                                .addField("Vous possèdez au total:" , "37 points de caractéristiques")
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
                                  .addField("Votre niveau est de 18 avec :" , A+ "/5800 points d'expérience !")
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
                                  if (5801 < A & A < 6300){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(3447003)
                                    .addField("Votre niveau est de 19 avec :" , A+ "/6300 points d'expérience !")
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
                                    if (6301 < A & A < 6800){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(3447003)
                                      .addField("Votre niveau est de 20 avec :" , A+ "/6800 points d'expérience !")
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
                                      if (6801 < A & A < 7600){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(3447003)
                                        .addField("Votre niveau est de 21 avec :" , A+ "/7600 points d'expérience !")
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
                                        if (7601 < A & A < 8400){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(3447003)
                                          .addField("Votre niveau est de 22 avec :" , A+ "/8400 points d'expérience !")
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
                                        if (8401 < A & A < 9200){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(3447003)
                                          .addField("Votre niveau est de 23 avec :" , A+ "/9200 points d'expérience !")
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
                                          if (9201 < A & A < 10000){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 24 avec :" , A+ "/10000 points d'expérience !")
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
                                          if (10001 < A & A < 10800){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 25 avec :" , A+ "/10800 points d'expérience !")
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
                                          if (10801 < A & A < 12000){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 26 avec :" , A+ "/12000 points d'expérience !")
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
                                          if (12001 < A & A < 13200){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(3447003)
                                            .addField("Votre niveau est de 27 avec :" , A+ "/13200 points d'expérience !")
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
                                            if (13201 < A & A < 14400){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(3447003)
                                              .addField("Votre niveau est de 28 avec :" , A+ "/14400 points d'expérience !")
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
                                              if (14401 < A & A < 15600){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(3447003)
                                                .addField("Votre niveau est de 29 avec :" , A+ "/15600 points d'expérience !")
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
                                                if (15601 < A & A < 16800){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(3447003)
                                                  .addField("Votre niveau est de 30 avec :" , A+ "/16800 points d'expérience !")
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
             .addField("Prix de revente :" , "80 cols")
             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte du casque en peau résistante")
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
                 .addField("Prix de revente :" , "80 cols")
                 .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des épaulières en peau résistante")
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
                     .addField("Prix de revente :" , "80 cols")
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
                         .addField("Prix de revente :" , "80 cols")
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
                         .addField("Prix de revente :" , "80 cols")
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
                             .addField("Prix de revente :" , "80 cols")
                             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte de la ceinture rouillée rouillés")
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
                             .addField("Prix de revente :" , "80 cols")
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
                             .addField("Prix de revente :" , "80 cols")
                             .addField("Pour acheter ou fabriquer cet objet :" , "=Achat/fabrication/découverte des bottes rouillées")
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
    if (message.content.startsWith(prefix + "Casque en peau arraché")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Casque en peau arraché :" , "C'est un casque très fragile constitué de peau animal mais très utile pour les débutants !")
         .addField("Niveau minimum requis pour le porter :" , "1")
         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
         .addField("Prix d'achat :" , "80 cols")
         .addField("Prix de revente :" , "40 cols")
         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du casque en peau arraché")
          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du casque en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Casque en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
             .addField("Prix de revente :" , "100 cols")
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
        if (message.content.startsWith(prefix + "Épaulières en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Epaulières en peau arraché :" , "Ce sont des épaulières très fragiles constitué de peau animal mais très utile pour les débutants !")
             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
             .addField("Prix d'achat :" , "80 cols")
             .addField("Prix de revente :" , "40 cols")
             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des épaulières en peau arraché")
              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
              .setTimestamp()
              message.channel.send({embed})
            }   
          });

          
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des épaulières en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Epaulières en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                 .addField("Prix de revente :" , "100 cols")
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
            if (message.content.startsWith(prefix + "Cape en peau arraché")) {
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                 .setColor(3447003)
                 .addField("Cape en peau arraché :" , "C'est une cape très fragile constitué de peau animal mais très utile pour les débutants !")
                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                 .addField("Prix d'achat :" , "80 cols")
                 .addField("Prix de revente :" , "40 cols")
                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la cape en peau arraché")
                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });

              
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la cape en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Cape en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                     .addField("Prix de revente :" , "100 cols")
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
                if (message.content.startsWith(prefix + "Plastron en peau arraché")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Plastron en peau arraché :" , "C'est un plastron très fragile constitué de peau animal mais très utile pour les débutants !")
                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                     .addField("Prix d'achat :" , "80 cols")
                     .addField("Prix de revente :" , "40 cols")
                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du plastron en peau arraché")
                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });

                  
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte du plastron en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Plastron en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                         .addField("Prix de revente :" , "100 cols")
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
                    if (message.content.startsWith(prefix + "Gantelets en peau arraché")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Gantelets en peau arraché :" , "Ce sont des gantelets très fragiles constitué de peau animal mais très utile pour les débutants !")
                         .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                         .addField("Prix d'achat :" , "80 cols")
                         .addField("Prix de revente :" , "40 cols")
                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des gantelets en peau arraché")
                          .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des gantelets en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Gantelets en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                             .addField("Prix de revente :" , "100 cols")
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
                        if (message.content.startsWith(prefix + "Ceinture en peau arraché")) {
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                             .setColor(3447003)
                             .addField("Ceinture en peau arraché :" , "C'est une ceinture très fragile constitué de peau animal mais très utile pour les débutants !")
                             .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                             .addField("Prix d'achat :" , "80 cols")
                             .addField("Prix de revente :" , "40 cols")
                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte de la ceinture en peau arraché")
                              .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                              .setTimestamp()
                              message.channel.send({embed})
                            }   
                          });

                          
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte de la ceinture en peau arraché")) {
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
                                 .addField("Prix de revente :" , "100 cols")
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
                            if (message.content.startsWith(prefix + "Jambières en peau arraché")) {
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                 .setColor(3447003)
                                 .addField("Jambières en peau arraché :" , "Ce sont des jambières très fragiles constitué de peau animal mais très utile pour les débutants !")
                                 .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                                 .addField("Prix d'achat :" , "80 cols")
                                 .addField("Prix de revente :" , "40 cols")
                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des jambières en peau arraché")
                                  .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                  .setTimestamp()
                                  message.channel.send({embed})
                                }   
                              });

                              
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des jambières en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Jambières en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                                     .addField("Prix de revente :" , "100 cols")
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
                                if (message.content.startsWith(prefix + "Bottes en peau arraché")) {
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                     .setColor(3447003)
                                     .addField("Bottes en peau arraché :" , "Ce sont des bottes très fragiles constitué de peau animal mais très utile pour les débutants !")
                                     .addField("Niveau minimum dans la spécialisation 'Maître du cuir' requis pour fabriquer cet objet :" , "1")
                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 Peaux de sanglier, 2 peaux de renard, 2 peaux de chien, 2 peaux de lapin")
                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître du cuir' une fois l'objet fabriquer :" , "4")
                                     .addField("Prix d'achat :" , "80 cols")
                                     .addField("Prix de revente :" , "40 cols")
                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte des bottes en peau arraché")
                                      .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  
      bot.on('message', message => {
        const HP = (Math.floor((3)*Math.random()+3))
        const Défense = (Math.floor((2-(0.80))*Math.random()))
        if (message.content.startsWith(prefix + "Achat/fabrication/découverte des bottes en peau arraché")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Bottes en peau arraché :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                                         .addField("Prix de revente :" , "100 cols")
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
                                             .addField("Niveau minimum requis pour le porter :" , "6")
                                             .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "2")
                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de renard, 1 coeur de sanglier, 1 coeur de chien, 1 coeur de lapin, 1 coeur de lapin géant")
                                             .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                             .addField("Prix d'achat :" , "120 cols")
                                             .addField("Prix de revente :" , "60 cols")
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
                                                 .addField("Anneau en coeur d'animal faible :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                                                 .addField("Niveau minimum requis pour le porter :" , "6")
                                                 .addField("Niveau minimum dans la spécialisation 'Forgeron' requis pour fabriquer cet objet :" , "2")
                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "1 coeur de renard, 1 coeur de sanglier, 1 coeur de chien, 1 coeur de lapin, 1 coeur de lapin géant")
                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Forgeron' une fois l'objet fabriquer :" , "6")
                                                 .addField("Prix d'achat :" , "120 cols")
                                                 .addField("Prix de revente :" , "60 cols")
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
                                                     .addField("Amulette en coeur d'animal faible :" , "Vous venez d'acheter ou de fabriquer ou même de découvrir cet objet !")
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
                                                 .addField("Prix de revente :" , "190 cols")
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
                                                 .addField("Prix de revente :" , "190 cols")
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
                                                     .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "80 cols")
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
                                                         .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "40 cols")
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
                                                         .addField("Niveau minimum requis pour le porter :" , "1")
                                                         .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                         .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                         .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                         .addField("Prix d'achat :" , "160 cols")
                                                         .addField("Prix de revente :" , "80 cols")
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
                                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                             .addField("Prix d'achat :" , "80 cols")
                                                             .addField("Prix de revente :" , "40 cols")
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
                                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                             .addField("Prix d'achat :" , "160 cols")
                                                             .addField("Prix de revente :" , "80 cols")
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
                                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                             .addField("Prix d'achat :" , "80 cols")
                                                             .addField("Prix de revente :" , "40 cols")
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
                                                                 .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "80 cols")
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
                                                                     .addField("Niveau minimum requis pour le porter :" , "1")
                                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                                     .addField("Prix d'achat :" , "80 cols")
                                                                     .addField("Prix de revente :" , "40 cols")
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
                                                                     .addField("Niveau minimum requis pour le porter :" , "1")
                                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                                     .addField("Prix d'achat :" , "160 cols")
                                                                     .addField("Prix de revente :" , "80 cols")
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
                                                                     .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "40 cols")
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
                                                                         .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                     .addField("Prix d'achat :" , "160 cols")
                                                     .addField("Prix de revente :" , "80 cols")
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
                                                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "40 cols")
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
                                                                             .addField("Niveau minimum requis pour le porter :" , "1")
                                                                             .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                             .addField("Matériaux nécessaires pour fabriquer cet objet :" , "4 cuivre médiocre, 4 bois médiocre")
                                                                             .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "4")
                                                                             .addField("Prix d'achat :" , "160 cols")
                                                                             .addField("Prix de revente :" , "80 cols")
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
                                                                                 .addField("Niveau minimum requis pour le porter :" , "1")
                                                                                 .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                                                 .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                                                 .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                                                 .addField("Prix d'achat :" , "80 cols")
                                                                                 .addField("Prix de revente :" , "40 cols")
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
                                                                                     .addField("Niveau minimum requis pour le porter :" , "1")
                                                     .addField("Niveau minimum dans la spécialisation 'Maître d'armes' requis pour fabriquer cet objet :" , "1")
                                                     .addField("Matériaux nécessaires pour fabriquer cet objet :" , "2 cuivre médiocre, 2 bois médiocre")
                                                     .addField("Points d'expérience gagnés dans la spécialisation 'Maître d'armes' une fois l'objet fabriquer :" , "2")
                                                     .addField("Prix d'achat :" , "80 cols")
                                                     .addField("Prix de revente :" , "40 cols")
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
                                                                                     .addField("Prix de revente :" , "230 cols")
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
                                                                                                   .addField("Poison faible :" , "Vous arrivez pas à empoisonner votre cible ce qui lui inflige " +Dégâts+ " points de dégâts !")
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
                                                                                         .addField("Prix de revente :" , "15 cols")
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
                                                                                              .addField("Prix de revente :" , "15 cols")
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
                                                                                                 .addField("Prix de revente :" , "15 cols")
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
                                                                                                            if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de lapin")) {
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
                                                                                                     .addField("Prix de revente :" , "40 cols")
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
                                                                                                         .addField("Prix de revente :" , "15 cols")
                                                                                                         .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de lapin")
                                                                                                         .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                        }   
                                                                                                      });

                                                                                                      bot.on('message', message => {
                                                                                                        const HP = (Math.floor((11)*Math.random()+10))
                                                                                                            if (message.content === (prefix) + "Achat/fabrication/découverte du ragoût de lapin"){
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
                                                                                                        if (message.content.startsWith(prefix + "Ragoût de loup")) {
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
                                                                                                             .addField("Prix de revente :" , "30 cols")
                                                                                                             .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de loup")
                                                                                                             .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                              .setTimestamp()
                                                                                                              message.channel.send({embed})
                                                                                                            }   
                                                                                                          });

                                                                                                          bot.on('message', message => {
                                                                                                            const HP = (Math.floor((21)*Math.random()+20))
                                                                                                                if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de loup")) {
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
                                                                                                            if (message.content.startsWith(prefix + "Ragoût de loup de sang")) {
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
                                                                                                                 .addField("Prix de revente :" , "80 cols")
                                                                                                                 .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de loup de sang")
                                                                                                                 .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
                                                                                                                  .setTimestamp()
                                                                                                                  message.channel.send({embed})
                                                                                                                }   
                                                                                                              });

                                                                                                              bot.on('message', message => {
                                                                                                                const HP = (Math.floor((41)*Math.random()+40))
                                                                                                                    if (message.content.startsWith(prefix + "Achat/fabrication/découverte du ragoût de loup de sang")) {
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
                                                                                                                     .addField("Prix de revente :" , "30 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication/découverte du ragoût de loup")
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
                                                                                                                     .addField("Prix de revente :" , "50 cols")
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
                                                                                                                     .addField("Prix de revente :" , "60 cols")
                                                                                                                     .addField("Si vous trouvez ou fabriquer ou acheter cet objet :" , "=Achat/fabrication de la potion faible de force")
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
                                                                                                                         .addField("Prix de revente :" , "60 cols")
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
                                                                                                                     .addField("Prix de revente :" , "1650 cols")
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
                                                                                                                     .addField("Prix de revente :" , "200 cols")
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
                                                                                                                       .addField("Prix de revente :" , "200 cols")
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

                               
  //////////////////////////////////////////////////////////////////MATERIAUX ET OBJETS SUR LES MONSTRES///////////////////////////////////////////////////////////////////////    

                             
bot.on('message', message => {
    if (message.content.startsWith(prefix + "Viande de renard")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Viande de renard :" , "C'est une viande basique que vous trouvez sur les renards dans les plaines du palier 1 !")
         .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "2 cols")
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
         .addField("Prix de revente :" , "2 cols")
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
         .addField("Prix de revente :" , "2 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de chien")
                  .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
                  .setTimestamp()
                  message.channel.send({embed})
                }   
              });


              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Viande de lapin")) {
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                     .setColor(3447003)
                     .addField("Viande de lapin :" , "C'est une viande basique vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                     .addField("Prix d'achat :" , "5 cols")
         .addField("Prix de revente :" , "2 cols")
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
                         .addField("Prix d'achat :" , "x cols")
         .addField("Prix de revente :" , "x cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin géant")
                          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                       bot.on('message', message => {
    if (message.content.startsWith(prefix + "Viande de loup")) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
         .setColor(3447003)
         .addField("Viande de loup :" , "C'est une viande basique que vous trouvez sur les loups dans la forêt du palier 1 !")
         .addField("Prix d'achat :" , "10 cols")
         .addField("Prix de revente :" , "5 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de loup")
          .setImage("https://cdn.pixabay.com/photo/2016/10/18/14/07/steak-1750291_960_720.png")
          .setTimestamp()
          message.channel.send({embed})
        }   
      });


      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Viande de loup de sang")) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
             .setColor(3447003)
             .addField("Viande de loup de sang :" , "C'est une viande étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
             .addField("Prix d'achat :" , "40 cols")
         .addField("Prix de revente :" , "20 cols")
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
         .addField("Prix de revente :" , "5 cols")
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
         .addField("Prix de revente :" , "5 cols")
         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Epaulières en peau arraché\n=Cape en peau arraché\n=Plastron en peau arraché\n=Gantelets en peau arraché\n=Ceinture en peau arraché\n=Jambières en peau arraché\n=Bottes en peau arraché")
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
                 .addField("Prix de revente :" , "5 cols")
                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Epaulières en peau arraché\n=Cape en peau arraché\n=Plastron en peau arraché\n=Gantelets en peau arraché\n=Ceinture en peau arraché\n=Jambières en peau arraché\n=Bottes en peau arraché")
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
                     .addField("Prix de revente :" , "5 cols")
                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Epaulières en peau arraché\n=Cape en peau arraché\n=Plastron en peau arraché\n=Gantelets en peau arraché\n=Ceinture en peau arraché\n=Jambières en peau arraché\n=Bottes en peau arraché")
                      .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                      .setTimestamp()
                      message.channel.send({embed})
                    }   
                  });


                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Peau de lapin géant")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de lapin géant :" , "C'est une peau étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                         .addField("Prix d'achat :" , "40 cols")
                         .addField("Prix de revente :" , "20 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Epaulières en peau résistante\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistante\n=Ceinture en peau résistante\n=Jambières en peau résistante\n=Bottes en peau résistante")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      
                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Peau de lapin")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de lapin :" , "C'est une peau basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                         .addField("Prix d'achat :" , "10 cols")
                         .addField("Prix de revente :" , "5 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau arraché\n=Epaulières en peau arraché\n=Cape en peau arraché\n=Plastron en peau arraché\n=Gantelets en peau arraché\n=Ceinture en peau arraché\n=Jambières en peau arraché\n=Bottes en peau arraché")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });

                      
                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Peau de loup")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de loup :" , "C'est une peau basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                         .addField("Prix d'achat :" , "20 cols")
                         .addField("Prix de revente :" , "10 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Epaulières en peau résistante\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistante\n=Ceinture en peau résistante\n=Jambières en peau résistante\n=Bottes en peau résistante")
                          .setImage("https://cdn0.iconfinder.com/data/icons/prehistoric-elements-1/64/animal-skin-leather-material-Clothes-512.png")
                          .setTimestamp()
                          message.channel.send({embed})
                        }   
                      });


                      
                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Peau de loup de sang")) {
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                         .setColor(3447003)
                         .addField("Peau de loup de sang :" , "C'est une peau étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                         .addField("Prix d'achat :" , "80 cols")
                         .addField("Prix de revente :" , "40 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Epaulières en peau résistante\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistante\n=Ceinture en peau résistante\n=Jambières en peau résistante\n=Bottes en peau résistante")
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
                         .addField("Prix de revente :" , "10 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Casque en peau résistante\n=Epaulières en peau résistante\n=Cape en peau résistante\n=Plastron en peau résistante\n=Gantelets en peau résistante\n=Ceinture en peau résistante\n=Jambières en peau résistante\n=Bottes en peau résistante")
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
                             .addField("Prix de revente :" , "7 cols")
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
                                 .addField("Prix de revente :" , "7 cols")
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
                                     .addField("Prix de revente :" , "7 cols")
                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                                      .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                      .setTimestamp()
                                      message.channel.send({embed})
                                    }   
                                  });

                                  bot.on('message', message => {
                                    if (message.content.startsWith(prefix + "Coeur de lapin")) {
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                         .setColor(3447003)
                                         .addField("Coeur de lapin :" , "C'est un coeur basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                                         .addField("Prix d'achat :" , "15 cols")
                                                 .addField("Prix de revente :" , "7 cols")
                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin")
                                          .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                          .setTimestamp()
                                          message.channel.send({embed})
                                        }   
                                      });
    

                                      bot.on('message', message => {
                                        if (message.content.startsWith(prefix + "Coeur de lapin géant")) {
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                             .setColor(3447003)
                                             .addField("Coeur de lapin géant :" , "C'est un coeur étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                                             .addField("Prix d'achat :" , "60 cols")
                                             .addField("Prix de revente :" , "30 cols")
                                             .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible\n=Potion légère de soin")
                                              .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                              .setTimestamp()
                                              message.channel.send({embed})
                                            }   
                                          });

                                          bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Coeur de loup")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Coeur de loup :" , "C'est un coeur basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                                                 .addField("Prix d'achat :" , "30 cols")
                         .addField("Prix de revente :" , "15 cols")
                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Parchemin de poison faible\n=Potion légère de soin\n=Anneau du croc\n=Amulette du croc")
                                                  .setImage("https://png.icons8.com/ios/1600/medical-heart-filled.png")
                                                  .setTimestamp()
                                                  message.channel.send({embed})
                                                }   
                                              });


                                              
                                          bot.on('message', message => {
                                            if (message.content.startsWith(prefix + "Coeur de loup de sang")) {
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                 .setColor(3447003)
                                                 .addField("Coeur de loup de sang :" , "C'est un coeur étrange que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                                                 .addField("Prix d'achat :" , "120 cols")
                                                 .addField("Prix de revente :" , "60 cols")
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
                                                     .addField("Prix de revente :" , "15 cols")
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
                                                     .addField("Prix de revente :" , "10 cols")
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
                                                     .addField("Prix de revente :" , "10 cols")
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
                                                     .addField("Prix de revente :" , "10 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                              .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                              .setTimestamp()
                                                              message.channel.send({embed})
                                                            }   
                                                          });


                                                          bot.on('message', message => {
                                                            if (message.content.startsWith(prefix + "Oeil de lapin")) {
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                 .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                 .setColor(3447003)
                                                                 .addField("Oeil de lapin :" , "C'est un oeil basique que vous trouvez sur les lapins en chassant dans les plaines du palier 1 !")
                                                                 .addField("Prix d'achat :" , "20 cols")
                                                     .addField("Prix de revente :" , "10 cols")
                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de force\n=Potion faible de défense")
                                                                  .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})
                                                                }   
                                                              });


                                                              bot.on('message', message => {
                                                                if (message.content.startsWith(prefix + "Oeil de lapin géant")) {
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                     .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                     .setColor(3447003)
                                                                     .addField("Oeil de lapin géant :" , "C'est un oeil étrange que vous trouvez sur les lapins géants dans les plaines du palier 1 !")
                                                                     .addField("Prix d'achat :" , "80 cols")
                                                                     .addField("Prix de revente :" , "40 cols")
                                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                      .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})
                                                                    }   
                                                                  });


                                                                  bot.on('message', message => {
                                                                    if (message.content.startsWith(prefix + "Oeil de loup")) {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Oeil de loup :" , "C'est un oeil basique que vous trouvez sur les loups dans la forêt du palier 1 !")
                                                                         .addField("Prix d'achat :" , "40 cols")
                                                                         .addField("Prix de revente :" , "20 cols")
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
                                                                         .addField("Prix de revente :" , "20 cols")
                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion légère de force\n=Potion légère de défense")
                                                                          .setImage("https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/view-512.png")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})
                                                                        }   
                                                                      });
    
                                                                      
                                                                  bot.on('message', message => {
                                                                    if (message.content.startsWith(prefix + "Oeil de loup de sang")) {
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                         .setColor(3447003)
                                                                         .addField("Oeil de loup de sang :" , "C'est un oeil basique que vous trouvez sur les loups de sang dans la forêt du palier 1 !")
                                                                         .addField("Prix d'achat :" , "160 cols")
                                                                         .addField("Prix de revente :" , "80 cols")
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
                                                                                 .addField("Prix de revente :" , "50 cols")
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
                                                                                 .addField("Prix de revente :" , "50 cols")
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
                                                                                 .addField("Prix de revente :" , "10 cols")
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
                                                                                 .addField("Prix de revente :" , "25 cols")
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
                                                                                 .addField("Prix de revente :" , "10 cols")
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
                                                                                 .addField("Prix de revente :" , "20 cols")
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
                                                                                         .addField("Prix de revente :" , "10 cols")
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
                                                                                 .addField("Prix de revente :" , "20 cols")
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
                                                                                                 .addField("Prix de revente :" , "10 cols")
                                                                                                 .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin géant\n=Ragoût de taupe\n=Ragoût de loup\n=Ragoût de loup de sang")
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
                                                                                                     .addField("Prix de revente :" , "5 cols")
                                                                                                     .addField("Permet de réaliser le ou les crafts suivants :" , "=Ragoût de lapin\n=Ragoût de renard\n=Ragoût de chien\n=Ragoût de sanglier")
                                                                                                      .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})
                                                                                                    }   
                                                                                                  });


                                                                                                  bot.on('message', message => {
                                                                                                    if (
                                                                                                      message.content.startsWith(prefix + "Herbe médicinale faible")) {
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                         .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                         .setColor(3447003)
                                                                                                         .addField("Herbe médicinale faible :" , "C'est une herbe basique que vous trouvez en cueillant dans les plaines du palier 1 !")
                                                                                                         .addField("Prix d'achat :" , "10 cols")
                                                                                                         .addField("Prix de revente :" , "5 cols")
                                                                                                         .addField("Permet de réaliser le ou les crafts suivants :" , "=Potion faible de soin\n=Potion faible de force\n=Potion faible de défense")
                                                                                                          .setImage("http://download.seaicons.com/icons/icons8/windows-8/512/Plants-Grass-icon.png")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})
                                                                                                        }   
                                                                                                      });

                                                                                                      bot.on('message', message => {
                                                                                                        if (
                                                                                                          message.content.startsWith(prefix + "Herbe médicinale")) {
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                             .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                             .setColor(3447003)
                                                                                                             .addField("Herbe médicinale :" , "C'est une herbe basique que vous trouvez en cueillant dans la forêt du palier 1 !")
                                                                                                             .addField("Prix d'achat :" , "20 cols")
                                                                                                             .addField("Prix de revente :" , "10 cols")
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
                                                                                                                 .addField("Prix de revente :" , "5 cols")
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
                                            .addField("Récompenses :" , "Suite à votre meurtre contre un joueur de niveau " +X+ ", vous obtenez :")
      .addField("Cols :" , "│►" +Cols)
      .addField("Casque du joueur :" , +B)
      .addField("Epaulières du joueur :" , +C)
      .addField("Cape du joueur :" , "│►" +D)
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

