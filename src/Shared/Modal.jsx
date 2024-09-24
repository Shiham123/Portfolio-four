import PropTypes from "prop-types"

const Modal = ({isOpen, onClose}) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-bgSidebar bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded shadow-secondary">
				<h2 className="text-xl font-semibold text-secondary">Email Copied</h2>
				<p className="mt-4 text-secondary">The email has been copied to your clipboard.</p>
				<button
					onClick={onClose}
					className="mt-6 bg-secondary hover:bg-secondary text-white py-2 px-4 rounded"
				>
					Close
				</button>
			</div>
		</div>
	)
}

export default Modal

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired, // Updated onClose type to be a function
}
