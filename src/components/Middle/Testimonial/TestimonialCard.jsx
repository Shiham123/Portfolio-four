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
		reviewerMail,
	} = props
	return (
		<div>
			<p>{reviewerText}</p>
			<p>{reviewerName}</p>
			<p>{reviewerDesignation}</p>
			<p>{reviewerFacebook}</p>
			<p>{reviewerWhatsapp}</p>
			<p>{reviewerLinkedin}</p>
			<p>{reviewerMail}</p>
			<img src={reviewerImage} alt="" />
		</div>
	)
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
	reviewerCompany: string.isRequired,
	reviewerMail: string.isRequired,
}
