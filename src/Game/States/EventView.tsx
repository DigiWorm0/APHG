import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import EventList from '../Event/EventList/EventList';
import Game from '../Game';

interface EventViewProps
{
    title: string;
    desc: string;
}

class EventView extends React.Component<EventViewProps>
{
    render()
    {
        return (
            <div className="eventview">
                <TitleBar title={this.props.title} />

                <div className="container-stretch">
                    <p className="m-3">{this.props.desc}</p>
                    <EventList events={Game.currentEvents} />
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
export default EventView;
