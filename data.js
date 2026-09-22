// Content: daily questions, deadpan forecasts, trivia decks.
const QS=["What's something I did recently that made you feel loved?","What tiny habit of mine would you miss if it vanished?","Where do you want us to be in three years?","What were you most worried about this week?","What memory of us do you replay?","What do you need more of from me lately?","What made you laugh today?","What have you never told me about your childhood?","When did you first know?","What small thing could I do tomorrow that would help?","What are you proudest of right now?","What fear are you carrying?","What smell reminds you of me?","What trip do you want us to take?","What do you think I underestimate about myself?","What's been heavy that you haven't said out loud?","What's your favourite ordinary day with me?","What song is us?","What do you want to get better at?","What did I get wrong recently that we never finished talking about?","What are you looking forward to?","What does a perfect Sunday look like?","How do you like to be comforted?","What's changed about you this year?","What should we stop doing?","What should I remind you of when you're low?","What's the kindest thing anyone's done for you?","What do you want our home to feel like?","What's a boundary you wish you were better at holding?","Which version of me do you like best?"];

// Deadpan, Co-Star-style daily lines for the two of you. Full sentences, no mad-libs.
const FORECASTS=[
"Today rewards whoever apologises first. It probably isn't going to be you.",
"One of you will say 'I'm fine' and mean the opposite. Ask twice.",
"A small errand becomes a referendum on the relationship. Let it not.",
"You are both extremely correct today, which is its own kind of problem.",
"The dishes are not about the dishes.",
"Say the nice thing you're thinking before you talk yourself out of it.",
"Today favours naps over conversations. This is fine, occasionally.",
"Someone is going to bring up something from 2019. Brace accordingly.",
"You will both pretend to remember the plan. Neither of you does.",
"A minor disagreement about restaurants reveals a major disagreement about everything.",
"Today is a good day to be slightly less efficient and slightly more devoted.",
"One of you needs quiet. The other needs to talk about the quiet. Negotiate.",
"You will overthink a text message that took four seconds to write.",
"Today, do the thing you keep saying you'll get around to. For them.",
"A compliment lands wrong and no one knows why. Try again, softer.",
"You're both right, annoyingly, from different angles.",
"Today, whoever falls asleep first wins. Everyone loses, but someone wins.",
"Something small — a mug left out, a door left open — will feel enormous. It isn't.",
"You will both claim to be 'not hungry' and then eat everything.",
"Today asks you to be interruptible. Put the phone down first.",
"An old joke resurfaces and it's still, infuriatingly, funny.",
"You will each privately believe you do more chores. You are both wrong.",
"Today favours long drives with no destination and worse music taste than usual.",
"Someone needs to be told they're doing better than they think.",
"A plan changes last-minute and reveals who copes and who catastrophizes.",
"You will both reach for the same side of the bed tonight, out of habit.",
"Today, resist the urge to win the argument. Try just ending it instead.",
"One small kindness today will be remembered longer than either of you expects.",
"You're allowed to be annoyed and still be in love. Both, today.",
"Today rewards whoever puts their phone face-down first.",
"Venus is unbothered today. Try to match her energy.",
"Someone is playing Persephone — gone half the day, explaining nothing.",
"Hermes energy: say the message directly and skip the messenger.",
"Whoever is doing the emotional labour today deserves to be relieved of it, Shakti-style.",
"You're both a little bit Ares today. Choose your battles like it matters, because it does.",
"Krishna never explained himself either. You don't have to — but it might help.",
"A Pyramus-and-Thisbe day: say it plainly, skip the wall between you.",
"Saturn energy: slow down, nothing needs deciding tonight.",
"Today rewards whoever channels Hestia and just quietly tends the house.",
"Whoever is angriest today is probably also right about something. Durga usually is.",
"Like Savitri, today asks one of you to simply refuse to let something go.",
"Odysseus took ten years to get home. You have, generously, until dinner.",
"A little Aphrodite chaos today — vanity forgiven, so long as it's shared."
];

