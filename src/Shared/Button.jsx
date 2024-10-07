import PropTypes from "prop-types"
import {CiMail} from "react-icons/ci"
import {useDispatch, useSelector} from "react-redux"
import {hoverChange} from "../app/theme"

const Button = (props) => {
	const {text, btnType} = props
	const {isHover} = useSelector((state) => state.theme)
	const dispatch = useDispatch()

	return (
		<button
			type={btnType}
			onMouseEnter={() => dispatch(hoverChange(true))}
			onMouseLeave={() => dispatch(hoverChange(false))}
			className="border-[1px] border-[#27e68a] 2xl:mb-12 xl:mb-6 2xl:py-4 xl:py-3 lg:mb-8 lg:py-3 md:py-3 md:my-4 sm:py-4 sm:my-6 xs:my-6 xs:py-4 xxs:mx-[10px] xxs:my-[10px] xxs:py-2 rounded-custom xxs:rounded-[12px] bg-[#27e68a] group hover:bg-primary flex justify-center items-center gap-4 hover:transition-all hover:duration-300 hover:ease-in-out"
		>
			<CiMail size={30} color={`${isHover ? " #27e68a" : "#1f1f1f"}`} />
			<span className="font-Inter font-medium 2xl:text-xl xl:text-[15px] lg:text-lg md:text-lg sm:text-lg xs:text-lg uppercase leading-3 tracking-wide group-hover:text-[#27e68a]">
				{text}
			</span>
		</button>
	)
}

export default Button

Button.propTypes = {text: PropTypes.string.isRequired, btnType: PropTypes.string.isRequired}
