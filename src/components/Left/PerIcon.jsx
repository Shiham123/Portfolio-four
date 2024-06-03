import PropTypes from "prop-types"

const PerIcon = ({Icon}) => {
	return (
		<Icon
			size={45}
			className="text-[#565656] hover:text-hoverColor border-[1px] border-[#565656] p-2 rounded-full hover:border-hoverColor hover:duration-300 hover:transition-all hover:ease-in-out cursor-pointer"
		/>
	)
}

export default PerIcon

PerIcon.propTypes = {Icon: PropTypes.elementType.isRequired}
