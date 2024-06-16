import PropTypes from "prop-types"

const LeftHeader = ({headingText}) => {
	return (
		<a href="https://github.com/Shiham123" target="_blank" rel="noopener noreferrer">
			<p className="font-Inter 2xl:text-[14px] xl:text-[12px] leading-6 tracking-[3px] text-primaryFont hover:text-secondary p-2 transition-all duration-300 ease-in-out italic font-medium cursor-pointer">
				{headingText}
			</p>
		</a>
	)
}

export default LeftHeader

LeftHeader.propTypes = {
	headingText: PropTypes.string.isRequired,
	githubUrl: PropTypes.string.isRequired,
}
