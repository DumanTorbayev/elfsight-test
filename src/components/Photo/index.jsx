import React, {useEffect, useRef, useState} from 'react';
import scss from './Photo.module.scss'
import {useHistory, useParams} from 'react-router-dom'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {takePhotos} from "../../store/photos/selector";
import {Button} from "../UI/Button";
import {Popup} from "../UI/Popup";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export const Photo = () => {
    const {id} = useParams()
    const {photos, loading} = useSelector(takePhotos)
    const {getPhotosById} = useActions()
    const history = useHistory()
    const [popupInfo, setPopupInfo] = useState({})
    const swiperRef = useRef(null);

    useEffect(() => {
        getPhotosById(id)
    }, [id])

    const goBack = () => {
        history.goBack()
    }

    const handlePopupInfo = (event) => {
        const index = event.target.dataset.id
        setPopupInfo({index: index, open: true})
    }

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    if (loading) {
        return (<h1>Загрузка...</h1>)
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
                        <img data-id={index} src={url} alt={title} onClick={handlePopupInfo}/>
                    </div>
                ))}
            </div>

            <div className={scss.popup}>
                {
                    popupInfo.open &&
                    <Popup setPopupInfo={setPopupInfo}>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            grabCursor={true}
                            initialSlide={popupInfo.index}
                            centeredSlides={true}
                            ref={swiperRef}
                        >
                            {photos.map(({id, url, title}) => (
                                <SwiperSlide key={id}>
                                    <img id={id} src={url} alt={title}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={scss['btn-wrap']}>
                            <Button onClick={goNext}>Next</Button>
                            <Button onClick={goPrev}>Prev</Button>
                        </div>
                    </Popup>
                }
            </div>
        </>
    );
};