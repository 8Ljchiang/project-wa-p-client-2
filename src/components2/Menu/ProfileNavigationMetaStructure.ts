import { RightMenuCompRefNames } from "../../componentMaps/componentMaps";

export type IRightMenuLink = {
	title: string;
	ref: RightMenuCompRefNames;
}

export const rightMenuLinks: IRightMenuLink[] = [
	{
		title: 'My Profile',
		ref: RightMenuCompRefNames.Profile,
	},
	{
		title: 'My Invites',
		ref: RightMenuCompRefNames.Invites,
	},
	{
		title: 'My Ideas',
		ref: RightMenuCompRefNames.Ideas,
	},
	{
		title: 'My Projects',
		ref: RightMenuCompRefNames.Projects,
	},
	{
		title: 'My Exercises',
		ref: RightMenuCompRefNames.Exercises,
	},
	{
		title: 'My Messages',
		ref: RightMenuCompRefNames.Messages,
	},
	{
		title: 'My Project Requests',
		ref: RightMenuCompRefNames.ProjectRequests,
	},
	{
		title: 'My Sessions',
		ref: RightMenuCompRefNames.Sessions,
	},
	{
		title: 'Joined Sessions',
		ref: RightMenuCompRefNames.JoinedSessions,
	},
	{
		title: 'Followed Exercises',
		ref: RightMenuCompRefNames.FollowedExercises,
	},
	{
		title: 'Followed Users',
		ref: RightMenuCompRefNames.FollowedUsers,
	},

]