import { PlayerUIManager } from "../../UI/PlayerUIManager.js";
import { Player } from "./Player.js";

/**
 * Manages all the players
 */
export class PlayerManager
{
    static players: Player[];
    static aliveCount: number;
    static _lastImgUpload?: string;
    
    constructor()
    {
        PlayerManager.players = [];
        PlayerManager.aliveCount = 0;
        this.onLoad();

        window.onbeforeunload = this.onExit;
    }

    /**
     * Gets a random player
     * @param isAlive - Whether or not the player is alive
     */
    static getRandomPlayer(isAlive: boolean = true): Player
    {
        let player = PlayerManager.players[Math.floor(PlayerManager.players.length * Math.random())];

        if (player.isAlive != isAlive)
            return this.getRandomPlayer(isAlive)
        else
            return player;
    }

    /**
     * Executes when the Window Loads
     */
    onLoad(): void
    {
        let stringData = localStorage.getItem("playerdata");
        if (!(stringData))
            return;
        let data = JSON.parse(stringData) as PlayerData[];
        if (data.length <= 0)
            return;
        data.forEach((player) => {
            PlayerManager.players.push(new Player(player.n, player.u));
        });
        PlayerUIManager.updateList();
    }

    /**
     * Executes before the Window Exits
     */
    onExit(): void
    {
        let data: PlayerData[] = [];
        PlayerManager.players.forEach((player) => {
            data.push({
                n: player.name,
                u: player.imageURL
            });
        });

        let stringData = JSON.stringify(data);
        localStorage.setItem("playerdata", stringData);
        console.log("Saved Player Data!");
    }

    /**
     * Deletes a player by their id
     * @param id - ID of the player to delete
     */
    static trash(id: string)
    {
        let index = PlayerManager.players.findIndex((player) => { return player.id === id; });
        PlayerManager.players.splice(index, 1);
        PlayerUIManager.updateList();
    }
}

interface PlayerData
{
    n: string,
    u: string
}