// Mythic pairings — deterministic per couple, drawn from Greek, Roman, and Hindu myth.
const MYTH_PAIRS=[
{n:"Eros & Psyche",t:"Greek — love that survived being looked at too closely."},
{n:"Hades & Persephone",t:"Greek — half the year apart makes the other half count."},
{n:"Zeus & Hera",t:"Greek — chaos and order, married anyway."},
{n:"Odysseus & Penelope",t:"Greek — distance tested, patience won."},
{n:"Perseus & Andromeda",t:"Greek — rescued each other, in different orders."},
{n:"Orpheus & Eurydice",t:"Greek — don't look back to check they're still following."},
{n:"Mars & Venus",t:"Roman — war and beauty, oddly compatible."},
{n:"Aeneas & Dido",t:"Roman — a warning about leaving without saying why."},
{n:"Pyramus & Thisbe",t:"Roman — talked through walls before anyone had phones."},
{n:"Cupid & Psyche",t:"Roman — trust broke it, trust fixed it."},
{n:"Shiva & Shakti",t:"Hindu — stillness and energy; neither moves without the other."},
{n:"Radha & Krishna",t:"Hindu — devotion that never needed a title."},
{n:"Rama & Sita",t:"Hindu — loyalty tested across kingdoms."},
{n:"Krishna & Rukmini",t:"Hindu — she chose him before he arrived to be chosen."},
{n:"Nala & Damayanti",t:"Hindu — lost each other, found their way back anyway."},
{n:"Savitri & Satyavan",t:"Hindu — one of them argued with Death himself, and won."}
];

const MOODS=[{k:"joy",l:"Joyful"},{k:"content",l:"Content"},{k:"tired",l:"Tired"},{k:"anxious",l:"Anxious"},{k:"sad",l:"Sad"},{k:"angry",l:"Angry"}];

