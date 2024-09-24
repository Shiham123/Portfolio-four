import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"

// redux function
import {copyEmail, hoverEmailTextToggle, toggleModal} from "../../../app/modalSlice"

import Modal from "../../../Shared/Modal"

const FormBlock = () => {
	const {isCopied, isModalOpen} = useSelector((state) => state.modal)
	const dispatch = useDispatch()

	// state
	const [formData, setFormData] = useState({})

	const handleSubmit = (event) => event.preventDefault()

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormData({...formData, [name]: value})
	}

	const handleEmailCopy = () => {
		if (isCopied) return
		navigator.clipboard
			.writeText("shihamibneyousuf@gmail.com")
			.then(() => dispatch(copyEmail(true)), dispatch(toggleModal(true)))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="relative inline-block">
				<h6
					className="text-2xl text-secondary transition-all duration-300 py-12"
					onClick={handleEmailCopy}
					onMouseEnter={() => dispatch(hoverEmailTextToggle(true))}
					onMouseLeave={() => dispatch(hoverEmailTextToggle(false))}
				>
					{isCopied ? (
						<span className="cursor-text">Email Copied</span>
					) : (
						<span className="cursor-pointer ">shihamibneyousuf@gmail.com</span>
					)}
				</h6>
			</div>

			<div>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
				<button type="submit">Submit Data</button>
			</div>

			{/* Modal */}
			{isModalOpen && <Modal />}
		</form>
	)
}

export default FormBlock
