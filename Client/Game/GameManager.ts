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

    static generateWinner(): void
    {
        let winnerList = document.getElementById("winner-list") as HTMLDivElement;

        // Clear List
        while (winnerList.hasChildNodes())
            winnerList.removeChild(winnerList.lastChild as ChildNode);  

        if (PlayerManager.aliveCount === 0)
        {
            let message = document.createElement("i");
            message.innerText = "Everybody Died!";
            winnerList.appendChild(message);
        }
        else
        {
            PlayerManager.players.forEach((player) => {
                if (player.isAlive)
                {
                    let groupItem = document.createElement("div") as HTMLDivElement;
                    groupItem.classList.add("contestant-thumb");
    
                    // Image
                    groupItem.appendChild(player.generateImage(130));
    
                    // Title
                    let title = document.createElement("h5");
                    title.innerText = player.name + " Has Won!";
                    groupItem.appendChild(title);
    
                    // Finish
                    winnerList.appendChild(groupItem);
                }
            });
        }
    }

    static generateDeaths(): void
    {
        let deathList = document.getElementById("death-list") as HTMLDivElement;
        let deathDesc = document.getElementById("death-desc") as HTMLParagraphElement;

        // Description
        let txt = "no cannon shots can be heard in the distance";
        if (GameManager.deathList.length > 1)
            txt = GameManager.deathList.length.toString() + " cannon shots can be heard in the distance";
        else if (GameManager.deathList.length === 1)
            txt = "1 cannon shot can be heard in the distance";
        deathDesc.innerText = txt;

        // Clear List
        while (deathList.hasChildNodes())
            deathList.removeChild(deathList.lastChild as ChildNode);  

        GameManager.deathList.forEach((player) => {
            let groupItem = document.createElement("div") as HTMLDivElement;
            groupItem.classList.add("contestant-thumb");

            // Image
            groupItem.appendChild(player.generateImage(130));

            // Title
            let title = document.createElement("h5");
            title.innerText = player.name;
            groupItem.appendChild(title);

            // Finish
            deathList.appendChild(groupItem);
        });

        // Clear List
        GameManager.deathList = [];
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
            case GameState.Day:
                SceneManager.openScene("events");
                break;
            case GameState.Night:
                SceneManager.openScene("events");
                break;
            case GameState.Deaths:
                SceneManager.openScene("deaths");
                break;
            case GameState.Winner:
                SceneManager.openScene("winner");
                break;
            default:
                SceneManager._closeScenes();
                break;
        }
    }
}