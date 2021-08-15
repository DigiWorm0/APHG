import { chooseRandomTemplate, START_EVENTS } from "../../Event/Templates/EventTemplateDB.js";
import { GameManager } from "../GameManager.js";
import { GameState } from "../GameState.js";

/**
 * Represents a Player/Contestant
 * @param name - Name of the Player
 * @param imageURL - Base64 Blob URL of the Player's Image
 */
export class Player
{
    id: string;
    name: string;
    imageURL: string;

    isAlive: boolean;
    isInjured: boolean;
    isSick: boolean;

    foodStat: number;

    constructor(name: string, imageURL: string)
    {
        this.id = name + this._generateId() + this._generateId();
        console.log(this.id);
        this.name = name;
        this.imageURL = imageURL;

        this.isAlive = true;
        this.isInjured = false;
        this.isSick = false;

        this.foodStat = 8;
    }

    reset(): void
    {
        this.isAlive = true;
        this.isInjured = false;
        this.isSick = false;

        this.foodStat = 8;
    }

    /**
     * Generates an event for the player
     */
    generateEvent(): HTMLDivElement
    {
        if (GameManager.state == GameState.Start)
        {
            let template = chooseRandomTemplate(START_EVENTS);
            let event = template.generateEvent(this);
            return event.generateDiv();
        }
        else
        {
            return new HTMLDivElement();
        }
    }

    /**
     * Generates an image of the player thumbnail
     * @param size - Size in px of the image
     * @returns - HTML Image Object
     */
    generateImage(size?: number): HTMLImageElement
    {
        let imageElem = document.createElement("img") as HTMLImageElement;
        imageElem.src = this.imageURL;
        if (size)
        {
            imageElem.width = size;
            imageElem.height = size;
        }
        
        return imageElem;
    }

    /**
     * Generates a Random ID
     * @returns - Random ID
     */
    _generateId(): string
    {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
}