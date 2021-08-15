import { GameManager } from "./Game/GameManager.js";
import { PlayerManager } from "./Game/Player/PlayerManager.js";
import { VERSION } from "./Models/Constants.js";

/**
 * Represents the global game
 */
class APHG
{
    playerMgr: PlayerManager;
    gameMgr: GameManager;

    constructor()
    {
        this.playerMgr = new PlayerManager();
        this.gameMgr = new GameManager();
        
        console.log("Initialized APHG v" + VERSION);
    }
}

let game = new APHG();