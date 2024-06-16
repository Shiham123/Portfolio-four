import PropTypes from "prop-types"
import {CiMail} from "react-icons/ci"
import {useDispatch, useSelector} from "react-redux"
import {hoverChange} from "../app/theme"
import {useEffect, useState} from "react"

const Button = ({text}) => {
	const {isHover} = useSelector((state) => state.theme)
	const dispatch = useDispatch()
	const [iconSize, setIconSize] = useState(30)

	useEffect(() => {
		if (window.innerWidth < 1525) {
			setIconSize(20)
		} else if (window.innerWidth > 1280) {
			setIconSize(30)
		}
	}, [])

	return (
		<button
			onMouseEnter={() => dispatch(hoverChange(true))}
			onMouseLeave={() => dispatch(hoverChange(false))}
			className="border-[1px] border-[#27e68a] 2xl:mb-12 xl:mb-6 2xl:py-4 xl:py-3 mx-10 rounded-custom bg-[#27e68a] group hover:bg-primary flex justify-center items-center gap-4 hover:transition-all hover:duration-300 hover:ease-in-out"
		>
			<CiMail size={iconSize} color={`${isHover ? " #27e68a" : "#1f1f1f"}`} />
			<span className="font-Inter font-medium 2xl:text-xl xl:text-[15px] uppercase leading-3 tracking-wide group-hover:text-[#27e68a]">
				{text}
			</span>
		</button>
	)
}

export default Button

Button.propTypes = {text: PropTypes.string.isRequired}
