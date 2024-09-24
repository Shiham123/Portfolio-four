import {useState} from "react"

const FormBlock = () => {
	const [formData, setFormData] = useState({})
	const [isCopied, setIsCopied] = useState(false)

	const handleSubmit = (event) => event.preventDefault()

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
	}

	const handleEmailCopy = () => {
		if (setIsCopied === true) return

		navigator.clipboard.writeText("shihamibneyousuf@gmail.com").then(() => {
			setIsCopied(true), setTimeout(() => setIsCopied(false), 5000)
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="relative inline-block">
				<h6
					className={`cursor-pointer text-2xl text-secondary transition-all duration-300 py-12 ${
						isCopied === true && "pointer-events-none"
					}`}
					onClick={handleEmailCopy}
				>
					{isCopied ? "Email Copied" : "shihamibneyousuf@gmail.com"}
				</h6>

				<span className="absolute top-0 right-0 w-[100px] bg-secondary">Email Copied</span>
			</div>
			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
				<button type="submit">Submit Data</button>
			</div>
		</form>
	)
}

export default FormBlock
