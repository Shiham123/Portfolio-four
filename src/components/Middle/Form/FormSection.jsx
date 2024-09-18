import {IoMdMail} from "react-icons/io"
import LittleHeading from "../../../Shared/LittleHeading"
import SubHeading from "../../../Shared/SubHeading"
import {useState} from "react"

const FormSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})

	const handleChange = (e) => {
		const {name, value} = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Here you can handle the form submission,
		// e.g., send the data to a backend or email service.
		console.log("Form submitted: ", formData)
		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		})
	}

	return (
		<div className="2xl:px-[7%] md:px-[10%] sm:px-[10%] lg:px-[10%] xl:px-[10%] xxs:px-[10%] mt-[15%] my-[10rem] rounded-[20px] relative">
			<LittleHeading headingText="Contact" Icon={IoMdMail} />
			<SubHeading mainText="You Wanna" spanText="Contact me?" />

			<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-8 space-y-4">
				<div className="flex flex-col">
					<label htmlFor="name" className="text-gray-700 font-medium">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="border border-gray-300 rounded-md p-2 mt-2"
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="email" className="text-gray-700 font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="border border-gray-300 rounded-md p-2 mt-2"
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="subject" className="text-gray-700 font-medium">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						required
						className="border border-gray-300 rounded-md p-2 mt-2"
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="message" className="text-gray-700 font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						className="border border-gray-300 rounded-md p-2 mt-2 h-32"
					></textarea>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
				>
					Send Message
				</button>
			</form>
		</div>
	)
}

export default FormSection
