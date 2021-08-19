import React from 'react';
import Game from '../Game';
import Player from '../Player/Player';
import PlayerList from '../Player/PlayerList/PlayerList';
import EffectType from './EventTemplate/EffectType';
import EventTemplate from './EventTemplate/EventTemplate';

interface EventProps
{
    template: EventTemplate;
    players: Player[];
    data?: string;
}

class Event extends React.Component<EventProps>
{
    template: EventTemplate;
    players: Player[];
    text: string;
    data?: string;

    constructor(props: EventProps)
    {
        super(props);
        this.template = props.template;
        this.players = props.players;
        this.text = this.template.text;
        this.data = props.data;

        // Players
        this.players.forEach((player, index) => {
            let replace = "{p" + index + "}";
            while (this.text.includes(replace))
                this.text = this.text.replace(replace, "<span class=\"txt-blue\">" + player.name + "</span>");
        });

        // Weapon
        let weaponName = this.data;
        if (!(weaponName))
            weaponName = this.players[0].weaponName;
        if (this.text.includes("{weapon}") && weaponName)
            this.text = this.text.replace("{weapon}", "<span class=\"txt-red\">" + weaponName + "</span>");

        // Medicine
        let medicineName = this.data;
        if (!(medicineName))
            medicineName = this.players[0].medicineName;
        if (this.text.includes("{medicine}") && medicineName)
            this.text = this.text.replace("{medicine}", "<span class=\"txt-green\">" + medicineName + "</span>");
    }

    applyEffects()
    {
        this.template.effects.forEach((effect, index) => {
            let player = this.players[index];
            switch(effect)
            {
                case EffectType.Injure:
                    player.isInjured = true;
                    break;
                case EffectType.Kill:
                    player.isAlive = false;
                    Game.aliveCount--;
                    Game.deathList.push(player);

                    // Remove Weapons
                    this.players.forEach(player => {
                        player.hasWeapon = false;
                        player.weaponName = undefined;
                    })
                    // Wipe Teammates
                    Game.allPlayers.forEach(teammate => {
                        let index = teammate.teammates.indexOf(player);
                        if (index >= 0)
                            teammate.teammates.splice(index, 1);
                    });
                    break;
                case EffectType.Heal:
                    player.isInjured = false;
                    break;
                case EffectType.GainWeapon:
                    player.hasWeapon = true;
                    player.weaponName = this.data;
                    break;
                case EffectType.GainMedicine:
                    player.hasMedicine = true;
                    player.medicineName = this.data;
                    break;
                case EffectType.JoinTeam:
                    this.players.forEach((teammate) => {
                        if (teammate.id !== player.id)
                            player.teammates.push(teammate);
                    });
                    break;
                case EffectType.DisbandTeam:
                    player.teammates = [];
                    break;
            }
        })
    }

    render()
    {
        return (
            <div className="event">
                <PlayerList players={this.players} noPlayerMessage="Error: No players in event" />
                <p dangerouslySetInnerHTML={{__html: this.text}}></p>
            </div>
        );
    }
}
export default Event;
