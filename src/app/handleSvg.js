import {createSlice} from "@reduxjs/toolkit"

const iconSlice = createSlice({
	name: "svg",
	initialState: {fillColor: "#565656", id: 0},
	reducers: {
		setFillColorId: (state, {payload}) => {
			const {color, id} = payload
			state.fillColor = color
			state.id = id
		},
	},
})

export const {setFillColorId} = iconSlice.actions
export default iconSlice.reducer
