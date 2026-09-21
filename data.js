// Daily questions + trivia decks. Add your own freely.
const QS=["What's something I did recently that made you feel loved?","What tiny habit of mine would you miss if it vanished?","Where do you want us to be in three years?","What were you most worried about this week?","What memory of us do you replay?","What do you need more of from me lately?","What made you laugh today?","What have you never told me about your childhood?","When did you first know?","What small thing could I do tomorrow that would help?","What are you proudest of right now?","What fear are you carrying?","What smell reminds you of me?","What trip do you want us to take?","What do you think I underestimate about myself?","What's been heavy that you haven't said out loud?","What's your favourite ordinary day with me?","What song is us?","What do you want to get better at?","What did I get wrong recently that we never finished talking about?","What are you looking forward to?","What does a perfect Sunday look like?","How do you like to be comforted?","What's changed about you this year?","What should we stop doing?","What should I remind you of when you're low?","What's the kindest thing anyone's done for you?","What do you want our home to feel like?","What's a boundary you wish you were better at holding?","Which version of me do you like best?"];

const DECKS={
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
    {q:"Who are the two oldest, laziest detectives?",o:["Hitchcock and Scully","Boyle and Terry","Jake and Rosa","Gina and Amy"],a:0,x:"Inseparable, horizontal."}]}
};
