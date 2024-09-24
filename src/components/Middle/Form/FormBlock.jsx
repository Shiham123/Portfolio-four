import {useState} from "react"
import Modal from "../../../Shared/Modal"

const FormBlock = () => {
	const [formData, setFormData] = useState({})
	const [isCopied, setIsCopied] = useState(false)

	const handleSubmit = (event) => event.preventDefault()

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
	}

	const handleEmailCopy = () => {
		if (isCopied) return
		navigator.clipboard.writeText("shihamibneyousuf@gmail.com").then(() => setIsCopied(true))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="relative inline-block">
				<h6
					className={`cursor-pointer text-2xl text-secondary transition-all duration-300 py-12 ${
						isCopied && "pointer-events-none"
					}`}
					onClick={handleEmailCopy}
				>
					{isCopied ? "Email Copied" : "shihamibneyousuf@gmail.com"}
				</h6>
			</div>

			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
				<button type="submit">Submit Data</button>
			</div>

			{/* Modal */}
			<Modal />
		</form>
	)
}

export default FormBlock
