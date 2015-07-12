$(document).ready(function(){


//have an array of objects, the objects will be the images and descriptions
var arrayOfCards = [
  {
    name : "The Chariot",
    img : "images/tarot-chariot.jpg",
    description: "Succour, providence also war, triumph, presumption, vengeance, trouble.",
    reverse : "Riot, quarrel, dispute, litigation, defeat.",
    category : "major"
  },
  {
    name : "Ace of Cups",
    img  : "images/tarot-cups-01.jpg",
    description : "The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana. Divinatory Meanings: House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.",
    reverse : "House of the false heart, mutation, instability, revolution.",
    category : "cups"
  },
  {
    name : "Two of Cups",
    img : "images/tarot-cups-02.jpg",
    description : "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place. Divinatory Meanings: Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and - as a suggestion apart from all offices of divination - that desire which is not in Nature, but by which Nature is sanctified.",
    reverse : "Additional meaning: Passion",
    category : "cups"

  },
  {
    name : "Three of Cups",
    img : "images/tarot-cups-03.jpg",
    description : "Maidens in a garden-ground with cups uplifted, as if pledging one another. Divinatory Meanings: The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.",
    reverse : "Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.",
    category : "cups"

  },
  {
    name : "Four of Cups",
    img : "images/tarot-cups-04.jpg",
    description : "A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment. Divinatory Meanings: Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.",
    reverse : "Novelty, presage, new instruction, new relations.",
    category : "cups"

  },
  {
    name : "Five of Cups",
    img : "images/tarot-cups-05.jpg",
    description : "A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.",
    reverse : "News, alliances, affinity, consanguinity, ancestry, return, false projects.",
    category : "cups"


  },
  {
    name : "Six of Cups",
    img : "images/tarot-cups-06.jpg",
    description : "Children in an old garden, their cups filled with flowers. Divinatory Meanings: A card of the past and of memories, looking back, as - for example - on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.",
    reverse : "The future, renewal, that which will come to pass presently.",
    category : "cups"

  },
  {
    name : "Seven of Cups",
    img : "images/tarot-cups-07.jpg",
    description : "Strange chalices of vision, but the images are more especially those of the fantastic spirit. Divinatory Meanings: Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.",
    reverse : "Desire, will, determination, project.",
    category : "cups"

  },
  {
    name : "Eight of Cups",
    img : "images/tarot-cups-08.jpg",
    description : "A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern. Divinatory Meanings: The card speaks for itself on the surface, but other readings are entirely antithetical - giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence - either for good or evil. Great joy, happiness, feasting.",
    reverse : "Great joy, happiness, feasting.",
    category : "cups"

  },
  {
    name : "Nine of Cups",
    img : "images/tarot-cups-09.jpg",
    description : "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects. Divinatory Meanings: Concord, contentment, physical bien-etre; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
    reverse : "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
    category : "cups"

  },
  {
    name : "Ten of Cups",
    img : "images/tarot-cups-10.jpg",
    description : "Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond. Divinatory Meanings: Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.",
    reverse : "Repose of the false heart, indignation, violence.",
    category : "cups"

  },
  {
    name : "Page of Cups",
    img : "images/tarot-cups-11.jpg",
    description : "A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form. Divinatory Meanings: Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business. ",
    reverse : "Taste, inclination, attachment, seduction, deception, artifice.",
    category : "cups"

  },
  {
    name : "Knight of Cups",
    img : "images/tarot-cups-12.jpg",
    description : "Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision. Divinatory Meanings: Arrival, approach - sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.",
    reverse : "Trickery, artifice, subtlety, swindling, duplicity, fraud.",
    category : "cups"

  },
  {
    name : "Queen of Cups",
    img : "images/tarot-cups-13.jpg",
    description : "Beautiful, fair, dreamy - as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream. Divinatory Meanings: Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.",
    reverse : "The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.",
    category : "cups"

  },
  {
    name : "King of Cups",
    img : "images/tarot-cups-14.jpg",
    description : "He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards. Divinatory Meanings: Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.",
    reverse : "Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.",
    category : "cups"

  },
  {
    name : "Death",
    img : "images/tarot-death.jpg",
    description : "End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
    reverse : "Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
    category : "major"

  },
  {
    name : "The Devil",
    img : "images/tarot-devil.jpg",
    description : "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
    reverse : "Evil fatality, weakness, pettiness, blindness.",
    category : "major"

  },
  {
    name : "The Emperor",
    img : "images/tarot-emperor.jpg",
    description : "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
    reverse : "Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
    category : "major"

  },
  {
    name : "The Empress",
    img : "images/tarot-empress.jpg",
    description : "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
    reverse : "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
    category : "major"

  },
  {
    name : "The Fool",
    img : "images/tarot-fool.jpg",
    description : "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
    reverse : "Negligence, absence, distribution, carelessness, apathy, nullity, vanity.",
    category : "major"

  },
  {
    name : "The Hanged Man",
    img : "images/tarot-hangedman.jpg",
    description : "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.",
    reverse : "Selfishness, the crowd, body politic.",
    category : "major"

  },
  {
    name : "The Hermit",
    img : "images/tarot-hermit.jpg",
    description : "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
    reverse : "Concealment, disguise, policy, fear, unreasoned caution.",
    category : "major"

  },
  {
    name : "The Hierophant",
    img : "images/tarot-hierophant.jpg",
    description : "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
    reverse : "Society, good understanding, concord, overkindness, weakness.",
    category : "major"

  },
  {
    name : "The High Priestess",
    img : "images/tarot-highpriestess.jpg",
    description : "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
    reverse : "Passion, moral or physical ardour, conceit, surface knowledge.",
    category : "major"

  },
  {
    name : "Judgement",
    img : "images/tarot-judgement.jpg",
    description : "Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
    reverse : "Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
    category : "major"

  },
  {
    name : "Justice",
    img : "images/tarot-justice.jpg",
    description : "Equity, rightness, probity, executive; triumph of the deserving side in law.",
    reverse : "Law in all its departments, legal complications, bigotry, bias, excessive severity.",
    category : "major"

  },
  {
    name : "The Lovers",
    img : "images/tarot-lovers.jpg",
    description : "Attraction, love, beauty, trials overcome.",
    reverse : "Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
    category : "major"

  },
  {
    name : "The Magician",
    img : "images/tarot-magician.jpg",
    description : "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
    reverse : "Physician, Magus, mental disease, disgrace, disquiet.",
    category : "major"

  },
  {
    name : "The Moon",
    img : "images/tarot-moon.jpg",
    description : "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.",
    reverse : "Instability, inconstancy, silence, lesser degrees of deception and error.",
    category : "major"

  },
  {
    name : "Ace of Pentacles",
    img : "images/tarot-pentacles-01.jpg",
    description : "A hand - issuing, as usual, from a cloud - holds up a pentacle. Divinatory Meanings: Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.",
    reverse : "The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is r not.",
    category : "pentacles"

  },
  {
    name : "Two of Pentacles",
    img : "images/tarot-pentacles-02.jpg",
    description : "A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 Divinatory Meanings: On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.",
    reverse : "Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.",
    category : "pentacles"

  },
  {
    name : "Three of Pentacles",
    img : "images/tarot-pentacles-03.jpg",
    description : "A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest. Divinatory Meanings: Metier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.",
    reverse : "Mediocrity, in work and otherwise, puerility, pettiness, weakness.",
    category : "pentacles"

  },
  {
    name : "Four of Pentacles",
    img : "images/tarot-pentacles-04.jpg",
    description : "A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has. Divinatory Meanings: The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.",
    reverse : "Suspense, delay, opposition.",
    category : "pentacles"

  },
  {
    name : "Five of Pentacles",
    img : "images/tarot-pentacles-05.jpg",
    description : "Two mendicants in a snow-storm pass a lighted casement. Divinatory Meanings: The card foretells material trouble above all, whether in the form illustrated - that is, destitution - or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.",
    reverse : "Disorder, chaos, ruin, discord, profligacy.",
    category : "pentacles"

  },
  {
    name : "Six of Pentacles",
    img : "images/tarot-pentacles-06.jpg",
    description : "A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart. Divinatory Meanings: Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.",
    reverse : "Desire, cupidity, envy, jealousy, illusion.",
    category : "pentacles"

  },
  {
    name : "Seven of Pentacles",
    img : "images/tarot-pentacles-07.jpg",
    description : "A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there. Divinatory Meanings: These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels - and another innocence, ingenuity, purgation.",
    reverse : "Cause for anxiety regarding money which it may be proposed to lend.",
    category : "pentacles"

  },
  {
    name : "Eight of Pentacles",
    img : "images/tarot-pentacles-08.jpg",
    description : "An artist in stone at his work, which he exhibits in the form of trophies. Divinatory Meanings: Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.",
    reverse : "Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.",
    category : "pentacles"

  },
  {
    name : "Nine of Pentacles",
    img : "images/tarot-pentacles-09.jpg",
    description : "A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being. Divinatory Meanings: Prudence, safety, success, accomplishment, certitude, discernment. ",
    reverse : "Roguery, deception, voided project, bad faith.",
    category : "pentacles"

  },
  {
    name : "Ten of Pentacles",
    img : "images/tarot-pentacles-10.jpg",
    description : "A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child's hand is on one of them. Divinatory Meanings: Gain, riches; family matters, archives, extraction, the abode of a family.",
    reverse : "Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.",
    category : "pentacles"

  },
  {
    name : "Page of Pentacles",
    img : "images/tarot-pentacles-11.jpg",
    description : "A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him. Divinatory Meanings: Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.",
    reverse : "Prodigality, dissipation, liberality, luxury; unfavourable news.",
    category : "pentacles"

  },
  {
    name : "Knight of Pentacles",
    img : "images/tarot-pentacles-12.jpg",
    description : "He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein. Divinatory Meanings: Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.",
    reverse : "Inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.",
    category : "pentacles"

  },
  {
    name : "Queen of Pentacles",
    img : "images/tarot-pentacles-13.jpg",
    description : "The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein. Divinatory Meanings: Opulence, generosity, magnificence, security, liberty.",
    reverse : "Evil, suspicion, suspense, fear, mistrust.",
    category : "pentacles"

  },
  {
    name : "King of Pentacles",
    img : "images/tarot-pentacles-14.jpg",
    description : "The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money. Divinatory Meanings: Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.",
    reverse : "Vice, weakness, ugliness, perversity, corruption, peril.",

    category : "pentacles"

  },
  {
    name : "The Star",
    img : "images/tarot-star.jpg",
    description : "Loss, theft, privation, abandonment; another reading says-hope and bright prospects.",
    reverse : "Arrogance, haughtiness, impotence.",
    category : "major"

  },
  {
    name : "Strength",
    img : "images/tarot-strength.jpg",
    description : "Power, energy, action, courage, magnanimity; also complete success and honours.",
    reverse : "Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
    category : "major"

  },
  {
    name : "The Sun",
    img : "images/tarot-sun.jpg",
    description : "Material happiness, fortunate marriage, contentment.",
    reverse : "The same in a lesser sense.",
    category : "major"

  },
  {
    name : "Ace of Swords",
    img : "images/tarot-swords-01.jpg",
    description : "A hand issues from a cloud, grasping as word, the point of which is encircled by a crown. Divinatory Meanings: Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.",
    reverse : "The same, but the results are disastrous; another account says - conception, childbirth, augmentation, multiplicity.",
    category : "swords"

  },
  {
    name : "Two of Swords",
    img : "images/tarot-swords-02.jpg",
    description : "A hoodwinked female figure balances two swords upon her shoulders. Divinatory Meanings: Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.",
    reverse : "Imposture, falsehood, duplicity, disloyalty.",
    category : "swords"

  },
  {
    name : "Three of Swords",
    img : "images/tarot-swords-03.jpg",
    description : "Three swords piercing a heart; cloud and rain behind. Divinatory Meanings: Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.",
    reverse : "Mental alienation, error, loss, distraction, disorder, confusion.",
    category : "swords"

  },
  {
    name : "Four of Swords",
    img : "images/tarot-swords-04.jpg",
    description : "The effigy of a knight in the attitude of prayer, at full length upon his tomb. Divinatory Meanings: Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design.",
    reverse : "Wise administration, circumspection, economy, avarice, precaution, testament.",
    category : "swords"

  },
  {
    name : "Five of Swords",
    img : "images/tarot-swords-05.jpg",
    description : "A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field. Divinatory Meanings: Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.",
    reverse : "The same; burial and obsequies.",
    category : "swords"

  },
  {
    name : "Six of Swords",
    img : "images/tarot-swords-06.jpg",
    description : "A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength. Divinatory Meanings: journey by water, route, way, envoy, commissionary, expedient.",
    reverse : "Declaration, confession, publicity; one account says that it is a proposal of love.",
    category : "swords"

  },
  {
    name : "Seven of Swords",
    img : "images/tarot-swords-07.jpg",
    description : "A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand. Divinatory Meanings: Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.",
    reverse : "Good advice, counsel, instruction, slander, babbling.",
    category : "swords"

  },
   {
    name : "Eight of Swords",
    img : "images/tarot-swords-08.jpg",
    description : "A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage. Divinatory Meanings: Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness. ",
    reverse : "Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.",
    category : "swords"
  },
    {
    name : "Nine of Swords",
    img : "images/tarot-swords-09.jpg",
    description : "One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation. Divinatory Meanings: Death, failure, miscarriage, delay, deception, disappointment, despair.",
    reverse : "Imprisonment, suspicion, doubt, reasonable fear, shame.",
    category : "swords"

  },
    {
    name : "Ten of Swords",
    img : "images/tarot-swords-10.jpg",
    description : "A prostrate figure, pierced by all the swords belonging to the card. Divinatory Meanings: Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.",
    reverse : "Advantage, profit, success, favour, but none of these are permanent; also power and authority.",
    category : "swords"

  },
    {
    name : "Page of Swords",
    img : "images/tarot-swords-11.jpg",
    description : "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment. Divinatory Meanings: Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
    reverse : "More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.",
    category : "swords"

  },
    {
    name : "Knight of Swords",
    img : "images/tarot-swords-12.jpg",
    description : "He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart. Divinatory Meanings: Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.",
    reverse : "Imprudence, incapacity, extravagance.",
    category : "swords"

  },
    {
    name : "Queen of Swords",
    img : "images/tarot-swords-13.jpg",
    description : "Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power. Divinatory Meanings: Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.",
    reverse : "Malice, bigotry, artifice, prudery, bale, deceit.",
    category : "swords"

  },
    {
    name : "King of Swords",
    img : "images/tarot-swords-14.jpg",
    description : "He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office. Divinatory Meanings: Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.",
    reverse : "Cruelty, perversity, barbarity, perfidy, evil intention.",
    category : "swords"

  },
     {
    name : "Temperance",
    img : "images/tarot-temperance.jpg",
    description : "Economy, moderation, frugality, management, accommodation.",
    reverse : "Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.",
    category : "major"

  },
    {
    name : "The Tower",
    img : "images/tarot-tower.jpg",
    description : "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.",
    reverse : "According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.",
    category : "major"

  },
    {
    name : "Ace of Wands",
    img : "images/tarot-wands-01.jpg",
    description : "A hand issuing from a cloud grasps a stout wand or club. Divinatory Meanings: Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance. ",
    reverse : "Fall, decadence, ruin, perdition, to perish also a certain clouded joy.",
    category : "wands"

  },
    {
    name : "Two of Wands",
    img : "images/tarot-wands-02.jpg",
    description : "A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side. Divinatory Meanings: Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth.",
    reverse : "Surprise, wonder, enchantment, emotion, trouble, fear.",
    category : "wands"

  },
     {
    name : "Three of Wands",
    img : "images/tarot-wands-03.jpg",
    description : "A calm, stately personage, with his back turned, looking from a cliff's edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them. Divinatory Meanings: He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.",
    reverse : "The end of troubles, suspension or cessation of adversity, toil and disappointment.",
    category : "wands"

  },
    {
    name : "Four of Wands",
    img : "images/tarot-wands-04.jpg",
    description : "From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house. Divinatory Meanings: They are for once almost on the surface - country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.",
    reverse : "The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.",
    category : "wands"

  },
     {
    name : "Five of Wands",
    img : "images/tarot-wands-05.jpg",
    description : "A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the Divinatory Meanings: Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.",
    reverse : "Litigation, disputes, trickery, contradiction.",
    category : "wands"

  },
    {
    name : "Six of Wands",
    img : "images/tarot-wands-06.jpg",
    description : "A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side. Divinatory Meanings: The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.",
    reverse : "Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.",
    category : "wands"

  },
    {
    name : "Seven of Wands",
    img : "images/tarot-wands-07.jpg",
    description : "A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below. Divinatory Meanings: It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business - negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.",
    reverse : "Perplexity, embarrassments, anxiety. It is also a caution against indecision.",
    category : "wands"

  },
   {
    name : "Eight of Wands",
    img : "images/tarot-wands-08.jpg",
    description : "The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold. Divinatory Meanings: Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love. ",
    reverse : "Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.",
    category : "wands"

  },
  {
    name : "Nine of Wands",
    img : "images/tarot-wands-09.jpg",
    description : "The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves - erect, in orderly disposition, like a palisade. Divinatory Meanings: The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts - delay, suspension, adjournment.",
    reverse : "Obstacles, adversity, calamity.",
    category : "wands"

  },
   {
    name : "Ten of Wands",
    img : "images/tarot-wands-10.jpg",
    description : "A man oppressed by the weight of the ten staves which he is carrying. Divinatory Meanings: A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.",
    reverse : "Contrarieties, difficulties, intrigues, and their analogies.",
    category : "wands"

  },
    {
    name : "Page of Wands",
    img : "images/tarot-wands-11.jpg",
    description : "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange. Divinatory Meanings: Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
    reverse : "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
    category : "wands"

  },
   {
    name : "Knight of Wands",
    img : "images/tarot-wands-12.jpg",
    description : "He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith. Divinatory Meanings: Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.",
    reverse : "Rupture, division, interruption, discord.",
    category : "wands"

  },
     {
    name : "Queen of Wands",
    img : "images/tarot-wands-13.jpg",
    description : "The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic. Divinatory Meanings: A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business. ",
    reverse : "Good, economical, obliging, serviceable. Signifies also - but in certain positions and in the neighbourhood of other cards tending in such directions - opposition, jealousy, even deceit and infidelity.",
    category : "wands"

  },
      {
    name : "King of Wands",
    img : "images/tarot-wands-14.jpg",
    description : "The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne. Divinatory Meanings: Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.",
    reverse : "Good, but severe; austere, yet tolerant.",
    category : "wands"

  },
   {
    name : "Wheel of Fortune",
    img : "images/tarot-wheeloffortune.jpg",
    description : "Destiny, fortune, success, elevation, luck, felicity.",
    reverse : "Increase, abundance, superfluity.",
    category : "major"

  },
   {
    name : "The World",
    img : "images/tarot-world.jpg",
    description : "Assured success, recompense, voyage, route, emigration, flight, change of place.",
    reverse : "Inertia, fixity, stagnation, permanence.",
    category : "major"
  },
  ];


    // $.ajaxSetup({ cache: true });
    // $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    //   FB.init({
    //     appId: '166957156723662',
    //     version: 'v2.3' // or v2.0, v2.1, v2.0
    //   });
    //   $('#loginbutton,#feedbutton').removeAttr('disabled');
    //   FB.getLoginStatus(updateStatusCallback);
    // });


var calledOneTime = false;
var buttonClick = 0;
var result;

//count the number of times the button is clicked
function buttonCount(){
buttonClick = buttonClick + 1;
    console.log(buttonClick);
    return buttonClick;
}

//randomize the card
function pickCard() {
  result = (arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)]);
  console.log(result.img);

}

