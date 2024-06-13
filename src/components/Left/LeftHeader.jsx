import PropTypes from "prop-types"

const LeftHeader = ({headingText}) => {
	return (
		<p className="font-Inter text-[13px] leading-6 tracking-wider text-primaryFont hover:bg-secondary hover:text-primaryBorder p-2 rounded-[10px] transition-all duration-300 ease-in-out border-[1px] border-secondary italic font-medium">
			{headingText}
		</p>
	)
}

export default LeftHeader

LeftHeader.propTypes = {headingText: PropTypes.string.isRequired}
