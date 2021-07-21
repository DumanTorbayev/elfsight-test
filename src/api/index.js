export const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
}

export const fetchAlbums = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
}

export const fetchAllPhotos = () => {
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
}

export const fetchPhotosById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
}
