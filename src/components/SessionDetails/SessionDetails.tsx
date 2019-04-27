import React from 'react';

import './SessionDetails.css';
import { Link } from 'react-router-dom';
import { autoGenerateData, IUser } from '../../seed/data';

const SessionDetails = (props: any) => {
	const { session } = props;
	console.log('sessionDetails', session);
	if (session) {
		return (
			<div className="session-detail-container">
				<div className="session-detail__highlights">
					<h2>{session.title}</h2>
					<div>
						<div>JOIN (Button)</div>
						<p>{session.access}</p>
						<p>{session.visibility}</p>
					</div>
					
				</div>
				<div>
					<p>{session.description}</p>
					<h3>Total Users: {session.userIds.length}</h3>
					{renderUsers(session.userIds)}
				</div>
				<br></br>
				<div>
					<h3>Other Details:</h3>
					<Link to={`/projects/${session.projectId}`}>{session.projectId}</Link>
					<p>{session.participants}</p>
					<p>{session.category}</p>
					<p>{session.tags}</p>
					<p>{session.type}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div>No session found</div>
		);
	}
}

function renderUsers(userIds: any[]) {
	const allUsers = autoGenerateData('user', 10) as IUser[];
	const filteredUsers = allUsers.filter((user) => {
		return userIds.includes(user.id);
	});
	return filteredUsers.map((user) => {
		return (
			<div key={user.id}>
				{user.username}
			</div>
		);
	});
	// .filter((user: IUser) => {
	// 	return userIds.includes(user.id);
	// });
	// return users.map((user: IUser) => {
	// 	return (
	// 		<div>{user.username}</div>
	// 	);
	// });
}


export default SessionDetails;
