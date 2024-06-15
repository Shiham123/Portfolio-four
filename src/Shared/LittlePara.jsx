import PropTypes from "prop-types"

const LittlePara = ({paraText}) => {
	return (
		<p className="text-paraColor py-4 leading-[30px] md:px-6 sm:px-6 lg:px-6 xl:px-6 xxs:px-6 font-Inter text-[16px]">
			{paraText}
		</p>
	)
}

export default LittlePara

LittlePara.propTypes = {paraText: PropTypes.string.isRequired}
