import {createSlice} from "@reduxjs/toolkit"

const initialState = {name: "", email: ""}

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		updateField: (state, action) => {
			const {fieldName, value} = action.payload
			state[fieldName] = value
		},
		resetForm: () => initialState,
	},
})

export const {updateField, resetForm} = formSlice.actions
export default formSlice.reducer
