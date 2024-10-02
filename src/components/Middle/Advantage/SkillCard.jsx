import PropTypes from "prop-types"
import {useDispatch} from "react-redux"
import {setFillColorId} from "../../../app/handleSvg"

const SkillsCard = (props) => {
	const dispatch = useDispatch()
	const {number, Icon, Id, skillName} = props

	const handleMouseEnter = () => dispatch(setFillColorId({color: "#28e98c", id: Id}))
	const handleMouseOut = () => dispatch(setFillColorId({color: "#565656", id: Id}))

	return (
		<div className="flex flex-col justify-start items-start rounded-custom hover:relative">
			<div
				className="border-[2px] border-primaryBorder flex flex-col justify-start rounded-custom hover:rounded-tr-none hover:rounded-br-none items-center hover:border-secondary group transition-all duration-300 ease-in-out 2xl:px-[25px] 2xl:py-[50px] xl:px-[20px] xl:py-[20px] lg:px-[20px] lg:py-[20px]"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseOut}
			>
				<Icon />
				<span className="text-[30px] font-light text-primaryFont group-hover:text-secondary mt-[1rem]">
					{number}%
				</span>
			</div>
			<div className="absolute bg-secondary top-0 right-[-35%] w-[35%] h-full rounded-tr-custom rounded-br-custom rounded-br-c">
				<p className="font-Poppins 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-[18px] mt-[10px] text-primaryFont font-light uppercase tracking-widest leading-10 transition-transform duration-300">
					{skillName.split("").map((char, index) => (
						<span key={index} className="text-primary block text-[28px] font-semibold text-center">
							{char}
						</span>
					))}
				</p>
			</div>
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
