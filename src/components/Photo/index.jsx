import React, {useEffect, useState} from 'react';
import scss from './Photo.module.scss'
import {useHistory, useParams} from 'react-router-dom'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {takePhotos} from "../../store/photos/selector";
import {Button} from "../UI/Button";
import {Popup} from "../UI/Popup";
import {Carousel} from "../Carousel";
import {Preloader} from "../UI/Preloader";

export const Photo = () => {
        const {id} = useParams()
        const {photos, loading} = useSelector(takePhotos)
        const {getPhotosById} = useActions()
        const history = useHistory()
        const [popupInfo, setPopupInfo] = useState({})

        useEffect(() => {
            getPhotosById(id)
        }, [id])

        const goBack = () => {
            history.goBack()
        }

        const handlePopupInfo = (index) => {
            setPopupInfo({index, open: true})
        }

        if (loading) {
            return (<Preloader />)
        }

        return (
            <>
                <div className={scss.header}>
                    <h1>Photos</h1>
                    <Button onClick={goBack}>Back</Button>
                </div>
                <div className={scss.grid}>
                    {photos.map(({id, url, title}, index) => (
                        <div key={id} className={scss.item}>
                            <img src={url} alt={title} onClick={() => handlePopupInfo(index)}/>
                        </div>
                    ))}
                </div>

                <div className={scss.popup}>
                    {
                        popupInfo.open &&
                        <Popup setPopupInfo={setPopupInfo}>
                            <Carousel photos={photos} currentIndex={popupInfo.index}/>
                        </Popup>
                    }
                </div>
            </>
        );
    }
;