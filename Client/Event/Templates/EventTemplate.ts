import { Player } from "../../Game/Player/Player.js";
import { PlayerManager } from "../../Game/Player/PlayerManager.js";
import { Event } from "../Event.js";
import { EffectType } from "./EffectsType.js";

/**
 * Template for Events
 * @param text - Text to display
 * @param effects - Effects on players
 * @param playerCount - Amount of players required for event
 */
export class EventTemplate
{
    text: string;
    effects: EffectType[];
    playerCount: number;

    constructor(text: string, effects: EffectType[], playerCount: number)
    {
        this.text = text;
        this.effects = effects;
        this.playerCount = playerCount;
    }

    /**
     * Generates an event from a template
     * @param players - Players to join Event
     * @returns The event itself
     */
    generateEvent(...players: Player[]): Event
    {
        let playerList = players;
        while (playerList.length < this.playerCount)
        {
            let player = PlayerManager.getRandomPlayer();
            if (!playerList.includes(player))
                playerList.push(player);
        }

        let event = new Event(
            this,
            players
        );

        return event;
    }
}