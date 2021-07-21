import React from 'react';
import scss from './Button.module.scss'

export const Button = ({onClick, children}) => {
    return (
        <button className={scss.button} onClick={onClick}>
            {children}
        </button>
    );
};