export const getMergedAlbums = (state) => {
    return state.albums.albums.map(album => ({
        ...album, photos: state.albums.photos.filter(photo => album.id === photo.albumId)
    }))
}

export const getLoading = state => state.albums.loading