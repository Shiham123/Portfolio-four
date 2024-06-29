import PropTypes from "prop-types"

const SubHeading = ({mainText, spanText}) => {
	return (
		<h1 className="2xl:text-[50px] xl:text-[58px] mt-12  leading-[90px] text-primaryFont font-Inter font-light capitalize">
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
