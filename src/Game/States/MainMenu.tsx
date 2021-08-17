import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import AddPlayerPopup from '../AddPlayerPopup/AddPlayerPopup';
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
                    <PlayerList players={Game.players} noPlayerMessage="There are no competitors"/>
                </div>
                
                <div className="row bg-gray text-white p-4">
                    <div className="col-sm-12 m-1">
                        <button className="btn btn-primary m-1" onClick={() => AddPlayerPopup.open()}>
                            + Contestant
                        </button>
                        <button className="btn btn-warning m-1" onClick={() => Game.nextState()}>
                            Start Game
                        </button>
                    </div>
                </div>

                <AddPlayerPopup />
            </div>
        );
    }
}
export default MainMenu;
