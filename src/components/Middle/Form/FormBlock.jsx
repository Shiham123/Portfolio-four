import {useState} from "react"

const FormBlock = () => {
	const [formData, setFormData] = useState({})

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
	}

	return (
		<form onSubmit={handleSubmit}>
			<h6>shihamibneyousuf@gmail.com</h6>
			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
				<button type="submit">Submit Data</button>
			</div>
		</form>
	)
}

export default FormBlock
