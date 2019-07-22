import React from 'react';

import './SessionDetails.css';
import { Link } from 'react-router-dom';
import { autoGenerateMockData } from '../../core/utils/generate-mock-data';
import { DataTypes, IUser } from '../../core/types/data-type-definitions';
// import { autoGenerateData, IUser } from '../../seed/data';
// import { DataTypes } from '../../seed/dataTypes';

const SessionDetails = (props: any) => {
	const { session } = props;
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
	const allUsers = autoGenerateMockData(DataTypes.User, 10) as IUser[];
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