const DECKS={
  hoteltransylvania:{n:"Hotel T",d:"a monster vacation",q:[
    {q: "Who runs Hotel Transylvania?", o: ["Dracula", "Frankenstein", "Van Helsing", "Murray the Mummy"], a: 0, x: "Dracula built it as a monster-only retreat for his daughter."},
    {q: "What is Dracula's daughter's name?", o: ["Mavis", "Wanda", "Eunice", "Wendy"], a: 0, x: "Mavis Dracula, the film's heart."},
    {q: "What is the human backpacker who stumbles into the hotel called?", o: ["Jonathan", "Johnny", "Josh", "Jimmy"], a: 1, x: "Johnny, whose visit unravels the whole plot."},
    {q: "What kind of monster is Frank, one of Dracula's friends?", o: ["Frankenstein's monster", "A werewolf", "A mummy", "An invisible man"], a: 0, x: "Frank, married to Eunice."},
    {q: "What does Dracula turn into to fly?", o: ["A bat", "A wolf", "A cloud of mist", "A raven"], a: 0, x: "Classic Dracula bat transformation."},
    {q: "Who is the werewolf dad overwhelmed by his huge litter of kids?", o: ["Wayne", "Murray", "Griffin", "Blobby"], a: 0, x: "Wayne, married to Wanda."},
    {q: "In the second film, what turns out to be slow to develop in Dennis, Mavis and Johnny's son?", o: ["His fangs", "His flying", "His howl", "His invisibility"], a: 0, x: "His fangs come in late, which drives the plot."},
    {q: "What kind of vessel is the setting for the third film?", o: ["A monster cruise ship", "A haunted train", "A space station", "A submarine"], a: 0, x: "A monster cruise where Dracula falls for the captain."}]},
  us:{n:"Us",d:"talk, don't score",q:[
    {q:"Who is more likely to text first after a fight?",o:["Me","Them","Dead tie","Neither, tragically"],a:2,x:"No right answer — argue about it."},
    {q:"Whose taste in films do you secretly trust more?",o:["Mine","Theirs","Depends on genre","Neither"],a:2,x:"The honest answer is usually 'depends'."},
    {q:"Better date night?",o:["Cooking at home","Going out","A long drive","Doing nothing together"],a:3,x:"Doing nothing together is underrated."},
    {q:"Who apologises faster?",o:["Me","Them","We stall equally","We never apologise, we just make tea"],a:3,x:"Tea is a valid apology."},
    {q:"Which do you want more of this month?",o:["Time alone together","Adventure","Rest","Deep talks"],a:0,x:"Say your real answer out loud."},
    {q:"Whose family group chat is worse?",o:["Mine","Theirs","Equally cursed","We've both muted them"],a:2,x:"It's always equally cursed."},
    {q:"Who would survive longer in a horror film?",o:["Me","Them","We die together, romantically","Neither, immediately"],a:2,x:"Correct and slightly concerning."},
    {q:"Best sound in the world?",o:["Their laugh","Rain","Coffee machine","Silence at 7am"],a:0,x:"Obviously."}]},
  movies:{n:"Movies",d:"general film trivia",q:[
    {q:"Which film won Best Picture in 2020, the first non-English winner?",o:["Roma","Parasite","1917","Minari"],a:1,x:"Bong Joon-ho's Parasite made history."},
    {q:"Who directed Jaws?",o:["George Lucas","Steven Spielberg","Ridley Scott","Brian De Palma"],a:1,x:"Spielberg, at 27, with a broken shark."},
    {q:"In The Godfather, what's left in the bed as a warning?",o:["A horse's head","A dead fish","A pistol","A cigar"],a:0,x:"The producer wakes up to it."},
    {q:"What colour is the pill Neo takes in The Matrix?",o:["Blue","Red","Green","White"],a:1,x:"Red pill, stays in Wonderland."},
    {q:"Which actor plays both leads in The Parent Trap (1998)?",o:["Hilary Duff","Lindsay Lohan","Amanda Bynes","Kirsten Dunst"],a:1,x:"Lohan, twice."},
    {q:"Spirited Away came from which studio?",o:["Ghibli","Madhouse","Gainax","Toei"],a:0,x:"Miyazaki's Oscar winner."},
    {q:"What's the highest-grossing film of all time (unadjusted)?",o:["Titanic","Avengers: Endgame","Avatar","Star Wars: TFA"],a:2,x:"Avatar, twice, thanks to re-releases."},
    {q:"In Casablanca, what does Rick famously NOT say?",o:["Here's looking at you, kid","Play it again, Sam","Round up the usual suspects","We'll always have Paris"],a:1,x:"The most famous misquote in film."},
    {q:"Who composed the score for Star Wars?",o:["Hans Zimmer","John Williams","Ennio Morricone","Danny Elfman"],a:1,x:"Williams, obviously."},
    {q:"Which film features a hotel called The Grand Budapest?",o:["Moonrise Kingdom","The Grand Budapest Hotel","Rushmore","The Darjeeling Limited"],a:1,x:"Wes Anderson at his most symmetrical."}]},
  bear:{n:"The Bear",d:"yes chef",q:[
    {q:"What's the name of the restaurant at the start of the series?",o:["The Bear","The Beef","Ever","Mr Beef"],a:1,x:"The Original Beef of Chicagoland."},
    {q:"Who plays Carmy?",o:["Jeremy Allen White","Paul Mescal","Barry Keoghan","Nicholas Braun"],a:0,x:"White won an Emmy for it."},
    {q:"What word does the kitchen shout constantly?",o:["Behind","Corner","Heard","All of these"],a:3,x:"Kitchen language, used relentlessly."},
    {q:"What is Sydney's surname?",o:["Adamu","Berzatto","Marrero","Fak"],a:0,x:"Sydney Adamu, played by Ayo Edebiri."},
    {q:"Which city is the show set in?",o:["Chicago","Detroit","Philadelphia","New York"],a:0,x:"Deeply, specifically Chicago."},
    {q:"Who is Carmy's late brother?",o:["Michael","Richie","Neil","Marcus"],a:0,x:"Mikey, whose death starts everything."},
    {q:"What dish causes chaos in the famous one-take episode?",o:["Risotto","Spaghetti","Pre-orders of takeout","Doughnuts"],a:2,x:"Season 1's 'Review' — the online order flood."},
    {q:"What's Richie's role by season 2?",o:["Sous chef","Front of house","Pastry","Dishwasher"],a:1,x:"After his stage at a fine-dining restaurant."}]},
  b99:{n:"Brooklyn 99",d:"noice",q:[
    {q:"What's Jake Peralta's catchphrase for something great?",o:["Noice","Cool cool cool","Title of your sex tape","All of these"],a:3,x:"All canon."},
    {q:"Who is the captain of the 99?",o:["Raymond Holt","Terry Jeffords","Wuntch","Hitchcock"],a:0,x:"Captain Raymond Holt."},
    {q:"What is Terry famously fond of?",o:["Yogurt","Pizza","Cigars","Marathons"],a:0,x:"Terry loves yogurt."},
    {q:"What's the name of Holt's dog?",o:["Cheddar","Gouda","Brie","Colby"],a:0,x:"Cheddar, the corgi."},
    {q:"Amy Santiago's greatest love, besides Jake?",o:["Binders","Wine","Hiking","Karaoke"],a:0,x:"Binders and organisation."},
    {q:"What's the annual heist held on?",o:["Halloween","Christmas","New Year","Thanksgiving"],a:0,x:"The Halloween Heist."},
    {q:"Rosa Diaz's most guarded secret early on?",o:["Everything","Her age","Her address","Her first name"],a:0,x:"She guards literally all of it."},
    {q:"Who are the two oldest, laziest detectives?",o:["Hitchcock and Scully","Boyle and Terry","Jake and Rosa","Gina and Amy"],a:0,x:"Inseparable, horizontal."}]},
  myths:{n:"Myths",d:"Greek, Roman, Hindu",q:[
    {q:"In Greek myth, who was condemned to push a boulder for eternity?",o:["Sisyphus","Tantalus","Prometheus","Atlas"],a:0,x:"Sisyphus, forever almost finished."},
    {q:"Who is the Roman god of war?",o:["Mars","Neptune","Vulcan","Jupiter"],a:0,x:"Mars, counterpart to Greek Ares."},
    {q:"Shakti is another form of which goddess, Shiva's consort?",o:["Parvati","Lakshmi","Saraswati","Ganga"],a:0,x:"Parvati, whose fierce aspect is Shakti."},
    {q:"Who carried the sky on his shoulders in Greek myth?",o:["Atlas","Hercules","Zeus","Cronus"],a:0,x:"Atlas, as punishment for the Titan war."},
    {q:"Who is the Roman equivalent of Aphrodite?",o:["Venus","Juno","Minerva","Diana"],a:0,x:"Venus, goddess of love and beauty."},
    {q:"Who did Orpheus try to rescue from the underworld?",o:["Eurydice","Persephone","Psyche","Daphne"],a:0,x:"His wife Eurydice — he looked back too soon."},
    {q:"In the Ramayana, who is Rama's devoted wife?",o:["Sita","Radha","Draupadi","Savitri"],a:0,x:"Sita, whose loyalty is tested across the epic."},
    {q:"Which Roman god is the counterpart of Greek Hermes?",o:["Mercury","Apollo","Vulcan","Bacchus"],a:0,x:"Mercury, messenger of the gods."}]}
};

