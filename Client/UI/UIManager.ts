import { GameUIManager } from "./GameUIManager.js";
import { PlayerUIManager } from "./PlayerUIManager.js";

/**
 * Manages all of the UI Elements
 */
export class UIManager
{
    playerUI: PlayerUIManager;
    gameUI: GameUIManager;

    constructor()
    {
        this.playerUI = new PlayerUIManager();
        this.gameUI = new GameUIManager();
    }
}