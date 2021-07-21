import React, {useEffect} from 'react';
import scss from './Home.module.scss'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {takeUsers} from "../../store/users/selector";
import {Link} from "react-router-dom";

export const Home = () => {
    const {getUsers} = useActions()
    const {users} = useSelector(takeUsers)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h1>Users</h1>
            <div className={scss.grid}>
                {users.map(({name, id}) => (
                    <div key={`${id}`} className={scss.item}>
                        <h3 className={scss.name}>{name}</h3>
                        <Link className={`btn-primary`} to={`/album/${id}`}>View album</Link>
                    </div>
                ))}
            </div>
        </>
    );
};