/**
 * Manages any Popups
 */
export class PopupManager
{
    static _openedPopup?: string;

    /**
     * Opens a popup
     * @param popupId - ID of the popup to open
     */
    static openPopup(popupId: string): void
    {
        if (this._openedPopup)
            this.closePopups();

        let facade = document.getElementById("popup-facade");
        let popup = document.getElementById("popup-" + popupId);

        if (facade) {
            facade.classList.remove("d-none");
            facade.style.top = window.scrollY + "px";
        }
        if (popup) {
            popup.classList.remove("popup-hide");
            popup.style.top = "calc(20vh + " + window.scrollY + "px)"
        }
        
        document.body.classList.add("disable-overflow");

        this._openedPopup = popupId;
    }

    /**
     * Opens any open popups
     */
    static closePopups(): void
    {
        if (!(this._openedPopup))
            return;
        
        let facade = document.getElementById("popup-facade");
        let popup = document.getElementById("popup-" + this._openedPopup);

        if (facade)
            facade.classList.add("d-none");
        if (popup)
            popup.classList.add("popup-hide");
        document.body.classList.remove("disable-overflow");
        
        this._openedPopup = undefined;
    }
}