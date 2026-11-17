        // ========== LES 64 HEXAGRAMMES COMPLETS ==========
        const HEXAGRAMS = {
            1: {
                name: "Élan Créatif",
                tarot: "I · Le Bateleur",
                image: "乾",
                theme: "Qián wéi Tiān",
                meaning: "Force primordiale, création absolue, commencement divin",
                interpretation: "Cet hexagramme révèle la puissance créatrice sans limite. Vous êtes face à un moment d'expansion cosmique où tout est possible. L'univers manifeste son énergie créatrice à travers vous. Agissez avec confiance, initiez les grands projets, car l'énergie yang prime absolument. C'est le moment du potentiel infini et de la manifestation du rêve en réalité.",
                advice: "Soyez audacieux. Lancez-vous dans vos projets majeurs. La fortune vous accompagne. Initiez, créez, manifestez. C'est votre moment de gloire cosmique.",
                warning: "La force absolue ne doit pas devenir arrogance. Restez humble face à l'univers."
            },
            2: {
                name: "Élan Réceptif",
                tarot: "II · La Papesse",
                image: "坤",
                theme: "Kūn wéi Dì",
                meaning: "Réceptivité absolue, terre nourricière, accueil universel",
                interpretation: "L'énergie yin en son expression la plus pure. C'est le moment d'accueil, de réception, de soutien universel. La terre vous porte, l'univers vous soutient. Bien que l'action créatrice soit en attente, la fondation se prépare. Écoutez les murmures du destin, acceptez ce qui vient, soyez patient et nourricier. Votre puissance est dans l'adaptabilité et la réceptivité bienveillante.",
                advice: "Acceptez, accueillez, soutenez. Soyez patient et stable. Nourrir est votre force. Écoutez les autres et la nature.",
                warning: "L'adaptabilité excessive peut devenir passivité. Maintenez vos limites."
            },
            3: {
                name: "Difficultés Initiales",
                tarot: "8 de Coupes",
                image: "屯",
                theme: "Shuǐ Léi Zhūn",
                meaning: "Chaos organisé, obstacles créateurs, fondation instable",
                interpretation: "Au commencement, le chaos s'organise. Des difficultés surgissent, mais elles sont le creuset de la création. C'est le moment de persévérance intelligente. Cherchez la guidance, établissez une stratégie claire. Les obstacles ne sont pas des punitions mais des initiateurs de croissance. Traversez cette période avec sagesse et détermination.",
                advice: "Persévérez avec intelligence. Cherchez conseil. Établissez une base solide. Les obstacles vous enseignent.",
                warning: "Ne vous découragez pas face aux premiers obstacles. C'est normal et productif."
            },
            4: {
                name: "Immaturité",
                tarot: "4 de Deniers",
                image: "蒙",
                theme: "Shān Shuǐ Méng",
                meaning: "Innocence naïve, apprentissage fondamental, instruction requise",
                interpretation: "L'innocence juvénile demande instruction. Vous êtes face à un apprentissage essentiel où la naïveté doit être transformée en sagesse. Acceptez la guidance avec humilité, posez les questions justes, soyez ouvert. Chaque leçon de cette période sera précieuse pour votre croissance spirituelle. C'est une phase d'initiation sacrée.",
                advice: "Recherchez les vrais maîtres. Soyez humble et curieux. L'apprentissage est votre chemin.",
                warning: "L'arrogance bloque l'apprentissage. Restez humble et ouvert."
            },
            5: {
                name: "Attendre",
                tarot: "Reine de Coupes",
                image: "需",
                theme: "Shuǐ Tiān Xū",
                meaning: "Patience nourricière, préparation consciente, timing divin",
                interpretation: "Avant d'agir, vous devez attendre le moment propice. La patience est active, non passive. Préparez-vous mentalement, émotionnellement et spirituellement. Nourrissez votre être intérieur. Cette attente n'est pas stérile mais fertile, remplie de potentiel latent. Faites confiance au timing de l'univers. Le moment de l'action viendra.",
                advice: "Attendez le bon moment. Préparez-vous consciemment. Nourrissez votre âme. La confiance est votre vertu.",
                warning: "L'attente excessive peut paralyser. Agissez dans la préparation."
            },
            6: {
                name: "Plaider Sa Cause",
                tarot: "6 d'Épées",
                image: "讼",
                theme: "Tiān Shuǐ Sòng",
                meaning: "Conflit initié, confrontation nécessaire, clarification urgente",
                interpretation: "Un conflit surgit, demandant clarification honnête. Présentez votre cas avec vérité et justice. La parole est votre arme, non la force brute. Évitez l'escalade émotionnelle. Cherchez la compréhension mutuelle. La sagesse de la parole juste peut transformer tout conflit en harmonie. Soyez honnête, clair, équitable et vraiment écoutant.",
                advice: "Parlez votre vérité avec courage. Écoutez aussi. La clarté résout les conflits.",
                warning: "Le conflit ne peut être dépassé si vous restez égotiste. Cherchez le bien commun."
            },
            7: {
                name: "Armée",
                tarot: "3 de Deniers",
                image: "师",
                theme: "Dì Shuǐ Shī",
                meaning: "Organisation collective, discipline martiale, mobilisation unifiée",
                interpretation: "L'heure de l'organisation collective a sonné. Rassemblez les énergies vers un objectif commun. Cette période requiert discipline, stratégie et leadership visionnaire. Comme une armée bien entraînée, chaque élément doit jouer son rôle. Soyez un leader qui inspire plutôt qu'un tyran qui commande. L'unité crée la force invincible.",
                advice: "Organisez. Dirigez avec vision. Coordonnez les énergies. L'unité crée la victoire.",
                warning: "L'autoritarisme excessif crée la révolte. Guidez par l'exemple et la vision."
            },
            8: {
                name: "Alliance",
                tarot: "As de Coupes",
                image: "比",
                theme: "Shuǐ Dì Bǐ",
                meaning: "Union harmonieuse, fraternité authentique, alliance sacrée",
                interpretation: "L'union authentique se manifeste. C'est le moment des associations sincères basées sur des principes partagés, non sur l'intérêt personnel. Cette alliance renforce chaque partie et crée une force plus grande que l'individuel. Cultivez la loyauté, la transparence et la mutualité. Une véritable alliance transcende l'intérêt individuel.",
                advice: "Créez des alliances sincères. Soyez loyal et transparent. L'union crée la force.",
                warning: "Les alliances fondées sur l'intérêt seul échouent. Cherchez le vrai partage."
            },
            9: {
                name: "Petit Apprivoisé",
                tarot: "Roi d'Épées",
                image: "小畜",
                theme: "Fēng Tiān Xiǎo Xù",
                meaning: "Retenue délibérée, pudeur stratégique, modération productive",
                interpretation: "Une retenue délibérée est demandée. Ce n'est pas de la faiblesse mais une stratégie de force contenue. Comme un archer qui tend son arc avant de lâcher la flèche, vous accumulez l'énergie. Cette période d'attente et de modération crée les conditions pour une libération ultérieure plus puissante.",
                advice: "Retenez votre force. Soyez modéré. L'énergie accumulée crée la puissance.",
                warning: "La retenue excessive paralyse. Agissez quand vient le moment."
            },
            10: {
                name: "Démarche",
                tarot: "Reine d'Épées",
                image: "履",
                theme: "Tiān Zé Lǚ",
                meaning: "Progression consciente, marche intentionnelle, chaque pas compte",
                interpretation: "Avancez consciemment, un pas à la fois. Chaque action compte. C'est une période de progression lente mais sûre. Ne précipitez pas, ne traînez pas. Trouvez le rythme juste. Votre destinée se construit par une série de petits pas intentionnels, non par des grands sauts inconsidérés.",
                advice: "Avancez pas à pas. Soyez conscient de chaque action. Le chemin se construit.",
                warning: "L'impatience brise l'équilibre. La hâte crée les accidents."
            },
            11: {
                name: "Prospérité",
                tarot: "Reine de Deniers",
                image: "泰",
                theme: "Dì Tiān Tài",
                meaning: "Harmonie céleste, paix universelle, échange bénéfique",
                interpretation: "L'harmonie parfaite du Ciel et de la Terre. Toutes les conditions s'alignent favorablement. C'est une période d'échange mutuel bénéfique, de paix profonde et de bénédiction. Savourez cette prospérité rare, mais restez vigilant car tout change. Utilisez ce moment auspicieux pour consolider vos gains, pour partager votre richesse, pour apprendre les leçons de l'harmonie.",
                advice: "Savoupaz la prospérité. Partagez les bienfaits. Consolidez votre position.",
                warning: "La prospérité passe. Préparez-vous au changement. Soyez généreux."
            },
            12: {
                name: "Adversité",
                tarot: "2 d'Épées",
                image: "否",
                theme: "Tiān Dì Pǐ",
                meaning: "Incompatibilité des forces, stagnation énergétique, séparation nécessaire",
                interpretation: "Ciel et Terre se séparent. Il existe une stagnation profonde, une incompatibilité apparente des forces. Des obstacles surgissent, bloquant le progrès. Mais ce n'est pas le moment d'agir avec force. C'est le moment de réfléchir profondément, de chercher une nouvelle approche, de se préparer silencieusement. L'adversité forge l'âme. Persévérez avec stratégie et non avec violence.",
                advice: "Réfléchissez profondément. Cherchez une nouvelle approche. La patience forge.",
                warning: "La force brute échouera. L'introspection est votre force."
            },
            29: {
                name: "Ravins",
                tarot: "III · L'Impératrice",
                image: "坎",
                theme: "Kǎn wéi Shuǐ",
                meaning: "Profondeur de l'inconscient, abîmes de l'âme, peurs primordiales",
                interpretation: "L'eau répétée symbolise la profondeur insondable de l'inconscient. Vous êtes face à l'abîme, aux peurs profondes, aux parties cachées de votre âme. C'est une période d'introspection intense et courageuse. Descendez dans les ravins intérieurs sans crainte excessive. Cette plongée révèlera des richesses cachées, une connaissance transformatrice, une sagesse intérieure.",
                advice: "Descendez en vous avec courage. Confrontez vos ombres. La sagesse attend.",
                warning: "La peur excessive vous paralysera. Avancez avec détermination."
            },
            30: {
                name: "Lumière",
                tarot: "IV · L'Empereur",
                image: "离",
                theme: "Lí wéi Huǒ",
                meaning: "Illumination continue, clarté brillante, chaleur transformatrice",
                interpretation: "Le feu répété symbolise une illumination continue et intense. Votre intellect brille, votre passion s'enflamme, la clarté éclaire vos chemins. Mais attention : cette lumière dépend du combustible constant. C'est une période d'intensité, de brillance, de chaleur créative. Utilisez cette clarté pour voir vos chemins avec précision. Restez conscient que vous avez besoin de sources d'énergie continuelles.",
                advice: "Brillez de clarté. Utilisez l'illumination pour voir les chemins. Nourrissez votre feu.",
                warning: "Le feu peut consumer. Ne brûlez pas vos énergies essentielles."
            },
            51: {
                name: "Ébranlement",
                tarot: "V · Le Pape",
                image: "震",
                theme: "Zhèn wéi Léi",
                meaning: "Choc électrique de la conscience, réveil soudain, transformation radicale",
                interpretation: "Le tonnerre répété symbolise une électricité cosmique qui vous traverse. C'est un choc transformateur, un réveil brutal à la conscience nouvelle. Cet ébranlement peut être douloureux, mais il est salutaire et nécessaire. Acceptez cette secousse comme un catalyseur de croissance spirituelle. Après le choc vient la clarté nouvelle.",
                advice: "Acceptez l'ébranlement. Laissez-vous transformer. La clarté nouvelle vient.",
                warning: "La résistance au choc prolonge la douleur. Acceptez et grandissez."
            },
            52: {
                name: "Stabiliser",
                tarot: "VIII · La Justice",
                image: "艮",
                theme: "Gèn wéi Shān",
                meaning: "Immobilité absolue, méditation profonde, consolidation intérieure",
                interpretation: "La montagne répétée symbolise l'immobilité complète et la stabilité inébranlable. C'est le repos absolu après le mouvement, la méditation profonde, la consolidation intérieure. Cessez l'action extérieure, entrez dans un silence contemplatif. Cette période est pour digérer les expériences, pour consolider votre être interne. Comme une montagne, développez une stabilité totalement inébranlable.",
                advice: "Cessez l'action. Méditez profondément. Consolidez votre intériorité.",
                warning: "L'immobilité excessive peut devenir rigidité. Restez flexible."
            },
            57: {
                name: "Se Modeler",
                tarot: "VII · Le Chariot",
                image: "巽",
                theme: "Xùn wéi Fēng",
                meaning: "Pénétration douce, adaptation fluide, influence imperceptible",
                interpretation: "Le vent répété symbolise la pénétration douce et irrésistible. Votre influence n'est pas brute mais subtile, pénétrante, totalement irrésistible. C'est l'art de la transformation lente et imperceptible, de l'adaptation fluide aux circonstances. Guidez sans forcer, influencez sans blesser. Votre puissance réside dans la non-résistance absolue et la flexibilité totale.",
                advice: "Soyez flexible et doux. Pénétrez avec douceur. L'influence invisible est plus forte.",
                warning: "La douceur excessive peut sembler faiblesse. Soyez doux mais ferme."
            },
            58: {
                name: "Échanger",
                tarot: "VI · L'Amoureux",
                image: "兑",
                theme: "Duì wéi Zé",
                meaning: "Allégresse absolue, échange joyeux, union festive",
                interpretation: "Le lac répété symbolise l'allégresse totale et l'échange joyeux. C'est le moment de la célébration authentique, de la communion festive sincère. Les cœurs s'ouvrent naturellement, le partage coule sans effort. Cette harmonie sociale apporte une satisfaction mutuelle profonde. Savourez l'échange joyeux avec autrui. C'est la connexion authentique.",
                advice: "Célébrez la joie. Échangez avec ouverture. La convivialité guérit.",
                warning: "La joie excessive peut perdre son authenticité. Restez vrai."
            },
            63: {
                name: "Déjà Traversé",
                tarot: "10 de Coupes",
                image: "既济",
                theme: "Shuǐ Huǒ Jì Jì",
                meaning: "Complétude atteinte, apogée réalisé, succès consommé",
                interpretation: "Vous avez atteint la complétude de votre projet ou phase de vie. Le succès est là, l'apogée est consommé. Mais attention : c'est exactement le moment où le changement commence à s'amorcer. Savourez votre accomplissement, mais restez conscient que cette période de culmination est transitoire. Préparez-vous déjà aux changements qui commencent.",
                advice: "Savourez votre accomplissement. Mais préparez-vous au changement.",
                warning: "Après le sommet vient la descente. C'est le cycle naturel."
            },
            64: {
                name: "Pas Encore Traversé",
                tarot: "6 de Bâtons",
                image: "未济",
                theme: "Huǒ Shuǐ Wèi Jì",
                meaning: "Inachèvement productif, moment final imminent, ultime effort requis",
                interpretation: "Vous êtes à l'aube de l'accomplissement total. Le moment final n'est pas encore venu, mais il est très proche. C'est l'inachèvement productif où l'effort final est crucial pour franchir la ligne d'arrivée. Vous êtes extraordinairement proche du succès ; maintenez votre élan, affinez vos derniers efforts. Cet état de transition riche est le moment le plus prometteur.",
                advice: "Maintenez votre élan. L'effort final vous amènera au succès complet.",
                warning: "Abandonner maintenant serait tragique. Persévérez jusqu'au bout."
            }
        };

        // ========== HEXAGRAMMES 13–28, 31–50, 53–56, 59–62 ==========
