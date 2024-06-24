import PropTypes from "prop-types"

const StepItem = ({topText, middleText, lastText}) => {
	return (
		<div className="step-item flex flex-col justify-start items-start relative py-8 pl-12">
			<h6 className="text-paraColor font-Inter text-lg capitalize tracking-wide hover:text-secondary transition-all duration-200 ease-in-out">
				{topText}
			</h6>
			<div className="step-dot absolute w-4 h-4 rounded-full top-1/4 -left-2 bg-secondary"></div>
			<h2 className="text-primaryFont text-2xl font-Inter font-light tracking-wide opacity-90">
				{middleText}
			</h2>
			<h6 className="text-paraColor tracking-wider font-Inter text-sm">{lastText}</h6>
		</div>
	)
}

StepItem.propTypes = {
	topText: PropTypes.string.isRequired,
	middleText: PropTypes.string.isRequired,
	lastText: PropTypes.string.isRequired,
}

export default StepItem
