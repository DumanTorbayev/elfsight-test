import React, { useEffect, useState } from 'react'
import styles from './Photo.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'
import { getPhotos } from '../../../store/photos/selector'
import { Popup } from '../../UI/Popup'
import { Carousel } from '../../Carousel'
import { Preloader } from '../../UI/Preloader'
import { BackButton } from '../../BackButton'

export const Photo = () => {
	const { id } = useParams()
	const { data, loading } = useSelector(getPhotos)
	const { getPhotosById } = useActions()
	const [popupIsOpen, setPopupIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(null)

	useEffect(() => {
		getPhotosById(id)
	}, [id])

	const handlePopupOpen = (index) => {
		setPopupIsOpen(true)
		setCurrentIndex(index)
	}

	const handleClosePopup = () => {
		setPopupIsOpen(false)
		setCurrentIndex(null)
	}

	if (loading) {
		return (<Preloader/>)
	}

	return (
		<>
			<div className={styles.header}>
				<h1>Photos</h1>
				<BackButton/>
			</div>
			<div className={styles.grid}>
				{data.map(({ id, url, title }, index) => (
					<div key={id} className={styles.item}>
						<img src={url} alt={title} onClick={() => handlePopupOpen(index)}/>
					</div>
				))}
			</div>

			<div className={styles.popup}>
				{
					popupIsOpen &&
					<Popup handleClosePopup={handleClosePopup}>
						<Carousel items={data} currentIndex={currentIndex}/>
					</Popup>
				}
			</div>
		</>
	)
}
