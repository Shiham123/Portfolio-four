import PropTypes from "prop-types"

const StepItem = (props) => {
	const {topText, middleText, lastText} = props
	return (
		<>
			<div className="step-item flex flex-col justify-start items-start relative py-8 pl-12 xxs:pl-8">
				{/* this is absolute line section / line bar */}
				<div className="absolute top-[25%] left-0 h-[100%] xxs:h-[110%] w-[1px] bg-paraColor opacity-70"></div>
				{/* this is dot making class */}
				<div className="step-dot absolute w-3 h-3 rounded-[100%] top-[25%] -left-[0.5%] xxs:-left-[1.5%] bg-secondary"></div>

				{/* content */}
				<h6 className="text-paraColor font-Inter text-lg capitalize tracking-wide hover:text-secondary transition-all duration-200 ease-in-out">
					{topText}
				</h6>
				<h2 className="text-primaryFont text-2xl font-Inter font-light tracking-wide opacity-90">
					{middleText}
				</h2>
				<h6 className="text-paraColor tracking-wider font-Inter text-sm">{lastText}</h6>
			</div>
		</>
	)
}

StepItem.propTypes = {
	topText: PropTypes.string.isRequired,
	middleText: PropTypes.string.isRequired,
	lastText: PropTypes.string.isRequired,
}

export default StepItem
