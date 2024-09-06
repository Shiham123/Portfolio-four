import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {setFillColorId} from "../../../app/handleSvg"

const SkillsCard = (props) => {
	const dispatch = useDispatch()
	const {number, Icon, Id, skillName} = props

	const handleMouseEnter = () => dispatch(setFillColorId({color: "#28e98c", id: Id}))
	const handleMouseOut = () => dispatch(setFillColorId({color: "#565656", id: Id}))

	return (
		<div className="flex flex-col justify-start items-center">
			<div
				className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] hover:border-secondary group transition-all duration-300 ease-in-out pt-[54px] pb-[48px]"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseOut}
			>
				<Icon />
				<span className="text-[30px] font-light text-secondary group-hover:text-primaryFont mt-[1rem]">
					{number}%
				</span>
			</div>
			<p className="font-Poppins text-2xl text-primaryFont font-light uppercase tracking-widest leading-10 hover:scale-105 transition-transform duration-300">
				{skillName}
			</p>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
	Icon: PropTypes.func.isRequired,
	Id: PropTypes.number.isRequired,
	skillName: PropTypes.string.isRequired,
}
