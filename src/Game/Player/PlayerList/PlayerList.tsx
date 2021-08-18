import React from 'react';
import Game from '../../Game';
import Player from '../Player';

interface PlayerListProps
{
    players: Player[];
    noPlayerMessage: string;
}

class PlayerList extends React.Component<PlayerListProps>
{
    render()
    {
        if (this.props.players.length > 0)
            return (this.props.players.map(player => {
                        return player.render();
                    }));
        else
            return (<div className="p-4">
                <i>{this.props.noPlayerMessage}</i>
            </div>);
    }
}

export default PlayerList;
