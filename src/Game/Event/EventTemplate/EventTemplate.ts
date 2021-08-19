import Game from "../../Game";
import Player from "../../Player/Player";
import Event from "../Event";
import EffectType from "./EffectType";

class EventTemplate
{
    text: string;
    effects: EffectType[];
    playerCount: number;
    data?: string;

    constructor(text: string, effects: EffectType[], playerCount: number, data?: string)
    {
        this.text = text;
        this.effects = effects;
        this.playerCount = playerCount;
        this.data = data;
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
            players,
            data: this.data
        });

        return event;
    }
}
export default EventTemplate;
