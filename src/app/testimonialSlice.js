import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const fetchTestimonial = createAsyncThunk("testimonial/fetchTestimonial", () => {
	return fetch("/testimonialData.json").then((response) => response.json())
})

const testimonialSlice = createSlice({
	name: "testimonial",
	initialState: {data: [], status: "idle", error: null},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTestimonial.pending, (state) => {
				state.status = "loading"
			})
			.addCase(fetchTestimonial.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.data = action.payload
			})
			.addCase(fetchTestimonial.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message
			})
	},
})

export default testimonialSlice.reducer
export {fetchTestimonial}
	