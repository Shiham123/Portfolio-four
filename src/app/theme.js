import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {isHover: false, isSidebarOpen: false, animateClass: ""},
	reducers: {
		hoverChange: (state, {payload}) => {
			state.isHover = payload
		},
		sidebarOpenClose: (state, {payload}) => {
			state.isSidebarOpen = payload
		},
		animateApplied: (state, {payload}) => {
			state.animateClass = payload
		},
	},
})

export const {hoverChange, sidebarOpenClose, animateApplied} = themeSlice.actions
export default themeSlice.reducer
