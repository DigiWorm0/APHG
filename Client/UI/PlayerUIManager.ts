import { GameManager } from "../Game/GameManager.js";
import { GameState } from "../Game/GameState.js";
import { Player } from "../Game/Player/Player.js";
import { PlayerManager } from "../Game/Player/PlayerManager.js";
import { MIN_PLAYERS } from "../Models/Constants.js";
import { PopupManager } from "./PopupManager.js";

/**
 * Handles all of the contestant ui
 */
export class PlayerUIManager
{
    constructor()
    {
        // HTML
        let addPlayerBtn = document.getElementById("add-player") as HTMLButtonElement;
        let finishBtn = document.getElementById("add-player-done") as HTMLButtonElement;
        let cancelBtn = document.getElementById("add-player-cancel") as HTMLButtonElement;
        let imgInput = document.getElementById("player-img") as HTMLInputElement;

        addPlayerBtn.onclick = this.onAddPlayerBtn;
        finishBtn.onclick = this.onFinishPlayerBtn.bind(this);
        cancelBtn.onclick = this.onCancelBtn;
        imgInput.oninput = this.onImgUpload;
    }

    /**
     * Executes when the user wants to add a player
     */
    onAddPlayerBtn(): void
    {
        PopupManager.openPopup("add-player");
    }

    /**
     * Executes when a player's image is uploaded
     */
    onImgUpload(): void
    {
        let imgInput = document.getElementById("player-img") as HTMLInputElement;
        let imgFiles = imgInput.files as FileList;
        if (imgFiles.length < 0)
            return;
        
        let file = imgFiles[0];
        let reader = new FileReader();
        reader.onload = ((e) => {
            PlayerManager._lastImgUpload = (e.target as FileReader).result as string;

            let preview = document.getElementById("add-player-img-preview") as HTMLImageElement;
            preview.src = PlayerManager._lastImgUpload;
        });
        reader.readAsDataURL(file);
    }

    /**
     * Executes when the user wants to finish adding a player
     */
    onFinishPlayerBtn(): void
    {
        // Check File Upload
        if (!(PlayerManager._lastImgUpload))
        {
            // TODO: Handle no file input
            console.error("No Files Provided");
            return;
        }

        let nameElem = document.getElementById("player-name") as HTMLInputElement;

        PlayerManager.players.push(new Player(
            nameElem.value,
            PlayerManager._lastImgUpload
        ));

        PlayerUIManager.updateList();

        // Close Popup
        PopupManager.closePopups();
    }

    /**
     * Executes when the user wants to cancel adding a player
     */
    onCancelBtn(): void
    {
        PopupManager.closePopups();
    }

    /**
     * Updates a list of players
     * @param listId - ID of the list to update
     */
    static updateList(): void
    {
        // Start Button
        let startBtn = document.getElementById("start-game") as HTMLButtonElement;
        startBtn.disabled = PlayerManager.players.length < MIN_PLAYERS;
            
        // List
        let contestantList = document.getElementById("contestant-list") as HTMLDivElement;
        while (contestantList.hasChildNodes())
            contestantList.removeChild(contestantList.lastChild as ChildNode);

        // Iterate
        PlayerManager.players.forEach((player) => {

            // Container
            let groupItem = document.createElement("div") as HTMLDivElement;
            groupItem.classList.add("contestant-thumb");
            groupItem.appendChild(player.generateImage(130));

            // Trash Bucket
            if (GameManager.state === GameState.MainMenu)
            {
                let trash = document.createElement("img");
                trash.src = "/images/trash.jpg";
                trash.style.position = "absolute";
                trash.classList.add("trash-icon");
                trash.id = "tr-" + player.id;
                trash.width = 130;
                trash.height = 130;
                trash.onclick = ((e: MouseEvent) => {
                    let target = e.target as HTMLElement;
                    let id = target.id.substring(3);
                    PlayerManager.trash(id)
                }).bind(this);

                groupItem.appendChild(trash);
            }
            
            // Title
            let title = document.createElement("h5");
            title.innerText = player.name;
            groupItem.appendChild(title);

            // Finish
            contestantList.appendChild(groupItem);
        })
    }
}