import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {isHover: false, isSidebarOpen: false},
	reducers: {
		hoverChange: (state, {payload}) => {
			state.isHover = payload
		},
		sidebarOpenClose: (state, {payload}) => {
			state.isSidebarOpen = payload
		},
	},
})

export const {hoverChange, sidebarOpenClose} = themeSlice.actions
export default themeSlice.reducer
