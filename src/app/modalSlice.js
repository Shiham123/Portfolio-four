import {createSlice} from "@reduxjs/toolkit"

const modalSlice = createSlice({
	name: "modal",
	initialState: {isModalOpen: false, isCopied: false},
	reducers: {
		toggleModal: (state, {payload}) => {
			state.isModalOpen = payload
			state.isCopied = payload
		},
		copyEmail: (state, {payload}) => {
			state.isCopied = payload
		},
	},
})

export const {toggleModal, copyEmail} = modalSlice.actions
export default modalSlice.reducer
