import PropTypes from "prop-types"

const SkillsCard = (props) => {
	const {number} = props
	return (
		<div className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] pt-[54px] pb-[48px] ">
			<img className="mb-[29px] m" src="/src/assets/figma.png" alt="" />
			<span className="text-[30px] font-light text-secondary">{number}%</span>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
}