//flip card functionality
function flipCard() {

  $(".card").flip({
    axis: 'y',
    trigger : 'manual',
    speed : 500
  });
  $(".card").flip(true);

}

//display the random card and hide it by every click whether even or odd
function displayImg() {
var cardImage = "<img src=" + result.img + ">",
    cardName = "<h2>" + result.name + "</h2>",
    cardDescription = "<p>" + result.description + "</p>";

  if(calledOneTime === false && (buttonClick % 2 !== 0)) {
        calledOneTime = true;

        $(".back").append(cardImage).show();
        flipCard();
        $(".name").append(cardName).hide().slideDown();
        $(".description").append(cardDescription).hide().slideDown();

          console.log("first click " + buttonClick);

    } else if (calledOneTime === true && (buttonClick % 2 !== 0)) {
      flipCard();
      $(".back img").replaceWith(cardImage);
      $(".name").append(cardName).hide().slideDown();
      $(".description").append(cardDescription).hide().slideDown();
      console.log("clicked odd " + buttonClick);
    }
    else {
        $(".front").show();
        $(".card").flip(false);
        $(".name h2").slideUp();
        $(".description p").slideUp();
        console.log("clicked even- hide " + buttonClick);
    }
}

//rotate the card if true
function rotateCard() {
  var rotate = [true, false],
  cardRevDescript = "<p> <span class='reversed'>Reversed: </span>" + result.reverse + "</p>";

  rotate = (rotate[Math.floor(Math.random() * rotate.length)]);
  console.log(rotate);
  if (rotate === true && (buttonClick % 2 !== 0)) {
    $(".back img").addClass("rotate");
    $(".description").append(cardRevDescript).hide().slideDown();
  }
}


//show fate awaits when hover over image and arc text
$("div.front img").mouseover(function(event){
  event.stopPropagation();
  $("div.front p").hide().show().arctext({radius: 150, rotate: true}).toggleClass("fateButtonHover").hide().fadeIn(1000);

});

//hide the paragraph when mouseleaves the image

$("div.front").mouseleave(function(){
  $("div.front p").toggleClass("fateButtonHover").show().fadeOut(1000);
});



//when the button is clicked, run the buttonCount, pickCard, and displayImg function

$(".fateButton").click(function(){
  buttonCount();
  pickCard();
  displayImg();
  rotateCard();
});
});
