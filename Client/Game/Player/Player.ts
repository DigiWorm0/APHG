import { EventTemplate } from "../../Event/Templates/EventTemplate.js";
import { chooseRandomTemplate, HOSTILE_EVENTS, NEUTRAL_EVENTS, START_EVENTS, TEAM_EVENTS2 } from "../../Event/Templates/EventTemplateDB.js";
import { PlayerUIManager } from "../../UI/PlayerUIManager.js";
import { GameManager } from "../GameManager.js";
import { GameState } from "../GameState.js";
import { PlayerManager } from "./PlayerManager.js";

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

    hasWeapon: boolean;
    hasMedicine: boolean;

    teammates: Player[];

    constructor(name: string, imageURL: string)
    {
        this.id = name + this._generateId() + this._generateId();
        this.name = name;
        this.imageURL = imageURL;

        this.isAlive = true;
        this.isInjured = false;

        this.hasMedicine = false;
        this.hasWeapon = false;

        this.teammates = [];
    }

    /**
     * Resets the Player Stats
     */
    reset(): void
    {
        this.isAlive = true;
        this.isInjured = false;
        this.hasWeapon = false;
        this.hasMedicine = false;
        this.teammates = [];
    }

    /**
     * Generates an event for the player
     */
    generateEvent(): HTMLDivElement
    {
        if (PlayerManager.aliveCount <= 1)
            return new HTMLDivElement();
        let template: EventTemplate;
        if (GameManager.state === GameState.Start)
            template = chooseRandomTemplate(START_EVENTS);
        else if (GameManager.state === GameState.Day || GameManager.state === GameState.Night)
        {
            if (this.teammates.length === 1)
                template = chooseRandomTemplate(TEAM_EVENTS2);
            else if (this.hasWeapon)
                template = chooseRandomTemplate(HOSTILE_EVENTS);
            else
                template = chooseRandomTemplate(NEUTRAL_EVENTS);
        }
        else
            return new HTMLDivElement();

        if (template.playerCount > PlayerManager.players.length)
            return this.generateEvent();

        let event = template.generateEvent(this, ...this.teammates);
        event.applyEffects();
        return event.generateDiv();
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
        if (!this.isAlive)
            imageElem.classList.add("player-dead");
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