import PropTypes from "prop-types"

const ServiceCard = ({headingText, paraText, hyperText}) => {
	return (
		<div className="border-[1px] border-primaryBorder w-10/12 rounded-custom p-8 hover:border-secondary transition-all duration-300 ease-in">
			<h3 className="font-Inter text-primaryFont font-light tracking-wide capitalize text-2xl leading-10">
				{headingText}
			</h3>
			<p className="font-Inter text-paraColor font-light tracking-wide first-letter:capitalize leading-10">
				{paraText}
			</p>
			<a
				className="font-Inter text-primaryFont font-light tracking-wide first-letter:capitalize underline leading-10"
				href="https://github.com/Shiham123"
				target="_blank"
			>
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
