/**
 * Manages any Sceness
 */
export class SceneManager
{
    static _openedScene?: string = "mainmenu";

    /**
     * Opens a scene
     * @param sceneId - ID of the scene to open
     */
    static openScene(sceneId: string): void
    {
        if (this._openedScene)
            this._closeScenes();
        
        let scene = document.getElementById("scene-" + sceneId);

        if (scene)
            scene.classList.remove("d-none");

        this._openedScene = sceneId;
    }

    /**
     * Opens any open scenes
     */
    static _closeScenes(): void
    {
        if (!(this._openedScene))
            return;
        
        let scene = document.getElementById("scene-" + this._openedScene);

        if (scene)
            scene.classList.add("d-none");
        
        this._openedScene = undefined;
    }
}