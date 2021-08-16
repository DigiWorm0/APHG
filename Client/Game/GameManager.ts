import { SceneManager } from "../UI/SceneManager.js";
import { GameState } from "./GameState.js";
import { Player } from "./Player/Player.js";
import { PlayerManager } from "./Player/PlayerManager.js";

/**
 * Manages the Gameplay
 */
export class GameManager
{
    static state: GameState;
    static deathList: Player[];

    constructor()
    {
        GameManager.state = GameState.MainMenu;
        GameManager.deathList = [];
    }

    /**
     * Generate and Display Events
     */
    static generateEvents(title: string, desc: string): void
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
    static setState(state: GameState): void
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
                break;
        }
    }
}