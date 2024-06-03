import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {isHover: false},
	reducers: {
		hoverChange: (state, {payload}) => {
			state.isHover = payload
		},
	},
})

export const {hoverChange} = themeSlice.actions
export default themeSlice.reducer
