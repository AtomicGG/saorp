const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client
let hordeJSON = JSON.parse(fs.readFileSync("horde.json"))
let objets = hordeJSON.objets
let lieux = hordeJSON.lieux
let constructions = hordeJSON.constructions
let défenses = hordeJSON.défenses
const prefix = "="
const nomServeur = "Horde [RP]"
let actif = true

const comparer = (a,b) => {
    if(a.nom < b.nom) return -1
    if(a.nom > b.nom) return 1
    return 0
}

const arrondi = nombre => {
    if(nombre - Math.floor(nombre) > 0.5){
        return Math.floor(nombre) + 1
    }
    else{
        return Math.floor(nombre)
    }
}

const plusOuMoins = nombre => {
    if(arrondi(Math.random()) === 0){
        return nombre
    }
    else{
        return -nombre
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

bot.login(process.env.TOKEN)
bot.generateInvite(["ADMINISTRATOR"]).then(link => console.log(link))
bot.on("guildMemberAdd", membre => {
    if(membre.user.bot) return
    const serveur = bot.guilds.cache.find(serveur => serveur.name === nomServeur)
    if(serveur.roles.cache.some(nom => nom.name === "Sans fiche")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "Sans fiche"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[BLESSURE]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[BLESSURE]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬▬[SEXE]▬▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬▬[SEXE]▬▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[INFECTION]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[INFECTION]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[FAIM]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[FAIM]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[SOIF]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[SOIF]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[ETATS]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[ETATS]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬[ZONE]▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬[ZONE]▬▬▬▬▬"))
    }
    if(serveur.roles.cache.some(nom => nom.name === "▬▬▬▬▬▬▬▬▬▬▬▬▬")){
        membre.roles.add(serveur.roles.cache.find(nom => nom.name === "▬▬▬▬▬▬▬▬▬▬▬▬▬"))
    }
    if(serveur.channels.cache.some(nom => nom.name === "│『💬』ᴅɪsᴄᴜssɪᴏɴ")){
        const salonDiscussion = serveur.channels.cache.find(nom => nom.name === "│『💬』ᴅɪsᴄᴜssɪᴏɴ")
        salonDiscussion.send("۝▬▬๑₪۩۞『ʜᴏʀᴅᴇ [ʀᴘ]』۞۩₪๑▬▬۝\n\n\n:crossed_swords: Bienvenue à toi <@" + membre.user.id + "> tu es maintenant un survivant du monde de Horde [RP] ...\n\n:busts_in_silhouette: Il y a actuellement `" + serveur.memberCount + "` survivants !\n\n:page_with_curl: Si tu as des questions, les assistants et modérateurs sont là pour t'aider !\n\n:book: Pour comprendre comment marche le RP, écris la commande `=Horde` dans le salon #│『📠』ᴄᴏᴍᴍᴀɴᴅᴇs qui te permettra d'afficher toutes les informations nécessaires !\n\n:shield: Souhaitez lui la bienvenue parmi nous mais aussi bonne chance !\n\n\n۝▬▬๑₪۩≡۞≡۩₪๑▬๑₪۩≡۞≡۩₪๑▬▬۝")
    }
})
bot.on("ready", _=>{
    const serveur = bot.guilds.cache.find(serveur => serveur.name === nomServeur)
    const serveurChannelRues = [
		serveur.channels.cache.find(channelRue1 => channelRue1.name.startsWith("ʀᴜᴇ-1『")),
		serveur.channels.cache.find(channelRue2 => channelRue2.name.startsWith("ʀᴜᴇ-2『")),
		serveur.channels.cache.find(channelRue3 => channelRue3.name.startsWith("ʀᴜᴇ-3『")),
		serveur.channels.cache.find(channelRue4 => channelRue4.name.startsWith("ʀᴜᴇ-4『"))
    ]
    const serveurChannelEvenements = serveur.channels.cache.find(channel => channel.name === "『📃』ᴇ́ᴠᴇ̀ɴᴇᴍᴇɴᴛs")
    console.log("Horderp opérationnel !")
    bot.user.setActivity('=Horde', { type: 'PLAYING' })
    .catch(console.error)
    setInterval(toutesLes1Minutes = () => {
        const date = new Date().toLocaleTimeString("fr-FR",{timeZone:"Europe/Paris",hour12:false})
        const heure = Number(date.split(":")[0])
        if(heure === 0 && actif) {
            actif = false
            serveurChannelEvenements.send("```Ce jour est terminé et vous savez ce que ça veut dire ?\n- Votre niveau de faim et de soif monte d'un cran\n- Si vous êtes infecté, l'infection monte d'un cran\n- Si vous n'avez pas dormi 4 heures aujourd'hui, vous avez l'état fatigué\n- Les lieux que vous avez trouvé courageusement aujourd'hui ont été enssevelis sous le sable de la tempête de minuit. Par conséquent, vous ne pouvez plus retourner dans les bâtiments que vous avez trouvés et les objets que vous avez laissés dehors sont par la même occasion perdus à jamais !\n- Vous récupérez vos 6 PA quotidiens```")
            .then(()=> {
                const A = (Math.floor((100) * Math.random() + 1))
                if (A < 25) {
                    const embed = new Discord.MessageEmbed()
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField("Tempête :", "La tempête de cette nuit est assez calme, seulement du vent mais qui n'est pas dangereux, recouvrant peu à peu les lieux de sable")
                        .setTimestamp()
                    serveurChannelEvenements.send({ embed })
                }
                if (A >= 25 & A < 50) {
                    const embed = new Discord.MessageEmbed()
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField("Tempête :", "La tempête de cette nuit est assez violente, quelques petits objets volent et pas mal de sable s'envole en l'air\n\nTous les survivants dehors à l'extérieur prennent une `Blessure`")
                        .setTimestamp()
                    serveurChannelEvenements.send({ embed })
                }
                if (A >= 50 & A < 75) {
                    const embed = new Discord.MessageEmbed()
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField("Tempête :", "La tempête de cette nuit est violente, des panneaux de signalisation ainsi que des grosses pierres arrivent à s'envoler en l'air\n\nTous les survivants dehors à l'extérieur prennent une `Blessure sévère`")
                        .setTimestamp()
                    serveurChannelEvenements.send({ embed })
                }
                if (A >= 75 & A < 90) {
                    const embed = new Discord.MessageEmbed()
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField("Tempête :", "La tempête de cette nuit est très violente, des meubles ainsi que des portes de maison et des débris de verre se font emporté par le vent\n\nTous les survivants dehors à l'extérieur prennent une `Blessure mortelle`")
                        .setTimestamp()
                    serveurChannelEvenements.send({ embed })
                }
                if (A >= 90) {
                    const embed = new Discord.MessageEmbed()
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setColor(0xff0000)
                        .addField("Tempête :", "La tempête de cette nuit est complètement meurtrière, des voitures ainsi que des camions se font soulevés par ce vent qui vous pique limite les yeux\n\nTous les survivants dehors à l'extérieur meurent...")
                        .setTimestamp()
                    serveurChannelEvenements.send({ embed })
                }
            })
            .catch(console.error)
        }
        if(heure !== 0) {
            actif = true
        }
        if(heure >= 7 && heure < 19){
            for (let i = 0 ; i < 4 ; i++){
                if(!/🏙/.test(serveurChannelRues[i].name)){
                    serveurChannelRues[i].setName(serveurChannelRues[i].name.replace(serveurChannelRues[i].name.charAt(6),"🏙"))
                    .then()
                    .catch(console.error)
                }
            }
        } else if(heure >= 6 && heure < 7){
            for (let i = 0 ; i < 4 ; i++){
                if(!/🌆/.test(serveurChannelRues[i].name)){
                    serveurChannelRues[i].setName(serveurChannelRues[i].name.replace(serveurChannelRues[i].name.charAt(6),"🌆"))
                    .then()
                    .catch(console.error)
                }
            }
        } else if(heure >= 19 && heure < 20){
            for (let i = 0 ; i < 4 ; i++){
                if(!/🌇/.test(serveurChannelRues[i].name)){
                    serveurChannelRues[i].setName(serveurChannelRues[i].name.replace(serveurChannelRues[i].name.charAt(6),"🌇"))
                    .then()
                    .catch(console.error)
                }
            }
        } else {
            for (let i = 0 ; i < 4 ; i++){
                if(!/🌃/.test(serveurChannelRues[i].name)){
                    serveurChannelRues[i].setName(serveurChannelRues[i].name.replace(serveurChannelRues[i].name.charAt(6),"🌃"))
                    .then()
                    .catch(console.error)
                }
            }
        }
	}, 60000) //60 secondes
})

bot.on("message", async message =>{
    if(message.author.bot) return
    const serveur = bot.guilds.cache.find(serveur => serveur.name === nomServeur)
    const serveurChannelConstruction = serveur.channels.cache.find(channelConstruction => channelConstruction.name === "『🔨』ᴄᴏɴsᴛʀᴜᴄᴛɪᴏɴs")
	// Pour ajouter des constructions, c'est juste en dessous (n'oubliez pas la virgule et choisissez un bon endroit par rapport
	// aux délimitations avec les rues c: ).
	const serveurVilleChannels = [
		serveur.channels.cache.find(channelBanque => channelBanque.name === "『🏦』ʙᴀɴϙᴜᴇ"), // [0]
		serveur.channels.cache.find(channelPlacePrincipale => channelPlacePrincipale.name === "『🕌』ᴘʟᴀᴄᴇ-ᴘʀɪɴᴄɪᴘᴀʟᴇ"), // [1]
		serveur.channels.cache.find(channelAuberge => channelAuberge.name === "『🏨』ᴀᴜʙᴇʀɢᴇ"), // [2]
		serveur.channels.cache.find(channelRue1 => channelRue1.name.startsWith("ʀᴜᴇ-1『")), // [3]
		serveur.channels.cache.find(channelCabinetMedical => channelCabinetMedical.name === "『🏥』ᴄᴀʙɪɴᴇᴛ-ᴍᴇ́ᴅɪᴄᴀʟ"), // [4]
		serveur.channels.cache.find(channelPrison => channelPrison.name === "『🏤』ᴘʀɪsᴏɴ"), // [5]
		serveur.channels.cache.find(channelRue2 => channelRue2.name.startsWith("ʀᴜᴇ-2『")), // [6]
		serveur.channels.cache.find(channelPuits => channelPuits.name === "『⛲』ᴘᴜɪᴛs"), // [7]
		serveur.channels.cache.find(channelPotager => channelPotager.name === "『🏡』ᴘᴏᴛᴀɢᴇʀ"), // [8]
		serveur.channels.cache.find(channelEnclos => channelEnclos.name === "『🐖』ᴇɴᴄʟᴏs"), // [9]
		serveur.channels.cache.find(channelCuisine => channelCuisine.name === "『🏪』ᴄᴜɪsɪɴᴇ"), // [10]
		serveur.channels.cache.find(channelBoucherie => channelBoucherie.name === "『🏪』ʙᴏᴜᴄʜᴇʀɪᴇ"), // [11]
		serveur.channels.cache.find(channelRue3 => channelRue3.name.startsWith("ʀᴜᴇ-3『")), // [12]
		serveur.channels.cache.find(channelTour => channelTour.name === "『🗼』ᴛᴏᴜʀ"), // [13]
		serveur.channels.cache.find(channelAtelier => channelAtelier.name === "『🏭』ᴀᴛᴇʟɪᴇʀ"), // [14]
		serveur.channels.cache.find(channelGenerateur => channelGenerateur.name === "『🏭』ɢᴇɴᴇʀᴀᴛᴇᴜʀ"), // [15]
		serveur.channels.cache.find(channelMine => channelMine.name === "『🏗』ᴍɪɴᴇ"), // [16]
		serveur.channels.cache.find(channelChantiers => channelChantiers.name === "『🏗』ᴄʜᴀɴᴛɪᴇʀs"), // [17]
		serveur.channels.cache.find(channelRue4 => channelRue4.name.startsWith("ʀᴜᴇ-4『")), // [18]
		serveur.channels.cache.find(channelGrandePorte => channelGrandePorte.name === "〚ɢʀᴀɴᴅᴇ-ᴘᴏʀᴛᴇ〛") // [19]
	]
	const serveurRoleVille = serveur.roles.cache.find(roleVille => roleVille.name === "Ville")
    if(message.content.startsWith(prefix)){
        const truc = message.content.slice(1).trim()
        let longueur = objets.length
        for(let i = 0 ; i < longueur ; i++){
            if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(truc)){
                if(objets[i].description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle(objets[i].nom)
                    .setDescription(objets[i].description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de " + objets[i].nom + " trop longue (>2048)")
                }
            }
        }
        longueur = constructions.length
        for(let i = 0 ; i < longueur ; i++){
            if(new RegExp("^" + escapeRegExp(constructions[i].nom) + "$","i").test(truc)){
                if(constructions[i].description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle(constructions[i].nom)
                    .setDescription(constructions[i].description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de " + constructions[i].nom + " trop longue (>2048)")
                }
            }
        }
        longueur = défenses.length
        for(let i = 0 ; i < longueur ; i++){
            if(new RegExp("^" + escapeRegExp(défenses[i].nom) + "$","i").test(truc)){
                if(défenses[i].description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle(défenses[i].nom)
                    .setDescription(défenses[i].description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de " + défenses[i].nom + " trop longue (>2048)")
                }
            }
        }
        longueur = lieux.length
        for(let i = 0 ; i < longueur ; i++){
            if(new RegExp("^" + escapeRegExp(lieux[i].nom) + "$","i").test(truc)){
                if(lieux[i].description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle(lieux[i].nom)
                    .setDescription(lieux[i].description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de " + lieux[i].nom + " trop longue (>2048)")
                }
            }
        }
        if(/^Chien hargneux attaque$/i.test(truc)){
            let description = ""
            if(Math.random()*100 < 25){
                description = "Le chien mord sa cible !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure`"
            }
            else{
                description = "Le chien rate malheureusement sa morsure..."
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Chien hargneux attaque")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Récolte.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Récolte.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("récolte" in objets[i]){
                        let récoltes = []
                        for(let j = 0 ; j < objets[i].récolte.length ; j++){
                            for(let k = 0 ; k < objets[i].récolte[j].poids ; k++){
                                récoltes.push(objets[i].récolte[j].nom)
                            }
                        }
                        const récolte = récoltes[arrondi(Math.random()*(récoltes.length - 1))]
                        let quantitéMax
                        for(let j = 0 ; j < objets[i].récolte.length ; j++){
                            if(objets[i].récolte[j].nom === récolte){
                                quantitéMax = objets[i].récolte[j].quantitéMax
                            }
                        }
                        let description = ""
                        if(récolte === "rien"){
                            description = "Malheureusement, la récolte n'a rien donné aujourd'hui"
                        }
                        else{
                            description = "Voici le bilan de la récolte :\n`" + Math.floor(1 + Math.random()*quantitéMax) + " " + récolte + "`"
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Récolte [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Effets.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Effets.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("effets" in objets[i]){
                        let effets = []
                        for(let j = 0 ; j < objets[i].effets.length ; j++){
                            for(let k = 0 ; k < objets[i].effets[j].poids ; k++){
                                effets.push({nom:objets[i].effets[j].nom,type:objets[i].effets[j].type})
                            }
                        }
                        const effet = effets[arrondi(Math.random()*(effets.length - 1))]
                        let description = ""
                        if(effet.nom === "rien"){
                            description = "Rien ne se passe de plus en utilisant `" + objets[i].nom + "`"
                        }
                        else{
                            description = "Vous " + effet.type + " l'état : `" + effet.nom + "`"
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Effets [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Explosion.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Explosion.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("explosion" in objets[i]){
                        const chance = objets[i].explosion.chance
                        let description = "*erreur*"
                        if(Math.random()*100 < chance){
                            const dégâts = objets[i].explosion.dégâts
                            const ciblesConstante = objets[i].explosion.ciblesConstante
                            const ciblesRandom = objets[i].explosion.ciblesRandom
                            description = "Vous touchez `" + (ciblesConstante + arrondi(Math.random()*ciblesRandom)) + "` cible(s) !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, "
                            if(dégâts === 1){
                                description += "il subit l'état `Blessure légère`"
                            }
                            if(dégâts === 2){
                                description += "il subit l'état `Blessure`"
                            }
                            if(dégâts === 3){
                                description += "il subit l'état `Blessure avancée`"
                            }
                            if(dégâts === 4){
                                description += "il subit l'état `Blessure mortelle`"
                            }
                            if(dégâts === 5){
                                description += "il meurt"
                            }
                        }
                        else{
                            description = "L'explosion ne s'est pas déclenchée..."
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Explosion [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Protection.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Protection.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("protection" in objets[i]){
                        const chance = objets[i].protection.chance
                        let description = "*erreur*"
                        if(Math.random()*100 < chance){
                            const ciblesConstante = objets[i].protection.ciblesConstante
                            const ciblesRandom = objets[i].protection.ciblesRandom
                            description = "Vous défendez `" + (ciblesConstante + arrondi(Math.random()*ciblesRandom)) + "` survivants au choix\n\nLes survivants qui sont défendus ne pourront pas se faire attaquer par les zombies lorsqu'ils attaqueront durant leur prochaine attaque"
                        }
                        else{
                            description = "Vous ratez malheureusement votre protection..."
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Protection [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                break
                }
            }
        }
        if(/^Coup.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Coup.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("coup" in objets[i]){
                        const chance = objets[i].coup.chance
                        let description = "*erreur*"
                        if(Math.random()*100 < chance){
                            const dégâts = objets[i].coup.dégâts
                            const ciblesConstante = objets[i].coup.ciblesConstante
                            const ciblesRandom = objets[i].coup.ciblesRandom
                            description = "Vous touchez `" + (ciblesConstante + arrondi(Math.random()*ciblesRandom)) + "` cible(s) !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, "
                            if(dégâts === 1){
                                description += "il subit l'état `Blessure légère`"
                            }
                            if(dégâts === 2){
                                description += "il subit l'état `Blessure`"
                            }
                            if(dégâts === 3){
                                description += "il subit l'état `Blessure avancée`"
                            }
                            if(dégâts === 4){
                                description += "il subit l'état `Blessure mortelle`"
                            }
                            if(dégâts === 5){
                                description += "il meurt"
                            }
                            if(dégâts === "paralysé"){
                                description += "il sera paralysé pendant 2 minutes et ne pourra pas se déplacer ou même bouger ses membres"
                            }
                        }
                        else{
                            description = "Vous ratez malheureusement votre coup..."
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Coup [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Lancer.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Lancer.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("lancer" in objets[i]){
                        const chance = objets[i].lancer.chance
                        let description = "*erreur*"
                        if(Math.random()*100 < chance){
                            const dégâts = objets[i].lancer.dégâts
                            const ciblesConstante = objets[i].lancer.ciblesConstante
                            const ciblesRandom = objets[i].lancer.ciblesRandom
                            description = "Vous touchez `" + (ciblesConstante + arrondi(Math.random()*ciblesRandom)) + "` cible(s) !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, "
                            if(dégâts === 1){
                                description += "il subit l'état `Blessure légère`"
                            }
                            if(dégâts === 2){
                                description += "il subit l'état `Blessure`"
                            }
                            if(dégâts === 3){
                                description += "il subit l'état `Blessure avancée`"
                            }
                            if(dégâts === 4){
                                description += "il subit l'état `Blessure mortelle`"
                            }
                            if(dégâts === 5){
                                description += "il meurt"
                            }
                        }
                        else{
                            description = "Vous ratez malheureusement votre lancer..."
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Lancer [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Tir.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Tir.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("tir" in objets[i]){
                        const chance = objets[i].tir.chance
                        let description = "*erreur*"
                        if(Math.random()*100 < chance){
                            const dégâts = objets[i].tir.dégâts
                            const ciblesConstante = objets[i].tir.ciblesConstante
                            const ciblesRandom = objets[i].tir.ciblesRandom
                            description = "Vous touchez `" + (ciblesConstante + arrondi(Math.random()*ciblesRandom)) + "` cible(s) !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, "
                            if(dégâts === 1){
                                description += "il subit l'état `Blessure légère`"
                            }
                            if(dégâts === 2){
                                description += "il subit l'état `Blessure`"
                            }
                            if(dégâts === 3){
                                description += "il subit l'état `Blessure avancée`"
                            }
                            if(dégâts === 4){
                                description += "il subit l'état `Blessure mortelle`"
                            }
                            if(dégâts === 5){
                                description += "il meurt"
                            }
                            if(objets[i].nom === "Lance-pile MARK II" && Math.random()*70 < 25){
                                description += "\n\nLa pile est sur le sol, vous pouvez la réutiliser"
                            }
                        }
                        else{
                            description = "Vous ratez malheureusement votre tir..."
                        }
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Tir [" + objets[i].nom + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Ouverture.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Ouverture.*\[).+(?=\])/i)[0].trim()
            for(let i = 0 ; i < objets.length ; i++){
                if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                    if("ouverture" in objets[i]){
                        let fouille = []
                        for(let j = 0 ; j < objets[i].ouverture.length ; j++){
                            for(let k = 0 ; k < objets[i].ouverture[j].poids ; k++){
                                fouille.push(objets[i].ouverture[j].nom)
                            }
                        }
                        const chose = fouille[arrondi(Math.random()*(fouille.length - 1))]
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Ouverture [" + objets[i].nom + "]")
                        .setDescription("Vous obtenez l'objet : \n\n`1 " + chose + "`")
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        message.channel.send(embed)
                    }
                    break
                }
            }
        }
        if(/^Miner$/i.test(truc)){
            let miner = []
            let description = ""
            for(let i = 0 ; i < 3 ; i++){
                miner.push("zombie")
            }
            for(let i = 0 ; i < 37 ; i++){
                miner.push("rien")
            }
            for(let i = 0 ; i < 15 ; i++){
                miner.push("Cuivre brut")
            }
            for(let i = 0 ; i < 25 ; i++){
                miner.push("Fer brut")
            }
            for(let i = 0 ; i < 20 ; i++){
                miner.push("Charbon")
            }
            const chose = miner[arrondi(Math.random()*(miner.length - 1))]
            if(chose === "zombie"){
                description = ":pick: En minant les cailloux devant vous, vous tombez bizarrement et malheureusement sur :\n\n:imp: `" + arrondi(Math.random()*4) + " zombie(s)`"
            }
            else if(chose === "rien"){
                description = ":pick: En minant les cailloux devant vous, vous trouvez malheureusement que des cailloux justement"
            }
            else{
                description = ":pick: En minant les cailloux devant vous, vous trouvez :\n\n:moneybag: `1 " + chose + "`"
            }
            const embed = new Discord.MessageEmbed()
            .setTitle(":pick: Miner")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Recherche.*\[.+\]$/i.test(truc)){
            const contenu = message.content.match(/(?<=Recherche.*\[).+(?=\])/i)[0].trim()
            let description = ""
            let longueur = objets.length
            objets.sort(comparer)
            for(let i = 0 ; i < longueur ; i++){
                if(description.length > 2000){
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Recherche [" + contenu + "]")
                    .setDescription(description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    await message.channel.send(embed)
                    description = ""
                }
                if(contenu.toLocaleLowerCase() in objets[i]){
                    description += prefix + objets[i].nom + "\n"
                }
            }
            if(description.length !== 0){
                if(description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Recherche [" + contenu + "]")
                    .setDescription(description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de Recherche trop longue (>2048)")
                }
            }
            else{
                let description = "__Objets :__\n"
                let longueur = objets.length
                objets.sort(comparer)
                for(let i = 0 ; i < longueur ; i++){
                    if(description.length > 2000){
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Recherche [" + contenu + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        await message.channel.send(embed)
                        description = ""
                    }
                    if(new RegExp(contenu,"i").test(objets[i].nom)){
                        description += prefix + objets[i].nom + "\n"
                    }
                }
                description += "\n__Constructions :__\n"
                longueur = constructions.length
                constructions.sort(comparer)
                for(let i = 0 ; i < longueur ; i++){
                    if(description.length > 2000){
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Recherche [" + contenu + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        await message.channel.send(embed)
                        description = ""
                    }
                    if(new RegExp(contenu,"i").test(constructions[i].nom)){
                        description += prefix + constructions[i].nom + "\n"
                    }
                }
                description += "\n__Défenses :__\n"
                longueur = défenses.length
                défenses.sort(comparer)
                for(let i = 0 ; i < longueur ; i++){
                    if(description.length > 2000){
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Recherche [" + contenu + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        await message.channel.send(embed)
                        description = ""
                    }
                    if(new RegExp(contenu,"i").test(défenses[i].nom)){
                        description += prefix + défenses[i].nom + "\n"
                    }
                }
                description += "\n__Lieux :__\n"
                longueur = lieux.length
                lieux.sort(comparer)
                for(let i = 0 ; i < longueur ; i++){
                    if(description.length > 2000){
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Recherche [" + contenu + "]")
                        .setDescription(description)
                        .setColor(0xff0000)
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                        .setTimestamp()
                        await message.channel.send(embed)
                        description = ""
                    }
                    if(new RegExp(contenu,"i").test(lieux[i].nom)){
                        description += prefix + lieux[i].nom + "\n"
                    }
                }
                if(description.length < 2048){
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Recherche [" + contenu + "]")
                    .setDescription(description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                }
                else{
                    console.log("Description de Recherche trop longue (>2048)")
                }
            }
            if(/^Démontage.*\[.+\]$/i.test(truc)){
                const contenu = message.content.match(/(?<=Démontage.*\[).+(?=\])/i)[0].trim()
                for(let i = 0 ; i < objets.length ; i++){
                    if(new RegExp("^" + escapeRegExp(objets[i].nom) + "$","i").test(contenu)){
                        if("démontage" in objets[i]){
                            let fouille = []
                            for(let j = 0 ; j < objets[i].démontage.length ; j++){
                                for(let k = 0 ; k < objets[i].démontage[j].poids ; k++){
                                    fouille.push(objets[i].démontage[j].nom)
                                }
                            }
                            const chose = fouille[arrondi(Math.random()*(fouille.length - 1))]
                            const embed = new Discord.MessageEmbed()
                            .setTitle("Démontage [" + objets[i].nom + "]")
                            .setDescription("Vous obtenez l'objet : \n\n`1 " + chose + "`")
                            .setColor(0xff0000)
                            .setAuthor(message.author.username, message.author.avatarURL())
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setTimestamp()
                            message.channel.send(embed)
                        }
                        break
                    }
                }
            }
        }
        if(/^Fouille.+/i.test(truc)){
            let contenu = message.content.match(/(?<=Fouille).+/i)[0].trim()
            if(/^zone\s*\d+\s*km$/i.test(contenu)){
                const km = Number(contenu.match(/(?<=^zone\s*)\d+(?=\s*km$)/i)[0])
                let fouille = []
                for(let i = 0 ; i < objets.length ; i++){
                    if("zones" in objets[i]){
                        for(let j = 0 ; j < objets[i].zones.length ; j++){
                            if(objets[i].zones[j].nom === km){
                                for(let k = 0 ; k < objets[i].zones[j].poids ; k++){
                                    fouille.push(objets[i].nom)
                                }
                            }
                        }
                    }
                }
                for(let i = 0 ; i < lieux.length ; i++){
                    if("zones" in lieux[i]){
                        for(let j = 0 ; j < lieux[i].zones.length ; j++){
                            if(lieux[i].zones[j].nom === km){
                                for(let k = 0 ; k < lieux[i].zones[j].poids ; k++){
                                    fouille.push(lieux[i].nom)
                                }
                            }
                        }
                    }
                }
                let zombies = arrondi(fouille.length/6)
                while(zombies > 0){
                    fouille.push("zombie")
                    zombies--
                }
                const chose = fouille[arrondi(Math.random()*(fouille.length - 1))]
                let description = "*erreur*"
                if(chose === "zombie"){
                    description = ":flashlight: En fouillant les environs, vous dépensez 1 PA et vous tombez sur des zombies... :\n\n:imp: `" + (km + plusOuMoins(arrondi(Math.random()*km/2))) + " zombies`"
                }
                for(let i = 0 ; i < objets.length ; i++){
                    if(chose === objets[i].nom){
                        description = ":flashlight: En fouillant les environs, vous dépensez 1 PA et vous trouvez :\n\n:moneybag: `1 " + objets[i].nom + "`"
                        if(/Encombrant/.test(objets[i].description)){
                            description += " (encombrant)"
                        }
                        break
                    }
                }
                for(let i = 0 ; i < lieux.length ; i++){
                    if(chose === lieux[i].nom){
                        description = ":flashlight: En fouillant les environs, vous dépensez 1 PA et vous découvrez : " + lieux[i].nom + "\n\n" + lieux[i].description + "\n\nPour fouiller : `=Fouille " + lieux[i].nom + "`"
                        break
                    }
                }
                if(chose === "Balle"){
                    description = ":flashlight: En fouillant les environs, vous dépensez 1 PA et vous trouvez :\n\n:moneybag: `"+ (1 + arrondi(Math.random()*km/2)) + "Balles`"
                }
                const embed = new Discord.MessageEmbed()
                .setTitle(":flashlight: Fouille zone " + km + " KM")
                .setDescription(description)
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            } else {
                let fouille = []
                for(let i = 0 ; i < lieux.length ; i++){
                    if(new RegExp(escapeRegExp(lieux[i].nom),"i").test(contenu)){
                        if("zones" in lieux[i]){
                            for(let j = 0 ; j < objets.length ; j++){
                                if("zones" in objets[j]){
                                    for(let k = 0 ; k < objets[j].zones.length ; k++){
                                        if(objets[j].zones[k].nom === lieux[i].nom){
                                            for(let l = 0 ; l < objets[j].zones[k].poids ; l++){
                                                fouille.push(objets[j].nom)
                                            }
                                        }
                                    }
                                }
                            }
                            let numérateur = 0
                            let dénominateur = 0
                            for(let j = 0 ; j < lieux[i].zones.length ; j++){
                                if(!isNaN(lieux[i].zones[j].nom)){
                                    for(let k = 0 ; k < lieux[i].zones[j].poids ; k++){
                                        numérateur += lieux[i].zones[j].nom
                                        dénominateur++
                                    }
                                }
                            }
                            const kMmoyen = arrondi(numérateur/dénominateur)
                            let zombies = arrondi(fouille.length/6)
                            while(zombies > 0){
                                fouille.push("zombie")
                                zombies--
                            }
                            const chose = fouille[arrondi(Math.random()*(fouille.length - 1))]
                            let description = "*erreur*"
                            if(chose === "zombie"){
                                description = ":flashlight: Sur les lieux, après quelques recherches, vous dépensez 1 PA et vous tombez sur des zombies... :\n\n:imp: `" + (kMmoyen + plusOuMoins(arrondi(Math.random()*kMmoyen/2))) + " zombies`"
                            }
                            for(let i = 0 ; i < objets.length ; i++){
                                if(chose === objets[i].nom){
                                    description = ":flashlight: Sur les lieux, après quelques recherches, vous dépensez 1 PA et vous trouvez :\n\n:moneybag: `1 " + objets[i].nom + "`"
                                    if(/Encombrant/.test(objets[i].description)){
                                        description += " (encombrant)"
                                    }
                                    break
                                }
                                if(chose === "Balle"){
                                    description = ":flashlight: Sur les lieux, après quelques recherches, vous dépensez 1 PA et vous trouvez :\n\n:moneybag: `"+ (1 + arrondi(Math.random()*kMmoyen/2)) + "Balles`"
                                }
                            }
                            const embed = new Discord.MessageEmbed()
                            .setTitle(":flashlight: Fouille " + lieux[i].nom)
                            .setDescription(description)
                            .setColor(0xff0000)
                            .setAuthor(message.author.username, message.author.avatarURL())
                            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                            .setTimestamp()
                            message.channel.send(embed)
                        }
                    }
                }
            }
        }
        if(/^Liste des objets$/i.test(truc)){
            let description = "";
            const longueur = objets.length
            objets.sort(comparer)
            for(let i = 0 ; i < longueur ; i++){
                if(description.length > 2000){
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Liste des objets")
                    .setDescription(description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    await message.channel.send(embed)
                    description = ""
                }
                description += prefix + objets[i].nom + "\n"
            }
            if(description.length < 2048){
                const embed = new Discord.MessageEmbed()
                .setTitle("Liste des objets")
                .setDescription(description)
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            }
            else{
                console.log("Description de Liste des objets trop longue (>2048)")
            }
        }
        if(/^Liste des constructions$/i.test(truc)){
            let description = "";
            const longueur = constructions.length
            constructions.sort(comparer)
            for(let i = 0 ; i < longueur ; i++){
                description += prefix + constructions[i].nom + "\n"
            }
            if(description.length < 2048){
                const embed = new Discord.MessageEmbed()
                .setTitle("Liste des constructions")
                .setDescription(description)
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            }
            else{
                console.log("Description de Liste des constructions trop longue (>2048)")
            }
        }
        if(/^Liste des défenses$/i.test(truc)){
            let description = "";
            const longueur = défenses.length
            défenses.sort(comparer)
            for(let i = 0 ; i < longueur ; i++){
                description += prefix + défenses[i].nom + "\n"
            }
            if(description.length < 2048){
                const embed = new Discord.MessageEmbed()
                .setTitle("Liste des défenses")
                .setDescription(description)
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            }
            else{
                console.log("Description de Liste des défenses trop longue (>2048)")
            }
        }
        if(/^Liste des lieux$/i.test(truc)){
            let description = "";
            const longueur = lieux.length
            lieux.sort(comparer)
            for(let i = 0 ; i < longueur ; i++){
                if(description.length > 2000){
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Liste des lieux")
                    .setDescription(description)
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    await message.channel.send(embed)
                    description = ""
                }
                description += prefix + lieux[i].nom + "\n"
            }
            if(description.length < 2048){
                const embed = new Discord.MessageEmbed()
                .setTitle("Liste des lieux")
                .setDescription(description)
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            }
            else{
                console.log("Description de Liste des lieux trop longue (>2048)")
            }
        }
        if(/^Horde$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Horde")
            .setDescription("Vous voulez rejoindre la ville et essayer de survivre le plus longtemps possible ? Alors les commandes pour avoir les informations et commencer la survie sont juste en dessous !\n\n`=Contexte`\n`=Survivant`\n`=Inventaire`\n`=Discord`\n\n`=Points d'actions`\n`=Fouille`\n`=Déplacements`\n\n`=Nuit`\n`=Défense de la ville`\n`=Combat`\n`=Zombies`\n`=Habitations`\n\n`=Etats`\n`=Médicaments`\n`=Eau`\n`=Nourriture`\n`=Alcool`\n`=Drogue`\n\n`=Armes`\n`=Fabrication`\n`=Encyclopédie`\n\n`=Revenant`\n`=Vol`\n`=Exil`\n`=Sommeil`\n`=Transformation`\n`=Cargaison`\n`=Plans`\n`=Informations importantes`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Contexte$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Contexte")
            .setDescription("L'apocalypse du monde est enfin venue, un virus qui se répand et transforme les gens en zombie ainsi que le chaos sur terre la transformant en un désert géant...\n\nVous êtes un des survivants ayant réussi à trouver refuge dans cette ville proche mais c'est loin d'être facile, la partie ne fait que commencer...\n\nCombien de temps allez vous réussir à survivre avant de finir dévoré jusqu'aux os ?")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Survivant$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Survivant")
            .setDescription("Avant d'entrer dans cette ville, vous possédez forcément une identité, une histoire, une profession, des connaissances, c'est pour cela que vous devrez nous transmettre toutes ces informations en créant votre survivant à partir du modèle présent en écrivant la commande : `=Fiche de survivant`\n\nUne fois votre personnage créé, faites le valider dans le salon #│『🏧』ғɪᴄʜᴇ-ᴀ̀-ᴠᴀʟɪᴅᴇʀ par un membre du staff\n\nUne fois validé, vous devrez vous renommer de la manière suivante : [Prénom] [Nom] [Points d'action] et envoyer votre fiche dans le salon à votre nom dans le `serveur Fiches` où les assistants vous auront invité\n\nExemple pour se renommer : `Yato Oshiro 6/6`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Fiche de survivant$/i.test(truc)){
            message.channel.send("```۝▬▬▬▬▬▬▬▬『`INFORMATIONS DE VOTRE SURVIVANT`』▬▬▬▬▬▬▬▬۝\n\n`Nom :`【A remplir】\n\n`Prénom :`【A remplir】\n\n`Âge :`【A remplir】\n\n`Sexe :`【A remplir】\n\n`Physique :`【A remplir avec image si vous voulez, c'est conseillé】\n\n`Personnalité :`【A remplir】\n\n`Histoire avant et au début de l'apocalypse :`【A remplir】\n\n`Métier :`【A remplir】\n\n`Atout :`【A remplir en écrivant =Atouts】\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\n`Stat physique :`【A remplir en écrivant =Stats】\n\n`Stat mental :`【A remplir en écrivant =Stats】\n\n`Stat social :`【A remplir en écrivant =Stats】\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\n`Inventaire :`\n-`Affaires d'un citoyen` (encombrant)\n-`Ration d'eau`\n-\n-\n-\n\n`Inventaire appartement :`\n-\n-\n-\n-\n-\n-\n-\n-\n-\n-\n\n۝▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬۝\n\n`Zombies tués` : 0\n\n`Jours survécus` : 0```")
        }
        if(/^Atouts$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Atouts")
            .setDescription("Un atout est une particularité spéciale qu'a votre personnage, vous ne pouvez en avoir qu'un seul alors choississez bien !\nVoici la liste des atouts :\n\n`Médecin` : Permet d'utiliser un seul point d'action à la place de deux lors de l'application de bandage sur lui ou d'autres survivants et de créer des médicaments à partir de produits pharmaceutiques\n\n`Bricoleur` : Permet de fabriquer des meubles à partir de `Meuble en kit` et la réparation d'un objet ne coûte plus aucun point d'action et le temps de réparation est réduit de moitié\n\n`Artisant` : Réduit de moitié le temps nécessaire à la transformation et fabrication d'objets à l'atelier ainsi que la mise en place d'objets pour améliorer la défense de la ville\n\n`Chercheur` : Permet de fouiller une fois en plus gratuitement par jour l'extérieur\n\n`Sprinteur` : Permet d'utiliser `=Fuite [Aucune blessure]` même si vous êtes blessé\n\n`Aigle` : Permet d'avoir une tentative supplémentaire sur `=Observation` depuis la tour de la ville\n\n`Militaire` : Trouve toujours une `Balle` supplémentaire lorsqu'il en trouve à l'extérieur et empêche d'avoir l'état `Terreur`\n\n`Résistant` : Permet de survivre un dernier jour supplémentaire si vous deviez mourir d'infection, d'hémorragie, de faim, ou de déshydratation, vous laissant encore du temps pour vous soigner")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
            .then(() => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Atouts")
                .setDescription("`Tireur` : Permet de pouvoir retenter votre tir pendant votre tour si vous avez raté votre cible une fois par jour et d'avoir l'initiative contre les zombies et les survivants si vous avez une arme à distance\n\n`Voleur` : Permet de pouvoir voler plus facilement un survivant selon le `=Vol`\n\n`Racaille` : Permet de pouvoir retenter votre coup pendant votre tour si vous avez raté votre cible une fois par jour et d'avoir l'initiative contre les zombies et les survivants si vous avez une arme de corps à corps\n\n`Boucher` : Permet d'avoir le double de viande lorsque vous tuez un animal dans la boucherie\n\n`Discret` : Permet d'avoir une chance supplémentaire la nuit de vous cacher chez vous si vous échouez la première tentative\n\n`Picoleur` : Empêche d'avoir l'état `Ivresse`\n\n`Boxeur` : Permet d'avoir accès à de meilleurs coups selon `=Horde actions`\n\n`Psychopathe` : Une fois seul, vous pouvez avoir deux attaques possibles au-lieu d'une (contre les zombies et humains)\n\n`Agriculteur` : Permet de diviser le temps des récoltes par 2 et et de retenter la récolte si elle échoue une fois par jour\n\n`Mineur` : Permet de miner une fois en plus gratuitement par jour dans la mine\n\n`Piégeur` : Les défenses temporaires posées par les piégeurs ont 2x plus de points de défense")
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            })
        }
        if(/^Stats$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Stats")
            .setDescription("Votre survivant est différent des autres selon son histoire, ainsi que sa profession et d'autres facteurs comme le physique, sa personnalité ou même son langage, c'est pourquoi dans ce monde il existe 3 stats :\n\n`Stat physique`\n`Stat mental`\n`Stat social`\n\nPour réussir certaines actions qui demandent des efforts parfois, il faudra faire ce qu'on appelle un `Roll` pour savoir si vous réussissez ou non : `=Roll`\n\nCeci vous donne un nombre de 1 à 100, le but pour réussir votre action est de réussir à faire autant que votre stat ou moins, si vous faites plus alors vous échouez votre action...\n\nVous disposez de 150 points de stat à répartir entre `Physique / Mental / Social`\n\nLe maximum est de 75 par stat, et le minimum est de 25\n\nPar exemple, je décide de créer un survivant avec 75 en physique, 50 en mental et 25 en social, si je décide de vouloir convaincre un survivant de me suivre quelque part alors qu'il est méfiant, j'effectue un `Roll` et si à mon `Roll` je fais un score de 17, je réussis à le convaincre car j'ai fais moins que ma stat social, mais si je fait 28 à la place, j'ai échoué car j'ai fait plus que ma stat social\n\nAutre exemple, si j'essaye d'escalader une maison, que je fais 74 à mon roll, je réussis à escalader en ayant fait moins que ma stat physique, mais si je fait 98 alors je rate\n\nSi vous ne comprenez vraiment pas, n'hésitez pas à contacter un membre du staff\n\nAvant que vous n'hésitiez, sachez qu'un `Roll` de vision se base sur la stat mental !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Roll$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Roll")
            .setDescription("Vous effectuez un score de `" + (1 + Math.floor(Math.random()*100)) + "` à votre action")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage("https://media3.giphy.com/media/3oGRFlpAW4sIHA02NW/giphy.gif")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Inventaire$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Inventaire")
            .setDescription("Lorsque vous prendrez/poserez des objets pendant le RP, vous devrez actualiser votre inventaire dans le `serveur Fiches` (modifier le message envoyé)\n\nDe base, l'inventaire est limité à 5 emplacements et 1 emplacement ne peut contenir qu'un seul objet à l'exception des `Balle` qui n'occupent aucun emplacement avec un maximum de 30 sur soi\n\nPar ailleurs, vous trouverez parfois des objets `Encombrant`\nVous ne pouvez porter qu'un seul objet `Encombrant` sur vous")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Points d'actions$/i.test(truc)){
            console.log("ok")
            const embed = new Discord.MessageEmbed()
            .setTitle("Points d'actions")
            .setDescription("Lorsque vous effectuez une action qui demande un effort, vous dépensez ce qu'on appelle un `Point d'action` !\n\nVous disposez de 6 points d'actions par jour, que vous récupérez le lendemain à partir de 00 H 00 (FR)\n\nLes points d'actions peuvent aussi se reprendre en buvant une ration d'eau ainsi qu'en mangeant ou bien même en buvant certains alcools ou en prenant certaines drogues...\n\nUne fois à cours de points d'actions, vous ne pouvez plus effectuer d'action qui nécessite un effort...")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Fouille$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Fouille")
            .setDescription("Dans ce monde, pour survivre l'objectif est de collecter un maximum de ressources et de s'en servir !\n\nCependant, pour trouver des objets, il faudra sortir de la ville et se rendre à l'extérieur pour trouver ces fameuses ressources !\n\nPlus vous irez loin de la ville, plus les ressources seront rares mais plus la présence de zombie sera importante alors... bonne chance...\n\nPour effectuer une fouille selon la distance :\n\n`=Fouille zone [chiffre] KM`\n\nFouiller coûte 1 PA alors gérez bien vos 6 PA quotidien\n\nTrouver un bâtiment, le fouiller, ou tomber sur des zombies coûte aussi un PA\n\nA savoir que, lorsque votre survivant découvre un bâtiment il pourra revenir autant de fois qu'il veux étant donné qu'il connaîtra le chemin ! (jusqu'au passage de la tempête)\n\n:warning: Votre survivant doit obligatoirement avoir une raison de trouver un bâtiment, que ce soit une annonce à l'auberge, un survivant vous montrant le chemin, ou lorsque vous fouillez etc...")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Déplacements$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Déplacements")
            .setDescription("Vous déplacer en ville ne mettra qu'une minute pour vous déplacer d'une zone à une autre\n\nCependant, en extérieur vous mettrez deux minutes pour vous déplacer d'une zone à une autre\n\nA savoir que pour passer de la zone `1 KM` à `10 KM` par exemple, il faudra passer par la zone `2 KM` puis `3 KM` puis `4 KM` etc, en oubliant pas qu'il faudra deux minutes pour passer d'une zone à une autre\n\nPour les personnes atteintes de l'état `Fatigue`, la durée des déplacements en ville comme en extérieur sera doublée, 2 minutes en ville et 4 minutes en extérieur\n\nLe `Vélo` permet de réduire la durée des déplacements")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Nuit$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Nuit")
            .setDescription("Une particularité importante de Horde est que lorsque vient 22 H 00, les zombies attaquent la ville et les survivants qu'ils rencontrent pendant 1 heure !\n\nDurant l'attaque des zombies sur la ville, il faudra tuer tous les zombies ou alors survivre jusqu'à que les zombies sortent à l'extérieur, mais ils seront de nouveau présent la nuit prochaine en plus des nouveaux zombies...\n\nAttention, plus vous survivez de jours, plus les zombies seront nombreux à attaquer la ville...\n\nA minuit (FR), à cause des tempêtes de sable assez violentes vous ne retrouverez plus les lieux que vous avez sûrement pu visiter la veille, il faudra de nouveau les retrouver... Et si vous êtes dehors au moment du passage de la tempête, vous pourrez être gravement blessé...")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Défense de la ville$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Défense de la ville")
            .setDescription("Le but principal de la survie en ville sera de fabriquer des défenses afin de tuer un maximum de zombies lors des attaques tout les jours à 22 H 00 !\n\nIl est possible aux survivants de défendre aussi la ville des zombies restants qui arrivent à pénétrer à l'intérieur de la ville...\n\nUn zombie vaut pour un `point d'attaque` où la ville aura ses `points de défense`\n\nSi par exemple, la ville possède 45 points de défense et qu'il y a 37 zombies attaquant au jour 3, il n'y a aucun zombies qui pénétreront dans la ville, ni aucun mort par la même occasion !\n\nCependant, si la ville possède 45 points de défense et qu'il y a 50 zombies qui attaquent, 5 zombies réussiront à pénétrer en ville...\n\nCes 5 zombies pourront être combattus et tués par les survivants qui défendent l'entrée de la ville évidemment !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
            .then(()=>{
                const embed = new Discord.MessageEmbed()
                .setTitle("Défense de la ville")
                .setDescription("Si les survivants fuient ou qu'il n'y a personne défendant l'entrée de la ville, les zombies attaqueront les joueurs aléatoirement qui sont dans leur maison, bâtiments, rues etc... !\n\nLes zombies attaquent des lieux aléatoirement en ville. Si un survivant est dans un lieu où les zombies pénètrent, ils l'attaqueront automatiquement en premier\n\nA savoir que se défendre en groupe est possible (et mieux), et si le survivant n'est pas connecté, son personnage pourra être joué par un autre survivant avec son accord [ou un modérateur, d'où l'activité importante dans ce RP surtout le soir]\n\nSi le ou les survivants fuient les zombies, ils iront attaquer d'autres endroits, jusqu'à ce que tous les zombies soient tués, que les déplacements totaux des zombies aient été atteints, ou que vous survivez 1 H à l'attaque (mais les zombies encore vivants reviendront la nuit prochaine) !")
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
                .then(()=>{
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Défense de la ville")
                    .setDescription("Si à 22 H 00 pile la porte de la ville n'est pas fermée par un survivant, tous les zombies pourront rentrer...\n\nAvant chaque attaque, si vous allez à la porte, vous pourrez défendre la ville en étant un `Veilleur`\n\nUn `Veilleur` est un survivant qui ne va pas se cacher pendant l'attaque, mais qui va justement protéger la ville en risquant sa vie\n\nA savoir que, les veilleurs seront les premiers à mourir avant les survivants qui ne défendent pas la ville alors faites attention...\n\nLa fuite est la meilleure solution si vous êtes mal, bonne chance !")
                    .setColor(0xff0000)
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setTimestamp()
                    message.channel.send(embed)
                })
            })
        }
        if(/^Combat$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Combat")
            .setDescription("Lorsque vous êtes en groupe contre un ou plusieurs zombies, il faudra déterminer qui sera le premier à agir, le second, et ainsi de suite comme des numéros et en tour par tour !\n\nLes zombies attaqueront toujours après les joueurs sauf s'il y a une embuscade ou s'ils attaquent pendant l'attaque de la ville\n\nA savoir que les zombies attaqueront toujours un ou plusieurs survivants en même temps...\n\nPour déterminer quel survivant le ou les zombies attaqueront : `=Cible : [Noms des survivants séparés par des virgules]`\n\nLes différentes attaques spéciales grâce aux armes sont écrites sur les informations de l'arme en question !\n\nPour avoir la liste des actions possibles sans armes : `=Actions`\n\nLorsque vous fuiyez les zombies en allant ailleurs, vous aurez toujours l'initiative pour les attaquer si vous revenez même la nuit ou contre des zombies joueurs !\n\nEn général, les combats s'apprennent sur le terrain alors n'hésitez pas à observer comment les autres survivants font !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Actions$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Actions")
            .setDescription("Voici les différentes actions faisables pendant un combat :")
            .addField(":crossed_swords: Pour effectuer un coup de poing :", ":crossed_swords: `=Coup de poing`\n:crossed_swords: `=Coup de poing [Boxeur]`")
			.addField(":crossed_swords: Pour effectuer un coup de pied :", ":crossed_swords: `=Coup de pied`\n:crossed_swords: `=Coup de pied [Boxeur]`")
			.addField(":crossed_swords: Pour effectuer un coup de pied circulaire :", ":crossed_swords: `=Coup de pied circulaire`\n:crossed_swords: `=Coup de pied circulaire [Boxeur]`")
			.addField(":shield: Pour effectuer une fuite :", ":shield: `=Fuite [Aucune blessure]`\n:shield: `=Fuite [Blessure légère]`\n:shield: `=Fuite [Blessure]`\n:shield: `=Fuite [Blessure sévère]`\n:shield: `=Fuite [Blessure mortelle]`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if (/^Coup de poing$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 61) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing :", "En prenant du recul avec votre poing avant de tapper le plus fort possible, celui-ci n'atteint pas la cible et vous ratez complètement ce qui était censé être badass...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 61 & A < 86) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing :", "Serrant le poing, vous touchez votre cible avec pas mal de force ce qui la repousse de quelques pas en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 86 & A < 96) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing :", "D'un violent coup de poing en plein dans la tête, votre cible subit le choc si fort qu'elle en perd l'équilibre et tombe à la renverse sur le sol !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 96) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing :", "Le regard remplis de haine et de rage, vous y mettez tous votre puissance dans ce coup à tel point que vous entendez un craquement au niveau de la nuque de votre cible !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Coup de poing \[Boxeur\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 41) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing [Boxeur] :", "En prenant du recul avec votre poing avant de tapper le plus fort possible, celui-ci n'atteint pas la cible et vous ratez complètement ce qui était censé être badass...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 41 & A < 76) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing [Boxeur] :", "Serrant le poing, vous touchez votre cible avec pas mal de force ce qui la repousse de quelques pas en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 76 & A < 91) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing [Boxeur] :", "D'un violent coup de poing en plein dans la tête, votre cible subit le choc si fort qu'elle en perd l'équilibre et tombe à la renverse sur le sol !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 91) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de poing [Boxeur] :", "Le regard remplis de haine et de rage, vous y mettez tous votre puissance dans ce coup à tel point que vous entendez un craquement au niveau de la nuque de votre cible !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Coup de pied$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 61) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied :", "Vous élancez votre jambe en avant ainsi que votre pied pour mettre un coup à votre cible mais au dernier moment, vous perdez l'équilibre ce qui vous force à stop votre mouvement pour ne pas tomber...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 61 & A < 86) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied :", "Lançant votre jambe en avant, la cible se la prend de pleins fouet dans le ventre ce qui la repousse d'un coup sec en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 86 & A < 96) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied :", "Une fois votre jambe en mouvement, vous décidez de viser les côtes en y mettant toute votre force, faisant tomber votre cible sur le sol tellement le choc était dur à supporter !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 96) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied :", "Dans une position assez spécial, votre jambe arrive facilement à atteindre la tête de votre cible, vous y mettez force et rapidité en croyant presque que la tête pourrait se décrocher !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Coup de pied \[Boxeur\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 41) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied [Boxeur] :", "Vous élancez votre jambe en avant ainsi que votre pied pour mettre un coup à votre cible mais au dernier moment, vous perdez l'équilibre ce qui vous force à stop votre mouvement pour ne pas tomber...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 41 & A < 76) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied [Boxeur] :", "Lançant votre jambe en avant, la cible se la prend de pleins fouet dans le ventre ce qui la repousse d'un coup sec en arrière !\n\nSi la cible est un zombie, il ne pourra pas agir pendant son prochain tour !\n\nSi la cible est un survivant, il subit l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 76 & A < 91) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied [Boxeur] :", "Une fois votre jambe en mouvement, vous décidez de viser les côtes en y mettant toute votre force, faisant tomber votre cible sur le sol tellement le choc était dur à supporter !\n\nSi la cible est un zombie, il ne pourra pas agir pendant ses deux prochains tours !\n\nSi la cible est un survivant, il subit l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 91) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied [Boxeur] :", "Dans une position assez spécial, votre jambe arrive facilement à atteindre la tête de votre cible, vous y mettez force et rapidité en croyant presque que la tête pourrait se décrocher !\n\nSi la cible est un zombie, il meurt\n\nSi la cible est un survivant, il subit l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Coup de pied circulaire$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 81) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire :", "En essayant de démarrer un coup de pied circulaire, vous glissez légèrement ce qui vous arrête dans le mouvement...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 81 & A < 91) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire :", "Dans un élan rapide, vous réussissez à mettre un coup de pied assez puissant sur deux cibles sans trop perdre l'équilibre, ce qui les repousse légèrement !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant leur prochain tour !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 91 & A < 97) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire :", "Balançant votre jambe mais également vos bras pour y donner de l'effet, votre jambe touche deux cibles en plein dans les côtes ce qui les fait tomber quelques instants !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant les deux prochains tours !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 97) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire :", "Presque comme si que vous étiez cascadeur, vous sautez en l'air avant d'asséner un coup de pied rapide et plein de grâce au niveau de la tête de deux cibles !\n\nSi les cibles sont des zombies, ils meurent !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Coup de pied circulaire \[Boxeur\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 71) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire [Boxeur] :", "En essayant de démarrer un coup de pied circulaire, vous glissez légèrement ce qui vous arrête dans le mouvement...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 71 & A < 86) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire [Boxeur] :", "Dans un élan rapide, vous réussissez à mettre un coup de pied assez puissant sur deux cibles sans trop perdre l'équilibre, ce qui les repousse légèrement !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant leur prochain tour !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 86 & A < 95) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire [Boxeur] :", "Balançant votre jambe mais également vos bras pour y donner de l'effet, votre jambe touche deux cibles en plein dans les côtes ce qui les fait tomber quelques instants !\n\nSi les cibles sont des zombies, ils ne pourront pas agir pendant les deux prochains tours !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 95) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Coup de pied circulaire [Boxeur] :", "Presque comme si que vous étiez cascadeur, vous sautez en l'air avant d'asséner un coup de pied rapide et plein de grâce au niveau de la tête de deux cibles !\n\nSi les cibles sont des zombies, ils meurent !\n\nSi les cibles sont des survivants, ils subissent l'état `Blessure avancée`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Fuite \[Aucune blessure\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 41) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Aucune blessure] :", "Vous tentez de fuir le combat mais, c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 41) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Aucune blessure] :", "Vous réussissez à fuir le combat, vous avez de la chance !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Fuite \[Blessure légère\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 51) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure légère] :", "Vous tentez de fuir le combat mais, c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 51) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure légère] :", "Vous réussissez à fuir le combat, vous avez de la chance !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Fuite \[Blessure\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 61) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure] :", "Vous tentez de fuir le combat mais, c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 61) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure] :", "Vous réussissez à fuir le combat, vous avez de la chance !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Fuite \[Blessure avancée\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 71) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure avancée] :", "Vous tentez de fuir le combat mais, c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 71) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure avancée] :", "Vous réussissez à fuir le combat, vous avez de la chance !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (/^Fuite \[Blessure mortelle\]$/i.test(truc)) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 81) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure mortelle] :", "Vous tentez de fuir le combat mais, c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 81) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Fuite [Blessure mortelle] :", "Vous réussissez à fuir le combat, vous avez de la chance !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if(/^Zombies$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Zombies")
            .setDescription("Les zombies attaquent à vue les survivants, et se mettent à plusieurs sur le même quand ils en ont l'occasion la nuit comme le jour...\n\nLorsqu'un ou des zombies vous attaque(nt) : `=Zombies attaque : [Nombre de zombie]`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Habitations$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Habitations")
            .setDescription("Dans la ville, vous aurez un appartement que vous choisirez au début avec plusieurs fonctionnalités :\n\nVous pourrez stocker 10 objets maximum dans votre coffre\n\nVous pourrez dormir afin d'éviter l'état `Fatigue`\n\nL'habitation sert aussi principalement à vous cacher lorsque des zombies sont infiltrés en ville !\n\nSi des zombies passent devant chez vous et que vous voulez essayer de rester caché : `=Se cacher : [Nombre de zombies]` (commande utilisable uniquement chez vous)\n\nVotre appartement peut s'améliorer, notamment il possède ses propres points de défense lorsque des zombies l'attaqueront !\n\nSi vous possédez par exemple une `Petite fosse` de 2 points de défense et que 5 zombies tentent d'entrer dans votre maison, seulement 3 resteront en vie et les 2 autres mourront ou seront bloqués !\n\nA savoir que les points de défense des habitations ne sont valables qu'une fois par nuit...\n\nSi vous fuiyez par exemple votre maison, que vous revenez poursuivi encore par des zombies, cette fois-ci votre maison malgré ses points de défense ne stoppera pas les quelques zombies...\n\nPour consulter la liste des améliorations : `=Habitations améliorations`\n\n[Il n'y a pas encore d'améliorations pour les habitations]\n\nLors de la nuit, les zombies attaqueront votre immeuble en commençant par les appartements du bas (plus petit numéro) en remontant petit à petit")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Se cacher : \d+$/i.test(truc)){
            const chance = Math.floor(Math.random()*100) + 1
            const zombies = Number(truc.match(/^(?<=Se cacher : )\d+$/)[0])
            let description = ""
            let lien = ""
            if(chance < 60 - zombies){
                description = "Vous réussissez à garder votre calme et ne faire aucun bruit, les zombies passent devant votre appartement et s'en vont !"
                lien = "https://media1.giphy.com/media/nEuTuI4yvFXA1qSUaD/giphy.gif"
            }
            else{
                description = "Vous faites malheureusement un peu de bruit et les zombies arrivent à l'entendre et même à vous sentir, ils essayent de rentrer, vous avez 5 bonnes minutes pour décider de quoi faire..."
                lien = "https://media1.giphy.com/media/ZwA7zR7PWMiUE/giphy.gif"
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Se cacher")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setImage(lien)
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Etats$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Etats")
            .setDescription("Parfois, ou suite à un évènement, vous aurez un état négatif ou positif\n\nCertains états ne sont que temporaires et ne nécessitent aucunes interventions ou objets, mais certains en demanderont obligatoirement avant que sa n'empire jusqu'à une mort certaine...\n\nLes survivants possédant le métier de 'médecin' auront un bonus pour soigner et enlever un état en particulier, cependant il faudra obligatoirement qu'il se trouve au cabinet médical\n\nCertains états devront être joués RP...\n\nVoici la liste des états :\n\n`=Nausée`\n`=Fièvre`\n`=Tremblements`\n`=Perte d'équilibre`\n`=Douleurs gastriques`\n`=Migraine`\n`=Insomnie`\n`=Fatigue`\n`=Drogué`\n`=Dépendance`\n`=Hallucinations`\n`=Folie`\n`=Terreur`\n`=Rassasiement`\n`=Faim`\n`=Hydratation`\n`=Soif`\n`=Infection`\n`=Blessure`\n`=Goule`\n`=Ivresse`\n`=Hémorragie`\n\nLes états de blessures, d'hémorragies et d'infections se cumulent, voici des exemples pour mieux comprendre : `=Exemples d'accumulation`\n\nComme dis au début, vous devrez jouer les états de manière RP\n\nLorsque vous avez une blessure, vous devrez jouer la douleur tous de même en fonction de la gravité de votre blessure\n\nLorsque vous avez une infection, jouez le fait que vous devenez pâle, que vous toussez voir cracher du sang")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Exemples d'accumulation$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Exemples d'accumulation")
            .setDescription("Les états de blessures, d'hémorragies et d'infections se cumulent, voici des exemples pour mieux comprendre :\n\nBlessure légère + Blessure légère = Blessure\n\nBlessure + Blessure légère = Blessure avancée\n\nBlessure avancée + Blessure légère = Blessure mortelle\n\nBlessure mortelle + Blessure légère = Mort\n\nBlessure + Blessure = Blessure mortelle\n\nBlessure + Blessure avancée = Mort\n\nInfection légère + Infection légère = Infection\n\nInfection + Infection légère = Infection avancée\n\nInfection avancée + Infection légère = Infection mortelle\n\nInfection mortelle + Infection légère = Mort\n\nInfection + Infection = Infection mortelle\n\nHémorragie légère + Hémorragie légère = Hémorragie\n\nHémorragie + Hémorragie légère = Hémorragie avancée\n\nHémorragie avancée + Hémorragie légère = Hémorragie mortelle\n\nHémorragie mortelle + Hémorragie légère = Mort")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(message.content === prefix + "Nausée") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Nausée :", "Vous avez envie de vomir, aucun appétit, et vous êtes assez pâle [Double de points d'actions pour les actions en ville]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Fièvre") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Fièvre :", "Les efforts vous demande encore plus d'énergie que d'habitude, vous sentez votre front très chaud au bord de l'explosion [Double points d'actions pour les actions à l'extérieur de la ville]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Tremblements") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Tremblements :", "La peur n'est pas présente, vous avez juste des tremblements inhabituels rendant vos phrases plus difficiles à comprendre")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Perte d'équilibre") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Perte d'équilibre :", "Même sans vertiges, vous sentez en permanence une sensation de tomber sur le sol à tel point que marcher est un effort énorme [Double de temps à mettre pour les déplacements]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Douleurs gastriques") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Douleurs gastriques :", "L'envie de vomir constamment, rien que de penser à un bout de steak est assez pour vous faire vomir [Impossible de manger quoi que ce soit]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Migraine") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Migraine :", "Réfléchir vous fait mal à la tête, vous n'arrivez même plus à vous concentrer à quoi que ce soit [Impossible de faire une action demandant un point d'action]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Insomnie") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Insomnie :", "Vous n'arrivez pas à dormir assez, et vous aurez toujours l'état 'Fatigue' jusqu'à que vous n'ayez plus ces insomnies")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Fatigue") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Fatigue :", "Si vous dormez moins de 4 H par jour, votre énergie sera faible et la moindre action sera un effort immense [Double points d'actions pour toutes actions en ville comme en extérieur]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Drogué") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Drogué :", "Vous êtes sous drogue, vous ne pourrez pas reprendre de drogue avant le lendemain")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Dépendance") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Dépendance :", "L'abus de drogue vous mène à la dépendance, si vous ne prenez pas de drogue (la même drogue) pendant un jour vous aurez l'état 'Hallucinations', si vous ne prenez pas de drogue pendant deux jours vous aurez l'état 'Folie' et si vous ne prenez pas de drogue pendant trois jours vous... mourrez...")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Hallucinations") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Hallucinations :", "Des ombres ou même des zombies imaginaires, vous voyez des choses iréelles")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Folie") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Folie :", "Vous dites et faites n'importe quoi en permanence à tel point que vous avez des hallucinations en permanence et que vous êtes presque un danger pour les autres survivants [Impossible de faire une action demandant un point d'action]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Terreur") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Terreur :", "La vision d'un zombie vous effraie tellement que vous ne vous défendrez pas, vous essayerez toujours de fuir [Fuite seulement autorisé durant les combats]")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Rassasiement") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Rassasiement :", "Vous avez déjà mangé, vous ne pourrez pas manger de nouveau avant le lendemain")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Faim") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Faim > Très faim > Affamé :", "Après l'état `Rassasiement`, le lendemain vous aurez l'état `Faim`, si vous ne mangez pas le lendemain vous aurez l'état `Très faim`, si vous ne mangez pas le lendemain vous aurez l'état `Affamé` et si vous ne mangez toujours pas le lendemain vous... mourrez... (équivaut à `+1 cran de faim` par jour)")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Hydratation") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Hydratation :", "Vous avez déjà bu, vous ne pourrez pas boire de nouveau avant le lendemain")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Soif") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Soif > Très soif > Assoifé :", "Après l'état `Hydratation`, le lendemain vous aurez l'état `Soif`, si vous ne buvez pas le lendemain vous aurez l'état `Très soif`, si vous ne buvez pas le lendemain vous aurez l'état `Assoifé` et si vous ne buvez toujours pas le lendemain vous... mourrez... (équivaut à `+1 cran de soif` par jour)")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Infection") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Infection légère > Infection avancée > Infection mortelle :", "Après l'état `Infection légère`, le lendemain vous aurez l'état `Infection avancée`, si vous n'êtes pas soigné le lendemain vous aurez l'état `Infection mortelle` et si vous n'êtes toujours pas soigné le lendemain, vous devrez faire : `=Infection totale` (équivaut à `+1 cran d'infection` par jour)")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if (message.content.startsWith(prefix + "Blessure")) {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setImage("https://cdn.wccftech.com/wp-content/uploads/2018/03/WWZ1.jpg")
                .setTitle("Blessure légère > Blessure > Blessure avancée > Blessure mortelle :")
                .setDescription("Durant votre survie, il sera très fréquent de finir blessé et il existe différents types de blessures :\n\n`Blessure légère`\n`Blessure`\n`Blessure avancée`\n`Blessure mortelle`\n\nLes blessures provoquent des malus pour fuir, et plus vous vous rapprochez d'une blessure mortelle, plus vous aurez de chance d'y rester...\n\nLes blessure sont également cumulables et croissantes, si vous étiez atteint de l'état `Blessure` et que vous subissez un état de nouveau `Blessure légère` alors votre nouvel état sera `Blessure avancée`. Si vous ne comprennez pas : `=Exemples d'accumulation`\n\nLes blessures se soignent à l'aide de bandage, de médicaments, d'injections et d'un tas d'autres moyens probables et possibles...")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Goule") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Goule :", "Vous avez mangé de la viande humaine ou alors pris une substance, la seul nourriture maintenant possible est la viande humaine... vous devrez dévorer un humain une fois chaque jour avant le lendemain, sinon vous ...mourrez... (Pour plus d'informations : `=Transformation`)")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Ivresse") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Ivresse :", "Après avoir pris de l'alcool, vous ne pourrez plus en boire avant le lendemain, vous êtes ivre")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if(message.content === prefix + "Hémorragie") {
            const embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .addField("Hémorragie :", "Concernant les hémorragies, comparé à l'infection qui s'aggrave de jour en jour, l'hémorragie ne s'aggrave qu'au fil du temps ou si elles sont cumulées, mais vous aurez un certain temps avant de soigner votre hémorragie avant de mourir... (cette fonctionnalité n'est pas utilisée actuellement)\n\nVoici les différents temps selon l'hémorragie :\n\n`Hémorragie` : Vous avez 24 H pour soigner cette hémorragie avant la mort...\n\n`Hémorragie avancée` : Vous avez 12 H pour soigner cette hémorragie avant la mort...\n\n`Hémorragie mortelle` : Vous avez 6 H pour soigner cette hémorragie avant la mort...")
                .setTimestamp()
            message.channel.send({ embed })
        }
        if(/^Médicaments$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Médicaments")
            .setDescription("Une fois atteint d'un état, vous devrez certainement prendre des médicaments adaptés voir une drogue qui pourrait sûrement aider\n\nAttention, si vous prenez un mauvais médicament, vous pourrez avoir des effets négatifs encore pire...")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Eau$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Eau")
            .setDescription("Comme toute apocalypse, l'eau devient une ressource assez rare à trouver et à consommer, c'est pour cela qu'il faudra en prendre en temps voulus pour ne pas en gâcher !\n\nSi vous ne buvez pas, vous serez de plus en plus assoifé et vous finirez par mourir de soif\n\nPour mieux comprendre : `=Soif`,`=Hydratation`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Nourriture$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Nourriture")
            .setDescription("Comme l'eau, la nourriture deviendra une ressource assez rare qui demande d'être économiser le plus possible !\n\nSi vous ne mangez pas, vous serez de plus en plus affamé et vous finirez par mourir de faim...\n\nPour mieux comprendre : `=Faim`,`=Rassasiement`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Alcool$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Alcool")
            .setDescription("Lorsque vous fouillez l'extérieur de la ville, vous trouverez parfois de l'alcool !\n\nL'alcool permet de vous hydrater et de vous donner des points d'actions, mais attention à l'ivresse...\n\nPour mieux comprendre : `=Ivresse`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Drogue$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Drogue")
            .setDescription("Lorsque vous fouillez l'extérieur de la ville, vous trouverez parfois de la drogue !\n\nLa drogue permet principalement d'oublier une douleur, soigner un état mais aussi donner des points d'actions, mais les effets négatifs comme la dépendance arrivent par la suite...\n\nPour mieux comprendre : `=Drogué`, `=Dépendance`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Armes$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Armes")
            .setDescription("Il sera assez fréquent de trouver des armes pour vous défendre en tuant les zombies, que ce soit des armes de corps à corps comme des armes à feu !\n\nLes armes de corps à corps auront un nombre d'utilisations limitées disponible sur les informations de l'arme en écrivant : `=[Nom de l'arme]`\n\nLes armes à feu ont besoin de munitions pour pouvoir être utiliser, les munitions nécessaires sont écrites sur les informations de l'arme en écrivant : `=[Nom de l'arme]`\n\nA savoir, toutes les armes qui ont besoin de munitions, vous pouvez les recharger de manière rapide sans avoir besoin d'y passer votre tour d'action pendant un combat, précisez le juste de manière RP\n\nLes balles ne prennent pas de place dans votre inventaire, mais vous pourrez en porter au maximum 30 sur vous")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Fabrication$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Fabrication")
            .setDescription("Il sera très fréquent que dans la ville, vous devrez fabriquer des objets, des défenses, assembler des éléments avec d'autres pour en créer un nouvel élément\n\nLes informations des différentes fabrications et assemblages possibles sont affichés sur les matériaux en écrivant `=[Nom du matériau]`\n\nIl existe aussi le raffinage de ressource afin d'en obtenir une de meilleur qualité pour des usages encore plus performants !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Encyclopédie$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Encyclopédie")
            .setDescription("Vous pouvez chercher quelque chose dans la base de données avec la super commande `=Recherche []` !\n\nMettez entre les crochets soit une suite de lettres à rechercher soit un argument\n\nVoici la liste des arguments :\n\n`coup` (armes au corps à corps)\n`tir` (armes à feu)\n`lancer` (armes à distance)\n`explosion` (choses explosives)\n`ouverture` (choses ouvrables)\n`démontage` (choses démontables)\n`zones` (choses trouvables dans le désert)\n`effets` (choses qui donnent des effets particuliers)\n\nVous pouvez aussi simplement consulter les différentes listes :\n\n`=Liste des objets`\n`=Liste des constructions` (recommandé à lire pour les débutants)\n`=Liste des défenses`\n`=Liste des lieux`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Revenant$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Revenant")
            .setDescription("Si vous mourrez, vous pourrez choisir oui ou non de revenir à la vie mais sous forme de zombie en laissant votre équipement là où vous êtes mort\n\nVous n'êtes pas plus fort qu'un zombie normal, mais légèrement plus intelligent, c'est pour cela que vous pourrez contrôlé un minimum vos actions mais sans que ce soit des actions humaines\n\nLorsque vous êtes zombie, les humains peuvent facilement vous tué alors, restez en meute\n\nLes revenants ont droit à un tour d'attaque après le tour des zombies\n\nListe des coups possibles :\n\n`=Morsure`\n`=Griffure`\n`=Etranglement` [Pas encore dispo]\n`=Vomie` [Pas encore dispo]\n\nLorsque vous êtes un revenant, pour évitez tous problèmes de HRP de la part des survivants, si aucun survivant ne vous voit où vous êtes actuellement, vous devez dire vos déplacements dans le salon des déplacements de zombie que vous verrez apparaître tout en bas du discord\n\nLorsqu'un survivant passe là où vous êtes et que vous l'avez dis dans le salon des déplacements pour zombie, vous pourrez RP maintenant vos actions et déplacements dans le même salon que les survivants")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
            .then(()=>{
                const embed = new Discord.MessageEmbed()
                .setTitle("Revenant")
                .setDescription("Vous irez naturellement vers un survivant lorsque vous en verrais un, vous êtes légèrement intelligent mais vous restez un zombie qui veut manger à la moindre odeur de viande..\n\nLorsque vous êtes sur une zone et qu'un survivant passe, le survivant devra faire un roll basé sur sa stat `Mental` pour vous voir arriver et agir avant vous, s'il échoue alors vous pourrez l'attaquer en premier\n\nS'il y a plusieurs survivants, ils pourront chacun faire un roll pour tenter de vous voir\n\nContactez un assistant si vous ne comprenez pas")
                .setColor(0xff0000)
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setTimestamp()
                message.channel.send(embed)
            })
        }
        if (/^Griffure$/i.test(truc)) {
			const X = (Math.floor((100) * Math.random() + 1))
			if (X < 51) {
				const embed = new Discord.MessageEmbed()
					.setAuthor(message.author.username, message.author.avatarURL())
					.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
					.setColor(0xff0000)
					.addField("Griffure :", "Vous ratez votre griffure de peu sur le survivant...")
					.setTimestamp()
				message.channel.send({ embed })
			}
			if (X >= 51 & X < 86) {
				const embed = new Discord.MessageEmbed()
					.setAuthor(message.author.username, message.author.avatarURL())
					.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
					.setColor(0xff0000)
					.addField("Griffure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure légère`")
					.setTimestamp()
				message.channel.send({ embed })
			}
			if (X >= 86 & X < 96) {
				const embed = new Discord.MessageEmbed()
					.setAuthor(message.author.username, message.author.avatarURL())
					.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
					.setColor(0xff0000)
					.addField("Griffure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure`")
					.setTimestamp()
				message.channel.send({ embed })
			}
			if (X >= 96) {
				const embed = new Discord.MessageEmbed()
					.setAuthor(message.author.username, message.author.avatarURL())
					.setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
					.setColor(0xff0000)
					.addField("Griffure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure sévère`")
					.setTimestamp()
				message.channel.send({ embed })
			}
		}
        if (message.content.startsWith(prefix + "Morsure")) {
            const X = (Math.floor((100) * Math.random() + 1))
            if (X < 76) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Morsure :", "Vous ratez votre morsure de peu sur le survivant...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 76 & X < 86) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Morsure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure légère`\n\n:nauseated_face: Infection potentielle : `=Infection légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 86 & X < 96) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Morsure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure`\n\n:nauseated_face: Infection potentielle : `=Infection légère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 96 & X < 99) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Morsure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure sévère`\n\n:nauseated_face: Infection potentielle : `=Infection sévère`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 99) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Morsure :", "Le survivant sur lequel vous effectuez votre griffure obtient une `Blessure mortelle`\n\n:nauseated_face: Infection potentielle : `=Infection mortelle`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if(/^Vol$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Vol")
            .setDescription("Il est possible de voler discrètement un survivant ou sa maison si elle n'est pas fermé à clef ou même la banque, cependant cela est considéré comme un crime et pourra mener à un exile si cela est fréquent et que les joueurs votent !\n\nPour tenter de voler un survivant : `=Voler le survivant`\nPour tenter de voler un survivant avec l'atout 'Voleur' : `=Voler le survivant [Voleur]`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Voler le survivant$/i.test(truc)){
            const chance = Math.floor((100) * Math.random()) + 1
            let description = ""
            if(chance < 40){
                description = "Vous ne réussissez pas à voler le survivant, de plus il vous voit en train d'essayer de le voler..."
            }
            else if(chance < 60){
                description = "Vous ne réussissez pas à voler le survivant, mais par chance il ne remarque absolument rien !"
            }
            else{
                description = "Vous réussisez à voler le survivant, et plus exactement vous arrivez à lui voler `" + (1 + Math.floor(Math.random()*2)) + "` objets de son inventaire !\n\nLes objets obtenus sont aléatoires et non choisis [Jouez cela au Roll]"
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Voler le survivant")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Voler le survivant \[Voleur\]$/i.test(truc)){
            const chance = Math.floor((100) * Math.random()) + 1
            let description = ""
            if(chance < 20){
                description = "Vous ne réussissez pas à voler le survivant, de plus il vous voit en train d'essayer de le voler..."
            }
            else if(chance < 40){
                description = "Vous ne réussissez pas à voler le survivant, mais par chance il ne remarque absolument rien !"
            }
            else{
                description = "Vous réussisez à voler le survivant, et plus exactement vous arrivez à lui voler `" + (1 + Math.floor(Math.random()*3)) + "` objets de son inventaire !\n\nLes objets obtenus sont aléatoires et non choisis [Jouez cela au Roll]"
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Voler le survivant [Voleur]")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Exil$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Exil")
            .setDescription("Il est possible qu'une fois trop de crime commis et si les survivants décident d'effectuer un vote, de vous faire exiler, c'est à dire que vous n'aurez plus le droit de retirer d'objets à la banque, vous devrez survivre de votre côté seul en quelque sorte...\n\nCependant, il est possible de ne pas respecter ces règles, mais si les survivants s'en aperçoivent, ils pourront alors vous mettre dehors et vous finirez en burger pour les zombies...\n\nL'exil peut être temporaire comme définitif, et les règles définies peuvent être différentes d'une ville à une autre !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Sommeil$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Sommeil")
            .setDescription("Vous serez obligé de dormir au minimum 4 H dans le RP par jour ou sinon vous aurez l'état 'Fatigue' qui vous empêche de pouvoir réussir à fouiller une zone ou de fabriquer ou raffiner quelque chose...\n\nDe plus, avec cet état vous aurez plus de difficulté à fuir les zombies\n\nL'état disparaît une fois que vous avez justement dormis assez, c'est à dire 4 H !\n\nPensez à dormir en tant que survivant si vous allez partir et ne pas revenir avant longtemps sur le RP !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Transformation$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Transformation")
            .setDescription("Une fois que votre état d'infection est devenu une `Infection mortelle` si vous gardez cette état encore le lendemain, vous aurez une chance de mourir ou alors de devenir une 'Goule'\n\nUne goule dans ce monde est un humain d'apparence mais qui aura besoin de tuer d'autres humains et de les dévorer, vivant comme mort pour se nourrir...\n\nPour survivre, la goule devra dévorer au moins un humain par jour ou alors elle mourra de faim...\n\nIl est possible de ne pas tuer un survivant et de le dévorer entièrement, seulement une partie mais celui-ci deviendra à son tour aussi infecté et une goule...\n\nSi la ville ne contient plus que des goules, c'est perdu [Cas impossible / extrêmement rare]\n\nPour savoir si vous allez mourir ou devenir une goule : `=Infection totale`")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Infection totale$/i.test(truc)){
            const chance = Math.floor((100) * Math.random()) + 1
            let description = ""
            if(chance < 90){
                description = "L'infection fini par vous ronger de l'intérieur, vous mourrez lentement..."
            }
            else{
                description = "L'infection ralentit votre coeur mais vous restez tous de même vivant malgré les sensations étranges dans votre corps maintenant, vous avez... faim ?\n\nVous êtes désormais une `Goule`"
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Infection totale")
            .setDescription(description)
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Cargaison$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Cargaison")
            .setDescription("Parfois pendant votre survie, il y aura un avion qui passe au dessus en larguant une cargaison aux alentours de celle-ci !\n\nDedans se trouvera des ressources, des armes, de la nourriture, de l'eau et bien d'autres choses possible selon votre chance !\n\nCependant, il faudra prendre le risque de sortir le récupérer, cela alerte beaucoup de zombies...\n\nIl est possible d'entendre d'avance si un avion va largué une caisse si vous avez une `Radio K7` allumé !")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Plans$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Plans")
            .setDescription("Lorsque vous fouillez à l'extérieur de la ville, il est possible de trouver un plan plus ou moins rare, permettant de pouvoir fabriquer un objet, une arme, une défense, ou d'autres objets possibles !\n\nLes informations des plans sont écrites en écrivant : `=[Nom du plan]'\n\n[Pour le moment, ce contenu n'est pas encore fait]")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Informations importantes$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Informations importantes")
            .setDescription("Lorsque vous faites un batîment, ou la mise en place d'un objet pour améliorer la défense de la ville, écrivez le dans le salon #『🔨』ᴄᴏɴsᴛʀᴜᴄᴛɪᴏɴs\n\nSi vous échouez un coup avec une arme qui n'utilise aucune munition, cela ne coûte pas d'utilisation, mais si vous échouez un coup ou un tir avec une arme qui nécessite des munitions, cela utilise bien une utilisation\n\nTous les crafts et constructions possibles à faire (que le bot affiche) sont connus par vos survivants de manière logique et RP, à l'avenir lorsqu'il y aura les `Plans` il faudra trouver les plans pour les connaître\n\nVous pouvez jouer le personnage d'un survivant qui n'est pas ou plus là, mais il faut son autorisation et pas de META RP\n\nVous pouvez écrire dans le salon #『📜』ᴛᴀʙʟᴇᴀᴜ-ᴀɴɴᴏɴᴄᴇs de manière RP un message, c'est un tableau uniquement visible à l'auberge par les autres survivants\n\nLorsqu'un survivant fuit, les zombies ne peuvent pas le suivre et le retrouver directement")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if (message.content.startsWith(prefix + "Observation")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 60) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Observation :", "Vous essayez de vous concentrer sur là où vous êtes en train de regarder mais vous ne trouvez rien de suspect ou d'étrange...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 60) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Observation :", "En vous concentrant, vous arrivez à bien voir la scène depuis la tour et vous voyez ou non s'il y a des survivants en danger ou des zombies qui rôdent !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if (message.content.startsWith(prefix + "Dernier espoir")) {
            const A = (Math.floor((100) * Math.random() + 1))
            if (A < 80) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Dernier espoir :", "Trop blessé et complètement vide d'énergie, vous finissez par vous faire complètement dévoré vivant en voyant même vos propres organes à travers votre ventre complètement arraché...\n\nVous avez au moins survécus pas mal de temps !")
                    .setImage("http://pa1.narvii.com/6420/8885cc235ef803b7fba37806027468c409c92f99_hq.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 80 & A < 90) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Dernier espoir :", "Par chance, vous arrivez malgrè tous les zombies autour de vous à vous débattre, foutre des coups de poings et des coups de pieds partout autour de vous ce qui vous permet de fuir de justesse...\n\nCependant, vous êtes atteint de l'état `Terreur` ainsi que de la blessure que vous ont fait les zombies...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 90) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Dernier espoir :", "Dans un élan de rage et de courage, vous arrivez à repousser tous les zombies sur vous malgrè tous le sang qui coule et les blessures, en réussissant par la suite à vous enfuir de toute la horde !\n\nCependant,  vous êtes atteint de la blessure que vous ont fait les zombies...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if (message.content.startsWith(prefix + "Tempête")) {
            const A = (Math.floor((100) * Math.random() + 1))
            if (A < 25) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Tempête :", "La tempête de cette nuit est assez calme, seulement du vent mais qui n'est pas dangereux, recouvrant peu à peu les lieux de sable")

                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 25 & A < 50) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Tempête :", "La tempête de cette nuit est assez violente, quelques petits objets volent et pas mal de sable s'envole en l'air\n\nTous les survivants dehors à l'extérieur prennent une `Blessure`")

                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 50 & A < 75) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Tempête :", "La tempête de cette nuit est violente, des panneaux de signalisation ainsi que des grosses pierres arrivent à s'envoler en l'air\n\nTous les survivants dehors à l'extérieur prennent une `Blessure sévère`")

                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 75 & A < 90) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Tempête :", "La tempête de cette nuit est très violente, des meubles ainsi que des portes de maison et des débris de verre se font emporté par le vent\n\nTous les survivants dehors à l'extérieur prennent une `Blessure mortelle`")

                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 90) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Tempête :", "La tempête de cette nuit est complètement meurtrière, des voitures ainsi que des camions se font soulevés par ce vent qui vous pique limite les yeux\n\nTous les survivants dehors à l'extérieur meurent...")

                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if (/^Zombies attaque\s*:\s*\d+$/i.test(truc)) {
            const ZZ = Number(truc.match(/(?<=Zombies attaque : )\d+/i)[0])
            const Z = ZZ * 2 
            const A = (Math.floor((100) * Math.random() + Z))
            const Survivants = (Math.floor((ZZ / 6) * Math.random() + 1))
            if (A < 20 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: En essayant de courir vers vous, les zombies trébuchent sur le sol, en prenant du temps à se relever, vous avez de la chance !\n\n:smiling_imp: les zombies n'agiront pas lors de leur prochaine action !").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 20 - Z & A < 40 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Une fois proche de vous, les zombies tentent de vous aggriper mais ils sont si lents dans ses mouvements qu'il n'y parviennent pas, vous avez de la chance !").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 40 - Z & A < 83 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: Lorsque les zombies arrivent à votre contact, à l'aide de ses mains et de leur bras en avant, ils aggripent votre bras et serre en y plantant leur ongles pourries...\n\n:heart: Votre état : `Blessure légère`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 83 - Z & A < 102 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: En arrivant à votre hauteur, les zombies essayent de vous aggriper mais ils tombent légèrement et attrape votre jambe en la serrant avec leur ongles tout en essayant de vous mordre mais ils n'y arrivent pas...\n\n:heart: Votre état : `Blessure légère`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 102 - Z & A < 110 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: D'une rapidité assez remarquable, les zombies arrivent à vous faire tomber sur le sol en serrant votre cou et les différentes parties du corps, en essayant de le mordre sans réussir...\n\n:heart: Votre état : `Blessure`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 110 - Z & A < 120 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: Les zombies profitent de votre bras assez exposé pour l'aggriper et le mordre de toutes leur forces avec tous le sang qui gicle d'un coup...\n\n:heart: Votre état : `Blessure`\n\n:nauseated_face: Infection potentielle : `=Infection légère`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 120 - Z & A < 130 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: En courant vers vous, les zombies profitent de votre jambe qui se trouve en avant pour l'aggriper et la mordre de toutes leur forces avec tous le sang qui gicle d'un coup...\n\n:heart: Votre état : `Blessure`\n\n:nauseated_face: Infection potentielle : `=Infection légère`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 130 - Z & A < 140 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: Les zombies se mettent à vous courir dessus très rapidement de tous les côtés en se jetant sur vous et arrive à mordre votre cou qui pisse le sang...\n\n:heart: Votre état : `Blessure avancée`\n\n:nauseated_face: Infection potentielle : `=Infection avancée`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 140 - Z & A < 145 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: Dès que les zombies se trouvent à votre portée, ils entourent tous l'espace autour de vous et vous force à finir sur le sol entouré de toute part en vous faisant mordre et aggriper toutes les parties de votre corps...\n\n:heart: Votre état : `Blessure mortelle`\n\n:nauseated_face: Infection potentielle : `=Infection mortelle`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`").setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 145 - Z) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":smiling_imp: Zombies attaque :", ":smiling_imp: Les zombies attaquent " + Survivants + " survivants...\n\n:smiling_imp: Il y a tellement de zombies tous autour de vous qui vous entoure si rapidement en masse qu'il n'y a presque aucun espoir de vous en sortir ni de fuir, vous vous faites complètement dévoré vivant devant les autres survivants ou seul...\n\n:heart: Votre état : `Blessure mortelle`\n\n:nauseated_face: Infection potentielle : `=Infection mortelle`\n\n:cold_sweat: Les survivants peuvent tenter de vous aider à la place de continuer d'attaquer les zombies : `=Aide : [Nombre de survivants vous aidant]`\n\n:cold_sweat: Aider un survivant est dangereux à vous aussi, mais le nombre fait la force\n\n:skull: En cas d'échec des survivants à vous aider, ou si vous êtes seul... : `=Dernier espoir`")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if (/^Aide\s*:\s*\d+$/i.test(truc)) {
            let XX = truc.match(/(?<=^Aide\s*:\s*)\d+$/i)[0]
            A = XX * 5
            X = (Math.floor((100) * Math.random()))
            if (X < 25 - A) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Aide :", "Vous tentez d'aider le survivant seul ou à plusieurs, mais vous vous faites aussi aggriper par les multiples zombies...\n\nVous subissez les même blessures et infections potentielles que le survivant que vous avez essayer d'aidé...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 25 - A & X <= 60 - A) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Aide :", "Vous tentez d'aider le survivant seul ou à plusieurs, mais c'est un échec...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 61 - A & X <= 75 - A) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Aide :", "Vous tentez d'aider le survivant seul ou à plusieurs, et c'est une réussite !\n\nLe survivant subira seulement l'infection potentielle initial mais aucune blessure !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X >= 76 - A & X <= 90 - A) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Aide :", "Vous tentez d'aider le survivant seul ou à plusieurs, et c'est une réussite !\n\nLe survivant subira seulement la blessure initial mais aucune infection !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (X > 90 - A) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Aide :", "Vous tentez d'aider le survivant seul ou à plusieurs, et c'est une réussite !\n\nLe survivant ne subira rien du tous !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if (message.content.startsWith(prefix + "Infection légère")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 20) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection légère :", ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection légère`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 20) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection légère :", ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection légère` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (message.content.startsWith(prefix + "Infection avancée")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 40) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection avancée :", ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection avancée`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 40) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection avancée :", ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection avancée` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (message.content.startsWith(prefix + "Infection mortelle")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 60) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection mortelle :", ":nauseated_face: Vous êtes malheureusement atteint de l'état `Infection mortelle`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 60) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":nauseated_face: Infection mortelle :", ":nauseated_face: Vous n'êtes pas atteint de l'état `Infection mortelle` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }




        if (message.content.startsWith(prefix + "Hémorragie légère")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 30) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie légère :", ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie légère`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 30) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie légère :", ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie légère` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (message.content.startsWith(prefix + "Hémorragie avancée")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 50) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie avancée :", ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie avancée`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 50) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie avancée :", ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie avancée` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }



        if (message.content.startsWith(prefix + "Hémorragie mortelle")) {
            const A = (Math.floor((100) * Math.random()))
            if (A < 70) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie mortelle :", ":heart_exclamation: Vous êtes malheureusement atteint de l'état `Hémorragie mortelle`...")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (A >= 70) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField(":heart_exclamation: Hémorragie mortelle :", ":heart_exclamation: Vous n'êtes pas atteint de l'état `Hémorragie mortelle` !")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
        if(/^Jour\s*\d+$/i.test(truc)){
            const jour = Number(truc.match(/(?<=^Jour\s*)\d+$/)[0])
            let zombies = 0.019*jour**3+3.943*jour**2-12.516*jour+22.356
            zombies = arrondi(zombies + plusOuMoins(Math.random()*zombies/jour))
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .setTitle("Attaque de zombie, jour " + jour)
                .setDescription("Une horde de zombie court rapidement à la tombé de la nuit vers la grande porte...\n\nQue la chance sois avec vous, il y a `" + zombies + "` zombies actuellement devant votre ville...\n\nLa nuit ne fait que commencer !")
                .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                .setTimestamp()
            message.channel.send({ embed })
        }
        if((message.content.startsWith(`${prefix}Bloquer`) || message.content.startsWith(`${prefix}Débloquer`)) && message.channel === serveurChannelConstruction){
            message.delete()
            .then()
            .catch(console.error)
            serveur.members.fetch(message.author)
            .then(membre => {
                if(membre.hasPermission("ADMINISTRATOR")){
                    if(message.content.startsWith(`${prefix}Bloquer`)){
                        if(message.content.endsWith("tout")){
                            for (let i = 0 ; i < serveurVilleChannels.length ; i++){
                                serveurVilleChannels[i].overwritePermissions([
                                    {
                                        id:serveurRoleVille.id,
                                        deny:["VIEW_CHANNEL"]
                                    }
                                ])
                                message.channel.send(`${serveurVilleChannels[i].name} bloqué(e)`)
                            }
                        } else {
                            for (let i = 0 ; i < serveurVilleChannels.length ; i++){
                                if(new RegExp(`\\s${i}$`).test(message.content)){
                                    serveurVilleChannels[i].overwritePermissions([
                                        {
                                            id:serveurRoleVille.id,
                                            deny:["VIEW_CHANNEL"]
                                        }
                                    ])
                                    message.channel.send(`${serveurVilleChannels[i].name} bloqué(e)`)
                                }
                            }
                        }
                    } else if (message.content.startsWith(`${prefix}Débloquer`)){
                        if(message.content.endsWith("tout")){
                            for (let i = 0 ; i < serveurVilleChannels.length ; i++){
                                serveurVilleChannels[i].overwritePermissions([
                                    {
                                        id:serveurRoleVille.id,
                                        allow:["VIEW_CHANNEL"]
                                    }
                                ])
                                message.channel.send(`${serveurVilleChannels[i].name} débloqué(e)`)
                            }
                        } else {
                            for (let i = 0 ; i < serveurVilleChannels.length ; i++){
                                if(new RegExp(`\\s${i}$`).test(message.content)){
                                    serveurVilleChannels[i].overwritePermissions([
                                        {
                                            id:serveurRoleVille.id,
                                            allow:["VIEW_CHANNEL"]
                                        }
                                    ])
                                    message.channel.send(`${serveurVilleChannels[i].name} débloqué(e)`)
                                }
                            }
                        }
                    }
                }
            })
            .catch(console.error)
        }
        if(message.content === prefix + "Constructions disponibles"){
            let description = "Constructions disponibles :\n\n"
            for(let i = 0 ; i < serveurVilleChannels.length ; i++){
                if(serveurVilleChannels[i].permissionsFor(serveurRoleVille).has(["VIEW_CHANNEL"])){
                    description += serveurVilleChannels[i].name + "\n"
                }
            }
            message.channel.send(description)
        }
        if(message.content.startsWith(prefix + "Attaque")){
            serveur.members.fetch(message.author)
            .then(membre => {
                if(membre.hasPermission("ADMINISTRATOR")){
                    if(/\d+/.test(message.content)){
                        let nombreZombies = message.content.match(/\d+/)[0]
                        const nombreGroupe = Math.floor(Math.random()*3)+1
                        let groupe = []
                        let msg = "__Attaque :__\n"
                        for(let i = 0 ; i < nombreGroupe ; i++){
                            let zombies = Math.floor(Math.random()*nombreZombies)+1
                            if(i === nombreGroupe-1){
                                zombies = nombreZombies
                            }
                            groupe[i] = [zombies,Math.floor(Math.random()*8)+4]
                            nombreZombies -= zombies
                            msg += "Groupe " + (i+1) + " ; " + groupe[i][0] + " zombies ; " + groupe[i][1] + " déplacements\n"
                            if(nombreZombies === 0){
                                break;
                            }
                        }
                        message.channel.send(msg)
    
                    }
                }
            })
            .catch(console.error)
        }
        if(message.content.startsWith(`${prefix}Déplacement zombies`)) {
            let zoneDispo = []
            for(let i = 0 ; i < serveurVilleChannels.length ; i++){
                if(serveurVilleChannels[i].permissionsFor(serveurRoleVille).has(["VIEW_CHANNEL"])){
                    zoneDispo.push(serveurVilleChannels[i].name)
                }
            }
            zoneDispo.push("『🏢』ɪᴍᴍᴇᴜʙʟᴇ 1")
            zoneDispo.push("『🏢』ɪᴍᴍᴇᴜʙʟᴇ 2")
            zoneDispo.push("『🏢』ɪᴍᴍᴇᴜʙʟᴇ 3")
            let note = ""
            if(/,.*/.test(message.content)){
                note = "\n\n*Note : " + message.content.match(/(?<=,).+$/)[0].trim() + "*"
            }
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .setTitle("Déplacement zombies :")
                .setDescription(`Le groupe de zombies se déplace vers : ${zoneDispo[Math.floor(Math.random()*zoneDispo.length)]}${note}`)
                .setTimestamp()
            message.channel.send({ embed })
            return
        }
    
        if (/^Nombre de zombies\s*:\s*\d+$/.test(truc)) {
            const X = Number(truc.match(/(?<=^Nombre de zombies :\s*)\d+$/)[0])
            const Zombies = (Math.floor((X) * Math.random() + 1))
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField("Nombre de zombies :", "Le groupe sera constitué de " + Zombies + " zombies...")
                .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                .setTimestamp()
            message.channel.send({ embed })
        }
    
        if (message.content.startsWith(prefix + "Groupe de zombies")) {
            const Groupe = (Math.floor((5) * Math.random() + 1))
            if (Groupe === 1) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Groupe de zombies :", "Les zombies s'infiltrant dans votre ville forme un immense groupe alors bonne chance...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (Groupe === 2) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Groupe de zombies :", "Les zombies s'infiltrant dans votre ville forme 2 groupes alors bonne chance...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (Groupe === 3) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Groupe de zombies :", "Les zombies s'infiltrant dans votre ville forme 3 groupes alors bonne chance...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (Groupe === 4) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Groupe de zombies :", "Les zombies s'infiltrant dans votre ville forme 4 groupes alors bonne chance...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
            if (Groupe === 5) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Groupe de zombies :", "Les zombies s'infiltrant dans votre ville forme 5 groupes alors bonne chance...")
                    .setImage("https://thumbs.gfycat.com/TerrificOrangeBunny-small.gif")
                    .setTimestamp()
                message.channel.send({ embed })
            }
        }
    
        if (/^Cible\s*:.+$/i.test(truc)) {
            if(/:.+$/.test(message.content)){
                const survivants = message.content.match(/(?<=^Cible\s*:).+$/)[0].split(",")
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                    .setColor(0xff0000)
                    .addField("Cible :", "Le groupe de zombie attaquera " + survivants[Math.floor(Math.random()*survivants.length)].trim() + "...")
                    .setTimestamp()
                message.channel.send({ embed })
            } else {
                message.channel.send("*Format de la commande non respecté\nExemple : \"=Cible : Jamy, Georges\"*")
                .then(message => {
                        message.delete(2000)
                        .then()
                        .catch(console.error)
                })
            }
        }
        
        if (message.content.startsWith(prefix + "Déplacement nombre")) {
            const X = (Math.floor((8) * Math.random() + 3))
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
                .setColor(0xff0000)
                .addField("Déplacement nombre :", "Le groupe groupe de zombie se déplacera `" + X + "` fois aléatoirement en ville...")
    
                .setTimestamp()
            message.channel.send({ embed })
        }
        if(/^Agriculture$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Agriculture")
            .setDescription("Vous pouvez planter des choses dans le `Potager` et les récolter plus tard !\n\nPour se faire, vous devez respecter les conditions de pousse qui sont écrites sur la description de la plante en question\n\nSi vous ne respectez pas ces conditions, votre plante ne poussera pas\n\nPar ailleurs, si vous êtes en train de faire pousser une plante mais que vous oubliez de respecter les conditions de pousse, la plante fânera et mourra, vous perdrez alors celle-ci")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Elevage$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Elevage")
            .setDescription("Vous pouvez élever certains animaux que vous trouvez dans l'`Enclos` pour récolter périodiquement leur ressources !\n\nPour se faire, vous devez respecter les conditions d'élevage qui sont écrites sur la description de l'animal en question\n\nSi vous ne respectez pas ces conditions, votre animal ne produira pas de ressources\n\nSi vous êtes en train d'élever un animal mais que vous oubliez de respecter les conditions d'élevage, l'animal ne produira pas non plus de ressources et vous devrez recommencer l'élevage depuis le début des conditions\n\nLes animaux ne peuvent pas se reproduire et n'ont pas besoin de manger/boire pour survivre (uniquement pour être élevés) afin de simplifier votre expérience de jeu")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
        if(/^Discord$/i.test(truc)){
            const embed = new Discord.MessageEmbed()
            .setTitle("Discord")
            .setDescription("Vous vous demandez comment c'est possible de faire du RP apocalyptique sur discord ? Voici comment le serveur fonctionne avec Discord :\n\n\__En tant que Survivant, vous aurez accès à 9 catégories de salons Discord :__\n\nLIEUX :\nVous pourrez accéder dans cette catégorie au salon │〘🏃〙ᴢᴏɴᴇs qui vous permettra de changer de zone (ville, habitations et extérieur) en réagissant aux messages du bot YAGPDB.xyz\n\nINFORMATIONS SURVIVANT :\nC'est ici que vous pourrez actualiser vos rôles pour changer vos `Etats` en réagissant aux messages du bot YAGPDB.xyz\nPour avoir une explication précise de quand changer d'état, lisez le `Sujet du salon` des états qui vous intéressent\n\nINFORMATIONS VILLE :\nC'est une des catégories les plus importantes\nPrenez le temps de lire le `Sujet du salon` de chaque salon pour bien comprendre à quoi ils servent\n\nVILLE :\nCette catégorie regroupe toutes les constructions de la ville, n'hésitez pas à effectuer `=Liste des constructions` pour comprends à quoi servent les différentes constructions\n\nEXTERIEUR :\nC'est ici que vous fouillerez le désert\nPour plus d'informations : `=Fouille`,`=Déplacements`\n\nIMMEUBLES 1, 2 et 3 :\nSe sont les habitations, 3 immeubles avec 10 appartements chacuns\nPour plus d'informations :`=Habitations`\n\nDEPLACEMENT DES REVENANTS :\nDans le salon │〘🏃〙déplacement, lisez le `Sujet du salon`\n\n__Pour jouer RP, vous devrez écrire vos messages de différentes manières :__\n\n`**Description**` ; exemple : **Zombot arrive en ville**\n`Discours` ; exemple : Bonjour Zombot, comment ça va ?\n`{Pensée}` ; exemple : {Zombot se demande quel appartement choisir...}\n\nVoici un exemple complet où le Survivant Zombot jouera RP pour mieux comprendre :\n**Arrive à la zone 1 km**\n{Se demande où fouiller}\n**Il décide de commencer à fouiller la zone en faisant attention aux alentours**\n=Fouille zone 1 km\n[...]\n**Prend la ferraille et la met dans son inventaire puis regarde le désert**\nEheh, ils m'auront pas eu cette fois !\n**Rentre à la ville**")
            .setColor(0xff0000)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter("『Hordes [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setTimestamp()
            message.channel.send(embed)
        }
    }
})