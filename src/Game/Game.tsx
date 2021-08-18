import React from 'react';
import GameState from './GameState';
import Event from './Event/Event';
import Player from './Player/Player';
import MainMenu from './States/MainMenu';
import EventView from './States/EventView';
import DeathView from './States/DeathView';
import WinnerView from './States/WinnerView';
import PlayerData from './Player/PlayerData';

class Game extends React.Component
{
    static state: GameState;
    static players: Player[];
    static deathList: Player[];
    static currentEvents: Event[];
    static aliveCount: number;
    static forceUpdate: Function;

    constructor(props: any)
    {
        super(props);
        Game.state = GameState.MainMenu;
        Game.players = [];
        Game.deathList = [];
        Game.aliveCount = 0;
        Game.currentEvents = [];
        window.onbeforeunload = Game.savePlayers;
        Game.forceUpdate = (() => {
            this.setState({});
        }).bind(this);

        Game.loadPlayers();
    }

    static savePlayers(): void
    {
        console.log("Saving player data...");

        let data: PlayerData[] = [];
        Game.players.forEach((player) => {
            data.push({
                n: player.name,
                i: player.image
            });
        });

        let stringData = JSON.stringify(data);
        localStorage.setItem("playerdata", stringData);
    }

    static loadPlayers(): void
    {
        let stringData = localStorage.getItem("playerdata");
        if (!(stringData))
            return;

        let data = JSON.parse(stringData) as PlayerData[];
        data.forEach((player) => {
            Game.players.push(new Player({
                name: player.n,
                image: player.i
            }));
        });
    }

    static getAliveList(): Player[]
    {
        return Game.players.filter(player => player.isAlive);
    }

    static getRandomPlayer(): Player
    {
        let player = Game.players[Math.floor(Math.random() * Game.players.length)];
        if (player.isAlive)
            return player;
        else
            return this.getRandomPlayer();
    }

    static generateEvents(): void
    {
        let events: Event[] = [];
        Game.players.forEach(player => {
            let event = player.generateEvent();
            if (event)
                events.push(event);
        });
        Game.currentEvents = events;
    }

    static addPlayer(name: string, image: string)
    {
        Game.players.push(new Player({ name, image }));
        Game.forceUpdate();
    }

    static deletePlayer(player: Player)
    {
        let index = Game.players.indexOf(player);
        Game.players.splice(index, 1);
        Game.forceUpdate();
    }

    static resetPlayers()
    {
        Game.aliveCount = this.players.length;
        Game.players.forEach(player => {
            player.reset();
        });
    }

    static nextState()
    {
        console.log(Game.state);
        if (Game.state === GameState.MainMenu)
        {
            Game.resetPlayers();
            Game.state = GameState.Start;
            Game.generateEvents();
        }
        else if (Game.aliveCount <= 1 && Game.state != GameState.Winner)
        {
            Game.state = GameState.Winner;
        }
        else if (Game.state === GameState.Deaths)
        {
            Game.deathList = [];
            Game.state = GameState.Day;
            Game.generateEvents();
        }
        else if (Game.state === GameState.Start)
        {
            Game.state = GameState.Day;
            Game.generateEvents();
        }
        else if (Game.state === GameState.Day)
        {
            Game.state = GameState.Night;
            Game.generateEvents();
        }
        else if (Game.state === GameState.Night)
        {
            Game.state = GameState.Deaths;
        }
        else if (Game.state === GameState.Winner)
        {
            Game.state = GameState.MainMenu;
            Game.resetPlayers();
        }

        console.log(Game.state);
        Game.forceUpdate();
    }

    render()
    {
        if (Game.state === GameState.MainMenu)
        {
            return ( <MainMenu /> );
        }
        else if (Game.state === GameState.Start)
        {
            return ( <EventView title="The Bloodbath" desc="As the tributes stand on their podiums, the horn sounds." /> );
        }
        else if (Game.state === GameState.Day)
        {
            return ( <EventView title="Day" desc=" " /> );
        }
        else if (Game.state === GameState.Night)
        {
            return ( <EventView title="Night" desc=" " /> );
        }
        else if (Game.state === GameState.Deaths)
        {
            return ( <DeathView /> );
        }
        else if (Game.state === GameState.Winner)
        {
            return ( <WinnerView /> );
        }
        else
        {
            return ( <p>Error: Invalid Game State</p> );
        }
    }
}
export default Game;
