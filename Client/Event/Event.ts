import { GameManager } from "../Game/GameManager.js";
import { Player } from "../Game/Player/Player.js";
import { PlayerManager } from "../Game/Player/PlayerManager.js";
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
                    break;
                case EffectType.Kill:
                    player.isAlive = false;
                    PlayerManager.aliveCount--;
                    GameManager.deathList.push(player);
                    PlayerManager.players.forEach((teammate) => {
                        let index = teammate.teammates.indexOf(player);
                        console.log(index);
                        if (index >= 0)
                            teammate.teammates.splice(index, 1);
                    });
                    break;
                case EffectType.Heal:
                    player.isInjured = false;
                    break;
                case EffectType.GainWeapon:
                    player.hasWeapon = true;
                    break;
                case EffectType.GainMedicine:
                    player.hasMedicine = true;
                    break;
                case EffectType.JoinTeam:
                    this.players.forEach((teammate) => {
                        if (teammate.id != player.id)
                            player.teammates.push(teammate);
                    });
                    break;
                case EffectType.DisbandTeam:
                    player.teammates = [];
                    break;
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
            let replaceTxt = "{p" + index + "}";
            while (text.includes(replaceTxt))
                text = text.replace("{p" + index + "}", "<span class=\"player-name\">" + player.name + "</span>");
        }));

        let title = document.createElement("p");
        title.innerHTML = text;
        divElement.appendChild(title);
        
        return divElement;
    }
}