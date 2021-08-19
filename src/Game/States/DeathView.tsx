import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import Game from '../Game';
import PlayerList from '../Player/PlayerList/PlayerList';


class DeathView extends React.Component
{
    render()
    {
        return (
            <div className="deathview">
                <TitleBar title="Deaths" />

                <div className="container-stretch">
                    <p className="m-3">{Game.deathList.length} cannon shots can be heard in the distance</p>
                    <PlayerList players={Game.deathList} noPlayerMessage="" />
                </div>
                
                <div className={"row text-white p-4 " + (Game.isDarkMode ? "bg-black" : "bg-gray")}>
                    <div className="col-sm-12 m-1">
                        <button className="btn btn-warning m-1" onClick={() => Game.nextState()}>
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default DeathView;
