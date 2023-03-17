export type UsersProps = {
	items: UserProps[]
}

export type UserProps = {
	avatar_url: string
	login: string
	location: string
	followers: number
	following: number
}
