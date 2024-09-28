import PropTypes from "prop-types"

const LittlePara = ({paraText}) => {
	return <p className="text-paraOne text-paraColor font-Inter 2xl:w-[90%] xl:w-full">{paraText}</p>
}

export default LittlePara

LittlePara.propTypes = {paraText: PropTypes.string.isRequired}
