import PropTypes from "prop-types"

const LeftHeader = ({headingText}) => {
	return (
		<p className="font-light font-Inter text-[18px] leading-6 tracking-wider text-primaryFont hover:bg-secondary hover:text-primaryBorder p-2 rounded-lg transition-all duration-300 ease-in-out">
			{headingText}
		</p>
	)
}

export default LeftHeader

LeftHeader.propTypes = {headingText: PropTypes.string.isRequired}
