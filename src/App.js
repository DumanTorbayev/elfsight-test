import React from 'react';
import {Route} from 'react-router-dom'
import {Home} from "./components/Home";
import {Album} from "./components/Album";
import {Photo} from "./components/Photo";

export const App = () => {
    return (
        <div className={'container'}>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/album/:id'>
                <Album />
            </Route>
            <Route path='/photo/:id'>
                <Photo />
            </Route>
        </div>
    );
};