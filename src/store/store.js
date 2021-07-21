import {configureStore} from "@reduxjs/toolkit";
import reducers from './rootReduser'

export const store = configureStore({
    reducer: {...reducers}
})