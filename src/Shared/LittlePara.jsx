import PropTypes from "prop-types"

const LittlePara = ({paraText}) => {
	return <p className="text-paraColor my-6">{paraText}</p>
}

export default LittlePara

LittlePara.propTypes = {paraText: PropTypes.string.isRequired}
