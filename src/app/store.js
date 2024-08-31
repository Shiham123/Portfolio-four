import {combineReducers, configureStore} from "@reduxjs/toolkit"
import themeSlice from "./theme"
import iconSlice from "./handleSvg"
import logger from "redux-logger"

const rootReducer = combineReducers({
	theme: themeSlice,
	icon: iconSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
