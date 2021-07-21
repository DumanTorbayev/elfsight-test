import React from 'react';
import scss from './Popup.module.scss'

export const Popup = ({children, setPopupInfo}) => {
    return (
        <div className={scss.wrap}>
            <div onClick={() => setPopupInfo({index: null, open: false})} className={scss.overlay}/>
            <div className={scss.body}>
                {children}
            </div>
        </div>
    );
};