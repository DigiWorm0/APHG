import React from 'react';
import GameState from '../GameState';
import Event from '../Event/Event';
import EventTemplate from '../Event/EventTemplate/EventTemplate';
import { chooseRandomTemplate, CUSTOM_EVENTS1, HEALING_EVENTS, HOSTILE_EVENTS, INJURED_EVENTS, NEUTRAL_EVENTS, START_EVENTS, TEAM_EVENTS } from '../Event/EventTemplate/EventTemplateDB';
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

    weaponName?: string;
    medicineName?: string;

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
            if (this.isInjured && this.hasMedicine)
                template = chooseRandomTemplate(HEALING_EVENTS);
            else if (this.isInjured)
                template = chooseRandomTemplate(INJURED_EVENTS)
            else if (this.teammates.length > 0)
            {
                do 
                    template = chooseRandomTemplate(TEAM_EVENTS);
                while (template.playerCount !== this.teammates.length + 1)
            }
            else if (this.hasWeapon && Math.random() < .5)
                template = chooseRandomTemplate(HOSTILE_EVENTS);
            else if (Math.random() < .1 && CUSTOM_EVENTS1.length > 0)
                template = chooseRandomTemplate(CUSTOM_EVENTS1);
            else
                template = chooseRandomTemplate(NEUTRAL_EVENTS);
        }
        else
            return;
        
        this.teammates.forEach(teammate => {
            let index = Game.currentPlayers.indexOf(teammate, 1);
            if (index >= 0)
                Game.currentPlayers.splice(index, 1);
        });
        
        if (template.playerCount > Game.currentPlayers.length + 1)
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
        this.medicineName = undefined;
        this.weaponName = undefined;
        this.teammates = [];
    }

    render(): JSX.Element
    {
        return (
            <div className={"player" + (this.isAlive ? "" : " player-dead")}>
                {Game.state === GameState.MainMenu && <img className="player-trash" src="/APHG/trash.jpg" onClick={() => Game.deletePlayer(this)} alt="trash" />}
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
