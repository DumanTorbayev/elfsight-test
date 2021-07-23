import React, { useState } from 'react'
import styles from './Carousel.module.scss'
import { Button } from '../UI/Button'

export const Carousel = ({ items, currentIndex }) => {
	const [activeIndex, setActiveIndex] = useState(currentIndex)

	const onPrev = () => {
		let index = activeIndex

		if (index < 1) {
			index = items.length
		}

		--index

		setActiveIndex(index)
	}

	const onNext = () => {
		let index = activeIndex

		if (index === items.length - 1) {
			index = -1
		}

		++index

		setActiveIndex(index)
	}

	return (
		<div className={styles.wrap}>
			<ul className={styles.carousel}>
				{items.map(({ id, url, title }, index) => (
					<li key={id} className={`${styles.slide} ${index === activeIndex ? `${styles._active}` : ''}`}>
						<img id={id} src={url} alt={title}/>
					</li>
				))}
			</ul>

			<div className={styles.btns}>
				<Button onClick={onPrev}>Prev</Button>
				<Button onClick={onNext}>Next</Button>
			</div>
		</div>
	)
}
