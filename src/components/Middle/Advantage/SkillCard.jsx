import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {setFillColorId} from "../../../app/handleSvg"

const SkillsCard = (props) => {
	const dispatch = useDispatch()

	const {number, Icon, Id} = props

	const handleMouseEnter = () => {
		dispatch(setFillColorId({color: "#28e98c", id: Id}))
	}

	const handleMouseOut = () => {
		dispatch(setFillColorId({color: "#565656", id: Id}))
	}

	return (
		<div
			className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] pt-[54px] pb-[48px] hover:border-secondary group transition-all duration-300 ease-in-out"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseOut}
		>
			<Icon />
			<span className="text-[30px] font-light text-secondary group-hover:text-[#ffffff] mt-[1.5rem]">
				{number}%
			</span>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
	Icon: PropTypes.func.isRequired,
	Id: PropTypes.number.isRequired,
}
