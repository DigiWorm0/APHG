import React from 'react';
import GameState from '../GameState';
import Event from '../Event/Event';
import EventTemplate from '../Event/EventTemplate/EventTemplate';
import { chooseRandomTemplate, HOSTILE_EVENTS, NEUTRAL_EVENTS, START_EVENTS, TEAM_EVENTS2 } from '../Event/EventTemplate/EventTemplateDB';
import Game from '../Game';
import './Player.css';

interface PlayerProps
{
    name: string;
    image: string;
}

class Player extends React.Component<PlayerProps>
{
    id: string;
    name: string;
    image: string;

    isAlive: boolean;
    isInjured: boolean;
    hasWeapon: boolean;
    hasMedicine: boolean;

    teammates: Player[];

    constructor(props: PlayerProps)
    {
        super(props);
        this.name = props.name;
        this.image = props.image;

        this.id = this.name + this._randomId() + this._randomId();

        this.isAlive = true;
        this.isInjured = false;
        this.hasWeapon = false;
        this.hasMedicine = false;
        this.teammates = [];
    }

    generateEvent(): Event | void
    {
        if (Game.aliveCount <= 1)
            return;
        
        let template: EventTemplate;
        if (Game.state === GameState.Start)
            template = chooseRandomTemplate(START_EVENTS);
        else if (Game.state === GameState.Day || Game.state === GameState.Night)
        {
            if (this.teammates.length === 1)
                template = chooseRandomTemplate(TEAM_EVENTS2);
            else if (this.hasWeapon)
                template = chooseRandomTemplate(HOSTILE_EVENTS);
            else
                template = chooseRandomTemplate(NEUTRAL_EVENTS);
        }
        else
            return;
        
        if (template.playerCount > Game.aliveCount)
            return this.generateEvent();

        let event = template.generateEvent(this, ...this.teammates);
        event.applyEffects();
        return event;
    }

    reset(): void
    {
        this.isAlive = true;
        this.isInjured = false;
        this.hasWeapon = false;
        this.hasMedicine = false;
        this.teammates = [];
    }

    render(): JSX.Element
    {
        return (
            <div className={"player" + (this.isAlive ? "" : " player-dead")}>
                {Game.state === GameState.MainMenu && <img className="player-trash" src="/trash.jpg" onClick={() => Game.deletePlayer(this)} alt="trash" />}
                <img src={this.image} width="130" height="130" alt="player" />
                <h5>{this.name}</h5>
            </div>
        );
    }
    
    _randomId(): string
    {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
}
export default Player;
