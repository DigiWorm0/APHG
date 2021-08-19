import EffectType from "./EffectType";
import EventTemplate from "./EventTemplate";

export function chooseRandomTemplate(db: EventTemplate[]): EventTemplate
{
    return db[Math.floor(Math.random() * db.length)];
}

export let START_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} grabs {medicine}, and runs", [EffectType.GainMedicine], 1, "a first-aid kit"),
    new EventTemplate("{p0} grabs {medicine}, and runs", [EffectType.GainMedicine], 1, "a jar of mayonaise"),
    new EventTemplate("{p0} grabs {medicine}, and runs", [EffectType.GainMedicine], 1, "a McDonalds happy meal"),
    new EventTemplate("{p0} grabs {medicine}, and runs", [EffectType.GainMedicine], 1, "a pickle jar"),
    new EventTemplate("{p0} grabs {medicine}, and runs", [EffectType.GainMedicine], 1, "a bottle of 5-hour energy"),
    new EventTemplate("{p0} grabs {medicine}, but they can't open it!", [], 1, "a pickle jar"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a mace"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a sword"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a shank"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a chainsaw"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a minecraft pickaxe"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a piñata"),
    new EventTemplate("{p0} grabs {weapon}, and runs", [EffectType.GainWeapon], 1, "a machete"),
    new EventTemplate("{p0} and {p1} fight for {medicine}. {p0} gives up and retreats", [EffectType.None, EffectType.GainMedicine], 2, "a bag"),
    new EventTemplate("{p0} and {p1} fight for {medicine}. {p1} gives up and retreats", [EffectType.GainMedicine], 2, "a bag"),
    new EventTemplate("{p0} back flips off the pedestal, instantly snapping their neck.\n{p1} laughs so hard they injure themselves", [EffectType.Kill, EffectType.Injure], 2),
    new EventTemplate("{p0} slaps {p1}'s ass then runs off", [], 2),
    new EventTemplate("{p0} finds {weapon}", [EffectType.GainWeapon], 1, "a bow"),
    new EventTemplate("{p0} finds {weapon}.\nUnfortunately, they have no clue how to use it", [], 1, "a bow"),
    new EventTemplate("{p0} chases {p1}, but they are just too fast", [], 2),
    new EventTemplate("{p0} chases {p1}, and kills them", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} was trampled to death in the cornucopia", [EffectType.Kill], 1),
];

export let NEUTRAL_EVENTS: EventTemplate[] = [
    new EventTemplate("&#127925 ...mining away... &#127925", [], 1),
    new EventTemplate("{p0} found an old pepsi can on the ground", [], 1),
    new EventTemplate("{p0} found an old coke can on the ground", [], 1),
    new EventTemplate("{p0} played some ominous background music", [], 1),
    new EventTemplate("{p0} found a book titled 'My Sex Life and Me'", [], 1),
    new EventTemplate("{p0} injured their throat singing 'Hello' by Adele", [EffectType.Injure], 1),
    new EventTemplate("{p0} injured their throat singing 'Bohemian Rhapsody' by Queen", [EffectType.Injure], 1),
    new EventTemplate("{p0} found a big dragon in the woods dancing to 'Moves like Jagger' by Maroon 5", [], 1),
    new EventTemplate("While wandering in the woods, Dora the Explorer gave {p0} {weapon}", [EffectType.GainWeapon], 1, "a shotgun"),
    new EventTemplate("While wandering in the woods, Spongebob gave {p0} {weapon}", [EffectType.GainWeapon], 1, "an AR-15"),
    new EventTemplate("{p0} fell into a random hole in the ground", [EffectType.Kill], 1),
    new EventTemplate("{p0} was abducted by a UFO", [EffectType.Kill], 1),
    new EventTemplate("{p0} practiced their jumping jacks", [], 1),
    new EventTemplate("{p0} and {p1} had an aggresive staring contest. {p1} lost.", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had an aggresive staring contest. {p0} lost.", [EffectType.Kill], 2),
    new EventTemplate("{p0} tackled {p1} to the ground, but spared their life", [EffectType.None, EffectType.Injure], 2),
    new EventTemplate("{p0} tackled {p1} to the ground and killed them", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had a staring contest. After several hours of intense staring, they agreed to join forces", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} answered to {p1}'s repeated bird calls. They both forced a team", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} found {medicine} hidden in a cave", [EffectType.GainMedicine], 1, "a 55-gallon drum of lube"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "The UmiCar from Team Umizoomi"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "The Magic School Bus"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "an M4 Sherman Tank"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "a Ford F-150"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "a Pontiac Aztek"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon}", [EffectType.GainWeapon], 1, "Santa's Sleigh"),
    new EventTemplate("{p0} found {weapon} hidden in a cave", [EffectType.GainWeapon], 1, "a bowling ball"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "a snake"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "a hedgehog"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "a platypus"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "the Power-Rangers"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "Batman"),
    new EventTemplate("{p0} finds {weapon} which they befriend", [EffectType.GainWeapon], 1, "The Telitubbies"),
    new EventTemplate("While hunting in the woords, {p0} found {weapon} in perfect condition", [EffectType.GainWeapon], 1, "a Boeing 747")
];

