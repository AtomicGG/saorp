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
/*
bot.on('message', message => {
  if (message.content === prefix + "Horde") {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Horde :" , "Vous voulez rejoindre la ville et essayer de survivre le plus longtemps possible, alors les commandes pour avoir les informations et commencer la survie sont juste en dessous !\n\n`=Horde contexte`\n`=Horde survivant`\n`=Nuit`\n`=Matin`\n`=Fouille`\n`=Horde états`\n`=Médicaments`\n`=Nourriture`\n`=Soif`\n`=Blessure`\n`=Atouts`\n`=Horde armes`\n`=Plans`\n`=Lieux`\n`=Défense de la ville`\n`=Fabrication`\n`=Vol`\n`=Exile`\n`=Sommeil`\n`=Horde combat`\n`=Zombie`\n`=Horde liste d'objets 1`\n`=Horde liste des constructions 1`\n`=Transformation`\n`=Habitations`\n`=Jardin`\n`=Points d'actions`\n`=Cargaison`\n`=Déplacements`")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

  bot.on('message', message => {
    if (message.content === prefix + "Horde liste d'objets 1") {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Liste des objets, partie 1 :" , "`=Affaires de citoyen`\n`=Ailerons de poulet entamés`\n`=Appareil électronique en panne`\n`=Aqua-Splash`\n`=Aqua-splah (démonté)`\n`=Badge de shérif`\n`=Balise radius`\n`=Bandage rudimentaire`\n`=Barricades à clouer`\n`=Batteur incomplet`\n`=Batteur électrique`\n`=Betapropine 5mg périmée`\n`=Bidon d'huile vide`\n`=Bidon d'huile remplis`\n`=Biscuit fade`\n`=Bobine de fil de fer`\n`=Bombe pulvérine`\n`=Bombe macabre`\n`=Bombe à eau`\n`=Bombe à eau explosive`\n`=Bon plat fait-maison`\n`=Bonbonne d'eau`\n`=Boule de pâte visqueuse`\n`=Boules quiès`\n`=Boules de sable`\n`=Boîte d'allumettes`\n`=Boîte de conserve`\n`=Boîte de conserve ouverte`\n`=Boîte de schrödinger`\n\nLa suite : `Horde liste d'objets 2`")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

    bot.on('message', message => {
      if (message.content === prefix + "Horde liste d'objets 2") {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .addField("Liste des objets, partie 2 :" , "`=Boîte de jeu`\n`=Boîte-déjeuner`\n`=Boîte en métal`\n`=Brico'facile`\n`=Buche en bon état`\n`=Bureau monté à la rache`\n`=Bâton cassé`\n`=Cadavre de voyageur`\n`=Caddie`\n`=Caddie bancal`\n`=Cafetière`\n`=Cafetière incomplète`\n`=Café brûlant`\n`=Caisse de feux d'artifice`\n`=Caisse matériel`\n`=Caisse de nourriture`\n`=Calibrateur PDTT MARK II`\n`=Cantine de fer`\n`=Caisse de matériaux`\n`=Cartons`\n`=Ceinture à poches`\n`=Chaîne hifi`\n`=Chaise EKTÖRP-GLUTEN`\n`=Chamallows calcinés`\n`=Chamallows séchés`\n`=Charognardes`\n`=Chaîne de porte & cadenas`\n`=Chewing-gums séchés`\n`=Chien hargneux`\n`=Cidre claviceps artisanal`\n`=Claviceps purpurea`\n`=Clé magnétique`\n\nLa suite : `=Horde liste d'objets 3`")    .setTimestamp()
        message.channel.send({embed})
            }
      }) ;

      bot.on('message', message => {
        if (message.content === prefix + "Horde liste d'objets 3") {
          const embed = new Discord.RichEmbed()
          .setColor(0xff0000)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .addField("Liste des objets, partie 3 :" , "`=Clé à molette`\n`=Clé à percussion`\n`=Cochon malodorant`\n`=Coffre d'architecte`\n`=Coffre d'architecte scellé`\n`=Coffre-fort`\n`=Colis postal`\n`=Coupe-coupe`\n`=Courroie`\n`=Couteau suisse`\n`=Couteau à dents`\n`=Cutter`\n`=Cyanure`\n`=Devastator`\n`=Devastator (démonté)`\n`=Diode lazer`\n`=Distributeur vide`\n`=Doggy-bag`\n`=Débris métalliques`\n`=Décapsuleur`\n`=Dés`\n`=Détonateur compact`\n`=Eau croupie`\n`=Eau croupie purifiée`\n`=Epices fortes`\n`=Explosifs bruts`\n`=Ferraille`\n`=Fiole de poison`\n`=Four cancérigène`\n`=Fragment de tôle`\n`=Fumigène 'Senteur sapin'`\n`=Fusil d'assaut`\n`=Fusée éclairante`\n`=Grand bâton sec`\n`=Gros chat mignon`\n\nLa suite : `=Horde liste d'objets 4`")    .setTimestamp()
          message.channel.send({embed})
              }
        }) ;

        bot.on('message', message => {
          if (message.content === prefix + "Horde liste d'objets 4") {
            const embed = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
        .addField("Liste des objets, partie 4 :" , "`=Gros coffre en métal`\n`=Gros colis postal`\n`=Grosse chaîne rouillée`\n`=Guitare artisanale`\n`=Hydratone 100MG`\n`Jambon-beurre moisi`\n`=Jerrycan plein`\n`=Jus de mirabelle suspect`\n`=Kalachnik'eau`\n`=Kit de bricolage`\n`=Kit de bricolage abîmé`\n`=LSD`\n`=Lambeau de chair`\n`=Lampe de chevet éteinte`\n`=Lampe de chevet allumée`\n`=Lance-pile 1-PDTG`\n`=Lance-pile 1-PDTG (démonté)`\n`=Lance-pieu`\n`=Lance-pile MARK II`\n`=Lance-pile MARK II (démonté)`\n`=Lentille convexe`\n`=Liasse de billets`\n`=Légume suspect`\n`=Maglite Pif'gadget`\n`=Maglite Pif'gadget (démonté)`\n`=Matelas`\n`=Melon d'intestin`\n`=Meuble en kit`\n`=Micropur effervescent`\n\nLa suite : `=Horde liste d'objets 5`")    .setTimestamp()
            message.channel.send({embed})
                }
          }) ;

          bot.on('message', message => {
            if (message.content === prefix + "Horde liste d'objets 5") {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Liste des objets, partie 5 :" , "`=Mine antipersonnel`\n`=Morceau de caisse`\n`=Morceau de contreplaqué`\n`=Moteur`\n`=Mécanisme`\n`=Médicament sans étiquette`\n`=Napolitains moisis`\n`=Nouilles chinoises`\n`=Nouilles chinoises épicées`\n`=Oeuf`\n`=Os charnu`\n`=Os humain fêlé`\n`=Outils en vrac`\n`=Ouvre-boîte`\n`=Paillasson`\n`Paillasson piégé`\n`=Pamplemousse explosif`\n`=Paquet de chips molles`\n`=Paquet de cigarettes entamé`\n`=Paracétoïde 7G`\n`=Pavés de béton informes`\n`=Pelures de peau`\n`=Petit manche vibrant`\n`=Petit manche vibrant (démonté)`\n`=Petits beurres rances`\n`=Pile`\n`=Pim's périmé`\n`Piqûre de calmant`\n`=Pistolet à eau`\n`=Pistolet à eau`\n`=Pistolet à eau (démonté)`\n\nLa suite : `=Horde liste d'objets 6`")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;

            bot.on('message', message => {
              if (message.content === prefix + "Horde liste d'objets 6") {
                const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .addField("Liste des objets, partie 6 :" , "`=Plan de chantier commun`\n`=Plan de chantier inhabituel`\n`=Plan de chantier rare`\n`=Plan de chantier très rare`\n`=Plan de chantier épique`\n`=Plan de chantier mythique`\n`=Plan de chantier légendaire`\n`=Planche tordue`\n`=Plaque de bois solide`\n`=Plaque de tôle`\n`=Plat fait-maison douteux`\n`=Poignée de bonbons`\n`=Poignée de vis et écrous`\n`=Pointeur laser brûlant`\n`=Pointeur laser brûlant (démonté)`\n`=Pomme`\n`=Pompe à jerrycan`\n`=Portière de voiture`\n`=Portière de voiture incomplète`\n`=Poudre super-fuzz`\n`=Poudre-comète brte`\n`=Poule`\n`=Poutre rafistolée`\n`=Produit corrosif`\n`=Produits pharmaceutiques`\n`=Purée de charognardes`\n\nLa suite : `=Horde liste d'objets 7`")    .setTimestamp()
                message.channel.send({embed})
                    }
              }) ;

              bot.on('message', message => {
                if (message.content === prefix + "Horde liste d'objets 7") {
                  const embed = new Discord.RichEmbed()
                  .setColor(0xff0000)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
              .addField("Liste des objets, partie 7 :" , "`=Radio K7`\n`=Radio K7 (démonté)`\n`=Rat`\n`=Ration d'eau`\n`=Revolver`\n`=Revolver (démonté)`\n`=Rocking chair`\n`=Réfrigérateur d'étudiant`\n`=Réserves d'un citoyen avisé`\n`=Sac d'herbe fraîche`\n`=Sac de ciment`\n`=Sac plastique`\n`=Sac plastique + explosif`\n`=Sac super-pratique`\n`=Sac supplémentaire`\n`=Sacoche usée`\n`=Scie à métaux`\n`=Scie à métaux abîmée`\n`=Serpent de 2 mètres`\n`=Souche de bois pourrie`\n`=Sport-elec`\n`=Sport-elec (éteint)`\n`=Steak appétissant`\n`=Steak de sciure`\n`=Structures métalliques`\n`=Stéroïdes anabolisants`\n`=Substance épaisse`\n`=Sérum pour goule`\n`=Table järpen`\n`=Tapis persan`\n\nLa suite : `=Horde liste d'objets 8`")    .setTimestamp()
                  message.channel.send({embed})
                      }
                }) ;

                bot.on('message', message => {
                  if (message.content === prefix + "Horde liste d'objets 8") {
                    const embed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                .addField("Liste des objets, partie 8 :" , "`=Taser d'auto-défense`\n`=Taser d'auto-défense (démonté)`\n`=Teddy n'ours`\n`=Toile de tente`\n`=Tondeuse à gazon`\n`=Tondeuse à gazon (démonté)`\n`=Torche`\n`=Torche consumée`\n`=Tournevis`\n`=Tronçonneuse`\n`=Tronçonneuse (démontéà`\n`=Tréteau`\n`=Tube de cuivre`\n`=Tube de lancement floush`\n`=Twinoïde 500MG`\n`=Téléphone portable`\n`=Unité centrale`\n`=Viande humaine`\n`=Viande indéfinissable`\n`=Vieille machine à laver`\n`=Vieille porte`\n`=Vodka marinostov`\n`='Debout-les-morts'`")    .setTimestamp()
                    message.channel.send({embed})
                        }
                  }) ;

  bot.on('message', message => {
    if (message.content === prefix + "Horde liste des constructions 1") {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Liste des constructions, partie 1 :" , "`=Appâts`\n`=Arroseurs automatiques`\n`=Atelier`\n`=Barbelés`\n`=Barrières`\n`=Blindage d'entrée`\n`=Boucherie`\n`=Canon à briques`\n`=Champ de mines à eau`\n`=Crémato-cue`\n`=Derrick artisanal`\n`=Douves`\n`=Dynamitage`\n`=Fausse ville`\n`=Fixations de défenses`\n`=Fondations`\n`=Foreuse pour le puits`\n`=Grogro mur`\n`=Lance-tôle`\n`=Le grand déménagement`\n`=Manufacture`\n`=Monticules pour canons`\n`=Muraille à pointes`\n`=Muraille rasoir`\n`=Oubliettes`\n`=Perforeuse`\n`=Piège à loups`\n`=Pompe`\n`=Porte améliorée`\n`=Porte à piston`\n`=Potager`\n`=Poutres de renfort`\n`=Projet Eden`\n`=Purificateur d'eau`\n\nLa suite : `Horde liste des constructions 2`")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

    bot.on('message', message => {
      if (message.content === prefix + "Horde liste des constructions 2") {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .addField("Liste des constructions, partie 2 :" , "`=Rape à zombies`\n`=Remparts avancés`\n`=Renforts de muraille`\n`=Sani-broyeur`\n`=Scies hurlantes`\n`=Tour`\n`=Tourniquet à poutres`\n`=Tuyauteries`")    .setTimestamp()
        message.channel.send({embed})
            }
      }) ;

  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Points d'actions")) {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les points d'actions :" , "Lorsque vous effectuez une action qui demande un effort, vous dépensez ce qu'on appelle un 'Point d'action' !\n\nVous disposez de 6 points d'actions par jour, que vous récupérez le lendemain à partir de 00 H 00 [Heure de France]\n\nLes points d'actions peuvent aussi se reprendre en buvant une ration d'eau ainsi qu'en mangeant ou bien même en buvant certains alcools ou en prenant certaines drogues...\n\nUne fois à cours de points d'actions, vous ne pouvez plus effectuer d'action qui nécessite un effort...")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Horde survivant")) {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les survivants :" , "Avant d'entrer dans cette ville, vous possédez forcément une identité, une histoire, une profession, des connaissances, c'est pour cela que vous devrez nous transmettre toutes ces informations en créant votre survivant à partir du modèle présent en écrivant la commande : `=Fiche de survivant`\n\nA savoir que votre survivant possède un inventaire maximal de base de 5 objets sur lui !\n\nUne fois votre personne créer et valider par un membre du staff, vous devrez vous renommer de la manière suivante : [Nom] [Prénom] [Points d'action]\n\nPar exemple : [Oshiro][Yato][6/6]")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Fiche de survivant")) {
        message.channel.send("\n```۝▬▬▬▬▬▬▬▬『`INFORMATIONS DE VOTRE SURVIVANT`』▬▬▬▬▬▬▬▬۝\n\nNom :【A remplir】\n\nPrénom :【A remplir】\n\nÂge : 【A remplir】\n\nSexe : 【A remplir】\n\nPhysique :【A remplir avec image si vous voulez, c'est conseillé】\n\nPersonnalité :【A remplir】\n\nHistoire avant l'apocalypse :【A remplir】\n\nMétier : 【A remplir】\n\nAtout :【A remplir en écrivant =Atouts】\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\nInventaire : \nAffaires d'un citoyen\nRation d'eau\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝```");
           }
        });

        bot.on('message', message => {
          if (message.content.startsWith(prefix + "Nuit")) {
            const embed = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
        .addField("La nuit :" , "Lorsque vient 00 H 00, les zombies attaquent la ville et les survivants qu'ils rencontreront !\n\nPour déterminer combien de zombies attaqueront la ville par nuit, voici les différentes commandes à écrire :\n\n`=Jour 1`\n`=Jour 2`\n`=Jour 3`\n`=Jour 4`\n`=Jour 5`\n`=Jour 6`\n`=Jour 7`\n`=Jour 8`\n`=Jour 9`\n`=Jour 10`\n`=Jour 11`\n`=Jour 12`\n`=Jour 13`\n`=Jour 14`\n`=Jour 15`\n`=Jour 16`\n`=Jour 17`\n`=Jour 18`\n`=Jour 19`\n`=Jour 20`")    .setTimestamp()
            message.channel.send({embed})
                }
          }) ;

          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Matin")) {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Le matin :" , "Chaque matin durant votre survie, si vous êtes encore en vie surtout, un évènment se passera à un moment précis de la journée ou alors à un moment aléatoire !\n\nLes évènements sont aléatoires et positifs comme négatifs alors faites très attention...\n\nPour déterminer l'évènement aléatoire : `=Evènement aléatoire`")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;



  bot.on('message', message => {
    if (message.content.startsWith(prefix + "Horde armes")) {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les armes :" , "Il sera assez fréquent de trouver des armes pour vous défendre en tuant les zombies, que ce soit des armes de corps à corps comme des armes à feu !\n\nLes armes de corps à corps auront un nombre d'utilisations limitées disponible sur les informations de l'arme en écrivant : `=[Nom de l'arme]`\n\nLes armes à feu ont besoin de munitions pour pouvoir être utiliser, les munitions nécessaires sont écrites sur les informations de l'arme en écrivant : `=[Nom de l'arme]'")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

    bot.on('message', message => {
      if (message.content.startsWith(prefix + "Plans")) {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .addField("Les plans :" , "Lorsque vous fouillez à l'extérieur de la ville, il est possible de trouver un plan plus ou moins rare, permettant de pouvoir fabriquer un objet, une arme, une défense, ou d'autres objets possibles !\n\nLes informations des plans sont écrites en écrivant : `=[Nom du plan]'")    .setTimestamp()
        message.channel.send({embed})
            }
      }) ;


        bot.on('message', message => {
          if (message.content === prefix + "Lieux") {
            const embed = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
        .addField("Les lieux, partie 1 :" , "Banque : Elle permet de pouvoir stock justement tous les objets nécessaires en ville, coopérez pour survivre!\n\nPlace principale : C'est une place assez grande qui permet de pouvoir se rassembler si besoin\n\nAuberge : Permet de pouvoir y écrire des annonces ou les objectifs du jour pour s'organiser entre survivants, vous pourrez aussi y dormir avec quelques chambres et lits à l'intérieur !\n\nPuits : Un des endroits les plus importants, c'est ici que les survivants pourront récupérer de l'eau à mettre dans leur bouteille pour ne pas mourir de soif, cependant l'eau n'est pas illimité mais le puit possède 50 L d'eau de départ ! [1L = Une bouteille]\n\nCabinet médicale : L'endroit où vous pourrez normalement trouver un médecin capable de vous soigner, si vous avez besoin de médicaments à cause d'une maladie ou infection, si vous avez besoin de bandages et de le mettre à cause d'une hémorragie...\n\nLa suite : `=Lieux 2`")    .setTimestamp()
            message.channel.send({embed})
                }
          }) ;

          bot.on('message', message => {
            if (message.content === prefix + "Lieux 2") {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Les lieux, partie 2 :" , "Tour : Celle-ci permet de pouvoir observer les environs et la ville, pour tenter de voir s'il y a des zombies à l'intérieur de la ville à découvert, ou si des survivants se font attaqués à l'extérieur\n\nBoucherie : Si la ville a besoin de devoir découper un certain type de viande, de la travailler pour la rendre mangeable ou de meilleur qualité, le matériel se trouve dedans\n\nCuisine : Les survivants auront parfois besoin de se nourrire d'un bon repas pour satisfaire leur faim, c'est ici que se feront tous les repas et les rations pour survivre\n\nPrison : Comme le nom l'indique, c'est une prison où pourrons être mis des survivants qui sont devenus trop violents, ou même infectés, ou pour tout autre usage, celle-ci possède 10 cellules\n\nAtelier : Un autre batîment très important pour la survie de la ville qui est l'atelier, vous pourrez à l'intérieur travailler les matériaux, les transformer, les raffiner, les découper, les assembler avec le matériel de base pour le faire\n\nLa suite : `Lieux 3`")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;

            bot.on('message', message => {
              if (message.content === prefix + "Lieux 3") {
                const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .addField("Les lieux, partie 3 :" , "Chantiers : Une fois la ville ayant les bonnes ressources ainsi que les bons plans et les connaissances, vous pourrez aux chantiers construire justement les différentes bâtiments et défenses que la ville aura besoin pour continuer de résister aux attaques des zombies\n\nJardin : Lorsque vous possédez des graines, vous pourrez tenter de les faire pousser ici, cependant la pousse prendra quelques jours et il faudra s'occuper des plantations en les arrosant de temps à autre avant qu'elles finissent mortes\n\nLa plupart de ces lieux au départ de la ville, ne sont pas encore présent et c'est pour cela qu'il faudra les créer !")    .setTimestamp()
                message.channel.send({embed})
                    }
              }) ;


          bot.on('message', message => {
            if (message.content === prefix + "Défense de la ville") {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Défense de la ville, partie 1 :" , "Le but principal de la survie en ville sera de fabriquer des défenses afin de tuer un maximum de zombies lors des attaques tous les jours à 00 H 00 [Heure en France] !\n\nIl est possible pour un survivant de défendre aussi la ville des zombies restants qui arrivent à pénétrer l'intérieur de la ville...\n\nUn zombie vaut pour un 'point d'attaque' et une défense ou un survivant aura ses 'points de défense'\n\nSi par exemple, la ville possède 45 points de défense et qu'il y a 37 zombies attaquant au jour 3, il n'y a aucun zombies qui pénétreront dans la ville, ni aucun mort par la même occasion !\n\nCependant, si la ville possède 45 points de défense et qu'il y a 50 zombies qui attaquent, 5 zombies réussiront à pénétrer en ville...\n\nCes 5 zombies pourront être combattus et tuer par les survivants qui défendent l'entrée de la ville évidemment !\n\nLa suite : `=Défense de la ville 2`")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;

            bot.on('message', message => {
              if (message.content === prefix + "Défense de la ville 2") {
                const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .addField("Défense de la ville, partie 2 :" , "Si les survivants fuient ou qu'il n'y a personne défendant l'entrée de la ville, les zombies iront attaquer les joueurs aléatoirement qui sont dans leur maison, batîments, rues etc... !\n\nPour déterminer quel joueur trouvera et attaquera le zombie, il faut écrire : `=Zombie infiltration : [Nombre de survivants restants]`\n\nChaque survivant en début de partie a un numéro, selon le numéro afficher de la commande, le joueur sera attaquer\n\nA savoir que se défendre en groupe est possible, et si le survivant n'est pas connecté, son personnage pourra être jouer par un autre survivant avec son accord [ou un modérateur, d'où l'activité importante dans ce RP surtout le soir]\n\nSi le ou les survivants fuient les zombies, ils iront attaquer d'autres joueurs, jusqu'à que tous les zombies soient tués !\n\nLa suite : `=Défense de la ville 3`")    .setTimestamp()
                message.channel.send({embed})
                    }
              }) ;



              bot.on('message', message => {
                if (message.content === prefix + "Défense de la ville 3") {
                  const embed = new Discord.RichEmbed()
                  .setColor(0xff0000)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
              .addField("Défense de la ville, partie 3 :" , "Si à 00 H 00 pile la porte de la ville n'est pas fermé par un survivant, tous les zombies pourront rentrer...\n\nAvant chaque attaque, il faudra impérativement mettre dans le salon #『🔨』ᴘᴏɪɴᴛs-ᴅᴇ-ᴅᴇ́ғᴇɴsᴇ si votre maison possède des points de défense, ou si vous souhaitez devenir veilleur\n\nUn veilleur est un survivant qui ne va pas se cacher pendant l'attaque, mais qui va justement protéger la ville en sortant et en risquant sa vie\n\nSi vous souhaitez devenir veilleur, veuillez l'écrire justement dans le salon #『🔨』ᴘᴏɪɴᴛs-ᴅᴇ-ᴅᴇ́ғᴇɴsᴇ en y mettant les points de défense qu'offre votre arme\n\nA savoir que, les veilleurs seront les premiers à mourir avant les survivants qui ne défendent pas la ville alors faite attention...\n\nLa suite : `=Défense de la ville 4`")    .setTimestamp()
                  message.channel.send({embed})
                      }
                }) ;

                bot.on('message', message => {
                  if (message.content === prefix + "Défense de la ville 4") {
                    const embed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                .addField("Défense de la ville, partie 4 :" , "Une arme de corps à corps possède une durabilité avant d'être inutilisable/détruite\n\nSi par exemple vous avez un pied de biche utilisable pour 3 attaques, au bout de la troisième nuit en tant que veilleur et si vous êtes encore en vie, le pied de biche sera détruit\n\nSi vous avez une arme à feu ou du moins une arme à distance qui tire, celle-ci sera encore utilisable mais chaque nuit en tant que veilleur déchargera votre arme complètement, vous devrez la recharger avant de pouvoir la réutiliser\n\nA savoir que, pour utiliser une arme à feu ou une arme à distance pour être veilleur, il faudra que celle-ci soit complètement chargé\n\nIl est possible d'avoir plusieurs armes sur sois, en respectant les règles précédentes des armes chargés et de la durabilité")    .setTimestamp()
                    message.channel.send({embed})
                        }
                  }) ;


            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Fabrication")) {
                const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .addField("La fabrication :" , "Il sera très fréquent que dans la ville, vous devrez fabriquer des objets, des défenses, assembler des éléments avec d'autres pour en créer un nouvel élément\n\nLes informations des différentes fabrications et assemblages possibles sont affichés sur les matériaux en écrivant `=[Nom du matériau]`\n\nIl existe aussi le raffinage de ressource afin d'en obtenir une de meilleur qualité pour des usages encore plus performants !\n\nPour voir la liste des fabrications existantes, écrivez : `=Liste de fabrication`")    .setTimestamp()
                message.channel.send({embed})
                    }
              }) ;



                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Exile")) {
                      const embed = new Discord.RichEmbed()
                      .setColor(0xff0000)
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                  .addField("L'exile :" , "Il est possible qu'une fois trop de crime commis et si les survivants décident d'effectuer un vote, de vous faire exiler, c'est à dire que vous n'aurez plus le droit de retirer d'objets à la banque, vous devrez survivre de votre côté seul en quelque sorte...\n\nCependant, il est possible de ne pas respecter ces règles, mais si les survivants s'en aperçoivent, ils pourront alors vous mettre dehors et vous finirez en burger pour les zombies...\n\nL'exile peux-être temporaire comme définitif, et les règles définies peuvent être différentes d'une ville à une autre !")    .setTimestamp()
                      message.channel.send({embed})
                          }
                    }) ;

                    bot.on('message', message => {
                      if (message.content.startsWith(prefix + "Sommeil")) {
                        const embed = new Discord.RichEmbed()
                        .setColor(0xff0000)
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                    .addField("Le sommeil :" , "Vous serez obligé de dormir au minimum 4 H dans le RP par jour ou sinon vous aurez l'état 'Fatigue' qui vous empêche de pouvoir réussir à fouiller une zone ou de fabriquer ou raffiner quelque chose...\n\nDe plus, avec cet état vous aurez plus de difficulté à fuir les zombies\n\nL'état disparaît une fois que vous avez justement dormis assez, c'est à dire 4 H !")    .setTimestamp()
                        message.channel.send({embed})
                            }
                      }) ;

bot.on('message', message => {
  if (message.content === prefix + "Horde combat") {
const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Les combats, partie 1 :" , "Lorsque vous êtes en groupe contre un ou plusieurs zombies, il faudra déterminer qui sera le premier à agir, le second, et ainsi de suite comme des numéros et en tour par tour !\n\nLes zombies attaqueront toujours après les joueurs sauf s'il y a une embuscade ou une attaque dans le dos...\n\nA savoir que les zombies attaqueront toujours un ou plusieurs survivants en même temps...\n\nPour déterminer quel survivant le ou les zombies attaqueront : `=Cible : [Nombre de survivant dans le combat]`\n\nLa suite en écrivant : `=Horde combat 2`")    .setTimestamp()
message.channel.send({embed})
}
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Horde combat 2") {
  const embed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les combats, partie 2 :" , "Les différentes attaques spéciales grâce aux armes sont écrites sur les informations de l'arme en question !\n\nPour avoir la liste des actions possibles sans armes : `=Horde actions`\n\nLorsque vous fuiyez les zombies en allant ailleurs, vous aurez toujours l'initiative pour les attaquer si vous revenez !\n\nEn général, les combats s'apprennent sur le terrain alors n'hésite pas à observer comment les autres survivants font !")    .setTimestamp()
  message.channel.send({embed})
  }
  }) ;

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Nombre de zombie")) {
    let X = args.slice(3).join(" : ");
    const Zombies = (Math.floor((X)*Math.random()+1))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Nombre de zombie :" , "Le groupe sera constitué de " +Zombies+ " zombies...")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
});

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Groupe de zombies")) {
    const Groupe = (Math.floor((5)*Math.random()+1))
    if(Groupe === 1){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Groupe de zombies :" , "Les zombies s'infiltrant dans votre ville forme un immense groupe alors bonne chance...")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})}
    if(Groupe === 2){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Groupe de zombies :" , "Les zombies s'infiltrant dans votre ville forme 2 groupes alors bonne chance...")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
      if(Groupe === 3){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField("Groupe de zombies :" , "Les zombies s'infiltrant dans votre ville forme 3 groupes alors bonne chance...")
        .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
        .setTimestamp()
        message.channel.send({embed})}
        if(Groupe === 4){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField("Groupe de zombies :" , "Les zombies s'infiltrant dans votre ville forme 4 groupes alors bonne chance...")
          .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
          .setTimestamp()
          message.channel.send({embed})}
          if(Groupe === 5){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField("Groupe de zombies :" , "Les zombies s'infiltrant dans votre ville forme 5 groupes alors bonne chance...")
            .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
            .setTimestamp()
            message.channel.send({embed})}
  }
}) ;


bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Cible")) {
    let X = args.slice(1).join(" : ");
    const Joueurs = (Math.floor((X)*Math.random()+1))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cible :" , "Le groupe de zombie attaquera le survivant [" +Joueurs+ "]...")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
});


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Fin de l'attaque")) {
    const X = (Math.floor((100)*Math.random()+1))
    if(X < 75){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fin de l'attaque :" , "Le groupe de zombie continue de faire des ravages en ville...")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})}
    if(X > 76){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Fin de l'attaque :" , "Le groupe de zombie repart en dehors de la ville !")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
  }
}) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Horde actions")) {
  const embed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField(":crossed_swords: Pour effectuer un coup de poing :" , ":crossed_swords: `=Coup de poing`\n:crossed_swords: `=Coup de poing [Boxeur]`")
  .addBlankField(true)
  .addField(":crossed_swords: Pour effectuer un coup de pied :" , ":crossed_swords: `=Coup de pied`\n:crossed_swords: `=Coup de pied [Boxeur]`")
  .addBlankField(true)
  .addField(":crossed_swords: Pour effectuer un coup de pied circulaire :" , ":crossed_swords: `=Coup de pied circulaire`\n:crossed_swords: `=Coup de pied circulaire [Boxeur]`")
  .addBlankField(true)
  .addField(":shield: Pour effectuer une fuite :" , ":shield: `=Fuite [Aucune blessure]`\n:shield: `=Fuite [Blessure légère]`\n:shield: `=Fuite [Blessure]`\n:shield: `=Fuite [Blessure sévère]`\n:shield: `=Fuite [Blessure mortelle]`")
  .addBlankField(true)
  .setTimestamp()
  message.channel.send({embed})}
}
)
///////////////////////////////////////////////////////////////////////////Coups et fuites//////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  if (message.content === prefix + "Coup de poing") {
    if(A < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Coup de poing :" , "En prenant du recul avec votre poing avant de tapper le plus fort possible, celui-ci n'atteint pas la cible et vous ratez complètement ce qui était censé être badass...")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 61 & A < 85){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Coup de poing :" , "Serrant le poing, vous touchez votre cible avec pas mal de force ce qui la repousse de quelques pas en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
      .setTimestamp()
      message.channel.send({embed})}
      if(A > 86 & A < 95){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField("Coup de poing :" , "D'un violent coup de poing en plein dans la tête, votre cible subit le choc si fort qu'elle en perd l'équilibre et tombe à la renverse sur le sol !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
        .setTimestamp()
        message.channel.send({embed})}
        if(A > 96){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField("Coup de poing :" , "Le regard remplis de haine et de rage, vous y mettez tous votre puissance dans ce coup à tel point que vous entendez un craquement au niveau de la nuque de votre cible !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
          .setTimestamp()
          message.channel.send({embed})}
                }
            }) ;

            bot.on('message', message => {
              const A = (Math.floor((100)*Math.random()))
              if (message.content === prefix + "Coup de poing [Boxeur]") {
                if(A < 40){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField("Coup de poing [Boxeur] :" , "En prenant du recul avec votre poing avant de tapper le plus fort possible, celui-ci n'atteint pas la cible et vous ratez complètement ce qui était censé être badass...")
                  .setTimestamp()
                  message.channel.send({embed})}
                if(A > 41 & A < 75){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField("Coup de poing [Boxeur] :" , "Serrant le poing, vous touchez votre cible avec pas mal de force ce qui la repousse de quelques pas en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(A > 76 & A < 90){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing [Boxeur] :" , "D'un violent coup de poing en plein dans la tête, votre cible subit le choc si fort qu'elle en perd l'équilibre et tombe à la renverse sur le sol !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(A > 91){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField("Coup de poing [Boxeur] :" , "Le regard remplis de haine et de rage, vous y mettez tous votre puissance dans ce coup à tel point que vous entendez un craquement au niveau de la nuque de votre cible !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                      .setTimestamp()
                      message.channel.send({embed})}
                            }
                        }) ;

                        bot.on('message', message => {
                          const A = (Math.floor((100)*Math.random()))
                          if (message.content === prefix + "Coup de pied") {
                            if(A < 60){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField("Coup de pied :" , "Vous élancez votre jambe en avant ainsi que votre pied pour mettre un coup à votre cible mais au dernier moment, vous perdez l'équilibre ce qui vous force à stop votre mouvement pour ne pas tomber...")
                              .setTimestamp()
                              message.channel.send({embed})}
                            if(A > 61 & A < 85){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField("Coup de pied :" , "Lançant votre jambe en avant, la cible se la prend de pleins fouet dans le ventre ce qui la repousse d'un coup sec en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(A > 86 & A < 95){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField("Coup de pied :" , "Une fois votre jambe en mouvement, vous décidez de viser les côtes en y mettant toute votre force, faisant tomber votre cible sur le sol tellement le choc était dur à supporter !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(A > 96){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField("Coup de pied :" , "Dans une position assez spécial, votre jambe arrive facilement à atteindre la tête de votre cible, vous y mettez force et rapidité en croyant presque que la tête pourrait se décrocher !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                        }
                                    }) ;

                                    bot.on('message', message => {
                                      const A = (Math.floor((100)*Math.random()))
                                      if (message.content === prefix + "Coup de pied [Boxeur]") {
                                        if(A < 40){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField("Coup de pied [Boxeur] :" , "Vous élancez votre jambe en avant ainsi que votre pied pour mettre un coup à votre cible mais au dernier moment, vous perdez l'équilibre ce qui vous force à stop votre mouvement pour ne pas tomber...")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                        if(A > 41 & A < 75){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField("Coup de pied [Boxeur] :" , "Lançant votre jambe en avant, la cible se la prend de pleins fouet dans le ventre ce qui la repousse d'un coup sec en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(A > 76 & A < 90){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField("Coup de pied [Boxeur] :" , "Une fois votre jambe en mouvement, vous décidez de viser les côtes en y mettant toute votre force, faisant tomber votre cible sur le sol tellement le choc était dur à supporter !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(A > 91){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField("Coup de pied [Boxeur] :" , "Dans une position assez spécial, votre jambe arrive facilement à atteindre la tête de votre cible, vous y mettez force et rapidité en croyant presque que la tête pourrait se décrocher !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                                    }
                                                }) ;

                                                bot.on('message', message => {
                                                  const A = (Math.floor((100)*Math.random()))
                                                  if (message.content === prefix + "Coup de pied circulaire") {
                                                    if(A < 80){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField("Coup de pied circulaire :" , "En essayant de démarrer un coup de pied circulaire, vous glissez légèrement ce qui vous arrête dans le mouvement...")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                    if(A > 81 & A < 90){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField("Coup de pied circulaire :" , "Dans un élan rapide, vous réussissez à mettre un coup de pied assez puissant sur deux cibles sans trop perdre l'équilibre, ce qui les repousse légèrement !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant leur prochain tour !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure légère`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(A > 91 & A < 96){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField("Coup de pied circulaire :" , "Balançant votre jambe mais également vos bras pour y donner de l'effet, votre jambe touche deux cibles en plein dans les côtes ce qui les fait tomber quelques instants !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant les deux prochains tours !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}
                                                        if(A > 97){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField("Coup de pied circulaire :" , "Presque comme si que vous étiez cascadeur, vous sautez en l'air avant d'asséner un coup de pied rapide et plein de grâce au niveau de la tête de deux cibles !\n\nSi les cibles sont des zombies, ils meurent !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure avancée`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                                }
                                                            }) ;

                                                            bot.on('message', message => {
                                                  const A = (Math.floor((100)*Math.random()))
                                                  if (message.content === prefix + "Coup de pied circulaire [Boxeur]") {
                                                    if(A < 70){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField("Coup de pied circulaire [Boxeur] :" , "En essayant de démarrer un coup de pied circulaire, vous glissez légèrement ce qui vous arrête dans le mouvement...")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                    if(A > 71 & A < 85){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField("Coup de pied circulaire [Boxeur] :" , "Dans un élan rapide, vous réussissez à mettre un coup de pied assez puissant sur deux cibles sans trop perdre l'équilibre, ce qui les repousse légèrement !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant leur prochain tour !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure légère`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(A > 86 & A < 94){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField("Coup de pied circulaire [Boxeur] :" , "Balançant votre jambe mais également vos bras pour y donner de l'effet, votre jambe touche deux cibles en plein dans les côtes ce qui les fait tomber quelques instants !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant les deux prochains tours !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}
                                                        if(A > 95){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField("Coup de pied circulaire [Boxeur] :" , "Presque comme si que vous étiez cascadeur, vous sautez en l'air avant d'asséner un coup de pied rapide et plein de grâce au niveau de la tête de deux cibles !\n\nSi les cibles sont des zombies, ils meurent !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure avancée`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                                }
                                                            }) ;

                                                            bot.on('message', message => {
                                                              const A = (Math.floor((100)*Math.random()))
                                                              if (message.content === prefix + "Fuite [Aucune blessure]") {
                                                                if(A < 40){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Aucune blessure] :" , "Vous tentez de fuir le combat mais, c'est un échec...")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                if(A > 41){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Aucune blessure] :" , "Vous réussissez à fuir le combat, vous avez de la chance !")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                            }
                                                                        }) ;

                                                                        bot.on('message', message => {
                                                              const A = (Math.floor((100)*Math.random()))
                                                              if (message.content === prefix + "Fuite [Blessure légère]") {
                                                                if(A < 50){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Blessure légère] :" , "Vous tentez de fuir le combat mais, c'est un échec...")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                if(A > 51){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Blessure légère] :" , "Vous réussissez à fuir le combat, vous avez de la chance !")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                            }
                                                                        }) ;

                                                                          bot.on('message', message => {
                                                              const A = (Math.floor((100)*Math.random()))
                                                              if (message.content === prefix + "Fuite [Blessure]") {
                                                                if(A < 60){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Blessure] :" , "Vous tentez de fuir le combat mais, c'est un échec...")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                if(A > 61){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField("Fuite [Blessure] :" , "Vous réussissez à fuir le combat, vous avez de la chance !")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                            }
                                                                        }) ;

                                                                        bot.on('message', message => {
                                                                          const A = (Math.floor((100)*Math.random()))
                                                                          if (message.content === prefix + "Fuite [Blessure avancée]") {
                                                                            if(A < 70){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField("Fuite [Blessure avancée] :" , "Vous tentez de fuir le combat mais, c'est un échec...")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                            if(A > 71){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField("Fuite [Blessure avancée] :" , "Vous réussissez à fuir le combat, vous avez de la chance !")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                                        }
                                                                                    }) ;

                                                                                    bot.on('message', message => {
                                                                          const A = (Math.floor((100)*Math.random()))
                                                                          if (message.content === prefix + "Fuite [Blessure mortelle]") {
                                                                            if(A < 80){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField("Fuite [Blessure mortelle] :" , "Vous tentez de fuir le combat mais, c'est un échec...")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                            if(A > 81){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField("Fuite [Blessure mortelle] :" , "Vous réussissez à fuir le combat, vous avez de la chance !")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                                        }
                                                                                    }) ;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Zombie") {
  const embed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les zombies :" , "Les zombies attaquent à vue les survivants, et se mettent à plusieurs sur le même quand ils en ont l'occasion la nuit comme le jour...\n\nLorsqu'un ou des zombies vous attaque : `=Zombies attaque : [Nombre de zombie]`")    .setTimestamp()
  message.channel.send({embed})
  }
  }) ;



      bot.on('message', message => {
        if (message.content.startsWith(prefix + "Transformation")) {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
        .addField("Les transformations :" , "Une fois un stade important atteins lorsque vous êtes affecté par une morsure, vous deviendrez ce qu'on appelle non pas un zombie mais une 'Goule'\n\nUne goule dans ce monde est un humain d'apparence mais qui aura besoin de tuer d'autres humains et de les dévorer, vivant comme mort pour se nourrire...\n\nPour survivre, la goule devra dévorer au moins un humain par jour ou alors elle mourra de faim...\n\nIl est possible de ne pas tuer un survivant et de le dévorer entièrement, seulement une partie mais celui-ci deviendra à son tour aussi infecté et une goule...\n\nSi la ville ne contient plus que des goules, c'est perdus [Cas impossible / extrêmement rare]")    .setTimestamp()
        message.channel.send({embed})
        }
        }) ;

      bot.on('message', message => {
        if (message.content === prefix + "Habitations") {
          const embed = new Discord.RichEmbed()
          .setColor(0xff0000)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Les habitations, partie 1 :" , "Dans la ville, vous aurez une maison qui vous sera confié avec plusieurs fonctionnalités :\n\nVous pourrez stocké 5 objets maximal dans votre coffre\n\nVous pourrez dormir afin d'éviter l'état 'Fatigue'\n\nL'habitation sert aussi principalement à vous cacher lorsque des zombies sont infiltrés en ville !\n\nSi des zombies passent devant chez vous et que vous voulez essayer de rester cacher : `=Maison cachette`\n\nVotre maison peux s'améliorer, notamment elle possède ses propres points de défense lorsque des zombies attaqueront votre maison !\n\nSi vous possédez par exemple une 'Petite fosse' de 2 points de défense et que 5 zombies tentent d'entrer dans votre maison, seulement 3 resteront en vie et les 2 autres mourront ou seront bloqués !\n\nA savoir que les points de défense des habitations ne sont valables qu'une fois par nuit...\n\nLa suite : `=Habitations 2`")    .setTimestamp()
          message.channel.send({embed})
          }
          }) ;

           bot.on('message', message => {
        if (message.content === prefix + "Habitations 2") {
          const embed = new Discord.RichEmbed()
          .setColor(0xff0000)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Les habitations, partie 2 :" , " Si vous fuiyez par exemple votre maison, que vous revenez poursuivis encore par des zombies, cette fois-ci votre maison malgrè ses points de défense ne stoppera pas les quelques zombies...\n\nPour consulter la liste des améliorations : `=Habitations améliorations`")    .setTimestamp()
          message.channel.send({embed})
          }
          }) ;






          bot.on('message', message => {
            const A = (Math.floor((100)*Math.random()))
            if (message.content === prefix + "Maison cachette") {
              if(A < 60){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField("Cachette :" , "Vous faites malheureusement un peu de bruit et les zombies arrivent à l'entendre et même à vous sentir, ils essayent de rentrer, vous avez 5 bonnes minutes pour décider de quoi faire...")
                .setImage("https://media1.giphy.com/media/ZwA7zR7PWMiUE/giphy.gif")
                .setTimestamp()
                message.channel.send({embed})}
              if(A > 61){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField("Cachette :" , "Vous réussissez à garder votre calme et ne faire aucun bruit, les zombies passent devant votre maison et s'en vont !")
                .setImage("https://media1.giphy.com/media/nEuTuI4yvFXA1qSUaD/giphy.gif")
                .setTimestamp()
                message.channel.send({embed})}
                          }
                      }) ;

                      bot.on('message', message => {
                        const A = (Math.floor((100)*Math.random()))
                        if (message.content === prefix + "Cachette") {
                          if(A < 70){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField("Cachette :" , "Vous faites malheureusement un peu de bruit et les zombies arrivent à l'entendre et même à vous sentir, ils arrivent vers vous, vous avez une action et quelques secondes avant qu'ils ne soient là...")
                            .setImage("https://media1.giphy.com/media/ZwA7zR7PWMiUE/giphy.gif")
                            .setTimestamp()
                            message.channel.send({embed})}
                          if(A > 71){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField("Cachette :" , "Vous réussissez à garder votre calme et ne faire aucun bruit, les zombies s'en vont plus loin !")
                            .setImage("https://media1.giphy.com/media/nEuTuI4yvFXA1qSUaD/giphy.gif")
                            .setTimestamp()
                            message.channel.send({embed})}
                                      }
                                  }) ;




          bot.on('message', message => {
            if (message.content.startsWith(prefix + "Mine")) {
            const embed = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .addField("La mine :" , "En ville, vous aurez la possibilité à l'aide d'une pioche, d'aller tenter de miner des minerais plus ou moins rares pour la ville !\n\nCependant, il y a des risques parfois de rencontrer un zombie ou des risques d'éboulements qui peuvent blessés ou complètement vous écrabouillé...")    .setTimestamp()
            message.channel.send({embed})
            }
            }) ;

            bot.on('message', message => {
              if (message.content.startsWith(prefix + "Jardin")) {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
              .addField("Le jardin :" , "En ville, un jardin est présent afin de pouvoir y cultiver des légumes pour nourrir les survivants !\n\nCependant, il faudra utiliser de l'eau ou qu'il pleuve afin que les plantations poussent et ne pourrissent...")    .setTimestamp()
              message.channel.send({embed})
              }
              }) ;

              bot.on('message', message => {
                if (message.content.startsWith(prefix + "Alcool")) {
                const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                .addField("Les alcools :" , "Lorsque vous fouillez l'extérieur de la ville, vous trouverez parfois de l'alcool !\n\nL'alcool permet de vous hydrater et de vous donner des points d'actions, mais attention à l'ivresse...\n\nPour mieux comprendre : `=Horde états 6`")    .setTimestamp()
                message.channel.send({embed})
                }
                }) ;

                bot.on('message', message => {
                  if (message.content.startsWith(prefix + "Drogue")) {
                  const embed = new Discord.RichEmbed()
                  .setColor(0xff0000)
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                  .addField("Les drogues :" , "Lorsque vous fuillez l'extérieur de la ville, vous trouverez parfois de la drogue !\n\nLa drogue permet principalement d'oublier une douleur, soigner un état mais aussi donner des points d'actions, mais les effets négatives comme la dépendance arrivent par la suite...\n\nPour mieux comprendre : `=Horde états 3`")    .setTimestamp()
                  message.channel.send({embed})
                  }
                  }) ;

                  bot.on('message', message => {
                    if (message.content.startsWith(prefix + "Cargaison")) {
                    const embed = new Discord.RichEmbed()
                    .setColor(0xff0000)
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                    .addField("Les cargaisons :" , "Parfois pendant votre survie, il y aura un avion qui passe au dessus en larguant une cargaison aux alentours de celle-ci !\n\nDedans se trouvera des ressources, des armes, de la nourriture, de l'eau et bien d'autres choses possible selon votre chance !\n\nCependant, il faudra prendre le risque de sortir le récupérer, cela alerte beaucoup de zombies...")    .setTimestamp()
                    message.channel.send({embed})
                    }
                    }) ;

                    bot.on('message', message => {
                      if (message.content.startsWith(prefix + "Déplacements")) {
                      const embed = new Discord.RichEmbed()
                      .setColor(0xff0000)
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                      .addField("Les déplacements :" , "Vous déplacez en ville ne mettra qu'une minute pour vous déplacer d'une zone à une autre\n\nCependant, en extérieur vous mettrez deux minutes pour vous déplacer d'une zone à une autre\n\nA savoir que pour passer de la zone '1 KM' à '10 KM' par exemple, il faudra passer par la zone '2 KM' puis '3 KM' puis '4 KM' etc, en oubliant pas qu'il faudra deux minutes pour passer d'une zone à une autre\n\nPour les personnes atteintes de l'état 'Fatigue', les déplacements en ville comme en extérieur demandera cinq minutes\n\nEn extérieur, lorsque vous passez d'une zone à une autre, vous devrez faire : `=Bruit : [KM]`\n\nPar exemple vous passez de la zone 1 KM à 2 KM, vous devrez faire : `=Bruit : 2`")    .setTimestamp()
                      message.channel.send({embed})
                      }
                      }) ;

bot.on('message', message => {
  if (message.content === prefix + "Horde contexte") {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Contexte du RP :" , "L'apocalypse du monde est enfin venus, un virus qui se répand et transforme les gens en zombie ainsi que le chaos sur terre la transformant en un désert géant...\n\nVous êtes un des survivants ayant réussis à trouver refuge dans cette ville proche mais c'est loin d'être facile, la partie ne fait que commencer...\n\nCombien de temps allez vous réussir à survivre avant de finir dévoré jusqu'aux os ?")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

bot.on('message', message => {
  if (message.content === prefix + "Fouille") {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("La fouille :" , "Dans ce monde, pour survivre l'objectif est de collecter un maximum de ressources et de s'en servir !\n\nCependant, pour trouver des objets, il faudra sortir de la ville et se rendre à l'extérieur pour trouver ces fameuses ressources !\n\nPlus vous irez loin de la ville, plus les ressources seront rares mais plus la présence de zombie sera importante alors... bonne chance...\n\nPour effectuer une fouille selon la distance :\n\n`=Fouille zone [chiffre] KM`\n\nFouiller coûte 1 PA alors gérer bien vos 6 PA quotidien\n\nA savoir que, lorsque votre survivant découvre un bâtiment il pourra revenir autant de fois qu'il veux étant donné qu'il connaîtra le chemin !\n\n:warning: Votre survivant doit obligatoirement avoir une raison de trouver un bâtiment, que ce soit une annonce à l'auberge, un survivant vous montrant le chemin, ou lorsque vous fouillez etc...")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;




bot.on('message', message => {
  if (message.content === prefix + "Horde états") {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Les états, partie 1 :" , "Parfois, ou suite à un évènement, vous aurez un état négatif ou positif\n\nCertains états ne sont que temporaires et ne nécessite aucunes interventions ou objets, mais certains en demanderont obligatoirement avant que sa n'empire jusqu'à une mort certaine...\n\nLes survivants possédant le métier de 'médecin' auront un bonus pour soigner et enlever un état en particulier, cependant il faudra obligatoirement qu'il se trouve au cabinet médical\n\nCertains états devront être jouer RP...\n\nVoici la liste des états :\n\n`Nausée` : Vous avez envie de vomir, aucun appétit, et vous êtes assez pâle [Double de points d'actions pour les actions en ville]\n\n`Fièvre` : Les efforts vous demande encore plus d'énergie que d'habitude, vous sentez votre front très chaud au bord de l'explosion [Double points d'actions pour les actions à l'extérieur de la ville]\n\nSuite : `=Horde états 2`")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

  bot.on('message', message => {
    if (message.content === prefix + "Horde états 2") {
      const embed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
  .addField("Les états, partie 2 :" , "`Tremblements` : La peur n'est pas présente, vous avez juste des tremblements inhabituelles rendant vos phrases plus difficiles à comprendre\n\n`Perte d'équilibre` : Même sans vertiges, vous sentez en permanence une sensation de tomber sur le sol à tel point que marcher est un effort énorme [Double de temps à mettre pour les déplacements]\n\n`Douleurs gastriques` : L'envie de vomir constamment, rien que de penser à un bout de steak est assez pour vous faire vomir [Impossible de manger quoi que ce soit]\n\n`Migraine` : Réfléchir vous fait mal à la tête, vous n'arrivez même plus à vous concentrer à quoi que ce soit [Impossible de faire une action demandant un point d'action]\n\n`Insomnie` : Vous n'arrivez pas à dormir assez, et vous aurez toujours l'état 'Fatigue' jusqu'à que vous n'ayez plus ces insomnies\n\nSuite : `=Horde états 3`")    .setTimestamp()
      message.channel.send({embed})
          }
    }) ;

    bot.on('message', message => {
      if (message.content === prefix + "Horde états 3") {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .addField("Les états, partie 3 :" , "`Fatigue` : Si vous dormez moins de 4 H par jour, votre énergie sera faible et la moindre action sera un effort immense [Double points d'actions pour toutes actions en ville comme en extérieur]\n\n`Drogué` : Vous êtes sous drogue, vous ne pourrez pas reprendre de drogue avant le lendemain\n\n`Dépendance` : L'abus de drogue vous mène à la dépendance, si vous ne prenez pas de drogue pendant un jour vous aurez l'état 'Hallucinations', si vous ne prenez pas de drogue pendant deux jours vous aurez l'état 'Folie' et si vous ne prenez pas de drogue pendant trois jours vous... mourrez...\n\n`Hallucinations` : Des ombres ou même des zombies imaginaires, vous voyez des choses iréelles\n\n`Folie` : Vous dites et faites n'importe quoi en permanence à tel point que vous avez des hallucinations en permanence et que vous êtes presque un danger pour les autres survivants [Impossible de faire une action demandant un point d'action]\n\nLa suite : `=Horde états 4`")    .setTimestamp()
        message.channel.send({embed})
            }
      }) ;

       bot.on('message', message => {
        if (message.content === prefix + "Horde états 4") {
        const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .addField("Les états, partie 4 :" , "`Terreur` : La vision d'un zombie vous effraie tellement que vous ne vous défendrez pas, vous essayerez toujours de fuir [Fuite seulement autorisé durant les combats]\n\n`Rassasiement` : Vous avez mangé, vous ne pourrez pas manger de nouveau avant le lendemain\n\n`Faim` > `Très faim` > `Affamé` : Après l'état 'Rassasiement', le lendemain vous aurez l'état 'Faim', si vous ne mangez pas le lendemain vous aurez l'état 'Très faim', si vous ne mangez pas le lendemain vous aurez l'état 'Affamé' et si vous ne mangez toujours pas le lendemain vous... mourrez...\n\n`Hydratation` : Vous avez déjà bus, vous ne pourrez pas boire de nouveau avant le lendemain\n\n`Soif` > `Très soif` > `Assoifé` : Après l'état 'Hydratation', le lendemain vous aurez l'état 'Soif', si vous ne buvez pas le lendemain vous aurez l'état 'Très soif', si vous ne buvez pas le lendemain vous aurez l'état 'Assoifé' et si vous ne buvez toujours pas le lendemain vous... mourrez...\n\nLa suite : `=Horde états 5`")    .setTimestamp()
        message.channel.send({embed})
            }
      }) ;

      bot.on('message', message => {
        if (message.content === prefix + "Horde états 5") {
          const embed = new Discord.RichEmbed()
          .setColor(0xff0000)
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .addField("Les états, partie 5 :" , "`Hémorragie légère` : Vous avez était blessé et vous saignez de cette blessure qui ne semble pas être à prendre à la légère\n\n`Hémorragie` > `Hémorragie avancée` > `Hémorragie mortelle` : Après l'état 'Hémorragie légère', le lendemain vous aurez l'état 'Hémorragie', si vous n'êtes pas soigné le lendemain vous aurez l'état 'Hémorragie avancée', si vous n'êtes pas soigné le lendemain vous aurez l'état 'Hémorragie mortelle' et si vous n'êtes toujours pas soigné le lendemain vous... mourrez...\n\n`Infection légère` : Vous avez manger de la viande périmé ou vous avez étais mordus par un zombie, il faudra vous soigner rapidement\n\n`Infection` > `Infection avancée` > `Infection mortelle` : Après l'état 'Infection légère', le lendemain vous aurez l'état 'Infection', si vous n'êtes pas soigné le lendemain vous aurez l'état 'Infection avancée', si vous n'êtes pas soigné le lendemain vous aurez l'état 'Infection mortelle' et si vous n'êtes toujours pas soigné le lendemain vous... mourrez...\n\nLa suite : `=Horde états 6`")    .setTimestamp()
          message.channel.send({embed})
              }
        }) ;

        bot.on('message', message => {
          if (message.content === prefix + "Horde états 6") {
            const embed = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
        .addField("Les états, partie 6 :" , "`Blessure légère` : Vous avez étais blessé par un zombie ou par un autre survivant ou d'autres évènements, il faudra vous soignez rapidement\n\n`Blessure` > `Blessure avancée` > `Blessure mortelle` : Les différentes états de blessures sont croissants, si vous étiez atteint de l'état 'Blessure' et que vous subissez un état de nouveau 'Blessure légère' alors votre nouvelle état sera 'Blessure avancée', si vous ne comprenez pas alors imaginez que vous avez 5/5 HP, qu'une blessure légère retire 1 HP, une blessure 2 HP, une blessure avancée 3 HP et une blessure mortelle 4 HP avant la mort quand vous êtes à 0/5 HP\n\n`Goule` : Vous avez manger de la viande humaine ou alors pris une substance, la seul nourriture maintenant possible est la viande humaine... vous devrez dévorer un humain une fois chaque jour avant le lendemain, sinon vous ...mourrez...\n\n`Ivresse` : Après avoir pris de l'alcool, vous ne pourrez plus en boire avant le lendemain, vous êtes ivre\n\nLa suite : `=Horde états 7`")    .setTimestamp()
            message.channel.send({embed})
                }
          }) ;

          bot.on('message', message => {
            if (message.content === prefix + "Horde états 7") {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Les états, partie 7 :" , "Les états de blessures, d'hémorragies et d'infections se cumulent, voici des exemples pour mieux comprendre :\n\n`Blessure légère` + `Blessure légère` = `Blessure`\n\n`Blessure` + `Blessure légère` = `Blessure avancée`\n\n`Blessure avancée` + `Blessure légère` = `Blessure mortelle`\n\n`Blessure mortelle` + `Blessure légère` = `Mort`\n\n\n`Blessure` + `Blessure` = `Blessure mortelle`\n\n`Blessure` + `Blessure avancée` = `Mort`\n\n`Infection légère` + `Infection légère` = `Infection`\n\n`Infection` + `Infection légère` = `Infection avancée`\n\n`Infection avancée` + `Infection légère` = `Infection mortelle`\n\n`Infection mortelle` + `Infection légère` = `Mort`\n\n`Infection` + `Infection` = `Infection mortelle`\n\n`Hémorragie légère` + `Hémorragie légère` = `Hémorragie`\n\n`Hémorragie` + `Hémorragie légère` = `Hémorragie avancée`\n\n`Hémorragie avancée` + `Hémorragie légère` = `Hémorragie mortelle`\n\n`Hémorragie mortelle` + `Hémorragie légère` = `Mort`\n\nLa suite : `=Horde états 8`")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;

            bot.on('message', message => {
            if (message.content === prefix + "Horde états 8") {
              const embed = new Discord.RichEmbed()
              .setColor(0xff0000)
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
          .addField("Les états, partie 8 :" , "Comme dis au début, vous devrez jouer les états de manière RP\n\nLorsque vous avez une blessure, vous devrez jouer la douleur tous de même en fonction de la gravité de votre blessure\n\nLorsque vous avez une infection, jouez le fait que vous devenez pâle, que vous toussez voir cracher du sang\n\nConcernant les hémorragies, comparé à l'infection qui s'aggrave de jour en jour, l'hémorragie ne s'aggrave au fil du temps mais si elles sont cumulés, mais vous aurez un certain avant de soigner votre hémorragie avant de mourir...\n\nVoici les différents temps selon l'hémorragie :\n\n`Hémorragie` : Vous avez 24 H pour soigner cette hémorragie avant la mort...\n\n`Hémorragie avancée` : Vous avez 12 H pour soigner cette hémorragie avant la mort...\n\n`Hémorragie mortelle` : Vous avez 6 H pour soigner cette hémorragie avant la mort...")    .setTimestamp()
              message.channel.send({embed})
                  }
            }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Médicaments")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Les médicaments :" , "Une fois atteint d'un état, vous devrez certainement prendre des médicaments adaptés voir une drogue qui pourrait sûrement aider\n\nAttention, si vous prenez un mauvais médicament, vous pourrez avoir des effets négatifs encore pire...")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Soif")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("L'eau :" , "Comme toute apocalypse, l'eau devient une ressource assez rare à trouver et à consommer, c'est pour cela qu'il faudra en prendre en temps voulus pour ne pas en gâcher !\n\nSi vous ne buvez pas, vous serez de plus en plus assoifé et vous finirez par mourir de soif\n\nPour mieux comprendre : `=Horde états 4`")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Nourriture")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("La nourriture :" , "Comme l'eau, la nourriture deviendra une ressource assez rare qui demande d'être économiser le plus possible !\n\nSi vous ne mangez pas, vous serez de plus en plus affamé et vous finirez par mourir de faim...\n\nPour mieux comprendre : `=Horde états 4`")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Blessure")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Les blessures :" , "Durant votre survie, il sera très fréquent de finir blessé et il existe différents types de blessures :\n\n`Blessure légère`\n`Blessure`\n`Blessure avancée`\n`Blessure mortelle`\n\nLes blessures provoquent des malus pour fuir, et plus vous vous rapprochez d'une blessure mortelle, plus vous aurez de chance d'y rester...\n\nLes blessures se cumulent, pour comprendre cela : `=Horde états 7`\n\nLes blessures se soignent à l'aide de bandage, de médicaments, d'injections et d'un tas d'autres moyens probables et possibles...")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;


bot.on('message', message => {
  if (message.content.startsWith(prefix + "Atouts")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Les atouts:" , "Votre personnage possèdera un atout ou plusieurs, permettant d'avoir des avantages ou de pouvoir faire des choses que les autres ne pourront pas forcément faire !")    .setTimestamp()
 .addField("Liste des atouts 1 :" , "Voici la liste des atouts disponibles :\n\nMédecin : Permet de pouvoir soigner les gens, de les amputer ainsi que de leur donner les bon médicaments !\n\nVeilleur : Il possède le double de HP d'un simple citoyen !\n\nCollecteur : Collecte le double de matières premières à l'extérieur !\n\nOuvrier : Créer et transforme plus vite les ressources !\n\nAlcoolique : Quand il boit de l'alcool, il n'est pas bourré et ne ressent pas les effets négatifs !\n\nProtecteur : Il possède le double de dégâts avec des armes !\n\nCuisinier : Permet de pouvoir cuisiner des plats !\n\nBrigand : Possède beaucoup plus de chance d'intimider quelqu'un !\n\nVoleur : Possède beaucoup moins de chance de se faire voir pendant un vol !\n\nRésistant : Possède beaucoup plus de chances de ne pas se transformer en zombie suite à une infection !\n\nNaturaliste : Possède plus de chance de survivre en extérieur la nuit qu'un citoyen normal !")
 .addField("Liste des atouts 2 :" , "Architecte : Permet d'avoir le double de points de défense dans sa maison !\n\nCannibale : Permet de pouvoir dévorer un humain, ou son cadavre pour reprendre de la vie !\n\nObservateur : Permet d'avoir plus de chance de fuite en extérieur face à des zombies !\n\nErmite : Trouve plus facilement de l'eau et de la nourriture en dehors !\n\nBricoleur : Permet d'ouvrir les portes des bâtiments abandonnés !\n\nJardinier : Permet de s'occuper des plantes et de l'agriculture du jardin en ville !\n\nMineur : double les matières qu'il récupére à la mine")
    message.channel.send({embed})
        }
  }) ;
///////////////////////////////////////////////////////////Observation/////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  const X = (Math.floor((2)*Math.random()+1))
  if (message.content.startsWith(prefix + "Observation")) {
    if(A < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Observation :" , "Vous essayez de vous concentrer sur là où vous êtes en train de regarder mais vous ne trouvez rien de suspect ou d'étrange...")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 61){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Observation :" , "En vous concentrant, vous arrivez à bien voir la scène depuis la tour et vous voyez ou non s'il y a des survivants en danger ou des zombies qui rôdent !")
      .setTimestamp()
      message.channel.send({embed})}
                }
            }) ;



//////////////////////////////////////////////////////////////Vol Horde//////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content.startsWith(prefix + "Vol")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
.addField("Le vol :" , "Il est possible de voler discrètement un survivant ou sa maison si elle n'est pas fermé à clef ou même la banque, cependant cela est considéré comme un crime et pourra mener à un exile si cela est fréquent et que les joueurs votent !\n\nPour tenter de voler un survivant : `=Voler le survivant`\nPour tenter de voler un survivant avec l'atout 'Voleur' : `=Voler le survivant [Voleur]`\n\nUn survivant peux vous surprendre en train de voler, tous se joue en fonction du roll, celui qui fait le meilleur score !")    .setTimestamp()
    message.channel.send({embed})
        }
  }) ;




bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  const X = (Math.floor((2)*Math.random()+1))
  if (message.content.startsWith(prefix + "Voler le survivant")) {
    if(A < 40){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Voler le survivant :" , "Vous ne réussissez pas à voler le survivant, de plus il vous voit en train d'essayer de le voler...")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 41 & A < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Voler le survivant :" , "Vous ne réussissez pas à voler le survivant, mais par chance il ne remarque absolument rien !")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
      if(A > 21){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField("Voler le survivant :" , "Vous réussisez à voler le survivant, et plus exactement vous arrivez à lui voler `" +X+ "` objets de son inventaire !\n\nLes objets obtenus sont aléatoires et non choisis [Jouez cela au roll]")
        .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
        .setTimestamp()
        message.channel.send({embed})}
                }
            }) ;

            bot.on('message', message => {
              const A = (Math.floor((100)*Math.random()))
              const X = (Math.floor((3)*Math.random()+1))
              if (message.content.startsWith(prefix + "Voler le survivant [Voleur]")) {
                if(A < 20){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField("Voler le survivant :" , "Vous ne réussissez pas à voler le survivant, de plus il vous voit en train d'essayer de le voler...")
                  .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                  .setTimestamp()
                  message.channel.send({embed})}
                if(A > 21 & A < 40){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField("Voler le survivant :" , "Vous ne réussissez pas à voler le survivant, mais par chance il ne remarque absolument rien !")
                  .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(A > 41){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Voler le survivant :" , "Vous réussisez à voler le survivant, et plus exactement vous arrivez à lui voler `" +X+ "` objets de son inventaire !\n\nLes objets obtenus sont aléatoires et non choisis [Jouez cela au roll]")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                    message.channel.send({embed})}
                            }
                        }) ;


/////////////////////////////////////////////////////////////Dernier espoir///////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  const X = (Math.floor((2)*Math.random()+1))
  if (message.content.startsWith(prefix + "Dernier espoir")) {
    if(A < 80){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Dernier espoir :" , "Trop blessé et complètement vide d'énergie, vous finissez par vous faire complètement dévoré vivant en voyant même vos propres organes à travers votre ventre complètement arraché...\n\nVous avez au moins survécus pas mal de temps !")
      .setImage("http://pa1.narvii.com/6420/8885cc235ef803b7fba37806027468c409c92f99_hq.gif")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 81 & A < 90){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Dernier espoir :" , "Par chance, vous arrivez malgrè tous les zombies autour de vous à vous débattre, foutre des coups de poings et des coups de pieds partout autour de vous ce qui vous permet de fuir de justesse...\n\nCependant, vous êtes atteint de l'état `Terreur` ainsi que `Blessure mortelle`...")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
      if(A > 91){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField("Dernier espoir :" , "Dans un élan de rage et de courage, vous arrivez à repousser tous les zombies sur vous malgrè tous le sang qui coule et les blessures, en réussissant par la suite à vous enfuir de toute la horde !\n\nCependant, vous êtes atteint de l'état `Blessure mortelle`...")
        .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
        .setTimestamp()
        message.channel.send({embed})}
                }
            }) ;


///////////////////////////////////////////////////////////////Attaque d'un zombie////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Zombies attaque")) {
    let ZZ = args.slice(2).join(" : ");
    const Z = ZZ*2
    const A = (Math.floor((100)*Math.random()+Z))
    const X = (Math.floor((Z/10)*Math.random()+1))
    const Survivants = (Math.floor((ZZ/6)*Math.random()+1))
    if(A < 30-Z){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: En essayant de courir vers vous, les zombies trébuchent sur le sol, en prenant du temps à se relever, vous avez de la chance !\n\n:smiling_imp: les zombies n'agiront pas lors de leur prochaine action !")      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 31-Z & A < 60-Z){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Une fois proche de vous, les zombies tentent de vous aggriper mais ils sont si lents dans ses mouvements qu'il n'y parviennent pas, vous avez de la chance !")      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})}
      if(A > 61-Z & A < 70-Z){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: Lorsque les zombies arrivent à votre contact, à l'aide de ses mains et de leur bras en avant, ils aggripent votre bras et serre en y plantant leur ongles pourries...\n\n:heart: Votre état : `Blessure légère`\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie légère`")        .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
        .setTimestamp()
        message.channel.send({embed})}
        if(A > 71-Z & A < 80-Z){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: En arrivant à votre hauteur, les zombies essayent de vous aggriper mais ils tombent légèrement et attrape votre jambe en la serrant avec leur ongles tout en essayant de vous mordre mais ils n'y arrivent pas...\n\n:heart: Votre état : `Blessure légère`\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie légère`")          .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
          .setTimestamp()
          message.channel.send({embed})}
          if(A > 81-Z & A < 90-Z){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: D'une rapidité assez remarquable, les zombies arrivent à vous faire tomber sur le sol en serrant votre cou et les différentes parties du corps, en essayant de le mordre sans réussir...\n\n:heart: Votre état : `Blessure`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie légère`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")            .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
            .setTimestamp()
            message.channel.send({embed})}
            if(A > 91-Z & A < 95-Z){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: Les zombies profitent de votre bras assez exposé pour l'aggriper et le mordre de toutes leur forces avec tous le sang qui gicle d'un coup...\n\n:heart: Votre état : `Blessure`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie avancée`\n\n:nauseated_face: Infection potentielle : `=Infection légère`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")              .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
              .setTimestamp()
              message.channel.send({embed})}
                if(A > 96-Z & A < 100-Z){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: En courant vers vous, les zombies profitent de votre jambe qui se trouve en avant pour l'aggriper et la mordre de toutes leur forces avec tous le sang qui gicle d'un coup...\n\n:heart: Votre état : `Blessure`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie avancée`\n\n:nauseated_face: Infection potentielle : `=Infection légère`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")                  .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(A > 101-Z & A < 120-Z){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: Les zombies se mettent à vous courir dessus très rapidement de tous les côtés en se jetant sur vous et arrive à mordre votre cou qui pisse le sang...\n\n:heart: Votre état : `Blessure avancée`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémorragie avancée`\n\n:nauseated_face: Infection potentielle : `=Infection avancée`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(A > 121-Z & A < 140-Z){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: Dès que les zombies se trouvent à votre portée, ils entourent tous l'espace autour de vous et vous force à finir sur le sol entouré de toute part en vous faisant mordre et aggriper toutes les parties de votre corps...\n\n:heart: Votre état : `Blessure mortelle`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémoragie mortelle`\n\n:nauseated_face: Infection potentielle : `=Infection mortelle`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")                      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(A > 141-Z){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":smiling_imp: Zombies attaque :" , ":smiling_imp: Les zombies attaquent " +Survivants+ " survivants...\n\n:smiling_imp: Il y a tellement de zombies tous autour de vous qui vous entoure si rapidement en masse qu'il n'y a presque aucun espoir de vous en sortir ni de fuir, vous vous faites complètement dévoré vivant devant les autres survivants ou seul...\n\n:heart: Votre état : `Blessure mortelle`\n\n:heart_exclamation: Hémorragie potentielle : `=Hémmoragie mortelle`\n\n:nauseated_face: Infection potentielle : `=Infection mortelle`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")
                        .setTimestamp()
                        message.channel.send({embed})}
                }
            }) ;

///////////////////////////////////////////////////////////////////Aider un survivant/////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  let cont = message.content.slice(prefix.length).split(" ");
  const args = cont.slice(1);
  if (message.content.startsWith(prefix + "Aide")) {
    let XX = args.slice(1).join(" : ");
    const A = XX*5
    const X = (Math.floor((100)*Math.random()))
    if(X < 70-A){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Aide :" , "Vous tentez d'aider le survivant seul ou à plusieurs, mais c'est un échec...")
      .setTimestamp()
      message.channel.send({embed})}
      if(X > 71-A){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField("Aide :" , "Vous tentez d'aider le survivant seul ou à plusieurs, et c'est une réussite !")
        .setTimestamp()
        message.channel.send({embed})}
                }
            }) ;

////////////////////////////////////////////////////////////////Morsure et infection et hémmoragie////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  if (message.content.startsWith(prefix + "Infection légère")) {
    if(A < 20){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":nauseated_face: Infection légère :" , ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection légère`...")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 21){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":nauseated_face: Infection légère :" , ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection légère` !")
      .setTimestamp()
      message.channel.send({embed})}
                }
            }) ;

            bot.on('message', message => {
              const A = (Math.floor((100)*Math.random()))
              if (message.content.startsWith(prefix + "Infection avancée")) {
                if(A < 40){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":nauseated_face: Infection avancée :" , ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection avancée`...")
                  .setTimestamp()
                  message.channel.send({embed})}
                if(A > 41){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":nauseated_face: Infection avancée :" , ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection avancée` !")
                  .setTimestamp()
                  message.channel.send({embed})}
                            }
                        }) ;

                        bot.on('message', message => {
  const A = (Math.floor((100)*Math.random()))
  if (message.content.startsWith(prefix + "Infection mortelle")) {
    if(A < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":nauseated_face: Infection mortelle :" , ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection mortelle`...")
      .setTimestamp()
      message.channel.send({embed})}
    if(A > 61){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":nauseated_face: Infection mortelle :" , ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection mortelle` !")
      .setTimestamp()
      message.channel.send({embed})}
                }
            }) ;




            bot.on('message', message => {
              const A = (Math.floor((100)*Math.random()))
              if (message.content.startsWith(prefix + "Hémorragie légère")) {
                if(A < 30){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":heart_exclamation: Hémorragie légère :" , ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie légère`...")
                  .setTimestamp()
                  message.channel.send({embed})}
                if(A > 31){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":heart_exclamation: Hémorragie légère :" , ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie légère` !")
                  .setTimestamp()
                  message.channel.send({embed})}
                            }
                        }) ;

                        bot.on('message', message => {
                          const A = (Math.floor((100)*Math.random()))
                          if (message.content.startsWith(prefix + "Hémorragie avancée")) {
                            if(A < 50){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":heart_exclamation: Hémorragie avancée :" , ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie avancée`...")
                              .setTimestamp()
                              message.channel.send({embed})}
                            if(A > 51){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":heart_exclamation: Hémorragie avancée :" , ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie avancée` !")
                              .setTimestamp()
                              message.channel.send({embed})}
                                        }
                                    }) ;

                                    bot.on('message', message => {
              const A = (Math.floor((100)*Math.random()))
              if (message.content.startsWith(prefix + "Hémorragie mortelle")) {
                if(A < 70){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":heart_exclamation: Hémorragie mortelle :" , ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie mortelle`...")
                  .setTimestamp()
                  message.channel.send({embed})}
                if(A > 71){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":heart_exclamation: Hémorragie mortelle :" , ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie mortelle` !")
                  .setTimestamp()
                  message.channel.send({embed})}
                            }
                        }) ;


///////////////////////////////////////////////////////Roll horde////////////////////////////////////////////////////////////////////////////////////////////////////



  /////////////////////////////////////////////////////////////Les jours, Horde//////////////////////////////////////////////////////////////////////////////////////

  bot.on('message', message => {
    if (message.content === prefix + "Jour 1") {
      const Zombie = (Math.floor((16)*Math.random()+15))
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField("Attaque de zombie, jour 1 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
      .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
      .setTimestamp()
      message.channel.send({embed})
    }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Jour 2") {
    const Zombie = (Math.floor((27)*Math.random()+26))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 2 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Jour 3") {
    const Zombie = (Math.floor((46)*Math.random()+45))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 3 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 4") {
    const Zombie = (Math.floor((81)*Math.random()+80))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 4 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 5") {
    const Zombie = (Math.floor((141)*Math.random()+140))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 5 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 6") {
    const Zombie = (Math.floor((221)*Math.random()+220))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 6 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 7") {
    const Zombie = (Math.floor((321)*Math.random()+320))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 7 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 8") {
    const Zombie = (Math.floor((451)*Math.random()+450))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 8 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 9") {
    const Zombie = (Math.floor((651)*Math.random()+650))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 9 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 10") {
    const Zombie = (Math.floor((951)*Math.random()+950))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 10 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 11") {
    const Zombie = (Math.floor((1351)*Math.random()+1350))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 11 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 12") {
    const Zombie = (Math.floor((1901)*Math.random()+1900))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 12 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 13") {
    const Zombie = (Math.floor((2601)*Math.random()+2600))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 13 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 14") {
    const Zombie = (Math.floor((3401)*Math.random()+3400))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 14 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 15") {
    const Zombie = (Math.floor((4201)*Math.random()+4200))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 15 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 16") {
    const Zombie = (Math.floor((5201)*Math.random()+5200))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 16 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 17") {
    const Zombie = (Math.floor((6501)*Math.random()+6500))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 17 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 18") {
    const Zombie = (Math.floor((8001)*Math.random()+8000))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 18 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 19") {
    const Zombie = (Math.floor((10001)*Math.random()+10001))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 19 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Jour 20") {
    const Zombie = (Math.floor((13001)*Math.random()+13001))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Attaque de zombie, jour 20 :" , "Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" +Zombie+ "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

////////////////////////////////////////////////////////////////////Fouille 1 KM//////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 1 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 1 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la maison d'un citoyen\n\nIci vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons\n\nLa moitié de son corps est toujours dans le salon\n\nPour fouiller : `=Fouille maison d'un citoyen`")
      .setTimestamp()
      message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 2 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 2 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la maison d'un citoyen\n\nIci vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons\n\nLa moitié de son corps est toujours dans le salon\n\nPour fouiller : `=Fouille maison d'un citoyen`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une ambulance\n\nUne ambulance arrêtée au milieu de la route. Elle ne comporte plus de roue, ni de moteur...\n\nAucune trace de lutte, ni d'accident\n\nPourtant vous ne trouvez aucun corps non plus\n\nPour fouiller : `=Fouille ambulance`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cache de contrebandiers\n\nUn trou dans le sol vaguement dissimulé par quelques planches et du sable\n\nIl débouche sur une large caverne humide remplie de débris en tous genres, résultats de pillages dans une ville voisine, probablement\n\nQui sait si votre ville ne s'est pas construite sur ces pillages ?\n\nPeut-être que les premiers citoyens ont participé à ces attaques\n\nPour fouiller : `=Fouille cache de contrebandiers`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un camion en panne\n\nUn camion de transport du groupe soviétique Transtwinä\n\nLa cabine du conducteur est totalement encastrée dans un arbre, mais les entailles profondes dans le siège et le sang qui tapisse toutes les parois laissent supposer que l'accident n'est pas la cause de la mort\n\nPour fouiller : `=Fouille camion en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un entrepôt désaffecté\n\nL'entrepôt de stockage d'un ancien supermarché dont la porte a résisté aux tentatives de pillages\n\nIl doit sûrement contenir diverses babioles intéressantes\n\nPour fouiller : `=Fouille entrepôt désaffecté`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X < 10){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un laboratoire cosmétique\n\nCe bâtiment lugubre a servi autrefois pour divers tests de produits sur des animaux\n\nCa sent le camphre, l'ether et la charogne\n\nEt ce n'est que l'entrée\n\nPour fouiller : `=Fouille laboratoire cosmétique`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X < 10){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un petit bois obscur\n\nLes restes calcinés d'une forêt\n\nC'était probablement un endroit agréable avant...\n\nAujourd'hui, on prie juste pour ne jamais s'y perdre la nuit\n\nPour fouiller : `=Fouille petit bois obscur`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X < 10){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille zone 2 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une petite maison\n\nUne vieille bicoque laissée à l'abandon depuis des années\n\nPresque entièrement ensevelie sous le sable\n\nParfois, vous pouvez entendre des grattements inquiétants venant de ce qui doit être la cave\n\nPour fouiller : `=Fouille petite maison`")
                    .setTimestamp()
                    message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 3 KM//////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 3 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la maison d'un citoyen\n\nIci vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons\n\nLa moitié de son corps est toujours dans le salon\n\nPour fouiller : `=Fouille maison d'un citoyen`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une ambulance\n\nUne ambulance arrêtée au milieu de la route. Elle ne comporte plus de roue, ni de moteur...\n\nAucune trace de lutte, ni d'accident\n\nPourtant vous ne trouvez aucun corps non plus\n\nPour fouiller : `=Fouille ambulance`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cache de contrebandiers\n\nUn trou dans le sol vaguement dissimulé par quelques planches et du sable\n\nIl débouche sur une large caverne humide remplie de débris en tous genres, résultats de pillages dans une ville voisine, probablement\n\nQui sait si votre ville ne s'est pas construite sur ces pillages ?\n\nPeut-être que les premiers citoyens ont participé à ces attaques\n\nPour fouiller : `=Fouille cache de contrebandiers`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un camion en panne\n\nUn camion de transport du groupe soviétique Transtwinä\n\nLa cabine du conducteur est totalement encastrée dans un arbre, mais les entailles profondes dans le siège et le sang qui tapisse toutes les parois laissent supposer que l'accident n'est pas la cause de la mort\n\nPour fouiller : `=Fouille camion en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un entrepôt désaffecté\n\nL'entrepôt de stockage d'un ancien supermarché dont la porte a résisté aux tentatives de pillages\n\nIl doit sûrement contenir diverses babioles intéressantes\n\nPour fouiller : `=Fouille entrepôt désaffecté`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X < 10){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un laboratoire cosmétique\n\nCe bâtiment lugubre a servi autrefois pour divers tests de produits sur des animaux\n\nCa sent le camphre, l'ether et la charogne\n\nEt ce n'est que l'entrée\n\nPour fouiller : `=Fouille laboratoire cosmétique`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X < 10){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un petit bois obscur\n\nLes restes calcinés d'une forêt\n\nC'était probablement un endroit agréable avant...\n\nAujourd'hui, on prie juste pour ne jamais s'y perdre la nuit\n\nPour fouiller : `=Fouille petit bois obscur`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X < 10){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une petite maison\n\nUne vieille bicoque laissée à l'abandon depuis des années\n\nPresque entièrement ensevelie sous le sable\n\nParfois, vous pouvez entendre des grattements inquiétants venant de ce qui doit être la cave\n\nPour fouiller : `=Fouille petite maison`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X < 10){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des carcasses de voitures\n\nUn modèle plutôt commun de break familial encastré dans un modèle tout aussi commun de fourgonnette...\n\nCe petit accident semble avoir provoqué un carambolage de grande envergure si on en juge par l'amas de carcasses calcinées tout autour\n\nPour fouiller : `=Fouille carcasses de voitures`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X < 10){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carrière effondrée\n\nUne zone d'extraction de minéraux qui porte les stigmates d'un terrible accident : tout un flanc semble s'être effondré sur les hommes, les machines et les bâtiments\n\nPour fouiller : `=Fouille carrière effondrée`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X < 10){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un caveau familial\n\nUn caveau familial décrépi\n\nC'est à peine si on distingue encore l'entrée, presque entièrement dissimulée sous la végétation pourrissante\n\nLes cadavres, quant à eux, se sont levés et sont sortis depuis bien longtemps...\n\nPour fouiller : `=Fouille caveau familial`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X < 10){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne\n\nUne sorte de tumulus qui devait autrefois servir de sépulture ou d'abri... Allez-savoir\n\nL'intérieur est plongé dans le noir le plus total, l'air y est glacial et une odeur insupportable de charogne en émane...\n\nPour fouiller : `=Fouille caverne`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X < 10){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un cimetière indien\n\nUn ancien cimetière presque entièrement recouvert de sable et de végétation pourrissante\n\nC'est finalement un endroit plutôt rassurant en comparaison du reste du monde...\n\nPour fouiller : `=Fouille cimetière indien`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X < 10){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une école maternelle brûlée\n\nLes dessins enfantins peints sur les parois calcinées contrastent effroyablement avec les restes vaguement humains dispersés çà et là\n\nPar moment, on croirait même entendre des rires lugubres sous les décombres\n\nPour fouiller : `=Fouille école maternelle brûlée`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X < 10){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un kebab\n\nSi vous avez un petit creux, ne vous arrêtez surtout pas ici, ou c'est le cuistot lui même qui viendra vous dévorer, après vous avoir découpé à la scie circulaire\n\nPour fouiller : `=Fouille kebab`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X < 10){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parking désaffecté\n\nUn parking souterrain presque entièrement enseveli\n\nIdéal pour mourir dans le noir, sans que personne ne vous entende...\n\nPour fouiller : `=Fouille parking désaffecté`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X < 10){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une vieille pompe hydraulique\n\nUne antique pompe rongée par la rouille, capable de puiser de l'eau dans le désert...\n\nLe seul problème c'est que même si vous arrivez à la faire fonctionner, cette eau sera généralement non-potable et devra être purifiée en ville avec les produits adéquats\n\nPour fouiller : `=Fouille vieille pompe hydraulique`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille zone 3 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une villa délabrée\n\nQuelqu'un a vécu ici, il y a très longtemps\n\nPeut-être même que cette personne était entourée d'une famille qui l'aimait et qu'ils y ont coulé des jours heureux tous ensembles ?\n\nAujourd'hui il n'en reste rien ; un peu de poussière et la désolation la plus totale\n\nEt parfois même un cadavre qui marche vers vous en grinçant des dents\n\nPour fouiller : `=Fouille villa délabrée`")
                                        .setTimestamp()
                                        message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 4 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 4 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la maison d'un citoyen\n\nIci vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons\n\nLa moitié de son corps est toujours dans le salon\n\nPour fouiller : `=Fouille maison d'un citoyen`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une ambulance\n\nUne ambulance arrêtée au milieu de la route. Elle ne comporte plus de roue, ni de moteur...\n\nAucune trace de lutte, ni d'accident\n\nPourtant vous ne trouvez aucun corps non plus\n\nPour fouiller : `=Fouille ambulance`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cache de contrebandiers\n\nUn trou dans le sol vaguement dissimulé par quelques planches et du sable\n\nIl débouche sur une large caverne humide remplie de débris en tous genres, résultats de pillages dans une ville voisine, probablement\n\nQui sait si votre ville ne s'est pas construite sur ces pillages ?\n\nPeut-être que les premiers citoyens ont participé à ces attaques\n\nPour fouiller : `=Fouille cache de contrebandiers`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un camion en panne\n\nUn camion de transport du groupe soviétique Transtwinä\n\nLa cabine du conducteur est totalement encastrée dans un arbre, mais les entailles profondes dans le siège et le sang qui tapisse toutes les parois laissent supposer que l'accident n'est pas la cause de la mort\n\nPour fouiller : `=Fouille camion en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un entrepôt désaffecté\n\nL'entrepôt de stockage d'un ancien supermarché dont la porte a résisté aux tentatives de pillages\n\nIl doit sûrement contenir diverses babioles intéressantes\n\nPour fouiller : `=Fouille entrepôt désaffecté`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X < 10){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un laboratoire cosmétique\n\nCe bâtiment lugubre a servi autrefois pour divers tests de produits sur des animaux\n\nCa sent le camphre, l'ether et la charogne\n\nEt ce n'est que l'entrée\n\nPour fouiller : `=Fouille laboratoire cosmétique`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X < 10){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un petit bois obscur\n\nLes restes calcinés d'une forêt\n\nC'était probablement un endroit agréable avant...\n\nAujourd'hui, on prie juste pour ne jamais s'y perdre la nuit\n\nPour fouiller : `=Fouille petit bois obscur`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X < 10){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une petite maison\n\nUne vieille bicoque laissée à l'abandon depuis des années\n\nPresque entièrement ensevelie sous le sable\n\nParfois, vous pouvez entendre des grattements inquiétants venant de ce qui doit être la cave\n\nPour fouiller : `=Fouille petite maison`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X < 10){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des carcasses de voitures\n\nUn modèle plutôt commun de break familial encastré dans un modèle tout aussi commun de fourgonnette...\n\nCe petit accident semble avoir provoqué un carambolage de grande envergure si on en juge par l'amas de carcasses calcinées tout autour\n\nPour fouiller : `=Fouille carcasses de voitures`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X < 10){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carrière effondrée\n\nUne zone d'extraction de minéraux qui porte les stigmates d'un terrible accident : tout un flanc semble s'être effondré sur les hommes, les machines et les bâtiments\n\nPour fouiller : `=Fouille carrière effondrée`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X < 10){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un caveau familial\n\nUn caveau familial décrépi\n\nC'est à peine si on distingue encore l'entrée, presque entièrement dissimulée sous la végétation pourrissante\n\nLes cadavres, quant à eux, se sont levés et sont sortis depuis bien longtemps...\n\nPour fouiller : `=Fouille caveau familial`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X < 10){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne\n\nUne sorte de tumulus qui devait autrefois servir de sépulture ou d'abri... Allez-savoir\n\nL'intérieur est plongé dans le noir le plus total, l'air y est glacial et une odeur insupportable de charogne en émane...\n\nPour fouiller : `=Fouille caverne`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X < 10){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un cimetière indien\n\nUn ancien cimetière presque entièrement recouvert de sable et de végétation pourrissante\n\nC'est finalement un endroit plutôt rassurant en comparaison du reste du monde...\n\nPour fouiller : `=Fouille cimetière indien`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X < 10){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une école maternelle brûlée\n\nLes dessins enfantins peints sur les parois calcinées contrastent effroyablement avec les restes vaguement humains dispersés çà et là\n\nPar moment, on croirait même entendre des rires lugubres sous les décombres\n\nPour fouiller : `=Fouille école maternelle brûlée`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X < 10){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un kebab\n\nSi vous avez un petit creux, ne vous arrêtez surtout pas ici, ou c'est le cuistot lui même qui viendra vous dévorer, après vous avoir découpé à la scie circulaire\n\nPour fouiller : `=Fouille kebab`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X < 10){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parking désaffecté\n\nUn parking souterrain presque entièrement enseveli\n\nIdéal pour mourir dans le noir, sans que personne ne vous entende...\n\nPour fouiller : `=Fouille parking désaffecté`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X < 10){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une vieille pompe hydraulique\n\nUne antique pompe rongée par la rouille, capable de puiser de l'eau dans le désert...\n\nLe seul problème c'est que même si vous arrivez à la faire fonctionner, cette eau sera généralement non-potable et devra être purifiée en ville avec les produits adéquats\n\nPour fouiller : `=Fouille vieille pompe hydraulique`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une villa délabrée\n\nQuelqu'un a vécu ici, il y a très longtemps\n\nPeut-être même que cette personne était entourée d'une famille qui l'aimait et qu'ils y ont coulé des jours heureux tous ensembles ?\n\nAujourd'hui il n'en reste rien ; un peu de poussière et la désolation la plus totale\n\nEt parfois même un cadavre qui marche vers vous en grinçant des dents\n\nPour fouiller : `=Fouille villa délabrée`")
                                        .setTimestamp()
                                        message.channel.send({embed})}
                                        if(X < 10){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien velib\n\nUne ancienne gare à vélo jonchée de pièces de ferrailles, d'outils et de débris en tous genres\n\nPour fouiller : `=Fouille ancien velib`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(X < 10){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carlingue d'avion\n\nUn long courrier s'est écrasé au milieu de nulle part...\n\nDifficile de savoir ce qu'il transportait, le sable du désert l'a presque totalement rongé\n\nLa présence de quelques sièges suggère toutefois qu'il avait à son bord des passagers, entre autres\n\nAucune trace des corps...\n\nPour fouiller : `=Fouille carlingue d'avion`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(X < 10){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une chantier à l'abandon\n\nIl est impossible de déterminer ce qu'ils voulaient bâtir ici\n\nUne école, un parking, un grand magasin...\n\nSeules les structures métalliques rouillées témoignent encore du mystérieux projet qui se tramait ici\n\nPour fouiller : `=Fouille chantier à l'abandon`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                              if(X < 10){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de meubles kiela\n\nLa chaîne de magasins Kiela était autrefois spécialisée dans la fabrication et la vente de meubles bons marchés\n\nOn dit que la piètre qualité de leurs produits serait l'une des raisons qui a poussé le monde à sa perte...\n\nPour fouiller : `=Fouille magasin de meubles kiela`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
                                                if(X < 10){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(0xff0000)
                                                  .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parc à l'abandon\n\nUn lieu de recueillement et de sérénité...\n\nPour peu que vous soyez armé(e) et prêt(e) à lutter pour votre survie\n\nLa végétation locale est sinistre et sent la mort à plein nez, des créatures indéfinissables se déplacent dans les ombres...\n\nVous avez constamment la sensation qu'une saleté va vous bondir dessus depuis un fourré\n\nPour fouiller : `=Fouille parc à l'abandon`")
                                                  .setTimestamp()
                                                  message.channel.send({embed})}
                                                  if(X < 10){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                    .setColor(0xff0000)
                                                    .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une pharmacie détruite\n\nUne petite pharmacie de quartier perdue au milieu du désert\n\nLes odeurs innommables font penser à tout sauf à des médicaments\n\nPour fouiller : `=Fouille pharmacie détruite`")
                                                    .setTimestamp()
                                                    message.channel.send({embed})}
                                                    if(X < 10){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une route barrée\n\nCe qui s'est déroulé ici est assez incompréhensible : un énorme rocher semble s'être écrasé en plein milieu d'une route, comme tombé de nulle part...\n\nPour fouiller : `=Fouille route barrée`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(X < 10){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField(":flashlight: Fouille zone 4 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un supermarché pillé\n\nCe gigantesque amas de brique et de métal était probablement autrefois un grand centre commercial grouillant d'activité et illuminé de mille feux\n\nAujourd'hui il n'y grouille que de la vermine et autres immondices rampants...\n\nNul doute toutefois qu'il recèle aussi bon nombre de richesses\n\nPour fouiller : `=Fouille supermarché pillé`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}

  }
});



////////////////////////////////////////////////////////////////////Fouille 5 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 5 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la maison d'un citoyen\n\nIci vivait un Citoyen qui avait décidé de s'installer hors de la ville, pensant survivre plus longtemps, loin des querelles et des trahisons\n\nLa moitié de son corps est toujours dans le salon\n\nPour fouiller : `=Fouille maison d'un citoyen`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une ambulance\n\nUne ambulance arrêtée au milieu de la route. Elle ne comporte plus de roue, ni de moteur...\n\nAucune trace de lutte, ni d'accident\n\nPourtant vous ne trouvez aucun corps non plus\n\nPour fouiller : `=Fouille ambulance`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cache de contrebandiers\n\nUn trou dans le sol vaguement dissimulé par quelques planches et du sable\n\nIl débouche sur une large caverne humide remplie de débris en tous genres, résultats de pillages dans une ville voisine, probablement\n\nQui sait si votre ville ne s'est pas construite sur ces pillages ?\n\nPeut-être que les premiers citoyens ont participé à ces attaques\n\nPour fouiller : `=Fouille cache de contrebandiers`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un camion en panne\n\nUn camion de transport du groupe soviétique Transtwinä\n\nLa cabine du conducteur est totalement encastrée dans un arbre, mais les entailles profondes dans le siège et le sang qui tapisse toutes les parois laissent supposer que l'accident n'est pas la cause de la mort\n\nPour fouiller : `=Fouille camion en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un entrepôt désaffecté\n\nL'entrepôt de stockage d'un ancien supermarché dont la porte a résisté aux tentatives de pillages\n\nIl doit sûrement contenir diverses babioles intéressantes\n\nPour fouiller : `=Fouille entrepôt désaffecté`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X < 10){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un laboratoire cosmétique\n\nCe bâtiment lugubre a servi autrefois pour divers tests de produits sur des animaux\n\nCa sent le camphre, l'ether et la charogne\n\nEt ce n'est que l'entrée\n\nPour fouiller : `=Fouille laboratoire cosmétique`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X < 10){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un petit bois obscur\n\nLes restes calcinés d'une forêt\n\nC'était probablement un endroit agréable avant...\n\nAujourd'hui, on prie juste pour ne jamais s'y perdre la nuit\n\nPour fouiller : `=Fouille petit bois obscur`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X < 10){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une petite maison\n\nUne vieille bicoque laissée à l'abandon depuis des années\n\nPresque entièrement ensevelie sous le sable\n\nParfois, vous pouvez entendre des grattements inquiétants venant de ce qui doit être la cave\n\nPour fouiller : `=Fouille petite maison`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X < 10){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des carcasses de voitures\n\nUn modèle plutôt commun de break familial encastré dans un modèle tout aussi commun de fourgonnette...\n\nCe petit accident semble avoir provoqué un carambolage de grande envergure si on en juge par l'amas de carcasses calcinées tout autour\n\nPour fouiller : `=Fouille carcasses de voitures`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X < 10){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carrière effondrée\n\nUne zone d'extraction de minéraux qui porte les stigmates d'un terrible accident : tout un flanc semble s'être effondré sur les hommes, les machines et les bâtiments\n\nPour fouiller : `=Fouille carrière effondrée`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X < 10){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un caveau familial\n\nUn caveau familial décrépi\n\nC'est à peine si on distingue encore l'entrée, presque entièrement dissimulée sous la végétation pourrissante\n\nLes cadavres, quant à eux, se sont levés et sont sortis depuis bien longtemps...\n\nPour fouiller : `=Fouille caveau familial`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X < 10){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne\n\nUne sorte de tumulus qui devait autrefois servir de sépulture ou d'abri... Allez-savoir\n\nL'intérieur est plongé dans le noir le plus total, l'air y est glacial et une odeur insupportable de charogne en émane...\n\nPour fouiller : `=Fouille caverne`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X < 10){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un cimetière indien\n\nUn ancien cimetière presque entièrement recouvert de sable et de végétation pourrissante\n\nC'est finalement un endroit plutôt rassurant en comparaison du reste du monde...\n\nPour fouiller : `=Fouille cimetière indien`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X < 10){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une école maternelle brûlée\n\nLes dessins enfantins peints sur les parois calcinées contrastent effroyablement avec les restes vaguement humains dispersés çà et là\n\nPar moment, on croirait même entendre des rires lugubres sous les décombres\n\nPour fouiller : `=Fouille école maternelle brûlée`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X < 10){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un kebab\n\nSi vous avez un petit creux, ne vous arrêtez surtout pas ici, ou c'est le cuistot lui même qui viendra vous dévorer, après vous avoir découpé à la scie circulaire\n\nPour fouiller : `=Fouille kebab`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X < 10){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parking désaffecté\n\nUn parking souterrain presque entièrement enseveli\n\nIdéal pour mourir dans le noir, sans que personne ne vous entende...\n\nPour fouiller : `=Fouille parking désaffecté`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X < 10){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une vieille pompe hydraulique\n\nUne antique pompe rongée par la rouille, capable de puiser de l'eau dans le désert...\n\nLe seul problème c'est que même si vous arrivez à la faire fonctionner, cette eau sera généralement non-potable et devra être purifiée en ville avec les produits adéquats\n\nPour fouiller : `=Fouille vieille pompe hydraulique`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une villa délabrée\n\nQuelqu'un a vécu ici, il y a très longtemps\n\nPeut-être même que cette personne était entourée d'une famille qui l'aimait et qu'ils y ont coulé des jours heureux tous ensembles ?\n\nAujourd'hui il n'en reste rien ; un peu de poussière et la désolation la plus totale\n\nEt parfois même un cadavre qui marche vers vous en grinçant des dents\n\nPour fouiller : `=Fouille villa délabrée`")
                                        .setTimestamp()
                                        message.channel.send({embed})}
                                        if(X < 10){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien velib\n\nUne ancienne gare à vélo jonchée de pièces de ferrailles, d'outils et de débris en tous genres\n\nPour fouiller : `=Fouille ancien velib`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(X < 10){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carlingue d'avion\n\nUn long courrier s'est écrasé au milieu de nulle part...\n\nDifficile de savoir ce qu'il transportait, le sable du désert l'a presque totalement rongé\n\nLa présence de quelques sièges suggère toutefois qu'il avait à son bord des passagers, entre autres\n\nAucune trace des corps...\n\nPour fouiller : `=Fouille carlingue d'avion`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(X < 10){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une chantier à l'abandon\n\nIl est impossible de déterminer ce qu'ils voulaient bâtir ici\n\nUne école, un parking, un grand magasin...\n\nSeules les structures métalliques rouillées témoignent encore du mystérieux projet qui se tramait ici\n\nPour fouiller : `=Fouille chantier à l'abandon`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                              if(X < 10){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de meubles kiela\n\nLa chaîne de magasins Kiela était autrefois spécialisée dans la fabrication et la vente de meubles bons marchés\n\nOn dit que la piètre qualité de leurs produits serait l'une des raisons qui a poussé le monde à sa perte...\n\nPour fouiller : `=Fouille magasin de meubles kiela`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
                                                if(X < 10){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(0xff0000)
                                                  .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parc à l'abandon\n\nUn lieu de recueillement et de sérénité...\n\nPour peu que vous soyez armé(e) et prêt(e) à lutter pour votre survie\n\nLa végétation locale est sinistre et sent la mort à plein nez, des créatures indéfinissables se déplacent dans les ombres...\n\nVous avez constamment la sensation qu'une saleté va vous bondir dessus depuis un fourré\n\nPour fouiller : `=Fouille parc à l'abandon`")
                                                  .setTimestamp()
                                                  message.channel.send({embed})}
                                                  if(X < 10){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                    .setColor(0xff0000)
                                                    .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une pharmacie détruite\n\nUne petite pharmacie de quartier perdue au milieu du désert\n\nLes odeurs innommables font penser à tout sauf à des médicaments\n\nPour fouiller : `=Fouille pharmacie détruite`")
                                                    .setTimestamp()
                                                    message.channel.send({embed})}
                                                    if(X < 10){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une route barrée\n\nCe qui s'est déroulé ici est assez incompréhensible : un énorme rocher semble s'être écrasé en plein milieu d'une route, comme tombé de nulle part...\n\nPour fouiller : `=Fouille route barrée`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(X < 10){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un supermarché pillé\n\nCe gigantesque amas de brique et de métal était probablement autrefois un grand centre commercial grouillant d'activité et illuminé de mille feux\n\nAujourd'hui il n'y grouille que de la vermine et autres immondices rampants...\n\nNul doute toutefois qu'il recèle aussi bon nombre de richesses\n\nPour fouiller : `=Fouille supermarché pillé`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}
                                                        if(X < 10){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une armurerie\n\nUn filon d'armes pour qui aime bien tuer ou menacer\n\nLes crevasses, impacts de balles et décombres en disent long sur les évènements qui sont survenus ici...\n\nPour fouiller : `=Fouille armurerie`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                          if(X < 10){
                                                            const embed = new Discord.RichEmbed()
                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                            .setColor(0xff0000)
                                                            .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bar miteux\n\nCa ne ressemble plus vraiment à un bar, mais la présence d'une enseigne à demi enfouie dans le sable et d'un comptoir ne laisse pas trop planer le doute\n\nLa plupart des bouteilles sont cassées, mais on doit pouvoir y trouver des choses utiles...\n\nPour fouiller : `=Fouille bar miteux`")
                                                            .setTimestamp()
                                                            message.channel.send({embed})}
                                                            if(X < 10){
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                              .setColor(0xff0000)
                                                              .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de bricolage\n\nLe relais des bricoleurs\n\nVéritable petit paradis rempli de trésors inestimables pour un monde comme le nôtre...\n\nLeur slogan est tout à fait d'actualité: « Pillez-nous avant que d'autres ne s'en chargent pour vous ! »\n\nPour fouiller : `=Fouille magasin de bricolage`")
                                                              .setTimestamp()
                                                              message.channel.send({embed})}
                                                              if(X < 10){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                .setColor(0xff0000)
                                                                .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un stand de fête foraine\n\nUn endroit comme celui-ci est une aubaine de nos jours...\n\nNul doute que vous trouverez ici de quoi vous équiper décemment en jouets en plastique et autres gadgets utiles\n\nPour fouiller : `=Fouille stand de fête foraine`")
                                                                .setTimestamp()
                                                                message.channel.send({embed})}
                                                                if(X < 10){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField(":flashlight: Fouille zone 5 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tranchée aménagée\n\nLes nombreux cratères et autres taches de sang séché laissent à penser qu'une bataille de grande envergure s'est déroulée ici\n\nLa plupart des tranchées se sont effondrées, mais il reste quelques trous à fouiller\n\nPour fouiller : `=Fouille tranchée aménagée`")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}


  }
});

////////////////////////////////////////////////////////////////////Fouille 6 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 6 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri de chantier\n\nUn très grand container métallique posé au milieu de nulle part\n\nIl devait se trouver à côté d'un chantier, à une époque, mais il n'en reste rien aujourd'hui\n\nA part cette 'cabane'\n\nPour fouiller : `=Fouille abri de chantier`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien commissariat\n\nL'imposant bâtiment s'étend sur plusieurs centaines de mètres\n\nIl est divisé en nombreuses salles mais beaucoup se sont effondrées il y a bien longtemps\n\nSi on en croit les nombreux impacts de balles et les barricades improvisées, ce commissariat a été le théâtre d'affrontements particulièrement violents\n\nPour fouiller : `=Fouille ancien commissariat`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un café\n\nLe rendez-vous branché du désert : venez goûter notre Nuka-Cola, spécialité de la maison, aux vrais extraits d'hormones animales\n\nPour fouiller : `=Fouille café`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une bibliothèque de quartier\n\nUn ensemble de plusieurs petites maisons qui constituaient autrefois une bibliothèque de quartier\n\nAujourd'hui, les livres sont, pour la plupart, déchirés ou brûlés, le sol est jonché de pages arrachées et les étagères sont renversées\n\nPour fouiller : `=Fouille bibliothèque de quartier`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cabane de jardin\n\nAu milieu d'un petit square totalement décrépi, vous trouvez un vaste abri de jardin. La porte cède facilement, révélant une vaste pièce remplie d'étagères et d'outillages en tous genres\n\nPour fouiller : `=Fouille cabane de jardin`")
              .setTimestamp()
              message.channel.send({embed})}
                    if(X < 10){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des carcasses de voitures\n\nUn modèle plutôt commun de break familial encastré dans un modèle tout aussi commun de fourgonnette...\n\nCe petit accident semble avoir provoqué un carambolage de grande envergure si on en juge par l'amas de carcasses calcinées tout autour\n\nPour fouiller : `=Fouille carcasses de voitures`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X < 10){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carrière effondrée\n\nUne zone d'extraction de minéraux qui porte les stigmates d'un terrible accident : tout un flanc semble s'être effondré sur les hommes, les machines et les bâtiments\n\nPour fouiller : `=Fouille carrière effondrée`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X < 10){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un caveau familial\n\nUn caveau familial décrépi\n\nC'est à peine si on distingue encore l'entrée, presque entièrement dissimulée sous la végétation pourrissante\n\nLes cadavres, quant à eux, se sont levés et sont sortis depuis bien longtemps...\n\nPour fouiller : `=Fouille caveau familial`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X < 10){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne\n\nUne sorte de tumulus qui devait autrefois servir de sépulture ou d'abri... Allez-savoir\n\nL'intérieur est plongé dans le noir le plus total, l'air y est glacial et une odeur insupportable de charogne en émane...\n\nPour fouiller : `=Fouille caverne`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X < 10){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un cimetière indien\n\nUn ancien cimetière presque entièrement recouvert de sable et de végétation pourrissante\n\nC'est finalement un endroit plutôt rassurant en comparaison du reste du monde...\n\nPour fouiller : `=Fouille cimetière indien`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X < 10){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une école maternelle brûlée\n\nLes dessins enfantins peints sur les parois calcinées contrastent effroyablement avec les restes vaguement humains dispersés çà et là\n\nPar moment, on croirait même entendre des rires lugubres sous les décombres\n\nPour fouiller : `=Fouille école maternelle brûlée`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X < 10){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un kebab\n\nSi vous avez un petit creux, ne vous arrêtez surtout pas ici, ou c'est le cuistot lui même qui viendra vous dévorer, après vous avoir découpé à la scie circulaire\n\nPour fouiller : `=Fouille kebab`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X < 10){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parking désaffecté\n\nUn parking souterrain presque entièrement enseveli\n\nIdéal pour mourir dans le noir, sans que personne ne vous entende...\n\nPour fouiller : `=Fouille parking désaffecté`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X < 10){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une vieille pompe hydraulique\n\nUne antique pompe rongée par la rouille, capable de puiser de l'eau dans le désert...\n\nLe seul problème c'est que même si vous arrivez à la faire fonctionner, cette eau sera généralement non-potable et devra être purifiée en ville avec les produits adéquats\n\nPour fouiller : `=Fouille vieille pompe hydraulique`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X < 10){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une villa délabrée\n\nQuelqu'un a vécu ici, il y a très longtemps\n\nPeut-être même que cette personne était entourée d'une famille qui l'aimait et qu'ils y ont coulé des jours heureux tous ensembles ?\n\nAujourd'hui il n'en reste rien ; un peu de poussière et la désolation la plus totale\n\nEt parfois même un cadavre qui marche vers vous en grinçant des dents\n\nPour fouiller : `=Fouille villa délabrée`")
                                        .setTimestamp()
                                        message.channel.send({embed})}
                                        if(X < 10){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien velib\n\nUne ancienne gare à vélo jonchée de pièces de ferrailles, d'outils et de débris en tous genres\n\nPour fouiller : `=Fouille ancien velib`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(X < 10){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carlingue d'avion\n\nUn long courrier s'est écrasé au milieu de nulle part...\n\nDifficile de savoir ce qu'il transportait, le sable du désert l'a presque totalement rongé\n\nLa présence de quelques sièges suggère toutefois qu'il avait à son bord des passagers, entre autres\n\nAucune trace des corps...\n\nPour fouiller : `=Fouille carlingue d'avion`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(X < 10){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une chantier à l'abandon\n\nIl est impossible de déterminer ce qu'ils voulaient bâtir ici\n\nUne école, un parking, un grand magasin...\n\nSeules les structures métalliques rouillées témoignent encore du mystérieux projet qui se tramait ici\n\nPour fouiller : `=Fouille chantier à l'abandon`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                              if(X < 10){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de meubles kiela\n\nLa chaîne de magasins Kiela était autrefois spécialisée dans la fabrication et la vente de meubles bons marchés\n\nOn dit que la piètre qualité de leurs produits serait l'une des raisons qui a poussé le monde à sa perte...\n\nPour fouiller : `=Fouille magasin de meubles kiela`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
                                                if(X < 10){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(0xff0000)
                                                  .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parc à l'abandon\n\nUn lieu de recueillement et de sérénité...\n\nPour peu que vous soyez armé(e) et prêt(e) à lutter pour votre survie\n\nLa végétation locale est sinistre et sent la mort à plein nez, des créatures indéfinissables se déplacent dans les ombres...\n\nVous avez constamment la sensation qu'une saleté va vous bondir dessus depuis un fourré\n\nPour fouiller : `=Fouille parc à l'abandon`")
                                                  .setTimestamp()
                                                  message.channel.send({embed})}
                                                  if(X < 10){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                    .setColor(0xff0000)
                                                    .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une pharmacie détruite\n\nUne petite pharmacie de quartier perdue au milieu du désert\n\nLes odeurs innommables font penser à tout sauf à des médicaments\n\nPour fouiller : `=Fouille pharmacie détruite`")
                                                    .setTimestamp()
                                                    message.channel.send({embed})}
                                                    if(X < 10){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une route barrée\n\nCe qui s'est déroulé ici est assez incompréhensible : un énorme rocher semble s'être écrasé en plein milieu d'une route, comme tombé de nulle part...\n\nPour fouiller : `=Fouille route barrée`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(X < 10){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un supermarché pillé\n\nCe gigantesque amas de brique et de métal était probablement autrefois un grand centre commercial grouillant d'activité et illuminé de mille feux\n\nAujourd'hui il n'y grouille que de la vermine et autres immondices rampants...\n\nNul doute toutefois qu'il recèle aussi bon nombre de richesses\n\nPour fouiller : `=Fouille supermarché pillé`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}
                                                        if(X < 10){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une armurerie\n\nUn filon d'armes pour qui aime bien tuer ou menacer\n\nLes crevasses, impacts de balles et décombres en disent long sur les évènements qui sont survenus ici...\n\nPour fouiller : `=Fouille armurerie`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                          if(X < 10){
                                                            const embed = new Discord.RichEmbed()
                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                            .setColor(0xff0000)
                                                            .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bar miteux\n\nCa ne ressemble plus vraiment à un bar, mais la présence d'une enseigne à demi enfouie dans le sable et d'un comptoir ne laisse pas trop planer le doute\n\nLa plupart des bouteilles sont cassées, mais on doit pouvoir y trouver des choses utiles...\n\nPour fouiller : `=Fouille bar miteux`")
                                                            .setTimestamp()
                                                            message.channel.send({embed})}
                                                            if(X < 10){
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                              .setColor(0xff0000)
                                                              .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de bricolage\n\nLe relais des bricoleurs\n\nVéritable petit paradis rempli de trésors inestimables pour un monde comme le nôtre...\n\nLeur slogan est tout à fait d'actualité: « Pillez-nous avant que d'autres ne s'en chargent pour vous ! »\n\nPour fouiller : `=Fouille magasin de bricolage`")
                                                              .setTimestamp()
                                                              message.channel.send({embed})}
                                                              if(X < 10){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                .setColor(0xff0000)
                                                                .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un stand de fête foraine\n\nUn endroit comme celui-ci est une aubaine de nos jours...\n\nNul doute que vous trouverez ici de quoi vous équiper décemment en jouets en plastique et autres gadgets utiles\n\nPour fouiller : `=Fouille stand de fête foraine`")
                                                                .setTimestamp()
                                                                message.channel.send({embed})}
                                                                if(X < 10){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tranchée aménagée\n\nLes nombreux cratères et autres taches de sang séché laissent à penser qu'une bataille de grande envergure s'est déroulée ici\n\nLa plupart des tranchées se sont effondrées, mais il reste quelques trous à fouiller\n\nPour fouiller : `=Fouille tranchée aménagée`")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                  if(X < 10){
                                                                    const embed = new Discord.RichEmbed()
                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                    .setColor(0xff0000)
                                                                    .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une centrale hydraulique\n\nCette centrale capte les eaux des nappes phréatiques environnantes et les transvase dans de gigantesques réservoirs en béton\n\nLe système de filtrage semble en panne, mais on doit pouvoir récupérer l'eau contaminée stockée ici\n\nPour fouiller : `=Fouille centrale hydraulique`")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed})}
                                                                    if(X < 10){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                      .setColor(0xff0000)
                                                                      .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une épicerie\n\nUne enseigne de la chaîne de magasins Brian Fargo\n\nOn y trouve généralement tout ce qu'il faut pour nettoyer et entretenir sa maison\n\nLes plus démunis y trouveront de quoi manger...\n\nPour fouiller : `=Fouille épicerie`")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})}
                                                                      if(X < 10){
                                                                        const embed = new Discord.RichEmbed()
                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                        .setColor(0xff0000)
                                                                        .addField(":flashlight: Fouille zone 6 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un fast-food\n\nUne odeur atroce de cadavre faisandé émane de ce bâtiment : les réserves de viande se sont transformées en répugnants monticules de moisissure blanche qui ont commencé à 's'écouler' par les portes...\n\nPour fouiller : `=Fouille fast-food`")
                                                                        .setTimestamp()
                                                                        message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 7 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 7 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri de chantier\n\nUn très grand container métallique posé au milieu de nulle part\n\nIl devait se trouver à côté d'un chantier, à une époque, mais il n'en reste rien aujourd'hui\n\nA part cette 'cabane'\n\nPour fouiller : `=Fouille abri de chantier`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien commissariat\n\nL'imposant bâtiment s'étend sur plusieurs centaines de mètres\n\nIl est divisé en nombreuses salles mais beaucoup se sont effondrées il y a bien longtemps\n\nSi on en croit les nombreux impacts de balles et les barricades improvisées, ce commissariat a été le théâtre d'affrontements particulièrement violents\n\nPour fouiller : `=Fouille ancien commissariat`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un café\n\nLe rendez-vous branché du désert : venez goûter notre Nuka-Cola, spécialité de la maison, aux vrais extraits d'hormones animales\n\nPour fouiller : `=Fouille café`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une bibliothèque de quartier\n\nUn ensemble de plusieurs petites maisons qui constituaient autrefois une bibliothèque de quartier\n\nAujourd'hui, les livres sont, pour la plupart, déchirés ou brûlés, le sol est jonché de pages arrachées et les étagères sont renversées\n\nPour fouiller : `=Fouille bibliothèque de quartier`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cabane de jardin\n\nAu milieu d'un petit square totalement décrépi, vous trouvez un vaste abri de jardin. La porte cède facilement, révélant une vaste pièce remplie d'étagères et d'outillages en tous genres\n\nPour fouiller : `=Fouille cabane de jardin`")
              .setTimestamp()
              message.channel.send({embed})}
                                        if(X < 10){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien velib\n\nUne ancienne gare à vélo jonchée de pièces de ferrailles, d'outils et de débris en tous genres\n\nPour fouiller : `=Fouille ancien velib`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(X < 10){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une carlingue d'avion\n\nUn long courrier s'est écrasé au milieu de nulle part...\n\nDifficile de savoir ce qu'il transportait, le sable du désert l'a presque totalement rongé\n\nLa présence de quelques sièges suggère toutefois qu'il avait à son bord des passagers, entre autres\n\nAucune trace des corps...\n\nPour fouiller : `=Fouille carlingue d'avion`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(X < 10){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une chantier à l'abandon\n\nIl est impossible de déterminer ce qu'ils voulaient bâtir ici\n\nUne école, un parking, un grand magasin...\n\nSeules les structures métalliques rouillées témoignent encore du mystérieux projet qui se tramait ici\n\nPour fouiller : `=Fouille chantier à l'abandon`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                              if(X < 10){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de meubles kiela\n\nLa chaîne de magasins Kiela était autrefois spécialisée dans la fabrication et la vente de meubles bons marchés\n\nOn dit que la piètre qualité de leurs produits serait l'une des raisons qui a poussé le monde à sa perte...\n\nPour fouiller : `=Fouille magasin de meubles kiela`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
                                                if(X < 10){
                                                  const embed = new Discord.RichEmbed()
                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                  .setColor(0xff0000)
                                                  .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un parc à l'abandon\n\nUn lieu de recueillement et de sérénité...\n\nPour peu que vous soyez armé(e) et prêt(e) à lutter pour votre survie\n\nLa végétation locale est sinistre et sent la mort à plein nez, des créatures indéfinissables se déplacent dans les ombres...\n\nVous avez constamment la sensation qu'une saleté va vous bondir dessus depuis un fourré\n\nPour fouiller : `=Fouille parc à l'abandon`")
                                                  .setTimestamp()
                                                  message.channel.send({embed})}
                                                  if(X < 10){
                                                    const embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                    .setColor(0xff0000)
                                                    .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une pharmacie détruite\n\nUne petite pharmacie de quartier perdue au milieu du désert\n\nLes odeurs innommables font penser à tout sauf à des médicaments\n\nPour fouiller : `=Fouille pharmacie détruite`")
                                                    .setTimestamp()
                                                    message.channel.send({embed})}
                                                    if(X < 10){
                                                      const embed = new Discord.RichEmbed()
                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                      .setColor(0xff0000)
                                                      .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une route barrée\n\nCe qui s'est déroulé ici est assez incompréhensible : un énorme rocher semble s'être écrasé en plein milieu d'une route, comme tombé de nulle part...\n\nPour fouiller : `=Fouille route barrée`")
                                                      .setTimestamp()
                                                      message.channel.send({embed})}
                                                      if(X < 10){
                                                        const embed = new Discord.RichEmbed()
                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                        .setColor(0xff0000)
                                                        .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un supermarché pillé\n\nCe gigantesque amas de brique et de métal était probablement autrefois un grand centre commercial grouillant d'activité et illuminé de mille feux\n\nAujourd'hui il n'y grouille que de la vermine et autres immondices rampants...\n\nNul doute toutefois qu'il recèle aussi bon nombre de richesses\n\nPour fouiller : `=Fouille supermarché pillé`")
                                                        .setTimestamp()
                                                        message.channel.send({embed})}
                                                        if(X < 10){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une armurerie\n\nUn filon d'armes pour qui aime bien tuer ou menacer\n\nLes crevasses, impacts de balles et décombres en disent long sur les évènements qui sont survenus ici...\n\nPour fouiller : `=Fouille armurerie`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                            if(X < 10){
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                              .setColor(0xff0000)
                                                              .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de bricolage\n\nLe relais des bricoleurs\n\nVéritable petit paradis rempli de trésors inestimables pour un monde comme le nôtre...\n\nLeur slogan est tout à fait d'actualité: « Pillez-nous avant que d'autres ne s'en chargent pour vous ! »\n\nPour fouiller : `=Fouille magasin de bricolage`")
                                                              .setTimestamp()
                                                              message.channel.send({embed})}
                                                              if(X < 10){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                .setColor(0xff0000)
                                                                .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un stand de fête foraine\n\nUn endroit comme celui-ci est une aubaine de nos jours...\n\nNul doute que vous trouverez ici de quoi vous équiper décemment en jouets en plastique et autres gadgets utiles\n\nPour fouiller : `=Fouille stand de fête foraine`")
                                                                .setTimestamp()
                                                                message.channel.send({embed})}
                                                                if(X < 10){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tranchée aménagée\n\nLes nombreux cratères et autres taches de sang séché laissent à penser qu'une bataille de grande envergure s'est déroulée ici\n\nLa plupart des tranchées se sont effondrées, mais il reste quelques trous à fouiller\n\nPour fouiller : `=Fouille tranchée aménagée`")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                  if(X < 10){
                                                                    const embed = new Discord.RichEmbed()
                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                    .setColor(0xff0000)
                                                                    .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une centrale hydraulique\n\nCette centrale capte les eaux des nappes phréatiques environnantes et les transvase dans de gigantesques réservoirs en béton\n\nLe système de filtrage semble en panne, mais on doit pouvoir récupérer l'eau contaminée stockée ici\n\nPour fouiller : `=Fouille centrale hydraulique`")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed})}
                                                                    if(X < 10){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                      .setColor(0xff0000)
                                                                      .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une épicerie\n\nUne enseigne de la chaîne de magasins Brian Fargo\n\nOn y trouve généralement tout ce qu'il faut pour nettoyer et entretenir sa maison\n\nLes plus démunis y trouveront de quoi manger...\n\nPour fouiller : `=Fouille épicerie`")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})}
                                                                      if(X < 10){
                                                                        const embed = new Discord.RichEmbed()
                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                        .setColor(0xff0000)
                                                                        .addField(":flashlight: Fouille zone 7 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un fast-food\n\nUne odeur atroce de cadavre faisandé émane de ce bâtiment : les réserves de viande se sont transformées en répugnants monticules de moisissure blanche qui ont commencé à 's'écouler' par les portes...\n\nPour fouiller : `=Fouille fast-food`")
                                                                        .setTimestamp()
                                                                        message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 8 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 8 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri de chantier\n\nUn très grand container métallique posé au milieu de nulle part\n\nIl devait se trouver à côté d'un chantier, à une époque, mais il n'en reste rien aujourd'hui\n\nA part cette 'cabane'\n\nPour fouiller : `=Fouille abri de chantier`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien commissariat\n\nL'imposant bâtiment s'étend sur plusieurs centaines de mètres\n\nIl est divisé en nombreuses salles mais beaucoup se sont effondrées il y a bien longtemps\n\nSi on en croit les nombreux impacts de balles et les barricades improvisées, ce commissariat a été le théâtre d'affrontements particulièrement violents\n\nPour fouiller : `=Fouille ancien commissariat`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un café\n\nLe rendez-vous branché du désert : venez goûter notre Nuka-Cola, spécialité de la maison, aux vrais extraits d'hormones animales\n\nPour fouiller : `=Fouille café`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une bibliothèque de quartier\n\nUn ensemble de plusieurs petites maisons qui constituaient autrefois une bibliothèque de quartier\n\nAujourd'hui, les livres sont, pour la plupart, déchirés ou brûlés, le sol est jonché de pages arrachées et les étagères sont renversées\n\nPour fouiller : `=Fouille bibliothèque de quartier`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cabane de jardin\n\nAu milieu d'un petit square totalement décrépi, vous trouvez un vaste abri de jardin. La porte cède facilement, révélant une vaste pièce remplie d'étagères et d'outillages en tous genres\n\nPour fouiller : `=Fouille cabane de jardin`")
              .setTimestamp()
              message.channel.send({embed})}
                                                        if(X < 10){
                                                          const embed = new Discord.RichEmbed()
                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                          .setColor(0xff0000)
                                                          .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une armurerie\n\nUn filon d'armes pour qui aime bien tuer ou menacer\n\nLes crevasses, impacts de balles et décombres en disent long sur les évènements qui sont survenus ici...\n\nPour fouiller : `=Fouille armurerie`")
                                                          .setTimestamp()
                                                          message.channel.send({embed})}
                                                            if(X < 10){
                                                              const embed = new Discord.RichEmbed()
                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                              .setColor(0xff0000)
                                                              .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un magasin de bricolage\n\nLe relais des bricoleurs\n\nVéritable petit paradis rempli de trésors inestimables pour un monde comme le nôtre...\n\nLeur slogan est tout à fait d'actualité: « Pillez-nous avant que d'autres ne s'en chargent pour vous ! »\n\nPour fouiller : `=Fouille magasin de bricolage`")
                                                              .setTimestamp()
                                                              message.channel.send({embed})}
                                                              if(X < 10){
                                                                const embed = new Discord.RichEmbed()
                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                .setColor(0xff0000)
                                                                .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un stand de fête foraine\n\nUn endroit comme celui-ci est une aubaine de nos jours...\n\nNul doute que vous trouverez ici de quoi vous équiper décemment en jouets en plastique et autres gadgets utiles\n\nPour fouiller : `=Fouille stand de fête foraine`")
                                                                .setTimestamp()
                                                                message.channel.send({embed})}
                                                                if(X < 10){
                                                                  const embed = new Discord.RichEmbed()
                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                  .setColor(0xff0000)
                                                                  .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tranchée aménagée\n\nLes nombreux cratères et autres taches de sang séché laissent à penser qu'une bataille de grande envergure s'est déroulée ici\n\nLa plupart des tranchées se sont effondrées, mais il reste quelques trous à fouiller\n\nPour fouiller : `=Fouille tranchée aménagée`")
                                                                  .setTimestamp()
                                                                  message.channel.send({embed})}
                                                                  if(X < 10){
                                                                    const embed = new Discord.RichEmbed()
                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                    .setColor(0xff0000)
                                                                    .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une centrale hydraulique\n\nCette centrale capte les eaux des nappes phréatiques environnantes et les transvase dans de gigantesques réservoirs en béton\n\nLe système de filtrage semble en panne, mais on doit pouvoir récupérer l'eau contaminée stockée ici\n\nPour fouiller : `=Fouille centrale hydraulique`")
                                                                    .setTimestamp()
                                                                    message.channel.send({embed})}
                                                                    if(X < 10){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                      .setColor(0xff0000)
                                                                      .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une épicerie\n\nUne enseigne de la chaîne de magasins Brian Fargo\n\nOn y trouve généralement tout ce qu'il faut pour nettoyer et entretenir sa maison\n\nLes plus démunis y trouveront de quoi manger...\n\nPour fouiller : `=Fouille épicerie`")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})}
                                                                      if(X < 10){
                                                                        const embed = new Discord.RichEmbed()
                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                        .setColor(0xff0000)
                                                                        .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un fast-food\n\nUne odeur atroce de cadavre faisandé émane de ce bâtiment : les réserves de viande se sont transformées en répugnants monticules de moisissure blanche qui ont commencé à 's'écouler' par les portes...\n\nPour fouiller : `=Fouille fast-food`")
                                                                        .setTimestamp()
                                                                        message.channel.send({embed})}
                                                                        if(X < 10){
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                          .setColor(0xff0000)
                                                                          .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bureau de poste\n\nUn bâtiment qui semble avoir résisté aux affres du temps, vestige d'un antique service postal\n\nPeu de chances que vous y trouviez quoi que ce soit de grand intérêt, sauf si vous aimez la lecture...\n\nPour fouiller : `=Fouille bureau de poste`")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})}
                                                                          if(X < 10){
                                                                            const embed = new Discord.RichEmbed()
                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                            .setColor(0xff0000)
                                                                            .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un mini-market\n\nCe petit magasin proposait toutes sortes de produits de consommation courants : nourriture, boissons, produits d'entretien...\n\nOuvert 24h/24 et 7j/7 si on en croit ce qui est imprimé sur la vitrine\n\nLe trou béant dans la façade lui donne raison\n\nPour fouiller : `=Fouille mini-market`")
                                                                            .setTimestamp()
                                                                            message.channel.send({embed})}
                                                                            if(X < 10){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un relais autoroutier\n\nA une certaine époque, c'était sûrement le coin le plus branché de toute l'autoroute A217, avec ses bières frelatées, son odeur d'urine et ses rats morts sur le comptoir\n\nPersonne avant vous ne semble s'y être arrêté depuis des lustres\n\nPour fouiller : `=Fouille relais autoroutier`")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                              if(X < 10){
                                                                                const embed = new Discord.RichEmbed()
                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                .setColor(0xff0000)
                                                                                .addField(":flashlight: Fouille zone 8 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un silos à l'abandon\n\nCet endroit devait servir de stockage pour le grain\n\nMais avec le temps, les cuves ont fini par se remplir d'eau de pluie (c'était il y a bien longtemps...)\n\nIl doit y avoir de quoi s'approvisionner par ici\n\nPour fouiller : `=Fouille silos à l'abandon`")
                                                                                .setTimestamp()
                                                                                message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 9 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 9 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri de chantier\n\nUn très grand container métallique posé au milieu de nulle part\n\nIl devait se trouver à côté d'un chantier, à une époque, mais il n'en reste rien aujourd'hui\n\nA part cette 'cabane'\n\nPour fouiller : `=Fouille abri de chantier`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X < 10){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien commissariat\n\nL'imposant bâtiment s'étend sur plusieurs centaines de mètres\n\nIl est divisé en nombreuses salles mais beaucoup se sont effondrées il y a bien longtemps\n\nSi on en croit les nombreux impacts de balles et les barricades improvisées, ce commissariat a été le théâtre d'affrontements particulièrement violents\n\nPour fouiller : `=Fouille ancien commissariat`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X < 10){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un café\n\nLe rendez-vous branché du désert : venez goûter notre Nuka-Cola, spécialité de la maison, aux vrais extraits d'hormones animales\n\nPour fouiller : `=Fouille café`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X < 10){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une bibliothèque de quartier\n\nUn ensemble de plusieurs petites maisons qui constituaient autrefois une bibliothèque de quartier\n\nAujourd'hui, les livres sont, pour la plupart, déchirés ou brûlés, le sol est jonché de pages arrachées et les étagères sont renversées\n\nPour fouiller : `=Fouille bibliothèque de quartier`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X < 10){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une cabane de jardin\n\nAu milieu d'un petit square totalement décrépi, vous trouvez un vaste abri de jardin. La porte cède facilement, révélant une vaste pièce remplie d'étagères et d'outillages en tous genres\n\nPour fouiller : `=Fouille cabane de jardin`")
              .setTimestamp()
              message.channel.send({embed})}
                                                                    if(X < 10){
                                                                      const embed = new Discord.RichEmbed()
                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                      .setColor(0xff0000)
                                                                      .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une épicerie\n\nUne enseigne de la chaîne de magasins Brian Fargo\n\nOn y trouve généralement tout ce qu'il faut pour nettoyer et entretenir sa maison\n\nLes plus démunis y trouveront de quoi manger...\n\nPour fouiller : `=Fouille épicerie`")
                                                                      .setTimestamp()
                                                                      message.channel.send({embed})}
                                                                      if(X < 10){
                                                                        const embed = new Discord.RichEmbed()
                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                        .setColor(0xff0000)
                                                                        .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un fast-food\n\nUne odeur atroce de cadavre faisandé émane de ce bâtiment : les réserves de viande se sont transformées en répugnants monticules de moisissure blanche qui ont commencé à 's'écouler' par les portes...\n\nPour fouiller : `=Fouille fast-food`")
                                                                        .setTimestamp()
                                                                        message.channel.send({embed})}
                                                                        if(X < 10){
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                          .setColor(0xff0000)
                                                                          .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bureau de poste\n\nUn bâtiment qui semble avoir résisté aux affres du temps, vestige d'un antique service postal\n\nPeu de chances que vous y trouviez quoi que ce soit de grand intérêt, sauf si vous aimez la lecture...\n\nPour fouiller : `=Fouille bureau de poste`")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})}
                                                                          if(X < 10){
                                                                            const embed = new Discord.RichEmbed()
                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                            .setColor(0xff0000)
                                                                            .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un mini-market\n\nCe petit magasin proposait toutes sortes de produits de consommation courants : nourriture, boissons, produits d'entretien...\n\nOuvert 24h/24 et 7j/7 si on en croit ce qui est imprimé sur la vitrine\n\nLe trou béant dans la façade lui donne raison\n\nPour fouiller : `=Fouille mini-market`")
                                                                            .setTimestamp()
                                                                            message.channel.send({embed})}
                                                                            if(X < 10){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un relais autoroutier\n\nA une certaine époque, c'était sûrement le coin le plus branché de toute l'autoroute A217, avec ses bières frelatées, son odeur d'urine et ses rats morts sur le comptoir\n\nPersonne avant vous ne semble s'y être arrêté depuis des lustres\n\nPour fouiller : `=Fouille relais autoroutier`")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                              if(X < 10){
                                                                                const embed = new Discord.RichEmbed()
                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                .setColor(0xff0000)
                                                                                .addField(":flashlight: Fouille zone 9 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un silos à l'abandon\n\nCet endroit devait servir de stockage pour le grain\n\nMais avec le temps, les cuves ont fini par se remplir d'eau de pluie (c'était il y a bien longtemps...)\n\nIl doit y avoir de quoi s'approvisionner par ici\n\nPour fouiller : `=Fouille silos à l'abandon`")
                                                                                .setTimestamp()
                                                                                message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 10 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 10 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))


                                                                        if(X < 10){
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                          .setColor(0xff0000)
                                                                          .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bureau de poste\n\nUn bâtiment qui semble avoir résisté aux affres du temps, vestige d'un antique service postal\n\nPeu de chances que vous y trouviez quoi que ce soit de grand intérêt, sauf si vous aimez la lecture...\n\nPour fouiller : `=Fouille bureau de poste`")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})}
                                                                          if(X < 10){
                                                                            const embed = new Discord.RichEmbed()
                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                            .setColor(0xff0000)
                                                                            .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un mini-market\n\nCe petit magasin proposait toutes sortes de produits de consommation courants : nourriture, boissons, produits d'entretien...\n\nOuvert 24h/24 et 7j/7 si on en croit ce qui est imprimé sur la vitrine\n\nLe trou béant dans la façade lui donne raison\n\nPour fouiller : `=Fouille mini-market`")
                                                                            .setTimestamp()
                                                                            message.channel.send({embed})}
                                                                            if(X < 10){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un relais autoroutier\n\nA une certaine époque, c'était sûrement le coin le plus branché de toute l'autoroute A217, avec ses bières frelatées, son odeur d'urine et ses rats morts sur le comptoir\n\nPersonne avant vous ne semble s'y être arrêté depuis des lustres\n\nPour fouiller : `=Fouille relais autoroutier`")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                              if(X < 10){
                                                                                const embed = new Discord.RichEmbed()
                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                .setColor(0xff0000)
                                                                                .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un silos à l'abandon\n\nCet endroit devait servir de stockage pour le grain\n\nMais avec le temps, les cuves ont fini par se remplir d'eau de pluie (c'était il y a bien longtemps...)\n\nIl doit y avoir de quoi s'approvisionner par ici\n\nPour fouiller : `=Fouille silos à l'abandon`")
                                                                                .setTimestamp()
                                                                                message.channel.send({embed})}
                                                                                if(X < 10){
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                  .setColor(0xff0000)
                                                                                  .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri anti-atomique\n\nLe numéro est à moitié effacé, mais il s'agissait vraisemblablement de l'abri 14\n\nSi on en juge par les corps décrépis à l'intérieur, le système de fermeture du sas n'a pas dû fonctionner comme prévu, ça arrive\n\nPour fouiller : `=Fouille abri anti-atomique`")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})}
                                                                                  if(X < 10){
                                                                                    const embed = new Discord.RichEmbed()
                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                    .setColor(0xff0000)
                                                                                    .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un immeuble délabré\n\nUn bel immeuble de bureau où il devait faire bon venir travailler au petit matin, entouré de ses collègues anonymes pour accomplir on ne sait trop quel but global et avec pour seule préoccupation : sa propre survie\n\nVous vous dites que les choses n'ont peut-être finalement pas tant changé que ça...\n\nPour fouiller : `=Fouille immeuble délabré`")
                                                                                    .setTimestamp()
                                                                                    message.channel.send({embed})}
                                                                                    if(X < 10){
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                      .setColor(0xff0000)
                                                                                      .addField(":flashlight: Fouille zone 10 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une gare de triage désertée\n\nCette plaque tournante centrale du réseau ferroviaire du pays dispatchait et aiguillait les marchandises venues de tous les horizons, sans interruption, 24h/24\n\nAujourd'hui, le 'vaste réseau' en question mesure environ 150 mètres de long, si on compte les vestiges de rails, un peu plus loin\n\nPour fouiller : `=Fouille gare de triage désertée`")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})}
  }
});


////////////////////////////////////////////////////////////////////Fouille 11 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 11 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))


                                                                        if(X < 10){
                                                                          const embed = new Discord.RichEmbed()
                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                          .setColor(0xff0000)
                                                                          .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un bureau de poste\n\nUn bâtiment qui semble avoir résisté aux affres du temps, vestige d'un antique service postal\n\nPeu de chances que vous y trouviez quoi que ce soit de grand intérêt, sauf si vous aimez la lecture...\n\nPour fouiller : `=Fouille bureau de poste`")
                                                                          .setTimestamp()
                                                                          message.channel.send({embed})}
                                                                          if(X < 10){
                                                                            const embed = new Discord.RichEmbed()
                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                            .setColor(0xff0000)
                                                                            .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un mini-market\n\nCe petit magasin proposait toutes sortes de produits de consommation courants : nourriture, boissons, produits d'entretien...\n\nOuvert 24h/24 et 7j/7 si on en croit ce qui est imprimé sur la vitrine\n\nLe trou béant dans la façade lui donne raison\n\nPour fouiller : `=Fouille mini-market`")
                                                                            .setTimestamp()
                                                                            message.channel.send({embed})}
                                                                            if(X < 10){
                                                                              const embed = new Discord.RichEmbed()
                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                              .setColor(0xff0000)
                                                                              .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un relais autoroutier\n\nA une certaine époque, c'était sûrement le coin le plus branché de toute l'autoroute A217, avec ses bières frelatées, son odeur d'urine et ses rats morts sur le comptoir\n\nPersonne avant vous ne semble s'y être arrêté depuis des lustres\n\nPour fouiller : `=Fouille relais autoroutier`")
                                                                              .setTimestamp()
                                                                              message.channel.send({embed})}
                                                                              if(X < 10){
                                                                                const embed = new Discord.RichEmbed()
                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                .setColor(0xff0000)
                                                                                .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un silos à l'abandon\n\nCet endroit devait servir de stockage pour le grain\n\nMais avec le temps, les cuves ont fini par se remplir d'eau de pluie (c'était il y a bien longtemps...)\n\nIl doit y avoir de quoi s'approvisionner par ici\n\nPour fouiller : `=Fouille silos à l'abandon`")
                                                                                .setTimestamp()
                                                                                message.channel.send({embed})}
                                                                                if(X < 10){
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                  .setColor(0xff0000)
                                                                                  .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri anti-atomique\n\nLe numéro est à moitié effacé, mais il s'agissait vraisemblablement de l'abri 14\n\nSi on en juge par les corps décrépis à l'intérieur, le système de fermeture du sas n'a pas dû fonctionner comme prévu, ça arrive\n\nPour fouiller : `=Fouille abri anti-atomique`")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})}
                                                                                  if(X < 10){
                                                                                    const embed = new Discord.RichEmbed()
                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                    .setColor(0xff0000)
                                                                                    .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un immeuble délabré\n\nUn bel immeuble de bureau où il devait faire bon venir travailler au petit matin, entouré de ses collègues anonymes pour accomplir on ne sait trop quel but global et avec pour seule préoccupation : sa propre survie\n\nVous vous dites que les choses n'ont peut-être finalement pas tant changé que ça...\n\nPour fouiller : `=Fouille immeuble délabré`")
                                                                                    .setTimestamp()
                                                                                    message.channel.send({embed})}
                                                                                    if(X < 10){
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                      .setColor(0xff0000)
                                                                                      .addField(":flashlight: Fouille zone 11 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une gare de triage désertée\n\nCette plaque tournante centrale du réseau ferroviaire du pays dispatchait et aiguillait les marchandises venues de tous les horizons, sans interruption, 24h/24\n\nAujourd'hui, le 'vaste réseau' en question mesure environ 150 mètres de long, si on compte les vestiges de rails, un peu plus loin\n\nPour fouiller : `=Fouille gare de triage désertée`")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 12 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 12 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                if(X < 10){
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                  .setColor(0xff0000)
                                                                                  .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri anti-atomique\n\nLe numéro est à moitié effacé, mais il s'agissait vraisemblablement de l'abri 14\n\nSi on en juge par les corps décrépis à l'intérieur, le système de fermeture du sas n'a pas dû fonctionner comme prévu, ça arrive\n\nPour fouiller : `=Fouille abri anti-atomique`")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})}
                                                                                  if(X < 10){
                                                                                    const embed = new Discord.RichEmbed()
                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                    .setColor(0xff0000)
                                                                                    .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un immeuble délabré\n\nUn bel immeuble de bureau où il devait faire bon venir travailler au petit matin, entouré de ses collègues anonymes pour accomplir on ne sait trop quel but global et avec pour seule préoccupation : sa propre survie\n\nVous vous dites que les choses n'ont peut-être finalement pas tant changé que ça...\n\nPour fouiller : `=Fouille immeuble délabré`")
                                                                                    .setTimestamp()
                                                                                    message.channel.send({embed})}
                                                                                    if(X < 10){
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                      .setColor(0xff0000)
                                                                                      .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une gare de triage désertée\n\nCette plaque tournante centrale du réseau ferroviaire du pays dispatchait et aiguillait les marchandises venues de tous les horizons, sans interruption, 24h/24\n\nAujourd'hui, le 'vaste réseau' en question mesure environ 150 mètres de long, si on compte les vestiges de rails, un peu plus loin\n\nPour fouiller : `=Fouille gare de triage désertée`")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})}
                                                                                      if(X < 10){
                                                                                        const embed = new Discord.RichEmbed()
                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                        .setColor(0xff0000)
                                                                                        .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien aérodrome\n\nTout ce qui décolle de cet aérodrome pourrissant, ce sont les mouches\n\nPeut-être qu'en fouinant dans les entrepôts, vous parviendrez à mettre la main sur un truc utile\n\nGenre, un A360 en état de marche\n\nPour fouiller : `=Fouille ancien aérodrome`")
                                                                                        .setTimestamp()
                                                                                        message.channel.send({embed})}
                                                                                        if(X < 10){
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                          .setColor(0xff0000)
                                                                                          .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une mine effondrée\n\nUne ancienne mine qui n'a pas résisté aux outrages du temps\n\nDieu sait quel genre de lubie pouvait pousser les gens de l'époque à creuser si profond pour trouver quelque chose d'utile\n\nSurtout quand il suffit d'à peine gratter le sol pour dégoter un délicieux cafard à manger\n\n« Tiens, j'ai faim », pensez-vous\n\nPour fouiller : `=Fouille mine effondrée`")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})}
                                                                                          if(X < 10){
                                                                                            const embed = new Discord.RichEmbed()
                                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                            .setColor(0xff0000)
                                                                                            .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un motel\n\nVous vous demandez quel genre de personne pouvait bien venir passer sa nuit dans un trou aussi paumé que ce motel miteux\n\nSans doute le genre : représentant pour une obscure société de livraison fuyant un passé qui le rattrapera tôt ou tard\n\n« Faudra que je pense à vérifier la chambre 215, au cas où », pensez-vous, sans trop savoir pourquoi\n\nPour fouiller : `=Fouille motel`")
                                                                                            .setTimestamp()
                                                                                            message.channel.send({embed})}
                                                                                            if(X < 10){
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                              .setColor(0xff0000)
                                                                                              .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tente\n\nUne bonne planque, c'est certain\n\nLe type qui a monté ce camp savait comment mettre ses fesses à l'abri des zombies : camouflage naturel, bonne visibilité alentours, plusieurs issues et même un trou pour se cacher sous terre au besoin\n\nLe nom « Shenji » est brodé dans la toile de la tente\n\nPour fouiller : `=Fouille tente`")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})}
                                                                                              if(X < 10){
                                                                                                const embed = new Discord.RichEmbed()
                                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                .setColor(0xff0000)
                                                                                                .addField(":flashlight: Fouille zone 12 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la villa de Duke\n\nLa maison d'un certain « Duke » si on en croit la plaque d'entrée calcinée, ancien « Héros Pour Toujours » ...\n\nPlus qu'une villa, l'endroit semble être une vaste forteresse aménagée\n\nPour fouiller : `=Fouille villa de duke`")
                                                                                                .setTimestamp()
                                                                                                message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 13 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 13 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                if(X < 10){
                                                                                  const embed = new Discord.RichEmbed()
                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                  .setColor(0xff0000)
                                                                                  .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un abri anti-atomique\n\nLe numéro est à moitié effacé, mais il s'agissait vraisemblablement de l'abri 14\n\nSi on en juge par les corps décrépis à l'intérieur, le système de fermeture du sas n'a pas dû fonctionner comme prévu, ça arrive\n\nPour fouiller : `=Fouille abri anti-atomique`")
                                                                                  .setTimestamp()
                                                                                  message.channel.send({embed})}
                                                                                  if(X < 10){
                                                                                    const embed = new Discord.RichEmbed()
                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                    .setColor(0xff0000)
                                                                                    .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un immeuble délabré\n\nUn bel immeuble de bureau où il devait faire bon venir travailler au petit matin, entouré de ses collègues anonymes pour accomplir on ne sait trop quel but global et avec pour seule préoccupation : sa propre survie\n\nVous vous dites que les choses n'ont peut-être finalement pas tant changé que ça...\n\nPour fouiller : `=Fouille immeuble délabré`")
                                                                                    .setTimestamp()
                                                                                    message.channel.send({embed})}
                                                                                    if(X < 10){
                                                                                      const embed = new Discord.RichEmbed()
                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                      .setColor(0xff0000)
                                                                                      .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une gare de triage désertée\n\nCette plaque tournante centrale du réseau ferroviaire du pays dispatchait et aiguillait les marchandises venues de tous les horizons, sans interruption, 24h/24\n\nAujourd'hui, le 'vaste réseau' en question mesure environ 150 mètres de long, si on compte les vestiges de rails, un peu plus loin\n\nPour fouiller : `=Fouille gare de triage désertée`")
                                                                                      .setTimestamp()
                                                                                      message.channel.send({embed})}
                                                                                      if(X < 10){
                                                                                        const embed = new Discord.RichEmbed()
                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                        .setColor(0xff0000)
                                                                                        .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien aérodrome\n\nTout ce qui décolle de cet aérodrome pourrissant, ce sont les mouches\n\nPeut-être qu'en fouinant dans les entrepôts, vous parviendrez à mettre la main sur un truc utile\n\nGenre, un A360 en état de marche\n\nPour fouiller : `=Fouille ancien aérodrome`")
                                                                                        .setTimestamp()
                                                                                        message.channel.send({embed})}
                                                                                        if(X < 10){
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                          .setColor(0xff0000)
                                                                                          .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une mine effondrée\n\nUne ancienne mine qui n'a pas résisté aux outrages du temps\n\nDieu sait quel genre de lubie pouvait pousser les gens de l'époque à creuser si profond pour trouver quelque chose d'utile\n\nSurtout quand il suffit d'à peine gratter le sol pour dégoter un délicieux cafard à manger\n\n« Tiens, j'ai faim », pensez-vous\n\nPour fouiller : `=Fouille mine effondrée`")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})}
                                                                                          if(X < 10){
                                                                                            const embed = new Discord.RichEmbed()
                                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                            .setColor(0xff0000)
                                                                                            .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un motel\n\nVous vous demandez quel genre de personne pouvait bien venir passer sa nuit dans un trou aussi paumé que ce motel miteux\n\nSans doute le genre : représentant pour une obscure société de livraison fuyant un passé qui le rattrapera tôt ou tard\n\n« Faudra que je pense à vérifier la chambre 215, au cas où », pensez-vous, sans trop savoir pourquoi\n\nPour fouiller : `=Fouille motel`")
                                                                                            .setTimestamp()
                                                                                            message.channel.send({embed})}
                                                                                            if(X < 10){
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                              .setColor(0xff0000)
                                                                                              .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tente\n\nUne bonne planque, c'est certain\n\nLe type qui a monté ce camp savait comment mettre ses fesses à l'abri des zombies : camouflage naturel, bonne visibilité alentours, plusieurs issues et même un trou pour se cacher sous terre au besoin\n\nLe nom « Shenji » est brodé dans la toile de la tente\n\nPour fouiller : `=Fouille tente`")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})}
                                                                                              if(X < 10){
                                                                                                const embed = new Discord.RichEmbed()
                                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                .setColor(0xff0000)
                                                                                                .addField(":flashlight: Fouille zone 13 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la villa de Duke\n\nLa maison d'un certain « Duke » si on en croit la plaque d'entrée calcinée, ancien « Héros Pour Toujours » ...\n\nPlus qu'une villa, l'endroit semble être une vaste forteresse aménagée\n\nPour fouiller : `=Fouille villa de duke`")
                                                                                                .setTimestamp()
                                                                                                message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Fouille 14 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 14 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                      if(X < 10){
                                                                                        const embed = new Discord.RichEmbed()
                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                        .setColor(0xff0000)
                                                                                        .addField(":flashlight: Fouille zone 14 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien aérodrome\n\nTout ce qui décolle de cet aérodrome pourrissant, ce sont les mouches\n\nPeut-être qu'en fouinant dans les entrepôts, vous parviendrez à mettre la main sur un truc utile\n\nGenre, un A360 en état de marche\n\nPour fouiller : `=Fouille ancien aérodrome`")
                                                                                        .setTimestamp()
                                                                                        message.channel.send({embed})}
                                                                                        if(X < 10){
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                          .setColor(0xff0000)
                                                                                          .addField(":flashlight: Fouille zone 14 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une mine effondrée\n\nUne ancienne mine qui n'a pas résisté aux outrages du temps\n\nDieu sait quel genre de lubie pouvait pousser les gens de l'époque à creuser si profond pour trouver quelque chose d'utile\n\nSurtout quand il suffit d'à peine gratter le sol pour dégoter un délicieux cafard à manger\n\n« Tiens, j'ai faim », pensez-vous\n\nPour fouiller : `=Fouille mine effondrée`")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})}
                                                                                          if(X < 10){
                                                                                            const embed = new Discord.RichEmbed()
                                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                            .setColor(0xff0000)
                                                                                            .addField(":flashlight: Fouille zone 14 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un motel\n\nVous vous demandez quel genre de personne pouvait bien venir passer sa nuit dans un trou aussi paumé que ce motel miteux\n\nSans doute le genre : représentant pour une obscure société de livraison fuyant un passé qui le rattrapera tôt ou tard\n\n« Faudra que je pense à vérifier la chambre 215, au cas où », pensez-vous, sans trop savoir pourquoi\n\nPour fouiller : `=Fouille motel`")
                                                                                            .setTimestamp()
                                                                                            message.channel.send({embed})}
                                                                                            if(X < 10){
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                              .setColor(0xff0000)
                                                                                              .addField(":flashlight: Fouille zone 14 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tente\n\nUne bonne planque, c'est certain\n\nLe type qui a monté ce camp savait comment mettre ses fesses à l'abri des zombies : camouflage naturel, bonne visibilité alentours, plusieurs issues et même un trou pour se cacher sous terre au besoin\n\nLe nom « Shenji » est brodé dans la toile de la tente\n\nPour fouiller : `=Fouille tente`")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})}
                                                                                              if(X < 10){
                                                                                                const embed = new Discord.RichEmbed()
                                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                .setColor(0xff0000)
                                                                                                .addField(":flashlight: Fouille zone 14 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la villa de Duke\n\nLa maison d'un certain « Duke » si on en croit la plaque d'entrée calcinée, ancien « Héros Pour Toujours » ...\n\nPlus qu'une villa, l'endroit semble être une vaste forteresse aménagée\n\nPour fouiller : `=Fouille villa de duke`")
                                                                                                .setTimestamp()
                                                                                                message.channel.send({embed})}
  }
});


///////////////////////////////////////////////////////////////////Fouille 15 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 15 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                      if(X < 10){
                                                                                        const embed = new Discord.RichEmbed()
                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                        .setColor(0xff0000)
                                                                                        .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un ancien aérodrome\n\nTout ce qui décolle de cet aérodrome pourrissant, ce sont les mouches\n\nPeut-être qu'en fouinant dans les entrepôts, vous parviendrez à mettre la main sur un truc utile\n\nGenre, un A360 en état de marche\n\nPour fouiller : `=Fouille ancien aérodrome`")
                                                                                        .setTimestamp()
                                                                                        message.channel.send({embed})}
                                                                                        if(X < 10){
                                                                                          const embed = new Discord.RichEmbed()
                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                          .setColor(0xff0000)
                                                                                          .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une mine effondrée\n\nUne ancienne mine qui n'a pas résisté aux outrages du temps\n\nDieu sait quel genre de lubie pouvait pousser les gens de l'époque à creuser si profond pour trouver quelque chose d'utile\n\nSurtout quand il suffit d'à peine gratter le sol pour dégoter un délicieux cafard à manger\n\n« Tiens, j'ai faim », pensez-vous\n\nPour fouiller : `=Fouille mine effondrée`")
                                                                                          .setTimestamp()
                                                                                          message.channel.send({embed})}
                                                                                          if(X < 10){
                                                                                            const embed = new Discord.RichEmbed()
                                                                                            .setAuthor(message.author.username , message.author.avatarURL)
                                                                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                            .setColor(0xff0000)
                                                                                            .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un motel\n\nVous vous demandez quel genre de personne pouvait bien venir passer sa nuit dans un trou aussi paumé que ce motel miteux\n\nSans doute le genre : représentant pour une obscure société de livraison fuyant un passé qui le rattrapera tôt ou tard\n\n« Faudra que je pense à vérifier la chambre 215, au cas où », pensez-vous, sans trop savoir pourquoi\n\nPour fouiller : `=Fouille motel`")
                                                                                            .setTimestamp()
                                                                                            message.channel.send({embed})}
                                                                                            if(X < 10){
                                                                                              const embed = new Discord.RichEmbed()
                                                                                              .setAuthor(message.author.username , message.author.avatarURL)
                                                                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                              .setColor(0xff0000)
                                                                                              .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une tente\n\nUne bonne planque, c'est certain\n\nLe type qui a monté ce camp savait comment mettre ses fesses à l'abri des zombies : camouflage naturel, bonne visibilité alentours, plusieurs issues et même un trou pour se cacher sous terre au besoin\n\nLe nom « Shenji » est brodé dans la toile de la tente\n\nPour fouiller : `=Fouille tente`")
                                                                                              .setTimestamp()
                                                                                              message.channel.send({embed})}
                                                                                              if(X < 10){
                                                                                                const embed = new Discord.RichEmbed()
                                                                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                .setColor(0xff0000)
                                                                                                .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez la villa de Duke\n\nLa maison d'un certain « Duke » si on en croit la plaque d'entrée calcinée, ancien « Héros Pour Toujours » ...\n\nPlus qu'une villa, l'endroit semble être une vaste forteresse aménagée\n\nPour fouiller : `=Fouille villa de duke`")
                                                                                                .setTimestamp()
                                                                                                message.channel.send({embed})}
                                                                                                if(X < 10){
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                  .setColor(0xff0000)
                                                                                                  .addField(":flashlight: Fouille zone 15 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des hangers de stockage\n\nLe dépôt d'un grand magasin qui a certainement déposé son bilan il y a bien longtemps\n\nEnfin, c'est ce que laisse supposer la présence d'une trentaine de corps pendus dans le hangar numéro 2\n\nVous supposez qu'il s'agit du conseil d'administration ; reste à savoir s'il s'agit d'un suicide collectif (le fait qu'ils aient les mains attachées vous laisse perplexe)\n\nPour fouiller : `=Fouille hangars de stockage`")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})}
  }
});


///////////////////////////////////////////////////////////////////Fouille 16 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 16 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                if(X < 10){
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                  .setColor(0xff0000)
                                                                                                  .addField(":flashlight: Fouille zone 16 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des hangers de stockage\n\nLe dépôt d'un grand magasin qui a certainement déposé son bilan il y a bien longtemps\n\nEnfin, c'est ce que laisse supposer la présence d'une trentaine de corps pendus dans le hangar numéro 2\n\nVous supposez qu'il s'agit du conseil d'administration ; reste à savoir s'il s'agit d'un suicide collectif (le fait qu'ils aient les mains attachées vous laisse perplexe)\n\nPour fouiller : `=Fouille hangars de stockage`")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})}
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 16 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un avant-poste militaire\n\nHa ça, ils étaient sûrement préparés à tout, les soldats installés ici : armes, provisions et périmètre de sécurité de 150m\n\nSauf peut-être au fait que leur lieutenant comptait les dévorer pendant la nuit\n\nNon franchement, un bon mur et une bonne dictature des familles, rien de tel pour survivre ici\n\nPour fouiller : `=Fouille avant-poste militaire`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 16 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne anciennement habitée\n\nIl y a des réflexes qui ne pardonnent pas\n\nPrenez par exemple le coup de la caverne : vous êtes poursuivi(e) et vous vous engouffrez bêtement dans une caverne pour vous mettre à l'abri\n\nLe problème qui se pose alors : maintenant que vous êtes dans une impasse, combien de temps allez-vous pouvoir hurler en attendant que vos poursuivants vous rattrapent ?\n\nLe type au fond, à qui il manque la moitié du visage, n'a pas dû crier bien longtemps\n\nPour fouiller : `=Fouille caverne anciennement habitée`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 16 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un vieil hôpital de campagne\n\nLes restes qui jonchent les allées de cet hôpital improvisé devaient être des patients\n\nDifficile de savoir combien ils avaient pu être à mourir ici, le soir de l'attaque...\n\nPeut-être qu'en comptant le nombre de bras et en divisant par deux ?\n\nPour fouiller : `=Fouille vieil hôpital de campagne`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
                                                                                                        if(X < 10){
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                          .setColor(0xff0000)
                                                                                                          .addField(":flashlight: Fouille zone 16 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un puits abandonné\n\nEn voilà, une sacré aubaine ! Un puits encore en état de marche, complètement perdu au milieu de nulle part\n\nEt personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... »\n\nAllez, une petite rasade, ça sera notre petit secret\n\nPour fouiller : `=Fouille puits abandonné`")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 17 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 17 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                if(X < 10){
                                                                                                  const embed = new Discord.RichEmbed()
                                                                                                  .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                  .setColor(0xff0000)
                                                                                                  .addField(":flashlight: Fouille zone 17 KM :" , ":Flashlight: En fouillant les environs, vous découvrez des hangers de stockage\n\nLe dépôt d'un grand magasin qui a certainement déposé son bilan il y a bien longtemps\n\nEnfin, c'est ce que laisse supposer la présence d'une trentaine de corps pendus dans le hangar numéro 2\n\nVous supposez qu'il s'agit du conseil d'administration ; reste à savoir s'il s'agit d'un suicide collectif (le fait qu'ils aient les mains attachées vous laisse perplexe)\n\nPour fouiller : `=Fouille hangars de stockage`")
                                                                                                  .setTimestamp()
                                                                                                  message.channel.send({embed})}
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 17 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un avant-poste militaire\n\nHa ça, ils étaient sûrement préparés à tout, les soldats installés ici : armes, provisions et périmètre de sécurité de 150m\n\nSauf peut-être au fait que leur lieutenant comptait les dévorer pendant la nuit\n\nNon franchement, un bon mur et une bonne dictature des familles, rien de tel pour survivre ici\n\nPour fouiller : `=Fouille avant-poste militaire`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 17 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne anciennement habitée\n\nIl y a des réflexes qui ne pardonnent pas\n\nPrenez par exemple le coup de la caverne : vous êtes poursuivi(e) et vous vous engouffrez bêtement dans une caverne pour vous mettre à l'abri\n\nLe problème qui se pose alors : maintenant que vous êtes dans une impasse, combien de temps allez-vous pouvoir hurler en attendant que vos poursuivants vous rattrapent ?\n\nLe type au fond, à qui il manque la moitié du visage, n'a pas dû crier bien longtemps\n\nPour fouiller : `=Fouille caverne anciennement habitée`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 17 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un vieil hôpital de campagne\n\nLes restes qui jonchent les allées de cet hôpital improvisé devaient être des patients\n\nDifficile de savoir combien ils avaient pu être à mourir ici, le soir de l'attaque...\n\nPeut-être qu'en comptant le nombre de bras et en divisant par deux ?\n\nPour fouiller : `=Fouille vieil hôpital de campagne`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
                                                                                                        if(X < 10){
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                          .setColor(0xff0000)
                                                                                                          .addField(":flashlight: Fouille zone 17 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un puits abandonné\n\nEn voilà, une sacré aubaine ! Un puits encore en état de marche, complètement perdu au milieu de nulle part\n\nEt personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... »\n\nAllez, une petite rasade, ça sera notre petit secret\n\nPour fouiller : `=Fouille puits abandonné`")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 18 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 18 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 18 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un avant-poste militaire\n\nHa ça, ils étaient sûrement préparés à tout, les soldats installés ici : armes, provisions et périmètre de sécurité de 150m\n\nSauf peut-être au fait que leur lieutenant comptait les dévorer pendant la nuit\n\nNon franchement, un bon mur et une bonne dictature des familles, rien de tel pour survivre ici\n\nPour fouiller : `=Fouille avant-poste militaire`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 18 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne anciennement habitée\n\nIl y a des réflexes qui ne pardonnent pas\n\nPrenez par exemple le coup de la caverne : vous êtes poursuivi(e) et vous vous engouffrez bêtement dans une caverne pour vous mettre à l'abri\n\nLe problème qui se pose alors : maintenant que vous êtes dans une impasse, combien de temps allez-vous pouvoir hurler en attendant que vos poursuivants vous rattrapent ?\n\nLe type au fond, à qui il manque la moitié du visage, n'a pas dû crier bien longtemps\n\nPour fouiller : `=Fouille caverne anciennement habitée`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 18 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un vieil hôpital de campagne\n\nLes restes qui jonchent les allées de cet hôpital improvisé devaient être des patients\n\nDifficile de savoir combien ils avaient pu être à mourir ici, le soir de l'attaque...\n\nPeut-être qu'en comptant le nombre de bras et en divisant par deux ?\n\nPour fouiller : `=Fouille vieil hôpital de campagne`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
                                                                                                        if(X < 10){
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                          .setColor(0xff0000)
                                                                                                          .addField(":flashlight: Fouille zone 18 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un puits abandonné\n\nEn voilà, une sacré aubaine ! Un puits encore en état de marche, complètement perdu au milieu de nulle part\n\nEt personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... »\n\nAllez, une petite rasade, ça sera notre petit secret\n\nPour fouiller : `=Fouille puits abandonné`")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 19 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 19 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 19 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un avant-poste militaire\n\nHa ça, ils étaient sûrement préparés à tout, les soldats installés ici : armes, provisions et périmètre de sécurité de 150m\n\nSauf peut-être au fait que leur lieutenant comptait les dévorer pendant la nuit\n\nNon franchement, un bon mur et une bonne dictature des familles, rien de tel pour survivre ici\n\nPour fouiller : `=Fouille avant-poste militaire`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 19 KM :" , ":Flashlight: En fouillant les environs, vous découvrez une caverne anciennement habitée\n\nIl y a des réflexes qui ne pardonnent pas\n\nPrenez par exemple le coup de la caverne : vous êtes poursuivi(e) et vous vous engouffrez bêtement dans une caverne pour vous mettre à l'abri\n\nLe problème qui se pose alors : maintenant que vous êtes dans une impasse, combien de temps allez-vous pouvoir hurler en attendant que vos poursuivants vous rattrapent ?\n\nLe type au fond, à qui il manque la moitié du visage, n'a pas dû crier bien longtemps\n\nPour fouiller : `=Fouille caverne anciennement habitée`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 19 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un vieil hôpital de campagne\n\nLes restes qui jonchent les allées de cet hôpital improvisé devaient être des patients\n\nDifficile de savoir combien ils avaient pu être à mourir ici, le soir de l'attaque...\n\nPeut-être qu'en comptant le nombre de bras et en divisant par deux ?\n\nPour fouiller : `=Fouille vieil hôpital de campagne`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
                                                                                                        if(X < 10){
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                          .setColor(0xff0000)
                                                                                                          .addField(":flashlight: Fouille zone 19 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un puits abandonné\n\nEn voilà, une sacré aubaine ! Un puits encore en état de marche, complètement perdu au milieu de nulle part\n\nEt personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... »\n\nAllez, une petite rasade, ça sera notre petit secret\n\nPour fouiller : `=Fouille puits abandonné`")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 20 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 20 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                        if(X < 10){
                                                                                                          const embed = new Discord.RichEmbed()
                                                                                                          .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                          .setColor(0xff0000)
                                                                                                          .addField(":flashlight: Fouille zone 20 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un puits abandonné\n\nEn voilà, une sacré aubaine ! Un puits encore en état de marche, complètement perdu au milieu de nulle part\n\nEt personne avec son Registre à la main pour vous dire « fais pas ci, fais pas ça, prends pas trop d'eau, gnagnagna... »\n\nAllez, une petite rasade, ça sera notre petit secret\n\nPour fouiller : `=Fouille puits abandonné`")
                                                                                                          .setTimestamp()
                                                                                                          message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 21 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 21 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 21 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un char d'assaut en panne\n\nCe char militaire est un peu une métaphore de la boîte de conserve, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé\n\nC'est le citoyen qui a gagné\n\nPour fouiller : `=Fouille char d'assaut en panne`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 21 KM :" , ":Flashlight: En fouillant les environs, vous découvrez le bar des illusions perdues\n\nCe bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer\n\nL'intérieur est décoré d'innombrables portraits et photos en noir et blanc\n\nOn y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes\n\nPour fouiller : `=Fouille bar des illusions perdues`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 21 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un étrange appareil circulaire\n\nÇa ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage\n\nCela pourrait tout aussi bien être un genre de moissoneuse batteuse un peu high-tech\n\nPour fouiller : `=Fouille étrange appareil circulaire`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 22 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 22 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 22 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un char d'assaut en panne\n\nCe char militaire est un peu une métaphore de la boîte de conserve, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé\n\nC'est le citoyen qui a gagné\n\nPour fouiller : `=Fouille char d'assaut en panne`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 22 KM :" , ":Flashlight: En fouillant les environs, vous découvrez le bar des illusions perdues\n\nCe bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer\n\nL'intérieur est décoré d'innombrables portraits et photos en noir et blanc\n\nOn y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes\n\nPour fouiller : `=Fouille bar des illusions perdues`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 22 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un étrange appareil circulaire\n\nÇa ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage\n\nCela pourrait tout aussi bien être un genre de moissoneuse batteuse un peu high-tech\n\nPour fouiller : `=Fouille étrange appareil circulaire`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 23 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 23 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 23 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un char d'assaut en panne\n\nCe char militaire est un peu une métaphore de la boîte de conserve, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé\n\nC'est le citoyen qui a gagné\n\nPour fouiller : `=Fouille char d'assaut en panne`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 23 KM :" , ":Flashlight: En fouillant les environs, vous découvrez le bar des illusions perdues\n\nCe bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer\n\nL'intérieur est décoré d'innombrables portraits et photos en noir et blanc\n\nOn y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes\n\nPour fouiller : `=Fouille bar des illusions perdues`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 23 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un étrange appareil circulaire\n\nÇa ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage\n\nCela pourrait tout aussi bien être un genre de moissoneuse batteuse un peu high-tech\n\nPour fouiller : `=Fouille étrange appareil circulaire`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 24 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 24 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 24 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un char d'assaut en panne\n\nCe char militaire est un peu une métaphore de la boîte de conserve, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé\n\nC'est le citoyen qui a gagné\n\nPour fouiller : `=Fouille char d'assaut en panne`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 24 KM :" , ":Flashlight: En fouillant les environs, vous découvrez le bar des illusions perdues\n\nCe bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer\n\nL'intérieur est décoré d'innombrables portraits et photos en noir et blanc\n\nOn y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes\n\nPour fouiller : `=Fouille bar des illusions perdues`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 24 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un étrange appareil circulaire\n\nÇa ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage\n\nCela pourrait tout aussi bien être un genre de moissoneuse batteuse un peu high-tech\n\nPour fouiller : `=Fouille étrange appareil circulaire`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
  }
});

///////////////////////////////////////////////////////////////////Fouille 25 KM//////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('message', message => {
  if (message.content === prefix + "Fouille zone 25 KM") {
    const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
                                                                                                  if(X < 10){
                                                                                                    const embed = new Discord.RichEmbed()
                                                                                                    .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                    .setColor(0xff0000)
                                                                                                    .addField(":flashlight: Fouille zone 25 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un char d'assaut en panne\n\nCe char militaire est un peu une métaphore de la boîte de conserve, avec le soldat dans le rôle de la sardine et la centaine de zombies dans le rôle du citoyen affamé\n\nC'est le citoyen qui a gagné\n\nPour fouiller : `=Fouille char d'assaut en panne`")
                                                                                                    .setTimestamp()
                                                                                                    message.channel.send({embed})}
                                                                                                    if(X < 10){
                                                                                                      const embed = new Discord.RichEmbed()
                                                                                                      .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                      .setColor(0xff0000)
                                                                                                      .addField(":flashlight: Fouille zone 25 KM :" , ":Flashlight: En fouillant les environs, vous découvrez le bar des illusions perdues\n\nCe bar étrange se trouve caché derrière une petite colline et vous auriez tout aussi bien pu passer à côté sans le remarquer\n\nL'intérieur est décoré d'innombrables portraits et photos en noir et blanc\n\nOn y retrouve souvent un type habillé dans une sorte de pyjama rayé sur les bords, debout aux côtés de diverses personnes\n\nPour fouiller : `=Fouille bar des illusions perdues`")
                                                                                                      .setTimestamp()
                                                                                                      message.channel.send({embed})}
                                                                                                      if(X < 10){
                                                                                                        const embed = new Discord.RichEmbed()
                                                                                                        .setAuthor(message.author.username , message.author.avatarURL)
                                                                                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                                                                        .setColor(0xff0000)
                                                                                                        .addField(":flashlight: Fouille zone 25 KM :" , ":Flashlight: En fouillant les environs, vous découvrez un étrange appareil circulaire\n\nÇa ressemble à un large disque métallique surmonté de ce qui devait être un poste de pilotage\n\nCela pourrait tout aussi bien être un genre de moissoneuse batteuse un peu high-tech\n\nPour fouiller : `=Fouille étrange appareil circulaire`")
                                                                                                        .setTimestamp()
                                                                                                        message.channel.send({embed})}
  }
});

////////////////////////////////////////////////////////////////////Les lieux de fouille spéciaux//////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Fouille abris anti-atomique") {
    const X = (Math.floor((159)*Math.random()+1))
      const Zombie = (Math.floor((7)*Math.random()+4))
if(X <= 21){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Twinoïde 500MG`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 22 & X <= 39){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Balise radius`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 40 & X <= 52){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Kit de bricolage`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 53 & X <= 65){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 66 & X <= 74){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Batteur incomplet`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 75 & X <= 82){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Taser d'auto-défense (démonté)`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 83 & X <= 89){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de conserve`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 90 & X <= 96){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pompe à jerrycan (démonté)`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 97 & X <= 102){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X >= 103 & X <= 107){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Devastator (démonté)`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X >= 108 & X <= 113){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X >= 114 & X <= 117){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Composant électronique`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X >= 118 & X <= 121){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X >= 122 & X <= 124){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fusil d'assaut`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X >= 125 & X <= 126){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Taser d'auto-défense`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X >= 127 & X <= 128){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tronçonneuse (démonté)`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X === 129){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Plaque de tôle`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X === 130){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tournevis`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X === 131){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pile`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X === 132){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros coffre en métal`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X >= 133){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille abri anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                        .setTimestamp()
                                        message.channel.send({embed})}

  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille abris de chantier") {
    const X = (Math.floor((124)*Math.random()+1))
      const Zombie = (Math.floor((6)*Math.random()+3))
if(X <= 12){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tréteau`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 13 & X <= 24){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Grosse chaîne rouillée`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 25 & X <= 34){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 35 & X <= 44){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 45 & X <= 53){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poignée de vis et écrous`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 54 & X <= 61){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vieille porte`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 62 & X <= 69){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Outils en vrac`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 70 & X <= 76){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Clé à molette`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 77 & X <= 82){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Mécanisme`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X >= 83 & X <= 87){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tournevis`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X >= 88 & X <= 92){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Barricades à clouer`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X >= 93 & X <= 98){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Carton de matériaux`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X >= 99 & X <= 102){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux abîmée`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X >= 103 & X <= 105){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac de ciment`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X === 106){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Carton`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X === 107){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X === 108){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X === 109){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille abris de chantier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG (démonté)`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X >= 110){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille abris anti-atomique :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille ambulance") {
    const X = (Math.floor((26)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+1))
if(X <= 12){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Médicament sans étiquette`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 13 & X <= 17){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 18 & X <= 19){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Doggy-bag`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X === 20){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux abîmée`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 21 & X <= 23){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bandage rudimentaire`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 24){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille ambulance :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
          .setTimestamp()
          message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille ancien aérodrome") {
    const X = (Math.floor((21)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+1))
if(X <= 7){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 8 & X <= 9){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poignée de vis et écrous`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 10 & X <= 11){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
    .setTimestamp()
    message.channel.send({embed})}
     if(X >= 12 & X <= 13){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 14){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Morceau de grillage`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 15){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 16){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver (démonté)`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 17){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Twinoïde 500MG`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 18){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille ancien aérodrome :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille ancien commissariat") {
    const X = (Math.floor((224)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 18){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Kit de bricolage`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 19 & X <= 35){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Devastator (démonté)`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 36 & X <= 50){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Twinoïde 500MG`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 51 & X <= 62){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 63 & X <= 74){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Balise radius`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 75 & X <= 84){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bandage rudimentaire`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 85 & X <= 94){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros coffre en métal`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 95 & X <= 101){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau (démonté)`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 102 & X <= 104){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X >= 105 & X <= 114){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Taser d'auto-défense (démonté)`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X >= 115 & X <= 124){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Couteau à dents`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X >= 125 & X <= 134){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Aqua-splash (démonté)`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X >= 135 & X <= 142){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Détonateur compact`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X >= 143 & X <= 150){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac supplémentaire`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X >= 151 & X <= 155){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver (démonté)`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X >= 156 & X <= 158){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X >= 159 & X <= 165){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Coupe-coupe`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X >= 166 & X <= 171){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                  if(X >= 172 & X <= 177){
                                    const embed = new Discord.RichEmbed()
                                    .setAuthor(message.author.username , message.author.avatarURL)
                                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                    .setColor(0xff0000)
                                    .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac super-pratique`")
                                    .setTimestamp()
                                    message.channel.send({embed})}
                                    if(X >= 178 & X <= 182){
                                      const embed = new Discord.RichEmbed()
                                      .setAuthor(message.author.username , message.author.avatarURL)
                                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                      .setColor(0xff0000)
                                      .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bobine de fil de fer`")
                                      .setTimestamp()
                                      message.channel.send({embed})}
                                      if(X >= 183 & X <= 187){
                                        const embed = new Discord.RichEmbed()
                                        .setAuthor(message.author.username , message.author.avatarURL)
                                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                        .setColor(0xff0000)
                                        .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Matelas`")
                                        .setTimestamp()
                                        message.channel.send({embed})}
                                        if(X >= 188 & X <= 190){
                                          const embed = new Discord.RichEmbed()
                                          .setAuthor(message.author.username , message.author.avatarURL)
                                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                          .setColor(0xff0000)
                                          .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fusil d'assaut`")
                                          .setTimestamp()
                                          message.channel.send({embed})}
                                          if(X >= 191 & X <= 194){
                                            const embed = new Discord.RichEmbed()
                                            .setAuthor(message.author.username , message.author.avatarURL)
                                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                            .setColor(0xff0000)
                                            .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Taser d'auto-défense`")
                                            .setTimestamp()
                                            message.channel.send({embed})}
                                            if(X >= 195 & X <= 196){
                                              const embed = new Discord.RichEmbed()
                                              .setAuthor(message.author.username , message.author.avatarURL)
                                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                              .setColor(0xff0000)
                                              .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Aqua-splash`")
                                              .setTimestamp()
                                              message.channel.send({embed})}
                                              if(X >= 197){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille ancien commissariat :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille ancien velib") {
    const X = (Math.floor((38)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+2))
if(X <= 9){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ceinture à poches`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 10 & X <= 17){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tube de cuivre`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 18 & X <= 22){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Courroie`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 23 & X <= 27){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Radio K7 (démonté)`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 28 & X <= 30){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Radio K7`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 31 & X <= 32){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poignée de vis et écrous`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 33){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 34){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille ancien velib :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
              .setTimestamp()
              message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille armurerie") {
    const X = (Math.floor((50)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 8){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Couteau à dents`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 9 & X <= 13){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver (démonté)`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 14 & X <= 16){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 17 & X <= 21){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau (démonté)`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 22 & X <= 24){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 25 & X <= 32){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Coupe-coupe`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 33 & X <= 35){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG (démonté)`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 36 & X <= 37){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 38){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros coffre en métal`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X === 39){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Devastator`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X === 40){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Devastator (démonté)`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X === 41){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Aqua-splash (démonté)`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X === 42){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Aqua-splash`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X === 43){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Détonateur compact`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X === 44){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fusil d'assaut`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X >= 45){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X >= 45){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille armurerie :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                              .setTimestamp()
                              message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille café") {
    const X = (Math.floor((57)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 21){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ailerons de poulet entamés`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 22 & X <= 35){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 36 & X <= 41){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vodka marinostov`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 42 & X <= 45){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 'Debout-les-morts'`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 45 & X <= 48){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Stéroïdes anabolisants`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 48 & X <= 51){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 51){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille café :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
            .setTimestamp()
            message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille avant-poste militaire") {
    const X = (Math.floor((115)*Math.random()+1))
      const Zombie = (Math.floor((6)*Math.random()+5))
if(X <= 26){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 27 & X <= 40){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver (démonté)`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 41 & X <= 50){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 51 & X <= 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fusil d'assaut`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 61 & X <= 75){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Morceau de grillage`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 76 & X <= 87){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 88 & X <= 93){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bobine de fil de fer`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 94 & X <= 100){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériaux`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 101){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille avant-poste militaire :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille bar miteux") {
    const X = (Math.floor((57)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 13){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 'Debout-les-morts'`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 14 & X <= 23){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vodka marinostov`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 24 & X <= 29){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Steak appétissant`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 30 & X <= 34){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Doggy-bag")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 35 & X <= 38){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 39 & X <= 40){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille bar miteux:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Stéroïdes anabolisants`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 41 & X <= 42){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ouvre-boîte`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 43 & X <= 44){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 45){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de conserve`")
                .setTimestamp()
                message.channel.send({embed})}
                   if(X === 46){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Plaque de tôle`")
                .setTimestamp()
                message.channel.send({embed})}
              if(X >= 47){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille bar miteux :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille bibliothèque de quartier") {
    const X = (Math.floor((44)*Math.random()+1))
      const Zombie = (Math.floor((4)*Math.random()+2))
if(X <= 26){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Meuble en kit`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 27 & X <= 31){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 32 & X <= 33){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lentille convexe`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 34 & X <= 35){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Doggy-bag")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 36 & X <= 37){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
        .setTimestamp()
        message.channel.send({embed})}
              if(X >= 38){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille bibliothèque de quartier :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});



bot.on('message', message => {
  if (message.content === prefix + "Fouille magasin de bricolage") {
    const X = (Math.floor((65)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+2))
if(X <= 11){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Kit de bricolage`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 12 & X <= 18){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 19 & X <= 25){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac de ciment`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 26 & X <= 29){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 30 & X <= 32){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 33 & X <= 35){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tréteau`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 36 & X <= 38){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bobine de fil de fer`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 39 & X <= 42){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaîne de porte + cadenas`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 43 & X <= 44){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Explosifs bruts`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X >= 45 & X <= 46){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X >= 47 & X <= 48){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Couteau suisse`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X === 49){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ferraille`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X === 50){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X === 51){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux abîmée`")
                          .setTimestamp()
                          message.channel.send({embed})}
                          if(X === 52){
                            const embed = new Discord.RichEmbed()
                            .setAuthor(message.author.username , message.author.avatarURL)
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setColor(0xff0000)
                            .addField(":flashlight: Fouille magasin de bricolage:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bidon d'huile vide`")
                            .setTimestamp()
                            message.channel.send({embed})}
                            if(X === 53){
                              const embed = new Discord.RichEmbed()
                              .setAuthor(message.author.username , message.author.avatarURL)
                              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                              .setColor(0xff0000)
                              .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Kit de bricolage abîmé`")
                              .setTimestamp()
                              message.channel.send({embed})}
                              if(X === 54){
                                const embed = new Discord.RichEmbed()
                                .setAuthor(message.author.username , message.author.avatarURL)
                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                .setColor(0xff0000)
                                .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ceinture à poches`")
                                .setTimestamp()
                                message.channel.send({embed})}
                                if(X === 55){
                                  const embed = new Discord.RichEmbed()
                                  .setAuthor(message.author.username , message.author.avatarURL)
                                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                  .setColor(0xff0000)
                                  .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Brico'facile`")
                                  .setTimestamp()
                                  message.channel.send({embed})}
                                              if(X >= 56){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille magasin de bricolage :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille bureau de poste") {
    const X = (Math.floor((18)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+3))
if(X <= 9){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille bureau de poste :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Colis postal`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 10 & X <= 12){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille bureau de poste :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros colis postal`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 13 & X <= 14){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille bureau de poste :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
    .setTimestamp()
    message.channel.send({embed})}
                                              if(X >= 15){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille bureau de poste :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille cabane de jardin") {
    const X = (Math.floor((60)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 16){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille cabane de jardin :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Melon d'intestin`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 17 & X <= 30){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille cabane de jardin :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 31 & X <= 42){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 43 & X <= 45){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tondeuse à gazon (démonté)`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 46 & X <= 48){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac d'herbe fraîche`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 49 & X <= 50){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tronçonneuse (démonté)`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 51 & X <= 52){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac de ciment`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 53 & X <= 54){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Buche en bon état`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 55){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériaux`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X === 56){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Grand bâton sec`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X === 57){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille cabane de jardin:" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lance-pile 1-PDTG`")
                    .setTimestamp()
                    message.channel.send({embed})}
                                              if(X >= 58){
                                                const embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username , message.author.avatarURL)
                                                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                                                .setColor(0xff0000)
                                                .addField(":flashlight: Fouille cabane de jardin :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                                                .setTimestamp()
                                                message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille cache de contrebandiers") {
    const X = (Math.floor((34)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 10){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Affaires d'un citoyen`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 11 & X <= 18){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 19 & X <= 22){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Réserves d'un citoyen avisé`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 23 & X <= 24){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros coffre en métal`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 25 & X <= 26){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 27 & X <= 28){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Liasse de billets`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 29){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille cache de contrebandiers :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
            .setTimestamp()
            message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille camion en panne") {
    const X = (Math.floor((36)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 16){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 17 & X <= 20){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 21 & X <= 22){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 23 & X <= 24){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 'Debout-les-morts'`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 25 & X <= 26){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de jeu`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 27 & X <= 28){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 29){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragment de tôle`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 30){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 31){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille camion en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille carcasses de voitures") {
    const X = (Math.floor((26)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 12){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ferraille`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 13 & X <= 15){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tube de cuivre`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 16 & X <= 17){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 18 & X <= 19){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Brico'facile`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 20){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bidon d'huile vide`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 21){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poignée de vis et écrous`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 22){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 29){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille carcasses de voitures :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
              .setTimestamp()
              message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille carlingue d'avion") {
    const X = (Math.floor((20)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 5){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 6 & X <= 8){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 9 & X <= 10){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ferraille`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X === 11){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poignée de vis et écrous`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 12){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Moteur incomplet`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 13){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 14){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Courroie`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 15){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bobine de fil de fer`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 16){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de métal`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X >= 17){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille carlingue d'avion :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                  .setTimestamp()
                  message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille carrière effondrée") {
    const X = (Math.floor((19)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 10){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille carrière effondrée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 11 & X <= 13){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille carrière effondrée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
.setTimestamp()
message.channel.send({embed})}
if(X === 14){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille carrière effondrée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X === 15){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille carrière effondrée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 16){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille carrière effondrée :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
      .setTimestamp()
      message.channel.send({embed})}
  }
});



bot.on('message', message => {
  if (message.content === prefix + "Fouille caveau familial") {
    const X = (Math.floor((35)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+2))
if(X <= 20){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caveau familial :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 21 & X <= 24){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caveau familial :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver (démonté)`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 25 & X <= 26){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille caveau familial :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X === 27){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille caveau familial :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fusil d'assaut`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 28){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille caveau familial :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
      .setTimestamp()
      message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille caverne") {
    const X = (Math.floor((15)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 4){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 5 & X <= 7){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 8 & X <= 9){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Affaires d'un citoyen`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X === 10){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Serpent de 2 mètres`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X === 11){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 12){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Liasse de billets`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 13){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille caverne :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
          .setTimestamp()
          message.channel.send({embed})}
  }
});




bot.on('message', message => {
  if (message.content === prefix + "Fouille caverne anciennement habitée") {
    const X = (Math.floor((67)*Math.random()+1))
      const Zombie = (Math.floor((7)*Math.random()+4))
if(X <= 22){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Liasse de billets`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 23 & X <= 29){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Four cancérigène`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 30 & X <= 35){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 36 & X <= 39){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bombe pulvérine`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 40 & X <= 44){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 45 & X <= 49){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Réfrigérateur d'étudiant`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 50 & X <= 53){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Table järpen`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 50 & X <= 52){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vieille machine à laver`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 53 & X <= 55){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 56){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille caverne anciennement habitée :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
                .setTimestamp()
                message.channel.send({embed})}
  }
});






bot.on('message', message => {
  if (message.content === prefix + "Fouille centrale hydraulique") {
    const X = (Math.floor((96)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+3))
if(X <= 57){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 58 & X <= 68){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ration d'eau`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 69 & X <= 75){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pompe à jerrycan (démonté)`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 76 & X <= 77){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pompe à jerrycan`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 78 & X <= 79){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 80){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille centrale hydraulique :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille chantier à l'abandon") {
    const X = (Math.floor((97)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+3))
if(X <= 26){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 27 & X <= 40){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Kit de bricolage`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 41 & X <= 49){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac de ciment`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 50 & X <= 57){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte en métal`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 58 & X <= 64){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tréteau`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 65 & X <= 69){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Fragments de tôle`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 70 & X <= 73){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Clé à molette`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 74 & X <= 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tournevis`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 76 & X <= 77){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaîne de porte & cadenas`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 78){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Plaque de tôle`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 79){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 79){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ceinture à poches`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 80){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Radio K7`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X === 81){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Scie à métaux`")
                  .setTimestamp()
                  message.channel.send({embed})}
      if(X >= 82){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille chantier à l'abandon :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille char d'assaut en panne") {
    const X = (Math.floor((57)*Math.random()+1))
      const Zombie = (Math.floor((6)*Math.random()+5))
if(X <= 10){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 11 & X <= 19){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poudre-comète brute`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 20 & X <= 27){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Barricades à clouer`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 28 & X <= 33){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Mécanisme`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 34 & X <= 38){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Grosse chaîne rouillée`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 39 & X <= 42){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Revolver`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 43){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Cantine en fer`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 44){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Détonateur compact`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 45){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Réfrigérateur d'étudiant`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 46){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Outils en vrac`")
                .setTimestamp()
                message.channel.send({embed})}
      if(X >= 47){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille char d'assaut en panne :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});



bot.on('message', message => {
  if (message.content === prefix + "Fouille cimetière indien") {
    const X = (Math.floor((43)*Math.random()+1))
      const Zombie = (Math.floor((4)*Math.random()+2))
if(X <= 24){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Os humain fêlé`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 25 & X <= 28){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 29 & X <= 32){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Os charnu`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 33 & X <= 34){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Gros coffre en métal`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 35 & X <= 36){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sac supplémentaire`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 37){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille cimetière indien :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});



bot.on('message', message => {
  if (message.content === prefix + "Fouille école maternelle brûlée") {
    const X = (Math.floor((33)*Math.random()+1))
      const Zombie = (Math.floor((4)*Math.random()+2))
if(X <= 15){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 16 & X <= 19){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pile`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 20 & X <= 21){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lentille convexe`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 22 & X <= 23){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Cyanure`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 24 & X <= 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Pistolet à eau`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 26 & X <= 27){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bandage rudimentaire`")
        .setTimestamp()
        message.channel.send({embed})}
      if(X >= 28){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille école maternelle brûlée :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille entrepôt désaffecté") {
    const X = (Math.floor((19)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
if(X <= 6){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille entrepôt désaffecté :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Affaires d'un citoyen`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 7 & X <= 12){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille entrepôt désaffecté :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 13 & X <= 15){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille entrepôt désaffecté :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
  .setTimestamp()
  message.channel.send({embed})}
      if(X >= 16){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille entrepôt désaffecté :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille épicerie") {
    const X = (Math.floor((105)*Math.random()+1))
      const Zombie = (Math.floor((4)*Math.random()+3))
if(X <= 22){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Twinoïde 500MG`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 23 & X <= 37){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Melon d'intestin`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 38 & X <= 48){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Lentille convexe`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 49 & X <= 59){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Nouilles chinoises épicées`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 60 & X <= 66){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Steak appétissant`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 67 & X <= 73){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte d'allumettes`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 74 & X <= 77){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Paillasson`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 78 & X <= 80){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poudre-comète brute`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X >= 81 & X <= 83){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Doggy-bag`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X >= 84 & X <= 85){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Nouilles chinoises`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X === 86){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Stéroïdes anabolisants`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X === 87){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de conserve`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X === 88){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
                      .setTimestamp()
                      message.channel.send({embed})}
      if(X >= 89){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille épicerie :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille fast-food") {
    const X = (Math.floor((130)*Math.random()+1))
      const Zombie = (Math.floor((4)*Math.random()+3))
if(X <= 49){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 50 & X <= 82){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Steak appétissant`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 83 & X <= 89){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Légume suspect`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 90 & X <= 94){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Viande humaine`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 95 & X <= 99){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 100 & X <= 102){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de conserve`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 103 & X <= 105){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Doggy-bag`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X >= 106 & X <= 108){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
            .setTimestamp()
            message.channel.send({embed})}
      if(X >= 109){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille fast-food :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


bot.on('message', message => {
  if (message.content === prefix + "Fouille gare de triage désertée") {
    const X = (Math.floor((57)*Math.random()+1))
      const Zombie = (Math.floor((5)*Math.random()+3))
if(X <= 12){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ferraille`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 13 & X <= 20){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Structures métalliques`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 21 & X <= 28){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Planche tordue`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 29 & X <= 34){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Clé à molette`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 35 & X <= 40){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Grosse chaîne rouillée`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 41 & X <= 43){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Café brûlant`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 44 & X <= 46){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poutre rafistolée`")
          .setTimestamp()
          message.channel.send({embed})}
      if(X >= 47){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille gare de triage désertée :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille hangars de stockage") {
    const X = (Math.floor((58)*Math.random()+1))
      const Zombie = (Math.floor((5)*Math.random()+4))
if(X <= 17){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 18 & X <= 30){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 31 & X <= 45){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Carton de matériaux`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 46 & X <= 49){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Morceau de caisse`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 50 & X <= 52){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Cartons`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 53){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Colis postal`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 54){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
          .setTimestamp()
          message.channel.send({embed})}
      if(X >= 55){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille hangars de stockage :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille immeuble délabré") {
    const X = (Math.floor((58)*Math.random()+1))
      const Zombie = (Math.floor((5)*Math.random()+3))
if(X <= 16){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 17 & X <= 24){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Liasse de billets`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 25 & X <= 32){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 33 & X <= 39){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Mécanisme`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 40 & X <= 45){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vieille porte`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X >= 41 & X <= 43){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Réfrigérateur d'étudiant`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X >= 44 & X <= 46){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Bonbonne d'eau`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 47){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Téléphone portable`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 48){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Paquet de cigarettes entamé`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 49){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Clé à molette`")
                .setTimestamp()
                message.channel.send({embed})}
                if(X === 50){
                  const embed = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)
                  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                  .setColor(0xff0000)
                  .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tournevis`")
                  .setTimestamp()
                  message.channel.send({embed})}
                  if(X === 51){
                    const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username , message.author.avatarURL)
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Cutter`")
                    .setTimestamp()
                    message.channel.send({embed})}
                    if(X === 52){
                      const embed = new Discord.RichEmbed()
                      .setAuthor(message.author.username , message.author.avatarURL)
                      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                      .setColor(0xff0000)
                      .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Coffre-fort`")
                      .setTimestamp()
                      message.channel.send({embed})}
                      if(X === 53){
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username , message.author.avatarURL)
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Four cancérigène`")
                        .setTimestamp()
                        message.channel.send({embed})}
                        if(X === 54){
                          const embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username , message.author.avatarURL)
                          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                          .setColor(0xff0000)
                          .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Vieille machine à laver`")
                          .setTimestamp()
                          message.channel.send({embed})}
                  if(X >= 55){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille immeuble délabré :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});




bot.on('message', message => {
  if (message.content === prefix + "Fouille kebab") {
    const X = (Math.floor((18)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+2))
if(X <= 7){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Steak appétissant`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 8 & X <= 9){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de nourriture`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 10 & X <= 11){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Jerrycan plein`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 12 & X <= 13){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Légume suspect`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X === 14){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Tronçonneuse (démonté)`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 15){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Couteau à dents`")
        .setTimestamp()
        message.channel.send({embed})}
                  if(X >= 16){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille kebab :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille laboratoire cosmétique") {
    const X = (Math.floor((31)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+2))
if(X <= 9){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Produits pharmaceutiques`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 10 & X <= 15){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Steak appétissant`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 16 & X <= 17){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Cochon malodorant`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 18 & X <= 19){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Twinoïde 500MG`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X === 20){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chien hargneux`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 21){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Poudre-comète brute`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 22){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Sport-elec`")
          .setTimestamp()
          message.channel.send({embed})}
          if(X === 23){
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username , message.author.avatarURL)
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(0xff0000)
            .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Serpent de 2 mètres`")
            .setTimestamp()
            message.channel.send({embed})}
            if(X === 24){
              const embed = new Discord.RichEmbed()
              .setAuthor(message.author.username , message.author.avatarURL)
              .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
              .setColor(0xff0000)
              .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Paracétoïde 7MG`")
              .setTimestamp()
              message.channel.send({embed})}
              if(X === 25){
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username , message.author.avatarURL)
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Piqûre de calmant`")
                .setTimestamp()
                message.channel.send({embed})}
                  if(X >= 26){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille laboratoire cosmétique :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});



bot.on('message', message => {
  if (message.content === prefix + "Fouille bar des illusions perdues") {
    const X = (Math.floor((40)*Math.random()+1))
      const Zombie = (Math.floor((6)*Math.random()+5))
if(X <= 15){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille bar des illusions perdues :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chien hargneux`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 16 & X <= 23){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille bar des illusions perdues :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 'Debout-les-morts'`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 24 & X <= 29){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille bar des illusions perdues :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Paquet de cigarettes entamé`")
  .setTimestamp()
  message.channel.send({embed})}
                  if(X >= 30){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille bar des illusions perdues :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});

bot.on('message', message => {
  if (message.content === prefix + "Fouille maison d'un citoyen") {
    const X = (Math.floor((64)*Math.random()+1))
      const Zombie = (Math.floor((2)*Math.random()+1))
if(X <= 34){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Boîte de conserve`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 35 & X <= 43){
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
.setColor(0xff0000)
.addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Affaire d'un citoyen`")
.setTimestamp()
message.channel.send({embed})}
if(X >= 44 & X <= 46){
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username , message.author.avatarURL)
  .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
  .setColor(0xff0000)
  .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaise EKTÖRP-GLUTEN`")
  .setTimestamp()
  message.channel.send({embed})}
  if(X >= 47 & X <= 49){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Chaîne de porte & cadenas`")
    .setTimestamp()
    message.channel.send({embed})}
    if(X >= 50 & X <= 51){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouill maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Appareil électronique en panne`")
      .setTimestamp()
      message.channel.send({embed})}
      if(X === 52){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Réserves d'un citoyen avisé`")
        .setTimestamp()
        message.channel.send({embed})}
        if(X === 53){
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username , message.author.avatarURL)
          .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
          .setColor(0xff0000)
          .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Caisse de matériel`")
          .setTimestamp()
          message.channel.send({embed})}
                if(X === 54){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous trouvez :\n\n:moneybag: `1 Ration d'eau`")
        .setTimestamp()
        message.channel.send({embed})}
                  if(X >= 55){
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username , message.author.avatarURL)
        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
        .setColor(0xff0000)
        .addField(":flashlight: Fouille maison d'un citoyen :" , ":flashlight: Sur les lieux, après quelques recherches vous tombez sur des zombies... :\n\n:moneybag: `" +Zombie+ " zombies`")
        .setTimestamp()
        message.channel.send({embed})}
  }
});


////////////////////////////////////////////////////////////////////Fouille [ancienne version]//////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Fouille zone proche") {
    if (talkedRecently.has(message.author.id+12345)) {
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":timer: Fouille zone proche :" , ":timer: Vous avez déjà fouiller les environs...\n:timer: `[Cooldown : 2 H]`")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    } else {
      const X = (Math.floor((100)*Math.random()+1))
      const Zombie = (Math.floor((3)*Math.random()+1))
      if(X < 10){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":moneybag: Fouille zone proche :" , ":moneybag: En fouillant les environs de cette zone, vous trouvez l'objet suivant :\n\n:moneybag: `Bouteille d'eau infectée : 1`")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 11 & X < 15){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une pharmacie :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche pharmacie`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 16 & X < 20){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un hangar :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche hangar`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 21 & X < 25){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un bâtiment :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche bâtiment`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 26 & X < 30){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un magasin d'arme à feu :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche magasin d'arme à feu`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 31 & X < 35){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un supermarché :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche supermarché`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 36 & X < 40){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un hopital :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche hopital`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 41 & X < 45){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une caserne de pompier :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche caserne de pompier`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 46 & X < 50){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une école :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche école`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 51 & X < 55){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une mairie :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche mairie`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 56 & X < 60){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un commissariat :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche commissariat`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 61 & X < 65){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un restaurant :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche restaurant`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 66 & X < 70){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une demeure :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche demeure`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 71 & X < 75){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un hôtel :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche hôtel`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 76 & X < 80){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez un musée :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche musée`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 81 & X < 85){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une église :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche église`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 86 & X < 90){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":flashlight: Fouille zone proche :" , ":flashlight: En fouillant les environs de cette zone, vous trouvez une banque :\n\n:flashlight: Pour commencer l'investigation : `=Zone proche banque`\n\n:warning: Vous devriez y aller avec d'autres survivants...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 91 & X < 95){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":moneybag: Fouille zone proche :" , ":moneybag: En fouillant les environs de cette zone, vous trouvez les objets suivants :\n\n:moneybag: `Morceau de pain : 1`\n\n`Bouteille d'eau : 1`")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 96 & X < 98){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":smiling_imp: Fouille zone proche :" , ":smiling_imp: En fouillant les environs de cette zone, vous vous retrouvez face à `" +Zombie+ "` mais vous avez l'initiative !")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    if(X > 99){
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(0xff0000)
      .addField(":smiling_imp: Fouille zone proche :" , ":smiling_imp: En fouillant les environs de cette zone, vous vous retrouvez face à `" +Zombie+ "` qui vous surprenne de derrière, ils ont l'avantage...")
      .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
      .setTimestamp()
      message.channel.send({embed})
    }
    talkedRecently.add(message.author.id+12345);
    setTimeout(() => {
      talkedRecently.delete(message.author.id+12345);
    }, 7200000);
    }
    }
    });

//////////////////////////////////////////////////////////////Bâtiments zones proches/////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Zone proche église") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche église :" , ":flashlight: Vous entrez à l'intérieur de cette église, une multitude de bancs ainsi qu'une géante croix de jésus au centre au fond...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche église : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche musée") {
    const Zombie = (Math.floor((13001)*Math.random()+13001))
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche musée :" , ":flashlight: Vous entrez à l'intérieur de ce musée, des oeuvres d'arts ainsi que des sculptures de statues géantes de chaques côtés...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche musée : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche supermarché") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche supermarché :" , ":flashlight: Vous entrez à l'intérieur de ce supermarché, des rayons aussi grands et vides les uns que les autre avec des déchets sur le sol...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche supermarché : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche bâtiment") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche bâtiment :" , ":flashlight: Vous entrez à l'intérieur de ce bâtiment, des salles de chaque côtés des longs couloirs ainsi que des escaliers menant vers les étages supérieurs...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche bâtiment : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche caserne de pompier") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche caserne de pompier :" , ":flashlight: Vous entrez à l'intérieur de cette caserne de pompier, une ambiance qui sent le brûlé malgrè le lieu qui semble presque intact...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche caserne de pompier : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche pharmacie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche pharmacie :" , ":flashlight: Vous entrez à l'intérieur de cette pharmacie, des boîtes de médicaments complètements vidés sur le sol ainsi que des médikits détruits...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche pharmacie : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche hangar") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche hangar :" , ":flashlight: Vous entrez à l'intérieur de ce hangar, avec des véhicules de partout qui sont très certainement endommagés...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche hangar : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche magasin d'arme à feu") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche magasin d'arme à feu :" , ":flashlight: Vous entrez à l'intérieur de ce magasin d'arme à feu, des armes à feu sur le sol ou plutôt des bouts accompagnés de balles vides...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche magasin d'arme à feu : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche hôpital") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche hôpital :" , ":flashlight: Vous entrez à l'intérieur de cette hôpital, des salles blanches avec des traces de sang dessus ainsi que du sang sur le sol...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche hôpital : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche école") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche école :" , ":flashlight: Vous entrez à l'intérieur de cette école, des livres complètement brûlés ainsi que des tables dans les salles de cours complètement renversés...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche école : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche mairie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche mairie:" , ":flashlight: Vous entrez à l'intérieur de cette mairie, remplis de documents sur les bureaux qui sont dans des états déplorables...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche mairie : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche commissariat") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche commissariat:" , ":flashlight: Vous entrez à l'intérieur de ce commissariat, un cadavre décomposé attaché à un barreau d'une des cellules avec des menottes...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche commissariat : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche restaurant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche restaurant:" , ":flashlight: Vous entrez à l'intérieur de cette restaurant, de la nourriture sur le sol en décomposition depuis déjà un bon moment ainsi que des cuisines ravagées...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche restaurant : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche demeure") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche demeure:" , ":flashlight: Vous entrez à l'intérieur de cette demeure, les rideaux sont déchirés et les lustres éclatés sur le sol après s'être détaché...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche demeure : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche hôtel") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche hôtel:" , ":flashlight: Vous entrez à l'intérieur de cette hôtel, les chambres et les couloirs ainsi que le sol qui sont couverts de griffures et de sang...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche hôtel : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Zone proche banque") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField(":flashlight: Zone proche banque:" , ":flashlight: Vous entrez à l'intérieur de cette banque, de l'argent encore sur le sol ne servant plus à rien depuis l'apocalyspe...\n\n:flashlight: Pour fouiller à vos risques et périls : `=Zone proche banque : fouille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;
///////////////////////////////////////////////////////////////////Objets Horde///////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Affaires d'un citoyen") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Affaires d'un citoyen :" , "C'est le petit container standard donné à tout citoyen qui arrive en ville. Un peu comme une pochette surprise, blague un peu dérisoire dans un monde sans perspective d'avenir\n\nPour ouvrir : `=Ouverture affaires d'un citoyen`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Ailerons de poulet entamés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ailerons de poulet entamés :" , "Deux ailerons de poulet que quelqu'un a déja commencé à manger avant de les jeter ... Hmmm ...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Appareil électronique en panne") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Appareil électronique en panne :" , "Un vieil appareil électro-ménager impossible à identifier. Peut-être qu'en le démontant vous pourriez obtenir quelque chose ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Aqua-Splash") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Aqua-Splash :" , "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Aqua-Splash (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Aqua-Splash (démonté) :" , "L'Aqua-Splash est un fusil à eau surpuissant pour toute personne en balade dans l'Outre-Monde ! Ne convient pas à un enfant de moins 8 ans")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Badge de shérif") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Badge de shérif :" , "Vous fouillant dans le désert de l'Outre-Monde vous tombez face à une petite lumière étincelante étrangement rassurante\n\nEn regardant de plus près il se trouve que cela ressemble à une étoile de shérif\n\nA sa vue, vous ressentez immédiatement le pouvoir d'un guérrier d'antant\n\nL'utilisation de cet objet du passé pourrait bien vous donner plus de courage lors des veilles.")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Balise radius") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Balise radius :" , "La balise « Radius » permet de dévoiler sur la carte toutes les zones environnant la zone dans laquelle vous vous trouvez")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Bandage rudimentaire") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bandage rudimentaire :" , "Ça sent mauvais, il y a des traces de moisissure, mais franchement, vous n'êtes pas en position de faire votre difficile. Ce bandage permet de panser une blessure")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Barricades à clouer") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Barricades à clouer :" , "Cet assemblage de bois et de tôle devait autrefois servir de barricade chez un autre citoyen . A en juger par les déformations, le sang et les rafistolages, ça ne devait pas être suffisant...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Batteur incomplet") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Batteur incomplet :" , "Ca pourrait faire une bonne arme, si seulement vous aviez les pièces manquantes pour réparer ce gadget...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Batteur électrique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Batteur électrique :" , "Il bat (très fort) et il est électrique, que dire de plus ? Le bon point c'est qu'il ne nécessite qu'une pile et a 40% de chances de l'épuiser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Betapropine 5mg périmée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Betapropine 5mg périmée :" , "Ce petit cachet a un effet pour le moins mystérieux... Sur la boîte, il est écrit : 'ne pas donner à un testeur de moins de 18 ans'")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bidon d'huile vide") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bidon d'huile vide :" , "On trouve de temps en temps des bidons d'huile vides dans le désert, souvent accompagné d'un cadavre. Quand est ce que les citoyens comprendront que l'huile, ça ne se boit pas...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bidon d'huile remplis") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bidon d'huile remplis :" , "C'est un bidon remplis d'essence qui pourra être utiliser pour différentes utilisations possibles")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Biscuit fade") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Biscuit fade :" , "Une tartelette qui sent vraiment fort... Pensez à quelque chose d'agréable pendant que vous l'avalerez\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bobine de fil de fer") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bobine de fil de fer :" , "Attention à ne pas s'emmeler avec, on ne voudrait pas avoir à vous couper les doigts pour vous en libérer")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bombe pulvérine") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bombe pulvérine :" , "Cette grenade artisanale permet d'attirer l'attention des zombies dans le secteur sur autre chose que votre belle chair appétissante... Vous avez alors quelques instants pour profiter de cette distraction")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bombe macabre") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bombe macabre :" , "L'avantage de cette boule de chair difforme, c'est qu'elle sent la charogne à 10 mètres à la ronde. Pratique pour occuper les zombies quelques instants")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bombe à eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bombe à eau :" , "Jetez-la sur un zombie et priez pour que ça éclate. Puis attendez que ça éclate à nouveau")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bombe à eau explosive") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bombe à eau explosive :" , "Un sac plastique, de l'explosif et de l'eau. C'est artisanal, mais c'est surtout une arme de destruction massive d'une extrême puissance à jeter dans les hordes de zombies... Carnage assuré")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bon plat fait-maison") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bon plat fait-maison :" , "En apparence, ça n'est guère mieux qu'une ration quotidienne. Mais en réalité, ça a très bon goût et ça nourrit bien !\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bonbonne d'eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bonbonne d'eau :" , "Cette bonbonne en plastique devait se trouver dans un quelconque bureau d'entreprise\n\nElle a échoué entre vos mains par on-ne-sait quel miracle et elle pourrait bien s'avérer très utile de nos jours...\nSi vous disposez d'une ration d'eau sur vous, elle sera placée dans la bonbonne\n\nSinon, l'action par défaut sera de boire le contenu de la bonbonne")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boule de pâte visqueuse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boule de pâte visqueuse :" , "Un agrégat de 'Charognardes', une baie qui pousse essentiellement sur des cadavres...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boules quiès") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boules quiès :" , "Vous ne supportez plus les commérages à vos portes, les insultes à votre porte, les citoyens hurlant à la mort ? Les boules quiès seront vos meilleures amies !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boules de sable") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boules de sable :" , "Une banale boule de sable (avec quelques graviers en prime) qu'il vous démange de jeter au visage d'un autre citoyen. Vous ignorez d'où vous vient cette envie bizarre")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte d'allumettes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte d'allumettes :" , "Comme dit le dicton : on ne peut pas faire feu de tout bois. Faites le mentir...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte de conserve") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte de conserve :" , "L'image imprimée sur la boite montre un plat de haricots très appétissants ! Mais il faudrait d'abord trouver un outil pour l'ouvrir...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte de conserve ouverte") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte de conserve ouverte :" , "Allez, on ferme les yeux, on ouvre bien grand la bouche et on avale tout. On se sent toujours mieux après\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte de schrödinger") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte de schrödinger :" , "C'est particulièrement lourd et ça contient sûrement quelque chose de précieux... Reste à trouver un outil plus adapté que vos dents pour l'ouvrir")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte de jeu") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte de jeu :" , "Cette boîte contient un jeu quelconque... Chic. Une surprise")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte-déjeuner") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte-déjeuner :" , "A défaut d'un vrai repas autour d'une table, avec des couverts et des amis, vous avez cette boîte-déjeuner Armageddon que vous aviez caché il y un bon moment sous votre lit...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boîte en métal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boîte en métal :" , "Une vieille boîte métallique couverte de rouille et complètement cabossée. Qui sait ce qu'elle peut bien contenir ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Brico'facile") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Brico'facile :" , "Un petit kit à usage unique pour réparer tout et n'importe quoi. Il contient quelques outils basiques, des pièces plastique de rechange et un guide du Petit Bricoleur imprimé en 7 langues")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Buche en bon état") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Buche en bon état :" , "Une belle bûche qui pourrait tout à fait servir de tabouret à la maison. Après tout... C'est mieux que rien")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bureau monté à la rache") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bureau monté à la rache :" , "Ce bureau monté approximativement est bancal et peu elegant. Laché du haut d'un rempart, il pourra se rendre utile en écrasant des zombies")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Bâton cassé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Bâton cassé :" , "Un bout de Bâton. Trop court pour servir d'arme, mais pas inutile pour autant...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cadavre d'un voyageur") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cadavre d'un voyageur :" , "Ce cadavre ne date pas d\'hier : les vers ont déjà bouffé une bonne partie de ce qui pouvait l'être... Vous êtes sûr(e) que vous voulez vous promener avec cette horreur sur les épaules ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caddie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caddie :" , "On l'appelle « Le Caddie ». Personne ne sait à quoi ça pouvait bien servir à part mettre des objets dedans, mais le nom inscrit dessus était rigolo. Bon, par contre, ça ne roule pas bien dans le sable")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caddie bancal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caddie bancal :" , "Un genre de gros chariot métallique, mais l'un des essieux est manquant. Il faudrait quelque chose pour le remplacer...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cafetière") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cafetière :" , "L'arme absolue pour l'aventurier en vous. Son système de filtrage unique permet de fabriquer le meilleur café à partir d'ingrédients pour le moins... inattendus")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cafetière incomplète") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cafetière incomplète :" , "Cette cafetière pourrait vous être d'une très grande utilité, mais malheureusement elle est en pièces détachées")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Café brûlant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Café brûlant :" , "On se demande comment cette thermos a pu rester chaude aussi longtemps. Quoiqu'il en soit, elle contient suffisamment de café pour vous remettre en forme\n\nEn utilisant cet objet, vous supprimez l'état `Rassasiement` et vous gagnez que 6 points d'actions ! (1 fois par jour)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caisse de feux d'artifice") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caisse de feux d'artifice :" , "Cette boîte contient tout un attirail de produits chimiques hautement toxiques aux noms évocateurs, tels que : Sodium-Fuzz, Carbopotassium Bling Bling ou Rainbow Lithium Cyanurisé")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caisse de matériel") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caisse de matériel :" , "Cette vieille caisse en bois doit contenir des babioles utiles...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caisse de nourriture") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caisse de nourriture :" , "Une odeur abominable de moisi et de charogne émane de cette caisse... Mais vous êtes presque sûr(e) qu'elle contient un petit quelque chose de comestible\n\nPour ouvrir : `=Ouverture caisse de nourriture`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Calibrateur PDTT MARK II") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Calibrateur PDTT MARK II :" , "Cet antique calibrateur est exclusivement prévu pour être monté sur un Lance-pile 1-PDTG. Il permet d'ajuster précisément la pression dans la chambre de tir de l'arme")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cantine en fer") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cantine en fer :" , "Lourde mais pratique, cette grosse malle en ferraille ferait parfaitement office de rangement chez soi")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Caisse de matériaux") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Caisse de matériaux :" , "Ce gros carton est couvert d'étiquettes imprimées et emballé dans du cellophane transparent. Il doit contenir des matériaux de construction")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cartons") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cartons :" , "Quelques cartons qui devaient autrefois être des boîtes de rangement pour des appareils électroménagers. Même s'ils sont à moitié pourris et sentent le moisi à plein nez, ils pourront toujours servir chez vous... comme meuble")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Ceinture à poches") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ceinture à poches :" , "Cette ceinture vous permet de disposer d'1 emplacement de sac à dos supplémentaire. De plus, elle est particulièrement bien conçue car elle ne vous empêchera pas de prendre un autre sac plus tard...\n\nCet objet vous permet de porter 2 objets supplémentaires !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chaine hifi") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ceinture à poches :" , "Combiné à un CD de musique, cette chaîne devient potentiellement une arme de destruction massive !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chaise EKTÖRP-GLUTEN") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chaise EKTÖRP-GLUTEN :" , "Une banale chaise de fabrication suédoise. On peut taper des gens avec, mais ca fonctionnera mieux si c'est simplement rangé en sécurité chez soi...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chamallows calcinés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chamallows calcinés :" , "Quelques chamallows tout durcis et qui sentent le rat mort. Maintenant qu'ils sont complètement calcinés, on peut dire qu'ils sont mangeables. On peut même dire qu'ils sont appétissants, quand on y réfléchit bien...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chamallows séchés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chamallows séchés :" , "Quelques chamallows tout durcis et qui sentent le rat mort. C'est complètement immangeable tel quel...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chaîne de porte & cadenas") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chaîne de porte & cadenas :" , "Avec une bonne grosse chaîne et un cadenas on se sent rassuré pour la porte. Pas pour les murs...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chewing-gums séchés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chewing-gums séchés :" , "Une pleine poignée de chewing-gums tout séchés. En théorie, ça se mâche, mais ça ne s'avale pas\n\nSeulement, dans cet enfer, vous n'êtes pas en position de faire le ou la difficile...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Chien hargneux") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Chien hargneux :" , "Le meilleur ami de l'homme. Au choix, il peut garder votre maison, finir chez le boucher ou vous sauver d'un zombie en lui sautant à la gorge...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cidre claviceps artisanal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cidre claviceps artisanal :" , "Le mélange des guerriers, le cercueil des rois, le cocktail des dieux ! Si vous doutez de son effet, faîtes le goûter par un de vos voisins")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Claviceps purpurea") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Claviceps purpurea :" , "Sur les cadavres, parfois, il y a des champignons qui font dire des trucs marrants, il paraît que les effet sur le cerveau est irréversible, ma foi au point où vous en êtes...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Clé magnétique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Clé magnétique :" , "Cette clé high-tech permet d'ouvrir les portes sécurisées de niveau 6.2 AOC, seul les membres appartenant à l'élite peuvent se targuer d'avoir une de ces clés en leur possession\n\nMalheureusement, étant en piteux état, cette clé ne pourra ouvrir qu'une seule porte")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Clé à molette") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Clé à molette :" , "Avec une clé à Molette, vous pouvez au choix réparer un objet ou détruire quelque chose, pas forcement un objet d'ailleurs...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Clé à percussion") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Clé à percussion :" , "Cette clé, grand apanage des cambrioleurs en herbe, permet d'ouvrir n'importe quelle porte en quelques secondes, c'est à se demander à quoi peut bien servir les clés traditionnelles\n\nMalheureusement, étant en piteux état, cette clé ne pourra ouvrir qu'une seule porte")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cochon malodorant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cochon malodorant :" , "Bon, il n'y a plus qu'à trouver un boucher. Accessoirement, on peut aussi le faire rouler vers un zombie...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Coffre d'architecte") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Coffre d'architecte :" , "Ce coffre contient nombre de documents obscurs et d'ustensiles désuets (crayons, compas, règles en plastique...). Rien qui ne vous servira à survivre dans le désert... A première vue")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Coffre d'architecte scellé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Coffre d'architecte scellé :" , "Ce coffre scellé contient très certainement un document très important et rare")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Coffre-fort") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Coffre-fort :" , "Qui peut bien dire ce que ce lourd coffre-fort contient ? Sûrement pas vous en tous cas, à moins que vous ne connaissiez la combinaison secrète d'ouverture.")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Colis postal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Colis postal :" , "Un colis dont l'adresse est aujourd'hui illisible. Et on dirait bien qu'il y a quelque chose à l'intérieur... C'est Noël")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Composant électronique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Composant électronique :" , "Une vieille plaque probablement sortie d'un poste de radio ou d'un quelconque gadget électrique")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Coupe-coupe") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Coupe-coupe :" , "Au départ on se frayait un chemin avec. Ici aussi c'est le cas, mais la végétation est très vindicative et sinistrement bruyante...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Courroie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Courroie :" , "Une courroie... Ca doit sûrement servir à quelque chose")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Couteau suisse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Couteau suisse :" , "Le Couteau Suisse pourra sans soucis vous dépanner pour tous les petits travaux manuels, sauf peut-être découper une horde de morts-vivants")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Couteau à dents") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Couteau à dents :" , "Skinner, Buck, Bowie... Dans tous les cas ça coupe")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cutter") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cutter :" , "Ce petit couteau à lame rétractable disponible en coloris mauve ou fushia s'accordera très bien avec la couleur des viscères de vos ennemis. Pour peu qu'il traverse")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Cyanure") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Cyanure :" , "Quand rien ne va plus, une petite capsule de cyanure, un grand verre d'eau et on attend que ça passe avec un sourire apaisé")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Devastator") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Devastator :" , "La version militaire du Lance-Pile 1-PDTG. Son piston surpuissant peut projeter une pile à une vitesse phénoménale et percer à peu près n'importe quelle matière. Cette version peut faire un trou gros comme un poing dans 2 zombies, s'ils sont alignés")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Devastator (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Devastator (démonté) :" , "La version militaire du Lance-Pile 1-PDTG. Son piston surpuissant peut projeter une pile à une vitesse phénoménale et percer à peu près n'importe quelle matière. Cette version peut faire un trou gros comme un poing dans 2 zombies, s'ils sont alignés\n\nCependant, il faudra le monter avant de pouvoir l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Diode lazer") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Diode lazer :" , "Un composant électronique d'une époque révolue, dans l'état on peut s'en servir de juda, même si on ne voit pas à travers")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Distributeur vide") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Distributeur vide :" , "Ce distributeur n'a plus aucune utilité depuis la fin des pillages, il peut faire cependant des ravages une fois balancé du haut d'un rempart")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Doggy-bag") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Doggy-bag :" , "Un vieux sac tout graisseux en papier qui doit bien contenir quelque chose à manger... Notez qu'il sent mauvais\n\nPour ouvrir : `Ouverture doggy-bag`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Débris métalliques") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Débris métalliques :" , "Des bouts de ferrailles rouillées, du grillage, des vis... Rien d'utilisable tel quel, il faudrait d'abord retaper ça en ville")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Décapsuleur") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Décapsuleur :" , "Certaines pièces sont de vrais boîtes de conserve, rien de mieux qu'un outil approprié pour aller à la pêche aux objets utiles ! Malheureusement, étant en piteux état, ce décapsuleur ne pourra ouvrir qu'une seule porte")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Dés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Dés :" , "Jouez aux dés avec d'autres perdants.")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Détonateur compact") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Détonateur compact :" , "Un dispositif compact qui peut faire exploser une petite charge d'explosif...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Eau croupie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Eau croupie :" , "Ce bout de ferraille tordue a permis de capter de l'eau, en petite quantité\n\nLe problème, c'est qu'elle n'est pas potable, en l'état")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Eau croupie purifiée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Eau croupie purifiée :" , "Ce bout de ferraille tordue a permis de capter de l'eau, en petite quantité\n\nC'est peu, mais c'est mieux que rien...\n\nEn utilisant cet objet, vous obtenez l'état `Hydratation` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Epices fortes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Epice fortes :" , "Un petit sachet d'épices...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Explosifs bruts") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Explosifs bruts :" , "Boum !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Ferraille") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ferraille :" , "Du métal... Un peu lourd, mais ça sert toujours !\n\nLe métal est utilisé pour la construction de bâtiments en ville")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fiole de poison") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fiole de poison :" , "Cette minusculte quantité de poison suffira à tuer n'importe quel concitoyen\n\nMélangez son contenu avec un aliment, une gourde ou une drogue et celle-ci sera contaminée, devenant ainsi une arme mortelle...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Four cancérigène") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Four cancérigène :" , "Les légendes racontent que la technologie à Micro-Ondes serait l'une des raisons du déclin de la civilisation\n\nCertains disent même que l'existence même des morts-vivants n'y serait pas étrangère")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fragment de tôle") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fragment de tôle :" , "Des morceaux de tôle qui ne demandent qu'à servir de protection dans votre maison... Pour peu que vous les assembliez correctement")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fumigène 'Senteur sapin'") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fumigène 'Senteur sapin' :" , "Un modèle très courant de fumigènes, celui-ci ayant la particularité de sentir le conifère\n\nIl dissimule aussi votre prochain mouvement s'il est effectué au plus tard 1 minute après l'utilisation du fumigène\n\nATTENTION : utilisez cet objet APRÈS avoir réalisé les actions que vous souhaitez masquer...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fusil d'assaut") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fusil d'assaut :" , "Une version peu courante du M16. Plus compacte, probablement destiné à un usage 'civil'...\n\nLa chasse à la Galinette Cendrée diront certains")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fusée éclairante") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fusée éclairante :" , "La Fusée Éclairante vous permet de réveler les informations d'une zone éloignée de la ville. Une fois retombée elle libère un petit emetteur qui transmet de suite les informations")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Grand bâton sec") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Grand bâton sec :" , "Il est suffisamment pointu pour empaler quelque chose, mais pas vraiment très résistant... Priez simplement pour qu'il tienne le choc")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Gros chat mignon") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Gros chat mignon :" , "C'est mignon, ça fait joli chez soi et ça sait à peu près se battre contre un zombie\n\nEt puis, si vous avez faim...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Gros coffre en métal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Gros coffre en métal :" , "C'est particulièrement lourd et ça contient sûrement quelque chose de précieux...\n\nReste à trouver un outil plus adapté que vos dents pour l'ouvrir")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Gros colis postal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Gros colis postal :" , "Un colis dont l'adresse est aujourd'hui illisible. Et on dirait bien qu'il y a quelque chose à l'intérieur... C'est Noël")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Grosse chaîne rouillée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Grosse chaîne rouillée :" , "Cette vieille chaîne en fer est complètement distordue et n'a plus grande utilité... Mais on doit bien pouvoir étrangler quelqu'un avec")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Guitare artisanale") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Guitare artisanale :" , "Idéale pour draguer lors de nuit de feu de camp, elle reste très appréciée même depuis l'asexualisation des citoyens\n\nElle saura rendre joie et gaïté dans la ville")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Hydratone 100MG") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Hydratone 100MG :" , "Pratique, l'Hydratone tient dans la poche et peut étancher votre soif quelques minutes après l'ingestion\n\nToutefois, elle ne retire PAS les effets de la fatigue et ne régénère PAS les points d'actions")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Jambon-beurre moisi") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Jambon-beurre moisi :" , "Un reste de casse-croute qui n'a d'appétissant que son souvenir...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Jerrycan plein") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Jerrycan plein :" , "Le Jerrycan contient plusieurs rations d'eau non-potable (non-purifiée)\n\nToutefois, il faut que la ville dispose du bâtiment de filtrage adapté pour en faire de l'eau potable")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Jus de mirabelle suspect") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Jus de mirabelle suspect :" , "Cette fiole soigneusement scellée contient du jus de mirabelle, c'est vraiment suspect\n\nD'autant qu'elle porte une étiquette : 'en cas d'ingestion, contacter le centre anti-poison le plus proche de chez vous'\n\nVous n'allez quand même pas boire ça ? Si ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Kalachnik'eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Kalachnik'eau :" , "Une puissante sulfateuse à eau, son mécanisme grippé ne résistera pas à plus d'un assaut")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Kit de bricolage") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Kit de bricolage :" , "Cette boîte en ferraille contient tout le nécessaire de base pour remettre en état à peu près n'importe quoi, sauf vos voisins morts")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Kit de bricolage abimé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Kit de bricolage abimé :" , "Cette boîte en ferraille contient tout le nécessaire de base pour remettre en état à peu près n'importe quoi, sauf vos voisins morts\n\nLe kit cependant n'est utilisable plus qu'une seul fois")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "LSD") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("LSD :" , "On ne sait pas d'où vient ce petit papier rose, mais quand on le met dans la bouche, il fait des bulles dans le cerveau")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lambeau de chair") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lambeau de chair :" , "Un vieux bout de peau, ou de quoi que ce soit d'autre qui appartenait à un être vivant. Mais qu'est-ce que vous faites avec ça ?\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lampe de chevet allumée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lampe de chevet allumée :" , "Avec une lampe de chevet, vous aurez moins peur la nuit et vous dormirez peut-être mieux ainsi")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lampe de chevet éteinte") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lampe de chevet éteinte :" , "C'est une jolie lampe de chevet, mais elle ne fonctionnera pas sans une pile neuve...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-pile 1-PDTG") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-pile 1-PDTG :" , "Imaginé avec les moyens du bord, le Lance-Pile 1-PDTG permet, par un savant recyclage, de transformer des piles en projectiles perforants")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-pile 1-PDTG (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-pile 1-PDTG (démonté) :" , "Imaginé avec les moyens du bord, le Lance-Pile 1-PDTG permet, par un savant recyclage, de transformer des piles en projectiles perforants\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour pouvoir l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-pieu") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-pieu :" , "Un lance-pieu qui a du servir pour renforcer les barricades sommaires des hôtels ou bunker ou lutter contre n'importe quel type de créatures, il ne reste malheureusement qu'un seul pieu dans l'appareil")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-pile MARK II") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-pile MARK II :" , "Cette version améliorée du Lance-pile comporte un canon équipé d'un Calibrateur PDTT Mark II\n\nEn dosant précisément la puissance de tir, ce canon permet parfois de récupérer la pile qui a été tirée")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-pile MARK II (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-pile MARK II (démonté) :" , "Cette version améliorée du Lance-pile comporte un canon équipé d'un Calibrateur PDTT Mark II\n\nEn dosant précisément la puissance de tir, ce canon permet parfois de récupérer la pile qui a été tirée\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour pouvoir l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lentille convexe") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lentille convexe :" , "Cette lentille en bon état n'attend qu'un peu de votre ingéniosité pour être utilisée efficacement")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Liasse de billets") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Liasse de billets :" , "Une liasse de papiers teintés et quelques rondelles de cuivre qui servaient autrefois de monnaie d'échange\n\nAujourd'hui, tout ce qui ne se mange pas ou ne peut pas s'injecter dans le sang n'a aucune véritable valeur...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Légume suspect") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Légume suspect :" , "Un genre de... légume, difficile à dire ce qui a essayé de pousser comme ça, mais le principal c'est que ça semble comestiblen, ou pas\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Maglite Pif'gadget") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Maglite Pif'gadget :" , "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert\n\nPour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée\n\nVous notez que la lampe fait maintenant 'ouh ouh ouh' quand vous la secouez")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Maglite Pif'gadget") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Maglite Pif'gadget :" , "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert\n\nPour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée\n\nVous notez que la lampe fait maintenant 'ouh ouh ouh' quand vous la secouez")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Maglite Pif'gadget (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Maglite Pif'gadget (démonté) :" , "Cette grosse lampe de poche au design douteux pourrait bien vous être utile pour vos fouilles dans le désert\n\nPour l'allumer, il suffit d'appuyer sur le nez du gros chien jaune, sur la poignée\n\nVous notez que la lampe fait maintenant 'ouh ouh ouh' quand vous la secouez\n\nCependant, il faut monter cet objet avec d'autres matériaux pour pouvoir l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Matelas") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Matelas :" , "ZZzzzz... Grincement... ZZzzzz... Grincement...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Melon d'intestin") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Melon d'intestin :" , "Habituellement le Melon d'intestin pousse dans le ventre des cadavres, au niveau du gros colon. Il semblerait pourtant que votre potager en ait donné de très jolis...\n\nPeut être avez vous cultivé sur un vieux cimetière indien ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Meuble en kit") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Meuble en kit :" , "Un meuble en pièces détachées, difficile à identifier...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Micropur effervescent") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Micropur effervescent :" , "Une capsule de produit désinfectant à mettre dans de l'eau pour la nettoyer\n\nAvant, c'était utilisé pour récurer les toilettes\n\nVous imaginez aisément le goût de l'eau après... (ATTENTION: le rendement de ce produit est faible en comparaison d'un Purificateur industriel)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Mine antipersonnel") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Mine antipersonnel :" , "On trouve encore des mines dans le désert, en général, ce sont plus les citoyens imprudents que les zombies qui marchent dessus")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Morceau de caisse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Morceau de caisse :" , "Un vieil assemblage de planches qui était utilisé pour fermer une grosse caisse, autrefois. Ca pourrait bien servir de défense, si seulement vous trouviez de quoi le consolider")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Morceau de contreplaqué") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Morceau de contreplaqué :" , "Ce vieux morceau de contreplaqué vient d'un quelconque bâtiment. Au prix de quelques efforts, il devrait pouvoir servir à aménager une planque dehors")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Morceau de grillage") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Morceau de grillage :" , "Une petite partie d'une cloture grillagée, rouillée et abimée")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Moteur") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Moteur :" , "C'est un genre de petit moteur plein de traces d'huile brulée et matières calcinées indéfinissables\n\nPar contre, il pèse son poids")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Mécanisme") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Mécanisme :" , "Ce mécanisme devait faire partie d'un ensemble plus gros : une machine ou un véhicule quelconque... Il ne sert plus à rien tel quel")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Médicament sans étiquette") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Médicament sans étiquette :" , "Une boîte de médicaments dont l'étiquette est totalement effacée...\n\nLes cachets dedans sont pour la plupart moisis, mais vous en trouvez quelques uns qui soient encore 'consommables'\n\nMais êtes-vous suffisamment mal pour vouloir avaler ça ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Napolitains moisis") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Napoltains moisis :" , "Une pâtisserie sous plastique : chocolat-vanille\n\nSi vous agitez l'emballage, vous avez l'impression que quelque chose s'est liquéfié là-dedans...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Nouilles chinoises") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Nouilles chinoises :" , "Malgré les années passées dans le désert, ces nouilles chinoises ont toujours le même gout et le même aspect\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Nouilles chinoises épicées") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Nouilles chinoises épicées :" , "Des nouilles copieusement assaisonnées ! Hmm, ça va vous changer de vos repas à base de choses en décomposition\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Oeuf") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Oeuf :" , "Un oeuf voilà qui devrait vous réconforter, mais une seule idée hante votre esprit, où est donc cette satanée poule...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Os charnu") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Os charnu :" , "Un os avec encore un peu de viande autour... Bizarre. Ça a l'air encore frais en plus. Peut-être un animal tué pendant la nuit ?\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Os humain félé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Os charnu :" , "Un os (un tibia sans doute) tout séché que quelqu'un a rongé récemment semble-t-il... Ca doit pouvoir encore servir")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Outils en vrac") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Outils en vrac :" , "Un paquet d'outils en vrac, auxquels il manque parfois un manche par ci, une vis de serrage par là...\n\nIl faudrait les retaper sérieusement pour pouvoir les utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Ouvre-boîte") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ouvre-boîte :" , "Il porte bien son nom, idéal pour les boîtes de conserve. Malheureusement, il est un peu petit pour ouvrir correctement vos camarades bipèdes dans le désert")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Paillasson") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Paillasson :" , "Ca vous changera d'essuyer vos chaussures sur quelque chose de propre pour une fois")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Paillasson piégé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Paillasson piégé :" , "Une bien belle manière d'inviter les invités comme les non-invités chez soi, une bombe sous le paillasson, pourquoi n'y avons nous pas pensé plus tôt !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pamplemousse explosif") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pamplemousse explosif :" , "Il est très gros, juteux et il fait 'tic tac'")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Paquet de chips molles") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Paquet de chips molles :" , "Les chips de ce paquet sont molles et ont un goût de papier séché, mais on ne va pas faire le difficile... Un repas est un repas")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Paquet de cigarettes entamé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Paquet de cigarettes entamé :" , "Un vieux paquet de cigarettes qui sent la charogne et la moisissure\n\nMais c'est tellement rare d'en trouver de nos jours...\n\nIl porte une mention en rouge ainsi qu'une demi-douzaine de têtes de morts : 'Fumer tue'")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Paracétoïde 7G") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Paracétoïde 7G :" , "Un antibiotique puissant capable d'enrayer n'importe quelle infection\n\nLa notice précise : 'ce médicament peut parfois provoquer quelques effets secondaires gênants (acné, vomissements, convulsions et mort violente)'")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pavés de béton informes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pavés de béton informes :" , "Ça ne ressemble pas le moins du monde à des briques, mais c'est en béton armé et ça doit pouvoir servir de défenses chez soi...\n\nAu pire, jetez-les sur des zombies, ça sera un peu comme une manifestation")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pelures de peau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pelures de peau :" , "Cet horrible lambeau de chair a dû être arraché à un autre citoyen, avant d'être abandonné aux vers pendant quelques temps\n\nSon odeur atroce devrait pouvoir couvrir votre propre odeur corporelle : cet objet augmente sensiblement vos chances de survie en cas de camping (vous devez le garder sur vous pour profiter de cet avantage)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Petit manche vibrant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Petit manche vibrant :" , "Il vibre, vous titille et vous chatouille et vous fait oublier tous vos soucis pendant quelques instants")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Petit manche vibrant (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Petit manche vibrant (démonté) :" , "Il vibre, vous titille et vous chatouille et vous fait oublier tous vos soucis pendant quelques instants\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Petits beurres rances") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Petits beurres rances :" , "C'est sec et ça a un aspect rassi, vous donneriez n'importe quoi pour faire passer le gout de ces biscuits...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pile") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pile :" , "La pile sert à plein de trucs, mais ça se décharge des fois trop vite...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pim's périmé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pim's périmé :" , "Une poignée de biscuits fourrés à la confiture de ... en fait vous l'ignorez...\n\nPeut-être un fruit, mais ça a un gout de viande maintenant\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Piqûre de calmant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Piqûre de calmant :" , "Allez calmez-vous... Vous en verrez bien d'autres")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pistolet à eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pistolet à eau :" , "Le Pistolet à Eau... Finalement, le Désert n'est qu'un grand bac à sable...\n\nNotez que ce jouet n'est efficace qu'avec de l'eau pure (celle d'une gourde par exemple)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pistolet à eau (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pistolet à eau (démonté) :" , "Le Pistolet à Eau... Finalement, le Désert n'est qu'un grand bac à sable...\n\nNotez que ce jouet n'est efficace qu'avec de l'eau pure (celle d'une gourde par exemple)\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier commun") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier commun :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier inhabituel") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier inhabituel :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier rare") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier rare :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier très rare") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier très rare :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier épique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier épique :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier mythique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier mythique :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plan de chantier légendaire") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plan de chantier légendaire :" , "Vous tenez entre vos mains ce qui ressemble à un projet de chantier !\n\nDifficile de comprendre plus précisément ce dont il s'agit, il vous faudrait l'étudier pour en tirer quoi que ce soit")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Planche tordue") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Planche tordue :" , "Une planche de bois complètement moisie mais encore à peu près solide...\n\nLe bois est utilisé pour la construction de bâtiments en ville (ramenez-le dans la Section Banque)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plaque de bois solide") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plaque de bois solide :" , "Ce gros couvercle de caisse fera bien l'affaire pour bloquer une fenêtre ou une porte chez vous ou en ville...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plaque de tôle") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plaque de tôle :" , "Rien ne vaut une plaque de tôle rouillée pour empêcher les zombies de vous atteindre...\n\nles défenses comptent double si elles sont installées en ville plutôt que chez soi")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Plat fait-maison douteux") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Plat fait-maison douteux :" , "Des ingrédients combinés un peu n'importe comment, une ébauche de cuisson et un assaisonnement au sable du désert\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poignée de bonbons") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poignée de bonbons :" , "Vous avez une petite larme à l'oeil en contemplant cette poignée de délicieux bonbons...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poignée de vis et écrous") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poignée de vis et écrous :" , "Certaines pièces sont rouillées, d'autres sont couvertes de mousse verdâtre, mais elles ont toutes au moins le mérite de continuer à remplir leur rôle, plus ou moins")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pointeur laser brûlant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pointeur laser brûlant :" , "Interdit dans le monde après qu'une personne d'âge avancée ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pointeur laser brûlant (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pointeur laser brûlant (démonté) :" , "Interdit dans le monde après qu'une personne d'âge avancée ait perdu la vue en croisant le faisceau de ce petit objet, il saura être utile pour trancher de la chair putréfiée !\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pomme") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pomme :" , "Si Newton avait reçu une pomme comme celle-ci sur la tête, il aurait surement pensé à autre chose qu'à la loi de la Gravitation Universelle...\n\nCela étant dit, il doit bien y avoir quelques vitamines là dedans\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pompe à jerrycan") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pompe à jerrycan :" , "Avant, ce gadget faisait rire tout le monde au rayon bricolage, summum de l'inutilité\n\nAujourd'hui, c'est une arme redoutable qui utilise de l'eau non-purifiée (l'embout s'adapte sur un jerrycan) pour la projeter sous forme de vapeur d'eau pure !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pompe à jerrycan (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pompe à jerrycan (démonté) :" , "Avant, ce gadget faisait rire tout le monde au rayon bricolage, summum de l'inutilité\n\nAujourd'hui, c'est une arme redoutable qui utilise de l'eau non-purifiée (l'embout s'adapte sur un jerrycan) pour la projeter sous forme de vapeur d'eau pure !\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Portière de voiture") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Portière de voiture :" , "Cette grosse portière fera parfaitement office de bouclier improvisé dans le désert, quand il s'agira de passer en force dans des hordes de cadavres avides de votre délicieux cerveau")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Portière de voiture incomplète") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Portière de voiture incomplète :" , "Une portière de voiture, mais à laquelle il manque certaines parties pour pouvoir la tenir en main...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poudre super-fuzz") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poudre super-fuzz :" , "Selon les époques, cette poudre a tour à tour servi de détonateur pour divers pièces d'artillerie, puis comme drogue bas de gamme pour citoyen en manque avant d'être finalement utilisée comme ingrédient principal dans les feux d'artifice\n\nDans les 3 cas, beaucoup de gens n'y ont pas survécu")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poudre-comète brute") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poudre-comète brute :" , "Cette poudre de feux d'artifice pourrait faire une bonne distraction, si elle était utilisée correctement...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poule") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poule :" , "Bon, il n'y a plus qu'à trouver un boucher\n\nAccessoirement, ça peut aussi se lancer sur un zombie...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poutre rafistolée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poutre rafistolée :" , "Un assemblage de bois qui forme une poutre de soutien relativement solide")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Produit corrosif") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Produit corrosif :" , "Avec les bons ingrédients, cet acide pourrait devenir un dangereux poison\n\nEncore faut-il vraiment vouloir tuer quelqu'un...Vous ne le souhaitez pas, n'est-ce pas ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Produits pharmaceutiques") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Produits pharmaceutiques :" , "Un petit flacon et des produits mystérieux emballés sous plastique. Aucune idée de ce à quoi ça peut bien servir... Peut être qu'en le mélangeant avec un autre produit ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Purée de charognardes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Purée de charognardes :" , "Ça sent vraiment très mauvais\n\nCette boule est un agrégat de 'Baies charognardes' qui ont poussé sur un cadavre quelconque\n\nSi vous n'avez pas peur de mourir d'une infection virulente, peut-être qu'elle pourrait vous rassasier si vous la mangiez ?\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Radio K7") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Radio k7 :" , "Un ancien transistor avec une cassette de blues dedans, la radio elle-même est inutile car on ne capte plus rien de nos jours...\n\nMais avoir un peu de musique chez soi pour couvrir les hurlements de ses voisins en train de se faire dévorer est toujours appréciable")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Radio K7 (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Radio k7 (démonté) :" , "Un ancien transistor avec une cassette de blues dedans, la radio elle-même est inutile car on ne capte plus rien de nos jours...\n\nMais avoir un peu de musique chez soi pour couvrir les hurlements de ses voisins en train de se faire dévorer est toujours appréciable\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Rat") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Rat :" , "Bon, il n'y a plus qu'à trouver un boucher. Accessoirement, ça peut aussi se lancer sur un zombie...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Ration d'eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Ration d'eau :" , "La gourde vous permet de vous désaltérer en dehors de la ville\n\nL'eau permet de récupérer ses points d'action (1 fois par jour) et d'étancher la soif (pas de limitation par jour)\n\nEn utilisant cet objet, vous obtenez l'état `Hydratation` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Revolver") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Revolver :" , "Une arme de poing : le modèle P-22, très réputé pour sa fiabilité et sa grande précision\n\nMais ça ne sert strictement à rien sans munition...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Revolver (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Revolver (démonté) :" , "Une arme de poing : le modèle P-22, très réputé pour sa fiabilité et sa grande précision\n\nMais ça ne sert strictement à rien sans munition...\n\nCependant, il faudra monter ce objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Rocking chair") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Rocking chair :" , "ZZzzzz... Couinement... ZZzzzz... Couinement...\n\nC'est une chaise comme au bon vieux temps, qui se balance")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Réfrigérateur d'étudiant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Réfrigérateur d'étudiant :" , "Une grosse machine pour garder les choses fraiches et les empêcher de pourrir trop vite. Elle ne fonctionne plus mais on doit bien pouvoir en tirer quelque chose")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Réserves d'un citoyen avisé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Réserves d'un citoyen avisé :" , "Quand on acquiert une certaine expérience du monde dans lequel on vit, on apprend vite à mettre de côté des petites babioles utiles\n\nCar on sait qu'un jour, elles nous sauveront la vie")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac d'herbe fraîche") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac d'herbe fraîche :" , "Puisqu'on vous dit que c'est de l'herbe banale, il y a surement une autre utilité à cette herbe qu'une simple cigarette roulée")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac de siment") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac de siment :" , "Un gros sac de ciment de qualité très moyenne... Une fois dilué dans de l'eau, ça sèche rapidement pour donner du béton particulièrement résistant !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac plastique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac plastique :" , "Un vieux sac plastique de super-marché qui peut se transformer en arme redoutable si vous le remplissez d'eau...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac plastique + explosif") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac plastique + explosif :" , "Un sac plastique fixé à une charge explosive\n\nTout un programme, simple et efficace, reste à le remplir...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac super-pratique") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac super-pratique :" , "Le compagnon de voyage idéal !\n\nPoches latérales, étanche, renforcé aux épaules, auto-massant pendant la marche et avec un joli logo 'Desert Addict' chromé")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sac supplémentaire") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sac supplémentaire :" , "Idéal pour vos randonnées entre amis, il vous permet de stocker plus de souvenirs: biologiques, nucléaires ou autres")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sacoche usée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sacoche usée :" , "Cette petite sacoche en cuir semble contenir des documents\n\nVous priez très fort pour que cela soit un magazine adulte ou le plan d'un nouveau chantier surpuissant, et pas un quelconque relevé comptable...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Scie à métaux") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Scie à métaux :" , "Une scie dont les dents sont pour la plupart tordues, mais qui fera bien l'affaire pour couper des choses")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Scie à métaux abimée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Scie à métaux abimée :" , "Une scie qui pourrait être pratique, si elle était rafistolée")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Serpent de 2 mètres") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Serpent de 2 mètres :" , "C'est vert, ça mord et ça siffle, il n'y a plus qu'à trouver un boucher pour se tailler un steak de reptile\n\nAccessoirement, ça peut aussi se lancer sur un zombie...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Souche de bois pourrie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Souche de bois pourrie :" , "Une grosse souche de bois couverte de champignons visqueux, on ne pourra sans doute rien en faire, à moins de le découper proprement en ville...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Souche de bois pourrie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Souche de bois pourrie :" , "Une grosse souche de bois couverte de champignons visqueux, on ne pourra sans doute rien en faire, à moins de le découper proprement en ville...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Sport-elec") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sport-elec :" , "La version militaire d'un gadget pour se muscler à coups de décharges électriques\n\nIl retire la fatigue et régénère vos points d'action, mais cause des lésions graves (voire vous fait mourir dans d'atroces souffrances)")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sport-elec (éteint)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sport-elec (éteint) :" , "La version militaire d'un gadget pour se muscler à coups de décharges électriques. Il retire la fatigue et régénère vos points d'action, mais cause des lésions graves (voire vous fait mourir dans d'atroces souffrances)\n\nIl faudra le charger à l'aide d'une pile avant de l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Steak appétissant") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Steak appétissant :" , "C'est un peu élastique et ça sent même le poisson... On se demande bien ce que ça peut être, mais c'est surement plein de vitamines\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Steak de sciure") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Steak de sciure :" , "Une tranche de viande recouverte de sciure et de copeaux de bois...\n\nA moins que ce ne soit pas des copeaux, mais des vers à bois, ce qui semblerait logique puisque ca n'arrête de pas de bouger\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Structures métalliques") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Structures métalliques :" , "Du métal assemblé pour former une structure de soutien")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Stéroïdes anabolisants") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Stéroïdes anabolisants :" , "Cette drogue est idéale pour vous faire voir la vie en rose : plus de Fatigue au prix de seulement quelques convulsions et d'un peu de bave aux lèvres... Gare à l'accoutumance !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Substance épaisse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Substance épaisse :" , "Ce flacon contient un liquide aux couleurs... étonnantes\n\nPeut être qu'en le mélangeant avec autre chose, vous pourriez obtenir quelque chose d'utile ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sérum pour goule") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sérum pour goule :" , "Ce Sérum extrêmement rare a été mis au point à partir de l'ADN d'un spécimen presque immunisé ayant résisté plus de 3 jours à une morsure infectieuse, il permet de rendre à une goule son état d'être humain normal")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Table järpen") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Table järpen :" , "Entièrement assemblée avec des élastiques et des picots de bois, cette table fera sûrement très joli dans votre 'salon'\n\nEt mise à la verticale, elle pourrait bien aussi vous sauver la vie, un soir")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tapis persan") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tapis persan :" , "Ca vous évitera de voir toutes ces choses horribles qui jonchent le sol de votre maison...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Taser d'auto-défense") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Taser d'auto-défense :" , "Un gadget de poing qui lâche une décharge électrique effroyable dans le corps de la victime\n\nPas très efficace quand on sait que les zombies ne craignent pas la douleur\n\Mais vous pouvez toujours espérer faire éclater un membre ou un organe vital avec cette décharge ?")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Taser d'auto-défense (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Taser d'auto-défense (démonté) :" , "Un gadget de poing qui lâche une décharge électrique effroyable dans le corps de la victime\n\nPas très efficace quand on sait que les zombies ne craignent pas la douleur\n\Mais vous pouvez toujours espérer faire éclater un membre ou un organe vital avec cette décharge ?\n\nCependant, il faudra monter cet objet avec d'autres matériaux pour l'utiliser")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Teddy n'ours") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Teddy n'ours :" , "Un petit doudou en peluche qui a dû faire le bonheur d'un enfant... Un jour...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Toile de tente") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Toile de tente :" , "Une grande toile de tente solide mais plus très étanche\n\nIdéal pour passer une bonne nuit dehors, à la belle étoile (si on fait abstraction de la vermine, des zombies, des maladies, des tempêtes et du froid)\n\nElle augmente sensiblement vos chances de survie en cas de camping : vous devez la garder sur vous pour profiter de ce bonus")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tondeuse à gazon") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tondeuse à gazon :" , "Vous aimez quand c'est propre droit et que ça sent le frais ?\n\nEn l'occurrence, oubliez tout ça !\n\nQuand vous l'utiliserez ça ne sera pas le cas")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tondeuse à gazon (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tondeuse à gazon (démonté) :" , "Un outil de jardin classique, qui fonctionne sans énergie, mais qui est fourni en kit... Il faudrait finir le montage pour s'en servir")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Torche") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Torche :" , "Elle doit bien pouvoir brûler quelques heures... Ça sera toujours ça de plus pour éloigner les zombies\n\nDe plus, si vous la posez au sol dans le désert, elle permettra d'annuler la pénalité aux fouilles de nuit dans ce secteur")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Torche consumée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Torche consumée :" , "Un vieux bout de bois calciné qui ne vous servira sûrement plus à grand chose...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tournevis") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tournevis :" , "Le tournevis visse et dévisse, il vous permet de réparer des choses et à la limite, d'ouvrir des boîtes de conserve\n\nEn dernier ressort, plantez-le dans une tête: ça pourrait bien vous sauver la vie...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tronçonneuse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tronçonneuse :" , "Avec ça, vous allez faire un vrai massacre. Mais sachez qu\'on en ressort peut-être victorieux mais pas tout à fait indemne...\n\nCette machine infernale a été modifiée et fonctionne (chose incroyable) avec une simple pile !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tronçonneuse (démonté)") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tronçonneuse (démonté) :" , "Un outil hautement amusant, mais il semblerait qu'il manque une courroie et quelques babioles pour qu'elle fonctionne...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tréteau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tréteau :" , "Un tréteau relativement solide qui devrait s'avérer utile pour consolider vos défenses personnelles ou celles de la ville")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tube en cuivre") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tube en cuivre :" , "Un tube en cuivre, un peu sale et dont l'utilité vous échappe...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tube de lancement floush") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tube de lancement floush :" , "Plusieurs longs tubes en plastique sans grand intérêt")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Twinoïde 500MG") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Twinoïde 500MG :" , "Un concentré de caféïne, de théine, de diverses drogues chimiques et de testicules de taureau broyées\n\nLa drogue idéale pour les coups de fouets en fin de journée, ou quand il s'agit de fuir face à une horde de zombies qui en veulent à votre foie")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Téléphone portable") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Téléphone portable :" , "Cet antique appareil était un modèle de téléphone très réputé\n\nC'était jusqu'à ce qu'il cause la mort de millions de personnes en explosant et rayant de la carte plusieurs grandes villes à travers le monde, ca fera sûrement une bonne grenade")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Unité centrale") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Unité centrale :" , "Cette vieille boîte en ferraille contenait tout un tas de composants électroniques auparavant\n\nElle ne semble plus avoir aucune utilité maintenant...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Viande humaine") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Viande humaine :" , "Hop, on oublie rapidement ce qu'on vient d'avaler et on passe à la suite...\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Viande indéfinissable") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Viande indéfinissable :" , "Vous êtes quasiment certain que cette chose molle et visqueuse peut se manger\n\nEn tous cas, ça ne sent pas mauvais et ça ne bouge pas\n\nEn utilisant cet objet, vous obtenez l'état `Rassasiement` ainsi que 6 points d'actions !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Vieille machine à laver") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Vieille machine à laver :" , "Une antique machine à laver le linge, artefact d'une civilisation qui plaçait la propreté au dessus de toute autre préoccupation\n\nCa vous fait bien rigoler aujourd'hui...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Vieille porte") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Vieille porte :" , "C'est une porte en bois\n\nModèle classique, autrefois blanche, mais couverte de terre aujourd'hui\n\nÇa pourra toujours servir...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Vodka marinostov") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Vodka marinostov :" , "Un coup de fouet très violent pour oublier la fatigue (et récupérer tous ses points d'action !)...\n\n85° d'alcool pur, avec diverses choses vaguement organiques qui flottent dedans, santé camarade !")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "'Debout-les-morts'") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("'Debout-les-morts' :" , "Un cocktail inventé par un certain Joey si on en croit l'étiquette\n\nMélange de rhum, de piment rouge et de whiskey, avec un doigt mariné qui flotte entre deux eaux...")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

/////////////////////////////////////////////////////////////////////Défenses et batiments/////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Atelier") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Atelier :" , "Permet d'effectuer des transformations de ressources\n\nL'avancée d'une ville passe par la construction d'un atelier crasseux et rempli d'un bazar indéfinissable\n\nC'est un pré-requis pour tous les bâtiments avancés en ville afin de les construire ainsi qu'à l'assemblage de matériaux...\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Planche tordue`\n`8 Ferrailles`\n`1 Pavés de béton informes`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Boucherie") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Boucherie :" , "Permet de transformer les animaux en nourriture\n\nPermet de transformer vos petits compagnons (chiens, chats, serpents…) en nourriture\n\nQuand on pense qu'il y en a qui préféraient le boeuf...\n\n:hammer_pick: Matériaux nécessaires :\n\n`9 Planche tordue`\n`4 Ferraille`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Crémato-cue") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Crémato-cue :" , "Permet d'obtenir 4 Viandes humaines à partir d'un citoyen mort\n\nBon, on sait tous ce qu'est un Crématorium ? On sait aussi à quoi sert un Barbecue ?\n\nEh bien c'est facile de deviner le fonctionnement et l'utilité du Crémato-Cue\n\nEn tout cas, fini la famine...\n\n:hammer_pick: Matériaux nécessaires :\n\n`8 Poutre rafistolée`\n`1 Structures métalliques`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Manufacture") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Manufacture :" , "Réduit le coût des transformations de l'atelier de 1 PA\n\nCette version améliorée de l'atelier permet de réduire de 1 PA le coût de toutes les transformations effectuées dans l'atelier\n\n:hammer_pick: Matériaux nécessaires :\n\n`5 Poutre rafistolée`\n`5 Structures métalliques`\n`3 Poignée de vis et écrous`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Scies hurlantes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Scies hurlantes :" , "Des scies circulaires bricolées à même le sol et activées par un savant système d'élastiques\n\nLe bruit strident produit par la rotation des scies fait étrangement penser à un cri humain...\n\n:hammer_pick: Matériaux nécessaires :\n\n`5 Ferraille`\n`2 Structures métalliques`\n`3 Poignée de vis et écrous`\n`2 Rustine`\n\n:shield: Points de défense : 30")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tour") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tour :" , "Permet de savoir observer les environs grâce à : `=Observation`\n\nCette tour placée près de l'entrée permet d'obtenir aussi une meilleur défense et une meilleur organisation en cas d'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`3 Poutre rafistolée`\n`2 Structures métalliques`\n\n:shield: Points de défense : 5")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Dynamitage") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Dynamitage :" , "C'est le nom que l'on donne à cette genre de boule d'explosif qui permettra de rouler et faire pleuvoir des zombies en cas d'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`3 Explosifs bruts`\n\n:shield: Points de défense [Utilisation unique] : 30")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Piège à loups") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Piège à loups :" , "Ca ne tuera pas les zombies, mais ça les stoppera dans leur avancée en cas d'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`2 Ferraille`\n`1 Poignée de vis et écrous`\n`3 Viande humaine`\n\n:shield: Points de défense [Utilisation unique] : 25")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Monticules pour canons") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Monticules pour canons :" , "Plusieurs monticules de terre renforcés par des poutres en bois\n\nLe pré-requis indispensable pour construire de puissantes tourelles de défense...\n\n:hammer_pick: Matériaux nécessaires :\n\n`7 Poutre rafistolée`\n`1 Structures métalliques`\n`3 Pavés de béton informes`\n\n:shield: Points de défense : 5")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Lance-tôle") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Lance-tôle :" , "Projetez de lourdes plaques de tôle en ligne droite dans le champ de bataille\n\nUne boucherie qu'on espère ne jamais revoir, mais c'est efficace\n\n:hammer_pick: Matériaux nécessaires :\n\n`5 Poutre rafistolée`\n`1 Structures métalliques`\n`5 Poignée de vis et écrous`\n`3 Plaque de tôle`\n`3 Explosifs bruts`\n\n:shield: Points de défense : 40")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Perforeuse") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Perforeuse :" , "Un mécanisme puissant à air comprimé qui projette des boules de clous tordus et autres ferrailles rouillées\n\nParfait pour faire des trous gros comme le poing dans n'importe quoi (qui)\n\n:hammer_pick: Matériaux nécessaires :\n\n`3 Structures métalliques`\n`15 Poignée de vis et écrous`\n`2 Tube de cuivre`\n`1 Composant électronique`\n\n:shield: Points de défense : 30")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Canon à briques") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Canon à briques :" , "Une tourelle automatisée qui projette des rochers à grande vitesse en direction de la porte\n\nIl s'active à minuit et tire sans discontinuer pendant plusieurs minutes (si vous comptiez dormir dans le silence, c'est loupé)\n\n:hammer_pick: Matériaux nécessaires :\n\n`5 Structures métalliques`\n`3 Pavés de béton informes`\n`2 Tube de cuivre`\n`1 Composant électronique`\n\n:shield: Points de défense : 35")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tourniquet à poutres") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tourniquet à poutres :" , "Quatre poutres en bois fixées sur un axe\n\nEt ça tourne très vite\n\n:hammer_pick: Matériaux nécessaires :\n\n`2 Poutre rafistolée`\n`1 Structures métalliques`\n\n:shield: Points de défense : 12")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Porte améliorée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Porte améliorée :" , "Un bricolage un peu rustique qui renforce la porte capable de bloquer plus de zombies en cas d'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`2 Ferraille`\n\n:shield: Points de défense : 2")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Porte à piston") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Porte à piston :" , "Permet de fermer automatiquement la porte à 23h30\n\nGrâce à un puissant système de pistons, ce système ferme automatiquement la porte à 23:30 tous les soirs et bloque son ouverture jusqu'à l'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Planche tordue`\n`3 Structures métalliques`\n`4 Poignée de vis et écrous`\n`1 Tube de cuivre`\n\n:shield: Points de défense : 10")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Blindage d'entrée") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Blindage d'entrée :" , "De gros renforts cloués à même la porte de la ville pour en améliorer la résistance\n\n:hammer_pick: Matériaux nécessaires :\n\n`3 Planche tordue`\n\n:shield: Points de défense : 5")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fondations") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fondations :" , "Les fondations permettent la réalisation de « Projets Insensés » (des constructions de longue haleine mais aux effets très puissants)\n\n:hammer_pick: Matériaux nécessaires :\n\n`8 Planche tordue`\n`5 Ferrailles`\n`2 Pavés de béton informes`")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fausse ville") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fausse ville :" , "Les zombies sont un peu simples dans leur tête, c'est bien connu\n\nSi vous construisez une seconde fausse ville, vous déporterez toute une partie de l'attaque là-bas...\n\nNécessite de posséder les 'Fondations' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Planche tordue`\n`20 Poutre rafistolée`\n`30 Ferraille`\n`10 Poignée de vis et écrous`\n\n:shield: Points de défense : 180")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Derrick artisanal") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Derrick artisanal :" , "Un Projet Insensé prévu pour l'extraction d'une grande quantité d'eau dans les nappes phréatiques les plus profondes ! Après ça, plus de problème d'eau au puits\n\nNécessite de posséder les 'Fondations' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Poutre rafistolée`\n`10 Structures métalliques`\n`3 Pavés de béton informes`\n`4 Tube de cuivre`\n\n:droplet: Rations d'eau supplémentaires : 150")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Le grand déménagement") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Le grand déménagement :" , "Ce Projet Insensé vise à restructurer la ville entière pour en améliorer la défense\n\nSerrez les maisons, barrez les ruelles, installez des tourelles sur tous les toits, c'est ça, le Grand Déménagement\n\nNécessite de posséder les 'Fondations' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`15 Poutre rafistolée`\n`7 Structures métalliques`\n`5 Pavés de béton informes`\n\n:shield: Points de défense : 110")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Pompe") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Pompe :" , "Permet de prendre plus d'une Ration d'eau par jour au puits\n\nLa pompe permet d'augmenter le rendement du puits et débloque l'ensemble des constructions basées sur l'eau\n\nElle augmente aussi sensiblement les réserves souterraines du puits\n\n:hammer_pick: Matériaux nécessaires :\n\n`8 Ferraille`\n`1 Tube de cuivre`\n\n:droplet: Rations d'eau supplémentaires : 10")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Purificateur d'eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Purificateur d'eau :" , "Permet de transformer des Jerrycans pleins en  Rations d'eau\n\nTransforme l'eau des Jerrycans trouvés dans le désert en Rations d'eau potable\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`6 Planche tordue`\n`5 Ferraille`\n`1 Tube de cuivre`\n\n:droplet: Purifier un jerrycan plein en ration d'eau potable demande 1 PA ainsi que 15 minutes")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Potager") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Potager :" , "Le jardin permet de créer des légumes pas trop moisis, des fruits qui commencent à pourrir avant de mûrir\n\nBref, des rations alimentaires, si on ne fait pas trop le difficile...\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Poutre rafistolée`\n`10 Ration d'eau`\n`1 Produits pharmaceutiques`\n\n:corn: Permet de pouvoir faire de l'agriculture")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Champ de mines à eau") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Champ de mines à eau :" , "Assemblez de la poudre, des dispositifs détonateurs et de l'eau pure et vous obtiendrez une belle bouillie de chair putréfiée ce soir\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Ration d'eau`\n`3 Ferrailles`\n`1 Explosifs bruts`\n`1 Détonateur compact`\n\n:shield: Points de défense [Utilisation unique] : 60")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Tuyauteries") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Tuyauteries :" , "Grâce à ce réseau de tuyaux, vous pourrez bâtir de puissantes défenses à base d'eau en ville !\n\nDe plus, ce système apporte un petit surplus d'eau au puits\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`5 Ferrailles`\n`5 Structures métalliques`\n`5 Poignée de vis et écrous`\n`2 Tube de cuivre`\n\n:droplet: Rations d'eau supplémentaires : 15")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Arroseurs automatiques") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Arroseurs automatiques :" , "Traditionnellement utilisés dans un jardin, ils servent aussi de défense mortelle contre les Hordes\n\nIls tuent beaucoup de zombies, mais il faut prévoir un stock d'eau important\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`30 Ration d'eau`\n`15 Ferraille`\n`7 Poutre rafistolée`\n`1 Tube de cuivre`\n\n:shield: Points de défense : 50")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Sani-broyeur") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Sani-broyeur :" , "Deux grosses plaques autour du passage de l'entrée et un puissant système de pistons : quand on les actionne, ça écrase instantanément tout ce qui se trouvait au milieu\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Structures métalliques`\n`2 Poutre rafistolée`\n`2 Tube de cuivre`\n`2 Plaque de tôle`\n\n:shield: Points de défense : 20")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Vaporisateur de rue") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Vaporisateur de rue :" , "Le vaporisateur est un système qui consomme une quantité négligeable d'eau pure et qui la projette en fine vapeur brûlante dans les rues de la ville\n\nIdéale pour faire fondre vos amis putréfiés qui nous rendent visite chaque soir\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Planche tordue`\n`10 Ration d'eau`\n`7 Structures métalliques`\n`1 Poignée de vis et écrous`\n\n:shield: Points de défense : 30")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Foreuse pour le puits") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Foreuse pour le puits :" , "Une foreuse artisanale qui permettra de puiser l'eau un peu plus profondément dans le sol et ainsi augmenter sensiblement les réserves disponibles\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`7 Poutre rafistolée`\n`2 Structures métalliques`\n\n:droplet: Rations d'eau supplémentaires : 40")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Projet Eden") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Projet Eden :" , "La solution de la dernière chance quand on n'a plus d'eau : perforer les nappes phréatiques à la dynamite pour étendre les réserves de la ville\n\nNécessite de posséder la 'Pompe' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`8 Structures métalliques`\n`5 Poutre rafistolée`\n`5 Explosifs bruts`\n\n:droplet: Rations d'eau supplémentaires : 70")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Renforts de muraille") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Renforts de muraille :" , "Augmente sensiblement les défenses de la ville\n\nNécessite de posséder les 'Remparts avancés' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`6 Planche tordue`\n`4 Ferraille`\n\n:shield: Points de défense : 7")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;


bot.on('message', message => {
  if (message.content === prefix + "Barbelés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Barbelés :" , "C'est encore plus artisanal que du barbelé classique, puisqu'on ne dispose même pas de fil de fer\n\n:hammer_pick: Matériaux nécessaires :\n\n`3 Ferraille`\n\n:shield: Points de défense : 3")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Appâts") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Appâts :" , "Un bout de viande attaché aux barbelés pour retenir quelques zombies\n\n:hammer_pick: Matériaux nécessaires :\n\n`1 Os charnu`\n\n:shield: Points de défense [Utilisation Unique] : 10")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Barrières") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Barrières :" , "Des clôtures en bois tout autour de la ville qui 'devraient' ralentir suffisamment les hordes de zombies pendant l'attaque\n\n:hammer_pick: Matériaux nécessaires :\n\n`6 Poutre rafistolée`\n`5 Poignée de vis et écrous`\n\n:shield: Points de défense : 20")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Grand fossé") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Grand fossé :" , "Le Grand Fossé est une défense efficace : un grand trou entourant la ville\n\nPratique sur le long terme, on pourra le remplir avec un tas de choses pour le rendre encore plus efficace ! \n\n:hammer_pick: Matériaux nécessaires :\n\n`8 Planche tordue`\n\n:shield: Points de défense : 20")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Champ de pieux") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Champ de pieux :" , "Une amélioration du Grand Fossé : le remplir de gros pieux en bois acérés\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Planche tordue`\n\n:shield: Points de défense : 30")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Douves") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Douves :" , "Une amélioration du Grand Fossé : y mettre de l'eau\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Ration d'eau`\n\n:shield: Points de défense : 25")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Rape à zombies") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Rape à zombies :" , "Couvrez une large surface de terre avec une multitude de morceaux de métal tranchant et vous obtiendrez la plus grande rape à fromage du monde\n\n:hammer_pick: Matériaux nécessaires :\n\n`20 Ferraille`\n`10 Poignée de vis et écrous`\n`3 Plaque de tôle`\n\n:shield: Points de défense : 35")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Oubliettes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Oubliettes :" , "Plein de trous tout autour de la ville dissimulés sous des bâches\n\nIl ne reste alors plus qu'à attendre que quelque chose tombe dedans\n\n:hammer_pick: Matériaux nécessaires :\n\n`15 Planche tordue`\n`5 Toile de tente`\n\n:shield: Points de défense : 30")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Muraille rasoir") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Murailles rasoir :" , "Une recette simple : des morceaux de ferraille rouillés qui dépassent partout sur la Muraille de la ville pour en faire une sorte de rape à zombie\n\nNécessite de posséder les 'Remparts avancés' pour sa création\n\n:hammer_pick: Matériaux nécessaires :\n\n`15 Ferraille`\n`5 Poignée de vis et écrous`\n\n:shield: Points de défense : 20")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Remparts avancés") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Remparts avancés :" , "Tant pis pour les défenses ce soir, mais une muraille mieux construite permettra plus tard d'y ajouter de nombreuses améliorations\n\nLes remparts avancés débloquent l'ensemble des constructions basées sur la muraille\n\n:hammer_pick: Matériaux nécessaires :\n\n`9 Poutre rafistolée`\n`6 Structures métalliques`\n`6 Poignée de vis et écrous`\n\n:shield: Points de défense : 5")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Fixations de défenses") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Fixations de défenses :" , "Un système ingénieux pour optimiser l'usage de plaques de défenses (tôle ou autre)\n\nChaque objet pourra sûrement servir à améliorer la défense de la ville, cela permet de pouvoir les placer !\n\n:hammer_pick: Matériaux nécessaires :\n\n`10 Poutre rafistolée`\n`7 Structures métalliques`\n`7 Poignée de vis et écrous`\n\n:shield: Points de défense : 5")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Grogro mur") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Grogro mur :" , "Qu'est-ce qui est mieux qu'un mur ?\n\nUn gros mur\n\n:hammer_pick: Matériaux nécessaires :\n\n`15 Poutre rafistolée`\n`10 Planche tordue`\n`10 Structures métalliques`\n`2 Pavés de béton informes`\n\n:shield: Points de défense : 70")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Poutres de renfort") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Poutres de renfort :" , "Des structures métalliques pour renforcer les parties faibles de la muraille\n\n:hammer_pick: Matériaux nécessaires :\n\n`9 Structures métalliques`\n`5 Poutre rafistolée`\n`5 Poignée de vis et écrous`\n\n:shield: Points de défense : 15")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

bot.on('message', message => {
  if (message.content === prefix + "Muraille à pointes") {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username , message.author.avatarURL)
    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
    .setColor(0xff0000)
    .addField("Murailles à pointes :" , "Un grand nombre de pieux métalliques fixés au sommet des remparts pour faire des brochettes de zombie à la tombée de la nuit\n\n:hammer_pick: Matériaux nécessaires :\n\n`15 Ferraille`\n`4 Poignée de vis et écrous`\n`2 Poutre rafistolée`\n\n:shield: Points de défense : 15")
    .setThumbnail("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
    .setTimestamp()
    message.channel.send({embed})
  }
}) ;

/////////////////////////////////////////////////////////////////////Référence d'animes////////////////////////////////////////////////////////////////////////////////////////

bot.on('message', message => {
  if (message.content === prefix + "Mangas") {
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username , message.author.avatarURL)
      .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
      .setColor(3447003)
   .addField("Bienvenue sur le menu d'aide !" , "Tu auras des informations à propos du RP sur chacunes de ces commandes, l'importance est classé de haut en bas, prend le temps de lire !\n\n:closed_book:`=SAO`\n:bust_in_silhouette:`=Personnage`\n:diamond_shape_with_a_dot_inside:`=Classes`\n:cyclone:`=Compétences`\n:trident: `=Particularités`\n:hammer:`=Amélioration`\n:dagger:`=Armes`\n:walking:`=Trajets`\n:game_die:`=Rolls`\n:crossed_swords:`=Combat`\n:white_flower:`=Etats`\n:book:`=Quêtes`\n:skull:`=Mort`\n:heartbeat:`=Rétablissement`\n:sparkles:`=Niveaux`\n:100:`=Caractéristiques`\n:globe_with_meridians:`=Zones`\n:japanese_ogre:`=Monstres`\n:scroll:`=Liste d'objets`\n:tools:`=Crafts`\n:hammer_pick:`=Spécialisations`\n:large_orange_diamond:`=Cristal`\n:cityscape:`=Ville`\n:sunrise_over_mountains:`=Extérieur`\n:classical_building:`=Souterrains`\n:homes:`=Constructions`\n:loud_sound:`=Menus`\n:bank:`=Donjons`\n:fox:`=Familiers`\n:busts_in_silhouette:`=Guilde`\n:alembic:`=Métiers`\n:microphone2:`=Dirigeant`\n:shield:`=Garde`\n:bow_and_arrow:`=Mercenaire`\n:chains:`=Prison`\n:notes:`=Musiques`")
       .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
       .setTimestamp()
       message.channel.send({embed})
     }
});
*/
