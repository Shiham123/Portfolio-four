import PropTypes from "prop-types"

const ServiceCard = ({headingText, paraText, hyperText}) => {
	return (
		<div>
			<h3>{headingText}</h3>
			<p>{paraText}</p>
			<a href="https://github.com/Shiham123" target="_blank">
				{hyperText}
			</a>
		</div>
	)
}

export default ServiceCard

ServiceCard.propTypes = {
	headingText: PropTypes.string.isRequired,
	paraText: PropTypes.string.isRequired,
	hyperText: PropTypes.string.isRequired,
}
