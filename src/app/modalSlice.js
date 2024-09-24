import {createSlice} from "@reduxjs/toolkit"

const modalSlice = createSlice({
	name: "modal",
	initialState: {isModalOpen: false, isModalClose: false},
	reducers: {
		openModal: (state, {payload}) => (state.isModalOpen = payload),
		closeModal: (state, {payload}) => (state.isModalClose = payload),
	},
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer
