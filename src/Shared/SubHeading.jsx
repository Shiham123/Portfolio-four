import PropTypes from "prop-types"

const SubHeading = (props) => {
	const {mainText, spanText, classes} = props
	return (
		<h1
			className={`2xl:text-headingOne2xl xl:text-headingOneXl lg:text-headingOneLg md:text-headingOneMd sm:text-headingOneMd xs:text-headingOneXs xxs:text-headingOneXs text-primaryFont font-Inter font-light capitalize ${classes}`}
		>
			{mainText}
			<span className="text-secondary pl-5 xs:pl-3 xxs:pl-1">{spanText}</span>
		</h1>
	)
}

export default SubHeading

SubHeading.propTypes = {
	mainText: PropTypes.string.isRequired,
	spanText: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired,
}
