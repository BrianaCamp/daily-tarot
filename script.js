$(document).ready(function(){


//have an array of objects, the objects will be the images and descriptions
var arrayOfCards = [
  {
    name : "The Chariot",
    img : "images/tarot-chariot.jpg",
    description: "Succour, providence also war, triumph, presumption, venge­ance, trouble. Reversed: Riot, quarrel, dispute, litigation, defeat.",
    category : "major"
  },
  {
    name : "Ace of Cups",
    img  : "images/tarot-cups-01.jpg",
    description : "The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana. Divinatory Meanings: House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof. Reversed: House of the false heart, mutation, instability, revolution.",
    category : "cups"
  },
  {
    name : "Two of Cups",
    img : "images/tarot-cups-02.jpg",
    description : "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place. Divinatory Meanings: Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and - as a suggestion apart from all offices of divination - that desire which is not in Nature, but by which Nature is sanctified.",
    category : "cups"

  },
  {
    name : "Three of Cups",
    img : "images/tarot-cups-03.jpg",
    description : "Maidens in a garden-ground with cups uplifted, as if pledging one another. Divinatory Meanings: The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, ful­fil­ment, solace, healing, Reversed: Expe­dition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.",
    category : "cups"

  },
  {
    name : "Four of Cups",
    img : "images/tarot-cups-04.jpg",
    description : "A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment. Divinatory Meanings: Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure. Reversed: Novelty, presage, new instruction, new relations.",
    category : "cups"

  },
  {
    name : "Five of Cups",
    img : "images/tarot-cups-05.jpg",
    description : "A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, trans­mission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration. Reversed: News, alliances, affinity, consanguinity, ancestry, return, false projects.",
    category : "cups"

  },
  {
    name : "Six of Cups",
    img : "images/tarot-cups-06.jpg",
    description : "Children in an old garden, their cups filled with flowers. Divinatory Meanings: A card of the past and of memories, looking back, as - for example - on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowl­edge, new environment, and then the children are disporting in an unfamiliar precinct. Reversed: The future, renewal, that which will come to pass presently.",
    category : "cups"

  },
  {
    name : "Seven of Cups",
    img : "images/tarot-cups-07.jpg",
    description : "Strange chalices of vision, but the images are more especially those of the fantastic spirit. Divinatory Meanings: Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested. Reversed: Desire, will, determination, project.",
    category : "cups"

  },
  {
    name : "Eight of Cups",
    img : "images/tarot-cups-08.jpg",
    description : "A man of dejected aspect is deserting the cups of his felicity, enterprise, under­taking or previous concern. Divinatory Meanings: The card speaks for itself on the surface, but other readings are entirely antithetical - giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence - either for good or evil. Reversed: Great joy, happiness, feasting.",
    category : "cups"

  },
  {
    name : "Nine of Cups",
    img : "images/tarot-cups-09.jpg",
    description : "A goodly personage has feasted to his heart's content, and abundant refresh­ment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects. Divinatory Meanings: Concord, contentment, physical bien-etre; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made. Reversed: Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
    category : "cups"

  },
  {
    name : "Ten of Cups",
    img : "images/tarot-cups-10.jpg",
    description : "Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond. Divinatory Meanings: Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent. Reversed: Repose of the false heart, indignation, violence.",
    category : "cups"

  },
  {
    name : "Page of Cups",
    img : "images/tarot-cups-11.jpg",
    description : "A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form. Divinatory Meanings: Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, medi­tation; also these things directed to business. Reversed: Taste, inclination, attachment, seduction, deception, artifice.",
    category : "cups"

  },
  {
    name : "Knight of Cups",
    img : "images/tarot-cups-12.jpg",
    description : "Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision. Divinatory Meanings: Arrival, approach - sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement. Reversed: Trickery, artifice, subtlety, swindling, duplicity, fraud.",
    category : "cups"

  },
  {
    name : "Queen of Cups",
    img : "images/tarot-cups-13.jpg",
    description : "Beautiful, fair, dreamy - as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream. Divinatory Meanings: Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother. Reversed: The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.",
    category : "cups"

  },
  {
    name : "King of Cups",
    img : "images/tarot-cups-14.jpg",
    description : "He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards. Divinatory Meanings: Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence. Reversed: Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.",
    category : "cups"

  },
  {
    name : "Death",
    img : "images/tarot-death.jpg",
    description : "End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many con­trarieties; for a maid, failure of marriage projects. Reversed: Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
    category : "major"

  },
  {
    name : "The Devil",
    img : "images/tarot-devil.jpg",
    description : "Ravage, violence, vehemence, extra­ordinary efforts, force, fatality; that which is predestined but is not for this reason evil. Reversed: Evil fatality, weakness, pettiness, blindness.",
    category : "major"

  },
  {
    name : "The Emperor",
    img : "images/tarot-emperor.jpg",
    description : "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will. Reversed: Bene­volence, compassion, cre­dit; also con­fusion to enemies, obstruction, immaturity.",
    category : "major"

  },
  {
    name : "The Empress",
    img : "images/tarot-empress.jpg",
    description : "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance. Reversed: Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
    category : "major"

  },
  {
    name : "The Fool",
    img : "images/tarot-fool.jpg",
    description : "Folly, mania, extra­vagance, intoxication, delirium, frenzy, bewrayment. Reversed: Negligence, absence, distribution, care­lessness, apathy, nullity, vanity.",
    category : "major"

  },
  {
    name : "The Hanged Man",
    img : "images/tarot-hangedman.jpg",
    description : "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy. Reversed: Selfishness, the crowd, body politic.",
    category : "major"

  },
  {
    name : "The Hermit",
    img : "images/tarot-hermit.jpg",
    description : "Prudence, circum­spection; also and especially treason, dissimulation, roguery, corruption. Reversed: Concealment, dis­guise, policy, fear, unreasoned caution.",
    category : "major"

  },
  {
    name : "The Hierophant",
    img : "images/tarot-hierophant.jpg",
    description : "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse. Reversed: Society, good under­standing, concord, over­kindness, weakness.",
    category : "major"

  },
  {
    name : "The High Priestess",
    img : "images/tarot-highpriestess.jpg",
    description : "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wis­dom, science. Reversed: Passion, moral or physical ardour, conceit, surface knowl­edge.",
    category : "major"

  },
  {
    name : "Judgement",
    img : "images/tarot-judgement.jpg",
    description : "Change of position, renewal, outcome. Another account specifies total loss though lawsuit. Reversed: Weakness, pusillanimity, simplicity; also delibe­ration, decision, sentence.",
    category : "major"

  },
  {
    name : "Justice",
    img : "images/tarot-justice.jpg",
    description : "Equity, rightness, probity, executive; triumph of the deserving side in law. Reversed: Law in all its depart­ments, legal complications, bigotry, bias, excessive severity.",
    category : "major"

  },
  {
    name : "The Lovers",
    img : "images/tarot-lovers.jpg",
    description : "Attraction, love, beauty, trials overcome. Reversed: Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
    category : "major"

  },
  {
    name : "The Magician",
    img : "images/tarot-magician.jpg",
    description : "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.",
    category : "major"

  },
  {
    name : "The Moon",
    img : "images/tarot-moon.jpg",
    description : "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error. Reversed: Instability, inconstancy, silence, lesser degrees of deception and error.",
    category : "major"

  },
  {
    name : "Ace of Pentacles",
    img : "images/tarot-pentacles-01.jpg",
    description : "A hand - issuing, as usual, from a cloud - holds up a pentacle. Divinatory Meanings: Perfect contentment, felicity, ecstasy; also speedy intelligence; gold. Reversed: The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.",
    category : "pentacles"

  },
  {
    name : "Two of Pentacles",
    img : "images/tarot-pentacles-02.jpg",
    description : "A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed. Divinatory Meanings: On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agi­tation, trouble, embroilment. Reversed: Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.",
    category : "pentacles"

  },
  {
    name : "Three of Pentacles",
    img : "images/tarot-pentacles-03.jpg",
    description : "A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest. Divinatory Meanings: Metier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory. Reversed: Mediocrity, in work and other­wise, puerility, pettiness, weakness.",
    category : "pentacles"

  },
  {
    name : "Four of Pentacles",
    img : "images/tarot-pentacles-04.jpg",
    description : "A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has. Divinatory Meanings: The surety of possessions, cleaving to that which one has, gift, legacy, inheritance. Reversed: Suspense, delay, opposition.",
    category : "pentacles"

  },
  {
    name : "Five of Pentacles",
    img : "images/tarot-pentacles-05.jpg",
    description : "Two mendicants in a snow-storm pass a lighted casement. Divinatory Meanings: The card foretells material trouble above all, whether in the form illustrated - that is, destitution - or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alter­natives cannot be harmonized. Reversed: Disorder, chaos, ruin, discord, profligacy.",
    category : "pentacles"

  },
  {
    name : "Six of Pentacles",
    img : "images/tarot-pentacles-06.jpg",
    description : "A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart. Divinatory Meanings: Presents, gifts, grati­fication another account says attention, vigilance now is the accepted time, present prosperity, etc. Reversed: Desire, cupidity, envy, jealousy, illusion.",
    category : "pentacles"

  },
  {
    name : "Seven of Pentacles",
    img : "images/tarot-pentacles-07.jpg",
    description : "A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there. Divinatory Meanings: These are exceedingly contra­dictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels - and another inno­cence, ingenuity, purgation. Reversed: Cause for anxiety regarding money which it may be proposed to lend.",
    category : "pentacles"

  },
  {
    name : "Eight of Pentacles",
    img : "images/tarot-pentacles-08.jpg",
    description : "An artist in stone at his work, which he exhibits in the form of trophies. Divi­natory Meanings: Work, employ­ment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage. Reversed: Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.",
    category : "pentacles"

  },
  {
    name : "Nine of Pentacles",
    img : "images/tarot-pentacles-09.jpg",
    description : "A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being. Divinatory Meanings: Prudence, safety, success, accomplishment, certi­tude, discernment. Reversed: Roguery, deception, voided project, bad faith.",
    category : "pentacles"

  },
  {
    name : "Ten of Pentacles",
    img : "images/tarot-pentacles-10.jpg",
    description : "A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child's hand is on one of them. Divinatory Meanings: Gain, riches; family matters, archives, extrac­tion, the abode of a family. Reversed: Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.",
    category : "pentacles"

  },
  {
    name : "Page of Pentacles",
    img : "images/tarot-pentacles-11.jpg",
    description : "A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him. Divinatory Meanings: Application, study, scholar­ship, reflection another reading says news, messages and the bringer thereof; also rule, management. Reversed: Prodigality, dissipation, liberality, luxury; unfavourable news.",
    category : "pentacles"

  },
  {
    name : "Knight of Pentacles",
    img : "images/tarot-pentacles-12.jpg",
    description : "He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein. Divinatory Meanings: Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane. Reversed: inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.",
    category : "pentacles"

  },
  {
    name : "Queen of Pentacles",
    img : "images/tarot-pentacles-13.jpg",
    description : "The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein. Divinatory Meanings: Opulence, generosity, magnificence, security, liberty. Reversed: Evil, suspicion, suspense, fear, mistrust.",
    category : "pentacles"

  },
  {
    name : "King of Pentacles",
    img : "images/tarot-pentacles-14.jpg",
    description : "The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the corre­spondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money. Divinatory Meanings: Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths. Reversed: Vice, weakness, ugliness, perversity, corruption, peril.",
    category : "pentacles"

  },
  {
    name : "The Star",
    img : "images/tarot-star.jpg",
    description : "Loss, theft, privation, abandonment; another reading says-hope and bright prospects, Reversed: Arro­gance, haught­iness, impotence.",
    category : "major"

  },
  {
    name : "Strength",
    img : "images/tarot-strength.jpg",
    description : "Power, energy, action, courage, magna­nimity; also complete success and honours. Reversed: Des­potism, abuse if power, weakness, discord, sometimes even disgrace.",
    category : "major"

  },
  {
    name : "The Sun",
    img : "images/tarot-sun.jpg",
    description : "Material happiness, for­tunate marriage, contentment. Reversed: The same in a lesser sense.",
    category : "major"

  },
  {
    name : "Ace of Swords",
    img : "images/tarot-swords-01.jpg",
    description : "A hand issues from a cloud, grasping as word, the point of which is encircled by a crown. Divinatory Meanings: Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling. Reversed: The same, but the results are disastrous; another account says - conception, child­birth, augmentation, multiplicity.",
    category : "swords"

  },
  {
    name : "Two of Swords",
    img : "images/tarot-swords-02.jpg",
    description : "A hoodwinked female figure balances two swords upon her shoulders. Divinatory Meanings: Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs. Reversed: Imposture, falsehood, duplicity, disloyalty.",
    category : "swords"

  },
  {
    name : "Three of Swords",
    img : "images/tarot-swords-03.jpg",
    description : "Three swords piercing a heart; cloud and rain behind. Divinatory Meanings: Re­moval, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration. Reversed: Mental alienation, error, loss, distraction, disorder, confusion.",
    category : "swords"

  },
  {
    name : "Four of Swords",
    img : "images/tarot-swords-04.jpg",
    description : "The effigy of a knight in the attitude of prayer, at full length upon his tomb. Divinatory Meanings: Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design. Reversed: Wise admini­stration, circumspection, economy, avarice, precaution, testament.",
    category : "swords"

  },
  {
    name : "Five of Swords",
    img : "images/tarot-swords-05.jpg",
    description : "A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field. Divinatory Meanings: Degra­dation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these. Reversed: The same; burial and obsequies.",
    category : "swords"

  },
  {
    name : "Six of Swords",
    img : "images/tarot-swords-06.jpg",
    description : "A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength. Divinatory Mea­nings: journey by water, route, way, en­voy, commissionary, expedient. Reversed: Declaration, confession, publicity; one account says that it is a proposal of love.",
    category : "swords"

  },
  {
    name : "Seven of Swords",
    img : "images/tarot-swords-07.jpg",
    description : "A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand. Divinatory Meanings: Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other. Reversed: Good advice, counsel, instruc­tion, slander, babbling.",
    category : "swords"

  }

  ];


var calledOneTime = false;
var buttonClick = 0;
var result;


function buttonCount(){
buttonClick = buttonClick + 1;
    console.log(buttonClick);
}

//randomize the card
function pickCard() {
  result = (arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)]);
  console.log(result.img);


}

//display the random card and hide it by every click whether even or odd
function displayImg() {
  if(calledOneTime === false || !(buttonClick % 2 === 0)) {
        calledOneTime = true;
        $(".default").append("<img src=" + result.img + ">").hide().fadeIn(2000);
        $(".name").append("<p>" + result.name + "</p>");
        $(".description").append("<p>" + result.description + "</p>");
        console.log("clicked odd" + buttonClick);
    }else {
        $(".default img").fadeOut();
        $(".name p").fadeOut();
        $(".description p").fadeOut();
        console.log("clicked even- hide" + buttonClick);
    }

}

//when the button is clicked, run the buttonCount, pickCard, and displayImg function

$("button").click(function(){
  buttonCount();
  pickCard();
  displayImg();

});



});