Object.assign(HEXAGRAMS, {
  13: {
    name: "S'entendre avec Tous", tarot: "Valet d'Épées", image: "同人", theme: "Tiān Huǒ Tóng Rén",
    meaning: "Fraternité claire, accord au grand jour, communauté fondée sur des principes partagés",
    interpretation: "Le feu s'élève vers le ciel : la lumière se partage. Cet hexagramme annonce une entente authentique, fondée non sur l'intérêt mais sur une vision commune clairement énoncée. Ce qui était divisé peut se rassembler, à condition que tout se dise ouvertement. Votre discernement vous permet de reconnaître qui partage réellement votre voie.",
    advice: "Parlez au grand jour. Rassemblez autour d'un idéal clair, au-delà des clans et des préférences personnelles.",
    warning: "Une communauté fermée sur elle-même devient un clan. Gardez la porte ouverte."
  },
  14: {
    name: "Grand Réalisé", tarot: "Roi de Bâtons", image: "大有", theme: "Huǒ Tiān Dà Yǒu",
    meaning: "Abondance lumineuse, autorité naturelle, richesse au service de tous",
    interpretation: "Le soleil est au zénith : vous possédez beaucoup, matériellement ou spirituellement, et chacun le voit. C'est une période d'abondance maîtrisée, d'autorité naturelle et de reconnaissance. Mais cette richesse oblige : la lumière n'est grande que si elle éclaire autour d'elle. Le Roi de Bâtons gouverne ainsi, avec une générosité qui rayonne.",
    advice: "Distribuez ce que vous avez reçu. Gouvernez avec bonté et clarté. Soutenez le bien et écartez le mal.",
    warning: "Posséder beaucoup attire l'envie et l'orgueil. Restez modeste dans la plénitude."
  },
  15: {
    name: "Se Tenir", tarot: "2 de Deniers", image: "謙", theme: "Dì Shān Qiān",
    meaning: "Modestie active, grandeur cachée, équilibre juste",
    interpretation: "La montagne se cache sous la terre : la grandeur véritable n'a pas besoin de se montrer. Cet hexagramme loue la modestie active, celle qui nivelle sans écraser, réduit l'excès et comble le manque. Comme les 2 de Deniers, vous tenez l'équilibre avec souplesse. Les choses se mènent à leur terme par la constance discrète.",
    advice: "Restez simple et constant. Laissez vos actes parler. Rééquilibrez en donnant à ceux qui manquent.",
    warning: "La fausse modestie est une vanité déguisée. Soyez sincère, non effacé."
  },
  16: {
    name: "S'enthousiasmer", tarot: "As de Bâtons", image: "豫", theme: "Léi Dì Yù",
    meaning: "Élan joyeux, étincelle première, énergie qui entraîne les autres",
    interpretation: "Le tonnerre jaillit de la terre : une énergie joyeuse se met en mouvement. L'enthousiasme est contagieux, il rallie les autres et ouvre la voie à l'action collective, comme la musique qui élève les cœurs. C'est l'As de Bâtons : l'étincelle première, l'élan qui cherche sa forme dans le monde.",
    advice: "Suivez l'élan et entraînez les autres. Organisez la fête comme l'action. Donnez à l'enthousiasme un projet à porter.",
    warning: "L'enthousiasme sans fondement retombe vite. Ne vous laissez pas griser, vérifiez les bases."
  },
  17: {
    name: "Suivre", tarot: "9 de Coupes", image: "隨", theme: "Zé Léi Suí",
    meaning: "Adaptation consciente, harmonie avec le cours des choses, repos mérité",
    interpretation: "Le tonnerre s'abaisse dans le lac : la force accepte de suivre pour mieux se reposer. Suivre n'est pas se soumettre aveuglément, c'est lire le cours des choses et s'y adapter au bon moment. Vous gagnez en vous mettant au service de ce qui est juste, et les autres vous suivront ensuite naturellement. Le 9 de Coupes dit la satisfaction d'une harmonie trouvée.",
    advice: "Adaptez-vous au temps. Choisissez bien ce que vous suivez. Reposez-vous quand vient le soir.",
    warning: "Suivre sans discernement mène à l'égarement. Ne suivez que ce qui est digne de l'être."
  },
  18: {
    name: "Remédier au Corrompu", tarot: "6 de Deniers", image: "蠱", theme: "Shān Fēng Gǔ",
    meaning: "Réparation d'un héritage abîmé, réforme nécessaire, renouveau",
    interpretation: "Le vent stagne sous la montagne : quelque chose a été négligé, hérité, laissé pourrir. Il s'agit de réparer ce qui s'est abîmé, souvent une affaire de famille, de tradition ou d'habitude. La corruption vient de la négligence, donc elle se répare par l'effort. Les 6 de Deniers rappellent l'échange juste : donner et rendre.",
    advice: "Identifiez la cause avant d'agir. Réformez avec vigueur, mais réfléchissez trois jours avant et trois jours après.",
    warning: "Ne vous contentez pas de blâmer ceux qui ont failli avant vous : occupez-vous de réparer."
  },
  19: {
    name: "Approcher", tarot: "Valet de Deniers", image: "臨", theme: "Dì Zé Lín",
    meaning: "Approche bienveillante, force montante, moment propice et limité",
    interpretation: "La terre s'incline vers le lac : une puissance bienveillante s'approche. Une force montante arrive, favorable, mais elle n'est pas éternelle. Approchez les autres avec générosité et tolérance, comme le Valet de Deniers qui s'applique à apprendre. Profitez de ce moment propice, sachant que les saisons tournent.",
    advice: "Avancez avec confiance et bienveillance. Enseignez, soutenez, tolérez.",
    warning: "Les belles périodes ont une fin. Agissez avant que la saison ne tourne."
  },
  20: {
    name: "Regarder", tarot: "As d'Épées", image: "觀", theme: "Fēng Dì Guān",
    meaning: "Contemplation active, vision panoramique, exemple donné",
    interpretation: "Le vent parcourt la terre : le sage observe depuis la tour. Avant l'offrande vient la contemplation, l'attention pure qui regarde sans se hâter. Vous êtes invité à voir ce qui se passe vraiment, et à vous laisser voir en donnant l'exemple. L'As d'Épées incarne cette pensée claire qui perce les apparences.",
    advice: "Observez avant d'agir. Examinez-vous autant que le monde. Soyez un exemple.",
    warning: "Contempler n'est pas fuir. Ne restez pas spectateur indéfiniment."
  },
  21: {
    name: "Mordre et Unir", tarot: "9 de Bâtons", image: "噬嗑", theme: "Huǒ Léi Shì Kè",
    meaning: "Obstacle à trancher, justice qui rétablit le lien, résolution ferme",
    interpretation: "Un obstacle s'est glissé entre les mâchoires : quelque chose empêche la communication ou l'union. Le tonnerre et l'éclair s'allient : la fermeté et la clarté doivent trancher. C'est le moment d'une décision nette, d'une justice qui rétablit le lien. Les 9 de Bâtons rappellent la résolution de celui qui tient bon jusqu'au bout.",
    advice: "Nommez l'obstacle et tranchez avec clarté. Appliquez les règles avec justice.",
    warning: "La sévérité sans clarté blesse. Punir n'est pas se venger."
  },
  22: {
    name: "Embellir", tarot: "10 de Deniers", image: "賁", theme: "Shān Huǒ Bì",
    meaning: "Beauté de la forme, grâce, ornement d'une œuvre accomplie",
    interpretation: "Le feu éclaire la montagne : la beauté orne la forme. Cet hexagramme célèbre l'art, la grâce et le geste soigné qui accompagnent une œuvre accomplie, comme les 10 de Deniers. Mais l'ornement n'est qu'un voile : il convient aux petites choses, non aux décisions graves.",
    advice: "Soignez la forme, la parole, le geste. Accueillez la beauté sans en faire un but.",
    warning: "L'apparence ne remplace pas le fond. Ne décidez pas des grandes affaires sur de belles façades."
  },
  23: {
    name: "Usure", tarot: "As de Deniers", image: "剝", theme: "Shān Dì Bō",
    meaning: "Érosion par la base, retrait nécessaire, conservation de l'essentiel",
    interpretation: "La montagne repose sur une terre qui s'effrite : ce qui était solide s'érode par la base. C'est une période de retrait, où ce qui vous soutenait s'amenuise. Ce n'est pas le moment de s'engager mais de conserver l'essentiel, comme le germe de l'As de Deniers qui attend sous la terre.",
    advice: "Ne lancez rien de nouveau. Protégez vos fondations, retirez-vous, préservez l'essentiel.",
    warning: "Forcer l'action pendant l'érosion accélère la chute. Patience."
  },
  24: {
    name: "Retour", tarot: "7 de Deniers", image: "復", theme: "Dì Léi Fù",
    meaning: "Renouveau discret, lumière qui renaît, patience dans le cycle",
    interpretation: "Le tonnerre sommeille sous la terre : au solstice d'hiver, un premier trait de lumière renaît. Le retour est discret mais certain, et il n'exige pas de forcer. Les 7 de Deniers disent la patience et la foi dans le cycle. Des amis, des idées, une énergie reviennent d'eux-mêmes.",
    advice: "Revenez à votre voie, sans hâte. Accueillez les débuts fragiles et protégez-les.",
    warning: "Un renouveau fragile se détruit si on le presse. Laissez-lui le temps."
  },
  25: {
    name: "Spontanément", tarot: "9 d'Épées", image: "無妄", theme: "Tiān Léi Wú Wàng",
    meaning: "Innocence active, droiture, action sans calcul",
    interpretation: "Le tonnerre roule sous le ciel : tout être retrouve sa nature spontanée. L'innocence est ici l'action droite, sans calcul ni arrière-pensée. En agissant simplement, selon ce qui est juste, tout réussit ; l'intention détournée, elle, échoue. Les 9 d'Épées rappellent que cette pureté se gagne par l'épreuve.",
    advice: "Agissez sans calcul, avec droiture. Faites confiance à votre nature profonde.",
    warning: "Se croire innocent n'est pas l'être. Les arrière-pensées reviennent."
  },
  26: {
    name: "Grand Apprivoisé", tarot: "Roi de Deniers", image: "大畜", theme: "Shān Tiān Dà Xù",
    meaning: "Grande force contenue, savoir accumulé, ressources disciplinées",
    interpretation: "Le ciel est contenu dans la montagne : une immense énergie est retenue, disciplinée, nourrie. Vous accumulez le savoir, l'expérience et les ressources, comme le Roi de Deniers qui gère ses richesses. Cette force contenue prépare les grandes entreprises et les grandes traversées.",
    advice: "Nourrissez-vous de la sagesse des anciens. Accumulez, étudiez, préparez.",
    warning: "Une force trop longtemps contenue se bloque. Sachez la libérer en son temps."
  },
  27: {
    name: "Nourrir", tarot: "8 de Deniers", image: "頤", theme: "Shān Léi Yí",
    meaning: "Ce que l'on nourrit en soi, parole mesurée, travail régulier",
    interpretation: "Les mâchoires : ce que l'on mange et ce que l'on dit révèlent ce que l'on est. La montagne immobile en haut, le tonnerre mobile en bas. Quelle nourriture donnez-vous à votre corps, à votre esprit, à votre âme ? Les 8 de Deniers répondent : le travail régulier et soigné.",
    advice: "Soyez modéré dans la parole et dans la nourriture. Choisissez ce qui vous fait vraiment grandir.",
    warning: "Observez ce que vous nourrissez en vous et chez les autres : cela devient vous."
  },
  28: {
    name: "Grand Excès", tarot: "7 de Coupes", image: "大過", theme: "Zé Fēng Dà Guò",
    meaning: "Poids excessif, situation exceptionnelle, courage de la décision",
    interpretation: "L'eau monte au-dessus des arbres : la poutre maîtresse ploie sous le poids. Une situation exceptionnelle exige une réponse exceptionnelle. Les 7 de Coupes montrent l'excès des possibles : il faut un cap et du courage. Il ne faut pas rester sous la poutre, mais avoir un lieu où aller.",
    advice: "Agissez avec courage et sortez de la structure qui ploie. Assumez une décision hors norme.",
    warning: "L'extrême se paie. N'y allez pas sans but clair, et ne vous isolez pas."
  },
  31: {
    name: "Inciter", tarot: "4 de Coupes", image: "咸", theme: "Zé Shān Xián",
    meaning: "Attraction mutuelle, influence spontanée, ouverture du cœur",
    interpretation: "Le lac repose sur la montagne : deux forces s'attirent et se répondent sans contrainte. C'est l'hexagramme de l'attirance naissante et de l'ouverture du cœur, que les 4 de Coupes invitent à accueillir même dans la mélancolie. L'influence vraie naît de l'écoute et de la réceptivité.",
    advice: "Ouvrez votre cœur. Laissez-vous toucher. Influencez par la sincérité.",
    warning: "Ne manipulez pas. Une attirance sans fond s'éteint vite."
  },
  32: {
    name: "Endurer", tarot: "7 de Bâtons", image: "恆", theme: "Léi Fēng Héng",
    meaning: "Durée dans le mouvement, constance, fidélité à sa voie",
    interpretation: "Tonnerre et vent se renforcent mutuellement : la durée vraie est un mouvement constant dans une direction juste. Les 7 de Bâtons tiennent leur position face aux assauts répétés. Persévérez dans votre voie, sans rigidité, en vous renouvelant sans cesse.",
    advice: "Tenez le cap. Faites durer ce qui est juste et adaptez la forme.",
    warning: "La durée n'est pas l'entêtement. Ne persévérez pas dans l'erreur."
  },
  33: {
    name: "Faire Retraite", tarot: "4 d'Épées", image: "遯", theme: "Tiān Shān Dùn",
    meaning: "Retrait stratégique, dignité préservée, forces ménagées",
    interpretation: "La montagne s'élève sous le ciel, qui s'éloigne : le moment est venu de se retirer. La retraite n'est pas une fuite mais une stratégie, comme les 4 d'Épées qui se reposent en gardant leurs forces. Se retirer à temps préserve la dignité et prépare le retour.",
    advice: "Retirez-vous avec dignité, sans colère. Gardez vos forces pour plus tard.",
    warning: "Tarder à partir coûte cher. Mais ne fuyez pas par peur : choisissez."
  },
  34: {
    name: "Grande Force", tarot: "Reine de Bâtons", image: "大壯", theme: "Léi Tiān Dà Zhuàng",
    meaning: "Vigueur à son apogée, force ancrée, puissance qui respecte l'ordre juste",
    interpretation: "Le tonnerre éclate au-dessus du ciel : la force est à son apogée. Comme la Reine de Bâtons, vous rayonnez d'une vigueur ancrée dans votre autorité intérieure. Mais la vraie force suit l'ordre juste : elle ne foule pas ce qui ne lui revient pas.",
    advice: "Mettez votre force au service du juste. Agissez avec confiance et maîtrise.",
    warning: "La force sans règle devient brutalité. Ne forcez pas là où il ne faut pas."
  },
  35: {
    name: "Avancer au Grand Jour", tarot: "2 de Bâtons", image: "晉", theme: "Huǒ Dì Jìn",
    meaning: "Progrès visible, lumière montante, reconnaissance méritée",
    interpretation: "Le soleil se lève sur la terre : le progrès est visible et reconnu. Vous montez vers la lumière, accueilli et honoré. Les 2 de Bâtons évoquent la vision qui s'élargit avec l'altitude. Avancez en éclairant votre propre vertu.",
    advice: "Avancez au grand jour et développez votre clarté intérieure. Acceptez la reconnaissance.",
    warning: "L'ascension rapide fragilise. Consolidez vos bases avant de monter plus haut."
  },
  36: {
    name: "Lumière Obscurcie", tarot: "9 de Deniers", image: "明夷", theme: "Dì Huǒ Míng Yí",
    meaning: "Lumière voilée, discrétion nécessaire, richesse intérieure protégée",
    interpretation: "Le soleil est descendu sous la terre : la lumière est voilée par des forces hostiles. C'est un temps de discrétion. Comme les 9 de Deniers, la richesse intérieure se protège dans le silence. Voilez votre éclat sans l'éteindre et persévérez dans l'adversité.",
    advice: "Soyez discret, gardez votre lumière intérieure, endurez sans amertume.",
    warning: "Ne vous exposez pas aux puissants hostiles. Ne laissez pas l'obscurité vous gagner."
  },
  37: {
    name: "Gens du Clan", tarot: "10 d'Épées", image: "家人", theme: "Fēng Huǒ Jiā Rén",
    meaning: "Ordre du foyer, rôles justes, transmission entre générations",
    interpretation: "Le vent sort du feu : l'ordre du foyer rayonne au dehors. La famille, au sens large, est le premier modèle de l'ordre social, chacun à sa place, avec des paroles vraies et des actes constants. Les 10 d'Épées marquent la fin d'un cycle et la transmission aux générations suivantes.",
    advice: "Soignez votre foyer, vos paroles, vos engagements envers vos proches. Que chacun tienne sa place.",
    warning: "Un foyer rigide étouffe. Un foyer sans règle se disperse."
  },
  38: {
    name: "Divergence", tarot: "Cavalier de Bâtons", image: "睽", theme: "Huǒ Zé Kuí",
    meaning: "Opposition féconde, tension créatrice, rencontre de l'altérité",
    interpretation: "Le feu monte, le lac descend : deux forces s'éloignent. L'opposition est ici une tension créatrice, non une rupture. Le Cavalier de Bâtons avance malgré les obstacles. Dans les petites choses, la différence enrichit : ne cherchez pas l'identité, cherchez la rencontre.",
    advice: "Respectez la différence. Collaborez dans les petites choses. Gardez votre singularité.",
    warning: "Ne laissez pas la divergence se changer en défiance. Dialoguez avant que l'écart ne grandisse."
  },
  39: {
    name: "Obstruction", tarot: "3 de Coupes", image: "蹇", theme: "Shuǐ Shān Jiǎn",
    meaning: "Obstacle réel, retour à soi, aide et amitié dans l'épreuve",
    interpretation: "L'eau est bloquée par la montagne : l'obstacle est réel et devant vous. Inutile de forcer : retournez en vous, cherchez la source intérieure, demandez de l'aide. Les 3 de Coupes disent la force de l'amitié dans l'épreuve. Cherchez conseil auprès d'un sage.",
    advice: "Faites demi-tour, réfléchissez, cherchez de l'aide. Cultivez votre vertu.",
    warning: "Ne vous acharnez pas contre le mur. Cherchez le chemin latéral."
  },
  40: {
    name: "Délivrance", tarot: "5 de Bâtons", image: "解", theme: "Léi Shuǐ Xiè",
    meaning: "Tension dénouée, conflit résolu, énergie libérée",
    interpretation: "Le tonnerre et la pluie dénouent la tension : l'orage libère. Après la crise vient la délivrance, et il faut la saisir sans tarder. Comme dans les 5 de Bâtons, le conflit une fois résolu libère une énergie neuve. Pardonnez les fautes et tournez la page.",
    advice: "Agissez vite pour profiter de la délivrance. Pardonnez et avancez.",
    warning: "Ne revenez pas sans cesse sur le passé. Une délivrance négligée se referme."
  },
  41: {
    name: "Diminuer", tarot: "Cavalier de Deniers", image: "損", theme: "Shān Zé Sǔn",
    meaning: "Sacrifice consenti, simplification, ressources concentrées sur l'essentiel",
    interpretation: "Le lac se vide pour nourrir la montagne : un sacrifice consenti. Réduire, simplifier, offrir : voilà ce que demande ce moment. Comme le Cavalier de Deniers, concentrez vos ressources sur l'essentiel. La sincérité de l'offrande en fait la valeur.",
    advice: "Simplifiez. Donnez avec sincérité. Maîtrisez la colère et les désirs.",
    warning: "Se priver sans raison est stérile. Diminuez le superflu, pas l'essentiel."
  },
  42: {
    name: "Augmenter", tarot: "8 d'Épées", image: "益", theme: "Fēng Léi Yì",
    meaning: "Croissance partagée, faveur à saisir, bien à pratiquer sans tarder",
    interpretation: "Le vent nourrit le tonnerre : ce qui descend vers le bas profite à tous. C'est une période favorable de croissance, d'entreprises et de traversées. Les 8 d'Épées vous apprennent à recevoir, même quand la vue est temporairement voilée. Quand vous voyez le bien, hâtez-vous de le pratiquer.",
    advice: "Profitez de la faveur pour entreprendre. Faites le bien dès que vous le voyez. Corrigez vos fautes.",
    warning: "Une faveur se gaspille. Utilisez-la pour le bien commun."
  },
  43: {
    name: "Se Montrer Résolu", tarot: "Roi de Coupes", image: "夬", theme: "Zé Tiān Guài",
    meaning: "Percée décisive, vérité proclamée, résolution sans violence",
    interpretation: "L'eau monte jusqu'au ciel et va percer : c'est l'heure d'une décision publique, sans violence. Le Roi de Coupes tranche avec sagesse et sans cruauté. Proclamez la vérité ouvertement, mais n'attaquez pas de front : la résolution ne passe pas par les armes.",
    advice: "Dites la vérité clairement. Partagez plutôt que de garder. Tranchez sans cruauté.",
    warning: "Ne vous reposez pas sur la victoire. Un reste de mal peut renaître."
  },
  44: {
    name: "Être Accueillant", tarot: "7 d'Épées", image: "姤", theme: "Tiān Fēng Gòu",
    meaning: "Rencontre inattendue, tentation de l'esquive, discernement nécessaire",
    interpretation: "Le vent souffle sous le ciel : une rencontre inattendue, séduisante, puissante. Comme dans les 7 d'Épées, une tentation de ruse ou d'esquive se présente. Distinguez la rencontre féconde de celle qui vous dissout. Accueillez, mais gardez votre axe.",
    advice: "Accueillez l'imprévu avec discernement. Examinez ce qui s'offre avant de vous engager.",
    warning: "Ne vous laissez pas absorber par une force qui prend trop de place."
  },
  45: {
    name: "Réunion", tarot: "2 de Coupes", image: "萃", theme: "Zé Dì Cuì",
    meaning: "Assemblée des cœurs, rassemblement autour d'un centre, communauté à fonder",
    interpretation: "Le lac repose sur la terre : les eaux se rassemblent. C'est une assemblée, une union des cœurs autour d'un centre sacré. Comme les 2 de Coupes, deux âmes s'accordent pour fonder une communauté. Ce rassemblement demande un centre solide et de la prévoyance.",
    advice: "Rassemblez autour d'un idéal. Honorez ce qui vous unit. Préparez-vous aux imprévus.",
    warning: "Les foules attirent les troubles. Prévoyez et armez-vous de sagesse."
  },
  46: {
    name: "Croissance", tarot: "5 de Deniers", image: "升", theme: "Dì Fēng Shēng",
    meaning: "Poussée organique, montée patiente, petites choses accumulées",
    interpretation: "Le bois pousse dans la terre : la montée est lente, organique, certaine. Chaque petite chose accumulée mène au grand. Les 5 de Deniers révèlent, paradoxalement, que la ressource germe dans la difficulté. Allez voir celui qui peut vous guider, entreprenez sans crainte.",
    advice: "Montez pas à pas. Accumulez les petits progrès. Cherchez un soutien d'envergure.",
    warning: "Ne sautez pas d'étapes. Une croissance précipitée s'effondre."
  },
  47: {
    name: "Épuisement", tarot: "5 de Coupes", image: "困", theme: "Zé Shuǐ Kùn",
    meaning: "Ressources taries, parole qui ne porte plus, force intérieure intacte",
    interpretation: "Le lac est vide, l'eau est descendue : vous êtes à bout de ressources. Votre parole ne porte plus et personne ne vous croit. Comme dans les 5 de Coupes, c'est un deuil, une perte nécessaire, mais ce qui reste est l'essentiel. Gardez la force intérieure : celui qui est plein au-dedans ne s'épuise pas.",
    advice: "Restez ferme intérieurement. Agissez plus que vous ne parlez. Acceptez la perte.",
    warning: "Ne vous justifiez pas auprès de ceux qui ne vous croient pas. Économisez vos forces."
  },
  48: {
    name: "Le Puits", tarot: "6 de Coupes", image: "井", theme: "Shuǐ Fēng Jǐng",
    meaning: "Source inépuisable, retour aux origines, ressource commune à entretenir",
    interpretation: "L'eau monte du puits : la ressource essentielle ne change pas, même quand tout change autour. Les 6 de Coupes évoquent le retour aux sources, la mémoire heureuse qui nourrit. Le puits est au service de tous, il faut l'entretenir, le curer et y descendre le seau jusqu'au fond.",
    advice: "Retournez à vos sources. Entretenez ce qui nourrit tout le monde. Descendez jusqu'au fond.",
    warning: "Un puits non entretenu s'envase. Ne laissez pas se briser le seau."
  },
  49: {
    name: "Révolution", tarot: "Valet de Coupes", image: "革", theme: "Zé Huǒ Gé",
    meaning: "Mue nécessaire, changement radical, message nouveau",
    interpretation: "L'eau et le feu s'opposent : le changement radical devient inévitable. Comme le Valet de Coupes, vous portez un message nouveau. La mue réussit si elle est claire, juste et conforme au temps, ordonnée comme un calendrier. Une fois le moment venu, le regret disparaît.",
    advice: "Changez au bon moment, après avoir gagné la confiance. Soyez clair sur le sens du changement.",
    warning: "Un changement imposé trop tôt ou sans confiance échoue. N'allez pas trop vite."
  },
  50: {
    name: "Chaudron", tarot: "8 de Bâtons", image: "鼎", theme: "Huǒ Fēng Dǐng",
    meaning: "Transmutation par le feu, nourriture spirituelle, position stable",
    interpretation: "Le feu brûle sous le chaudron : la matière brute se transforme en nourriture sacrée. C'est l'hexagramme de la transmutation alchimique. Comme les 8 de Bâtons, l'énergie est en plein mouvement, un message voyage. Votre position doit rester correcte pour que le chaudron cuise bien.",
    advice: "Transmutez ce qui est brut. Nourrissez l'esprit. Tenez une position stable.",
    warning: "Un chaudron mal équilibré renverse son contenu. Ne le surchargez pas."
  },
  53: {
    name: "Progresser Pas à Pas", tarot: "3 d'Épées", image: "漸", theme: "Fēng Shān Jiàn",
    meaning: "Développement graduel, étapes respectées, transition douloureuse mais juste",
    interpretation: "L'arbre grandit lentement sur la montagne : chaque étape est nécessaire à la suivante. Comme un mariage conduit selon les rites, rien ne se précipite. Les 3 d'Épées disent la douleur d'une transition qui permet un attachement plus juste.",
    advice: "Avancez graduellement. Respectez les étapes. Améliorez vos habitudes peu à peu.",
    warning: "Brûler les étapes ruine l'ouvrage. Ne forcez pas le rythme."
  },
  54: {
    name: "Mariage de la Cadette", tarot: "Valet de Bâtons", image: "歸妹", theme: "Léi Zé Guī Mèi",
    meaning: "Désir qui prend les devants, position provisoire, ardeur à apprivoiser",
    interpretation: "Le tonnerre agite le lac : le désir prend les devants, sans que les formes soient respectées. Comme le Valet de Bâtons, l'ardeur jeune apprend les limites de la passion. Dans cette situation, une position subordonnée est acceptée provisoirement. Rien n'est propice à une entreprise précipitée.",
    advice: "Acceptez une position provisoire. Apprenez les limites de l'ardeur. Attendez avant de vous engager plus loin.",
    warning: "L'engagement sans discernement déçoit. Examinez la fin dès le début."
  },
  55: {
    name: "Abondance", tarot: "10 de Bâtons", image: "豐", theme: "Léi Huǒ Fēng",
    meaning: "Plénitude au zénith, midi de l'existence, abondance à partager",
    interpretation: "Le tonnerre et la foudre arrivent ensemble : la plénitude est au zénith, comme le soleil à midi. Les 10 de Bâtons montrent le faîte de la réalisation, et son poids. L'abondance est grande, mais le midi décline. Jouissez-en pleinement, sans vous y accrocher.",
    advice: "Profitez de la plénitude. Partagez. Décidez avec clarté et justice.",
    warning: "Après midi vient le déclin. Ne vous endormez pas sur l'abondance."
  },
  56: {
    name: "Voyageur", tarot: "4 de Bâtons", image: "旅", theme: "Huǒ Shān Lǚ",
    meaning: "Condition du pèlerin, légèreté, étape joyeuse en terre étrangère",
    interpretation: "Le feu court sur la montagne sans s'y arrêter : le voyageur ne s'enracine nulle part. C'est la condition du pèlerin, léger, prudent, en terre étrangère. Les 4 de Bâtons évoquent l'étape joyeuse qui régénère. Soyez courtois, discret, et ne vous attardez pas.",
    advice: "Voyagez léger. Soyez prudent et aimable. Prenez vos étapes pour vous ressourcer.",
    warning: "Le voyageur arrogant ou imprudent perd son gîte. Évitez les querelles en terre étrangère."
  },
  59: {
    name: "Dénouer", tarot: "5 d'Épées", image: "渙", theme: "Fēng Shuǐ Huàn",
    meaning: "Dissolution des tensions, dispersion des glaces, rassemblement autour du sacré",
    interpretation: "Le vent souffle sur l'eau : les glaces se dispersent, les nœuds se défont. Après le conflit des 5 d'Épées, il faut laisser se dissiper les tensions accumulées. Le rassemblement autour du sacré réunit ce qui était éparpillé. C'est la dissolution de l'ego et des barrières.",
    advice: "Laissez fondre ce qui est figé. Rassemblez-vous autour d'un but plus grand que vous.",
    warning: "Dissoudre n'est pas perdre l'essentiel. Gardez votre centre en lâchant prise."
  },
  60: {
    name: "Mesure", tarot: "Cavalier de Coupes", image: "節", theme: "Shuǐ Zé Jié",
    meaning: "Limite juste, mesure créatrice, maîtrise des élans",
    interpretation: "L'eau dans le lac : la rive donne sa forme à l'étendue. La limite juste est créatrice. Comme le Cavalier de Coupes, vous maîtrisez vos élans émotionnels pour agir efficacement. Fixez des mesures, des règles, des budgets, mais sans austérité excessive.",
    advice: "Fixez des limites claires. Vivez selon vos moyens. Cherchez le juste milieu.",
    warning: "Une limitation trop austère ne dure pas. Ne vous privez pas à l'excès."
  },
  61: {
    name: "Juste Confiance", tarot: "Cavalier d'Épées", image: "中孚", theme: "Fēng Zé Zhōng Fú",
    meaning: "Vérité intérieure, sincérité qui touche les plus humbles, conviction authentique",
    interpretation: "Le vent souffle sur le lac jusqu'au fond : la sincérité intérieure touche même les plus humbles. Comme le Cavalier d'Épées, la pensée est animée par une conviction authentique. La vraie confiance traverse les grandes eaux. Examinez les affaires avec indulgence.",
    advice: "Soyez sincère. Faites confiance et soyez digne de confiance. Jugez avec clémence.",
    warning: "Une confiance placée sans discernement est vulnérable. La sincérité exige aussi la clarté."
  },
  62: {
    name: "Petit Excès", tarot: "3 de Bâtons", image: "小過", theme: "Léi Shān Xiǎo Guò",
    meaning: "Excès dans le petit, modestie des ambitions, premiers fruits",
    interpretation: "Le tonnerre gronde sur la montagne : un excès d'énergie, mais dans le petit, pas dans le grand. L'oiseau comprend qu'il vaut mieux descendre que monter. Comme dans les 3 de Bâtons, les premiers fruits encouragent à continuer. Soyez un peu plus réservé, plus soigneux, plus humble que d'ordinaire.",
    advice: "Faites de petites choses, avec soin. Soyez un peu plus prudent. Descendez plutôt que monter.",
    warning: "Les grandes ambitions échouent maintenant. Ne visez pas le zénith."
  }
});
