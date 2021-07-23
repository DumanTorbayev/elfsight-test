import React from 'react'
import styles from './Preloader.module.scss'

export const Preloader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.spinner}>
				{Array.from({ length: 12 }).map((i, index) => <div key={`${i}/${index}`}/>)}
			</div>
		</div>
	)
}
