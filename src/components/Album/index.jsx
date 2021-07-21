import React, {useEffect} from 'react';
import scss from './Album.module.scss'
import {useParams, useHistory} from 'react-router-dom'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {getLoading, getMergedAlbums} from "../../store/albums/selector";
import {Link} from "react-router-dom";
import {Button} from "../UI/Button";
import {Preloader} from "../UI/Preloader";

export const Album = () => {
    const {id} = useParams()
    const albums = useSelector(getMergedAlbums)
    const loading = useSelector(getLoading)
    const {getAlbums, getPhotos} = useActions()
    const history = useHistory()

    useEffect(() => {
        // этот запрос фото нужен для того чтобы можно было смержить фото с альбомами по id
        // это нужно для того чтобы задать обложку и кол-во фотографий
        getPhotos()
    }, [])

    useEffect(() => {
        getAlbums(id)
    }, [id])

    const goBack = () => {
        history.goBack()
    }

    if(loading) {
        return (<Preloader />)
    }

    return (
        <>
            <div className={scss.header}>
                <h1>Albums</h1>
                <Button onClick={goBack}>Back</Button>
            </div>
            <div className={scss.grid}>
                {albums.map(({id, photos, title}) => (
                    <div className={scss.item} key={`${id}`}>
                        <div className={scss.img}>
                            <img className={scss.img} src={photos[0]?.thumbnailUrl} alt={title}/>
                        </div>
                        <div className={scss['text-wrap']}>
                            <h2 className={scss.name}>{title}</h2>
                            <p className={scss['photo-count']}>Кол-во фото: {photos.length}</p>
                        </div>
                        <Link className={`btn-primary ${scss.link}`} to={`/photo/${id}`}>View</Link>
                    </div>
                ))}
            </div>
        </>
    );
};