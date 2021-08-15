import { Konami } from "./Konami.js";
import { SceneManager } from "../UI/SceneManager.js";
import { GameState } from "./GameState.js";
import { PlayerManager } from "./Player/PlayerManager.js";

/**
 * Manages the Gameplay
 */
export class GameManager
{
    static state: GameState;

    constructor()
    {
        GameManager.state = GameState.MainMenu;

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

        this.setState(GameState.Start);
        this.generateEvents("The Blood Bath", "As the tributes stand on their podiums, the horn sounds...");
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

        // Footer
        let footer = document.getElementById("footer") as HTMLElement;
        footer.setAttribute("style", "background-color: #1c1c1c !important;");
    }

    /**
     * Generate and Display Events
     */
    generateEvents(title: string, desc: string): void
    {
        let eventList = document.getElementById("event-list") as HTMLDivElement;
        let titleElem = document.getElementById("title") as HTMLHeadingElement;
        let descElem = document.getElementById("desc") as HTMLParagraphElement;

        // Title / Desc
        titleElem.innerText = title;
        descElem.innerText = desc;
        
        // Clear List
        while (eventList.hasChildNodes())
            eventList.removeChild(eventList.lastChild as ChildNode);

        // Iterate Players
        PlayerManager.players.forEach((player) => {
            if (player.isAlive)
            {
                let event = player.generateEvent();
                eventList.appendChild(event);
            }
        });
    }

    /**
     * Sets the current GameState
     * @param state - State to set to
     */
    setState(state: GameState): void
    {
        GameManager.state = state;

        switch (state)
        {
            case GameState.MainMenu:
                SceneManager.openScene("mainmenu");
                break;
            case GameState.Start:
                SceneManager.openScene("events");
                break;
            default:
                SceneManager._closeScenes();
        }
    }
}