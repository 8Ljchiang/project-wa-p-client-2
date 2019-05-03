import React from 'react';
import { BaseObjectId } from '../../seed/data';

interface SessionEventListItemProps {
	eventId: BaseObjectId;
	text: string;
}

const SessionEventListItem = (props: SessionEventListItemProps) => {
	return (
		<div className="session-event-list-item-container">
			<p className="session-event-list-item__text">{props.text}</p>
			<button>Remove</button>
		</div>
	);
}

export default SessionEventListItem;
