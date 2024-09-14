import PropTypes from "prop-types"

const TestimonialSocialIcon = (props) => {
	const {Icon} = props
	return (
		<div className="border-primaryFont border-[2px] p-3 rounded-[100%]">
			<a href="">
				<Icon color="#ffffff" fontSize="1.2rem" />
			</a>
		</div>
	)
}

export default TestimonialSocialIcon

TestimonialSocialIcon.propTypes = {
	Icon: PropTypes.func.isRequired,
}
