import Game from "../../Game";
import Player from "../../Player/Player";
import Event from "../Event";
import EffectType from "./EffectType";

class EventTemplate
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

    generateEvent(...players: Player[]): Event
    {
        let playerList = players;
        while (playerList.length < this.playerCount)
        {
            let player = Game.getRandomPlayer();
            if (!playerList.includes(player))
                playerList.push(player);
        }

        let event = new Event({
            template: this,
            players
        });

        return event;
    }
}
export default EventTemplate;
