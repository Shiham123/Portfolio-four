import PropTypes from "prop-types"

const InputField = (props) => {
	const {labelText, placeholderText, nameType} = props

	return (
		<div className="flex flex-col w-1/2 gap-4">
			<label htmlFor="name" className="text-primaryFont text-[18px] font-OpenSans uppercase">
				{labelText}:
			</label>
			<input
				placeholder={placeholderText}
				className="bg-transparent text-[18px] hover:text-secondary focus:caret-white focus:outline-none"
				type="text"
				name={nameType}
			/>
		</div>
	)
}

export default InputField

InputField.propTypes = {
	labelText: PropTypes.string.isRequired,
	placeholderText: PropTypes.string.isRequired,
	nameType: PropTypes.string.isRequired,
}
