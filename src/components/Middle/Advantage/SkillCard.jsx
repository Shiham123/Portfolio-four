import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {setFillColor} from "../../../app/handleSvg"

const SkillsCard = (props) => {
	const dispatch = useDispatch()

	const {number, Icon} = props

	const handleMouseEnter = () => {
		dispatch(setFillColor("#28e98c"))
	}

	const handleMouseOut = () => {
		dispatch(setFillColor("#565656"))
	}

	return (
		<div
			className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] pt-[54px] pb-[48px] hover:border-secondary group"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseOut}
		>
			<Icon />
			<span className="text-[30px] font-light text-secondary group-hover:text-[#ffffff]">
				{number}%
			</span>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
	Icon: PropTypes.any.isRequired,
}
