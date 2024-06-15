import PropTypes from "prop-types"
import {CiMail} from "react-icons/ci"
import {useDispatch, useSelector} from "react-redux"
import {hoverChange} from "../app/theme"

const Button = ({text}) => {
	const {isHover} = useSelector((state) => state.theme)
	const dispatch = useDispatch()

	return (
		<button
			onMouseEnter={() => dispatch(hoverChange(true))}
			onMouseLeave={() => dispatch(hoverChange(false))}
			className="border-[1px] border-[#27e68a] mb-12 py-4 mx-10 rounded-custom bg-[#27e68a] group hover:bg-primary flex justify-center items-center gap-4 hover:transition-all hover:duration-300 hover:ease-in-out"
		>
			<CiMail size={30} color={`${isHover ? " #27e68a" : "#1f1f1f"}`} />
			<span className="font-Inter font-medium text-xl uppercase leading-3 tracking-wide group-hover:text-[#27e68a]">
				{text}
			</span>
		</button>
	)
}

export default Button

Button.propTypes = {text: PropTypes.string.isRequired}
