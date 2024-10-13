import {useState} from "react"

const FormBlock = () => {
	// State to store form data
	const [formData, setFormData] = useState({name: "", email: "", phoneNumber: "", textArea: ""})
	// State to store errors for each field
	const [error, setError] = useState({name: "", email: "", phoneNumber: ""})

	// Handles input field changes and clears the error for that specific field
	const handleInputChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
		setError({...error, [name]: ""}) // Clear specific error when typing
	}

	// Handles form submission and validation
	const handleSubmit = (event) => {
		event.preventDefault() // Prevent form's default behavior

		// Validate name field
		if (!formData.name) {
			setError((prevError) => ({...prevError, name: "Full Name is required."}))
		}

		// Validate email field
		if (!formData.email) {
			setError((prevError) => ({...prevError, email: "Email is required."}))
		}

		// Validate phone number field
		if (!formData.phoneNumber) {
			setError((prevError) => ({...prevError, phoneNumber: "Phone Number is required."}))
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* Email link at the top */}
			<h6 className="text-2xl xxs:text-sm mt-4 mb-4 text-secondary p-4 border-[1px] rounded-[24px] border-primaryBorder hover:bg-secondary hover:text-primary inline-block transition-all duration-300">
				<span className="cursor-pointer italic">
					<a href="mailto:shihamibneyousuf@gmail.com">shihamibneyousuf@gmail.com</a>
				</span>
			</h6>

			<div className="pt-10 xxs:pt-1">
				<div className="flex justify-start items-start gap-4 xxs:flex-col space-y-10">
					{/* Full Name input field */}
					<div className="flex flex-col w-1/2 gap-4">
						<label htmlFor="name" className="text-primaryFont text-[18px] font-OpenSans uppercase">
							Full Name:
						</label>
						<input
							placeholder="Your full Name"
							className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none text-white"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						{/* Error message for Full Name */}
						{error.name && (
							<p className="text-red-600 text-xl uppercase font-OpenSans">{error.name}</p>
						)}
					</div>

					{/* Email input field */}
					<div className="flex flex-col w-1/2 gap-4">
						<label htmlFor="email" className="text-primaryFont text-[18px] font-OpenSans uppercase">
							Email:
						</label>
						<input
							placeholder="Your Email Address"
							className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none text-white"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
						{/* Error message for Email */}
						{error.email && (
							<p className="text-red-600 text-xl uppercase font-OpenSans">{error.email}</p>
						)}
					</div>
				</div>

				{/* Phone Number input field */}
				<div className="flex flex-col w-full gap-4 mt-12">
					<label
						htmlFor="phoneNumber"
						className="text-primaryFont text-[18px] font-OpenSans uppercase"
					>
						Phone Number:
					</label>
					<input
						placeholder="Your Phone Number"
						className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none text-white"
						type="text"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleInputChange}
					/>
					{/* Error message for Phone Number */}
					{error.phoneNumber && (
						<p className="text-red-600 text-xl uppercase font-OpenSans">{error.phoneNumber}</p>
					)}
				</div>

				{/* Text area Number input field */}
				<div className="flex flex-col w-full gap-4 mt-12">
					<label
						htmlFor="textArea"
						className="text-primaryFont text-[18px] font-OpenSans uppercase"
					>
						Your Message:
					</label>
					<textarea
						name="textarea"
						placeholder="your Personal Opinion"
						className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none text-white h-[300px] xxs:h-[100px] placeholder:capitalize resize-none"
					></textarea>
				</div>
			</div>

			{/* Submit button */}
			<button
				type="submit"
				className="mt-10 text-secondary border-2 border-primaryBorder px-8 py-2 rounded-custom hover:bg-secondary hover:text-primary hover:border-secondary text-[22px] transition-all duration-300 font-semibold"
			>
				Send Message
			</button>
		</form>
	)
}

export default FormBlock
