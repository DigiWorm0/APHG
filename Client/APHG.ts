import { PlayerManager } from "./Game/Player/PlayerManager.js";
import { VERSION } from "./Models/Constants.js";

/**
 * Represents the global game
 */
class APHG
{
    playerMgr: PlayerManager;

    constructor()
    {
        this.playerMgr = new PlayerManager();
        
        console.log("Initialized APHG v" + VERSION);
    }
}

let game = new APHG();