import PropTypes from "prop-types"
const {string, element} = PropTypes

const TestimonialCard = (props) => {
	const {
		reviewerImage,
		reviewerText,
		reviewerName,
		reviewerDesignation,
		reviewerFacebook,
		reviewerWhatsapp,
		reviewerLinkedin,
	} = props
	return <div></div>
}

export default TestimonialCard

TestimonialCard.propTypes = {
	reviewerText: string.isRequired,
	reviewerImage: element.isRequired,
	reviewerName: string.isRequired,
	reviewerDesignation: string.isRequired,
	reviewerFacebook: string.isRequired,
	reviewerWhatsapp: string.isRequired,
	reviewerLinkedin: string.isRequired,
}
