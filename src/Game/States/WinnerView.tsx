import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import Game from '../Game';
import PlayerList from '../Player/PlayerList/PlayerList';


class WinnerView extends React.Component
{
    render()
    {
        return (
            <div className="winnerview">
                <TitleBar title="Winner" />

                <div className="container-stretch">
                    <p className="m-3">Congratulations</p>
                    <PlayerList players={Game.getAliveList()} noPlayerMessage="...nobody won..." />
                </div>
                
                <div className="row bg-gray text-white p-4">
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
export default WinnerView;
