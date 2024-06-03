import {combineReducers, configureStore} from "@reduxjs/toolkit"
import themeSlice from "./theme"
import logger from "redux-logger"

const rootReducer = combineReducers({
	theme: themeSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
