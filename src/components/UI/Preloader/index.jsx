import React from 'react';
import scss from './Preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={scss.container}>
            <div className={scss.spinner}>
                {Array.from({length: 12}).map((i, index) => <div key={`${i}/${index}`}/>)}
            </div>
        </div>
    );
};