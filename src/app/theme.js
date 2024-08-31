import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {isHover: false, isSidebarOpen: false, animateClass: "", fillColor: "#123456"},
	reducers: {
		hoverChange: (state, {payload}) => {
			state.isHover = payload
		},
		fillColorChange: (state, {payload}) => {
			state.fillColor = payload
		},
		sidebarOpenClose: (state, {payload}) => {
			state.isSidebarOpen = payload
		},
		animateApplied: (state, {payload}) => {
			state.animateClass = payload
		},
	},
})

export const {hoverChange, sidebarOpenClose, animateApplied, fillColorChange} = themeSlice.actions
export default themeSlice.reducer
