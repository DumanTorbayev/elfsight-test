import React, { useEffect } from 'react'
import styles from './Album.module.scss'
import { useParams, Link } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useSelector } from 'react-redux'

import { Preloader } from '../../UI/Preloader'
import { BackButton } from '../../BackButton'
import { getAlbums } from '../../../store/albums/selector'

export const Album = () => {
	const { id } = useParams()
	const { data, loading } = useSelector(getAlbums)
	const { getAlbumsById } = useActions()

	useEffect(() => {
		getAlbumsById(id)
	}, [id])

	if (loading) {
		return (<Preloader />)
	}

	return (
		<>
			<div className={styles.header}>
				<h1>Albums</h1>
				<BackButton />
			</div>
			<div className={styles.grid}>
				{data.map(({ id, title, thumbnailUrl, photosCount }) => (
					<div className={styles.item} key={`${id}`}>
						<div className={styles.img}>
							<img className={styles.img} src={thumbnailUrl} alt={title}/>
						</div>
						<div className={styles['text-wrap']}>
							<h2 className={styles.name}>{title}</h2>
							<p className={styles['photo-count']}>Кол-во фото: {photosCount}</p>
						</div>
						<Link className={`btn-primary ${styles.link}`} to={`/photo/${id}`}>View</Link>
					</div>
				))}
			</div>
		</>
	)
}
