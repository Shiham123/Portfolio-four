import {createSlice} from "@reduxjs/toolkit"

const iconSlice = createSlice({
	name: "svg",
	initialState: {fillColor: "#565656", id: 0, svgWidth: "150px", svgHeight: "100px"},
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
