import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import AddPlayerPopup from '../AddPlayerPopup/AddPlayerPopup';
import CustomEventPopup from '../CustomEventPopup/CustomEventPopup';
import Game from '../Game';
import PlayerList from '../Player/PlayerList/PlayerList';

class MainMenu extends React.Component
{
    constructor(props: any)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="mainmenu">
                <TitleBar title="Competitors" />

                <div className="container-stretch">
                    <PlayerList players={Game.allPlayers} noPlayerMessage="There are no competitors"/>
                </div>
                
                <div className={"row text-white p-4 " + (Game.isDarkMode ? "bg-black" : "bg-gray")}>
                    <div className="col-sm-12 m-1">
                        <button className="btn btn-primary m-1" onClick={() => AddPlayerPopup.open()}>
                            + Contestant
                        </button>
                        <button className="btn btn-warning m-1" onClick={() => Game.nextState()}>
                            Start Game
                        </button>
                        <button className="btn btn-dark m-1" onClick={() => CustomEventPopup.open()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <AddPlayerPopup />
                <CustomEventPopup />
            </div>
        );
    }
}
export default MainMenu;
