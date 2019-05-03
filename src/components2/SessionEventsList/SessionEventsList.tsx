import React from 'react';
import SessionEventListItem from './SessionEventListItem';

interface SessionEventsListProps {
	events: any[];
}

const SessionEventsList = (props: SessionEventsListProps) => {
	return (
		<div className="events-list-container">
			{props.events.map((event: any, index) => {
				const text = event.type === 0 ? 'stopped as driver event' : 'started as driver event'; // Consider changing to an enum.
				return (
					<SessionEventListItem key={index} text={text} eventId={event.id} />
				);
			})}	
		</div>
	);
}

export default SessionEventsList;
