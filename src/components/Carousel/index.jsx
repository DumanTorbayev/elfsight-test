import React, {useState} from 'react';
import scss from './Carousel.module.scss'
import {Button} from "../UI/Button";

export const Carousel = ({photos, currentIndex}) => {
    const [activeIndex, setActiveIndex] = useState(currentIndex)

    const goPrev = () => {
        let index = activeIndex
        const slidesLength = photos.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex(index)
    }

    const goNext = () => {
        let index = activeIndex;
        const slidesLength = photos.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index)
    }

    return (
        <div className={scss.wrap}>
            <ul className={scss.carousel}>
                {photos.map(({id, url, title}, index) => (
                    <li key={id} className={`${scss.slide} ${index === activeIndex ? `${scss['_active']}` : ''}`}>
                        <img id={id} src={url} alt={title}/>
                    </li>
                ))}
            </ul>

            <div className={scss.btns}>
                <Button onClick={goPrev}>Prev</Button>
                <Button onClick={goNext}>Next</Button>
            </div>
        </div>
    );
};
