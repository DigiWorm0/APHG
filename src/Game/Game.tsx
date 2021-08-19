import React from 'react';
import GameState from './GameState';
import Event from './Event/Event';
import Player from './Player/Player';
import MainMenu from './States/MainMenu';
import EventView from './States/EventView';
import DeathView from './States/DeathView';
import WinnerView from './States/WinnerView';
import PlayerData from './Player/PlayerData';
import { Konami } from './Konami';
import CustomEventPopup from './CustomEventPopup/CustomEventPopup';

class Game extends React.Component
{
    static state: GameState;
    static allPlayers: Player[];
    static currentPlayers: Player[];
    static deathList: Player[];
    static currentEvents: Event[];
    static aliveCount: number;
    static forceUpdate: Function;
    static isDarkMode: boolean;

    constructor(props: any)
    {
        super(props);
        Game.state = GameState.MainMenu;
        Game.allPlayers = [];
        Game.currentPlayers = [];
        Game.deathList = [];
        Game.aliveCount = 0;
        Game.currentEvents = [];
        Game.isDarkMode = false;

        window.onbeforeunload = Game.saveAll;
        document.onkeyup = (e) => { Konami.code(e.keyCode, Game.enableDarkMode); }

        Game.forceUpdate = (() => {
            this.setState({});
        }).bind(this);

        Game.loadPlayers();
    }

    static enableDarkMode(): void
    {
        console.log("Secret Code has been Entered!");

        document.body.style.backgroundColor = "#0f0f0f";
        document.body.style.color = "#fff";

        let grays = document.getElementsByClassName("bg-gray");
        for (let i = 0; i < grays.length; i++)
            grays[i].setAttribute("style", "background-color: #1c1c1c !important;");

        Game.isDarkMode = true;
        Game.forceUpdate();
    }

    static saveAll(): void
    {
        Game.savePlayers();
        CustomEventPopup.saveEvents();
    }

    static savePlayers(): void
    {
        console.log("Saving player data...");

        let data: PlayerData[] = [];
        Game.allPlayers.forEach((player) => {
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
            Game.allPlayers.push(new Player({
                name: player.n,
                image: player.i
            }));
        });
    }

    static getAliveList(): Player[]
    {
        return Game.allPlayers.filter(player => player.isAlive);
    }

    static getRandomPlayer(): Player
    {
        let index = Math.floor(Math.random() * Game.currentPlayers.length);
        let player = Game.currentPlayers[index];
        Game.currentPlayers.splice(index, 1);
        return player;
    }

    static generateEvents(): void
    {
        let events: Event[] = [];
        this.currentPlayers = this.getAliveList();
        while (Game.currentPlayers.length > 0)
        {
            let player = this.getRandomPlayer();
            let event = player.generateEvent();
            if (event)
                events.push(event);
        }
        Game.currentEvents = events;
    }

    static addPlayer(name: string, image: string)
    {
        Game.allPlayers.push(new Player({ name, image }));
        Game.forceUpdate();
    }

    static deletePlayer(player: Player)
    {
        let index = Game.allPlayers.indexOf(player);
        Game.allPlayers.splice(index, 1);
        Game.forceUpdate();
    }

    static resetPlayers()
    {
        Game.aliveCount = this.allPlayers.length;
        Game.allPlayers.forEach(player => {
            player.reset();
        });
    }

    static nextState()
    {
        setTimeout(() => {
            window.scrollTo(0,0);
        }, 100);
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
