import {createSlice} from "@reduxjs/toolkit"

const modalSlice = createSlice({
	name: "modal",
	initialState: {isModalOpen: false, isCopied: false, isEmailHover: false},
	reducers: {
		toggleModal: (state, {payload}) => {
			state.isModalOpen = payload
			state.isCopied = payload
		},
		copyEmail: (state, {payload}) => {
			state.isCopied = payload
		},
		hoverEmailTextToggle: (state, {payload}) => {
			state.isEmailHover = payload
		},
	},
})

export const {toggleModal, copyEmail, hoverEmailTextToggle} = modalSlice.actions
export default modalSlice.reducer
