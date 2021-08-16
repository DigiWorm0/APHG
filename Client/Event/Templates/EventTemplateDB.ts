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
    new EventTemplate("{p0} flees from the cornucopia", [], 1),
    new EventTemplate("{p0} flees from the cornucopia", [], 1),
    new EventTemplate("{p0} flees from the cornucopia", [], 1),
    new EventTemplate("{p0} flees from the cornucopia", [], 1),
    new EventTemplate("{p0} grabs a first aid kit, and runs", [EffectType.GainMedicine], 1),
    new EventTemplate("{p0} grabs a mace, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a sword, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a shank, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a chainsaw, and runs", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} grabs a jar of mayonaise, and runs", [EffectType.GainFood], 1),
    new EventTemplate("{p0} grabs a McDonalds happy meal, and runs", [EffectType.GainFood], 1),
    new EventTemplate("{p0} grabs a minecraft pickaxe, and runs", [EffectType.GainTool], 1),
    new EventTemplate("{p0} back flips off the pedestal, instantly snapping their neck.\n{p1} laughs so hard they injure themselves", [EffectType.Kill, EffectType.Injure], 2),
    new EventTemplate("{p0} slaps {p1}'s ass then runs off", [], 2),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver", [EffectType.GainWeapon], 1),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver.\nUnfortunately, they have no clue how to use it", [], 1),
    new EventTemplate("{p0} chases {p1}, but they are just too fast", [], 2),
    new EventTemplate("{p0} chases {p1}, then kills them", [EffectType.None, EffectType.Kill], 2),
]