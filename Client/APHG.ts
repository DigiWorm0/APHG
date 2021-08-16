import { GameManager } from "./Game/GameManager.js";
import { PlayerManager } from "./Game/Player/PlayerManager.js";
import { VERSION } from "./Models/Constants.js";
import { UIManager } from "./UI/UIManager.js";

/**
 * Represents the global game
 */
class APHG
{
    playerMgr: PlayerManager;
    gameMgr: GameManager;
    uiMgr: UIManager;

    constructor()
    {
        this.gameMgr = new GameManager();
        this.playerMgr = new PlayerManager();
        this.uiMgr = new UIManager();
        
        console.log("Initialized APHG v" + VERSION);
    }
}

let game = new APHG();