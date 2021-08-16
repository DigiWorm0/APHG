import { EffectType } from "./EffectsType.js";
import { EventTemplate } from "./EventTemplate.js";

export function chooseRandomTemplate(db: EventTemplate[]): EventTemplate
{
    return db[Math.floor(Math.random() * db.length)];
}

export let START_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} grabs a first aid kit, and runs", [EffectType.GainMedicine], 1),
    new EventTemplate("{p0} grabs a mace, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a sword, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a shank, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a chainsaw, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a jar of mayonaise, and runs", [EffectType.GainMedicine], 1),
    new EventTemplate("{p0} grabs a McDonalds happy meal, and runs", [EffectType.GainMedicine], 1),
    new EventTemplate("{p0} grabs a pickle jar, and runs", [EffectType.GainMedicine], 1),
    new EventTemplate("{p0} grabs a pickle jar, but they can't open it!", [], 1),
    new EventTemplate("{p0} grabs a minecraft pickaxe, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} and {p1} fight for a bag. {p0} gives up and retreats", [EffectType.None, EffectType.GainWeapon], 2),
    new EventTemplate("{p0} and {p1} fight for a bag. {p0} gives up and retreats", [EffectType.None, EffectType.GainMedicine], 2),
    new EventTemplate("{p0} and {p1} fight for a bag. {p1} gives up and retreats", [EffectType.GainWeapon], 2),
    new EventTemplate("{p0} and {p1} fight for a bag. {p1} gives up and retreats", [EffectType.GainMedicine], 2),
    new EventTemplate("{p0} back flips off the pedestal, instantly snapping their neck.\n{p1} laughs so hard they injure themselves", [EffectType.Kill, EffectType.Injure], 2),
    new EventTemplate("{p0} slaps {p1}'s ass then runs off", [], 2),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver.\nUnfortunately, they have no clue how to use it", [], 1),
    new EventTemplate("{p0} chases {p1}, but they are just too fast", [], 2),
    new EventTemplate("{p0} chases {p1}, and kills them", [EffectType.None, EffectType.Kill], 2),
];

export let NEUTRAL_EVENTS: EventTemplate[] = [
    new EventTemplate("&#127925 ...mining away... &#127925", [], 1),
    new EventTemplate("{p0} fell into a random hole in the ground", [EffectType.Kill], 1),
    new EventTemplate("{p0} practiced their jumping jacks", [], 1),
    new EventTemplate("{p0} finds a snake which they befriend", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} finds a hedgehog which they befriend", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} finds a platypus which they befriend", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} and {p1} had an aggresive staring contest. {p1} lost.", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had an aggresive staring contest. {p0} lost.", [EffectType.Kill], 2),
    new EventTemplate("{p0} tackled {p1} to the ground, but spared their life", [EffectType.None, EffectType.Injure], 2),
    new EventTemplate("{p0} tackled {p1} to the ground and killed them", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} and {p1} had a staring contest. After several hours of intense staring, they agreed to join forces", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} answered to {p1}'s repeated bird calls. They both forced a team", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} and {p1} formed an AP-Lit study group", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} and {p1} formed an AP-Lang study group", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} and {p1} formed an AP-Physics study group", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} and {p1} formed an AP-Calc study group", [EffectType.JoinTeam, EffectType.JoinTeam], 2),
    new EventTemplate("{p0} and {p1} formed an AP-Chem study group", [EffectType.JoinTeam, EffectType.JoinTeam], 2)
];

export let TEAM_EVENTS2: EventTemplate[] = [
    new EventTemplate("{p0} and {p1} held hands for several hours", [], 2),
    new EventTemplate("{p0} and {p1} hunted the other players, but didn't find anyone", [], 2),
    new EventTemplate("No matter how hard {p0} and {p1} studied, they both failed their exam", [EffectType.Kill, EffectType.Kill], 2),
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

export let HOSTILE_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} hunted the other players, but didn't find anyone", [], 1),
    new EventTemplate("{p0} hunted and killed {p1}", [EffectType.None, EffectType.Kill], 2),
    new EventTemplate("{p0} hunted and killed both {p1} and {p2}", [EffectType.None, EffectType.Kill, EffectType.Kill], 3),
    new EventTemplate("{p0} hunted and killed {p1}, {p2}, and {p3}. The monster!", [EffectType.None, EffectType.Kill, EffectType.Kill, EffectType.Kill], 4)
];