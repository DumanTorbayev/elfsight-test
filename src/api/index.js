import { API_URL } from '../constants'

export const fetchUsers = () => fetch(`${API_URL}/users`)

export const fetchAlbums = (id) => {
	return Promise.all([`${API_URL}/users/${id}/albums`, `${API_URL}/photos`].map(async url => {
		const response = await fetch(url)
		return await response.json()
	}))
}

export const fetchPhotosById = (id) => fetch(`${API_URL}/albums/${id}/photos`)
