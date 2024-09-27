import {useState} from "react"

const FormBlock = () => {
	const [formData, setFormData] = useState({name: "", email: ""})
	const [error, setError] = useState("")

	const handleInputChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
		setError("")
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setFormData({name: "", email: ""})

		if (!formData.name) {
			return setError("this field are required")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h6 className="text-2xl text-secondary p-4 border-[1px] rounded-[24px] border-primaryBorder hover:bg-secondary hover:text-primary inline-block transition-all duration-300">
				<span className="cursor-pointer italic">
					<a href="mailto:shihamibneyousuf@gmail.com">shihamibneyousuf@gmail.com</a>
				</span>
			</h6>

			<div className="pt-10">
				<div className="flex justify-start items-start gap-4">
					{/* input field one */}
					<div className="flex flex-col w-1/2 gap-4">
						<label htmlFor="name" className="text-primaryFont text-[18px] font-OpenSans uppercase">
							Full Name:
						</label>
						<input
							placeholder="Your full Name"
							className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none text-white"
							type="text"
							name="name"
							onChange={handleInputChange}
						/>
						{error && <p className="text-red-600 text-xl uppercase font-OpenSans">{error}</p>}
					</div>

					{/* email input field */}
					{/* <div className="flex flex-col w-1/2 gap-4">
						<label htmlFor="name" className="text-primaryFont text-[18px] font-OpenSans uppercase">
							your email: 
						</label>
						<input
							placeholder="Your full Name"
							className="bg-transparent text-[18px] hover:text-secondary focus:caret-transparent focus:outline-none text-white"
							type="email"
							name="email"
							onChange={handleInputChange}
							required
						/>
					</div> */}
				</div>
			</div>

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
