import { GameManager } from "../Game/GameManager.js";
import { GameState } from "../Game/GameState.js";
import { Konami } from "../Game/Konami.js";
import { PlayerManager } from "../Game/Player/PlayerManager.js";

/**
 * Manages the UI for the Game
 */
export class GameUIManager
{
    dayNum: number;

    constructor()
    {
        let startButton = document.getElementById("start-game") as HTMLButtonElement;
        startButton.onclick = this.onStartGame.bind(this);

        let proceedButton = document.getElementById("continue-game") as HTMLButtonElement;
        proceedButton.onclick = this.onProceedGame.bind(this);

        let proceedButton2 = document.getElementById("continue-game-deaths") as HTMLButtonElement;
        proceedButton2.onclick = this.onProceedGame.bind(this);

        let returnButton = document.getElementById("return-game") as HTMLButtonElement;
        returnButton.onclick = this.onReturnGame.bind(this);

        this.dayNum = 0;

        document.onkeyup = (e) => {
            Konami.code(e.keyCode, this.onSecretCode);
        }
    }
    
    /**
     * Executes when the "Start Game" Button is Pressed
     */
    onStartGame(): void
    {
        this.dayNum = 0;
        PlayerManager.players.forEach((player) => {
            player.reset();
        });
        PlayerManager.aliveCount = PlayerManager.players.length;

        GameManager.setState(GameState.Start);
        GameManager.generateEvents("The Blood Bath", "As the tributes stand on their podiums, the horn sounds...");
    }

    onReturnGame(): void
    {
        GameManager.setState(GameState.MainMenu);
    }

    /**
     * Executes when the "Proceed" Button is Pressed
     */
    onProceedGame(): void
    {
        if (PlayerManager.aliveCount <= 1)
        {
            GameManager.setState(GameState.Winner);
            GameManager.generateWinner();
        }
        else if (GameManager.state === GameState.Start || GameManager.state === GameState.Night)
        {
            this.dayNum++;
            GameManager.setState(GameState.Day);
            GameManager.generateEvents("Day " + this.dayNum, "");
        }
        else if (GameManager.state === GameState.Day)
        {
            GameManager.setState(GameState.Deaths);
            GameManager.generateDeaths();
        }
        else if (GameManager.state === GameState.Deaths)
        {
            GameManager.setState(GameState.Night);
            GameManager.generateEvents("Night " + this.dayNum, "");
        }

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 50);
    }

    /**
     * Executes when the secret code is entered
     */
    onSecretCode(): void
    {
        console.log("Secret Code has been Entered!");

        // Body
        document.body.style.backgroundColor = "rgb(23, 23, 23)";
        document.body.style.color = "#fff";
        
        // Nav Shadow
        let nav = document.getElementById("nav") as HTMLElement;
        nav.style.filter = "drop-shadow(0px 1px 2px #000)";

        // Gray BG
        let grays = document.getElementsByClassName("bg-gray");
        for (let i = 0; i < grays.length; i++)
            grays[i].setAttribute("style", "background-color: #1c1c1c !important;");
    }
}