import PropTypes from "prop-types"

const SubHeading = ({mainText, spanText}) => {
	return (
		<h1 className="2xl:text-headingOne2xl xl:text-headingOneXl mt-[32px] mb-[40px] text-primaryFont font-Inter font-light capitalize">
			{mainText}
			<span className="text-secondary pl-5">{spanText}</span>
		</h1>
	)
}

export default SubHeading

SubHeading.propTypes = {
	mainText: PropTypes.string.isRequired,
	spanText: PropTypes.string.isRequired,
}
