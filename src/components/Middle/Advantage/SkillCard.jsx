import PropTypes from "prop-types"

const SkillsCard = (props) => {
	const {number} = props
	return (
		<div className="border-[2px] border-primaryBorder flex flex-col justify-start items-center rounded-[85px] pt-[54px] pb-[48px] hover:border-secondary">
			<img src="/src/assets/figma.png" alt="" width={100} height={100} />
			<span className="text-[30px] font-light text-secondary">{number}%</span>
		</div>
	)
}

export default SkillsCard

SkillsCard.propTypes = {
	number: PropTypes.number.isRequired,
	Icon: PropTypes.element.isRequired,
}
