import { GameManager } from "../Game/GameManager.js";
import { GameState } from "../Game/GameState.js";
import { Konami } from "../Game/Konami.js";
import { PlayerManager } from "../Game/Player/PlayerManager.js";

/**
 * Manages the UI for the Game
 */
export class GameUIManager
{
    constructor()
    {
        let startButton = document.getElementById("start-game") as HTMLButtonElement;
        startButton.onclick = this.onStartGame.bind(this);
        document.onkeyup = (e) => {
            Konami.code(e.keyCode, this.onSecretCode);
        }
    }
    
    /**
     * Executes when the "Start Game" Button is Pressed
     */
    onStartGame(): void
    {
        PlayerManager.players.forEach((player) => {
            player.reset();
        });

        GameManager.setState(GameState.Start);
        GameManager.generateEvents("The Blood Bath", "As the tributes stand on their podiums, the horn sounds...");
    }

    /**
     * Executes when the secret code is entered
     */
    onSecretCode(): void
    {
        console.log("Secret Code has been Entered!");

        // Body
        document.body.style.backgroundColor = "#0f0f0f";
        document.body.style.color = "#fff";
        
        // Nav
        let nav = document.getElementById("nav") as HTMLElement;
        nav.setAttribute("style", "background-color: #1c1c1c !important;");
        nav.style.filter = "drop-shadow(0px 1px 2px #000)";
    }
}