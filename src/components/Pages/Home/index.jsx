import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { useActions } from '../../../hooks/useActions'
import { useSelector } from 'react-redux'
import { getUsers } from '../../../store/users/selector'
import { Link } from 'react-router-dom'
import { Preloader } from '../../UI/Preloader'

export const Home = () => {
	const { getAllUsers } = useActions()
	const { data, loading } = useSelector(getUsers)

	useEffect(() => {
		getAllUsers()
	}, [])

	if (loading) {
		return (<Preloader />)
	}

	return (
		<>
			<h1>Authors</h1>
			<div className={styles.grid}>
				{data.map(({ name, id }) => (
					<div key={`${id}`} className={styles.item}>
						<h3 className={styles.name}>{name}</h3>
						<Link className={'btn-primary'} to={`/album/${id}`}>View album</Link>
					</div>
				))}
			</div>
		</>
	)
}
