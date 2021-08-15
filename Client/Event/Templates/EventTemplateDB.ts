import { EffectType } from "./EffectsType.js";
import { EventTemplate } from "./EventTemplate.js";

export function chooseRandomTemplate(db: EventTemplate[]): EventTemplate
{
    return db[Math.floor(Math.random() * db.length)];
}

export let START_EVENTS: EventTemplate[] = [
    new EventTemplate("{p0} runs away from the cornucopia", [], 1),
    new EventTemplate("{p0} flees from the cornucopia", [], 1),
    new EventTemplate("{p0} back flips, instantly snapping their neck.\n{p1} laughs so hard they injure themselves", [EffectType.Kill, EffectType.Injure], 2),
    new EventTemplate("{p0} slaps {p1}'s ass then runs off", [], 2),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver", [], 1),
    new EventTemplate("{p0} finds a bow, some arrows, and a quiver.\nIt's a shame that they have no clue how to use it", [], 1),
]