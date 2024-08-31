import {createSlice} from "@reduxjs/toolkit"

const iconSlice = createSlice({
	name: "svg",
	initialState: {fillColor: "#565656"},
	reducers: {
		setFillColor: (state, {payload}) => {
			state.fillColor = payload
		},
	},
})

export const {setFillColor} = iconSlice.actions
export default iconSlice.reducer