// Real moon phase flavor lines, one per phase (New, Waxing Crescent, First Quarter, Waxing Gibbous, Full, Waning Gibbous, Last Quarter, Waning Crescent).
const MOON_LINES=[
"Good night for a decision no one else needs to know about yet.",
"Momentum is arriving in small, annoying increments.",
"Tension is doing something useful today, for once.",
"Nearly there. Try not to ruin it early.",
"Everyone is slightly unhinged. You are not exempt.",
"Post-mortem energy: figure out what actually happened.",
"A good day to let something go without a speech.",
"Rest. The sky is basically empty too."
];

// Sun signs — standard tropical dates, inclusive. m/d pairs mark each sign's start.
const ZODIAC=[
{sign:"Capricorn",sym:"♑︎",elem:"earth",from:[12,22],to:[1,19]},
{sign:"Aquarius",sym:"♒︎",elem:"air",from:[1,20],to:[2,18]},
{sign:"Pisces",sym:"♓︎",elem:"water",from:[2,19],to:[3,20]},
{sign:"Aries",sym:"♈︎",elem:"fire",from:[3,21],to:[4,19]},
{sign:"Taurus",sym:"♉︎",elem:"earth",from:[4,20],to:[5,20]},
{sign:"Gemini",sym:"♊︎",elem:"air",from:[5,21],to:[6,20]},
{sign:"Cancer",sym:"♋︎",elem:"water",from:[6,21],to:[7,22]},
{sign:"Leo",sym:"♌︎",elem:"fire",from:[7,23],to:[8,22]},
{sign:"Virgo",sym:"♍︎",elem:"earth",from:[8,23],to:[9,22]},
{sign:"Libra",sym:"♎︎",elem:"air",from:[9,23],to:[10,22]},
{sign:"Scorpio",sym:"♏︎",elem:"water",from:[10,23],to:[11,21]},
{sign:"Sagittarius",sym:"♐︎",elem:"fire",from:[11,22],to:[12,21]}
];

// Elemental compatibility, one line per unordered element pair.
const ELEMENT_LINES={
"fire-fire":"Two open flames, one room. Someone's getting burned, probably you both.",
"earth-earth":"Extremely stable. Possibly too stable — where's the spontaneity, either of you.",
"air-air":"All talk, in the best way. Somebody still has to do the dishes.",
"water-water":"Feelings on feelings. Bring a towel.",
"fire-earth":"Combustion meets bedrock — one of you sets the pace, the other holds it steady.",
"earth-fire":"Combustion meets bedrock — one of you sets the pace, the other holds it steady.",
"fire-air":"Fire needs air to survive. Try not to think about that too literally.",
"air-fire":"Fire needs air to survive. Try not to think about that too literally.",
"fire-water":"Steam or stalemate. There is no in-between with you two.",
"water-fire":"Steam or stalemate. There is no in-between with you two.",
"earth-air":"Earth wants a five-year plan. Air wants to leave in ten minutes. Compromise: a nice weekend trip.",
"air-earth":"Earth wants a five-year plan. Air wants to leave in ten minutes. Compromise: a nice weekend trip.",
"earth-water":"Earth holds the shape, water fills it in. Weirdly, it works.",
"water-earth":"Earth holds the shape, water fills it in. Weirdly, it works.",
"air-water":"Air stirs it up, water carries it somewhere. Try to agree on where.",
"water-air":"Air stirs it up, water carries it somewhere. Try to agree on where."
};
