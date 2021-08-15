import { Player } from "../Game/Player/Player.js";
import { EffectType } from "./Templates/EffectsType.js";
import { EventTemplate } from "./Templates/EventTemplate.js";

/**
 * Represents an Event
 */
export class Event
{
    template: EventTemplate;
    players: Player[];

    constructor(template: EventTemplate, players: Player[])
    {
        this.template = template;
        this.players = players;
    }

    applyEffects(): void
    {
        this.template.effects.forEach((effect, index) => {
            let player = this.players[index];
            switch(effect)
            {
                case EffectType.Injure:
                    player.isInjured = true;
                case EffectType.Kill:
                    player.isAlive = false;
                case EffectType.Sicken:
                    player.isSick = true;
                case EffectType.Heal:
                    player.isInjured = false;
                    player.isSick = false;
            }
        })
    }

    /**
     * Generates a Div Element to Represent the Event
     * @returns Div Representing the Event
     */
    generateDiv(): HTMLDivElement
    {
        let divElement = document.createElement("div") as HTMLDivElement;
        divElement.classList.add("event-info");

        let text = this.template.text;
        this.players.forEach(((player, index) => {
            divElement.appendChild(player.generateImage(92));
            text = text.replace("{p" + index + "}", "<span class=\"player-name\">" + player.name + "</span>");
        }));

        let title = document.createElement("p");
        title.innerHTML = text;
        divElement.appendChild(title);

        return divElement;
    }
}