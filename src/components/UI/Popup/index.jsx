import React from 'react'
import styles from './Popup.module.scss'

export const Popup = ({ children, handleClosePopup }) => {
	return (
		<div className={styles.wrap}>
			<div onClick={handleClosePopup} className={styles.overlay}/>
			<div className={styles.body}>
				{children}
			</div>
		</div>
	)
}
