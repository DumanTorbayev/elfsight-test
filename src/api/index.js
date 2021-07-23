import { API_URL } from '../constants'

export const fetchUsers = () => fetch(`${API_URL}/users`)

export const fetchAlbums = (id) => {
	return [`${API_URL}/users/${id}/albums`, `${API_URL}/photos`]
}

export const fetchPhotosById = (id) => fetch(`${API_URL}/albums/${id}/photos`)
