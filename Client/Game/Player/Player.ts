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

    constructor(name: string, imageURL: string)
    {
        this.id = name + this._generateId() + this._generateId();
        console.log(this.id);
        this.name = name;
        this.imageURL = imageURL;
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