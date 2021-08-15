import { PopupManager } from "../../UI/PopupManager.js";
import { Player } from "./Player.js";

/**
 * Manages all the players
 */
export class PlayerManager
{
    static players: Player[];
    static _lastImgUpload?: string;
    
    constructor()
    {
        PlayerManager.players = [];

        // HTML
        let addPlayerBtn = document.getElementById("add-player");
        let finishBtn = document.getElementById("add-player-done");
        let cancelBtn = document.getElementById("add-player-cancel");
        let imgInput = document.getElementById("player-img") as HTMLInputElement;

        if (addPlayerBtn)
            addPlayerBtn.onclick = this.onAddPlayerBtn;
        if (finishBtn)
            finishBtn.onclick = this.onFinishPlayerBtn.bind(this);
        if (cancelBtn)
            cancelBtn.onclick = this.onCancelBtn;
        if (imgInput)
            imgInput.oninput = this.onImgUpload;
    }

    /**
     * Gets a random player
     * @param isAlive - Whether or not the player is alive
     */
    static getRandomPlayer(isAlive: boolean = true): Player
    {
        let player = PlayerManager.players[Math.floor(PlayerManager.players.length * Math.random())];

        if (player.isAlive != isAlive)
            return this.getRandomPlayer(isAlive)
        else
            return player;
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
        this.updateList("contestant-list");

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
    updateList(listId: string): void
    {
        let contestantList = document.getElementById(listId) as HTMLDivElement;
        
        while (contestantList.hasChildNodes())
            contestantList.removeChild(contestantList.lastChild as ChildNode);

        PlayerManager.players.forEach((player) => {
            let groupItem = document.createElement("div") as HTMLDivElement;
            groupItem.classList.add("contestant-thumb");
            groupItem.appendChild(player.generateImage(130));
            
            let title = document.createElement("h5");
            title.innerText = player.name;
            groupItem.appendChild(title);

            contestantList.appendChild(groupItem);
        })
    }
}