import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {fillColorChange} from "../../../app/theme"

const SkillsCard = (props) => {
	const dispatch = useDispatch()

	const {number, Icon} = props

	const handleMouseEnter = () => {
		dispatch(fillColorChange("#ffffff"))
	}

	const handleMouseOut = () => {
		dispatch(fillColorChange("#000000"))
	}

	return (
		<div
			className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] pt-[54px] pb-[48px] hover:border-secondary"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseOut}
		>
			<Icon />
			<span className="text-[30px] font-light text-secondary">{number}%</span>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
	Icon: PropTypes.element.isRequired,
}