export let TEAM_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} and {p1} held hands for several hours", [], 2),
    new EventTemplate("{p0} watched the entirity of Toy Story 1, 2, 3, and 4 while {p1} did all the work", [], 2),
    new EventTemplate("{p0} and {p1} hunted the other players, but didn't find anyone", [], 2),
    new EventTemplate("{p0} backstabbed {p1} both physically and metaphorically", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} betrayed {p1}'s trust by stabbing them", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} hunted and killed {p2}", [EffectType.None, EffectType.None, EffectType.Kill], 3),
    new EventTemplate("{p0} and {p1} played some tic-tac-toe. {p1} lost.", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some tic-tac-toe. {p0} lost.", [EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some chess. {p1} lost.", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some chess. {p0} lost.", [EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some checkers. {p1} lost.", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some checkers. {p0} lost.", [EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} played some parcheesi. Neither of them knew how to play...", [], 2),
    new EventTemplate("{p0} insulted {p1}'s shoes. The insult was so bad it injured them both", [EffectType.Injure, EffectType.Injure], 2),
    new EventTemplate("{p0} insulted {p1}'s shoes. This physically hurt {p1}", [EffectType.None, EffectType.Injure], 2),
    new EventTemplate("{p0} insulted {p1}'s shoes. After some intense arguments, they decided to disband their team", [EffectType.DisbandTeam, EffectType.DisbandTeam], 2),
    new EventTemplate("{p0} and {p1} found some abandoned AR-15s on the ground", [EffectType.GainWeapon, EffectType.GainWeapon], 2),
    new EventTemplate("{p0} and {p1} found an abandoned first-aid kit on the ground", [EffectType.GainMedicine, EffectType.GainMedicine], 2),
    new EventTemplate("{p0} and {p1} found an abandoned McDonalds happy meal on the ground", [EffectType.GainMedicine, EffectType.GainMedicine], 2),
    new EventTemplate("{p0} and {p1} found an abandoned McDonalds happy meal on the ground...with the toys!", [EffectType.GainMedicine, EffectType.GainMedicine], 2),
];

export let INJURED_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} is too injured to do anything", [EffectType.None], 1),
    new EventTemplate("{p0}'s injuries naturally healed over time", [EffectType.Heal], 1)
];

export let HEALING_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} healed themselves using {medicine}", [EffectType.Heal], 1)
];

export let HOSTILE_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} hunted the other players, but didn't find anyone", [], 1),
    new EventTemplate("{p0} chased after {p1} with {weapon}, but {p1} was too fast!", [EffectType.None, EffectType.None], 2),
    new EventTemplate("{p0} hunted and killed {p1} with {weapon}", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} hunted and killed both {p1} and {p2} with {weapon}", [EffectType.None, EffectType.Kill, EffectType.Kill], 3),
    new EventTemplate("{p0} hunted and killed {p1}, {p2}, and {p3} with {weapon}", [EffectType.None, EffectType.Kill, EffectType.Kill, EffectType.Kill], 4)
];

export let TEST_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} had stolen all of {p1}'s answers. {p0} was shot for cheating", [EffectType.Kill], 2),
    new EventTemplate("{p0} did so well on their test, CollegeBoard injured them for cheating. ", [EffectType.Injure], 1),
    new EventTemplate("{p0} falsely accused {p1} for cheating. CollegBoard shot them on-site", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had an AP-Chem study group. They both failed...", [EffectType.Kill, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had an AP-Psych study group. They both passed with a 5!", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} put down C for every single answer...and they passed with a 5???", [], 1),
    new EventTemplate("{p0} passed with a 5 on their exam!", [], 1),
    new EventTemplate("{p0} passed with a 4 on their exam!", [], 1),
    new EventTemplate("{p0} passed with a 3 on their exam!", [], 1),
    new EventTemplate("{p0} failed with a 2 on their exam!", [EffectType.Kill], 1),
    new EventTemplate("{p0} failed with a 1 on their exam!", [EffectType.Kill], 1),
    new EventTemplate("Congrats, {p0} somehow managed to fail with a 0 on your exam...", [EffectType.Kill], 1),
    new EventTemplate("No matter how hard {p0} and {p1} studied, they both failed their exam", [EffectType.Kill, EffectType.Kill], 2),
];