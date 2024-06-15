import PropTypes from "prop-types"

const LittlePara = ({paraText}) => {
	return (
		<p className="text-paraColor py-4 leading-[30px] font-Inter text-[16px] w-[90%]">{paraText}</p>
	)
}

export default LittlePara

LittlePara.propTypes = {paraText: PropTypes.string.isRequired}
