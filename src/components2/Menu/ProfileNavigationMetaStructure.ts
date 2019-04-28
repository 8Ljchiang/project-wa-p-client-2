import { RightMenuCompRefNames } from "../../componentMaps/componentMaps";

export type IRightMenuLink = {
	title: string;
	ref: RightMenuCompRefNames;
}

export const rightMenuLinks: IRightMenuLink[] = [
	{
		title: 'User Profile',
		ref: RightMenuCompRefNames.profile,
	},
	{
		title: 'Invites',
		ref: RightMenuCompRefNames.invites,
	},
	{
		title: 'Ideas',
		ref: RightMenuCompRefNames.ideas,
	},
]