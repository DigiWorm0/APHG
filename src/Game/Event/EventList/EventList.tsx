import React from 'react';
import Event from '../Event';

interface EventListProps
{
    events: Event[];
}

class EventList extends React.Component<EventListProps>
{
    render(): JSX.Element[]
    {
        return (
            this.props.events.map(event => {
                return event.render();
            }));
    }
}

export default EventList;
